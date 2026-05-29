# Builder Appointment - APW Stage 4 TRS

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage4-trs-20260529 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - Technical Requirements Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage4-trs` |
| Target Artifact | `modules/APW/03-trs/technical-requirements-specification.md` |
| Date | 2026-05-29 |

---

## 1. Appointment

The Foreman appoints a GitHub technical requirements builder to draft the APGI Public Website Technical Requirements Specification for canonical Stage 4.

This appointment is bounded by:

`/.agent-admin/scope-declarations/apw-stage4-trs-20260529.md`

---

## 2. Builder Objective

Create a complete TRS that converts the approved Stage 3 FRS into implementation-facing technical requirements without starting implementation.

---

## 3. Required Source Artifacts

The builder must use:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/02-frs/functional-requirements.md`
- `.agent-admin/signoffs/cs2-proxy-stage3-frs-signoff-20260529.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `docs/governance/LOCAL_GOVERNANCE_CANON.md`
- `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`

---

## 4. Delivery Requirements

The builder must deliver:

1. a complete TRS draft in `modules/APW/03-trs/technical-requirements-specification.md`;
2. clear technical requirement IDs;
3. traceability back to FRS requirement groups;
4. explicit fully functional delivery technical controls;
5. verification implications for QA-to-Red;
6. no implementation code.

---

## 5. Acceptance Criteria

The builder output must be specific enough for Architecture and QA-to-Red to derive enforceable design and verification gates.

---

## 6. Handover Expectations

The builder must leave enough detail for Foreman QP, ECAP, and IAA review without requiring reconstruction from chat memory.
