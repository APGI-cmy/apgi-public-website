# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective pre-build realignment required  
**Last Updated**: 2026-06-01  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Structure Pattern**: `APGI-cmy/maturion-isms/modules/MMM`

---

## Corrective Finding

PR #11 / Stage 12 produced a functional static build scaffold and verified that the repository could be built through Vercel.

However, it failed the fully functional design-quality expectation for APW.

The failure is recorded as:

- functional scaffold: delivered;
- fully functional professional website: not delivered;
- design quality: failed;
- information architecture depth: failed;
- services depth: failed;
- platform/app presentation: failed;
- training depth: failed;
- visual richness and visitor invitation: failed;
- build-to-green philosophy: not satisfied.

PR #11 must not be merged as the final APW website. It may remain as a failed scaffold reference until superseded.

---

## Build Philosophy

APW only builds to green.

A build is not green merely because it compiles or deploys. It must satisfy the approved product, design, UX, content, accessibility, routing, deployment, and evidence criteria.

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 1 | `00-app-description` | App Description | Corrective authoritative v0.2 | Updated to capture high-profile multi-page professional APW website requirements after PR #11 design failure. |
| 2 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Requires corrective realignment | Must be aligned to multi-page IA, services, platform/app, training, conversion, and design-led journeys. |
| 3 | `02-frs` | FRS | Requires corrective realignment | Must include functional requirements for upgraded design, multi-page routes, services page, platform page, training page, and visual quality acceptance. |
| 4 | `03-trs` | TRS | Requires corrective realignment | Must define technical obligations for multi-page static/Vercel build, richer styling, metadata, routing, validation, and evidence. |
| 5 | `04-architecture` | Architecture | Requires corrective realignment | Must define upgraded route/component/design-system architecture. |
| 6 | `05-qa-to-red` | QA-to-Red | Requires corrective realignment before build | Must fail PR #11 scaffold and require green evidence for design, IA, services, platform, training, conversion, and visual richness. |
| 7 | `06-pbfag` | PBFAG | Requires corrective realignment | Must validate corrected pre-build readiness before upgraded implementation planning. |
| 8 | `07-implementation-plan` | Implementation Plan | Requires corrective realignment | Must plan upgraded multi-page professional build only after corrected QA-to-Red. |
| 9 | `08-builder-checklist` | Builder Checklist | Requires corrective realignment | Must bind builder to corrected green criteria. |
| 10 | `09-iaa-pre-brief` | IAA Pre-Brief | Requires corrective realignment | Must brief IAA on failed scaffold and upgraded criteria. |
| 11 | `10-builder-appointment` | Builder Contract | Requires corrective realignment | Must not appoint builder against old scaffold criteria. |
| 12 | `11-build` | Build Evidence | Blocked / PR #11 failed design gate | Functional scaffold was delivered, but fully functional design-quality build was not green. |

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-stage3-frs-20260529 | `foreman/apw-stage3-frs` | Merged | Superseded for upgraded build by corrective realignment requirements. |
| apw-stage4-trs-20260529 | `foreman/apw-stage4-trs` | Merged | Superseded for upgraded build by corrective realignment requirements. |
| apw-stage5-architecture-20260529 | `foreman/apw-stage5-architecture` | Merged | Superseded for upgraded build by corrective realignment requirements. |
| apw-stage6-qa-to-red-20260530 | `foreman/apw-stage6-qa-to-red` | Merged | Insufficient for upgraded design build; requires corrective QA-to-Red. |
| apw-stage7-pbfag-20260531 | `foreman/apw-stage7-pbfag` | Merged | Requires corrective realignment. |
| apw-stage8-implementation-plan-20260531 | `foreman/apw-stage8-implementation-plan` | Merged | Requires corrective realignment. |
| apw-stage9-builder-checklist-20260531 | `foreman/apw-stage9-builder-checklist` | Merged | Requires corrective realignment. |
| apw-stage10-iaa-pre-brief-20260601 | `foreman/apw-stage10-iaa-pre-brief` | Merged | Requires corrective realignment. |
| apw-stage11-builder-appointment-20260601 | `foreman/apw-stage11-builder-appointment` | Merged | Requires corrective realignment before new builder appointment. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Failed design gate / do not merge | PR #11 functional scaffold, not green website. |
| apw-corrective-prebuild-realignment-20260601 | `foreman/apw-corrective-prebuild-realignment` | Active | Returns to Stage 1 and realigns the pre-build package before upgraded build resumes. |

---

## Current Focus

Correct the pre-build package from Stage 1 forward so the next APW build is only allowed to build to green.

The next build must be a high-profile, professional, multi-page APW public website with services, platform/app, training, visual richness, conversion flow, and Vercel evidence.

No upgraded build resumes until corrected pre-build artifacts are aligned and approved.
