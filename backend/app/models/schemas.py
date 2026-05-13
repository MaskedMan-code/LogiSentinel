from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field


class HealthResponse(BaseModel):
    status: str = "ok"
    service: str


class FleetRecord(BaseModel):
    fleet_name: str
    vehicle_id: str
    vehicle_model: str
    vehicle_year: int
    vehicle_type: str
    driver_name: str
    driver_phone: str
    driver_home_address: str
    last_service_date: str
    current_mileage: int
    manual_title: str
    manual_section: str
    error_code: str
    issue_summary: str
    priority: str


class RedactionRequest(BaseModel):
    text: str


class RedactionResponse(BaseModel):
    original: str
    redacted: str
    matches: List[str] = Field(default_factory=list)


class DiagnosticRequest(BaseModel):
    question: str
    vehicle_id: Optional[str] = None
    manual_title: Optional[str] = None
    file_uri: str | None = None


class DiagnosticResponse(BaseModel):
    answer: str
    model: str
    sources: List[str] = Field(default_factory=list)
    metadata: Dict[str, Any] = Field(default_factory=dict)
