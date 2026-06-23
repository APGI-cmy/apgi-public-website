# Scope Declaration - APW Maturion Chat Interface v0.6

**Wave ID:** `apw-maturion-chat-interface-v06`  
**Date:** 2026-06-19  
**Authority:** CS2 - Johan Ras  
**Repository:** `APGI-cmy/apgi-public-website`

---

## Scope

Create a public APW chat interface for Maturion.

The scope is limited to a browser UI and public gateway configuration. Maturion runtime intelligence, specialist orchestration, OpenAI access and knowledge retrieval remain server-side responsibilities of the governed Maturion/AIMC gateway.

---

## Approved paths

- `src/components/MaturionChat.astro`
- `public/scripts/maturion-chat.js`
- `public/styles/maturion-chat.css`
- `src/layouts/BaseLayout.astro`
- `.env.example`
- `modules/APW/13-maturion-chat/maturion-chat-interface-v0.6.md`
- `.agent-admin/scope-declarations/apw-maturion-chat-interface-v06-20260619.md`

---

## Out of scope

- OpenAI calls from browser code.
- Provider secrets in APW.
- Maturion runtime orchestration implementation inside APW.
- Supabase/database changes.
- Render service creation or configuration changes.
- ISMS repository changes.

---

## Expected outcome

APW exposes an accessible public chat widget that can connect to a governed Maturion gateway once the gateway URL is provided.
