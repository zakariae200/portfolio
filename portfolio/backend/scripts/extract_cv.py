from pathlib import Path

import pymupdf4llm

BACKEND_DIR = Path(__file__).resolve().parent.parent
PDF_PATH = BACKEND_DIR / "data" / "cv.pdf"
MD_PATH = BACKEND_DIR / "data" / "cv.md"

md_text = pymupdf4llm.to_markdown(PDF_PATH)

Path(MD_PATH).write_text(md_text, encoding="utf-8")