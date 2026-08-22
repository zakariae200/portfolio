"""Loads the system prompt template and injects the CV into it.

The prose lives in system_prompt.md so it can be edited without touching code.
This module only handles loading, validation and caching.
"""

from functools import lru_cache
from pathlib import Path

APP_DIR = Path(__file__).resolve().parent
BACKEND_DIR = APP_DIR.parent

TEMPLATE_PATH = APP_DIR / "system_prompt.md"
CV_PATH = BACKEND_DIR / "data" / "cv.md"

# Spotlighting (OWASP LLM01 #6): the CV sits inside an explicit fence and is
# named as data, so instructions hidden inside it are not obeyed. These must
# match the markers in system_prompt.md — checked at load time.
CV_OPEN = "<<<CV_DATA_START>>>"
CV_CLOSE = "<<<CV_DATA_END>>>"
CV_PLACEHOLDER = "{{CV}}"


@lru_cache
def get_system_prompt() -> str:
    """Read template + CV once and render. Cached for the process lifetime."""
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    cv = CV_PATH.read_text(encoding="utf-8").strip()

    # Catch drift between this module and the markdown template.
    for marker in (CV_OPEN, CV_CLOSE, CV_PLACEHOLDER):
        if marker not in template:
            raise ValueError(f"{TEMPLATE_PATH.name} is missing {marker}")

    # A CV containing the fence markers could break out of the data block.
    if CV_OPEN in cv or CV_CLOSE in cv:
        raise ValueError(f"{CV_PATH.name} must not contain the CV fence markers")

    # str.replace, not str.format: the prompt and the CV may contain literal
    # braces, which .format() would try to interpret as fields.
    return template.replace(CV_PLACEHOLDER, cv)
