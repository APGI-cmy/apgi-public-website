# Builder Appointment - APW Stage 5 Architecture

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage5-architecture-20260529 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - Architecture Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage5-architecture` |
| Target Artifact | `modules/APW/04-architecture/architecture.md` |
| Date | 2026-05-29 |

---

## 1. Appointment

The Foreman appoints a GitHub architecture builder to draft the APGI Public Website Architecture artifact for canonical Stage 5.

This appointment is bounded by:

`/.agent-admin/scope-declarations/apw-stage5-architecture-20260529.md`

---

## 2. Builder Objective

Create a complete Architecture artifact that converts the approved TRS into a coherent design structure for the public website, without starting implementation.

---

## 3. Required Source Artifacts

The builder must use:

- `FOREMAN_OPERATING_MODEL.md`
- `.agent-admin/readiness/stages-1-to-4-fully-functional-readiness-review-20260529.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `docs/governance/LOCAL_GOVERNANCE_CANON.md`

---

## 4. Delivery Requirements

The builder must deliver:

1. a complete Architecture draft in `modules/APW/04-architecture/architecture.md`;
2. traceability to the TRS;
3. explicit preservation of fully functional delivery controls;
4. clear architecture for route, section, component, content, hub, metadata, accessibility, responsive behavior, deployment, and evidence;
5. no runtime implementation code.

---

## 5. Handover Expectations

The builder must leave the wave ready for Foreman QP, ECAP, IAA review, and CS2 proxy disposition.
