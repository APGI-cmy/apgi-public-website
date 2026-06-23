# APW Maturion Chat Interface v0.6

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | Maturion public chat interface |
| Version | v0.6 |
| Status | Drafted for PR validation |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-chat-interface-v06` |

---

## Purpose

Add a public website chat interface for Maturion without placing AI provider credentials in the browser and without embedding Maturion's runtime logic directly inside APW.

APW provides the public interface. A governed Maturion/AIMC gateway provides the runtime intelligence.

---

## Source Alignment

The integration is aligned to the Maturion orchestrator contract and strategy:

- Maturion is the orchestrator identity for risk management, loss prevention and security governance.
- Maturion coordinates specialist agents rather than embedding all domain logic in one public website prompt.
- Runtime agents are separate from build-time GitHub agent contracts.
- User-facing public chat must not create cross-tenant leakage or store sensitive public website submissions.

---

## Implementation

| File | Role |
|---|---|
| `src/components/MaturionChat.astro` | Floating public chat interface mounted on all APW pages. |
| `public/scripts/maturion-chat.js` | Browser behaviour: open/close panel, message submission, gateway response rendering. |
| `public/styles/maturion-chat.css` | Chat launcher and panel styles. |
| `src/layouts/BaseLayout.astro` | Loads chat CSS/script and mounts the widget globally. |
| `.env.example` | Documents public APW chat endpoint configuration. |

---

## Runtime Boundary

The APW public website does not call OpenAI directly.

The chat widget posts user messages to the configured public Maturion gateway endpoint:

`APW_PUBLIC_MATURION_CHAT_ENDPOINT`

If no endpoint is configured, the widget remains visible but reports that the gateway is pending.

---

## Expected Gateway Contract

The browser sends:

```json
{
  "message": "User question",
  "history": [],
  "context": {
    "source": "apw-public-website",
    "page": "/current-page",
    "title": "Current page title"
  }
}
```

The gateway should return one of:

```json
{ "answer": "..." }
```

or

```json
{ "message": "..." }
```

or

```json
{ "response": "..." }
```

---

## Required Configuration

### APW / Vercel public environment variables

| Variable | Required | Purpose |
|---|---:|---|
| `APW_PUBLIC_MATURION_CHAT_ENDPOINT` | Yes for live AI | Public HTTPS endpoint for the Maturion gateway. |
| `APW_PUBLIC_MATURION_CHAT_ENABLED` | Optional | Set `false` to hide the widget. Defaults to enabled. |

### Maturion gateway / Render environment variables

The Render gateway should hold provider and platform credentials. APW should not hold those credentials in public client code.

At minimum, the gateway side needs:

| Variable | Purpose |
|---|---|
| `OPENAI_API_KEY` | Server-side AI provider access for the Maturion gateway. |
| `CORS_ORIGINS` | Restrict browser access to APW origins such as `https://apgi-public-website.vercel.app` and future `https://apginc.ca`. |

If the gateway uses existing MAT/AIMC persistence and knowledge retrieval, it may also need the existing gateway variables:

| Variable | Purpose |
|---|---|
| `SUPABASE_URL` | Supabase project URL. |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side Supabase access for gateway operations. |

For GitHub Actions driven Render deploys, the ISMS repository workflow expects:

| GitHub Secret | Purpose |
|---|---|
| `RENDER_API_KEY` | Allows GitHub Actions to trigger Render deploys. |
| `RENDER_SERVICE_ID` | Production Render service identifier. |
| `RENDER_SERVICE_URL` | Production Render service URL for health checks. |
| `RENDER_SERVICE_ID_STAGING` | Optional staging service identifier. |
| `RENDER_SERVICE_URL_STAGING` | Optional staging health-check URL. |

---

## Security Notes

- Do not expose provider keys in APW browser code.
- Prefer a Render gateway endpoint that validates origin, applies rate limiting, and rejects sensitive/confidential submissions.
- Public APW chat should be treated as guidance and routing, not as authenticated ISMS/MAT workspace activity.
- Deeper Maturion capability should live in AIMC/ISMS where the correct user, organisation, framework and knowledge scopes can be enforced.

---

## QA Checks

| Check | Expected Result |
|---|---|
| Widget appears on public APW pages | PASS |
| Widget can open and close using accessible buttons | PASS |
| Gateway pending state is clear when no endpoint is configured | PASS |
| Browser sends only message/history/page context to gateway | PASS |
| No OpenAI/provider key appears in APW source or public env example | PASS |
| If endpoint is configured, failed gateway calls produce a friendly error | PASS |
