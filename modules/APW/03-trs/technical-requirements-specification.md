# APW Stage 4 - Technical Requirements Specification v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 4 - Technical Requirements Specification |
| Folder | `modules/APW/03-trs` |
| Version | v0.2 - Corrective Multi-Page Professional Website TRS |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Last Updated | 2026-06-03 |
| Upstream Stage | `modules/APW/02-frs/functional-requirements.md` v0.2 |
| Corrective Trigger | PR #11 functional scaffold failed APW professional website design-quality expectation |

---

## 1. Purpose

This Technical Requirements Specification v0.2 translates Corrective Stage 3 FRS v0.2 into implementation-facing technical requirements.

It defines the technical obligations for a polished, multi-page, static-first APW website that can be built to green.

It does not authorize implementation. It feeds Corrective Stage 5 Architecture v0.2, QA-to-Red v0.2, and the later build plan.

---

## 2. Technical Boundary

The APW v1 website must remain public-only and static-first.

The technical design must not require:

- Supabase;
- database storage;
- authentication;
- CRM or lead database;
- contact-form backend;
- Thinkific administration;
- ISMS application backend logic;
- LinkedIn scraping or synchronization;
- unapproved analytics, CMS, or marketing automation.

Any future addition of those capabilities requires an explicit governed scope change.

---

## 3. Source Traceability

| Source | TRS Function |
|--------|--------------|
| App Description v0.2 | Defines product goal, professional design standard, and build-to-green rule. |
| UX Workflow v0.2 | Defines multi-page journeys, navigation, CTAs, and design-quality UX gate. |
| FRS v0.2 | Defines functional requirements converted here into technical requirements. |
| Tracker | Records PR #11 scaffold result and corrective stage status. |

---

## 4. Runtime and Build Requirements

### TRS-RUN-001 - Static-First Public Runtime

The website must be technically capable of static or static-first deployment on Vercel.

### TRS-RUN-002 - Root Build Contract

The repository must support a clear build contract when implementation resumes:

- root project directory unless later architecture approves otherwise;
- build command defined in project metadata;
- output directory defined for Vercel;
- no hidden server/runtime dependency for approved v1 behavior.

### TRS-RUN-003 - Deterministic Build Output

The build must produce predictable public output for all required routes/pages.

### TRS-RUN-004 - No Server Business Workflow

No server-side business workflow is required or permitted for v1 website scope.

---

## 5. Multi-Page Route Requirements

The implementation must technically support all required public pages.

| Route/Page | Technical Requirement |
|------------|----------------------|
| Home | Public route at `/` or generated `index.html`. |
| Services | Dedicated static route/page for services. |
| Platform/APGI Hub | Dedicated static route/page for platform modules. |
| Training | Dedicated static route/page with Thinkific handoff. |
| About | Dedicated static route/page for APGI story/positioning. |
| Team | Dedicated static route/page for team/profile content or honest placeholders. |
| Contact | Dedicated static route/page for email and phone handoffs. |
| Privacy | Dedicated static route/page or governed placeholder. |
| Terms | Dedicated static route/page or governed placeholder. |

A one-page-only build is technically non-compliant for the upgraded APW website.

---

## 6. Navigation and Routing Technical Requirements

### TRS-NAV-001 - Header Navigation

Header navigation must route to the required top-level pages, not only page anchors.

Required destinations:

- Home;
- Services;
- Platform / APGI Hub;
- Training;
- About;
- Team;
- Contact.

### TRS-NAV-002 - Footer Navigation

Footer navigation must include page links for primary pages and legal pages.

### TRS-NAV-003 - CTA Route Integrity

All CTAs must resolve to:

1. a live internal route;
2. an approved external destination;
3. a clearly labelled pending/coming-soon state.

Silent dead links are not allowed.

### TRS-NAV-004 - External Link Treatment

External links must have clear labels and preserve user intent.

---

## 7. Structured Content Requirements

### TRS-CONTENT-001 - Central Content Model

The implementation must represent core public content in a maintainable structure rather than scattering it through hard-to-audit markup.

The content model must support:

- services;
- platform modules;
- training offerings;
- CTAs;
- contact details;
- legal placeholder state;
- metadata per page.

### TRS-CONTENT-002 - Services Data Model

Each service entry must support:

- service name;
- short description;
- visitor need/problem;
- APGI outcome/support;
- CTA target.

### TRS-CONTENT-003 - Platform Module Data Model

Each platform module must support:

- stable ID;
- title;
- description;
- status;
- route slug or pending state;
- accessible label.

### TRS-CONTENT-004 - Training Offering Data Model

Each training entry must support:

- course/offering name;
- description;
- status;
- Thinkific or contact handoff;
- pending state where not final.

### TRS-CONTENT-005 - Placeholder Register

Placeholders must be technically easy to identify and review.

---

## 8. Design-System Technical Requirements

### TRS-DES-001 - Palette and Theme Support

The implementation must support a professional APGI palette with richer visual identity than the failed scaffold.

### TRS-DES-002 - Typography and Hierarchy

The implementation must support clear editorial hierarchy across pages.

### TRS-DES-003 - Component / Section System

The implementation must support reusable visual patterns for:

- hero sections;
- trust/proof bands;
- service cards;
- platform module cards;
- training cards;
- CTA bands;
- legal/placeholder blocks;
- footer.

### TRS-DES-004 - Dark/Light or Rich Section Treatments

The implementation must support varied section treatments so the site does not collapse into plain white scaffold output.

### TRS-DES-005 - Responsive Design System

Design patterns must adapt intentionally across mobile, tablet, and desktop.

---

## 9. Services Technical Requirements

### TRS-SVC-001 - Services Page Generation

The implementation must generate a dedicated Services page from structured service content.

### TRS-SVC-002 - Service Detail Rendering

Each service must render name, description, visitor need, APGI outcome, and CTA.

### TRS-SVC-003 - Homepage Service Preview

Homepage must render a services preview that links to the Services page.

---

## 10. Platform / APGI Hub Technical Requirements

### TRS-PLAT-001 - Platform Page Generation

The implementation must generate a dedicated Platform/APGI Hub page.

### TRS-PLAT-002 - Required Module List

The platform model must support:

- Maturity Roadmap / MMM;
- Risk Management;
- Project Implementation Tracker / PIT;
- Incident and Intelligence Hub;
- Data Analytics and Remote Assurance;
- Systems Integration / RADAM;
- Skills Development Portal.

### TRS-PLAT-003 - Public Hub Base URL

If a public Hub/ISMS base URL exists, module links must compose from that base plus governed slugs.

Recommended public config name:

`ISMS_PUBLIC_BASE_URL`

### TRS-PLAT-004 - Pending Module State

If no public base URL exists, modules must show polished pending/private-preview states, not broken links.

---

## 11. Training Technical Requirements

### TRS-TRN-001 - Training Page Generation

The implementation must generate a dedicated Training page.

### TRS-TRN-002 - Thinkific Link

The Thinkific public storefront must be represented as an external public link:

`https://apgi.thinkific.com/`

### TRS-TRN-003 - Training Offering Cards

Training offerings must render as cards or equivalent structured content.

### TRS-TRN-004 - No Thinkific Admin Exposure

No Thinkific admin or management URL may appear in public navigation, public content, or metadata.

---

## 12. Contact Technical Requirements

### TRS-CON-001 - Contact Page Generation

The implementation must generate a dedicated Contact page.

### TRS-CON-002 - Email Handoff

The implementation must support:

`mailto:info@apginc.ca`

unless CS2 later changes the approved address.

### TRS-CON-003 - Phone Handoff

The implementation must support:

`tel:+14166429974`

unless CS2 later changes the approved number.

### TRS-CON-004 - No Contact Form Backend

No contact form submission, validation endpoint, CRM posting, email automation, or database persistence is permitted in v1.

---

## 13. Metadata and SEO Technical Requirements

Each major page must support:

- title;
- description;
- canonical URL or canonical strategy;
- Open Graph title;
- Open Graph description;
- Open Graph type;
- share image where approved;
- route-specific metadata.

Metadata must not imply unapproved capabilities or claims.

---

## 14. Accessibility Technical Requirements

The implementation must support:

- semantic landmarks;
- meaningful heading order;
- keyboard reachable navigation and CTAs;
- visible focus states;
- accessible names for cards and links;
- reduced-motion behavior where motion exists;
- text-first resilience when images are unavailable;
- mobile menu that is usable by keyboard and touch.

---

## 15. Responsive Technical Requirements

The implementation must support intentional layouts for:

- mobile;
- tablet;
- desktop;
- wide desktop where applicable.

Technical acceptance must include no critical horizontal overflow, tappable CTAs, and readable card layouts.

---

## 16. Validation Requirements

The project must include validation that fails if required structure is missing.

Validation must check at minimum:

- all required pages are generated;
- required navigation links exist;
- Services page exists and has service entries;
- Platform page exists and has required module entries;
- Training page exists and has Thinkific handoff;
- Contact page exists with email and phone handoffs;
- Privacy and Terms routes exist;
- no Supabase/database/auth/contact-form backend indicators are introduced;
- one-page-only output is rejected.

---

## 17. Vercel and Deployment Evidence Requirements

Stage 12 evidence must verify:

- Vercel project connected to APW repository;
- root directory setting;
- build command;
- output directory;
- preview deployment URL;
- production deployment after merge where applicable;
- each required page route renders;
- build logs show the validation command passed.

---

## 18. Security and Privacy Requirements

The v1 website must not collect or persist personal data.

Public configuration values may be used for public link composition, but no private secrets may be exposed in source output or public pages.

---

## 19. Technical Negative Requirements

The upgraded APW implementation must not:

- be a one-page-only build;
- omit dedicated Services, Platform, or Training pages;
- use broken CTAs;
- introduce Supabase, database, auth, CRM, or contact-form backend without CS2 approval;
- expose private secrets;
- use unapproved third-party proof assets;
- rely on hover-only navigation;
- rely on images for essential meaning.

---

## 20. Handoff to Stage 5 Architecture v0.2

Corrective Stage 5 Architecture v0.2 must define:

- route architecture;
- content/data architecture;
- component/section architecture;
- design-system architecture;
- validation architecture;
- Vercel/deployment architecture;
- evidence architecture;
- public-only boundary controls.

---

## 21. Stage 4 Disposition

**Foreman disposition**: Corrective Stage 4 TRS v0.2 is complete as a technical requirements artifact for the upgraded APW website.

**Next stage**: Corrective Stage 5 Architecture v0.2.
