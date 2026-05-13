#!/usr/bin/env bash
set -euo pipefail

echo "Backend:"
cd backend
python -m venv .venv || true
echo "Activate the virtual environment and run: pip install -r requirements.txt"

echo "Frontend:"
cd ../frontend
echo "Run: npm install"
