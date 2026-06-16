# APW Architecture v0.4 Governance Canon Addendum

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture |
| Addendum | Governance Canon Hardening |
| Version | v0.4A |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |
| Architecture Under Review | `modules/APW/04-architecture/architecture-v0.4.md` |

---

## 1. Purpose

This addendum hardens Architecture v0.4 against the APW architecture completeness canon before QA-to-Red v0.4 is created.

Architecture v0.4 already defines the v0.4 route model, route registry, static content architecture, components, interaction model, public-safety rules, metadata, validation, and file-level direction.

This addendum closes the governance-canon areas that must be explicit before Stage 6.

This addendum does not authorize implementation.

---

## 2. Deployment Target

| Area | Decision |
|---|---|
| Hosting target | Vercel static hosting / CDN. |
| Production branch | `main`. |
| Build root | Repository root. |
| Build command | `npm run build`, unless a later governed build stage updates package scripts. |
| Validation command | `npm run validate` or equivalent validation invoked by build if present. |
| Build output | `dist/`. |
| Framework baseline | Astro static site. |
| Runtime mode | Static output; no APW application server. |

The deployment architecture remains public-only and static-first.

---

## 3. Runtime Entrypoint and Filesystem Baseline

Expected repository/runtime structure for the v0.4 build wave:

```text
package.json
astro.config.mjs or astro.config.*
.env.example
src/
  pages/
    index.astro
    [slug].astro or explicit route files
  layouts/
  components/
  data/ or content/
public/
  styles/
dist/                       # generated build output only
```

Expected v0.4 public routes:

```text
/
/security-philosophy
/maturity-roadmap
/consulting
/remote-assurance
/platform
/case-studies
/training
/contact
/privacy
/terms
```

`dist/` remains generated output and should not be treated as source-of-truth content.

---

## 4. Environment and Provider Constraints

| Variable | Required | Secret? | Purpose | Failure / Missing Behavior |
|---|---:|---:|---|---|
| `APW_PUBLIC_SITE_URL` | No for preview; yes for final production SEO evidence | No | Canonical public APW base URL. | Preview can proceed; final SEO evidence remains conditional until production value is confirmed. |
| `ISMS_PUBLIC_BASE_URL` | No | No | Optional approved public base URL for APGI/Maturion/ISMS destinations. | Tool/module CTAs render pending, contact-only, or approved placeholder states. |

No private secrets are required for APW v0.4.

Adding secrets, private APIs, private Supabase access, or backend credentials requires a separate governed scope change.

---

## 5. Data, Persistence, and Migration Architecture

| Area | Decision |
|---|---|
| Persistence | None. APW v0.4 uses static/build-time public content only. |
| Database | None. |
| Schema migrations | None. |
| Runtime content fetch | None for public content. |
| Rollback | Git revert or Vercel redeploy to prior successful static build. |
| Backup | Git history and Vercel deployment history. |
| Content approval | Pull request review / CS2-approved content only. |

DMC/AIMC/Supabase content may inform approved summaries, but APW shall not read those sources at runtime.

---

## 6. Non-Testable Configuration Boundaries

The following cannot be fully proven by repository code alone and must be verified or recorded during later QA/build evidence:

| Boundary | Required treatment |
|---|---|
| Vercel project settings | Verify during build evidence. |
| Production domain / DNS | Verify during final deployment evidence. |
| Vercel public env values | Verify against `.env.example` and deployment settings. |
| Thinkific storefront availability | Manual external-link verification. |
| Approved public Maturion/MMM destination | Only link if CS2 approves public destination. |
| Email/phone handler behavior | Browser/device-dependent; readable text must remain visible. |

---

## 7. External Dependency Contracts and Failure Modes

| Dependency | Contract | Failure / Missing State | Required behavior |
|---|---|---|---|
| Vercel | Builds and serves static APW output. | Build or preview unavailable. | Build evidence cannot close green. |
| Thinkific | Public storefront / public course destination where approved. | External site unavailable. | Link remains public and issue is recorded as external dependency state. |
| Optional public Maturion/MMM destination | Approved public URL only. | No approved public URL. | Render coming-soon, contact, training, or placeholder state. |
| Email handler | `mailto:` style direct handoff. | User has no local mail client. | Email remains readable as text. |
| Phone handler | `tel:` style direct handoff where used. | Device cannot place call. | Phone remains readable as text. |

No dependency may require private credentials or private authenticated visitor access.

---

## 8. Wiring and Interconnectivity Map

Canonical v0.4 wiring:

```text
Visitor
  -> Vercel static route
    -> Shared layout
      -> Route registry
        -> Header/footer navigation
        -> Homepage journey selector
        -> Route metadata
        -> Route-level CTAs
      -> Structured content records
        -> Offering cards
        -> Maturity cards
        -> Tool cards
        -> Case-study cards
        -> Training cards
      -> Reusable components
        -> DetailSurface
        -> AskMaturionFallback
        -> CtaLink
      -> Approved public external handoffs
        -> Thinkific
        -> mailto/tel
        -> approved public Maturion/MMM URL if available
```

There is no API layer, database layer, authenticated layer, private AI layer, queue, worker, or application server in APW v0.4.

---

## 9. End-to-End Functional Paths

| Path ID | Path | Expected result | Degraded / failure behavior |
|---|---|---|---|
| APW-E2E-V04-001 | Home -> Security Philosophy -> Maturity Roadmap -> Contact | Visitor understands APGI philosophy and can request help. | Missing route or CTA fails QA-to-Red. |
| APW-E2E-V04-002 | Home -> Maturity Roadmap -> Digital Tools / Platform -> Training | Visitor understands maturity model and supporting tools/training. | Missing links or cards fail QA-to-Red. |
| APW-E2E-V04-003 | Home -> Platform -> Tool card -> Ask Maturion fallback | Visitor sees public-safe tool explanation and governed Ask fallback. | Inconsistent or private Ask behavior fails QA-to-Red. |
| APW-E2E-V04-004 | Home -> Case Studies -> Related capability -> Contact | Visitor sees anonymized proof pattern and can contact APGI. | Private detail or missing safety note fails QA-to-Red. |
| APW-E2E-V04-005 | Training -> Thinkific or Contact | Visitor reaches public e-learning storefront or classroom/contact path. | External issue recorded; internal route remains correct. |
| APW-E2E-V04-006 | Mobile navigation -> every first-class route | Mobile user can reach all v0.4 routes. | Mobile navigation issue fails QA-to-Red. |
| APW-E2E-V04-007 | Footer -> Privacy / Terms | Visitor can reach legal routes. | Missing route fails QA-to-Red. |

---

## 10. Design-System Architecture

APW v0.4 must preserve the corrective design-quality intent.

The design architecture shall support:

- professional APGI visual identity;
- strong hero sections;
- clear editorial hierarchy;
- premium card systems;
- designed section rhythm;
- dark/light or high-contrast section variation;
- clear CTA hierarchy;
- readable long-form explanatory content;
- visually distinct placeholder and coming-soon states;
- reduced-motion-compatible interaction.

The build must not regress into a plain scaffold or generic low-effort card dump.

---

## 11. Responsive Architecture

APW v0.4 architecture shall support:

- mobile-first layout;
- tablet layout;
- desktop layout;
- designed mobile navigation;
- no critical horizontal overflow;
- tap-friendly card and CTA targets;
- readable card grids at mobile widths;
- non-hover access to summaries/details;
- modal/drawer behavior that remains usable on small screens.

---

## 12. Error Handling and Observability

| Error class | Handling | Evidence source |
|---|---|---|
| Build failure | Build fails; build cannot close green. | Vercel/build logs. |
| Validation failure | Validation fails; build cannot close green. | Validation output. |
| Missing route | QA-to-Red/build validation fails. | Route check output or browser evidence. |
| Missing required content | QA-to-Red/build validation fails. | Validation output or manual evidence. |
| Missing public Maturion/MMM URL | Render coming-soon/contact/training/placeholder state. | Browser evidence. |
| External Thinkific issue | Record as external dependency issue; APW link remains public and correct. | Manual link evidence. |
| Unknown production domain | Preview can proceed; final SEO evidence remains conditional. | Build evidence note. |
| 404 route | Static 404/fallback behavior should exist if framework supports it. | Browser evidence. |

No production application logs exist for APW v0.4 because the site remains static.

---

## 13. Performance and Scalability

| Area | Requirement |
|---|---|
| Delivery | Static/CDN-served pages through Vercel. |
| JavaScript | Minimal; no heavy client application layer for card/detail behavior. |
| Images/assets | Optimize before production launch where used. |
| Fonts | Avoid unnecessary font payloads. |
| Runtime API calls | None for APW public content. |
| Scalability | Static hosting handles normal public marketing traffic. |
| Main risks | Oversized media, unnecessary scripts, and inconsistent external link states. |

Stage 12 build evidence should record performance-oriented browser notes or automated output where available.

---

## 14. Security, Privacy, and Compliance Controls

| Control area | APW v0.4 decision |
|---|---|
| Authentication | None. Public website only. |
| Authorization | None. No private visitor actions. |
| PII collection | None through APW forms or backend. |
| Secrets | None required. `.env.example` public config only. |
| Private data | Not rendered or linked. |
| Public AI | Not included in v0.4. |
| Transport security | HTTPS via Vercel/custom domain. |
| Visitor input | No user-submitted APW data in v0.4. |
| Compliance posture | Public copy must avoid unapproved client claims, private detail, regulated claims, or confidential evidence. |

---

## 15. Wave-Based Build Model

APW v0.4 remains in prebuild until QA-to-Red is complete.

Required order:

1. App Description v0.4.
2. UX Workflow and Wiring v0.4.
3. FRS v0.4.
4. TRS v0.4.
5. Architecture v0.4.
6. QA-to-Red v0.4.
7. Build-to-green only after QA-to-Red exists.

If implementation is split into subwaves later, each subwave must have isolated and cumulative QA evidence.

---

## 16. QA Catalog Seed Map

Stage 6 QA-to-Red v0.4 shall include at minimum these QA domains:

| QA domain | Required coverage |
|---|---|
| Architecture conformance | Static boundary, route registry, content models, components, no private systems. |
| Route/render coverage | All required first-class routes. |
| Navigation and CTA wiring | Header/footer/homepage journey selector/route CTAs. |
| Offering content depth | Required page sections and explanatory content. |
| Maturity model coverage | Five-level ladder, domains/MPS/evidence explanation. |
| Platform/tool coverage | Tool cards, public/private statuses, placeholder states. |
| Ask Maturion fallback | Centralised copy, allowed modes, no private calls. |
| Training handoff | Thinkific, contact, classroom/e-learning split. |
| Case-study safety | Anonymized structure and publicSafetyNote. |
| Accessibility | Keyboard, focus, modal/drawer, hover equivalents, accessible names. |
| Responsive behavior | Mobile nav, card grids, tap targets, no overflow. |
| Metadata/SEO | Titles/descriptions, route registry, sitemap/robots consistency. |
| Public-only boundary | No auth, Supabase, backend forms, private data, live AI, or payments. |
| Deployment evidence | Vercel/build logs, route checks, screenshots/browser notes. |

---

## 17. Infrastructure Provisioning and Deployment Evidence

Architecture v0.4 assumes Vercel infrastructure already exists or will be verified during the build evidence stage.

Build evidence must include:

- deployment URL;
- commit SHA;
- build log status;
- route/browser checks;
- external link checks where practical;
- no-backend/no-private-system confirmation;
- sitemap/robots/metadata consistency note;
- mobile/responsive evidence;
- accessibility evidence at the level required by QA-to-Red.

---

## 18. Downstream Gate

This addendum closes Architecture v0.4 canon completeness for QA-to-Red drafting.

Next required stage: QA-to-Red v0.4.

This artifact does not authorize implementation.
