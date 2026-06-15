# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective Stage 12 Build Evidence v0.2 drafted  
**Last Updated**: 2026-06-15  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Structure Pattern**: `APGI-cmy/maturion-isms/modules/MMM`

---

## Corrective Finding

PR #11 produced a functional static scaffold and verified the Vercel build path, but it did not meet the fully functional APW design/product standard. PR #11 is closed and retained only as a scaffold reference.

The corrective path rebuilt the pre-build chain from App Description v0.2 through Builder Appointment v0.2 before upgraded implementation resumed.

---

## Where We Are in the Corrective Plan

Current position:

1. Stage 1 App Description v0.2 - complete / merged in PR #12.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13.
3. Stage 3 FRS v0.2 - complete / merged in PR #14.
4. Stage 4 TRS v0.2 - complete / merged in PR #15.
5. Stage 5 Architecture v0.2A - complete / merged through PR #16 and canon-completeness patch PR #17.
6. Stage 6 QA-to-Red v0.2 - complete / merged in PR #18.
7. Stage 7 PBFAG v0.2 - complete / merged in PR #19.
8. Stage 8 Implementation Plan v0.2 - complete / merged in PR #20.
9. Stage 9 Builder Checklist v0.2 - complete / merged in PR #21.
10. Stage 10 IAA Pre-Brief v0.2 - complete / merged in PR #22.
11. Stage 11 Builder Appointment v0.2 - complete / merged in PR #23.
12. Stage 12 Upgraded Build Evidence v0.2 - active current wave on branch `apw-stage12-build-evidence-v02`.

---

## Build Philosophy

APW only builds to green.

A build is not green merely because it compiles or deploys. It must satisfy the approved product, design, UX, content, accessibility, routing, deployment, and evidence criteria.

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 1 | `00-app-description` | App Description | Corrective authoritative v0.2 | PR #12 merged. |
| 2 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Corrective v0.2 approved | PR #13 merged. |
| 3 | `02-frs` | FRS | Corrective v0.2 approved | PR #14 merged. |
| 4 | `03-trs` | TRS | Corrective v0.2 approved | PR #15 merged. |
| 5 | `04-architecture` | Architecture | Corrective v0.2A approved | PR #16 merged; PR #17 added architecture canon-completeness patch. |
| 6 | `05-qa-to-red` | QA-to-Red | Corrective v0.2 approved | PR #18 merged. |
| 7 | `06-pbfag` | PBFAG | Corrective v0.2 approved | PR #19 merged. |
| 8 | `07-implementation-plan` | Implementation Plan | Corrective v0.2 approved | PR #20 merged. |
| 9 | `08-builder-checklist` | Builder Checklist | Corrective v0.2 approved | PR #21 merged. |
| 10 | `09-iaa-pre-brief` | IAA Pre-Brief | Corrective v0.2 approved | PR #22 merged. |
| 11 | `10-builder-appointment` | Builder Appointment | Corrective v0.2 approved | PR #23 merged; appointed and bound Stage 12 builder. |
| 12 | `11-build` | Build Evidence | Corrective v0.2 drafted for validation | Active branch `apw-stage12-build-evidence-v02`; implements Astro site and evidence package. |

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-stage10-iaa-prebrief-v02-20260611 | `apw-stage10-iaa-prebrief-v02` | Merged | PR #22 merged; Stage 10 complete. |
| apw-stage11-builder-appointment-v02-20260615 | `apw-stage11-builder-appointment-v02` | Merged | PR #23 merged; Stage 11 complete. |
| apw-stage12-build-evidence-v02-20260615 | `apw-stage12-build-evidence-v02` | Drafted | Corrective Stage 12 Build Evidence v0.2 drafted for PR validation. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Closed / scaffold reference | PR #11 closed. |

---

## Current Focus

Validate Corrective Stage 12 Build Evidence v0.2. Confirm build/deploy status, inspect routes, and review QA-to-green evidence before merge disposition.
