# Matches the Python the app was developed and tested against.
FROM python:3.12-slim

# Bytecode caching off, unbuffered logs so Fly sees output immediately.
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /code

# Requirements first: this layer is cached and skipped whenever only app code changes.
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# Application code and the pre-generated CV. cv.md is committed, so no PDF
# tooling is needed at runtime or build time.
COPY app ./app
COPY data ./data

# Drop privileges: nothing here needs root.
RUN useradd --create-home --uid 1000 appuser && chown -R appuser:appuser /code
USER appuser

EXPOSE 8000

# Exec form, so SIGTERM reaches the process and the lifespan shutdown runs.
# Single worker on purpose: the rate limiter keeps its counters in memory, so
# N workers would silently multiply every limit by N.
# --proxy-headers: Fly terminates TLS and forwards the real client IP.
CMD ["fastapi", "run", "app/main.py", "--port", "8000", "--proxy-headers"]
