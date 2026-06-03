# APW Stage 5 - Architecture v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture |
| Folder | `modules/APW/04-architecture` |
| Version | v0.2A - Corrective Multi-Page Professional Website Architecture |
| Status | Draft for review - canon completeness patched |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Last Updated | 2026-06-03 |
| Upstream Stage | `modules/APW/03-trs/technical-requirements-specification.md` v0.2 |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage5-architecture-v02-20260603.md` |
| Completeness Checklist | `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md` |
| Environment Example | `.env.example` |
| Corrective Trigger | PR #11 functional scaffold failed APW professional website design-quality expectation |

---

## 1. Purpose

This Architecture v0.2A converts the corrected APW TRS v0.2 into a governed implementation architecture for the upgraded APGI Public Website.

It defines the route, content, component, design-system, validation, deployment, evidence, accessibility, responsive, and public-boundary architecture required before QA-to-Red and implementation planning resume.

It must be read together with:

- `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md`
- `.env.example`

Those files close the governance canon completeness requirements for deployment targets, runtime/filesystem expectations, environment variables, data/persistence strategy, non-testable configuration, external dependencies, security/privacy, performance, observability, QA domains, wiring, end-to-end paths, wave model, frontend scaffolding, infrastructure provisioning, deployment evidence, and QA catalog alignment.

This artifact does not authorize runtime implementation.

---

## 2. Architecture Boundary

The APW v1 architecture is public-only and static-first.

It must not introduce:

- Supabase;
- database storage;
- authentication;
- CRM or lead database;
- contact-form backend;
- Thinkific administration;
- ISMS application backend logic;
- LinkedIn scraping or synchronization;
- unapproved analytics, CMS, or marketing automation.

Any expansion beyond this boundary requires explicit governed scope change.

---

## 3. Source Traceability

| Source | Architectural Function |
|--------|------------------------|
| App Description v0.2 | Defines professional multi-page website goal and design-quality bar. |
| UX Workflow v0.2 | Defines user journeys, page navigation, CTAs, and design-quality UX gate. |
| FRS v0.2 | Defines functional requirements for routes, content, design, and public boundary. |
| TRS v0.2 | Defines technical requirements converted here into architecture. |
| Architecture Completeness Checklist v0.2 | Maps this architecture to governance canon domains 3.1 through 3.17. |
| `.env.example` | Documents required/optional public environment configuration. |
| Tracker | Records PR #11 scaffold outcome and corrected pre-build sequence. |

---

## 4. Site Architecture Overview

### ARCH-SITE-001 - Multi-Page Public Site

The upgraded APW website must be architected as a multi-page public website.

The homepage is a premium conversion front door, not the entire website.

### ARCH-SITE-002 - Required Route Set

The architecture must support the following route/page set:

| Route/Page | Architectural Role |
|------------|--------------------|
| Home | Brand positioning, conversion front door, and previews of deeper areas. |
| Services | Full services catalogue and service-detail presentation. |
| Platform / APGI Hub | APGI ecosystem/module presentation and link/pending states. |
| Training | Training offerings, Thinkific handoff, and group/custom training contact path. |
| About | APGI story, positioning, credibility, approach, and values. |
| Team | Approved team/profile content or honest placeholders. |
| Contact | Public email and phone handoffs without backend capture. |
| Privacy | Legal content or governed placeholder. |
| Terms | Legal content or governed placeholder. |

### ARCH-SITE-003 - Static-First Composition

Every required public route must be renderable without authentication, database queries, private APIs, or server-side business workflows.

### ARCH-SITE-004 - Scaffold Exclusion

A one-page-only architecture is non-compliant for the upgraded APW build.

---

## 5. Route and Navigation Architecture

### ARCH-ROUTE-001 - Route Registry

Routes should be maintained through a route registry or equivalent structured source.

Each route entry should include:

- route path or generated filename;
- nav label;
- page title;
- metadata description;
- footer inclusion flag;
- route status;
- primary CTA target where applicable.

### ARCH-ROUTE-002 - Header Navigation

Header navigation must be generated or maintained from the same route source as the mobile navigation where practical.

Required header destinations:

- Home;
- Services;
- Platform / APGI Hub;
- Training;
- About;
- Team;
- Contact.

### ARCH-ROUTE-003 - Footer Navigation

Footer navigation must include primary pages plus Privacy and Terms.

### ARCH-ROUTE-004 - CTA Registry

CTAs should be represented through a structured CTA pattern that supports:

- internal route;
- external link;
- pending state;
- accessible label;
- visual priority;
- analytics-free operation unless later approved.

### ARCH-ROUTE-005 - Pending Destination Model

Unavailable destinations must render as clear pending/private-preview/coming-soon states.

Broken enabled links are not architecturally permitted.

---

## 6. Page Composition Architecture

### ARCH-PAGE-001 - Homepage Composition

Homepage must include:

1. premium hero;
2. trust/credibility/positioning band;
3. services preview;
4. platform/APGI Hub preview;
5. training preview;
6. about/approach preview;
7. contact CTA;
8. footer.

### ARCH-PAGE-002 - Services Page Composition

Services page must include:

- services hero or intro;
- service category grid/list;
- service detail blocks;
- outcomes/visitor-value copy;
- contact CTA;
- related training/platform links where appropriate.

### ARCH-PAGE-003 - Platform Page Composition

Platform/APGI Hub page must include:

- ecosystem overview;
- required module grid;
- module status labels;
- link or pending behavior;
- explanation of unavailable/private-preview states;
- contact CTA.

### ARCH-PAGE-004 - Training Page Composition

Training page must include:

- training hero or intro;
- Thinkific storefront CTA;
- course/offering cards;
- current/pending status labels;
- group/custom training contact path.

### ARCH-PAGE-005 - About and Team Composition

About and Team pages must separate content from layout and support approved content or honest placeholders.

### ARCH-PAGE-006 - Contact Composition

Contact page must expose readable email and phone handoffs and must not include backend form submission.

### ARCH-PAGE-007 - Legal Composition

Privacy and Terms pages must render as pages or governed placeholders.

---

## 7. Structured Content Architecture

### ARCH-CONTENT-001 - Central Content Source

Core public content should be maintainable through structured local data, configuration files, or component props.

The content source must support:

- routes;
- services;
- platform modules;
- training offerings;
- CTAs;
- contact details;
- legal placeholder status;
- metadata.

### ARCH-CONTENT-002 - Services Model

Each service entry must include:

- stable ID;
- name;
- description;
- visitor need/problem;
- APGI support/outcome;
- CTA target;
- status where content is pending.

### ARCH-CONTENT-003 - Platform Module Model

Each module entry must include:

- stable ID;
- title;
- description;
- status;
- route slug or pending state;
- accessible label;
- CTA behavior.

### ARCH-CONTENT-004 - Training Offering Model

Each training entry must include:

- stable ID;
- course/offering name;
- description;
- status;
- Thinkific or contact handoff;
- pending state where applicable.

### ARCH-CONTENT-005 - Placeholder Register

Placeholder content must be easy to identify through data flags, comments, filenames, or a clear register.

---

## 8. Component and Section Architecture

### ARCH-COMP-001 - Shared Layout Shell

The site should use a shared shell for header, mobile navigation, main content, and footer.

### ARCH-COMP-002 - Reusable Sections

The architecture should support reusable sections for:

- hero;
- trust/proof band;
- card grid;
- feature/detail block;
- CTA band;
- status/pending notice;
- legal placeholder block.

### ARCH-COMP-003 - Card Systems

Cards should support service, module, training, and proof/positioning content with consistent accessibility and CTA behavior.

### ARCH-COMP-004 - Contact Actions

Contact actions should use explicit `mailto:` and `tel:` patterns while keeping contact values readable as text.

### ARCH-COMP-005 - No Hover-Only Interaction

Core navigation, CTAs, and content discovery must not rely on hover-only behavior.

---

## 9. Design-System Architecture

### ARCH-DES-001 - Visual Foundation

Architecture must support a professional APGI design system with:

- deep navy/slate foundation;
- richer accent colours;
- high-contrast text;
- premium section rhythm;
- card and panel systems;
- strong CTA patterns.

### ARCH-DES-002 - Typography Hierarchy

The design architecture must support strong editorial hierarchy for hero, page headings, section headings, body copy, cards, and labels.

### ARCH-DES-003 - Section Treatment Model

The site must support varied section treatments so the result does not look like a plain scaffold.

### ARCH-DES-004 - Responsive Design Tokens

The design system should support responsive spacing, grid, and typography tokens or equivalent maintainable rules.

### ARCH-DES-005 - Motion Policy

Any motion must be non-essential and compatible with reduced-motion preferences.

---

## 10. Platform / APGI Hub Architecture

### ARCH-HUB-001 - Required Module Set

The platform page must support these modules:

- Maturity Roadmap / MMM;
- Risk Management;
- Project Implementation Tracker / PIT;
- Incident and Intelligence Hub;
- Data Analytics and Remote Assurance;
- Systems Integration / RADAM;
- Skills Development Portal.

### ARCH-HUB-002 - Public Base URL Resolution

If the public Hub/ISMS base URL is known, module links resolve from:

`ISMS_PUBLIC_BASE_URL + governed route slug`

### ARCH-HUB-003 - Pending State

If the public base URL is not known, the module must render a polished pending/private-preview state.

### ARCH-HUB-004 - Module Governance

Adding or removing modules must be a reviewable content/configuration change.

---

## 11. Training Architecture

### ARCH-TRN-001 - Thinkific Storefront Handoff

The training page must include a prominent public handoff to:

`https://apgi.thinkific.com/`

### ARCH-TRN-002 - Training Offering Cards

Training offerings must be modeled and rendered as cards or equivalent structured blocks.

### ARCH-TRN-003 - Admin Exclusion

No Thinkific admin or management URL may appear in public content, metadata, or navigation.

---

## 12. Metadata and SEO Architecture

Each route should support route-specific metadata:

- title;
- description;
- canonical strategy;
- Open Graph title;
- Open Graph description;
- Open Graph type;
- social image where approved.

Metadata must not imply unapproved claims or capabilities.

---

## 13. Accessibility Architecture

Architecture must support:

- semantic landmarks;
- meaningful heading order;
- keyboard reachable navigation and CTAs;
- visible focus states;
- accessible card and link labels;
- skip or equivalent content bypass;
- reduced-motion support;
- text-first resilience.

---

## 14. Responsive Architecture

Architecture must support:

- mobile-first layout;
- tablet layout;
- desktop layout;
- no critical horizontal overflow;
- tap-friendly CTAs;
- readable card grids;
- designed mobile navigation.

---

## 15. Validation Architecture

The project must have validation capable of failing non-compliant output.

Validation must check at minimum:

- required pages exist;
- header/footer navigation includes required pages;
- Services page includes service entries;
- Platform page includes required modules;
- Training page includes Thinkific handoff;
- Contact page includes email and phone handoffs;
- Privacy and Terms render;
- one-page-only output is rejected;
- no Supabase/database/auth/contact-form backend indicators are introduced.

---

## 16. Vercel and Deployment Architecture

The architecture must support Vercel evidence collection for:

- project connection;
- branch and deployment source;
- build command;
- output directory;
- preview URL;
- production deployment where applicable;
- route rendering;
- build log validation pass.

---

## 17. Evidence Architecture

Stage 12 evidence must be able to prove:

- route rendering;
- navigation and CTA behavior;
- services depth;
- platform module rendering;
- training offering and Thinkific handoff;
- contact handoffs;
- legal placeholders or final legal pages;
- visual/design-system application;
- mobile/responsive behavior;
- accessibility basics;
- metadata;
- Vercel build/deploy success;
- public-only/no-backend boundary.

---

## 18. Architecture Controls Against PR #11 Regression

| Regression Risk | Architectural Control |
|-----------------|-----------------------|
| One-page scaffold returns | Required multi-page route set and validation architecture. |
| Services are shallow | Services model and Services page composition. |
| Platform is thin tiles only | Platform page composition and module data model. |
| Training is one button | Training page composition and training offering model. |
| Design is afterthought | Design-system architecture and section treatment model. |
| Mobile is collapsed scaffold | Responsive architecture and mobile navigation requirements. |
| Broken/pending links | CTA registry and pending destination model. |
| Backend scope creep | Public-only architecture boundary and validation. |

---

## 19. Canon Completeness Closure

The following files are part of this Architecture stage and must be treated as architecture source material for QA-to-Red:

- `modules/APW/04-architecture/architecture.md`
- `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md`
- `.env.example`

The completeness checklist maps APW architecture to governance canon domains 3.1 through 3.17 and defines the concrete technical baseline, environment variables, data/no-persistence decision, external dependency failure behavior, wiring map, end-to-end paths, security/privacy controls, performance constraints, observability, QA domains, wave model, frontend scaffold, infrastructure provisioning, deployment evidence package, and QA catalog seed.

---

## 20. Handoff to Stage 6 QA-to-Red v0.2

Corrective Stage 6 QA-to-Red v0.2 must convert this architecture and the completeness checklist into tests that are RED until the upgraded implementation proves:

- all routes exist;
- all page journeys work;
- design-system expectations are visible;
- services/platform/training content depth exists;
- validation passes;
- Vercel evidence exists;
- public-only boundary is preserved;
- environment and runtime expectations are satisfied;
- required evidence package is complete.

---

## 21. Stage 5 Disposition

**Foreman disposition**: Corrective Stage 5 Architecture v0.2A is complete as an architecture artifact for the upgraded APW website, contingent on PR review.

**Next stage**: Corrective Stage 6 QA-to-Red v0.2.
