# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Pre-build  
**Last Updated**: 2026-05-29  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website pre-build process.  
> **Governance Source**: `docs/governance/APGI_PUBLIC_WEBSITE_BUILD_PROGRESS_TRACKER.md`  
> **Structure Pattern**: `APGI-cmy/maturion-isms/modules/MMM`

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 0 | `00-app-description` | App Description | Complete / authoritative | Source artifact exists under `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`. |
| 1 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | In progress | Source artifact exists under `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md`; ready for sign-off review. |
| 2 | `02-frs` | FRS | Drafted - pending QP / ECAP / IAA | Draft created on branch `foreman/apw-stage3-frs`; do not treat as approved until review gates complete. |
| 3 | `03-trs` | TRS | Pending | To be derived after FRS approval. |
| 4 | `04-architecture` | Architecture | Pending | To be derived after TRS. |
| 5 | `05-qa-to-red` | QA-to-Red | Pending | Must exist before implementation. |
| 6 | `06-pbfag` | PBFAG | Pending | Pre-build functional assurance gate. |
| 7 | `07-implementation-plan` | Implementation Plan | Pending | To be prepared after architecture and gates. |
| 8 | `08-builder-checklist` | Builder Checklist | Pending | To be prepared before builder appointment. |
| 9 | `09-iaa-pre-brief` | IAA Pre-Brief | Pending | To support independent assurance. |
| 10 | `10-builder-appointment` | Builder Contract | Pending | No implementation builder appointed yet. |
| 11 | `11-build` | Build Evidence | Pending | Build not started. |

---

## Current Focus

Review APW Stage 3 FRS draft through Foreman QP, ECAP, and IAA pre-brief before approval or progression to TRS.

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-stage3-frs-20260529 | `foreman/apw-stage3-frs` | Draft prepared | Scope, builder appointment, FRS draft, QP, ECAP, and IAA pre-brief are part of this wave. |

---

## Update Rule

Update this module tracker whenever a stage artifact is created, approved, rejected, superseded, or moved into a new status.
