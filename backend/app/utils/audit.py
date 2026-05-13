import logging
from datetime import datetime, timezone

logger = logging.getLogger("audit")


def log_event(action: str, details: dict) -> None:
    payload = {
        "ts": datetime.now(timezone.utc).isoformat(),
        "action": action,
        "details": details,
    }
    logger.info(payload)
