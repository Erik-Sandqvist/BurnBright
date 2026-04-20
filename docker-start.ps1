# Quick Start Script for Docker on Windows

Write-Host "Building Burn Bright Docker image..." -ForegroundColor Cyan

# Check if Docker is installed
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "Error: Docker is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Docker Desktop from https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

# Check if docker-compose is available
if (-not (Get-Command docker-compose -ErrorAction SilentlyContinue)) {
    Write-Host "Warning: docker-compose not found, trying 'docker compose' (new syntax)..." -ForegroundColor Yellow
    $useCompose = $true
} else {
    $useCompose = $false
}

# Determine compose command
$composeCmd = if ($useCompose) { "docker compose" } else { "docker-compose" }

# Build and run
Write-Host "Starting containers..." -ForegroundColor Cyan
& $composeCmd up --build

Write-Host ""
Write-Host "✓ Burn Bright is running!" -ForegroundColor Green
Write-Host ""
Write-Host "Access the app:" -ForegroundColor Cyan
Write-Host "  Frontend/Backoffice: https://localhost:7210" -ForegroundColor White
Write-Host "  API: https://localhost:7210/umbraco/delivery/api/v2/content" -ForegroundColor White
Write-Host ""
Write-Host "To stop: Press Ctrl+C" -ForegroundColor Gray
