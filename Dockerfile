FROM node:24-alpine AS frontend-build
WORKDIR /workspace/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM maven:3.9-eclipse-temurin-25-alpine AS backend-build
WORKDIR /workspace/backend
COPY backend/ ./
COPY --from=frontend-build /workspace/frontend/dist ./src/main/resources/static/
RUN mvn package -DskipTests -P skip-frontend

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
COPY --from=backend-build /workspace/backend/target/*.jar app.jar
ENV SPRING_PROFILES_ACTIVE=prod
VOLUME /data
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]