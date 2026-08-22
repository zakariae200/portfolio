"""Sends contact-form submissions to the site owner via Resend."""

import html
import logging

import resend

from app.config import get_settings

logger = logging.getLogger(__name__)


def _render(name: str, email: str, subject: str, message: str) -> str:
    """Escape everything — the visitor controls all four values."""
    return (
        f"<p><strong>{html.escape(name)}</strong> "
        f"(&lt;{html.escape(email)}&gt;) wrote:</p>"
        f"<p><em>{html.escape(subject)}</em></p>"
        f"<blockquote>{html.escape(message)}</blockquote>"
    )


def send_contact_email(name: str, email: str, subject: str, message: str) -> str:
    """Send one notification. Returns the Resend message id.

    Raises whatever the Resend SDK raises — the caller maps it to a response.
    """
    settings = get_settings()
    resend.api_key = settings.resend_api_key

    sent = resend.Emails.send(
        {
            "from": settings.contact_from_email,
            "to": [str(settings.contact_to_email)],
            # Replying in the mail client goes straight to the visitor, even
            # though the message was sent by us.
            "reply_to": [email],
            "subject": f"Portfolio: {subject} — from {name}",
            "html": _render(name, email, subject, message),
        }
    )
    return sent.get("id", "")
