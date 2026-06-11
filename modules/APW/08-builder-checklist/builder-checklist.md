# APW Stage 9 - Builder Checklist v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 9 - Builder Checklist |
| Folder | `modules/APW/08-builder-checklist` |
| Version | v0.2 - Corrective Builder Checklist |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-10 |
| Upstream Stage | `modules/APW/07-implementation-plan/implementation-plan.md` v0.2 |
| QA Source | `modules/APW/05-qa-to-red/qa-to-red-catalog.md` v0.2 |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage9-builder-checklist-v02-20260610.md` |

---

## 1. Purpose

This Builder Checklist v0.2 converts the approved Stage 8 Implementation Plan into builder-ready obligations for a later implementation builder.

This checklist does not appoint the implementation builder and does not start build work. It prepares Stage 10 IAA Pre-Brief and Stage 11 Builder Appointment.

---

## 2. Required Source Load

A future builder must load and acknowledge these sources before doing build work:

| Source | Required Use |
|---|---|
| `FOREMAN_OPERATING_MODEL.md` | Governance, gate sequence, and role discipline. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Current APW stage state. |
| `modules/APW/07-implementation-plan/implementation-plan.md` | Stage 8 implementation plan. |
| `modules/APW/07-implementation-plan/ip-cor-work-package-map-v0.2.md` | IP-COR to QA mapping. |
| `modules/APW/07-implementation-plan/qa-to-green-evidence-map-v0.2.md` | Evidence mapping. |
| `modules/APW/07-implementation-plan/build-sequencing-v0.2.md` | Build sequence. |
| `modules/APW/07-implementation-plan/implementation-readiness-gates-v0.2.md` | Gate state. |
| `modules/APW/06-pbfag/pbfag-v0.2.md` | PBFAG conditions. |
| `modules/APW/05-qa-to-red/qa-to-red-catalog.md` | RED checks to turn green. |
| `modules/APW/04-architecture/architecture.md` | Architecture v0.2A. |
| `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md` | Architecture canon completeness. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Technical requirements. |
| `modules/APW/02-frs/functional-requirements.md` | Functional requirements. |

The builder must stop and escalate if required sources are missing, contradictory, or stale.

---

## 3. Builder Work-Package Checklist

| Checklist ID | IP-COR | Builder Obligation | QA IDs | Evidence Required | Stop / Escalate If |
|---|---|---|---|---|---|
| BC-001 | IP-COR-001 | Implement required public pages. | APW-QA-001, APW-QA-002 | Route list and page render evidence. | Any required page is missing. |
| BC-002 | IP-COR-001 | Implement shared layout, header, footer, and mobile navigation. | APW-QA-003, APW-QA-017, APW-QA-019 | Header/footer/mobile nav evidence. | Primary navigation path is incomplete. |
| BC-003 | IP-COR-002 | Implement premium APGI design system. | APW-QA-015, APW-QA-016 | Visual evidence showing palette, cards, sections, CTAs. | Site remains plain scaffold. |
| BC-004 | IP-COR-003 | Implement Services page content depth. | APW-QA-007, APW-QA-026 | Services content inventory and browser evidence. | Services page is shallow or lacks CTAs. |
| BC-005 | IP-COR-004 | Implement Platform/APGI Hub page. | APW-QA-008, APW-QA-009, APW-QA-023 | Module grid, status, link/pending evidence. | Required modules are missing or links are broken. |
| BC-006 | IP-COR-005 | Implement Training page. | APW-QA-010, APW-QA-011, APW-QA-012 | Training page, offering cards, Thinkific handoff evidence. | Thinkific handoff missing or admin link exposed. |
| BC-007 | IP-COR-006 | Implement homepage conversion front door. | APW-QA-006, APW-QA-015 | Homepage evidence for hero, previews, CTAs. | Homepage is the whole site or lacks exploration paths. |
| BC-008 | IP-COR-007 | Implement validation checks. | APW-QA-021, APW-QA-024, APW-QA-027, APW-QA-028 | Validation output and build log. | Validation cannot fail missing required items. |
| BC-009 | IP-COR-008 | Prepare QA-to-green evidence mapping. | APW-QA-025, APW-QA-028, APW-QA-030 | Evidence map to Stage 6 QA IDs. | Evidence cannot be traced to QA catalog. |
| BC-010 | Boundary | Preserve public static website boundary. | APW-QA-022, APW-QA-029 | Source inspection and validation evidence. | Scope expands beyond approved public site boundary. |

---

## 4. Builder Execution Rules

1. Build work must follow the Stage 8 sequence.
2. Every completed work package must produce evidence.
3. Every evidence item must map to Stage 6 QA IDs.
4. Validation must be implemented before build evidence can close green.
5. Missing content must be labelled as governed placeholder, not final copy.
6. External links must be live or have a clear pending state.
7. Any unresolved contradiction must stop the builder until Foreman/CS2 disposition.

---

## 5. Stage 10 Handoff

Stage 10 IAA Pre-Brief v0.2 must brief the assurance reviewer on:

- this checklist;
- the Stage 8 implementation plan;
- the Stage 6 QA catalog;
- evidence expectations;
- stop/escalation conditions;
- the continuing build gate.

---

## 6. Disposition

**Decision**: Draft for review.

**Implementation authorization**: Not granted.

**Next stage after merge**: Corrective Stage 10 IAA Pre-Brief v0.2.
