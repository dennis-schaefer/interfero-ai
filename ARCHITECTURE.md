# Interfero — Architecture

## Repository Structure

```
interfero-ai/
├── backend/        # Spring Boot application (pom.xml, src/)
├── frontend/       # React + Vite application
├── design-system/  # Astro component documentation (standalone)
└── Dockerfile      # Multi-stage Docker build
```

---

## Backend

### Runtime & Framework
- Java 25 (LTS)
- Spring Boot 4.x
- Spring Modulith (module-based architecture)
- Base package: `io.interfero`

### Initial Modules
| Module | Responsibility |
|---|---|
| `cluster` | Pulsar cluster connections, Geo-Replication management |
| `security` | Authentication, authorization, user management |
| `shared` | Common types, exceptions, utilities |

### Data Access
- Spring Data JDBC (`ListCrudRepository` as default)
- `JdbcClient` for complex queries requiring JOINs
- Liquibase (YAML changesets) for schema migrations

### API
- REST for all CRUD operations — versioned under `/api/v1/`
- SSE (Server-Sent Events) for real-time updates to the frontend
- OpenAPI spec auto-generated via `springdoc-openapi`

### Build
- Maven
- `frontend-maven-plugin` compiles the frontend (`../frontend`) and places output into `src/main/resources/static` before JAR packaging

---

## Frontend

### Stack
- TypeScript + React + Vite
- Node 24 (LTS)
- shadcn/ui (component library, defined in `design-system/`)

### Key Libraries
| Library | Purpose |
|---|---|
| TanStack Router | Type-safe client-side routing |
| TanStack Query | Server state management |
| Zustand | Minimal client state (e.g. selected cluster, UI state) |
| Orval | Generates TypeScript API clients + TanStack Query hooks from OpenAPI spec |

### SPA Routing
- Spring Boot serves `index.html` as fallback for all non-API requests

---

## Database

### Supported Variants
| Variant | Use Case |
|---|---|
| H2 (embedded) | Quick-start, zero infrastructure |
| PostgreSQL | Standard self-hosted deployment |
| TimescaleDB | Recommended for production (high message volume) |

- Active variant selected via JDBC driver configuration
- DB-specific Liquibase changesets where necessary (e.g. TimescaleDB DDL)

### Message Persistence
- Users can subscribe Interfero to specific Pulsar topics; messages are continuously consumed and persisted
- TimescaleDB: hypertable with automatic time-based partitioning (recommended)
- H2 / PostgreSQL: standard table with mandatory retention policy (max days or max messages per topic)
- Designed for millions of messages (continuous monitoring use case)

### Schema: Messages Table
Columns: `topic`, `partition`, `offset`, `timestamp`, `payload`

---

## Security

### User Management
- Built-in user management (username + password, stored in DB)
- Initial admin user created on first start via environment variables (`INTERFERO_ADMIN_USERNAME`, `INTERFERO_ADMIN_PASSWORD`)
- Additional users can be created via the UI afterwards
- Session-based authentication via Spring Security (server-side in-memory sessions; can be upgraded to Spring Session + JDBC later)
- OAuth2 support planned for a future version

### Sensitive Credential Encryption
- Pulsar cluster credentials (JWT tokens, OAuth2 secrets, etc.) stored AES-256 encrypted
- Key management priority order on startup:
  1. `INTERFERO_SECRET_KEY` env variable → use it, delete `/data/interfero.key` if it exists
  2. `/data/interfero.key` exists → read key from file
  3. Neither present → generate key, write to `/data/interfero.key`, log prominent warning

---

## Pulsar Cluster Management

### Multi-Cluster Support
- Multiple Pulsar cluster connections manageable within one Interfero instance
- Cluster connection data stored in DB (encrypted where sensitive)
- Geo-Replication management between clusters

### Supported Pulsar Authentication Methods
- No Auth (local/dev clusters)
- JWT Token
- OAuth2

---

## Spring Profiles

### Profile Structure
```
application.yml               # Shared base config (port, app name, profile groups)
application-dev.yml           # Dev: CORS, verbose logging, all Actuator endpoints
application-prod.yml          # Prod: JSON structured logging, only /health exposed
application-dev-h2.yml        # H2 datasource (default for dev)
application-dev-postgres.yml  # PostgreSQL datasource for local dev
application-dev-timescale.yml # TimescaleDB datasource for local dev
```

### Activation
| Command | Active Config |
|---|---|
| `./mvnw spring-boot:run` | `dev` + `dev-h2` (default via profile group) |
| `SPRING_PROFILES_ACTIVE=dev,dev-postgres` | `dev` + PostgreSQL |
| `SPRING_PROFILES_ACTIVE=dev,dev-timescale` | `dev` + TimescaleDB |
| `SPRING_PROFILES_ACTIVE=prod` | Production (DB via env vars) |

### Key Differences per Profile

| Setting | `dev` | `prod` |
|---|---|---|
| Database | H2 / PostgreSQL / TimescaleDB (profile-selectable) | Via `SPRING_DATASOURCE_*` env vars |
| Logging format | Human-readable, DEBUG level, SQL queries visible | JSON structured, INFO level |
| CORS | `localhost:5173` always allowed | Only via `INTERFERO_CORS_ORIGINS` |
| Actuator endpoints | All exposed | Only `/health` exposed |
| Secret Key warning | Logged if not set | Logged if not set |

---

## CORS

- **Dev profile:** `http://localhost:5173` always permitted (Vite dev server)
- **All profiles:** `INTERFERO_CORS_ORIGINS` env variable (comma-separated) allows additional origins — intended for reverse-proxy setups in production
- No `INTERFERO_CORS_ORIGINS` set + prod profile = CORS fully blocked (default secure)

---

## CI/CD

### Workflows

**`ci.yml`** — triggered on every Pull Request to `main`

Three parallel jobs:
| Job | Command | Notes |
|---|---|---|
| `frontend` | `npm test` (Vitest) + `npm run build` | Validates build + unit tests |
| `unit-tests` | `./mvnw test` (Surefire) | Fast, no Spring context, no Testcontainers |
| `integration-tests` | `./mvnw verify -DskipUnitTests` (Failsafe) | Testcontainers (PostgreSQL, TimescaleDB); Docker available on GitHub-hosted runners natively |

- Unit tests: `*Test.java` (Surefire)
- Integration tests: `*IT.java` (Failsafe)
- Per-module matrix parallelization deferred until 4+ modules with expensive integration tests exist

**`release.yml`** — triggered on Git tags (`v*.*.*`)

- Builds Docker image via multi-stage Dockerfile
- Pushes to `ghcr.io/[org]/interfero` with version tag + `latest`

---

## Deployment

### Docker Image
- Multi-stage Dockerfile:
  - Stage 1: `node:24-alpine` → `vite build`
  - Stage 2: `maven:3.9-eclipse-temurin-25-alpine` → `mvn package`
  - Stage 3: `eclipse-temurin:25-jre-alpine` → runtime
- Single container, single JAR
- `/data` declared as Docker VOLUME (persists DB files + key file)
- Exposed port: `8080` (configurable via `SERVER_PORT`)

---

## Testing

### Backend
- JUnit 5
- Testcontainers (PostgreSQL, TimescaleDB) — no in-memory DB hacks in integration tests
- `@ApplicationModuleTest` (Spring Modulith) — isolated module tests + architecture constraint verification
- MockMvc / WebTestClient — REST endpoint tests incl. SSE

### Frontend
- Vitest + React Testing Library — unit and component tests
- MSW (Mock Service Worker) — API mocking; mocks auto-generated by Orval

### Visual UI Testing
- Playwright used as a development tool for visual comparison against UI mockups
- Coding agent receives mockup image, captures screenshot via Playwright, iterates until match
- No explicit E2E test suite in CI pipeline
