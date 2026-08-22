"""POST /api/chat — ask the assistant a question."""

import logging
from typing import Annotated, Literal

from fastapi import APIRouter, HTTPException, Request, status
from google.genai import errors
from pydantic import BaseModel, Field, StringConstraints, field_validator

from app.limiter import CHAT_LIMIT, limiter
from app.services.gemini import generate_reply

logger = logging.getLogger(__name__)

MAX_MESSAGE_CHARS = 2000
MAX_HISTORY = 20

# Trimmed first, then length-checked, so "   " is rejected as empty.
Content = Annotated[
    str,
    StringConstraints(strip_whitespace=True, min_length=1, max_length=MAX_MESSAGE_CHARS),
]

router = APIRouter(prefix="/api", tags=["chat"])

# Shown to visitors. Deliberately vague — upstream detail goes to the logs, not
# to the browser.
UPSTREAM_UNAVAILABLE = "The assistant is unavailable right now. Please try again shortly."


class Turn(BaseModel):
    role: Literal["user", "assistant"]
    content: Content


class ChatRequest(BaseModel):
    # Capped so a client cannot push an unbounded history into the prompt.
    messages: Annotated[list[Turn], Field(min_length=1, max_length=MAX_HISTORY)]

    @field_validator("messages")
    @classmethod
    def must_end_with_user(cls, turns: list[Turn]) -> list[Turn]:
        if turns[-1].role != "user":
            raise ValueError("the last message must come from the user")
        return turns


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat", response_model=ChatResponse)
@limiter.limit(CHAT_LIMIT)
async def chat(request: Request, payload: ChatRequest) -> ChatResponse:
    # `request` is unused here but slowapi requires it in the signature.
    turns = [turn.model_dump() for turn in payload.messages]

    try:
        reply = await generate_reply(turns)

    except errors.ClientError as exc:
        # 429 is the one a visitor can legitimately cause: we are out of quota.
        if exc.code == status.HTTP_429_TOO_MANY_REQUESTS:
            logger.warning("Gemini quota exhausted")
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="The assistant is busy right now. Please try again in a moment.",
            ) from exc
        # Anything else 4xx is our bug (bad key, malformed request).
        logger.exception("Gemini rejected the request")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY, detail=UPSTREAM_UNAVAILABLE
        ) from exc

    except errors.ServerError as exc:
        logger.exception("Gemini server error")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY, detail=UPSTREAM_UNAVAILABLE
        ) from exc

    if not reply:
        # Safety filter or truncation left us with nothing to send.
        logger.warning("Gemini returned an empty reply")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="The assistant could not answer that. Please try rephrasing.",
        )

    return ChatResponse(reply=reply)
