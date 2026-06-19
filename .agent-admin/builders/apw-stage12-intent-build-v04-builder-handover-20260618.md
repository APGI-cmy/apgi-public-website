# Builder Handover - APW Stage 12 v0.4 Intent Build

**Wave ID:** `apw-stage12-intent-build-v04`  
**Date:** 2026-06-18  
**Builder:** Assumed bounded implementation builder  
**Authority:** CS2 - Johan Ras

---

## Scope

Build only what is needed to turn the Stage 12 v0.4 intent QA checks green.

---

## Source artifacts

- `APW_WEBSITE_INTENT.md`
- PR #27 Stage 1-11 intent addenda
- `modules/APW/11-build/stage12-v04-intent-qa-to-red.md`

---

## Work completed

- `src/data/site.ts` now includes public content for loss framing, maturity journey, free assessment handoff, ecosystem roles, situational awareness, learning pattern and anonymised case-study model.
- `src/pages/index.astro` now leads with APGI loss prevention through maturity and includes free assessment, journey, platform, training and contact handoffs.
- `src/pages/[slug].astro` now renders `/platform` as a maturity journey before module cards and preserves `/training` as maturity capability-building.
- `modules/APW/11-build/build-evidence.md` and `modules/APW/BUILD_PROGRESS_TRACKER.md` were updated.

---

## Boundary

Public static website scope only. No private runtime or data-capture scope was added.

---

## Builder disposition

Ready for Foreman/QP review and PR validation.
