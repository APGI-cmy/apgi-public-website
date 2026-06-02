# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective Stage 2 UX Workflow v0.2 drafted  
**Last Updated**: 2026-06-02  
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

PR #11 must not be merged as the final APW website. It has been closed as a scaffold reference.

---

## Build Philosophy

APW only builds to green.

A build is not green merely because it compiles or deploys. It must satisfy the approved product, design, UX, content, accessibility, routing, deployment, and evidence criteria.

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 1 | `00-app-description` | App Description | Corrective authoritative v0.2 | PR #12 merged; captures high-profile multi-page professional APW website requirements after PR #11 design failure. |
| 2 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Corrective v0.2 drafted for review | Active branch `apw-stage2-ux-v02`; defines multi-page IA, services, platform/app, training, conversion, mobile, legal/trust, and design-quality journeys. |
| 3 | `02-frs` | FRS | Requires corrective realignment | Must convert Stage 2 v0.2 journeys into upgraded functional requirements. |
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
| apw-corrective-prebuild-realignment-20260601 | `foreman/apw-corrective-prebuild-realignment` | Merged | PR #12 merged; Stage 1 reset and corrective pre-build baseline established. |
| apw-stage2-ux-v02-20260602 | `apw-stage2-ux-v02` | Draft PR pending | Corrective Stage 2 UX Workflow & Wiring v0.2 drafted; ready for review after PR creation. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Closed / failed design gate | PR #11 functional scaffold, not green website. |

---

## Current Focus

Review and merge Corrective Stage 2 UX Workflow & Wiring v0.2. After acceptance, proceed to Corrective Stage 3 FRS v0.2.

No upgraded implementation resumes until corrected pre-build artifacts are aligned and approved.
