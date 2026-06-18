# Scope Declaration - APW Stage 12 v0.4 Website Intent Build Alignment

**Wave ID:** `apw-stage12-intent-build-v04`  
**Date:** 2026-06-18  
**Authority:** CS2 - Johan Ras  
**Foreman:** ChatGPT acting as Foreman under APW governance  
**Builder:** Assumed implementation builder for bounded Stage 12 v0.4 build-to-green  
**Repository:** `APGI-cmy/apgi-public-website`

---

## Scope

Create a Stage 12 v0.4 QA-to-Red / implementation-alignment PR and build only what is needed to turn the new APW intent tests green.

The wave is bound by:

- `APW_WEBSITE_INTENT.md`
- Stage 1 through Stage 11 intent-alignment addenda merged in PR #27
- `modules/APW/11-build/stage12-v04-intent-qa-to-red.md`

---

## Approved implementation paths

- `src/data/site.ts`
- `src/pages/index.astro`
- `src/pages/[slug].astro`
- `modules/APW/11-build/stage12-v04-intent-qa-to-red.md`
- `modules/APW/11-build/build-evidence.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `.agent-admin/quality/apw-stage12-intent-build-v04-20260618-foreman-qp.md`
- `.agent-admin/ecap/apw-stage12-intent-build-v04-20260618-ecap.md`
- `.agent-admin/assurance/iaa-review-apw-stage12-intent-build-v04-20260618.md`
- `.agent-admin/builders/apw-stage12-intent-build-v04-builder-handover-20260618.md`

---

## Explicitly out of scope

- Backend assessment-engine implementation.
- Supabase/database changes.
- CRM/contact-form backend.
- Authentication or user accounts.
- LMS administration.
- Private ISMS/APGI Hub runtime changes.
- New secrets or environment variables.
- Broad redesign beyond what is needed for the intent QA-to-Red checks.

---

## Expected outcome

The existing public Astro implementation is aligned to the APW root intent canon by adding the missing public narrative and handoff content only.
