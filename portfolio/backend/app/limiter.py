"""Per-IP rate limiting for the chat endpoint (in-memory, single process)."""

from fastapi import Request
from slowapi import Limiter
from slowapi.util import get_remote_address

# Burst limit and hourly budget. The hourly one is what protects the daily
# Gemini quota from a single visitor.
CHAT_LIMIT = "10/minute;50/hour"

# Much tighter: a real person sends one message, not twenty.
CONTACT_LIMIT = "3/hour;10/day"


def client_ip(request: Request) -> str:
    """Fly sets Fly-Client-IP and clients cannot forge it.

    Never trust X-Forwarded-For here: it is client-supplied, so a spoofed value
    would both bypass the limit and fill memory with fake keys.
    """
    return request.headers.get("Fly-Client-IP") or get_remote_address(request)


limiter = Limiter(key_func=client_ip)
