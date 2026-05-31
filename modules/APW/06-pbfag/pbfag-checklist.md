# APW Stage 7 - PBFAG Checklist

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 7 - PBFAG |
| Folder | `modules/APW/06-pbfag` |
| Version | v0.1 |
| Status | Approved for Stage 8 Implementation Plan progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-31 |
| Last Updated | 2026-05-31 |
| Upstream Stage | `modules/APW/05-qa-to-red/qa-to-red.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage7-pbfag-20260531.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage7-pbfag-20260531-builder-contract.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage7-pbfag-20260531.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage7-pbfag-signoff-20260531.md` |

---

## 1. Purpose

This Stage 7 Pre-Build Functional Assurance Gate validates whether the APW governed pre-build package is functionally ready to proceed to Stage 8 Implementation Plan.

PBFAG is not implementation. It does not appoint an implementation builder, authorize code changes, or satisfy build evidence gates.

---

## 2. Source Stack

| Source | PBFAG Function |
|--------|----------------|
| Stage 1 App Description | Confirms public website purpose and boundary. |
| Stage 2 UX Workflow & Wiring Spec | Confirms public journeys and handoffs. |
| Stage 3 FRS | Confirms functional obligations and negative requirements. |
| Stage 4 TRS | Confirms technical obligations and fully functional delivery controls. |
| Stage 5 Architecture | Confirms architecture exists for route, content, hub, metadata, accessibility, responsive behavior, deployment, and evidence. |
| Stage 6 QA-to-Red | Confirms concrete RED checks exist before implementation. |
| Foreman Operating Model | Confirms governance, role separation, and implementation gate discipline. |
| APW Build Progress Tracker | Confirms current stage state and downstream sequence. |

---

## 3. Gate Outcome Scale

| Outcome | Meaning |
|---------|---------|
| Pass | Ready to proceed to Stage 8 Implementation Plan. |
| Conditional Pass | Ready to proceed, with conditions that must be carried forward. |
| Block | Not ready to proceed; builder correction required before Stage 8. |
| Escalate | Requires CS2/Johan decision before progression. |

---

## 4. PBFAG Checklist

| Gate ID | Area | Source | Check | Result | Evidence / Rationale | Carry-Forward Condition |
|---------|------|--------|-------|--------|----------------------|-------------------------|
| PBFAG-001 | Scope continuity | Stages 1-6; Foreman Operating Model | Public website scope remains stable and excludes authenticated tooling, CRM, LMS replacement, ISMS backend logic, and unapproved automation. | Pass | FRS, TRS, Architecture, and Stage 6 D10/D12 preserve the public-only boundary. | Stage 8 must preserve public-only v1 scope unless CS2 approves a scope change. |
| PBFAG-002 | App and journey foundation | Stage 1; Stage 2; Stage 6 journey coverage | Visitor, training, APGI Hub, contact, mobile, accessibility, and governance journeys have traceable coverage. | Pass | Stage 6 journey coverage maps the major user outcomes to QA domains. | Stage 8 must convert journeys into implementation-plan work packages. |
| PBFAG-003 | FRS readiness | Stage 3 FRS | Functional requirements are approved and usable for downstream implementation planning. | Pass | Stage 3 is approved and carried through TRS, Architecture, and QA-to-Red. | Stage 8 must not silently remove FRS obligations. |
| PBFAG-004 | TRS readiness | Stage 4 TRS | Technical requirements are approved and specific enough for implementation planning. | Pass | Stage 4 is approved and includes route, hub, training, contact, content, SEO, accessibility, responsive, security, and FFD requirements. | Stage 8 must map TRS areas to implementation tasks and evidence. |
| PBFAG-005 | Architecture readiness | Stage 5 Architecture | Architecture defines route, section, component, content, hub, metadata, accessibility, responsive, deployment, and evidence controls. | Pass | Stage 5 is approved for QA-to-Red and provides concrete controls for Stage 6. | Stage 8 must preserve the architecture or record governed deviations. |
| PBFAG-006 | QA-to-Red readiness | Stage 6 QA-to-Red catalog | RED suite exists with source, layer, description, RED condition, acceptance criteria, and handover summary. | Pass | Stage 6 catalog covers D1-D12 and was strengthened for legal route, reduced-motion, and text-first resilience coverage. | Stage 8 must plan how implementation will turn RED checks green. |
| PBFAG-007 | Legal route readiness | Stage 6 QA-D9-003 | Privacy and terms route/reservation readiness is explicitly tested. | Conditional Pass | Stage 6 now includes QA-D9-003. Actual legal content may remain a downstream launch-readiness item. | Stage 8 must decide whether implementation creates live legal pages or governed placeholders. |
| PBFAG-008 | External handoff readiness | Stage 6 D3, D4, D5 | Training, Thinkific, Hub, email, and phone handoffs have test coverage. | Pass | Stage 6 D3-D5 define approved destinations, composition rules, and broken-link failure conditions. | Stage 8 must specify link configuration and validation tasks. |
| PBFAG-009 | Accessibility readiness | Stage 6 D7 | Semantic, keyboard, mobile focus, reduced-motion, and text-first resilience are covered. | Pass | Stage 6 D7 includes semantic structure, keyboard, reduced-motion, and text-first checks. | Stage 8 must include accessibility evidence tasks and viewport/keyboard review. |
| PBFAG-010 | Responsive readiness | Stage 6 D8 | Mobile/tablet/desktop layout and no critical horizontal overflow are covered. | Pass | Stage 6 D8 has responsive and overflow RED checks. | Stage 8 must define representative viewport checks. |
| PBFAG-011 | Metadata and public trust readiness | Stage 6 D6; FRS-SEO; TRS-SEO | SEO/social metadata and brand narrative guardrails are covered. | Pass | Stage 6 D6 checks APGI-specific metadata and unapproved capability claims. | Stage 8 must define metadata implementation and inspection tasks. |
| PBFAG-012 | Placeholder and asset governance | Stage 6 D9 | Placeholder honesty, asset rights, and legal route readiness are covered. | Conditional Pass | Placeholder/asset rules are testable, but actual final content/assets remain implementation/launch conditions. | Stage 8 must track provisional copy, asset approvals, and final-content decisions. |
| PBFAG-013 | Public-only / no backend boundary | Stage 6 D10 | Site must render publicly without auth/private API and expose no secrets. | Pass | Stage 6 D10 checks public-only rendering and secret exposure. | Stage 8 must avoid backend work unless separately governed. |
| PBFAG-014 | Fully functional delivery evidence | Stage 6 D11; Architecture evidence categories | Implementation evidence requirements are explicit. | Pass | Stage 6 D11 requires route, anchors, links, mobile nav, responsiveness, keyboard, metadata, placeholders, and hub resolution evidence. | Stage 8 must define evidence deliverables before build. |
| PBFAG-015 | Governance sequencing | Stage 6 D12; Foreman Operating Model | Implementation remains blocked until downstream gates are complete or waived. | Pass | Governance docs and tracker preserve the downstream sequence. | Stage 8 may plan implementation but must not start it. |
| PBFAG-016 | CI/admin loop posture | CI/status records; Foreman instruction | CI/status must be reported honestly without creating admin loops. | Pass | Stage 6 recorded no statuses/no workflow runs as a fact, not as passing. | Stage 8 should avoid generating extra process artifacts solely to appease absent CI. |

---

## 5. PBFAG Outcome

**Outcome**: Conditional Pass.

The APW pre-build package is ready to proceed to Stage 8 Implementation Plan.

Conditions carried forward:

1. Stage 8 must preserve the public-only v1 boundary.
2. Stage 8 must map Stage 6 RED checks to implementation tasks and evidence deliverables.
3. Legal/privacy/terms route handling must be planned explicitly as live content or governed placeholders.
4. Placeholder copy, final content, team/profile content, assets, social preview assets, and legal copy remain downstream launch-readiness conditions.
5. Implementation remains blocked until Stage 8 Implementation Plan, Stage 9 Builder Checklist, Stage 10 IAA Pre-Brief, Stage 11 Builder Appointment, and Stage 12 Build Evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 6. Handover to Stage 8 Implementation Plan

Stage 8 should produce an implementation plan that:

- maps each APW section and route to build tasks;
- maps each Stage 6 RED check to implementation evidence;
- defines content/configuration sources;
- defines link registries and environment configuration;
- defines accessibility, responsive, metadata, and legal route work;
- defines test/evidence commands and manual verification steps;
- keeps implementation blocked until downstream gates are satisfied.

---

## 7. Stage 7 Disposition

**Foreman disposition**: Stage 7 PBFAG is complete as a governed pre-build functional assurance gate.

**IAA disposition**: Conditional Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly authorized the next Foreman wave in this chat.

**Next stage**: Stage 8 Implementation Plan.
