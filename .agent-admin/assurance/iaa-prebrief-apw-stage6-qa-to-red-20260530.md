# IAA Pre-Brief - APW Stage 6 QA-to-Red

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage6-qa-to-red-20260530 |
| Module | APW - APGI Public Website |
| Role | Independent Assurance Agent Pre-Brief |
| Branch | `foreman/apw-stage6-qa-to-red` |
| Status | Ready for IAA review |
| Date | 2026-05-30 |

---

## 1. Purpose

This pre-brief prepares the Independent Assurance Agent to review the APW Stage 6 QA-to-Red suite independently.

The IAA must determine whether the suite is traceable, complete, and strong enough to feed Stage 7 PBFAG without weakening the implementation gate.

---

## 2. Artifacts for Review

| Artifact | Path |
|---|---|
| Scope declaration | `.agent-admin/scope-declarations/apw-stage6-qa-to-red-20260530.md` |
| Builder appointment | `.agent-admin/builder-appointments/apw-stage6-qa-to-red-20260530-builder-contract.md` |
| Stage overview | `modules/APW/05-qa-to-red/qa-to-red.md` |
| RED catalog | `modules/APW/05-qa-to-red/qa-to-red-catalog.md` |
| Journey coverage | `modules/APW/05-qa-to-red/journey-coverage.md` |
| Requirement traceability | `modules/APW/05-qa-to-red/requirement-traceability.md` |
| QA catalog alignment | `modules/APW/05-qa-to-red/qa-catalog-alignment.md` |
| Tracker | `modules/APW/BUILD_PROGRESS_TRACKER.md` |
| Foreman QP | `.agent-admin/quality/apw-stage6-qa-to-red-20260530-foreman-qp.md` |
| ECAP | `.agent-admin/ecap/apw-stage6-qa-to-red-20260530-ecap.md` |
| Approved Architecture | `modules/APW/04-architecture/architecture.md` |
| Approved TRS | `modules/APW/03-trs/technical-requirements-specification.md` |
| Approved FRS | `modules/APW/02-frs/functional-requirements.md` |

---

## 3. Required IAA Review Lens

The IAA must evaluate:

1. Whether Stage 6 derives from approved upstream artifacts.
2. Whether the suite contains proper RED conditions and acceptance criteria.
3. Whether D1-D12 domains are covered.
4. Whether no TBD entries or casual QA placeholders remain.
5. Whether implementation remains blocked until downstream gates.
6. Whether the wave preserves role separation.

---

## 4. Suggested Outcome

Return one of:

- Pass
- Conditional Pass
- Reject
- Escalate
