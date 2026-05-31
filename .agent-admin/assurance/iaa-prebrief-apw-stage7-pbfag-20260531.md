# IAA Pre-Brief - APW Stage 7 PBFAG

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage7-pbfag-20260531 |
| Module | APW - APGI Public Website |
| Role | Independent Assurance Agent Pre-Brief |
| Branch | `foreman/apw-stage7-pbfag` |
| Status | Ready for IAA review |
| Date | 2026-05-31 |

---

## 1. Purpose

This pre-brief prepares the Independent Assurance Agent to review the APW Stage 7 PBFAG independently.

The IAA must determine whether the PBFAG is sufficient to support progression to Stage 8 Implementation Plan without prematurely authorizing implementation.

---

## 2. Artifacts for Review

| Artifact | Path |
|---|---|
| Scope declaration | `.agent-admin/scope-declarations/apw-stage7-pbfag-20260531.md` |
| Builder appointment | `.agent-admin/builder-appointments/apw-stage7-pbfag-20260531-builder-contract.md` |
| PBFAG checklist | `modules/APW/06-pbfag/pbfag-checklist.md` |
| Tracker | `modules/APW/BUILD_PROGRESS_TRACKER.md` |
| Operating model | `FOREMAN_OPERATING_MODEL.md` |
| Foreman QP | `.agent-admin/quality/apw-stage7-pbfag-20260531-foreman-qp.md` |
| ECAP | `.agent-admin/ecap/apw-stage7-pbfag-20260531-ecap.md` |
| Stage 6 QA-to-Red overview | `modules/APW/05-qa-to-red/qa-to-red.md` |
| Stage 6 RED catalog | `modules/APW/05-qa-to-red/qa-to-red-catalog.md` |
| Stage 6 traceability | `modules/APW/05-qa-to-red/requirement-traceability.md` |
| Stage 5 Architecture | `modules/APW/04-architecture/architecture.md` |
| Stage 4 TRS | `modules/APW/03-trs/technical-requirements-specification.md` |
| Stage 3 FRS | `modules/APW/02-frs/functional-requirements.md` |

---

## 3. Required IAA Review Lens

The IAA must evaluate:

1. Whether PBFAG derives from the approved Stage 1 through Stage 6 package.
2. Whether the PBFAG makes a justified pass / conditional pass / block decision.
3. Whether Stage 6 RED checks are preserved and not weakened.
4. Whether Stage 8 Implementation Plan conditions are clear.
5. Whether implementation remains blocked.
6. Whether role separation and governance ceremony are preserved.
7. Whether CI/status is handled factually without creating an admin loop.

---

## 4. Suggested Outcome

Return one of:

- Pass
- Conditional Pass
- Reject
- Escalate
