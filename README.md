# Secure Fleet Intelligence Agent

A hackathon starter repo for a privacy-safe fleet diagnostics platform with:
- Enterprise dashboard
- Driver interface
- FastAPI backend
- Gemini proxy layer
- Privacy redaction and rate limiting
- Operational Premium UI direction

## Structure
- `backend/` FastAPI app and service layer
- `frontend/` React + Vite + TypeScript UI
- `data/` sample fleet data
- `manuals/` manual drop-in location
- `configs/` policy and redaction config
- `docs/` architecture and UX notes
- `scripts/` helper scripts
- `tests/` starter tests

## Quick start

### Backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs on `http://localhost:5173` and backend on `http://localhost:8000`.

## Notes
- Put your real Gemini API key only in `backend/.env`
- Keep the frontend API key field empty
- Drop service manuals into `manuals/` if needed
- The sample fleet CSV is already included in `data/`

## What to build next
1. Real auth and role-based access
2. Persistent database tables
3. Upload flow for manuals
4. Citations from manual chunks
5. Better audit logs
6. Production rate limiting
7. Export/PDF report generation
