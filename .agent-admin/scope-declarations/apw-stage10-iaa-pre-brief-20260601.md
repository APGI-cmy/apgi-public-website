# Scope Declaration - APW Stage 10 IAA Pre-Brief

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage10-iaa-pre-brief-20260601 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage10-iaa-pre-brief` |
| Target Folder | `modules/APW/09-iaa-pre-brief/` |
| Primary Artifact | `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md` |
| Date | 2026-06-01 |

---

## 1. Job Statement

Create the APW Stage 10 IAA Pre-Brief after PR #8 merged Stage 9 Builder Checklist.

The pre-brief must prepare independent assurance to review the pre-build package before a runtime implementation builder is appointed.

This wave does not appoint the runtime implementation builder and does not start build work.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/08-builder-checklist/builder-checklist.md`
- `modules/APW/07-implementation-plan/implementation-plan.md`
- `modules/APW/06-pbfag/pbfag-checklist.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Replace the Stage 10 placeholder with a complete IAA pre-brief.
- Define assurance context, source artifacts, inspection questions, risk checks, evidence expectations, and builder-appointment readiness criteria.
- Update tracker and operating model for the current stage.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief/review, and authorized CS2 proxy disposition.
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

The Stage 10 wave must:

1. give IAA enough context to assess implementation-builder readiness;
2. preserve the public-only v1 boundary;
3. require review of Stage 6 RED evidence expectations and Stage 9 builder obligations;
4. surface legal/content/asset conditions;
5. preserve Stage 11 and Stage 12 gates before build work;
6. preserve role separation and honest CI/status reporting.
