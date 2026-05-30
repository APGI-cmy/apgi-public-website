# Builder Appointment - APW Stage 6 QA-to-Red

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage6-qa-to-red-20260530 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - QA-to-Red Artifact Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage6-qa-to-red` |
| Target Folder | `modules/APW/05-qa-to-red/` |
| Date | 2026-05-30 |

---

## 1. Appointment

The Foreman appoints a QA-to-Red artifact builder to produce the APW Stage 6 RED suite.

This appointment is bounded by:

`.agent-admin/scope-declarations/apw-stage6-qa-to-red-20260530.md`

---

## 2. Builder Objective

Create a full RED suite that converts approved functional, technical, and architectural obligations into testable failure-first checks for the future implementation builder.

---

## 3. Required Source Artifacts

The builder must use:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 4. Delivery Requirements

The builder must deliver:

1. `modules/APW/05-qa-to-red/qa-to-red.md`;
2. `modules/APW/05-qa-to-red/qa-to-red-catalog.md`;
3. `modules/APW/05-qa-to-red/journey-coverage.md`;
4. `modules/APW/05-qa-to-red/requirement-traceability.md`;
5. `modules/APW/05-qa-to-red/qa-catalog-alignment.md`;
6. `modules/APW/05-qa-to-red/foreman-signoff-package.md`.

Every QA item must have a test ID, source, layer, description, RED condition, acceptance criteria, and clean handover summary.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, authorized CS2 proxy disposition, and draft PR creation.

No implementation work is authorized by this appointment.
