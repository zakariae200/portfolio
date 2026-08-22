# Portfolio backend

FastAPI service behind the portfolio: a CV-grounded chat assistant and the
contact form.

## Run locally

```bash
python -m venv .venv
.venv/Scripts/activate          # Windows
pip install -r requirements.txt
fastapi dev app/main.py         # http://127.0.0.1:8000
```

The React app proxies `/api` to port 8000, so start this before `npm start`.

## Environment

Create a `.env` in this directory. It is gitignored — never commit it.

| Variable | Required | Default |
| --- | --- | --- |
| `GEMINI_API_KEY` | yes | — |
| `RESEND_API_KEY` | yes | — |
| `CONTACT_TO_EMAIL` | yes | — |
| `GEMINI_MODEL` | no | `gemini-3.5-flash-lite` |
| `CONTACT_FROM_EMAIL` | no | `Portfolio <onboarding@resend.dev>` |
| `ALLOWED_ORIGINS` | no | `http://localhost:3000` (comma-separated) |

Missing a required variable fails at startup rather than on the first
request. In production these come from the platform's secret store, which
takes precedence over `.env`.

## Updating the CV

The assistant answers only from `data/cv.md`, generated from the PDF:

```bash
pip install -r requirements-dev.txt
python scripts/extract_cv.py     # data/cv.pdf -> data/cv.md
```

Commit the regenerated `cv.md`. `pymupdf4llm` is AGPL and development-only,
so it never ships in the deployed image.

## Endpoints

| Method | Path | Notes |
| --- | --- | --- |
| GET | `/health` | Liveness probe. Not rate limited. |
| POST | `/api/chat` | `{messages: [{role, content}]}`, 10/min · 50/hr per IP |
| POST | `/api/contact` | `{name, email, subject, message}`, 3/hr · 10/day per IP |

Interactive docs at `/docs`.

## Notes

Rate limiting is in-memory, so the service must run as a **single worker**.
Adding `--workers N` silently multiplies every limit by N.
