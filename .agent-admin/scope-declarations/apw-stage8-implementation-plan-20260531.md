# Scope Declaration - APW Stage 8 Implementation Plan

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage8-implementation-plan-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage8-implementation-plan` |
| Target Folder | `modules/APW/07-implementation-plan/` |
| Primary Artifact | `modules/APW/07-implementation-plan/implementation-plan.md` |
| Date | 2026-05-31 |

---

## 1. Job Statement

Create the APW Stage 8 Implementation Plan after PR #6 merged Stage 7 PBFAG.

The implementation plan must translate the approved FRS, TRS, Architecture, QA-to-Red, and PBFAG conditions into sequenced implementation work packages and evidence requirements.

This wave does not start runtime implementation.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/06-pbfag/pbfag-checklist.md`
- `modules/APW/05-qa-to-red/qa-to-red.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/05-qa-to-red/requirement-traceability.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Replace the Stage 8 placeholder with a complete implementation plan artifact.
- Map Stage 6 RED checks and Stage 7 PBFAG conditions to implementation work packages and evidence deliverables.
- Define build sequence, route/section/component plan, content/configuration plan, link registry plan, accessibility/responsive plan, metadata/legal plan, and evidence plan.
- Update tracker and current-state operating model text after PR #6 merge.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief, IAA review, and authorized CS2 proxy disposition.
- Open a governed draft PR.

---

## 4. Out of Scope

- No runtime implementation code.
- No dependency installation.
- No framework selection changes outside planning.
- No builder checklist for implementation.
- No implementation IAA pre-brief.
- No implementation builder appointment.
- No build evidence.
- No attempt to force CI if the repository reports no statuses or workflows.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Stage 8 wave must:

1. produce an implementation plan specific enough to support Stage 9 Builder Checklist;
2. preserve the public-only v1 scope boundary;
3. map Stage 6 RED checks to build tasks and evidence;
4. carry forward Stage 7 PBFAG conditions;
5. avoid starting implementation;
6. preserve Foreman, Builder, ECAP, IAA, and CS2 proxy role separation;
7. avoid CI/admin loops while recording status honestly.
