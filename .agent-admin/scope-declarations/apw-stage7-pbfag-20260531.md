# Scope Declaration - APW Stage 7 PBFAG

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage7-pbfag-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage7-pbfag` |
| Target Folder | `modules/APW/06-pbfag/` |
| Primary Artifact | `modules/APW/06-pbfag/pbfag-checklist.md` |
| Date | 2026-05-31 |

---

## 1. Job Statement

Create the APW Stage 7 PBFAG after PR #5 merged Stage 6 QA-to-Red.

The PBFAG must determine whether the governed pre-build package is functionally ready to proceed toward Stage 8 Implementation Plan without starting implementation.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/05-qa-to-red/qa-to-red.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/05-qa-to-red/journey-coverage.md`
- `modules/APW/05-qa-to-red/requirement-traceability.md`
- `modules/APW/05-qa-to-red/qa-catalog-alignment.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Replace the placeholder PBFAG checklist with a complete Stage 7 PBFAG artifact.
- Validate readiness of Stage 1 through Stage 6 pre-build package.
- Validate Stage 6 RED suite quality and handover suitability.
- Identify conditions that must carry into Stage 8 Implementation Plan.
- Update the tracker and operating model where current-state wording still references PR #5 as pending.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief, IAA review, and authorized CS2 proxy disposition.
- Open a governed draft PR.

---

## 4. Out of Scope

- No implementation code.
- No implementation plan.
- No builder checklist for implementation.
- No runtime build evidence.
- No attempt to force CI if the repository reports no statuses or workflows.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Stage 7 wave must:

1. confirm whether the pre-build package is ready for Stage 8 Implementation Plan;
2. preserve the Stage 6 RED checks and downstream evidence obligations;
3. record unresolved launch or implementation-planning conditions honestly;
4. avoid implementation or implementation authorization;
5. preserve Foreman, Builder, ECAP, IAA, and CS2 proxy role separation;
6. avoid CI/admin loops while still recording status honestly;
7. be reviewable through QP, ECAP, IAA, and authorized CS2 proxy disposition.
