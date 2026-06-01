# Scope Declaration - APW Stage 9 Builder Checklist

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage9-builder-checklist-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage9-builder-checklist` |
| Target Folder | `modules/APW/08-builder-checklist/` |
| Primary Artifact | `modules/APW/08-builder-checklist/builder-checklist.md` |
| Date | 2026-05-31 |

---

## 1. Job Statement

Create the APW Stage 9 Builder Checklist after PR #7 merged Stage 8 Implementation Plan.

The checklist must convert the approved implementation plan into executable builder obligations, evidence requirements, and do-not-cross boundaries.

This wave does not appoint the runtime implementation builder and does not start code implementation.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/07-implementation-plan/implementation-plan.md`
- `modules/APW/06-pbfag/pbfag-checklist.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Replace the Stage 9 placeholder with a complete builder checklist.
- Convert Stage 8 work packages into builder obligations.
- Define source-loading requirements, build boundaries, evidence requirements, RED-domain coverage, handover expectations, and stop/escalation rules.
- Update tracker and operating model for the current stage.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief, IAA review, and authorized CS2 proxy disposition.
- Open a governed draft PR.

---

## 4. Out of Scope

- No runtime implementation code.
- No implementation builder appointment.
- No build evidence.
- No dependency installation or framework changes.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Stage 9 wave must:

1. be specific enough for a future implementation builder to follow;
2. preserve the public-only v1 boundary;
3. require evidence for every Stage 6 RED domain;
4. carry forward legal/content/asset conditions;
5. preserve Stage 10-12 gates before build work;
6. preserve role separation and honest CI/status reporting.
