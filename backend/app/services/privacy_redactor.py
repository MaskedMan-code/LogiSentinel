import re
import yaml
from pathlib import Path
from typing import List, Tuple


DEFAULT_PATTERNS = {
    "phone": (r"(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}", "[REDACTED_PHONE]"),
    "email": (r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}", "[REDACTED_EMAIL]"),
    "home_address": (r"\b\d{1,5}\s+[A-Za-z0-9.\-\s]+\s+(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Boulevard|Ln|Lane|Dr|Drive|Ct|Court|Way|Ter|Terrace)\b", "[REDACTED_ADDRESS]"),
    "employee_id": (r"\b(?:EMP|DRV|ID)-?\d{3,8}\b", "[REDACTED_ID]"),
}


def load_patterns(config_path: str | None = None):
    patterns = DEFAULT_PATTERNS.copy()
    if config_path and Path(config_path).exists():
        raw = yaml.safe_load(Path(config_path).read_text(encoding="utf-8")) or {}
        for key, value in (raw.get("patterns") or {}).items():
            patterns[key] = (value["regex"], value["replacement"])
    return patterns


def redact_text(text: str, config_path: str | None = None) -> Tuple[str, List[str]]:
    patterns = load_patterns(config_path)
    matches: List[str] = []
    redacted = text
    for name, (pattern, replacement) in patterns.items():
        found = re.findall(pattern, redacted)
        if found:
            matches.extend([f"{name}:{x}" for x in found])
            redacted = re.sub(pattern, replacement, redacted)
    return redacted, matches
class PrivacyShield:
    @staticmethod
    def redact_pii(text: str) -> str:
        # 1. Redact Phone Numbers (e.g., 555-123-4567)
        text = re.sub(r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b', '[REDACTED PHONE]', text)
        
        # 2. Redact Emails
        text = re.sub(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', '[REDACTED EMAIL]', text)
        
        # 3. Hackathon Demo Specific: Redact a specific driver's name for your live pitch
        text = text.replace("John Doe", "[REDACTED DRIVER NAME]")
        
        return text