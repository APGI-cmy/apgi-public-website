# APW Stage 6 - QA-to-Red Catalog v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Artifact | QA-to-Red Catalog |
| Version | v0.2 |
| Status | Draft for review |
| Last Updated | 2026-06-04 |
| Authority | CS2: Johan Ras |
| Source Architecture | `modules/APW/04-architecture/architecture.md` v0.2A |
| Source Checklist | `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md` |

---

## Catalog Rules

- Every test has a source.
- Every test has a layer.
- Every test has a RED condition.
- Every test has acceptance criteria.
- Every test has a clean handover summary.
- No test may contain TBD as an acceptance criterion.
- PR #11 style one-page scaffold output must remain RED.

---

## RED Test Catalog

| Test ID | Source | Layer | Description | RED Condition | Acceptance Criteria | Clean Handover Summary |
|---|---|---|---|---|---|---|
| APW-QA-001 | ARCH-SITE-002; checklist 17 | Route | Required public pages exist. | Any required page is missing. | Home, Services, Platform, Training, About, Team, Contact, Privacy, and Terms render. | Builder must produce all public pages. |
| APW-QA-002 | ARCH-SITE-004 | Route | One-page scaffold rejection. | Site is one page only. | Dedicated page output exists for required areas. | Builder cannot satisfy QA with homepage sections only. |
| APW-QA-003 | ARCH-ROUTE-002; ARCH-ROUTE-003 | Navigation | Header and footer route coverage. | Header/footer omit required destinations. | Header and footer expose required page links. | Navigation must be complete across pages. |
| APW-QA-004 | ARCH-ROUTE-004 | CTA | CTA registry behavior. | CTAs are broken, vague, or empty. | CTAs resolve to internal route, external link, or labelled pending state. | CTAs must be traceable and testable. |
| APW-QA-005 | ARCH-ROUTE-005 | Pending state | Pending destinations are clear. | Pending destination looks broken or final. | Pending/private-preview/coming-soon state is visible and polished. | Builder must avoid dead-link behavior. |
| APW-QA-006 | ARCH-PAGE-001 | Homepage | Homepage composition. | Homepage lacks hero, previews, CTA, or footer. | Homepage includes premium hero, trust band, services/platform/training previews, about preview, contact CTA, footer. | Home is a conversion front door. |
| APW-QA-007 | ARCH-PAGE-002; ARCH-CONTENT-002 | Services | Services depth. | Services page is shallow or only a list. | Service entries include name, description, need/problem, outcome/support, CTA. | Services must have substance. |
| APW-QA-008 | ARCH-PAGE-003; ARCH-HUB-001 | Platform | Required modules render. | Required modules are missing. | Platform page includes MMM, Risk, PIT, Incident/Intelligence, Data/Remote Assurance, RADAM, Skills Portal. | Platform must show ecosystem. |
| APW-QA-009 | ARCH-HUB-002; `.env.example` | Environment | Hub link composition. | Base URL handling is missing or unsafe. | If `ISMS_PUBLIC_BASE_URL` is set, links compose correctly. If unset, pending state renders. | Hub behavior must be env-driven and safe. |
| APW-QA-010 | ARCH-PAGE-004; ARCH-TRN-001 | Training | Thinkific handoff. | Thinkific link missing or wrong. | Training page links to `https://apgi.thinkific.com/`. | Training storefront must be reachable. |
| APW-QA-011 | ARCH-TRN-002 | Training | Training offering cards. | Training page is only one button. | Course/offering cards or structured offering blocks render. | Training must have content depth. |
| APW-QA-012 | ARCH-TRN-003 | Training security | Thinkific admin exclusion. | Admin/management Thinkific URL appears. | Only public storefront or approved public course links appear. | No admin URLs in public site. |
| APW-QA-013 | ARCH-PAGE-006 | Contact | Contact page handoffs. | Contact page missing email/phone or adds form capture. | Contact page shows readable and linked email and phone handoffs. | Contact is public handoff only. |
| APW-QA-014 | ARCH-PAGE-007 | Legal | Privacy and Terms render. | Privacy or Terms missing. | Privacy and Terms routes render final copy or governed placeholders. | Legal routes must not break. |
| APW-QA-015 | ARCH-DES-001; ARCH-DES-003 | Design | Visual system visibility. | Site looks like plain scaffold. | Palette, section treatments, cards, hierarchy, and CTAs are visibly applied. | Design is a testable requirement. |
| APW-QA-016 | ARCH-COMP-001; ARCH-COMP-002 | Components | Shared layout and sections. | Pages are inconsistent one-off markup without shared shell. | Shared header/main/footer and reusable section/card patterns exist. | Build must be maintainable. |
| APW-QA-017 | ARCH-COMP-005 | Interaction | No hover-only interaction. | Core navigation or content needs hover only. | Keyboard/touch paths exist for core interactions. | Core journey must work without hover. |
| APW-QA-018 | ARCH 13 | Accessibility | Semantic and keyboard basics. | Headings, landmarks, focus, or keyboard nav fail basics. | Semantic layout, visible focus, keyboard reachable nav/CTAs, accessible labels. | Accessibility basics are mandatory. |
| APW-QA-019 | ARCH 14 | Responsive | Mobile/tablet/desktop layout. | Critical overflow or unusable mobile nav. | Layout works on mobile, tablet, desktop; CTAs are tappable. | Mobile must be designed, not collapsed. |
| APW-QA-020 | ARCH 12 | Metadata | Page metadata. | Major route lacks title/description/OG readiness. | Major pages include title, description, canonical strategy, Open Graph fields where approved. | SEO/social must be route-aware. |
| APW-QA-021 | Checklist 4 | Environment | `.env.example` exists and is public-only. | `.env.example` missing or contains secrets. | `.env.example` documents public config only. | Env expectations must be explicit. |
| APW-QA-022 | Checklist 5 | Data | No persistence. | Database/migration/persistence introduced. | Static content only; no database or migration requirement. | Data model is static PR-reviewed content. |
| APW-QA-023 | Checklist 6 | Integration | External dependency behavior. | External links have no failure/pending model. | Thinkific, Hub, mailto, tel, and Vercel expectations have testable behavior. | Integrations must degrade clearly. |
| APW-QA-024 | Checklist 9 | Observability | Build/deploy observability. | No build/validation/deploy logs available. | Vercel/build logs and validation output are captured in evidence. | Static observability is deployment evidence. |
| APW-QA-025 | Checklist 10; checklist 17 | QA catalog | QA seed alignment. | Architecture QA seeds missing from catalog. | Route, nav, services, platform, training, design, accessibility, metadata, deployment, public-boundary seeds are covered. | QA must align with architecture. |
| APW-QA-026 | Checklist 12 | E2E | End-to-end paths. | Primary E2E paths are untested. | Home->Services->Contact, Home->Platform->Module/Pending, Home->Training->Thinkific, Footer->Legal, Mobile nav paths are covered. | QA must prove journeys, not just pages. |
| APW-QA-027 | Checklist 15 | Infrastructure | Vercel provisioning evidence. | Vercel project/build/output/preview evidence missing. | Stage 12 evidence records project, branch/source, build command, output dir, preview URL. | Deployment evidence must be ready. |
| APW-QA-028 | ARCH 17; checklist 16 | Evidence | Minimum evidence package. | Evidence cannot prove green state. | Evidence includes routes, links, browser checks, metadata, Vercel logs, no-backend confirmation. | Build evidence must map back to QA. |
| APW-QA-029 | ARCH boundary; checklist 9 | Security | Public-only boundary. | Supabase, DB, auth, private API, CRM, form backend, secrets, or PII storage appear. | None of those are present unless CS2-approved scope change exists. | Boundary must remain public/static. |
| APW-QA-030 | Tracker; Foreman model | Governance | No build before gates. | Implementation starts before QA/PBFAG/plan/checklist/IAA/appointment gates. | Implementation remains blocked until corrected downstream gates complete. | Governance sequencing is part of QA. |

---

## Catalog Disposition

This catalog is RED until the upgraded implementation exists and produces evidence for each test.
