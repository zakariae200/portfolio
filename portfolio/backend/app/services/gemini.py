"""Gemini client: one place that talks to the model."""

from collections.abc import Mapping, Sequence
from functools import lru_cache

from google import genai
from google.genai import types

from app.config import get_settings
from app.prompt import get_system_prompt

# Keeps replies short and the quota healthy.
MAX_OUTPUT_TOKENS = 600

# Gemini 3 models ship with safety filters OFF by default, so we turn them on
# explicitly. This is the main defence against the bot being goaded into saying
# something embarrassing on a portfolio site.
SAFETY_SETTINGS = [
    types.SafetySetting(category=category, threshold=types.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE)
    for category in (
        types.HarmCategory.HARM_CATEGORY_HARASSMENT,
        types.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        types.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        types.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    )
]


@lru_cache
def get_client() -> genai.Client:
    """One client for the whole app — it holds a connection pool worth reusing."""
    return genai.Client(api_key=get_settings().gemini_api_key)


async def generate_reply(turns: Sequence[Mapping[str, str]]) -> str:
    """Send the conversation to Gemini and return the reply text.

    `turns` is an ordered list of {"role": "user"|"assistant", "content": str}.
    Raises google.genai.errors.APIError (ClientError on 4xx, ServerError on
    5xx) — the caller decides how to turn that into an HTTP response.
    """
    settings = get_settings()

    # Gemini names the assistant role "model", not "assistant".
    contents = [
        types.Content(
            role="model" if turn["role"] == "assistant" else "user",
            parts=[types.Part.from_text(text=turn["content"])],
        )
        for turn in turns
    ]

    response = await get_client().aio.models.generate_content(
        model=settings.gemini_model,
        contents=contents,
        config=types.GenerateContentConfig(
            system_instruction=get_system_prompt(),
            max_output_tokens=MAX_OUTPUT_TOKENS,
            thinking_config=types.ThinkingConfig(thinking_level="MINIMAL"),
            safety_settings=SAFETY_SETTINGS,
        ),
    )
    return response.text or ""
