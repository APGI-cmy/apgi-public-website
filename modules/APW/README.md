# APW - APGI Public Website

## Module Status

| Field | Value |
|-------|-------|
| Module Slug | APW |
| Module Name | APGI Public Website |
| Status | Pre-build |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Canonical Root | `modules/APW` |
| Governance Root | `docs/governance` |
| Last Updated | 2026-05-29 |

---

## Purpose

This module contains the governed pre-build artifact structure for the APGI Public Website.

It mirrors the ISMS module pattern used by `modules/MMM`, while keeping the public website's governance artifacts lightweight, readable, and execution-ready.

---

## Stage Structure

| Stage | Folder | Status | Primary Artifact |
|-------|--------|--------|------------------|
| 0 | `00-app-description` | Complete / authoritative | `app-description.md` |
| 1 | `01-ux-workflow-wiring` | In progress | `ux-workflow-wiring-spec.md` |
| 2 | `02-frs` | Pending | `functional-requirements.md` |
| 3 | `03-trs` | Pending | `technical-requirements-specification.md` |
| 4 | `04-architecture` | Pending | `architecture.md` |
| 5 | `05-qa-to-red` | Pending | `qa-to-red.md` |
| 6 | `06-pbfag` | Pending | `pbfag-checklist.md` |
| 7 | `07-implementation-plan` | Pending | `implementation-plan.md` |
| 8 | `08-builder-checklist` | Pending | `builder-checklist.md` |
| 9 | `09-iaa-pre-brief` | Pending | `iaa-pre-brief.md` |
| 10 | `10-builder-appointment` | Pending | `builder-contract.md` |
| 11 | `11-build` | Pending | `build-evidence.md` |

---

## Current Canonical Sources

The stage 0 and stage 1 source artifacts were first created under `docs/governance` and are now represented in this module structure:

- `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`
- `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md`
- `docs/governance/APGI_PUBLIC_WEBSITE_BUILD_PROGRESS_TRACKER.md`

The local governance canon and Foreman layer-down remain active under `docs/governance`.

---

## Operating Rule

New pre-build work should be filed in the relevant numbered stage folder under `modules/APW` first, then reflected in the build progress tracker.

Do not start build implementation until all required pre-build stages and approval gates are complete or explicitly waived by CS2 / Johan Ras.
