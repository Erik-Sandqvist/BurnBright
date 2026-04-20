# Multi-stage build: Backend (Umbraco) and Frontend (Vite)

# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY src ./src
COPY public ./public
COPY index.html eslint.config.js jsconfig.json vite.config.js components.json ./


# Build
RUN npm run build

# Stage 2: Build Backend
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS backend-builder
WORKDIR /app/backend

# Copy solution and project files
COPY BurnBright.sln ./
COPY BurnBright.Umbraco ./BurnBright.Umbraco/

# Restore and build
RUN dotnet restore
RUN dotnet publish -c Release -o /app/publish

# Stage 3: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app

# Copy published backend
COPY --from=backend-builder /app/publish .

# Copy built frontend to wwwroot (so Umbraco serves it)
COPY --from=frontend-builder /app/frontend/dist ./wwwroot

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD dotnet --version || exit 1

# Expose port
EXPOSE 7210

# Run
ENTRYPOINT ["dotnet", "BurnBright.Umbraco.dll"]
