# IAA Review - APW Stage 12 v0.4 Website Intent Build Alignment

**Wave ID:** `apw-stage12-intent-build-v04`  
**Date:** 2026-06-18  
**Authority:** CS2 - Johan Ras  
**Review posture:** Independent assurance-style review

---

## Assurance scope

Review whether the Stage 12 v0.4 implementation aligns the public APW build to the root intent canon and the Stage 1-11 intent addenda.

---

## Assurance observations

1. QA-to-Red was created before implementation.
2. The implementation is limited to public static content and route rendering.
3. The homepage now presents APGI through loss prevention and maturity improvement.
4. Malicious and non-malicious loss are explicitly represented.
5. The maturity journey is visible on the homepage and Platform route.
6. A free maturity assessment entry point is present with an ISMS/APGI Hub handoff or governed fallback.
7. The Platform route is no longer merely a module-card directory.
8. Ecosystem modules include roles in the maturity journey.
9. Real-time situational awareness and hover/click/ask/train concepts are represented as accessible public content.
10. Case-study content is anonymised by model and permission boundary.
11. No private platform/runtime expansion is introduced.

---

## Residual conditions

- Vercel/build status must be confirmed after PR creation.
- Final ISMS/APGI Hub public assessment destination may need CS2 confirmation if the environment variable is not configured.
- CS2 should review whether the public wording captures APGI's philosophy accurately enough before merge.

---

## Assurance disposition

**Conditional PASS for PR review.**

No assurance halt is raised. Merge readiness remains conditional on build checks and CS2 review.
