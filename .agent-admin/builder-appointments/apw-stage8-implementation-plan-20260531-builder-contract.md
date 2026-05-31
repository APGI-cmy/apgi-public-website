# Builder Appointment - APW Stage 8 Implementation Plan

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage8-implementation-plan-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - Implementation Plan Artifact Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage8-implementation-plan` |
| Target Artifact | `modules/APW/07-implementation-plan/implementation-plan.md` |
| Date | 2026-05-31 |

---

## 1. Appointment

The Foreman appoints an implementation-plan artifact builder to produce the APW Stage 8 Implementation Plan.

This appointment is bounded by:

`.agent-admin/scope-declarations/apw-stage8-implementation-plan-20260531.md`

---

## 2. Builder Objective

Create a governed implementation plan that translates the approved APW pre-build package into sequenced implementation work packages and evidence requirements.

This builder is not appointed to implement code.

---

## 3. Required Source Artifacts

The builder must use:

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

## 4. Delivery Requirements

The builder must deliver a complete implementation plan that includes:

1. implementation boundary;
2. work package sequence;
3. route/section/component plan;
4. content and configuration plan;
5. link registry and environment plan;
6. accessibility, responsive, metadata, and legal route plan;
7. Stage 6 RED-to-evidence mapping;
8. Stage 7 PBFAG condition carry-forward;
9. risks, assumptions, dependencies, and handover to Stage 9 Builder Checklist.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, authorized CS2 proxy disposition, and draft PR creation.

No runtime implementation work is authorized by this appointment.
