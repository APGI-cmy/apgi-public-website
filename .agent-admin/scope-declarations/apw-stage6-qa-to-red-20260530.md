# Scope Declaration - APW Stage 6 QA-to-Red

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage6-qa-to-red-20260530 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage6-qa-to-red` |
| Target Folder | `modules/APW/05-qa-to-red/` |
| Date | 2026-05-30 |

---

## 1. Job Statement

Create the APW Stage 6 QA-to-Red suite after PR #4 merged Stage 5 Architecture.

The suite must convert approved Stage 3 FRS, Stage 4 TRS, and Stage 5 Architecture into concrete RED checks with traceable sources, RED conditions, acceptance criteria, and clean handover summaries.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Update `FOREMAN_OPERATING_MODEL.md` to reflect the current methodology and current state after PR #4.
- Replace or substantially rewrite `README.md` to describe the APW governed repository.
- Create the Stage 6 QA-to-Red artifact package under `modules/APW/05-qa-to-red/`.
- Update `modules/APW/BUILD_PROGRESS_TRACKER.md`.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief, IAA review, and authorized CS2 proxy disposition.
- Open a governed draft PR.

---

## 4. Out of Scope

- No implementation code.
- No runtime build work.
- No PBFAG artifact beyond downstream handover guidance.
- No implementation plan, builder checklist, implementation IAA pre-brief, implementation builder appointment, or build evidence.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Stage 6 wave must:

1. preserve Foreman, Builder, ECAP, IAA, and CS2 proxy separation;
2. produce a multi-artifact RED suite, not a casual checklist;
3. ensure each QA item has source, layer, description, RED condition, acceptance criteria, and clean handover summary;
4. cover the required D1-D12 domains;
5. include no TBD entries;
6. preserve the no-implementation-before-gates rule;
7. be reviewable by Foreman QP, ECAP, IAA, and authorized CS2 proxy disposition.

---

## 6. Handover Rule

This wave must not be considered complete until QP, ECAP, IAA pre-brief, IAA review, tracker update, CI/status inspection, CS2 proxy disposition, and draft PR creation are complete or explicitly deferred.
