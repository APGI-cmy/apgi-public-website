# ECAP - APW Stage 12 v0.4 Website Intent Build Alignment

**Wave ID:** `apw-stage12-intent-build-v04`  
**Date:** 2026-06-18  
**Authority:** CS2 - Johan Ras  
**Role:** Execution ceremony administration record

---

## Scope authority

CS2 instructed Foreman to create a Stage 12 v0.4 QA-to-Red / implementation-alignment PR and build only what is needed to turn the new intent tests green.

---

## Primary artifacts

- `modules/APW/11-build/stage12-v04-intent-qa-to-red.md`
- `src/data/site.ts`
- `src/pages/index.astro`
- `src/pages/[slug].astro`
- `modules/APW/11-build/build-evidence.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`

---

## Governance artifacts

- `.agent-admin/scope-declarations/apw-stage12-intent-build-v04-20260618.md`
- `.agent-admin/builders/apw-stage12-intent-build-v04-builder-handover-20260618.md`
- `.agent-admin/quality/apw-stage12-intent-build-v04-20260618-foreman-qp.md`
- `.agent-admin/ecap/apw-stage12-intent-build-v04-20260618-ecap.md`
- `.agent-admin/assurance/iaa-review-apw-stage12-intent-build-v04-20260618.md`

---

## Administrative summary

The wave created QA-to-Red before implementation, then updated public static content/rendering to satisfy the new APW website intent checks.

The implementation adds public narrative support for:

- APGI as holistic loss-prevention and maturity-improvement partner;
- malicious and non-malicious loss;
- maturity journey;
- free maturity assessment entry point;
- ISMS/APGI Hub handoff;
- ecosystem module roles;
- real-time situational awareness;
- hover/click/ask/train;
- anonymised case-study model.

---

## Boundary

No backend, database, CRM, user-account, LMS administration or private platform runtime scope is recorded for this wave.

---

## ECAP disposition

Administrative record prepared. ECAP does not decide readiness or merge authority.
