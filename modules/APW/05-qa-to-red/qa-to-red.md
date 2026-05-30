# APW Stage 6 - QA-to-Red

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Folder | `modules/APW/05-qa-to-red` |
| Version | v0.1 |
| Status | Approved for Stage 7 PBFAG progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-30 |
| Last Updated | 2026-05-30 |
| Upstream Stage | `modules/APW/04-architecture/architecture.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage6-qa-to-red-20260530.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage6-qa-to-red-20260530-builder-contract.md` |
| QA Catalog | `modules/APW/05-qa-to-red/qa-to-red-catalog.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage6-qa-to-red-20260530.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage6-qa-to-red-signoff-20260530.md` |

---

## 1. Purpose

This Stage 6 artifact converts the approved APW FRS, TRS, and Architecture into a RED verification suite.

The suite intentionally defines checks that should fail before implementation exists. A future builder must turn these RED checks green through implementation evidence, not through relaxed wording, hidden waivers, or skipped tests.

This artifact does not authorize implementation.

---

## 2. Source Stack

| Source | Role in Stage 6 |
|--------|-----------------|
| `modules/APW/02-frs/functional-requirements.md` | Functional obligations and user-facing boundaries. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Technical requirements and fully functional delivery controls. |
| `modules/APW/04-architecture/architecture.md` | Architectural controls and evidence categories. |
| `FOREMAN_OPERATING_MODEL.md` | Governance method, role separation, CS2 proxy limits, PR discipline, and implementation gate block. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Current stage state and downstream sequencing. |

---

## 3. QA-to-Red Principle

Each QA item must include:

- Test ID
- Source
- Layer
- Description
- RED Condition
- Acceptance Criteria
- Clean handover summary

No item may rely on a hidden TODO, TBD, or unstated downstream assumption.

---

## 4. Test Domains

| Domain | Name | Intent |
|--------|------|--------|
| D1 | Public homepage render and section flow | Prove the home route and governed section sequence. |
| D2 | Navigation, anchors, and mobile menu | Prove route/anchor integrity and mobile navigation equivalence. |
| D3 | Training handoffs | Prove public training handoffs and admin exclusion. |
| D4 | APGI Hub link composition | Prove frozen v1 hub routes and configurable host composition. |
| D5 | Contact handoffs | Prove email/phone handoffs and no form processing. |
| D6 | SEO and social metadata | Prove APGI-owned metadata and social readiness. |
| D7 | Accessibility and keyboard basics | Prove semantic structure and keyboard operability. |
| D8 | Responsive behavior | Prove mobile/tablet/desktop usability and no critical overflow. |
| D9 | Placeholder honesty and asset governance | Prove provisional content and asset-rights controls. |
| D10 | Public-only boundary / no unapproved backend | Prove unauthenticated, public-only, no-secret posture. |
| D11 | Fully functional delivery gate | Prove evidence coverage and no test dodging. |
| D12 | Governance / no implementation before gates | Prove stage sequencing and role separation. |

---

## 5. Stage 6 Artifact Package

| Artifact | Purpose |
|----------|---------|
| `qa-to-red.md` | Stage overview, source stack, domain model, and handover. |
| `qa-to-red-catalog.md` | Full RED test catalog. |
| `journey-coverage.md` | Mapping from user journeys and public outcomes to test coverage. |
| `requirement-traceability.md` | Mapping from FRS/TRS/Architecture obligations to QA domains. |
| `qa-catalog-alignment.md` | Alignment check proving no casual checklist or TBD entries. |
| `foreman-signoff-package.md` | Stage 6 signoff summary and downstream gate block. |

---

## 6. Handover to Stage 7 PBFAG

Stage 7 PBFAG should use this suite to verify that implementation planning cannot proceed casually.

The downstream PBFAG must confirm:

1. every RED check remains traceable;
2. no RED check is removed without CS2-approved disposition;
3. implementation remains blocked until required gates are complete or explicitly waived;
4. build evidence must later show how RED checks turned green.

---

## 7. Stage 6 Disposition

**Foreman disposition**: Stage 6 QA-to-Red is complete as a governed RED suite.

**IAA disposition**: Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly authorized proxy disposition in the task instruction.

**Next stage**: Stage 7 PBFAG.
