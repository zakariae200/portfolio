"""Application settings, loaded from environment variables or a local .env file."""

from functools import lru_cache
from pathlib import Path
from typing import Annotated

from pydantic import EmailStr, field_validator
from pydantic_settings import BaseSettings, NoDecode, SettingsConfigDict

# portfolio/backend — resolved from this file so the .env is found no matter
# which directory the process was started from.
BACKEND_DIR = Path(__file__).resolve().parent.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=BACKEND_DIR / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # No default: startup fails loudly if the key is missing.
    gemini_api_key: str
    gemini_model: str = "gemini-3.5-flash-lite"

    # Contact form. Until a domain is verified with Resend, the only allowed
    # sender is onboarding@resend.dev and the only allowed recipient is the
    # address the Resend account was created with.
    resend_api_key: str
    contact_to_email: EmailStr
    contact_from_email: str = "Portfolio <onboarding@resend.dev>"

    # Browser origins allowed to call this API. Comma-separated in .env.
    # NoDecode stops pydantic-settings from trying to JSON-parse the value,
    # so the validator below receives the raw string.
    allowed_origins: Annotated[list[str], NoDecode] = ["http://localhost:3000"]

    @field_validator("allowed_origins", mode="before")
    @classmethod
    def split_origins(cls, value: object) -> object:
        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value


@lru_cache
def get_settings() -> Settings:
    """Cached so the .env is read once and reused across requests."""
    return Settings()
