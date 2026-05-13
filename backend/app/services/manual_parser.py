from pathlib import Path
from typing import List, Dict, Any

try:
    from pypdf import PdfReader
except Exception:  # pragma: no cover
    PdfReader = None


def extract_pdf_text(path: str, max_pages: int = 6) -> str:
    if PdfReader is None:
        return ""
    reader = PdfReader(path)
    chunks = []
    for page in reader.pages[:max_pages]:
        chunks.append(page.extract_text() or "")
    return "\n".join(chunks)


def index_manuals(folder: str) -> List[Dict[str, Any]]:
    base = Path(folder)
    results = []
    for pdf in base.glob("*.pdf"):
        results.append({
            "file": pdf.name,
            "text_preview": extract_pdf_text(str(pdf), max_pages=2)[:2000],
        })
    return results
