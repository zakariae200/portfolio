"""POST /api/contact — contact form submissions."""

import logging
from typing import Annotated

from fastapi import APIRouter, HTTPException, Request, status
from pydantic import BaseModel, EmailStr, StringConstraints

from app.limiter import CONTACT_LIMIT, limiter
from app.services.email import send_contact_email

logger = logging.getLogger(__name__)

Name = Annotated[str, StringConstraints(strip_whitespace=True, min_length=1, max_length=100)]
Subject = Annotated[str, StringConstraints(strip_whitespace=True, min_length=1, max_length=150)]
Body = Annotated[str, StringConstraints(strip_whitespace=True, min_length=10, max_length=3000)]

router = APIRouter(prefix="/api", tags=["contact"])


class ContactRequest(BaseModel):
    name: Name
    email: EmailStr
    subject: Subject
    message: Body
    # Honeypot: real users never see this field, bots fill everything in.
    website: str = ""


class ContactResponse(BaseModel):
    sent: bool


@router.post("/contact", response_model=ContactResponse)
@limiter.limit(CONTACT_LIMIT)
async def contact(request: Request, payload: ContactRequest) -> ContactResponse:
    if payload.website:
        # Pretend it worked so the bot does not learn to adapt.
        logger.info("Honeypot triggered, dropping submission")
        return ContactResponse(sent=True)

    try:
        message_id = send_contact_email(
            payload.name, str(payload.email), payload.subject, payload.message
        )
    except Exception as exc:  # noqa: BLE001 — Resend raises several types
        logger.exception("Resend failed to send the contact email")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Could not send your message right now. Please try again shortly.",
        ) from exc

    logger.info("Contact email sent (id=%s)", message_id)
    return ContactResponse(sent=True)
