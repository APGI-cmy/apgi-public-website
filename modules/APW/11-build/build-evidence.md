# APW Stage 12 - Build Evidence

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 12 - Build Evidence |
| Folder | `modules/APW/11-build` |
| Version | v0.1 |
| Status | Draft PR - build evidence pending Vercel deployment verification |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-01 |
| Upstream Stage | `modules/APW/10-builder-appointment/builder-appointment.md` |
| Branch | `foreman/apw-stage12-build-evidence` |
| Vercel Project URL | `https://vercel.com/rassie-ras-projects/apgi-public-website` |
| Vercel Project ID | `prj_Ms3RG1z7HFlWjG8NXISYqPrXrluW` |

---

## 1. Purpose

This Stage 12 artifact records build evidence for the APW public website implementation.

The implementation is a static-first public website with no Supabase, no database, no authentication, no CRM capture, no contact-form backend, and no private secret requirement.

---

## 2. Implementation Summary

| Item | Evidence |
|------|----------|
| Runtime posture | Static HTML/CSS/JS generated to `dist/`. |
| Build command | `npm run build` |
| Vercel config | `vercel.json` uses `npm run build` and `dist` output. |
| Dependency posture | No runtime or build dependencies declared. Node standard library only. |
| Root directory | Repository root. |
| Public-only boundary | No auth, database, backend API, Supabase client, or form processing added. |
| Legal routes | `privacy.html` and `terms.html` generated as governed placeholders. |
| APGI Hub config | `ISMS_PUBLIC_BASE_URL` or equivalent public value composes hub links when configured; pending state is visible if unset. |

---

## 3. Changed Runtime Files

| File | Purpose |
|------|---------|
| `package.json` | Static build and validation scripts. |
| `vercel.json` | Vercel build/output configuration. |
| `src/site-data.mjs` | Structured public content, navigation, contact, training links, and hub tile model. |
| `scripts/build.mjs` | Generates `dist/index.html`, `dist/privacy.html`, and `dist/terms.html`. |
| `scripts/validate.mjs` | Validates generated output and forbidden backend/private-scope tokens. |
| `public/styles.css` | Responsive, accessible, text-first public styling. |
| `public/app.js` | Small mobile menu behavior with keyboard escape handling. |

---

## 4. Command Evidence Plan

The branch is designed to run:

```text
npm run build
```

This command runs:

```text
node scripts/build.mjs && node scripts/validate.mjs
```

Expected result:

```text
APW static site built to dist/.
APW static output validation passed.
```

Because the GitHub connector cannot execute repository commands directly in Vercel, final command output must be verified by Vercel build logs or a local checkout before final merge/launch disposition.

---

## 5. D1-D12 Evidence Matrix

| Domain | Evidence Status | Evidence |
|--------|-----------------|----------|
| D1 - Homepage render and section flow | Implemented / pending deployed visual verification | `scripts/build.mjs` generates `/` with hero, about, services, training, hub, impact, team, contact, and footer sections. |
| D2 - Navigation, anchors, and mobile menu | Implemented / pending browser verification | Primary nav anchors target visible sections; `public/app.js` provides mobile menu open/close and Escape handling. |
| D3 - Training handoffs | Implemented / pending link verification | Structured data includes approved VPSHR and Thinkific public URLs. |
| D4 - APGI Hub link composition | Implemented with condition | Hub links compose from `ISMS_PUBLIC_BASE_URL` plus frozen route slugs when configured; if unset, UI shows pending state instead of broken external destinations. |
| D5 - Contact handoffs | Implemented / pending browser verification | Generated page includes `mailto:info@apginc.ca`, `tel:+14166429974`, readable email and phone text, and no form. |
| D6 - SEO and social metadata | Implemented / pending rendered metadata verification | Generated pages include title, description, canonical, Open Graph title/description/type/url, and theme color. |
| D7 - Accessibility and keyboard basics | Implemented / pending manual verification | Semantic sections, skip link, headings, nav, links/buttons, focus-visible styling, Escape menu handling, and reduced-motion CSS are included. |
| D8 - Responsive behavior | Implemented / pending viewport verification | CSS uses fluid sizing, responsive grids, mobile menu behavior, and overflow-conscious layout. |
| D9 - Placeholder honesty and asset governance | Implemented with launch conditions | Legal pages and team/profile content are explicit governed placeholders; no third-party imagery/client marks/testimonials are included. |
| D10 - Public-only boundary / no unapproved backend | Implemented / pending source review confirmation | No Supabase, auth, database, API route, CRM, or form processing added. Validation checks for forbidden backend/private-scope tokens. |
| D11 - Fully functional delivery gate | Partially evidenced / pending Vercel and browser verification | Static build structure and validation exist; final route, link, metadata, responsive, keyboard, and deployment evidence must be confirmed from preview/deployment. |
| D12 - Governance | Implemented | Stage 12 scope, evidence file, and PR process preserve Foreman governance and record remaining conditions. |

---

## 6. Vercel Evidence

Johan created the Vercel project:

```text
https://vercel.com/rassie-ras-projects/apgi-public-website
```

Project ID:

```text
prj_Ms3RG1z7HFlWjG8NXISYqPrXrluW
```

Vercel evidence still required after PR build/deployment:

| Evidence Item | Status |
|---------------|--------|
| Project connected to `APGI-cmy/apgi-public-website` | To be verified in Vercel UI. |
| Root directory is repository root | To be verified in Vercel UI. |
| Production branch is `main` | Johan confirmed where to check; final setting to be verified. |
| Build command uses `npm run build` | Configured in `vercel.json`; verify in build log. |
| Output directory is `dist` | Configured in `vercel.json`; verify in build log. |
| Preview deployment URL renders `/` | Pending deployment. |
| `/privacy.html` renders | Pending deployment. |
| `/terms.html` renders | Pending deployment. |
| `ISMS_PUBLIC_BASE_URL` configured or pending state accepted | Pending Johan/CS2 value or explicit condition. |

---

## 7. Known Conditions

| ID | Condition | Disposition |
|----|-----------|-------------|
| COND-001 | `ISMS_PUBLIC_BASE_URL` is not yet known. | Site renders Hub cards with pending base URL state; final Hub external link evidence requires the public ISMS/APGI Hub host. |
| COND-002 | Legal/privacy/terms copy is placeholder. | Legal routes exist and are transparent governed placeholders pending final copy approval. |
| COND-003 | Final team/profile content and imagery are not supplied. | Text-first placeholders are used. |
| COND-004 | Vercel deployment evidence is pending. | Must be verified from PR preview or main deployment before final launch disposition. |
| COND-005 | Local command execution was not available through the GitHub connector. | Vercel build logs or a local checkout must provide final command output. |

---

## 8. Handover Summary

The branch provides a deployable static APW public website and evidence framework.

Before final launch disposition, verify Vercel preview/deployment, build logs, route rendering, responsive behavior, keyboard navigation, metadata, and external links.

No Supabase project is required or authorized for APW v1.
