import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded

from app.config import get_settings
from app.limiter import limiter
from app.prompt import get_system_prompt
from app.routers import chat, contact

logger = logging.getLogger(__name__)

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Build the prompt once, at startup. A missing or malformed cv.md then
    # fails the deploy instead of the first visitor's question.
    prompt = get_system_prompt()
    logger.info("System prompt ready (%d chars)", len(prompt))
    yield


app = FastAPI(title="Portfolio API", lifespan=lifespan)

# Rate limiting. /health is intentionally not limited — Fly polls it for
# liveness checks and would restart the app if those started returning 429.
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Only these browser origins may read responses from this API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)

app.include_router(chat.router)
app.include_router(contact.router)


@app.get("/health")
async def health():
    return {"status": "ok"}
