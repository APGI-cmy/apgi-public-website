# APW Corrective Stage 12 - Build Evidence v0.2

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 12 - Build Evidence |
| Folder | `modules/APW/11-build` |
| Version | v0.2 |
| Status | Drafted for PR validation |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage12-build-evidence-v02` |
| Upstream Stage | Stage 11 Builder Appointment v0.2, merged in PR #23 |
| Upstream Merge Commit | `5519c0c0ce981c39df868369ff4b69d793233bbe` |

---

## 1. Build Summary

Stage 12 creates the first corrected Astro implementation baseline for the APGI Public Website.

This is no longer a scaffold-only governance package. The branch adds a static Astro website with route coverage, shared layout, public-only configuration, visual system, and evidence mapping.

---

## 2. Implementation Inventory

| Area | Evidence |
|---|---|
| Framework | `package.json` defines Astro with Node 20+ and `npm run build`. |
| Architecture | `astro.config.mjs` uses static output and public canonical site config. |
| Public env | `.env.example` documents only `APW_PUBLIC_SITE_URL` and `ISMS_PUBLIC_BASE_URL`. |
| Content registry | `src/data/site.ts` defines routes, services, APGI Hub modules, training cards, contact handoffs and legal placeholders. |
| Shared shell | `src/layouts/BaseLayout.astro` provides header, desktop nav, mobile nav, metadata, footer and contact handoffs. |
| Homepage | `src/pages/index.astro` provides hero, trust band, services preview, platform preview, training preview and contact CTA. |
| Required routes | `src/pages/[slug].astro` generates `/services`, `/platform`, `/training`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms`. |
| Visual system | `public/styles/global.css` defines palette, layout, cards, CTAs, responsive behavior and focus styles. |
| Robots | `public/robots.txt` is present. |

---

## 3. Route Evidence

| Route | Status | Evidence |
|---|---|---|
| `/` | Implemented | Dedicated homepage file. |
| `/services` | Implemented | Generated route with service depth cards. |
| `/platform` | Implemented | Generated route with seven APGI Hub modules and pending/link states. |
| `/training` | Implemented | Generated route with Thinkific handoff and offering cards. |
| `/about` | Implemented | Generated route with APGI positioning content. |
| `/team` | Implemented | Generated route with governed public-profile placeholders. |
| `/contact` | Implemented | Generated route with email, phone, address and no backend form. |
| `/privacy` | Implemented | Generated legal placeholder route. |
| `/terms` | Implemented | Generated legal placeholder route. |

---

## 4. QA-to-Green Mapping

| QA IDs | Stage 12 disposition |
|---|---|
| APW-QA-001 to 002 | Required multi-page routes implemented; one-page scaffold is no longer the delivery model. |
| APW-QA-003 to 005 | Shared header/footer, CTA and pending-state patterns implemented. |
| APW-QA-006 to 014 | Homepage, services, platform, training, contact and legal route content implemented. |
| APW-QA-015 to 020 | Visual system, shared components, no hover-only requirement, accessibility basics, responsive CSS and metadata implemented. |
| APW-QA-021 to 023 | Public env example, static data model and safe external handoffs implemented. |
| APW-QA-024, 027, 028 | Build/deploy evidence pending PR/Vercel status after PR creation. |
| APW-QA-025 to 026 | QA seed coverage and primary journeys are represented in routes and nav; browser walk evidence pending preview URL. |
| APW-QA-029 | Public-only boundary preserved: no Supabase, database, auth, CRM, form backend or private API implementation added. |
| APW-QA-030 | Governance gates complete through PR #23 before implementation started. |

---

## 5. Validation Status

Local execution was not performed through the GitHub connector. Validation command is defined as `npm run validate`, which runs `astro build`.

PR/Vercel status must be inspected after PR creation and recorded before merge disposition.

---

## 6. Known Conditions and Exceptions

- Final legal copy remains governed placeholder content.
- Final team biography content remains governed placeholder content.
- APGI Hub links remain pending if `ISMS_PUBLIC_BASE_URL` is unset.
- Vercel preview URL and build status must be captured from PR checks.
- Browser screenshots are not attached in this text artifact; preview URL walk evidence should be added during review if required.

---

## 7. Stage 12 Disposition

Stage 12 implementation baseline is drafted for PR validation.

Merge disposition must remain conditional until PR build/deploy checks are inspected.
