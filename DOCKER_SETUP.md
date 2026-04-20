# Docker Setup for Burn Bright

This document explains how to run Burn Bright in Docker.

## Quick Start

### Build and Run
```bash
docker-compose up --build
```

The app will be available at:
- **Frontend/Backoffice**: https://localhost:7210
- **Delivery API**: https://localhost:7210/umbraco/delivery/api/v2/content
- **Media**: https://localhost:7210/media/

## Architecture

The Docker setup uses a **multi-stage build**:

1. **Frontend Stage**: Node.js builds the Vite React app
2. **Backend Stage**: .NET SDK compiles the Umbraco project
3. **Runtime Stage**: ASP.NET Core container runs both frontend (in wwwroot) and backend

This means:
- Single container runs everything
- Frontend is built once and served by Umbraco
- No separate dev server needed
- Database persists via Docker volumes

## Data Persistence

The following are mounted as volumes so they persist between container restarts:

```
./BurnBright.Umbraco/umbraco/Data    → /app/umbraco/Data     (SQLite database)
./BurnBright.Umbraco/umbraco/media   → /app/umbraco/media    (Media files)
```

### Copy Database from Another Machine

If you have products/content on another machine:

1. Stop the container: `docker-compose down`
2. Copy the SQLite database from the other machine:
   ```bash
   # On the source machine
   copy BurnBright.Umbraco\umbraco\Data\Umbraco.sqlite.db C:\backup\

   # On this machine
   copy C:\backup\Umbraco.sqlite.db BurnBright.Umbraco\umbraco\Data\
   ```
3. Restart: `docker-compose up`

## HTTPS Certificate

The container uses self-signed HTTPS. If you get certificate warnings:

### On Windows (when running locally for testing)
- The certificate is generated automatically by .NET
- Accept the warning or import the cert into your trust store

### For Production
- Mount a proper certificate: Update `docker-compose.yml` with your cert path
- Set the password in the environment variable

## Development vs Production

### Development (Local)
```bash
docker-compose up --build
```
- Rebuilds on every run
- Good for testing the final production build

### Production
```bash
docker build -t burnbright:latest .
docker run -d \
  -p 7210:7210 \
  -v ./BurnBright.Umbraco/umbraco/Data:/app/umbraco/Data \
  -v ./BurnBright.Umbraco/umbraco/media:/app/umbraco/media \
  --name burnbright \
  burnbright:latest
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs burnbright

# Rebuild from scratch
docker-compose down --remove-orphans
docker system prune -a
docker-compose up --build
```

### Database permission errors
- Ensure `BurnBright.Umbraco/umbraco/Data/` folder exists
- Check folder permissions on your host machine
- Try: `docker-compose up --build`

### HTTPS certificate errors
- These are normal for self-signed certs
- In your browser, click "Advanced" → "Proceed to localhost:7210"
- For API requests, use `insecure: true` in fetch options (like Vite proxy does)

## Local Development (Non-Docker)

If you prefer to run locally without Docker:

### Backend
```bash
cd BurnBright.Umbraco
dotnet run
# Runs on https://localhost:7210
```

### Frontend
```bash
npm install
npm run dev
# Runs on http://localhost:5173
# Proxies /umbraco/* to https://localhost:7210
```

The Vite dev server proxy handles the frontend-to-backend communication.

## Volumes Explained

### Why volumes for data and media?

Without volumes:
- Database resets every container restart ❌
- Media files are lost ❌
- Changes don't persist between runs ❌

With volumes:
- Database persists on host machine ✅
- Media files persist ✅
- Data survives container restarts ✅
- Can be backed up/copied easily ✅

## Performance Notes

- First build: ~2-3 minutes (installs npm + builds .NET)
- Subsequent builds: ~1 minute (uses Docker layer caching)
- Container startup: ~10-15 seconds
- Frontend is pre-built (no dev server overhead)

## Next Steps

1. Run: `docker-compose up --build`
2. Visit: https://localhost:7210
3. Log in to Umbraco with your credentials
4. Check products in Content section
5. They should appear on the frontend

If products don't appear, check the database in volumes or copy from the other machine.
