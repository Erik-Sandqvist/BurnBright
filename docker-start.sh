#!/bin/bash
# Quick Start Script for Docker on Linux/Mac

echo "🔥 Building Burn Bright Docker image..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed"
    echo "Please install Docker from https://www.docker.com"
    exit 1
fi

# Build and run
echo "Starting containers..."
docker-compose up --build

echo ""
echo "✓ Burn Bright is running!"
echo ""
echo "Access the app:"
echo "  Frontend/Backoffice: https://localhost:7210"
echo "  API: https://localhost:7210/umbraco/delivery/api/v2/content"
echo ""
echo "To stop: Press Ctrl+C"
