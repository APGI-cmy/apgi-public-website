# APW Stage 8 - Implementation Plan

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 8 - Implementation Plan |
| Folder | `modules/APW/07-implementation-plan` |
| Version | v0.1 |
| Status | Approved for Stage 9 Builder Checklist progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-31 |
| Last Updated | 2026-05-31 |
| Upstream Stage | `modules/APW/06-pbfag/pbfag-checklist.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage8-implementation-plan-20260531.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage8-implementation-plan-20260531-builder-contract.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage8-implementation-plan-20260531.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage8-implementation-plan-signoff-20260531.md` |

---

## 1. Purpose

This Stage 8 Implementation Plan translates the approved APW pre-build package into sequenced implementation work packages, evidence obligations, and downstream handover requirements.

This artifact does not start implementation. It prepares Stage 9 Builder Checklist and later implementation builder appointment.

---

## 2. Implementation Boundary

The APW v1 build must remain a public, unauthenticated, static-first website.

The implementation plan must not introduce authenticated staff tooling, CRM or lead database, LMS replacement, Thinkific administration, ISMS backend logic, database-backed workflows, LinkedIn scraping or synchronization, unapproved analytics/tracking/CMS/marketing automation, or private configuration exposure in public output.

Any expansion beyond this boundary requires governed scope change.

---

## 3. Build Sequence

| Sequence | Work Package | Purpose | Evidence |
|----------|--------------|---------|----------|
| 1 | Project foundation review | Confirm framework, static-first build posture, scripts, and existing repo shape before code work. | Scripts/structure inventory and selected implementation entry points. |
| 2 | Content/configuration model | Establish structured source data for sections, CTAs, hub tiles, contact values, legal placeholders, and metadata. | Content/config inventory and placeholder register. |
| 3 | Route shell | Plan public home route and legal route/reservation strategy. | Route evidence plan for `/`, `/privacy`, `/terms`, or governed equivalents. |
| 4 | Section flow | Plan governed homepage sections from hero through footer. | Section evidence plan. |
| 5 | Navigation and mobile menu | Plan desktop nav, mobile nav, anchors, footer links, and focus behavior. | Anchor and keyboard navigation evidence plan. |
| 6 | Training/contact handoffs | Plan approved VPSHR, Thinkific, mailto, and tel handoffs. | Link target and fallback evidence plan. |
| 7 | APGI Hub | Plan seven v1 hub tiles with base URL composition and safe pending behavior. | Hub URL composition evidence plan. |
| 8 | Metadata and social readiness | Plan page title, description, canonical, OG metadata, and approved social image behavior. | Metadata evidence plan. |
| 9 | Accessibility and responsive pass | Plan semantic structure, keyboard operation, reduced motion, text-first resilience, and responsive layouts. | Keyboard, reduced-motion, text-first, and viewport evidence plan. |
| 10 | Fully functional evidence pack | Plan checks and evidence mapping Stage 6 RED items to green outcomes. | Evidence package plan aligned to Stage 6 QA catalog. |

---

## 4. Work Packages

### WP-001 - Repository and Runtime Baseline

Confirm implementation entry points before code work. Inspect project structure and build scripts, identify page entry points, confirm static/static-first deployment posture, and confirm public rendering has no private runtime dependency.

**Evidence**: script inventory, route entry point notes, build/test command list.

**Related RED checks**: QA-D10-001, QA-D10-002, QA-D11-001.

### WP-002 - Structured Content and Configuration

Create or update structured content source for public sections, link registry for internal anchors and external handoffs, hub tile configuration with seven frozen v1 route slugs, placeholder/content status register, and asset status register or equivalent inspectable source.

**Evidence**: content/config review, placeholder register, asset status register, hub tile config inspection.

**Related RED checks**: QA-D4-001, QA-D4-002, QA-D9-001, QA-D9-002, QA-D9-003.

### WP-003 - Public Routes and Legal Destinations

Plan `/` as the primary public entry route and plan `/privacy` and `/terms`, or governed placeholder equivalents. Footer/legal links must not point to broken destinations.

**Evidence**: route render evidence, footer link inspection, legal placeholder/content status.

**Related RED checks**: QA-D1-001, QA-D2-001, QA-D9-003.

### WP-004 - Homepage Section Implementation

Plan the approved homepage sequence: hero, proof/trust strip, about, services, training, APGI Hub, impact, team, contact, and footer.

**Evidence**: section render evidence, content completeness review, placeholder honesty review.

**Related RED checks**: QA-D1-001, QA-D1-002, QA-D9-001.

### WP-005 - Navigation, CTAs, and Mobile Menu

Plan shared navigation configuration, desktop nav, mobile menu open/close behavior, anchor resolution, visible focus, and keyboard operation.

**Evidence**: anchor navigation evidence, keyboard navigation evidence, mobile menu evidence.

**Related RED checks**: QA-D2-001, QA-D2-002, QA-D7-002.

### WP-006 - Training and Contact Handoffs

Plan VPSHR Level 0 link, Thinkific storefront link, public contact email and phone handoffs, readable fallback text, and no contact-form processing in v1.

**Evidence**: link target inspection, contact fallback review, no-form review.

**Related RED checks**: QA-D3-001, QA-D3-002, QA-D5-001, QA-D5-002, QA-D5-003.

### WP-007 - APGI Hub Implementation

Plan public ISMS base URL configuration, seven frozen v1 route slugs, hub tile title/description/status/accessibility/destination fields, and future tile governance.

**Evidence**: base URL evidence, seven-tile config inspection, generated destination inspection.

**Related RED checks**: QA-D4-001, QA-D4-002.

### WP-008 - Metadata, SEO, and Social Readiness

Plan page title, description, canonical metadata, Open Graph basics, approved APGI narrative, and social image handling.

**Evidence**: metadata inspection, capability-claim review, social image approval/placeholder status.

**Related RED checks**: QA-D6-001, QA-D6-002, QA-D9-002.

### WP-009 - Accessibility and Responsive Delivery

Plan semantic landmarks, heading order, semantic links/buttons, visible focus, reduced-motion behavior, text-first meaning, common viewport checks, and no critical horizontal overflow.

**Evidence**: semantic review, keyboard walkthrough, reduced-motion review, text-first review, viewport evidence.

**Related RED checks**: QA-D7-001, QA-D7-002, QA-D7-003, QA-D7-004, QA-D8-001, QA-D8-002.

### WP-010 - Evidence and Closure Package

Plan command evidence where available and manual evidence for route, anchor, external link, mobile nav, responsive, keyboard, metadata, placeholder, legal route, and hub behavior.

**Evidence**: command output or no-command explanation, manual evidence log, RED-to-green matrix, unresolved conditions list.

**Related RED checks**: QA-D11-001, QA-D11-002, QA-D12-001, QA-D12-002.

---

## 5. RED-to-Evidence Mapping

| QA Domain | Implementation Evidence Required |
|-----------|----------------------------------|
| D1 Homepage render and section flow | `/` route render and section sequence evidence. |
| D2 Navigation, anchors, mobile menu | Desktop/mobile navigation, anchor resolution, focus/open/close evidence. |
| D3 Training handoffs | VPSHR and Thinkific public link inspection. |
| D4 APGI Hub link composition | Base URL plus frozen slug composition evidence for all seven tiles. |
| D5 Contact handoffs | Mail, phone, readable fallback, and no-form inspection. |
| D6 SEO and social metadata | Metadata source and rendered metadata inspection. |
| D7 Accessibility and keyboard basics | Semantic, keyboard, reduced-motion, and text-first evidence. |
| D8 Responsive behavior | Mobile/tablet/desktop viewport evidence and no critical overflow. |
| D9 Placeholder honesty and asset governance | Placeholder register, asset status, and legal route evidence. |
| D10 Public-only boundary | No auth/private dependency/public config exposure evidence. |
| D11 Fully functional delivery gate | Evidence package covering route, link, responsive, keyboard, metadata, placeholder, and hub checks. |
| D12 Governance | Proof that implementation waits for downstream gates or explicit waiver. |

---

## 6. Stage 7 PBFAG Condition Carry-Forward

| Condition | Stage 8 Plan Response |
|-----------|-----------------------|
| Preserve public-only v1 boundary | Boundary recorded in Section 2 and WP-001/WP-010. |
| Map Stage 6 RED checks to implementation tasks and evidence | Sections 4 and 5 map each domain to work packages and evidence. |
| Plan legal/privacy/terms route handling | WP-003 and QA-D9 evidence require live or governed placeholder legal destinations. |
| Track placeholder copy, final content, assets, social preview assets, and legal copy | WP-002, WP-008, and WP-010 require registers and evidence. |
| Keep implementation blocked until downstream gates | Section 9 preserves Stage 9-12 gates before build work. |

---

## 7. Risks, Assumptions, and Dependencies

| ID | Type | Item | Disposition |
|----|------|------|-------------|
| RISK-001 | Risk | Legal/privacy/terms copy may not be final before build. | Use governed placeholders unless CS2 supplies approved copy. |
| RISK-002 | Risk | Final imagery, team content, testimonials, or social preview assets may not be approved. | Use text-first safe placeholders and asset status register. |
| RISK-003 | Risk | CI may not report statuses for documentation or early implementation. | Record factual status and avoid admin loops. |
| ASSUMP-001 | Assumption | Static/static-first frontend remains acceptable for v1. | Preserve unless later governed artifact changes scope. |
| ASSUMP-002 | Assumption | Public ISMS host is environment-configurable. | Implement via `ISMS_PUBLIC_BASE_URL` or equivalent. |
| DEP-001 | Dependency | Stage 9 Builder Checklist must convert this plan into executable builder obligations. | Required before implementation builder appointment. |
| DEP-002 | Dependency | Stage 10/11 gates must precede runtime implementation. | Required unless explicitly waived by CS2 / Johan Ras. |

---

## 8. Stage 9 Builder Checklist Handover

Stage 9 should convert this implementation plan into a builder checklist that includes source artifacts to load, implementation work packages, scope boundaries, evidence required for each RED domain, command/manual verification expectations, content/asset/legal/placeholder handling instructions, and handover requirements for IAA and CS2 disposition.

---

## 9. Implementation Gate Statement

This Stage 8 artifact approves progression to Stage 9 Builder Checklist only.

It does not authorize runtime implementation.

Implementation remains blocked until Stage 9 Builder Checklist, Stage 10 IAA Pre-Brief, Stage 11 Builder Appointment, and Stage 12 Build Evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 10. Stage 8 Disposition

**Foreman disposition**: Stage 8 Implementation Plan is complete as a governed pre-build implementation-planning artifact.

**IAA disposition**: Conditional Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly instructed progression to the next stage.

**Next stage**: Stage 9 Builder Checklist.
