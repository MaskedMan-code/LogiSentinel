from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os
from app.services.gemini_service import FleetIntelligenceAgent

router = APIRouter()

UPLOAD_DIR = "data/uploads"

@router.post("/upload")
async def upload_fleet_manual(file: UploadFile = File(...)):
    os.makedirs(UPLOAD_DIR, exist_ok=True)
    file_location = os.path.join(UPLOAD_DIR, file.filename)
    
    try:
        with open(file_location, "wb+") as file_object:
            shutil.copyfileobj(file.file, file_object)
            
        gemini_file = FleetIntelligenceAgent.index_manual(
            file_path=file_location, 
            display_name=file.filename
        )
        
        return {
            "status": "success",
            "filename": file.filename,
            "gemini_uri": gemini_file.uri,
            "message": "Manual successfully indexed and ready for AI Diagnostics."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))