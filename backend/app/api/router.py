from fastapi import APIRouter
from .routes.health import router as health_router
from .routes.fleet import router as fleet_router
from .routes.privacy import router as privacy_router
from .routes.diagnostics import router as diagnostics_router
from .routes.manuals import router as manuals_router # <-- Imported here

api_router = APIRouter(prefix="/api")

api_router.include_router(health_router)
api_router.include_router(fleet_router)
api_router.include_router(privacy_router)
api_router.include_router(diagnostics_router)
api_router.include_router(manuals_router, prefix="/manuals", tags=["manuals"]) # <-- Included here