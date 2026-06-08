# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective Stage 7 PBFAG v0.2 drafted  
**Last Updated**: 2026-06-08  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Structure Pattern**: `APGI-cmy/maturion-isms/modules/MMM`

---

## Corrective Finding

PR #11 produced a functional static scaffold and verified the Vercel build path, but it did not meet the fully functional APW design/product standard. PR #11 is closed and retained only as a scaffold reference.

The corrective path is rebuilding the pre-build chain from App Description v0.2 through the later build stages before upgraded implementation resumes.

---

## Where We Are in the Corrective Plan

The IP-COR work packages are later implementation-plan/build work packages. They are not the current stage.

Current position:

1. Stage 1 App Description v0.2 - complete / merged in PR #12.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13.
3. Stage 3 FRS v0.2 - complete / merged in PR #14.
4. Stage 4 TRS v0.2 - complete / merged in PR #15.
5. Stage 5 Architecture v0.2A - complete / merged through PR #16 and canon-completeness patch PR #17.
6. Stage 6 QA-to-Red v0.2 - complete / merged in PR #18.
7. Stage 7 PBFAG v0.2 - active current wave on branch `apw-stage7-pbfag-v02`.
8. Stage 8 Implementation Plan v0.2 - pending.
9. Stage 9 Builder Checklist v0.2 - pending.
10. Stage 10 IAA Pre-Brief v0.2 - pending.
11. Stage 11 Builder Appointment v0.2 - pending.
12. Stage 12 Upgraded Build Evidence - blocked until corrected pre-build chain is approved.

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
| 6 | `05-qa-to-red` | QA-to-Red | Corrective v0.2 approved | PR #18 merged; RED suite derives from Architecture v0.2A and canon checklist. |
| 7 | `06-pbfag` | PBFAG | Corrective v0.2 drafted for review | Active branch `apw-stage7-pbfag-v02`; validates readiness for Stage 8 planning. |
| 8 | `07-implementation-plan` | Implementation Plan | Requires corrective realignment | Must plan upgraded multi-page professional build only after corrected QA-to-Red and PBFAG. |
| 9 | `08-builder-checklist` | Builder Checklist | Requires corrective realignment | Must bind builder to corrected green criteria. |
| 10 | `09-iaa-pre-brief` | IAA Pre-Brief | Requires corrective realignment | Must brief IAA on upgraded criteria. |
| 11 | `10-builder-appointment` | Builder Contract | Requires corrective realignment | Must not appoint builder against old scaffold criteria. |
| 12 | `11-build` | Build Evidence | Blocked | Upgraded build remains blocked until corrected pre-build chain is approved. |

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-corrective-prebuild-realignment-20260601 | `foreman/apw-corrective-prebuild-realignment` | Merged | PR #12 merged; Stage 1 reset and corrective pre-build baseline established. |
| apw-stage2-ux-v02-20260602 | `apw-stage2-ux-v02` | Merged | PR #13 merged; Corrective Stage 2 approved. |
| apw-stage3-frs-v02-20260603 | `apw-stage3-frs-v02` | Merged | PR #14 merged; Corrective Stage 3 approved. |
| apw-stage4-trs-v02-20260603 | `apw-stage4-trs-v02` | Merged | PR #15 merged; Corrective Stage 4 approved. |
| apw-stage5-architecture-v02-20260603 | `apw-stage5-architecture-v02` | Merged | PR #16 merged; PR #17 merged canon-completeness patch. |
| apw-stage6-qa-to-red-v02-20260604 | `apw-stage6-qa-to-red-v02` | Merged | PR #18 merged. |
| apw-stage7-pbfag-v02-20260608 | `apw-stage7-pbfag-v02` | Draft PR pending | Corrective Stage 7 PBFAG v0.2 drafted; ready for review after PR creation. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Closed / scaffold reference | PR #11 closed. |

---

## Current Focus

Review and merge Corrective Stage 7 PBFAG v0.2. After acceptance, proceed to Corrective Stage 8 Implementation Plan v0.2.

No upgraded implementation resumes until corrected pre-build artifacts are aligned and approved.
