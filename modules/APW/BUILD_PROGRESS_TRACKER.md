# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Corrective Stage 3 FRS v0.2 drafted  
**Last Updated**: 2026-06-03  
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

## Where We Are in the Corrective Plan

The screenshot showing IP-COR-001 through IP-COR-008 is the later corrective implementation work-package plan. Those work packages belong to the corrected Implementation Plan / Build sequence, not the current stage.

Current position:

1. Stage 1 App Description v0.2 - complete / merged in PR #12.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13.
3. Stage 3 FRS v0.2 - active current wave on branch `apw-stage3-frs-v02`.
4. Stage 4 TRS v0.2 - next after Stage 3 merge.
5. Stage 5 Architecture v0.2 - pending.
6. Stage 6 QA-to-Red v0.2 - pending and must define green criteria before build.
7. Stage 7 PBFAG v0.2 - pending.
8. Stage 8 Implementation Plan v0.2 - pending; this is where IP-COR work packages are finalized.
9. Stage 9 Builder Checklist v0.2 - pending.
10. Stage 10 IAA Pre-Brief v0.2 - pending.
11. Stage 11 Builder Appointment v0.2 - pending.
12. Stage 12 Upgraded Build Evidence - blocked until corrected pre-build chain is approved.

---

## Build Philosophy

APW only builds to green.

A build is not green merely because it compiles or deploys. It must satisfy the approved product, design, UX, content, accessibility, routing, deployment, and evidence criteria.

---

## How the Failed Build Is Being Fixed

| Failed Area in PR #11 | Corrective Fix Path |
|----------------------|---------------------|
| One-page/static scaffold mindset | Stage 1 v0.2 and Stage 2 v0.2 require multi-page IA. |
| Weak professional design quality | Stage 1/2 v0.2 make design quality a functional UX requirement; Stage 3 now converts it into functional requirements. |
| Services too shallow | Stage 2 v0.2 requires a dedicated Services journey; Stage 3 FRS v0.2 defines functional service-page requirements. |
| Platform/app presentation too thin | Stage 2 v0.2 requires a dedicated Platform/APGI Hub journey; Stage 3 FRS v0.2 defines module/submodule presentation requirements. |
| Training too shallow | Stage 2 v0.2 requires a dedicated Training journey and Thinkific handoff; Stage 3 FRS v0.2 defines training-page requirements. |
| Visual richness and invitation missing | Stage 2 v0.2 defines design-quality journey; Stage 3 FRS v0.2 defines visual experience requirements. |
| Old QA allowed scaffold to look too acceptable | Stage 6 QA-to-Red v0.2 will explicitly fail scaffold output and require green evidence before build. |
| Implementation started before corrected pre-build was aligned | Tracker blocks upgraded implementation until Stages 3-11 are corrected and approved. |

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 1 | `00-app-description` | App Description | Corrective authoritative v0.2 | PR #12 merged; captures high-profile multi-page professional APW website requirements after PR #11 design failure. |
| 2 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Corrective v0.2 approved | PR #13 merged; defines multi-page IA, services, platform/app, training, conversion, mobile, legal/trust, and design-quality journeys. |
| 3 | `02-frs` | FRS | Corrective v0.2 drafted for review | Active branch `apw-stage3-frs-v02`; converts Stage 2 v0.2 journeys into upgraded functional requirements. |
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
| apw-stage2-ux-v02-20260602 | `apw-stage2-ux-v02` | Merged | PR #13 merged; Corrective Stage 2 UX Workflow & Wiring v0.2 approved. |
| apw-stage3-frs-v02-20260603 | `apw-stage3-frs-v02` | Draft PR pending | Corrective Stage 3 FRS v0.2 drafted; ready for review after PR creation. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Closed / failed design gate | PR #11 functional scaffold, not green website. |

---

## Current Focus

Review and merge Corrective Stage 3 FRS v0.2. After acceptance, proceed to Corrective Stage 4 TRS v0.2.

No upgraded implementation resumes until corrected pre-build artifacts are aligned and approved.
