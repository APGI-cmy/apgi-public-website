# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Build evidence / deployment verification  
**Last Updated**: 2026-06-01  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Structure Pattern**: `APGI-cmy/maturion-isms/modules/MMM`

---

## Stage Progress

| Stage | Folder | Artifact | Status | Notes |
|-------|--------|----------|--------|-------|
| 0 | `00-app-description` | App Description | Complete / authoritative | Source artifact exists under `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`. |
| 1 | `01-ux-workflow-wiring` | UX Workflow & Wiring Spec | Approved | Approved by AI-assisted CS2 proxy evaluation for Johan Ras. |
| 2 | `02-frs` | FRS | Approved for Stage 4 TRS progression | PR #2 merged. |
| 3 | `03-trs` | TRS | Approved for Stage 5 Architecture progression | PR #3 merged. |
| 4 | `04-architecture` | Architecture | Approved for Stage 6 QA-to-Red progression | PR #4 merged. |
| 5 | `05-qa-to-red` | QA-to-Red | Approved for Stage 7 PBFAG progression | PR #5 merged. |
| 6 | `06-pbfag` | PBFAG | Approved for Stage 8 Implementation Plan progression | PR #6 merged. |
| 7 | `07-implementation-plan` | Implementation Plan | Approved for Stage 9 Builder Checklist progression | PR #7 merged. |
| 8 | `08-builder-checklist` | Builder Checklist | Approved for Stage 10 IAA Pre-Brief progression | PR #8 merged. |
| 9 | `09-iaa-pre-brief` | IAA Pre-Brief | Approved for Stage 11 Builder Appointment progression | PR #9 merged. |
| 10 | `10-builder-appointment` | Builder Contract | Approved for Stage 12 Build Evidence progression | PR #10 merged; Stage 11 Builder Appointment approved. |
| 11 | `11-build` | Build Evidence | Draft PR / pending Vercel verification | Static build files and evidence matrix filed in wave `apw-stage12-build-evidence-20260601`; Vercel deployment evidence remains pending. |

---

## Current Focus

Stage 12 Build Evidence has created the static-first APW public website structure and evidence matrix. The current wave is pending PR review and Vercel build/deployment verification.

No Supabase project is required or authorized for APW v1.

---

## Vercel Project

| Field | Value |
|-------|-------|
| Project URL | `https://vercel.com/rassie-ras-projects/apgi-public-website` |
| Project ID | `prj_Ms3RG1z7HFlWjG8NXISYqPrXrluW` |
| Root Directory | Repository root |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Production Branch | `main` |
| Required public env | `ISMS_PUBLIC_BASE_URL` when APGI Hub/ISMS public host is known |

---

## Active Wave Register

| Wave | Branch | Status | Notes |
|------|--------|--------|-------|
| apw-stage3-frs-20260529 | `foreman/apw-stage3-frs` | Merged | PR #2 merged. |
| apw-stage4-trs-20260529 | `foreman/apw-stage4-trs` | Merged | PR #3 merged. |
| apw-stage5-architecture-20260529 | `foreman/apw-stage5-architecture` | Merged | PR #4 merged. |
| apw-stage6-qa-to-red-20260530 | `foreman/apw-stage6-qa-to-red` | Merged | PR #5 merged. |
| apw-stage7-pbfag-20260531 | `foreman/apw-stage7-pbfag` | Merged | PR #6 merged. |
| apw-stage8-implementation-plan-20260531 | `foreman/apw-stage8-implementation-plan` | Merged | PR #7 merged. |
| apw-stage9-builder-checklist-20260531 | `foreman/apw-stage9-builder-checklist` | Merged | PR #8 merged. |
| apw-stage10-iaa-pre-brief-20260601 | `foreman/apw-stage10-iaa-pre-brief` | Merged | PR #9 merged. |
| apw-stage11-builder-appointment-20260601 | `foreman/apw-stage11-builder-appointment` | Merged | PR #10 merged. |
| apw-stage12-build-evidence-20260601 | `foreman/apw-stage12-build-evidence` | Draft PR | Static site, evidence, QP, ECAP, IAA, and authorized CS2 proxy disposition filed; Vercel verification pending. |

---

## Update Rule

Update this module tracker whenever a stage artifact is created, approved, rejected, superseded, or moved into a new status.
