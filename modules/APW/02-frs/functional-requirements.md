# APW Stage 3 - Functional Requirements Specification (FRS)

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 3 - Functional Requirements Specification |
| Folder | `modules/APW/02-frs` |
| Version | v0.1 |
| Status | Approved for Stage 4 TRS progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-29 |
| Last Updated | 2026-05-29 |
| Upstream Stage 1 | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` |
| Upstream Stage 2 | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage3-frs-20260529.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage3-frs-builder-contract-20260529.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage3-frs-20260529.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage3-frs-signoff-20260529.md` |

---

## 1. Purpose

This Functional Requirements Specification defines what the APGI Public Website must do from a user-facing, content, routing, accessibility, and governance perspective.

It derives from the approved App Description and the Stage 2 UX Workflow & Wiring Spec. It does not define implementation architecture, component internals, test code, deployment workflow details, or visual design implementation. Those belong to later stages.

---

## 2. Functional Boundary

The APGI Public Website is a public marketing, trust-building, training-discovery, and app-routing layer for Assurance Protection Group Inc.

The website must not become a system of record, LMS replacement, CRM, staff console, Thinkific admin surface, ISMS application backend, or authenticated internal tool unless a later governed artifact explicitly changes scope.

---

## 3. Source Traceability

| Source | Function in FRS |
|--------|-----------------|
| App Description | Defines purpose, scope, audience, success criteria, technology assumptions, lifecycle stages, delivery boundaries, and component definition of done. |
| UX Workflow & Wiring Spec | Defines user journeys, screens, triggers, external handoffs, route map, screen states, and observable user outcomes. |
| Local Governance Canon | Defines Foreman, builder, assurance, ripple-awareness, and closure expectations. |

---

## 4. User and Audience Requirements

### FRS-USER-001 - Public Visitor Orientation

The website must allow a first-time public visitor to understand who APGI is, what APGI offers, and where to go next within the first visible page experience.

**Traceability**: App Description success criteria; UJ-APGI-001.

### FRS-USER-002 - Prospective Client Journey

The website must support prospective clients in scanning APGI's service positioning, credibility markers, training offer, and contact pathway without requiring login or account creation.

**Traceability**: App Description target audience; UJ-APGI-001; UJ-APGI-004.

### FRS-USER-003 - Training Prospect Journey

The website must provide a clear public path from the homepage into APGI's current public training surface, including the VPSHR Level 0 course reference and Thinkific storefront handoff.

**Traceability**: App Description training scope; UJ-APGI-002.

### FRS-USER-004 - APGI Ecosystem Explorer Journey

The website must provide a clear APGI Hub experience for users exploring the linked ISMS application ecosystem through approved public marketing routes.

**Traceability**: App Description APGI Hub scope; UJ-APGI-003.

### FRS-USER-005 - Social Proof Journey

The website must expose a clear LinkedIn referral path so visitors can verify APGI's public social presence and return to the website without losing orientation.

**Traceability**: App Description source references; UJ-APGI-005.

---

## 5. Page and Screen Requirements

### FRS-SCR-001 - Home Landing Page

The website must provide a primary public home landing page at `/`.

The home page must contain the following functional sections:

1. hero / immediate positioning;
2. proof or trust strip;
3. about / who we are;
4. services;
5. training;
6. APGI Hub;
7. philanthropy / impact;
8. team;
9. contact;
10. footer.

**Traceability**: App Description proposed public site composition; SCR-APGI-001.

### FRS-SCR-002 - Mobile Navigation Overlay

The website must provide a mobile navigation state that allows small-screen users to reach the same primary destinations as desktop users.

**Traceability**: SCR-APGI-002.

### FRS-SCR-003 - Section Anchor Navigation

Primary navigation items must resolve to visible page sections or approved external destinations. No nav item may point to an unresolved, hidden, misleading, or staff-only destination.

**Traceability**: UJ-APGI-001; UJ-APGI-004.

### FRS-SCR-004 - Public-Only Access

The website must be publicly accessible without authentication for v1. Authenticated or staff-only tooling must remain excluded from public navigation.

**Traceability**: App Description explicitly out of scope; Screen access control.

---

## 6. Navigation and Routing Requirements

### FRS-NAV-001 - Primary Navigation

The header navigation must provide clear paths to the main public content areas of the website.

Minimum expected destinations:

- About / who we are;
- Services;
- Training;
- APGI Hub;
- Contact;
- LinkedIn or social proof destination where included.

### FRS-NAV-002 - Footer Navigation

The footer must provide stable utility links, contact reference, social reference, and legal / policy destinations once available.

### FRS-NAV-003 - External Destination Clarity

External destinations must be visually or textually distinguishable enough that users understand when they are leaving the APGI Public Website.

### FRS-NAV-004 - Route Integrity

Every user-facing route, anchor, and CTA must resolve to either:

1. a live destination;
2. an explicitly labelled placeholder; or
3. a disabled / unavailable state with a clear explanation.

Silent dead links are not permitted.

---

## 7. Training Requirements

### FRS-TRN-001 - Training Section

The website must include a training section that introduces APGI training and provides a clear route to the current public training surface.

### FRS-TRN-002 - VPSHR Level 0 Visibility

The website must visibly feature the VPSHR Level 0 course or current approved course surface unless superseded by a later governed artifact.

### FRS-TRN-003 - Thinkific Storefront Handoff

The website must include a public handoff to the approved Thinkific storefront.

### FRS-TRN-004 - Thinkific Admin Exclusion

The website must not include the Thinkific management/admin URL in public navigation.

### FRS-TRN-005 - Training Destination Failure Handling

If a training destination is unavailable or intentionally deferred, the UI must degrade to a safe informational state rather than presenting a broken CTA.

---

## 8. APGI Hub Requirements

### FRS-HUB-001 - Hub Section

The website must include an APGI Hub section that acts as a public launch surface into approved APGI / ISMS ecosystem destinations.

### FRS-HUB-002 - Frozen v1 Route Map

The APGI Hub must use the approved frozen v1 public route map for the initial seven ISMS marketing destinations:

| Tile | Canonical Route |
|------|-----------------|
| Maturity Roadmap / MMM | `{{ISMS_PUBLIC_BASE_URL}}/marketing/maturity-roadmap` |
| Risk Management | `{{ISMS_PUBLIC_BASE_URL}}/marketing/risk-management` |
| Project Implementation Tracker / PIT | `{{ISMS_PUBLIC_BASE_URL}}/marketing/project-implementation` |
| Incident & Intelligence Hub | `{{ISMS_PUBLIC_BASE_URL}}/marketing/incident-intelligence` |
| Data Analytics & Remote Assurance | `{{ISMS_PUBLIC_BASE_URL}}/marketing/data-analytics-assurance` |
| Systems Integration / RADAM | `{{ISMS_PUBLIC_BASE_URL}}/marketing/systems-integration` |
| Skills Development Portal | `{{ISMS_PUBLIC_BASE_URL}}/marketing/skills-development` |

### FRS-HUB-003 - Hub Tile Clarity

Each hub tile must include enough label, description, and status information for a user to understand the destination before clicking.

### FRS-HUB-004 - Future Tile Governance

Future hub tiles must not be added without governance update and approval.

### FRS-HUB-005 - Environment Host Flexibility

The hub route paths are canonical, but the public ISMS host may vary by environment. The website must support environment-specific host configuration without changing the approved route paths.

---

## 9. Contact and Conversion Requirements

### FRS-CON-001 - Contact Section

The website must include a contact section with approved public contact pathways.

### FRS-CON-002 - Email Handoff

The website must support a public email handoff to the approved APGI contact address.

### FRS-CON-003 - Phone Handoff

The website must support a public phone handoff where phone interaction is available on the user's device.

### FRS-CON-004 - Address Visibility

The website must present approved public address/contact reference information in a non-confusing format.

### FRS-CON-005 - No Contact Form in v1

The website must not introduce a contact form, lead capture database, CRM integration, or marketing automation flow in v1 unless a later governed artifact approves it.

---

## 10. Content and Placeholder Requirements

### FRS-CNT-001 - Repository-First Content

The website must support content that can be tuned progressively without requiring structural redesign.

### FRS-CNT-002 - Placeholder Honesty

Placeholder content must be clearly maintainable and must not present unverified statistics, claims, testimonials, client marks, legal promises, or operational capability as final.

### FRS-CNT-003 - Rights-Sensitive Assets

The website must not use rights-sensitive imagery, third-party logos, testimonials, or proof assets unless approval and usage rights are clear.

### FRS-CNT-004 - Team and Bio Content

Team-related content must remain tuneable and must not imply confirmed biographies, roles, or approvals before final content approval.

### FRS-CNT-005 - Legal Page Readiness

The website must provide or reserve stable destinations for legal / privacy / terms content before public launch where required.

---

## 11. SEO and Social Sharing Requirements

### FRS-SEO-001 - Page Metadata

The website must include page title, description, canonical metadata, and share-friendly metadata suitable for search and LinkedIn sharing.

### FRS-SEO-002 - Social Preview Quality

The website must support strong Open Graph / social preview information so shared links present APGI cleanly and credibly.

### FRS-SEO-003 - LinkedIn Share Fitness

The website must be suitable for sharing from LinkedIn without relying on LinkedIn feed scraping or synchronization.

### FRS-SEO-004 - Public Brand Narrative Ownership

The website must own the canonical APGI brand narrative even where LinkedIn remains a discovery and proof channel.

---

## 12. Accessibility and Responsive Requirements

### FRS-A11Y-001 - Mobile-First Responsive Behavior

The website must provide a coherent mobile-first experience and remain usable across common mobile, tablet, and desktop viewports.

### FRS-A11Y-002 - Keyboard Navigation

Primary navigation, CTAs, hub tiles, social links, and contact actions must be reachable and understandable through keyboard interaction.

### FRS-A11Y-003 - Reduced Motion Support

Non-essential motion must not block the user experience and must respect reduced-motion expectations where implemented.

### FRS-A11Y-004 - Semantic Structure

The website must use coherent headings, landmarks, links, and button semantics suitable for public accessibility expectations.

### FRS-A11Y-005 - Text-First Fallback

Core APGI positioning, training, hub, and contact information must remain understandable even if imagery or motion fails.

---

## 13. Public Trust and Quality Requirements

### FRS-TRUST-001 - Premium Trust Presentation

The website must present APGI with a credible, modern, high-trust public identity.

### FRS-TRUST-002 - No Generic Security Stock Dependency

The website must avoid generic or rights-ambiguous security stock imagery as a core trust mechanism.

### FRS-TRUST-003 - Clear Next-Step Outcomes

Each primary section must give the user a clear next step or understandable reason for its presence.

### FRS-TRUST-004 - No Accidental Capability Claims

The website must not imply that APGI offers a digital capability, app, training product, or operational workflow unless that capability is approved and linked appropriately.

---

## 14. Governance and Build Lifecycle Requirements

### FRS-GOV-001 - Stage Sequencing

The website build must follow the approved pre-build lifecycle:

1. App Description;
2. UX Workflow & Wiring Spec;
3. FRS;
4. TRS;
5. Architecture;
6. QA-to-Red;
7. PBFAG;
8. Implementation Plan;
9. Builder Checklist;
10. IAA Pre-Brief;
11. Builder Appointment;
12. Build.

### FRS-GOV-002 - No Implementation Before QA-to-Red

Implementation must not begin until QA-to-Red exists or CS2 / Johan Ras explicitly waives or modifies the gate.

### FRS-GOV-003 - Foreman Control

Governed work must be orchestrated by Foreman under the local Foreman role and agent stack.

### FRS-GOV-004 - Builder Appointment

Builder work must be explicitly appointed with scope, acceptance criteria, out-of-scope boundaries, and handover requirements.

### FRS-GOV-005 - ECAP and IAA Before Handover

Material build or stage-completion work must include ECAP and IAA review preparation before final handover.

### FRS-GOV-006 - Fully Functional Delivery Standard

The website must be evaluated against fully functional delivery expectations: not merely documented, but usable, routed, coherent, verified, and free of known avoidable functional debt at the relevant stage.

---

## 15. Negative Requirements

The APGI Public Website must not:

1. replace Thinkific as the LMS;
2. expose Thinkific admin destinations in public navigation;
3. rebuild ISMS apps inside the public website;
4. create an internal staff console in v1;
5. introduce CRM, lead automation, analytics, CMS, database, or contact-form flows without governed approval;
6. scrape or synchronize LinkedIn data;
7. present unverified client proof, testimonials, statistics, or logos as final;
8. add future APGI Hub tiles without governance approval;
9. bypass QA-to-Red before implementation;
10. treat placeholders as completed public claims.

---

## 16. Functional Traceability Matrix

| Journey / Source | Requirement Coverage |
|------------------|----------------------|
| UJ-APGI-001 - Brand orientation | FRS-USER-001, FRS-SCR-001, FRS-NAV-001, FRS-TRUST-001, FRS-TRUST-003 |
| UJ-APGI-002 - Training discovery | FRS-USER-003, FRS-TRN-001 through FRS-TRN-005 |
| UJ-APGI-003 - APGI Hub | FRS-USER-004, FRS-HUB-001 through FRS-HUB-005 |
| UJ-APGI-004 - Contact and conversion | FRS-USER-002, FRS-CON-001 through FRS-CON-005 |
| UJ-APGI-005 - LinkedIn referral | FRS-USER-005, FRS-SEO-003, FRS-SEO-004, FRS-NAV-003 |
| App Description scope | FRS-GOV, FRS-CNT, FRS-TRUST, Negative Requirements |
| App Description success criteria | FRS-USER, FRS-TRUST, FRS-A11Y, FRS-SEO |

---

## 17. Readiness for Stage 4 TRS

This FRS is approved for Stage 4 TRS progression by AI-assisted CS2 proxy evaluation for Johan Ras.

Stage 4 TRS should translate these functional requirements into technical requirements for framework, routing, content data model, metadata, link validation, accessibility implementation, testing, deployment verification, and fully functional delivery enforcement.

---

## 18. Conditions Carried Forward

| Item | Status | Notes |
|------|--------|-------|
| Stage 2 sign-off | Resolved | Stage 2 approved by `.agent-admin/signoffs/cs2-proxy-stage2-ux-workflow-signoff-20260529.md`. |
| Fully functional delivery hardening | Carry forward | Stage 4 TRS must define technical implications of fully functional delivery. |
| QA-to-Red hardening | Carry forward | Stage 6 QA-to-Red must convert requirements into testable gates. |
| Public legal pages | Carry forward | Privacy / terms destinations are required before public launch but not authored in this FRS. |
| Final public copy | Carry forward | Content slots remain tuneable and must not be treated as final claims. |
| Public ISMS base URL | Carry forward | Host remains environment-configurable while route paths are frozen. |

---

## 19. Foreman Note

This FRS is a pre-build functional artifact only. It must not be used as authorization to start implementation until downstream TRS, Architecture, QA-to-Red, PBFAG, Implementation Plan, Builder Checklist, IAA Pre-Brief, and Builder Appointment gates are complete or explicitly waived by CS2 / Johan Ras.
