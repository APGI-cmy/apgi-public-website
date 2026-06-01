# Builder Appointment - APW Stage 10 IAA Pre-Brief

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage10-iaa-pre-brief-20260601 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - IAA Pre-Brief Artifact Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage10-iaa-pre-brief` |
| Target Artifact | `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md` |
| Date | 2026-06-01 |

---

## 1. Appointment

The Foreman appoints an IAA pre-brief artifact builder to produce the APW Stage 10 IAA Pre-Brief.

This appointment is bounded by:

`.agent-admin/scope-declarations/apw-stage10-iaa-pre-brief-20260601.md`

---

## 2. Builder Objective

Create a governed assurance pre-brief that gives IAA enough context to review readiness before a future implementation builder is appointed.

This appointment does not authorize runtime implementation.

---

## 3. Required Source Artifacts

The builder must use:

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

## 4. Delivery Requirements

The builder must deliver a complete pre-brief that includes:

1. assurance objective;
2. source package to review;
3. stage status summary;
4. inspection questions;
5. RED-domain evidence expectations;
6. builder appointment readiness criteria;
7. risks, assumptions, and stop conditions;
8. recommended assurance outcome language.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, authorized CS2 proxy disposition, and draft PR creation.

No runtime implementation work is authorized by this appointment.
