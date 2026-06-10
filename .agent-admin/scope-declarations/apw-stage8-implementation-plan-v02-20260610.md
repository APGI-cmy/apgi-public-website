# Scope Declaration - APW Corrective Stage 8 Implementation Plan v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage8-implementation-plan-v02-20260610 |
| Module | APW - APGI Public Website |
| Stage | 8 - Implementation Plan |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage8-implementation-plan-v02` |
| Status | Active corrective Stage 8 wave |
| Primary Folder | `modules/APW/07-implementation-plan/` |
| Upstream | Stage 7 PBFAG v0.2 |
| Date | 2026-06-10 |

---

## 1. Purpose

Create Corrective Stage 8 Implementation Plan v0.2 after PR #19 merged Corrective Stage 7 PBFAG v0.2.

This wave converts the corrected pre-build package into a governed implementation plan. It does not implement code.

---

## 2. In Scope

- Align the Stage 8 directory at `modules/APW/07-implementation-plan/`.
- Define corrected implementation work packages.
- Map work packages to Stage 6 QA IDs.
- Define build sequencing, evidence expectations, and readiness gates.
- Preserve public-only/static-first scope.
- Update tracker.
- File QP, ECAP, IAA review, CS2 proxy disposition, and draft PR.

---

## 3. Out of Scope

- No runtime implementation.
- No deployment request.
- No production testing.
- No backend, database, auth, CRM, or contact-form backend.
- No merge without user direction.

---

## 4. Acceptance Criteria

Stage 8 is complete when it:

1. derives from Stage 7 PBFAG and Stage 6 QA-to-Red;
2. defines implementable work packages without starting build work;
3. maps each package to QA-to-Red IDs;
4. defines build sequencing and evidence expectations;
5. preserves public-only/static-first boundaries;
6. hands off to Corrective Stage 9 Builder Checklist v0.2.
