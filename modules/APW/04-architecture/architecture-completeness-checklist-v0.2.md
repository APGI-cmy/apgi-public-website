# APW Architecture Completeness Checklist v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture completeness review |
| Version | v0.2A |
| Status | Corrective canon review addendum |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage5-architecture-v02` |
| Architecture Under Review | `modules/APW/04-architecture/architecture.md` |
| Canon Source | `governance/canon/ARCHITECTURE_COMPLETENESS_REQUIREMENTS.md` v1.4 |
| Date | 2026-06-03 |

---

## 1. Review Finding

Initial Architecture v0.2 was strong on route, content, design-system, validation, Vercel, and evidence architecture, but it was not yet complete against the full architecture completeness canon.

This addendum closes the missing or under-specified canon domains so QA-to-Red can be derived without guesswork.

---

## 2. Canon Completeness Matrix

| Canon Domain | APW Disposition | Architecture Requirement / Decision |
|--------------|-----------------|-------------------------------------|
| 3.1 Deployment target | Pass after addendum | Target platform is Vercel. Production branch is `main`. Root directory is repository root. Build output is `dist/`. Static hosting/CDN behavior is expected. |
| 3.2 Runtime entrypoint and filesystem | Pass after addendum | Architecture baseline is an Astro static site unless CS2 later approves another static framework. Required root files: `package.json`, `astro.config.*`, `.env.example`, `vercel.json` if needed. Required folders: `src/pages`, `src/layouts`, `src/components`, `src/content` or equivalent structured data, `public`, `dist`. |
| 3.3 Environment variables and provider constraints | Pass after addendum | `.env.example` is added at repo root. Variables are public configuration only: `ISMS_PUBLIC_BASE_URL` and `APW_PUBLIC_SITE_URL`. No secrets are required for v1. |
| 3.4 Database and data migration | Pass | No database, no persistence, no migrations. Static content changes are pull-request reviewed. Rollback is Git/Vercel redeploy to prior green commit. |
| 3.5 Non-testable configuration boundaries | Pass after addendum | Vercel project settings, production domain, Vercel env values, external Thinkific availability, and APGI Hub external host are runtime/manual verification items. |
| 3.6 External dependencies | Pass after addendum | External dependencies are Vercel hosting, Thinkific public storefront, optional APGI Hub public host, `mailto:` handler, and `tel:` handler. Failure/degraded behavior is defined below. |
| 3.7 Security and compliance | Pass after addendum | Public-only static site. No auth/authz model. No PII collection. No secrets. HTTPS via Vercel/custom domain. No forms. No database. |
| 3.8 Performance and scalability | Pass after addendum | Static CDN-served pages. Target: pages render quickly on common mobile/desktop networks; avoid unnecessary JS; image assets optimized before launch. |
| 3.9 Error handling and observability | Pass after addendum | Build errors fail validation. Static 404/fallback behavior must exist. Vercel logs/build logs are the observability source. External-link failures are handled through pending states or documented manual verification. |
| 3.10 Test strategy and QA domains | Pass after addendum | QA domains are architecture conformance, route/render, UX/navigation, content depth, design-system visibility, accessibility basics, responsive behavior, security boundary, metadata, Vercel deployment, and external handoffs. |
| 3.11 Wiring and interconnectivity | Pass after addendum | Wiring map and connection ownership are defined in this addendum. No implicit routes, CTAs, content sources, or env/config links may be assumed. |
| 3.12 End-to-end functional paths | Pass after addendum | Primary, secondary, and degraded paths are defined below and must feed Stage 6 QA-to-Red. |
| 3.13 Wave-based one-time build model | Pass after addendum | Corrective pre-build stages are separate governance waves. Upgraded implementation should be a single complete build wave unless CS2 approves subwaves. If split, each subwave must have isolated and cumulative QA. |
| 3.14 Frontend scaffolding and UI wiring | Pass after addendum | Frontend scaffold baseline is Astro static pages/components/content. UI state is limited to navigation/menu/presentation state. No UI-to-API wiring exists in v1. |
| 3.15 Infrastructure deployment and provisioning | Pass after addendum | Vercel project exists. Owner provisions project/domain/env values. Builder verifies settings and deployment evidence. Rollback is previous successful Vercel deployment or Git revert. |
| 3.16 End-to-end integration and deployment evidence | Pass after addendum | Evidence must include deployment URL, build logs, validation logs, screenshots or browser notes for each route, route/link checks, and explicit no-backend/no-persistence confirmation. |
| 3.17 QA catalog alignment | Pass with Stage 6 gate | This addendum defines the QA component seed map. Stage 6 must formalize QA-to-Red and QA catalog alignment before implementation planning. No builder appointment may proceed without that alignment. |

---

## 3. Concrete Technical Baseline

### 3.1 Framework and Build Baseline

Unless CS2 approves an alternative during Architecture/QA review, the upgraded APW build should use:

| Item | Decision |
|------|----------|
| Frontend framework | Astro static site |
| Rendering mode | Static output |
| Deployment target | Vercel |
| Node runtime | Node 20 or later |
| Build command | `npm run build` |
| Validation command | `npm run validate` or equivalent invoked by build |
| Output directory | `dist` |
| Root directory | Repository root |

### 3.2 Expected Repository Structure

```text
package.json
astro.config.*
.env.example
vercel.json                 # optional if Vercel auto-detect is insufficient
src/
  pages/
    index.astro
    services.astro
    platform.astro
    training.astro
    about.astro
    team.astro
    contact.astro
    privacy.astro
    terms.astro
  layouts/
  components/
  content/ or data/
public/
scripts/
dist/                       # generated output only
```

If the builder chooses a non-Astro static approach, the builder must update Architecture/TRS or obtain Foreman/CS2 acceptance before implementation proceeds.

---

## 4. Environment and Configuration Architecture

`.env.example` is required at repository root and has been added.

| Variable | Required | Purpose | Source | Secret? | Failure Behavior |
|----------|----------|---------|--------|---------|------------------|
| `ISMS_PUBLIC_BASE_URL` | No for preview; yes for green Hub external-link evidence | Public APGI Hub/ISMS base URL for module links | Owner/Vercel env | No | If unset, Platform modules show pending/private-preview state. |
| `APW_PUBLIC_SITE_URL` | No for preview; yes for final production SEO evidence | Canonical public APW base URL | Owner/Vercel env | No | If unset, preview canonical strategy must be documented and final SEO evidence remains conditional. |

No private secrets are required for v1. Adding secrets, private APIs, or backend credentials requires governed scope change.

---

## 5. Data, Migration, and Persistence Architecture

APW v1 has no database and no persistent application data.

| Area | Decision |
|------|----------|
| Persistence | None. Static files/content only. |
| Database | None. |
| Schema migrations | None. |
| Data seeding | Static content committed through PR review. |
| Rollback | Git revert or redeploy prior successful Vercel build. |
| Backup | Git history and Vercel deployment history. |

---

## 6. External Dependency Contracts and Failure Modes

| Dependency | Contract | Failure / Missing State | Required Behavior |
|------------|----------|-------------------------|-------------------|
| Vercel | Builds and serves static output from repo root. | Build fails or preview unavailable. | Stage 12 evidence cannot close green until fixed. |
| Thinkific | Public storefront at `https://apgi.thinkific.com/`. | External site unavailable. | Link remains correct; manual verification records external availability issue. |
| APGI Hub public host | Optional public base URL for module links. | Base URL unavailable or unset. | Platform modules show polished pending/private-preview state. |
| Email handler | `mailto:info@apginc.ca`. | User has no local mail client. | Link still renders; readable email text remains visible. |
| Phone handler | `tel:+14166429974`. | Device cannot place call. | Link still renders; readable phone text remains visible. |

---

## 7. Wiring and Interconnectivity Map

Logical wiring:

```text
Visitor
  -> Vercel CDN/static route
    -> Shared Layout Shell
      -> Header Navigation -> Route Registry -> Page Route
      -> Page Content -> Structured Content/Data
      -> CTA Components -> Route Registry / External Link Registry / Pending State
      -> Platform Module Cards -> ISMS_PUBLIC_BASE_URL + governed slug OR pending state
      -> Training CTA -> Thinkific public storefront
      -> Contact Actions -> mailto/tel handoffs
      -> Footer Navigation -> Route Registry / legal pages
```

Connection ownership:

| Connection | Producer | Consumer | Test Mapping |
|------------|----------|----------|--------------|
| Route registry to header/footer | Route/content source | Layout shell | Navigation route test |
| Structured services to Services page | Services content source | Services page/card components | Services depth test |
| Platform module data to Platform page | Module content source | Platform cards | Platform module test |
| Env base URL to module links | Vercel env / build process | Platform link composer | Hub link/pending-state test |
| Training data to Training page | Training content source | Training cards/CTA | Thinkific handoff test |
| Contact data to Contact page | Contact content source | Contact actions | mailto/tel test |
| Metadata data to page head | Route/content source | Page renderer/layout | Metadata test |

Startup order:

1. Vercel installs dependencies.
2. Build reads static source and public environment configuration.
3. Build generates static routes and metadata.
4. Validation checks required pages, wiring, and scope boundaries.
5. Vercel serves `dist` output.

There is no shutdown cascade because v1 has no server process, worker, database, or queue.

---

## 8. End-to-End Functional Paths

| Path ID | Path | Expected Result | Degraded / Failure Handling |
|---------|------|-----------------|-----------------------------|
| E2E-001 | Home -> Services -> Contact | Visitor can understand services and reach contact. | Missing service content fails validation/QA. |
| E2E-002 | Home -> Platform -> Module | Visitor can understand modules and open configured module or see pending state. | Missing base URL displays pending/private-preview state. |
| E2E-003 | Home -> Training -> Thinkific | Visitor can review training and open Thinkific storefront. | External availability issue recorded in evidence; link remains correct. |
| E2E-004 | Home -> About/Team -> Contact | Visitor can review credibility content and contact APGI. | Pending bios/photos labelled honestly. |
| E2E-005 | Footer -> Privacy/Terms | Visitor can review legal pages or governed placeholders. | Placeholder state visible and not disguised as final copy. |
| E2E-006 | Mobile menu -> Any primary route | Mobile user reaches all primary routes. | Mobile nav issues fail QA-to-Red. |

For APW v1 the canonical path trace is:

```text
UI route -> static content/component -> optional public config/external link -> visible page/link outcome -> Vercel/build/browser evidence
```

There is no API, domain logic layer, persistent data layer, or authenticated external dependency in v1.

---

## 9. Security, Privacy, and Compliance Controls

| Control Area | APW v1 Decision |
|--------------|-----------------|
| Authentication | None. Public website only. |
| Authorization | None. No private actions. |
| PII collection | None. No forms or storage. |
| Secrets | None required. `.env.example` is placeholders only. |
| Transport security | HTTPS through Vercel/custom domain. |
| Input validation | No user-submitted data in v1; external/public config values must be sanitized for URL composition. |
| Audit logging | Vercel deployment/build logs only. No application audit log required for static site. |
| Compliance posture | Public site must avoid unapproved claims, testimonials, client marks, legal copy, or regulated statements. |

---

## 10. Performance and Scalability Constraints

| Area | Requirement |
|------|-------------|
| Delivery | Static/CDN-served pages. |
| JavaScript | Keep JS minimal; no framework hydration unless needed. |
| Images/assets | Optimize before launch; avoid large uncompressed hero assets. |
| Page responsiveness | Primary content should render quickly on normal mobile/desktop connections. |
| Scalability | Vercel static/CDN hosting handles normal public marketing traffic. |
| Bottlenecks | Oversized media, unoptimized fonts, and unnecessary scripts are the main risks. |

Stage 12 evidence must include performance-oriented browser notes or automated output where available.

---

## 11. Error Handling and Observability

| Error Class | Handling | Evidence |
|-------------|----------|----------|
| Build/validation failure | Build fails; PR cannot close green. | Vercel/build logs. |
| Missing route/content | Validation fails. | Validation log. |
| Unknown APGI Hub base URL | Pending/private-preview state renders. | Browser evidence. |
| External Thinkific issue | Link remains correct; issue recorded as external dependency state. | Manual link check. |
| Unknown production domain | Preview allowed; final SEO evidence remains conditional. | Stage 12 evidence note. |
| 404 route | Static 404/fallback should render if framework supports it. | Browser route check. |

No production application logs exist for v1 because the site is static.

---

## 12. Test Strategy and QA Domains

Stage 6 QA-to-Red must cover:

- Architecture conformance;
- Route/render coverage;
- Navigation and CTA wiring;
- Services content depth;
- Platform module rendering and pending/link behavior;
- Training offering and Thinkific handoff;
- Contact handoffs;
- Privacy/Terms rendering;
- Design-system visibility;
- Mobile/responsive behavior;
- Accessibility basics;
- Metadata/SEO/social readiness;
- Public-only/no-backend boundary;
- Vercel build/deployment evidence.

Test levels:

| Level | Purpose |
|-------|---------|
| Static validation | Required pages, content/data, no-backend indicators, metadata, links. |
| Browser/manual verification | Visual quality, mobile nav, responsive behavior, external handoffs. |
| Deployment evidence | Vercel build log, preview URL, route rendering, production deployment where applicable. |

---

## 13. Wave Model

The current corrective sequence is pre-build only.

The upgraded implementation should be planned as a single complete build wave unless CS2 approves smaller implementation waves.

If implementation is split into subwaves, the architecture must be extended before subwave authorization to define:

- each subwave's included routes/components/content;
- excluded items;
- wiring within and across subwaves;
- isolated QA for the subwave;
- cumulative regression QA for all prior work.

No partial subwave may be handed over as green unless it is fully wired and testable within its declared scope.

---

## 14. Frontend Scaffolding and UI State

Frontend scaffold baseline:

- Astro static pages/components;
- route pages under `src/pages`;
- shared layout shell under `src/layouts`;
- reusable sections/cards/CTAs under `src/components`;
- structured content under `src/content` or `src/data`;
- static assets under `public`.

UI state ownership:

| UI State | Owner | Notes |
|----------|-------|-------|
| Mobile menu open/closed | Header/nav component | Must be keyboard/touch accessible. |
| Pending module state | Platform module data/component | Driven by env/base URL availability and module status. |
| Current page nav state | Layout/router | Should be visible or semantically clear. |

There is no UI-to-API, auth token, or credential propagation path in v1.

---

## 15. Infrastructure Provisioning and Rollback

| Step | Owner | Evidence |
|------|-------|----------|
| Vercel project connected to repo | Johan / owner | Vercel project page or deployment record. |
| Production branch `main` confirmed | Johan / owner | Vercel project setting or deployment source. |
| Env values provisioned | Johan / owner | Vercel env screen/manual confirmation; no secrets. |
| Build command/output verified | Builder/Foreman | Vercel build log. |
| Preview verified | Builder/Foreman | Preview URL and browser evidence. |
| Production deploy verified | Builder/Foreman after merge | Production URL and browser evidence. |
| Rollback | Johan/Foreman | Redeploy previous green Vercel deployment or revert commit. |

---

## 16. Minimum Deployment Evidence Package

Stage 12 cannot close green unless it records:

- Vercel deployment URL;
- commit SHA;
- build log with validation pass;
- route checks for every required page;
- mobile navigation evidence;
- services/platform/training browser evidence;
- contact handoff evidence;
- metadata evidence;
- APGI Hub link or pending-state evidence;
- Thinkific link evidence;
- Privacy/Terms evidence;
- confirmation that no database, auth, Supabase, CRM, or form backend exists;
- unresolved content/legal/asset conditions and CS2 disposition.

There is no persistence evidence because v1 has no persistence by design.

---

## 17. QA Catalog Alignment Seed

Stage 6 must formalize these QA components before implementation planning:

| QA Seed | Architecture Reference | Intended QA Area |
|---------|------------------------|------------------|
| APW-QA-ARCH-001 | Route architecture | Required public pages exist. |
| APW-QA-ARCH-002 | Navigation architecture | Header/footer/mobile route wiring. |
| APW-QA-ARCH-003 | Services architecture | Service content depth and CTAs. |
| APW-QA-ARCH-004 | Platform architecture | Module rendering, link/pending states. |
| APW-QA-ARCH-005 | Training architecture | Course/offering cards and Thinkific handoff. |
| APW-QA-ARCH-006 | Design-system architecture | Visual richness, cards, section treatments, CTAs. |
| APW-QA-ARCH-007 | Accessibility/responsive architecture | Keyboard, mobile, reduced motion, responsive layout. |
| APW-QA-ARCH-008 | Metadata architecture | Page metadata and social readiness. |
| APW-QA-ARCH-009 | Deployment architecture | Vercel build/deployment evidence. |
| APW-QA-ARCH-010 | Public-boundary architecture | No backend/database/auth/CRM/form scope. |

Before Stage 8 Implementation Plan or any builder appointment, Stage 6/7 must verify QA IDs, definitions, RED tests, and non-overlap with prior APW QA items.

---

## 18. Review Outcome

Architecture v0.2 is now acceptable for Stage 6 QA-to-Red after this addendum and `.env.example` are included in PR #16.

Stage 6 must treat this checklist as source material and convert it into RED tests, not optional notes.
