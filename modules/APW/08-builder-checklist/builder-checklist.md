# APW Stage 9 - Builder Checklist

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 9 - Builder Checklist |
| Folder | `modules/APW/08-builder-checklist` |
| Version | v0.1 |
| Status | Approved for Stage 10 IAA Pre-Brief progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-31 |
| Last Updated | 2026-05-31 |
| Upstream Stage | `modules/APW/07-implementation-plan/implementation-plan.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage9-builder-checklist-20260531.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage9-builder-checklist-20260531-builder-contract.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage9-builder-checklist-20260531.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage9-builder-checklist-signoff-20260531.md` |

---

## 1. Purpose

This Stage 9 Builder Checklist converts the approved APW Stage 8 Implementation Plan into executable obligations for a future implementation builder.

This artifact does not appoint the runtime implementation builder and does not authorize build work. It prepares the checklist that Stage 10 and Stage 11 must use before implementation can begin.

---

## 2. Required Source Load

A future implementation builder must load and acknowledge the following before doing any build work:

| Source | Required Use |
|--------|--------------|
| `FOREMAN_OPERATING_MODEL.md` | Governance, role separation, gate rules, and no-implementation-before-gates discipline. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Current stage state and downstream gates. |
| `modules/APW/07-implementation-plan/implementation-plan.md` | Work packages, evidence plan, risks, dependencies, and handover requirements. |
| `modules/APW/06-pbfag/pbfag-checklist.md` | PBFAG conditions and fully functional pre-build readiness. |
| `modules/APW/05-qa-to-red/qa-to-red-catalog.md` | RED checks that must become green through evidence. |
| `modules/APW/04-architecture/architecture.md` | Route, section, component, content/configuration, accessibility, responsive, metadata, deployment, and evidence architecture. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Technical requirements and fully functional delivery controls. |
| `modules/APW/02-frs/functional-requirements.md` | Functional requirements and negative requirements. |

The implementation builder must not proceed if any required source is missing, contradictory, or stale without Foreman/CS2 disposition.

---

## 3. Hard Scope Boundaries

The future implementation builder must preserve the APW v1 public-only boundary.

The builder must not introduce:

- authenticated staff tooling;
- CRM or lead database;
- LMS replacement or Thinkific administration;
- ISMS backend logic;
- database-backed workflows;
- LinkedIn scraping or synchronization;
- unapproved analytics, tracking, CMS, or marketing automation;
- secret or private configuration exposure in public output;
- new public claims, testimonials, client marks, or regulated content without governed approval.

Any proposed deviation requires explicit Foreman escalation and CS2/Johan disposition before work continues.

---

## 4. Builder Work-Package Checklist

| Checklist ID | Stage 8 Work Package | Builder Obligation | Evidence Required | Stop / Escalate If |
|--------------|----------------------|--------------------|-------------------|--------------------|
| BC-WP-001 | WP-001 Repository and Runtime Baseline | Inspect project structure, scripts, route entry points, and static/static-first posture before modifying implementation files. | Script inventory, entry point notes, command list. | Build requires auth/private runtime data or unknown framework assumptions. |
| BC-WP-002 | WP-002 Structured Content and Configuration | Implement or update structured content/config sources for sections, links, hub tiles, placeholders, and assets. | Content/config inventory, placeholder register, asset status register. | Content is scattered, untraceable, or includes unapproved final claims/assets. |
| BC-WP-003 | WP-003 Public Routes and Legal Destinations | Implement `/` and legal route handling for `/privacy` and `/terms` or governed placeholder equivalents. | Route render evidence and footer/legal link inspection. | Legal/footer links are broken or legal handling is not explicitly governed. |
| BC-WP-004 | WP-004 Homepage Section Implementation | Implement hero, trust/proof, about, services, training, APGI Hub, impact, team, contact, and footer sections. | Section render evidence and content completeness review. | Required section is absent without governed deferral. |
| BC-WP-005 | WP-005 Navigation, CTAs, and Mobile Menu | Implement desktop nav, mobile menu, anchors, footer links, visible focus, and keyboard operation. | Desktop/mobile nav evidence, anchor evidence, keyboard evidence. | Any primary path is broken, mouse-only, or hidden behind non-semantic controls. |
| BC-WP-006 | WP-006 Training and Contact Handoffs | Implement VPSHR, Thinkific, email, and phone handoffs with readable fallback text and no contact-form processing. | Link target inspection and no-form review. | Any handoff points to admin/private URL or introduces backend capture. |
| BC-WP-007 | WP-007 APGI Hub Implementation | Implement seven v1 hub tiles with base URL composition and frozen route slugs. | Seven-tile config inspection and generated destination evidence. | Hub slugs drift or unapproved extra tiles appear. |
| BC-WP-008 | WP-008 Metadata, SEO, and Social Readiness | Implement APGI-owned title, description, canonical, Open Graph basics, and approved social image behavior. | Metadata inspection and claim review. | Metadata claims unapproved capabilities or uses unapproved assets. |
| BC-WP-009 | WP-009 Accessibility and Responsive Delivery | Implement semantic structure, keyboard access, visible focus, reduced-motion handling, text-first resilience, and responsive layouts. | Semantic, keyboard, reduced-motion, text-first, and viewport evidence. | Core meaning or primary controls fail without image, hover, mouse, or motion. |
| BC-WP-010 | WP-010 Evidence and Closure Package | Produce command/manual evidence and map every Stage 6 RED domain to green evidence or explicit exception. | RED-to-green evidence matrix and unresolved conditions list. | Evidence is missing, vague, or treats unverified behavior as complete. |

---

## 5. RED-Domain Evidence Checklist

| QA Domain | Builder Must Prove | Minimum Evidence |
|-----------|--------------------|------------------|
| D1 - Homepage render and section flow | `/` renders publicly and exposes the governed section sequence. | Screenshot/manual log and section checklist. |
| D2 - Navigation, anchors, and mobile menu | Desktop/mobile navigation works and anchors resolve. | Link/anchor test notes and keyboard/menu evidence. |
| D3 - Training handoffs | VPSHR and Thinkific public handoffs are correct. | URL inspection evidence. |
| D4 - APGI Hub link composition | Seven hub URLs compose from base URL plus frozen slugs. | Config snapshot and generated link inspection. |
| D5 - Contact handoffs | Email/phone handoffs work, remain readable, and no form backend exists. | `mailto`, `tel`, fallback text, and no-form inspection. |
| D6 - SEO and social metadata | Metadata is APGI-specific and does not overclaim. | Rendered metadata inspection. |
| D7 - Accessibility and keyboard basics | Semantics, keyboard, reduced motion, and text-first meaning are present. | Manual accessibility walkthrough and notes. |
| D8 - Responsive behavior | Mobile/tablet/desktop layouts are usable without critical overflow. | Viewport evidence. |
| D9 - Placeholder honesty and asset governance | Placeholder, asset, legal route, and social image states are explicit. | Registers and rendered review. |
| D10 - Public-only boundary | Site works without auth/private APIs and exposes no private configuration. | Source/rendered inspection notes. |
| D11 - Fully functional delivery gate | Route, links, nav, responsive, keyboard, metadata, placeholders, legal routes, and hub behavior are evidenced. | Complete evidence pack. |
| D12 - Governance | Work stayed within approved gates and exceptions are documented. | Handover summary and exception log. |

No RED item may be closed by assumption alone.

---

## 6. Content, Legal, and Asset Conditions

The future implementation builder must maintain explicit status for:

- placeholder copy;
- final copy;
- legal/privacy/terms copy;
- team/profile content;
- testimonials or proof claims;
- client or partner marks;
- social preview image;
- imagery and icon rights;
- APGI Hub host/base URL;
- training links;
- contact details.

If final content or assets are not approved, the builder must use governed placeholders or text-first alternatives and record them in the evidence package.

---

## 7. Command and Manual Verification Expectations

The future implementation builder must run available project commands, where present, such as install/build/lint/test/typecheck or equivalent project-specific checks.

If no command exists, the builder must record that fact honestly and provide manual verification evidence instead of inventing a pass.

Manual verification must cover at least:

1. `/` route rendering;
2. legal route/reservation behavior;
3. primary navigation anchors;
4. mobile menu behavior;
5. external handoff URLs;
6. APGI Hub URL composition;
7. mail and phone handoffs;
8. metadata inspection;
9. keyboard walkthrough;
10. reduced-motion/text-first review;
11. responsive viewport checks;
12. placeholder and asset review;
13. no backend/contact-form/secret exposure review.

---

## 8. Stop and Escalation Rules

The future implementation builder must stop and escalate to Foreman if:

- a required upstream artifact conflicts with another artifact;
- implementation would require a backend, database, authentication, CRM, LMS administration, or private API;
- approved legal/content/asset material is unavailable and a placeholder decision is unclear;
- a RED check cannot be satisfied without changing scope;
- a required link target is unknown or unsafe;
- a route or section must be deferred;
- evidence cannot be produced for a claimed completed item;
- CI/status is unavailable and a stakeholder attempts to treat it as passing.

---

## 9. Handover to Stage 10 and Stage 11

Stage 10 IAA Pre-Brief must use this checklist to prepare independent assurance before runtime implementation.

Stage 11 Builder Appointment must bind the implementation builder to this checklist and require explicit acknowledgement of:

- source artifacts loaded;
- scope boundaries;
- work-package checklist;
- RED-domain evidence checklist;
- legal/content/asset conditions;
- stop/escalation rules;
- fully functional evidence package requirements.

---

## 10. Gate Statement

This Stage 9 artifact approves progression to Stage 10 IAA Pre-Brief only.

It does not appoint a runtime implementation builder and does not authorize build work.

Implementation remains blocked until Stage 10 IAA Pre-Brief, Stage 11 Builder Appointment, and Stage 12 Build Evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 11. Stage 9 Disposition

**Foreman disposition**: Stage 9 Builder Checklist is complete as a governed pre-build builder-readiness artifact.

**IAA disposition**: Conditional Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly instructed progression to Stage 9.

**Next stage**: Stage 10 IAA Pre-Brief.
