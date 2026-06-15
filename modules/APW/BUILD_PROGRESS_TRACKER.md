# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective Stage 12 Training Catalogue Expansion v0.3 drafted  
**Last Updated**: 2026-06-15  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`

---

## Current Position

PR #24 merged the first corrected Astro implementation baseline for APW.

This wave expands the Training page content using the uploaded APGI Training Course Catalogue and e-learning platform screenshot.

---

## Corrective Plan Status

1. Stage 1 App Description v0.2 - complete / merged in PR #12.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13.
3. Stage 3 FRS v0.2 - complete / merged in PR #14.
4. Stage 4 TRS v0.2 - complete / merged in PR #15.
5. Stage 5 Architecture v0.2A - complete / merged through PR #16 and PR #17.
6. Stage 6 QA-to-Red v0.2 - complete / merged in PR #18.
7. Stage 7 PBFAG v0.2 - complete / merged in PR #19.
8. Stage 8 Implementation Plan v0.2 - complete / merged in PR #20.
9. Stage 9 Builder Checklist v0.2 - complete / merged in PR #21.
10. Stage 10 IAA Pre-Brief v0.2 - complete / merged in PR #22.
11. Stage 11 Builder Appointment v0.2 - complete / merged in PR #23.
12. Stage 12 Build Evidence v0.2 - baseline implementation merged in PR #24.
13. Stage 12 Training Catalogue Expansion v0.3 - active current wave on branch `apw-training-v02`.

---

## Stage 12 v0.3 Scope

| Area | Status | Notes |
|---|---|---|
| App Description addendum | Drafted | Training offerings expansion requirement added. |
| UX Workflow addendum | Drafted | Classroom/contact and e-learning discovery journeys defined. |
| FRS addendum | Drafted | Training catalogue functional requirements added. |
| TRS addendum | Drafted | Static content model and validation requirements added. |
| Architecture addendum | Drafted | Structured training data and rendering pattern defined. |
| QA-to-Red addendum | RED -> validation pending | Training-specific QA tests added. |
| Build implementation | Drafted | `src/data/site.ts` and `/training` route updated. |
| Vercel validation | Pending | To be checked after PR creation. |

---

## Current Focus

Open and validate the Stage 12 Training Catalogue Expansion PR. Confirm `/training` renders the expanded catalogue, Vercel build is green, and classroom/e-learning handoffs behave correctly.
