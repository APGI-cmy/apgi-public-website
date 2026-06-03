# APW Stage 3 - Functional Requirements Specification v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 3 - Functional Requirements Specification |
| Folder | `modules/APW/02-frs` |
| Version | v0.2 - Corrective Multi-Page Professional Website FRS |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Last Updated | 2026-06-03 |
| Upstream Stage 1 | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` v0.2 |
| Upstream Stage 2 | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC_V0_2.md` |
| Corrective Trigger | PR #11 functional scaffold failed APW professional website design-quality expectation |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage3-frs-v02-20260603.md` |

---

## 1. Purpose

This Functional Requirements Specification v0.2 defines what the upgraded APGI Public Website must do from a user-facing, routing, content, design-quality, accessibility, conversion, and governance perspective.

It supersedes the scaffold-tolerant v0.1 interpretation.

The central correction is:

> A functional static scaffold is not a functionally complete APW website.

The upgraded APW website must be a polished, multi-page, high-profile professional public website that can pass the corrected build-to-green criteria.

---

## 2. Functional Boundary

The APW v1 website remains a public-only/static-first website.

It must not become:

- a Supabase application;
- a database-backed system;
- an authenticated portal;
- a CRM or lead database;
- a contact-form backend;
- a Thinkific administration surface;
- an ISMS internal application backend;
- a LinkedIn scraping or synchronization tool;
- an unapproved analytics, CMS, or marketing automation system.

---

## 3. Source Traceability

| Source | Function in FRS v0.2 |
|--------|----------------------|
| App Description v0.2 | Defines corrected product goal, required pages, design standard, success criteria, and build-to-green rule. |
| UX Workflow & Wiring v0.2 | Defines multi-page journeys, route wiring, CTAs, mobile expectations, and design-quality UX gate. |
| Corrective QA-to-Red v0.2 | Provides early RED criteria that this FRS must support downstream. |
| Tracker | Records PR #11 scaffold outcome and corrective stage status. |

---

## 4. User and Audience Requirements

### FRS-USER-001 - Premium First Impression

A first-time visitor must understand within the first visible homepage experience that APGI is a credible professional organization with services, training, and a platform/app ecosystem.

Acceptance:

- homepage hero is distinctive and APGI-specific;
- user sees clear next steps to Services, Platform, Training, and Contact;
- page does not feel like a generic scaffold.

### FRS-USER-002 - Prospective Client Exploration

Prospective clients must be able to review APGI services in enough depth to understand what APGI provides and how to take the next step.

Acceptance:

- dedicated Services page exists;
- service categories are explained with visitor outcomes;
- contact CTA is available from services.

### FRS-USER-003 - Platform/App Explorer

Visitors must be able to understand the APGI platform/app ecosystem and its major modules/submodules.

Acceptance:

- dedicated Platform/APGI Hub page exists;
- module cards include description, status, and link or pending behavior;
- modules are not reduced to unexplained tiles.

### FRS-USER-004 - Training Prospect

Training prospects must be able to review training offerings and reach the APGI Thinkific storefront.

Acceptance:

- dedicated Training page exists;
- `https://apgi.thinkific.com/` is prominently linked;
- course/offering cards or groups are shown;
- group/custom training contact path exists.

### FRS-USER-005 - Contact Conversion

Visitors must be able to contact APGI through public handoffs without login or form submission.

Acceptance:

- dedicated Contact page exists;
- email and phone are readable and linked;
- no backend form, CRM, or database capture is introduced.

### FRS-USER-006 - Trust and Credibility Review

Visitors must be able to review About, Team, Privacy, and Terms pages or honest governed placeholders.

Acceptance:

- required trust/legal pages render;
- pending content is labelled honestly;
- no unapproved claims, client marks, or testimonials are presented as final.

---

## 5. Required Page and Route Requirements

### FRS-ROUTE-001 - Homepage

The website must provide a homepage at `/`.

Required homepage sections:

1. premium hero with APGI positioning;
2. trust/proof/credibility or positioning band;
3. services preview;
4. platform/APGI Hub preview;
5. training preview;
6. about/approach preview;
7. contact CTA;
8. footer.

The homepage must be a conversion front door, not the whole website.

### FRS-ROUTE-002 - Services Page

The website must provide a dedicated Services page.

The Services page must include, at minimum:

- Security awareness and organizational design;
- Intelligence and investigations;
- Independent third-party security assurance and reporting;
- Remote/security systems administration support where approved;
- Business reporting / assurance support;
- Security human rights training;
- any later CS2-approved APGI service lines.

Each service category must include a short explanation, visitor value/outcome, and next-step CTA.

### FRS-ROUTE-003 - Platform / APGI Hub Page

The website must provide a dedicated Platform or APGI Hub page.

The page must display at least:

- Maturity Roadmap / MMM;
- Risk Management;
- Project Implementation Tracker / PIT;
- Incident and Intelligence Hub;
- Data Analytics and Remote Assurance;
- Systems Integration / RADAM;
- Skills Development Portal.

Each module must include title, description, status, and link or pending behavior.

### FRS-ROUTE-004 - Training Page

The website must provide a dedicated Training page.

It must include:

- prominent handoff to `https://apgi.thinkific.com/`;
- current approved training offerings;
- placeholders or coming-soon states for pending offerings;
- contact path for group/custom training.

### FRS-ROUTE-005 - About Page

The website must provide an About page with APGI story, positioning, credibility, approach, or values content.

### FRS-ROUTE-006 - Team Page

The website must provide a Team page using approved team/profile content or honest placeholders.

### FRS-ROUTE-007 - Contact Page

The website must provide a Contact page with readable and linked contact methods.

Required handoffs unless CS2 later updates them:

- `mailto:info@apginc.ca`;
- `tel:+14166429974`.

### FRS-ROUTE-008 - Privacy Page

The website must provide a Privacy page or clearly labelled governed placeholder.

### FRS-ROUTE-009 - Terms Page

The website must provide a Terms page or clearly labelled governed placeholder.

### FRS-ROUTE-010 - One-Page Scaffold Exclusion

A one-page-only website is functionally incomplete for the upgraded APW build.

A build that lacks the dedicated required pages must fail QA-to-Red.

---

## 6. Navigation and Wiring Requirements

### FRS-NAV-001 - Header Navigation

Header navigation must expose:

- Home;
- Services;
- Platform / APGI Hub;
- Training;
- About;
- Team;
- Contact.

### FRS-NAV-002 - Footer Navigation

Footer navigation must expose:

- Services;
- Platform / APGI Hub;
- Training;
- About;
- Team;
- Contact;
- Privacy;
- Terms.

### FRS-NAV-003 - Page-to-Page Routing

Navigation must route between pages or static route equivalents.

In-page anchors alone are insufficient for the upgraded build.

### FRS-NAV-004 - CTA Wiring

Each major page must include at least one meaningful next-step CTA.

Required CTA patterns:

- Homepage to Services;
- Homepage to Platform;
- Homepage to Training;
- Homepage to Contact;
- Services to Contact;
- Platform to module/pending state or Contact;
- Training to Thinkific;
- Training to Contact for group/custom training;
- About/Team to Contact.

### FRS-NAV-005 - Pending State Behavior

If a destination is not ready, the website must display a polished pending state rather than broken or empty links.

---

## 7. Design and Experience Requirements

### FRS-DES-001 - Professional Design Quality

The website must present APGI with a credible, high-trust, modern visual identity.

Acceptance:

- strong colour system;
- premium visual hierarchy;
- polished cards or content panels;
- clear CTAs;
- section rhythm and spacing;
- no generic scaffold feel.

### FRS-DES-002 - Visual Richness

The website must use visual structure to invite exploration.

Acceptance:

- homepage and key pages have distinct section treatments;
- services/platform/training content is visually organized;
- design is not mostly plain text on white background unless intentionally supported by strong editorial layout.

### FRS-DES-003 - Mobile Design Quality

Mobile layouts must feel intentionally designed.

Acceptance:

- full navigation access;
- tappable CTAs;
- readable cards;
- no critical overflow;
- visual hierarchy retained on small screens.

### FRS-DES-004 - Existing Website Baseline

The upgraded APW website must preserve or improve the content substance of the current public APGI site where applicable.

Acceptance:

- services and training are not less informative than current public content unless CS2 explicitly approves reduced content;
- current-site substance may be summarized, reorganized, or rewritten, but not silently discarded.

---

## 8. Services Requirements

### FRS-SVC-001 - Services Catalogue

The Services page must include a catalogue of APGI service lines.

### FRS-SVC-002 - Service Detail

Each service category must provide:

- service name;
- short description;
- visitor problem or need;
- APGI support/outcome;
- next-step CTA.

### FRS-SVC-003 - Services Preview

Homepage must preview services and link to the Services page.

---

## 9. Platform / APGI Hub Requirements

### FRS-PLAT-001 - Platform Page

The website must include a Platform/APGI Hub page explaining the APGI ecosystem.

### FRS-PLAT-002 - Module Presentation

Each required module must include:

- module name;
- short description;
- status;
- link or pending behavior;
- accessible label.

### FRS-PLAT-003 - Public Hub Base URL

When a public Hub/ISMS base URL is available, module links must compose from that base plus governed slugs.

### FRS-PLAT-004 - Pending Hub State

If the base URL is not available, the UI must show professional pending states and must not present broken links.

---

## 10. Training Requirements

### FRS-TRN-001 - Training Page

The website must include a dedicated Training page.

### FRS-TRN-002 - Thinkific Handoff

The website must link prominently to:

`https://apgi.thinkific.com/`

### FRS-TRN-003 - Course / Offering Cards

The Training page must present training offerings using cards or equivalent structured content.

### FRS-TRN-004 - Pending Training States

Upcoming or not-yet-final course offerings must be labelled honestly.

### FRS-TRN-005 - Group Training Contact Path

Training page must provide a contact path for group/custom training interest.

---

## 11. Contact Requirements

### FRS-CON-001 - Contact Page

The website must include a dedicated Contact page.

### FRS-CON-002 - Email Handoff

The website must support a public email handoff to `info@apginc.ca` unless CS2 later changes the approved address.

### FRS-CON-003 - Phone Handoff

The website must support a public phone handoff to `+14166429974` unless CS2 later changes the approved number.

### FRS-CON-004 - No Backend Contact Capture

The website must not introduce a contact form backend, lead database, CRM integration, or marketing automation flow in v1 without later CS2 approval.

---

## 12. Content and Placeholder Requirements

### FRS-CNT-001 - Placeholder Honesty

Placeholder content must be clearly maintainable and must not present unapproved legal copy, team bios, claims, client marks, testimonials, or proof assets as final.

### FRS-CNT-002 - Rights-Sensitive Assets

The website must not use rights-sensitive imagery, third-party logos, testimonials, or proof assets unless approval and usage rights are clear.

### FRS-CNT-003 - Content Expansion

Content structure must allow services, training, and platform modules to expand without a full redesign.

### FRS-CNT-004 - Legal Readiness

Privacy and Terms pages must render before launch, even if final copy is represented by governed placeholders.

---

## 13. SEO and Social Requirements

### FRS-SEO-001 - Page Metadata

Each major page must support page title and description metadata.

### FRS-SEO-002 - Social Sharing

Homepage and major pages must support share-friendly metadata suitable for LinkedIn and public sharing.

### FRS-SEO-003 - Brand Narrative

Metadata and page copy must present APGI cleanly and avoid unapproved capability claims.

---

## 14. Accessibility and Responsive Requirements

### FRS-A11Y-001 - Responsive Behavior

The website must be usable across mobile, tablet, and desktop viewports.

### FRS-A11Y-002 - Keyboard Navigation

Navigation, CTAs, cards, and contact links must be keyboard reachable.

### FRS-A11Y-003 - Semantic Structure

Pages must use coherent headings, landmarks, links, and button semantics.

### FRS-A11Y-004 - Reduced Motion

Non-essential motion must respect reduced-motion settings where motion exists.

### FRS-A11Y-005 - Text-First Resilience

Core APGI positioning, services, training, platform, and contact information must remain understandable without images.

---

## 15. Negative Requirements

The upgraded APW website must not:

- be one-page-only;
- present a thin scaffold as final;
- omit dedicated Services, Platform, or Training pages;
- rely on broken or empty links;
- treat placeholder copy as final;
- use unapproved testimonials, claims, logos, or legal language;
- introduce Supabase, database, auth, CRM, or contact-form backend without CS2 approval;
- hide critical journeys behind hover-only interaction;
- regress below current APGI website service/training substance without CS2 approval.

---

## 16. Governance and Build Lifecycle Requirements

### FRS-GOV-001 - Corrective Stage Sequencing

The upgraded build must proceed through corrected stages before implementation resumes:

1. App Description v0.2;
2. UX Workflow & Wiring v0.2;
3. FRS v0.2;
4. TRS v0.2;
5. Architecture v0.2;
6. QA-to-Red v0.2;
7. PBFAG v0.2;
8. Implementation Plan v0.2;
9. Builder Checklist v0.2;
10. IAA Pre-Brief v0.2;
11. Builder Appointment v0.2;
12. Upgraded Build Evidence.

### FRS-GOV-002 - Build-to-Green Rule

Implementation must build to green only.

A build is not green if it compiles/deploys but fails design, IA, content depth, accessibility, routing, or evidence requirements.

### FRS-GOV-003 - PR #11 Supersession

PR #11 is superseded as a scaffold reference and must not be treated as the active implementation baseline.

---

## 17. Handoff to Stage 4 TRS v0.2

Corrective Stage 4 TRS v0.2 must convert this FRS into technical requirements for:

- static multi-page route generation;
- structured content model;
- design-system implementation;
- metadata per page;
- validation that fails missing pages and scaffold output;
- Vercel build/deployment evidence;
- public-only/no-backend technical controls.

---

## 18. Stage 3 Disposition

**Foreman disposition**: Corrective Stage 3 FRS v0.2 is complete as a functional requirements artifact for the upgraded APW website.

**Next stage**: Corrective Stage 4 TRS v0.2.
