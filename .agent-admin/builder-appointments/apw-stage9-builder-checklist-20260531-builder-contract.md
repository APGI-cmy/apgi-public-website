# Builder Appointment - APW Stage 9 Builder Checklist

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage9-builder-checklist-20260531 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - Builder Checklist Artifact Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage9-builder-checklist` |
| Target Artifact | `modules/APW/08-builder-checklist/builder-checklist.md` |
| Date | 2026-05-31 |

---

## 1. Appointment

The Foreman appoints a builder-checklist artifact builder to produce the APW Stage 9 Builder Checklist.

This appointment is bounded by:

`.agent-admin/scope-declarations/apw-stage9-builder-checklist-20260531.md`

---

## 2. Builder Objective

Create a governed builder checklist that converts the approved Stage 8 Implementation Plan into executable obligations and evidence requirements for a future implementation builder.

This appointment does not authorize runtime implementation.

---

## 3. Required Source Artifacts

The builder must use:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/07-implementation-plan/implementation-plan.md`
- `modules/APW/06-pbfag/pbfag-checklist.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 4. Delivery Requirements

The builder must deliver a complete checklist that includes:

1. required source artifacts to load;
2. explicit do-not-cross boundaries;
3. work-package checklist mapped to Stage 8;
4. evidence checklist mapped to Stage 6 D1-D12;
5. legal/content/asset/social-preview conditions;
6. stop/escalation rules;
7. handover requirements for Stage 10 IAA Pre-Brief and Stage 11 implementation builder appointment.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, authorized CS2 proxy disposition, and draft PR creation.

No runtime implementation work is authorized by this appointment.
