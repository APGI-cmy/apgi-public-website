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
| 1 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Approved | Approved by AI-assisted CS2 proxy evaluation for Johan Ras; see `.agent-admin/signoffs/cs2-proxy-stage2-ux-workflow-signoff-20260529.md`. |
| 2 | `02-frs` | FRS | Approved for Stage 4 TRS progression | IAA conditional pass accepted by AI-assisted CS2 proxy evaluation; see `.agent-admin/signoffs/cs2-proxy-stage3-frs-signoff-20260529.md`. |
| 3 | `03-trs` | TRS | Approved for Stage 5 Architecture progression | IAA conditional pass accepted by AI-assisted CS2 proxy evaluation; see `.agent-admin/signoffs/cs2-proxy-stage4-trs-signoff-20260529.md`. |
| 4 | `04-architecture` | Architecture | Ready to start | To be derived from approved TRS. |
| 5 | `05-qa-to-red` | QA-to-Red | Pending | Must exist before implementation. |
| 6 | `06-pbfag` | PBFAG | Pending | Pre-build functional assurance gate. |
| 7 | `07-implementation-plan` | Implementation Plan | Pending | To be prepared after architecture and gates. |
| 8 | `08-builder-checklist` | Builder Checklist | Pending | To be prepared before builder appointment. |
| 9 | `09-iaa-pre-brief` | IAA Pre-Brief | Pending | To support independent assurance. |
| 10 | `10-builder-appointment` | Builder Contract | Pending | No implementation builder appointed yet. |
| 11 | `11-build` | Build Evidence | Pending | Build not started. |

---

## Current Focus

Stage 4 TRS is approved for progression. Stage 5 Architecture may begin as the next Foreman wave.

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-stage3-frs-20260529 | `foreman/apw-stage3-frs` | Merged | PR #2 merged into `main`; Stage 3 FRS approved for TRS progression. |
| apw-stage4-trs-20260529 | `foreman/apw-stage4-trs` | Ready for PR review | Scope, builder appointment, TRS draft, QP, ECAP, IAA pre-brief, IAA review, and CS2 proxy sign-off are filed. |

---

## Update Rule

Update this module tracker whenever a stage artifact is created, approved, rejected, superseded, or moved into a new status.
