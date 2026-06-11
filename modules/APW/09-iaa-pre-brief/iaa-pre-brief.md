# APW Stage 10 - IAA Pre-Brief v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 10 - IAA Pre-Brief |
| Folder | `modules/APW/09-iaa-pre-brief` |
| Version | v0.2 - Corrective IAA Pre-Brief |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-11 |
| Upstream Stage | `modules/APW/08-builder-checklist/builder-checklist.md` v0.2 |

---

## 1. Purpose

This Stage 10 IAA Pre-Brief prepares independent assurance review before Stage 11 Builder Appointment.

It gives the IAA reviewer the corrected source package, review questions, readiness criteria, known conditions, and Stage 11 handoff obligations.

This artifact does not appoint the implementation builder and does not start build work.

---

## 2. Assurance Objective

The IAA reviewer must decide whether APW is ready to appoint a future implementation builder under Stage 11.

Central question:

```text
Can a future implementation builder be appointed with clear scope, source artifacts, checklist obligations, QA mapping, evidence obligations, stop rules, and stage boundaries?
```

---

## 3. Required Source Package

| Source | Review Purpose |
|---|---|
| `FOREMAN_OPERATING_MODEL.md` | Confirm governance, role separation, proxy limits, PR discipline, and gate rules. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Confirm current stage state and downstream sequence. |
| `modules/APW/08-builder-checklist/builder-checklist.md` | Confirm builder obligations, evidence requirements, stop rules, and handoff expectations. |
| `modules/APW/08-builder-checklist/builder-checklist-qa-traceability-v0.2.md` | Confirm builder obligations map to IP-COR and Stage 6 QA IDs. |
| `modules/APW/08-builder-checklist/builder-evidence-checklist-v0.2.md` | Confirm evidence expectations for later build. |
| `modules/APW/07-implementation-plan/implementation-plan.md` | Confirm implementation planning and sequence. |
| `modules/APW/07-implementation-plan/ip-cor-work-package-map-v0.2.md` | Confirm IP-COR work package to QA mapping. |
| `modules/APW/07-implementation-plan/qa-to-green-evidence-map-v0.2.md` | Confirm evidence mapping to QA IDs. |
| `modules/APW/06-pbfag/pbfag-v0.2.md` | Confirm pre-build acceptance and Stage 8 readiness. |
| `modules/APW/05-qa-to-red/qa-to-red-catalog.md` | Confirm the RED suite future build must turn green. |
| `modules/APW/04-architecture/architecture.md` | Confirm architecture v0.2A. |
| `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md` | Confirm architecture canon completeness. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Confirm technical requirements. |
| `modules/APW/02-frs/functional-requirements.md` | Confirm functional requirements. |

---

## 4. Corrected Stage Status Summary

| Stage | Artifact | Current Status | IAA Review Interest |
|---|---|---|---|
| Stage 1 | App Description v0.2 | Merged | Product goal and correction context. |
| Stage 2 | UX Workflow v0.2 | Merged | Multi-page journeys and wiring. |
| Stage 3 | FRS v0.2 | Merged | Functional obligations. |
| Stage 4 | TRS v0.2 | Merged | Technical obligations. |
| Stage 5 | Architecture v0.2A | Merged | Canon-complete implementation architecture. |
| Stage 6 | QA-to-Red v0.2 | Merged | 30-test RED catalog and QA mappings. |
| Stage 7 | PBFAG v0.2 | Merged | Pre-build readiness gate. |
| Stage 8 | Implementation Plan v0.2 | Merged | IP-COR work packages, sequence, evidence map. |
| Stage 9 | Builder Checklist v0.2 | Merged | Builder obligations and evidence checklist. |
| Stage 10 | IAA Pre-Brief v0.2 | Current wave | Prepare IAA review for builder appointment. |
| Stage 11 | Builder Appointment v0.2 | Pending | Appoint and bind future implementation builder. |
| Stage 12 | Build Evidence | Pending | Build and prove green evidence later. |

---

## 5. Required Assurance Questions

| ID | Assurance Question | Pass Standard |
|---|---|---|
| IAAQ-001 | Are all required upstream artifacts present and coherent? | No missing required source and no unresolved contradiction. |
| IAAQ-002 | Does Stage 9 define executable builder obligations? | Checklist contains source load, work packages, QA IDs, evidence, and stop rules. |
| IAAQ-003 | Are Stage 6 QA IDs preserved through Stage 8 and Stage 9? | Work packages and checklist items map to QA IDs. |
| IAAQ-004 | Are evidence requirements sufficient for later Stage 12? | Evidence checklist covers route, nav, design, content, accessibility, metadata, deployment, and QA mapping. |
| IAAQ-005 | Is the approved public website boundary still clear? | Future builder can identify allowed and disallowed scope without interpretation. |
| IAAQ-006 | Are stop/escalation rules strong enough? | Builder must stop for missing, contradictory, stale, or scope-changing conditions. |
| IAAQ-007 | Does Stage 10 avoid appointing a builder? | Stage 10 prepares assurance only. |
| IAAQ-008 | Is Stage 11 ready to bind the builder to the checklist? | Appointment can incorporate exact obligations and acknowledgements. |
| IAAQ-009 | Is CI/status posture honest? | No unavailable status is described as passing. |
| IAAQ-010 | Is PR #11 still treated as failed scaffold reference? | It is not used as build baseline. |

---

## 6. Stage 6 QA Review Expectations

IAA must confirm that Stage 11 appointment will preserve the Stage 6 RED catalog, including:

- required page rendering;
- navigation and CTA wiring;
- services depth;
- platform module behavior;
- training and Thinkific handoff;
- contact and legal routes;
- design-system visibility;
- accessibility basics;
- responsive behavior;
- metadata and social readiness;
- environment, deployment, and Vercel evidence;
- public-only boundary;
- governance and build-to-green gate.

---

## 7. Builder Appointment Readiness Criteria

IAA should recommend Stage 11 only if:

| Criteria | Expected State |
|---|---|
| Source package | Complete and coherent. |
| Builder obligations | Explicit enough to attach to appointment. |
| QA mapping | Stage 6 QA IDs preserved. |
| Evidence obligations | Later evidence path is clear. |
| Stop rules | Explicit and enforceable. |
| Role separation | IAA review precedes appointment and build evidence. |
| Build gate | Still intact unless CS2/Johan changes gate state. |

---

## 8. Known Conditions

| Condition | Required IAA Handling |
|---|---|
| Final legal/content/asset details may still need owner disposition. | Carry as explicit appointment condition if unresolved. |
| Public APGI Hub base URL may need final configuration. | Carry environment/config acknowledgement into appointment. |
| Current public deployment may not be a complete website yet. | Do not treat current deployment as Stage 12 evidence. |
| Future implementation must follow Stage 9 checklist. | Confirm appointment binds builder to checklist. |

---

## 9. Recommended IAA Outcome Language

Expected outcome if no new blocker is found:

```text
Conditional Pass - suitable for Stage 11 Builder Appointment, provided the appointment binds the implementation builder to the Stage 9 checklist, preserves the approved public website boundary, carries unresolved owner-controlled content/configuration conditions, and requires Stage 6 QA-to-green evidence.
```

---

## 10. Handoff to Stage 11

Stage 11 Builder Appointment should include:

- appointed builder identity or role;
- source package acknowledgement;
- Stage 9 checklist incorporation;
- QA catalog acknowledgement;
- evidence obligations;
- known condition acknowledgement;
- stop/escalation rules;
- handoff requirements for Stage 12 Build Evidence.

---

## 11. Disposition

**Decision**: Draft for review.

**Implementation authorization**: Not granted.

**Next stage after merge**: Corrective Stage 11 Builder Appointment v0.2.
