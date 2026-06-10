# Scope Declaration - APW Corrective Stage 7 PBFAG v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage7-pbfag-v02-20260608 |
| Module | APW - APGI Public Website |
| Stage | 7 - PBFAG |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage7-pbfag-v02` |
| Status | Active corrective Stage 7 wave |
| Primary Folder | `modules/APW/06-pbfag/` |
| Upstream | Stage 6 QA-to-Red v0.2 |
| Date | 2026-06-08 |

---

## 1. Purpose

Create Corrective Stage 7 PBFAG v0.2 after PR #18 merged Corrective Stage 6 QA-to-Red v0.2.

PBFAG verifies that the corrected pre-build package is sufficiently complete to proceed to implementation planning without weakening the build-to-green standard.

---

## 2. In Scope

- Create the active Stage 7 artifact set under `modules/APW/06-pbfag/`.
- Verify Stage 1 through Stage 6 corrective artifacts are present and aligned.
- Verify the Stage 6 RED suite is suitable to constrain implementation planning.
- Identify readiness, blockers, carried-forward conditions, and downstream gates.
- Update tracker.
- File QP, ECAP, IAA review, CS2 proxy disposition, and draft PR.

---

## 3. Out of Scope

- No implementation code.
- No build-plan work-package execution.
- No production deploy request.
- No Supabase, database, auth, CRM, or contact-form backend.
- No merge without user direction.

---

## 4. Acceptance Criteria

Stage 7 is complete when PBFAG v0.2:

1. confirms the corrected pre-build chain is coherent from Stage 1 through Stage 6;
2. confirms the QA-to-Red catalog is source-backed and non-casual;
3. confirms implementation remains blocked until later Stage 8-11 gates are complete;
4. defines clear conditions for Stage 8 Implementation Plan v0.2;
5. records conditional approval or blockers honestly.
