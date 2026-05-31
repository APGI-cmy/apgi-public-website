# Builder Appointment - APW Stage 7 PBFAG

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage7-pbfag-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - PBFAG Artifact Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage7-pbfag` |
| Target Artifact | `modules/APW/06-pbfag/pbfag-checklist.md` |
| Date | 2026-05-31 |

---

## 1. Appointment

The Foreman appoints a PBFAG artifact builder to produce the APW Stage 7 Pre-Build Functional Assurance Gate checklist.

This appointment is bounded by:

`.agent-admin/scope-declarations/apw-stage7-pbfag-20260531.md`

---

## 2. Builder Objective

Create a governed PBFAG checklist that validates whether the APW pre-build package is ready to proceed to Stage 8 Implementation Plan.

---

## 3. Required Source Artifacts

The builder must use:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/05-qa-to-red/qa-to-red.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/05-qa-to-red/journey-coverage.md`
- `modules/APW/05-qa-to-red/requirement-traceability.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 4. Delivery Requirements

The builder must deliver:

1. a complete PBFAG artifact in `modules/APW/06-pbfag/pbfag-checklist.md`;
2. readiness checks for scope, FRS, TRS, Architecture, QA-to-Red, public boundary, links, accessibility, metadata, content/asset governance, and downstream evidence;
3. clear pass / conditional pass / block criteria;
4. carry-forward conditions for Stage 8 Implementation Plan;
5. no implementation code or implementation authorization.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, authorized CS2 proxy disposition, and draft PR creation.
