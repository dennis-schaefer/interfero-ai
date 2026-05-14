# Interfero — Feature Overview

---

## Must-Have (V1)

### Authentication & User Management
- **Initial Admin Setup** — Initialer Admin-Benutzer wird beim ersten Start über Umgebungsvariablen (`INTERFERO_ADMIN_USERNAME`, `INTERFERO_ADMIN_PASSWORD`) erstellt und in der DB gespeichert
- **User Management** — Weitere Benutzer können nach dem ersten Start über die UI angelegt und verwaltet werden
- **JWT Authentication** — Stateless JWT-basierte Authentifizierung für alle Interfero-Nutzer

### Secret & Credential Management
- **Secret Key Management** — AES-256-Verschlüsselung sensibler Daten; Key via `INTERFERO_SECRET_KEY` (Priorität) oder auto-generiert in `/data/interfero.key`; bei gesetzter Env-Variable wird die Key-Datei automatisch gelöscht
- **Encrypted Cluster Credentials** — Alle sensitiven Pulsar-Verbindungsdaten (JWT Tokens, OAuth2 Secrets) werden verschlüsselt in der DB gespeichert

### Pulsar Cluster Management
- **Multi-Cluster Support** — Mehrere Pulsar-Cluster-Verbindungen anlegen, bearbeiten und löschen; Wechsel zwischen Clustern in der UI
- **Pulsar Authentication** — Unterstützung für drei Auth-Mechanismen beim Verbinden zu Pulsar-Clustern: Kein Auth, JWT Token, OAuth2
- **Geo-Replication Management** — Verwaltung von Cluster-Beziehungen und Replikations-Policies zwischen Clustern (Apache Pulsar Geo-Replication Feature)

### Topic Message Persistence
- **Topic Subscription** — Benutzer können einzelne Topics auswählen, die Interfero dauerhaft abonniert und deren Nachrichten kontinuierlich persistiert
- **Message Viewer** — Persistierte Nachrichten eines Topics können über die UI durchsucht und angesehen werden
- **Retention Policy** — Konfigurierbare Aufbewahrungsrichtlinie pro Topic (max. Anzahl Tage oder max. Anzahl Nachrichten); Pflicht bei H2 und Standard-PostgreSQL

### Infrastructure
- **Database Flexibility** — Unterstützung für H2 (Quick-Start, embedded), PostgreSQL (Standard) und TimescaleDB (empfohlen für Produktion)
- **TimescaleDB Hypertables** — Automatische zeitbasierte Partitionierung für die Nachrichten-Tabelle bei TimescaleDB-Betrieb
- **Real-time Updates** — SSE (Server-Sent Events) für Live-Aktualisierungen im Frontend (z.B. Cluster-Status, eingehende Nachrichten)
- **Single Container Deployment** — Auslieferung als einzelner Docker-Container mit `/data`-Volume für DB und Key-Datei

---

## Later (V2+)

### Authentication
- **OAuth2 Login für Interfero-Nutzer** — Unterstützung externer Identity Provider (z.B. Keycloak, GitHub) als Alternative zur internen User-Verwaltung

### Key Management
- **Re-Key-Funktion** — Migration aller verschlüsselten Credentials von einem alten auf einen neuen Secret Key (erfordert Kenntnis des alten Keys)
- **HashiCorp Vault Integration** — Optionaler externer Key-Provider für Enterprise-Deployments

### Pulsar Features
- **Topic Management** — Topics anlegen, löschen und konfigurieren (Partitionen, Retention, TTL)
- **Namespace & Tenant Management** — Verwaltung von Tenants und Namespaces eines Pulsar-Clusters
- **Subscription Monitoring** — Übersicht über aktive Subscriptions und Consumer-Gruppen pro Topic
- **Consumer Lag Monitoring** — Echtzeit-Anzeige des Rückstands (Lag) einzelner Subscriptions
- **Schema Registry** — Anzeige und Verwaltung von Schemas zu Topics
- **Message Producer** — Nachrichten manuell in ein Topic schreiben (für Debugging-Zwecke)

### Storage
- **S3 / Object Storage Export** — Export persistierter Nachrichten in S3-kompatiblen Storage (z.B. MinIO) als Cold-Storage oder Archiv-Funktion
