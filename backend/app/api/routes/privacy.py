from fastapi import APIRouter
from app.models.schemas import RedactionRequest, RedactionResponse
from app.services.privacy_redactor import redact_text

router = APIRouter(prefix="/privacy", tags=["privacy"])


@router.post("/redact", response_model=RedactionResponse)
def redact(payload: RedactionRequest):
    redacted, matches = redact_text(payload.text)
    return RedactionResponse(original=payload.text, redacted=redacted, matches=matches)
