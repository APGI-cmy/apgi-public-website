# Builder Appointment - APW Stage 3 FRS

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage3-frs-20260529 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Appointed Builder | GitHub Builder - Documentation / Requirements Builder |
| Appointment Status | Active for this wave |
| Branch | `foreman/apw-stage3-frs` |
| Target Artifact | `modules/APW/02-frs/functional-requirements.md` |
| Date | 2026-05-29 |

---

## 1. Appointment

The Foreman appoints a GitHub documentation / requirements builder to draft the APGI Public Website Functional Requirements Specification for canonical build Stage 3.

This appointment is bounded by the scope declaration:

`/.agent-admin/scope-declarations/apw-stage3-frs-20260529.md`

---

## 2. Builder Objective

Create a complete FRS draft that converts the approved App Description and Stage 2 UX Workflow & Wiring Spec into functional requirements suitable for later TRS, Architecture, QA-to-Red, and build planning.

---

## 3. Required Source Artifacts

The builder must use:

- `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`
- `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/00-app-description/app-description.md`
- `modules/APW/01-ux-workflow-wiring/ux-workflow-wiring-spec.md`
- `docs/governance/LOCAL_GOVERNANCE_CANON.md`
- `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`

---

## 4. Delivery Requirements

The builder must deliver:

1. `modules/APW/02-frs/functional-requirements.md` as the primary Stage 3 FRS draft.
2. A tracker update in `modules/APW/BUILD_PROGRESS_TRACKER.md`.
3. No implementation code.
4. No TRS or architecture content beyond FRS-level functional constraints.
5. Requirements with stable IDs and traceability.

---

## 5. Acceptance Criteria

The builder output must satisfy the scope declaration acceptance criteria and be reviewable by Foreman QP, ECAP, and IAA.

---

## 6. Handover Expectations

The builder must leave the wave in a state where Foreman can perform QP and prepare ECAP / IAA pre-brief without reconstructing the work history from memory.
