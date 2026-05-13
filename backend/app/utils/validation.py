import re


def is_safe_filename(name: str) -> bool:
    return bool(re.fullmatch(r"[A-Za-z0-9._-]+", name))


def ensure_non_empty(value: str, fallback: str = "") -> str:
    value = (value or "").strip()
    return value if value else fallback
