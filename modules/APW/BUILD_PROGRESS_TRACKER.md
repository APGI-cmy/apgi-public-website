# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Stage 12 v0.4 Website Intent Build Alignment drafted  
**Last Updated**: 2026-06-18  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Root Website Intent Anchor**: `APW_WEBSITE_INTENT.md`

---

## Current Position

PR #26 merged the root APW website intent alignment canon in `APW_WEBSITE_INTENT.md`.

PR #27 merged the Stage 1 through Stage 11 prebuild intent-alignment addenda.

The current corrective wave is Stage 12 v0.4 Website Intent Build Alignment. It applies the new intent QA-to-Red tests to the existing Astro implementation and updates only the public content/rendering needed to turn those tests green.

---

## Corrective Plan Status

1. Stage 1 App Description v0.2 - complete / merged in PR #12; intent-alignment addendum v0.4 merged in PR #27.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13; intent-alignment addendum v0.4 merged in PR #27.
3. Stage 3 FRS v0.2 - complete / merged in PR #14; intent-alignment addendum v0.4 merged in PR #27.
4. Stage 4 TRS v0.2 - complete / merged in PR #15; intent-alignment addendum v0.4 merged in PR #27.
5. Stage 5 Architecture v0.2A - complete / merged through PR #16 and PR #17; intent-alignment addendum v0.4 merged in PR #27.
6. Stage 6 QA-to-Red v0.2 - complete / merged in PR #18; intent-alignment addendum v0.4 merged in PR #27.
7. Stage 7 PBFAG v0.2 - complete / merged in PR #19; intent-alignment addendum v0.4 merged in PR #27.
8. Stage 8 Implementation Plan v0.2 - complete / merged in PR #20; intent-alignment addendum v0.4 merged in PR #27.
9. Stage 9 Builder Checklist v0.2 - complete / merged in PR #21; intent-alignment addendum v0.4 merged in PR #27.
10. Stage 10 IAA Pre-Brief v0.2 - complete / merged in PR #22; intent-alignment addendum v0.4 merged in PR #27.
11. Stage 11 Builder Appointment v0.2 - complete / merged in PR #23; intent-alignment addendum v0.4 merged in PR #27.
12. Stage 12 Build Evidence v0.2 - baseline implementation merged in PR #24.
13. Stage 12 Training Catalogue Expansion v0.3 - merged in PR #25.
14. Root Website Intent Canon - merged in PR #26.
15. Prebuild Intent Alignment v0.4 - merged in PR #27.
16. Stage 12 Website Intent Build Alignment v0.4 - active current wave on branch `apw-stage12-intent-build-v04`.

---

## Stage 12 v0.4 Scope

| Area | Status | Notes |
|---|---|---|
| QA-to-Red | Drafted | `modules/APW/11-build/stage12-v04-intent-qa-to-red.md` records RED findings before build. |
| Structured data | Drafted | `src/data/site.ts` adds loss framing, maturity journey, free assessment, ecosystem roles, situational awareness, learning pattern and case-study model. |
| Homepage | Drafted | `/` now leads with APGI loss prevention through maturity and includes free assessment CTA. |
| Platform route | Drafted | `/platform` now renders a journey-led APGI Hub page rather than only a module-card registry. |
| Training route | Drafted | `/training` keeps v0.3 catalogue and frames training as maturity capability-building. |
| Build evidence | Drafted | `modules/APW/11-build/build-evidence.md` updated for v0.4. |
| Boundary | Preserved | No backend, Supabase, CRM, auth, LMS admin, assessment engine, or private runtime added. |
| Vercel validation | Pending | To be checked after PR creation. |

---

## Current Focus

Open and validate the Stage 12 v0.4 Website Intent Build Alignment PR. Confirm Vercel/build is green and the public routes satisfy the intent QA checks:

- APGI as holistic loss-prevention and maturity-improvement partner;
- malicious and non-malicious loss framing;
- maturity journey as conceptual spine;
- public free maturity assessment entry point;
- ISMS/APGI Hub handoff for deeper assessment;
- ecosystem module roles in one journey;
- real-time situational awareness concept;
- hover/click/ask/train learning pattern;
- anonymised case-study boundary;
- no unapproved APW backend/platform runtime scope.
