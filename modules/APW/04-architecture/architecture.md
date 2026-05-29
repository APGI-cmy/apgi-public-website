# APW Stage 5 - Architecture

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture |
| Folder | `modules/APW/04-architecture` |
| Version | v0.1 |
| Status | Approved for Stage 6 QA-to-Red progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-05-29 |
| Last Updated | 2026-05-29 |
| Upstream Stage | `modules/APW/03-trs/technical-requirements-specification.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage5-architecture-20260529.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage5-architecture-builder-contract-20260529.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage5-architecture-20260529.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage5-architecture-signoff-20260529.md` |

---

## 1. Purpose

This Architecture artifact converts the approved APW Stage 4 TRS into a governed design structure for the APGI Public Website.

It defines how the public site should be structured across routes, sections, components, content, configuration, APGI Hub links, metadata, accessibility, responsive behavior, deployment, and evidence readiness.

This artifact does not authorize runtime implementation. It prepares the project for Stage 6 QA-to-Red.

---

## 2. Architecture Boundary

The APGI Public Website architecture is a public, unauthenticated, static-first marketing and routing architecture.

The architecture must not introduce:

- authenticated staff tooling;
- CRM or lead database;
- Thinkific administration;
- ISMS backend logic;
- database-backed workflows;
- LinkedIn scraping or synchronization;
- unapproved analytics, CMS, or marketing automation.

Any expansion beyond this boundary requires governed scope change.

---

## 3. Source Traceability

| Source | Architectural Function |
|--------|------------------------|
| Stage 3 FRS | Defines functional obligations and negative requirements. |
| Stage 4 TRS | Defines technical requirements to be reflected in architecture. |
| Stages 1-4 readiness review | Confirms fully functional foundation is adequate for Architecture. |
| Foreman Operating Model | Defines governance ceremony, proxy approval, ECAP, and IAA. |

---

## 4. Site Architecture Overview

### ARCH-SITE-001 - Single Public Entry Surface

The v1 website architecture should expose one primary public entry surface at `/`.

This entry surface contains the public homepage sections and routes users through anchors and approved external handoffs.

**Derived From**: TRS-ROUTE-001, FRS-SCR-001.

### ARCH-SITE-002 - Section-Based Homepage

The homepage should be architected as a sequence of governed public sections:

1. Hero / immediate positioning;
2. Proof or trust strip;
3. About / who we are;
4. Services;
5. Training;
6. APGI Hub;
7. Philanthropy / impact;
8. Team;
9. Contact;
10. Footer.

**Derived From**: FRS-SCR-001, TRS-ROUTE-002.

### ARCH-SITE-003 - Public-Only Rendering

All v1 user-facing content must be renderable without login, account state, staff permission, or private API access.

**Derived From**: TRS-RUN-001, TRS-SEC-001.

---

## 5. Route and Navigation Architecture

### ARCH-ROUTE-001 - Route Map

| Route / Anchor | Purpose | Required Status |
|----------------|---------|-----------------|
| `/` | Home route | Required |
| `/#about` | About section | Required if section visible |
| `/#services` | Services section | Required if section visible |
| `/#training` | Training section | Required |
| `/#hub` | APGI Hub section | Required |
| `/#team` | Team section | Required if section visible |
| `/#contact` | Contact section | Required |
| `/privacy` or equivalent | Privacy/legal page | Required before launch or clearly governed placeholder |
| `/terms` or equivalent | Terms/legal page | Required before launch or clearly governed placeholder |

**Derived From**: TRS-ROUTE-002, TRS-CNT-005.

### ARCH-ROUTE-002 - Navigation Model

Primary navigation should be composed from a single route/anchor configuration source so desktop nav, mobile nav, and footer links cannot silently drift apart.

**Derived From**: TRS-ROUTE-003, TRS-FFD-003.

### ARCH-ROUTE-003 - External Link Model

External destinations should be represented in a named link registry or equivalent structured configuration.

Minimum approved external destinations:

- LinkedIn company page;
- VPSHR Level 0 course reference;
- Thinkific public storefront;
- APGI Hub ISMS public routes;
- contact email handoff;
- contact phone handoff.

**Derived From**: TRS-ROUTE-004, TRS-SEC-003.

### ARCH-ROUTE-004 - Unavailable Destination Model

An unavailable or deferred destination must have an explicit architecture state:

- hidden;
- disabled;
- labelled pending;
- or safe informational fallback.

Enabled broken destinations are not architecturally permitted.

**Derived From**: TRS-ROUTE-005, TRS-FFD-001.

---

## 6. Component Architecture

### ARCH-COMP-001 - Section Components

The site should be organized around section-level components or equivalent isolated layout blocks:

- Header / Navigation;
- Mobile Navigation;
- Hero;
- Trust Strip;
- About;
- Services;
- Training Spotlight;
- APGI Hub Grid;
- Impact / Philanthropy;
- Team;
- Contact;
- Footer.

**Derived From**: TRS-RUN-002, FRS-SCR-001.

### ARCH-COMP-002 - Shared CTA Component

CTAs should use a shared pattern that supports:

- internal anchor navigation;
- approved external navigation;
- disabled or pending state;
- accessible label;
- visible focus state.

**Derived From**: TRS-ROUTE-004, TRS-A11Y-002.

### ARCH-COMP-003 - Hub Tile Component

Hub tiles should use a shared component pattern driven by structured hub data.

Each tile must expose:

- title;
- description;
- status label;
- accessible label;
- destination;
- safe disabled/pending behavior where applicable.

**Derived From**: TRS-HUB-003.

### ARCH-COMP-004 - Contact Action Component

Contact actions should use explicit mail and phone link patterns, while also presenting contact values as readable text.

**Derived From**: TRS-CON-001 through TRS-CON-004.

---

## 7. Content and Configuration Architecture

### ARCH-CONTENT-001 - Structured Content Source

Public copy, section labels, CTA labels, hub tile content, team content, and contact data should be maintainable through structured source data rather than scattered markup.

**Derived From**: TRS-CNT-001.

### ARCH-CONTENT-002 - Placeholder Registry

Placeholder or tuneable content should be identifiable through a clear content registry, comment convention, or data flag.

The architecture must prevent placeholder content from masquerading as final claims.

**Derived From**: TRS-CNT-002, TRS-FFD-005.

### ARCH-CONTENT-003 - Rights-Sensitive Asset Register

Images, proof assets, social preview images, team photos, third-party marks, and testimonials must be traceable to approval status before launch.

**Derived From**: TRS-CNT-003, TRS-SEO-004.

### ARCH-CONTENT-004 - Legal Content Slots

The architecture must reserve or implement privacy and terms destinations before public launch readiness.

**Derived From**: TRS-CNT-005.

---

## 8. APGI Hub Architecture

### ARCH-HUB-001 - Hub Configuration Source

The APGI Hub must be driven by a structured hub tile configuration source.

The configuration must preserve the seven approved v1 tile slugs.

**Derived From**: TRS-HUB-002, TRS-HUB-003.

### ARCH-HUB-002 - Base URL Resolution

Hub destination URLs must be resolved from:

```text
ISMS_PUBLIC_BASE_URL + frozen route slug
```

The host may vary by environment; route slugs must remain stable.

**Derived From**: TRS-HUB-001.

### ARCH-HUB-003 - Future Tile Governance

The architecture must make adding hub tiles an explicit content/configuration change that can be reviewed.

**Derived From**: TRS-HUB-004.

---

## 9. Metadata and SEO Architecture

### ARCH-SEO-001 - Metadata Source

The architecture must provide a clear metadata source for title, description, canonical URL, Open Graph title, Open Graph description, and social preview image where available.

**Derived From**: TRS-SEO-001.

### ARCH-SEO-002 - LinkedIn Share Readiness

Metadata must support clean LinkedIn sharing without relying on LinkedIn content scraping or synchronization.

**Derived From**: TRS-SEO-002.

### ARCH-SEO-003 - Brand Narrative Guardrail

Metadata must use approved APGI positioning and must not imply unapproved capabilities.

**Derived From**: TRS-SEO-003.

---

## 10. Accessibility Architecture

### ARCH-A11Y-001 - Semantic Page Structure

The page architecture must support semantic landmarks, meaningful heading order, accessible links, and accessible buttons.

**Derived From**: TRS-A11Y-001.

### ARCH-A11Y-002 - Keyboard Interaction Model

Navigation, CTAs, hub tiles, contact actions, and mobile menu controls must be reachable and operable by keyboard.

**Derived From**: TRS-A11Y-002.

### ARCH-A11Y-003 - Mobile Menu Focus Model

The mobile navigation architecture must define focus behavior for open and close states.

**Derived From**: TRS-A11Y-003.

### ARCH-A11Y-004 - Reduced Motion Model

The architecture must allow non-essential motion to be reduced or avoided.

**Derived From**: TRS-A11Y-004.

### ARCH-A11Y-005 - Text-First Resilience

Critical meaning must not depend on images, icons, animation, or hover-only interaction.

**Derived From**: TRS-A11Y-005.

---

## 11. Responsive Architecture

### ARCH-RESP-001 - Mobile-First Layout Model

Architecture must support mobile-first section layouts that scale to tablet and desktop.

**Derived From**: TRS-RESP-001.

### ARCH-RESP-002 - No Critical Horizontal Overflow

Core content must remain readable without horizontal scrolling at common viewport sizes.

**Derived From**: TRS-RESP-002.

### ARCH-RESP-003 - CTA Tap Target Model

Primary CTAs must remain readable and tappable on mobile.

**Derived From**: TRS-RESP-003.

---

## 12. Deployment Architecture

### ARCH-DEPLOY-001 - Static-First Deployment

The website should deploy as a static or static-first public frontend suitable for Vercel or equivalent hosting.

**Derived From**: TRS-RUN-001.

### ARCH-DEPLOY-002 - Environment Configuration

Deployment must support environment configuration for `ISMS_PUBLIC_BASE_URL` or equivalent without editing frozen route slugs.

**Derived From**: TRS-RUN-004, TRS-HUB-001.

### ARCH-DEPLOY-003 - No Private Runtime Dependency

The v1 website must not require private services to render its public content.

**Derived From**: TRS-RUN-003, TRS-SEC-001.

---

## 13. Evidence and Verification Architecture

### ARCH-EVID-001 - Evidence Categories

Later implementation evidence should include:

- route render evidence;
- anchor navigation evidence;
- external link evidence;
- mobile navigation evidence;
- responsive viewport evidence;
- keyboard access evidence;
- metadata evidence;
- placeholder/content review evidence;
- hub tile resolution evidence.

**Derived From**: TRS-FFD-004, TRS Section 15.

### ARCH-EVID-002 - QA-to-Red Readiness

Stage 6 QA-to-Red must be able to convert this architecture into checkable assertions before implementation.

**Derived From**: TRS Section 15.

---

## 14. Fully Functional Architecture Controls

| Fully Functional Requirement | Architectural Control |
|------------------------------|-----------------------|
| Routed | Route map, anchor map, external link registry, hub config. |
| Usable | Public single-entry architecture, section flow, clear CTAs. |
| Coherent | Shared content/config sources and section/component structure. |
| Responsive | Mobile-first layout and mobile nav architecture. |
| Accessible | Semantic, keyboard, focus, reduced-motion, and text-first models. |
| Correctly linked | External link model and hub URL resolution. |
| Inspectable | Evidence categories and QA-to-Red readiness. |
| No avoidable broken paths | Unavailable destination model and placeholder registry. |

---

## 15. Architecture Traceability Matrix

| TRS Area | Architecture Coverage |
|----------|----------------------|
| Runtime / framework | Site and deployment architecture |
| Routing / navigation | Route and navigation architecture |
| APGI Hub | Hub configuration and URL resolution architecture |
| Training | External link model and training handoff architecture |
| Contact | Contact action architecture |
| Content / placeholders | Structured content, placeholder registry, asset register |
| SEO / social | Metadata architecture |
| Accessibility | Semantic, keyboard, focus, motion, text-first architecture |
| Responsive | Mobile-first and CTA tap target architecture |
| Security / privacy | Public-only deployment and no private runtime dependency |
| Fully functional delivery | Architecture controls and evidence categories |

---

## 16. Readiness for Stage 6 QA-to-Red

This Architecture artifact is approved for Stage 6 QA-to-Red progression by AI-assisted CS2 proxy evaluation for Johan Ras.

Stage 6 should create concrete pre-build checks for:

- route rendering;
- anchor resolution;
- external destination safety;
- APGI Hub link composition;
- mobile navigation behavior;
- accessibility basics;
- responsive viewports;
- metadata presence;
- placeholder honesty;
- no unapproved backend workflows;
- no known avoidable broken paths.

---

## 17. Conditions Carried Forward

| Item | Status | Notes |
|------|--------|-------|
| QA-to-Red | Carry forward | Stage 6 must convert architecture controls into checks. |
| Public legal pages | Carry forward | Legal/privacy/terms destinations must be addressed before launch. |
| Final copy and assets | Carry forward | Content approval remains required before launch. |
| CI workflow | Carry forward | Implementation waves require stronger CI evidence than documentation waves. |
| Runtime implementation | Not authorized | Build work remains blocked until downstream gates are complete or waived. |

---

## 18. Foreman Note

This Architecture artifact does not authorize implementation. It authorizes progression to Stage 6 QA-to-Red after QP, ECAP, IAA, and CS2 proxy disposition.
