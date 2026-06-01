# APW Stage 10 - IAA Pre-Brief

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 10 - IAA Pre-Brief |
| Folder | `modules/APW/09-iaa-pre-brief` |
| Version | v0.1 |
| Status | Approved for Stage 11 Builder Appointment progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-06-01 |
| Last Updated | 2026-06-01 |
| Upstream Stage | `modules/APW/08-builder-checklist/builder-checklist.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage10-iaa-pre-brief-20260601.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage10-iaa-pre-brief-20260601-builder-contract.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage10-iaa-pre-brief-20260601.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage10-iaa-pre-brief-signoff-20260601.md` |

---

## 1. Purpose

This Stage 10 IAA Pre-Brief prepares independent assurance to review whether APW is ready for Stage 11 Builder Appointment.

It gives the future IAA reviewer the context, source package, inspection questions, evidence expectations, and escalation rules needed to assess implementation-builder readiness without relying on chat history.

This artifact does not appoint the runtime implementation builder and does not authorize build work.

---

## 2. Assurance Objective

The IAA reviewer must determine whether the APW pre-build package is strong enough to appoint a future implementation builder under Stage 11.

The central assurance question is:

```text
Can a future implementation builder be appointed with clear scope, clear source artifacts, clear evidence obligations, clear stop rules, and a fully functional build narrative that can be verified?
```

---

## 3. Source Package for IAA Review

| Source | Review Purpose |
|--------|----------------|
| `FOREMAN_OPERATING_MODEL.md` | Confirm governance method, role separation, CS2 proxy limits, PR discipline, and gate rules. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Confirm current stage state and downstream sequence. |
| `modules/APW/08-builder-checklist/builder-checklist.md` | Confirm builder obligations, evidence requirements, stop rules, and handover expectations. |
| `modules/APW/07-implementation-plan/implementation-plan.md` | Confirm work package sequence and RED-to-evidence planning. |
| `modules/APW/06-pbfag/pbfag-checklist.md` | Confirm pre-build functional assurance conditions and readiness logic. |
| `modules/APW/05-qa-to-red/qa-to-red-catalog.md` | Confirm RED checks and acceptance criteria. |
| `modules/APW/04-architecture/architecture.md` | Confirm route, content, component, accessibility, responsive, metadata, deployment, and evidence architecture. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Confirm technical requirements and fully functional delivery controls. |
| `modules/APW/02-frs/functional-requirements.md` | Confirm functional requirements and negative requirements. |

---

## 4. Stage Status Summary

| Stage | Artifact | Current Status | IAA Review Interest |
|-------|----------|----------------|---------------------|
| Stage 3 | FRS | Approved | Functional obligations and negative scope. |
| Stage 4 | TRS | Approved | Technical obligations and FFD controls. |
| Stage 5 | Architecture | Approved | Implementation architecture and evidence categories. |
| Stage 6 | QA-to-Red | Approved | RED checks the implementation must turn green. |
| Stage 7 | PBFAG | Approved | Functional assurance conditions. |
| Stage 8 | Implementation Plan | Approved | Work packages and evidence plan. |
| Stage 9 | Builder Checklist | Approved | Executable builder obligations and stop rules. |
| Stage 10 | IAA Pre-Brief | Current wave | Independent assurance preparation before builder appointment. |
| Stage 11 | Builder Appointment | Pending | No runtime implementation builder appointed yet. |
| Stage 12 | Build Evidence | Pending | Build work not started. |

---

## 5. Required Assurance Questions

The IAA reviewer must answer each question explicitly.

| ID | Assurance Question | Required Evidence Source | Pass Standard |
|----|--------------------|--------------------------|---------------|
| IAAQ-001 | Are all required upstream artifacts present and coherent? | Tracker, stages 3-9 | No missing required source; no unresolved contradiction. |
| IAAQ-002 | Is the public-only v1 boundary clear enough for builder appointment? | Operating model, Stage 8, Stage 9 | Builder can identify prohibited scope without interpretation. |
| IAAQ-003 | Are Stage 6 RED checks preserved through Stage 8 and Stage 9? | Stage 6 catalog, Stage 8, Stage 9 | Every D1-D12 domain maps to work/evidence obligations. |
| IAAQ-004 | Does the Stage 9 checklist define executable builder obligations? | Stage 9 checklist | Checklist has source load, work packages, evidence, stop rules, and handover requirements. |
| IAAQ-005 | Are fully functional build expectations inspectable? | Stage 6 D11, Stage 8 evidence plan, Stage 9 evidence checklist | Route, links, nav, responsive, keyboard, metadata, placeholder, legal route, and hub evidence are required. |
| IAAQ-006 | Are legal/content/asset/social-preview conditions explicit? | Stage 7, Stage 8, Stage 9 | Conditions are visible and cannot be silently skipped. |
| IAAQ-007 | Are stop/escalation rules strong enough? | Stage 9 checklist | Builder must stop for scope conflict, missing legal/content decisions, unknown links, or missing evidence. |
| IAAQ-008 | Does Stage 10 avoid appointing the runtime builder? | Stage 10 scope and artifact | Stage 10 prepares assurance only. |
| IAAQ-009 | Is Stage 11 ready to bind a builder to the checklist? | Stage 9 and this pre-brief | Builder appointment can incorporate exact obligations and acknowledgements. |
| IAAQ-010 | Is CI/status posture honest and loop-resistant? | PR/status notes and operating model | No unavailable status is described as passing; no admin loop required solely because CI is absent. |

---

## 6. RED-Domain Review Expectations

The IAA reviewer must verify that Stage 11 Builder Appointment will require evidence for all Stage 6 RED domains.

| Domain | IAA Must Confirm Before Builder Appointment |
|--------|--------------------------------------------|
| D1 | Homepage route and section sequence evidence will be required. |
| D2 | Desktop/mobile navigation, anchors, and keyboard/menu evidence will be required. |
| D3 | Training handoff link evidence will be required. |
| D4 | APGI Hub seven-tile URL composition evidence will be required. |
| D5 | Email/phone handoff and no-form evidence will be required. |
| D6 | SEO/social metadata evidence will be required. |
| D7 | Accessibility, keyboard, reduced-motion, and text-first evidence will be required. |
| D8 | Responsive viewport and no-overflow evidence will be required. |
| D9 | Placeholder, asset, legal route, and social image status evidence will be required. |
| D10 | Public-only/no-private-dependency evidence will be required. |
| D11 | Fully functional evidence pack will be required. |
| D12 | Governance and exception evidence will be required. |

---

## 7. Builder Appointment Readiness Criteria

IAA should recommend Stage 11 only if all criteria below are satisfied or explicitly dispositioned by CS2 / Johan Ras.

| Criteria ID | Readiness Criterion | Expected State |
|-------------|--------------------|----------------|
| BAR-001 | Source package is complete. | All required artifacts available and coherent. |
| BAR-002 | Builder obligations are explicit. | Stage 9 checklist can be attached to appointment without rewriting. |
| BAR-003 | Scope boundaries are explicit. | Public-only v1 boundary and prohibited work are clear. |
| BAR-004 | Evidence obligations are explicit. | D1-D12 evidence requirements are present. |
| BAR-005 | Stop rules are explicit. | Builder must escalate missing, conflicting, or scope-expanding conditions. |
| BAR-006 | Content/legal/asset conditions are explicit. | Placeholder, final copy, legal routes, social image, and assets are tracked. |
| BAR-007 | CI/status posture is explicit. | Missing CI is recorded honestly and not treated as pass. |
| BAR-008 | Role separation is intact. | IAA review precedes builder appointment and build evidence. |

---

## 8. Known Risks and Conditions

| ID | Risk / Condition | Required IAA Handling |
|----|------------------|-----------------------|
| RISK-001 | Legal/privacy/terms copy may not be final. | Confirm governed live pages or placeholders are acceptable before builder appointment. |
| RISK-002 | Final content/assets/social preview assets may not be approved. | Confirm text-first placeholders or approved assets are acceptable. |
| RISK-003 | Public ISMS host/base URL may need environment configuration. | Confirm Stage 11 requires configuration acknowledgement. |
| RISK-004 | CI may not report statuses. | Confirm no unavailable status is treated as passing. |
| RISK-005 | Scope creep into backend/contact form/CRM/LMS/admin tooling. | Confirm Stage 11 binds builder to hard boundaries and stop rules. |

---

## 9. Recommended IAA Outcome Language

IAA should return one of:

- **Pass**: Ready for Stage 11 Builder Appointment with no open conditions.
- **Conditional Pass**: Ready for Stage 11, with listed conditions carried into the builder appointment.
- **Reject**: Not ready; correction required before builder appointment.
- **Escalate**: CS2/Johan decision required before progression.

Recommended expected outcome for current state:

```text
Conditional Pass - suitable for Stage 11 Builder Appointment, provided the appointment binds the implementation builder to the Stage 9 checklist, preserves public-only scope, carries legal/content/asset conditions, and requires D1-D12 evidence.
```

---

## 10. Stage 10 Handover to Stage 11

Stage 11 Builder Appointment should use this pre-brief and must include:

- appointed implementation builder identity or role;
- explicit source package acknowledgement;
- Stage 9 checklist attachment or incorporation;
- public-only v1 boundary acknowledgement;
- D1-D12 evidence obligations;
- content/legal/asset condition acknowledgement;
- stop/escalation rules;
- CI/status honesty rule;
- handover requirements for Stage 12 Build Evidence.

---

## 11. Gate Statement

This Stage 10 artifact approves progression to Stage 11 Builder Appointment only.

It does not appoint the runtime implementation builder and does not authorize build work.

Implementation remains blocked until Stage 11 Builder Appointment and Stage 12 Build Evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 12. Stage 10 Disposition

**Foreman disposition**: Stage 10 IAA Pre-Brief is complete as a governed pre-builder-appointment assurance artifact.

**IAA disposition**: Conditional Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly instructed progression to Stage 10.

**Next stage**: Stage 11 Builder Appointment.
