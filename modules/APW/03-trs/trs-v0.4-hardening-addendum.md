# APW TRS v0.4 Hardening Addendum

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 4 - Technical Requirements Specification |
| Addendum | TRS v0.4 Hardening |
| Version | v0.4A |
| Status | Drafted for focused review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |

---

## 1. Purpose

This addendum hardens TRS v0.4 so Architecture v0.4 does not have to infer route model, data model, interaction pattern, accessibility behavior, runtime boundary, SEO metadata, or testability expectations.

The requirements below supplement `trs-v0.4.md` and must be treated as binding technical requirements for APW v0.4.

---

## 2. Route Model Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-053 | Architecture v0.4 shall treat the v0.4 offering model as a multi-route public website by default. |
| APW-TR-V04-054 | First-class routes shall be planned for `/security-philosophy`, `/maturity-roadmap`, `/consulting`, `/remote-assurance`, `/platform` or `/digital-tools`, `/case-studies`, `/training`, and `/contact`. |
| APW-TR-V04-055 | Homepage sections may summarise these offerings, but shall not replace first-class routes unless CS2 explicitly approves route omission. |
| APW-TR-V04-056 | Each first-class route shall have a route registry entry containing slug, nav label, page title, page description, summary, primary CTA, secondary CTA, and public status. |
| APW-TR-V04-057 | Route registry entries shall be the source of truth for homepage journey cards, navigation, and route metadata where practical. |

---

## 3. Structured Data Schema Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-058 | All card and route records shall use stable IDs suitable for QA selectors, analytics-safe references, and traceability. |
| APW-TR-V04-059 | Required string fields shall be non-empty and public-safe before the build can be considered green. |
| APW-TR-V04-060 | CTA fields shall use a structured object with label, href, type, and isExternal fields. |
| APW-TR-V04-061 | CTA type values shall be limited to `internal`, `external`, `contact`, `training`, `thinkific`, `maturion-placeholder`, or `coming-soon`. |
| APW-TR-V04-062 | Public status values shall be limited to `live`, `placeholder`, `contact-only`, `coming-soon`, or `private`. |
| APW-TR-V04-063 | Records with `private` status shall not render private URLs or private implementation detail. |
| APW-TR-V04-064 | Records with `coming-soon` or `placeholder` status shall render honest placeholder copy and at least one safe next step. |
| APW-TR-V04-065 | External links shall be explicitly marked and shall not point to administrative or private app routes. |

---

## 4. Ask Maturion Fallback Technical Pattern

| ID | Requirement |
|---|---|
| APW-TR-V04-066 | Ask Maturion fallback shall be implemented as one reusable technical pattern or component. |
| APW-TR-V04-067 | Ask Maturion fallback shall support only these modes: `comingSoon`, `contact`, `training`, and `approvedExternal`. |
| APW-TR-V04-068 | Ask Maturion fallback label and body copy shall come from one central content source to prevent copy drift. |
| APW-TR-V04-069 | Ask Maturion fallback shall not trigger runtime calls to private services. |
| APW-TR-V04-070 | Ask Maturion fallback shall clearly indicate when live public AI chat is not yet available. |
| APW-TR-V04-071 | If an approved public Maturion/MMM destination is used, the destination shall be explicitly marked as public-approved. |

---

## 5. Dialog, Drawer, and Detail Accessibility Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-072 | If modal or drawer detail surfaces are used, focus shall move into the detail surface when opened. |
| APW-TR-V04-073 | If modal or drawer detail surfaces are used, focus shall return to the triggering control when closed. |
| APW-TR-V04-074 | If modal dialogs are used, Escape-key close behavior shall be supported unless a later accessibility review documents a safer alternative. |
| APW-TR-V04-075 | Detail surfaces shall include a visible close control where the surface overlays or interrupts page flow. |
| APW-TR-V04-076 | Modal or drawer surfaces shall have an accessible name or heading. |
| APW-TR-V04-077 | Users shall not be trapped in a modal, drawer, or detail panel without a clear exit. |
| APW-TR-V04-078 | Critical content shall not be available only through hover behavior. |

---

## 6. Static Runtime and Performance Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-079 | APW v0.4 shall remain static-first and shall not require runtime API calls for public content. |
| APW-TR-V04-080 | APW v0.4 shall not perform client-side fetches to private services, private APIs, Supabase, DMC, AIMC, or private Maturion endpoints. |
| APW-TR-V04-081 | Interactive behavior shall use minimal client-side JavaScript or framework behavior appropriate to the existing Astro baseline. |
| APW-TR-V04-082 | Basic card, route, CTA, and placeholder rendering shall not require adding a heavy client-side application layer. |
| APW-TR-V04-083 | Any new dependency for interaction behavior shall be justified in Architecture v0.4. |

---

## 7. SEO, Metadata, and Route Registry Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-084 | Each first-class route shall define page title, meta description, nav label, route slug, page summary, and primary CTA. |
| APW-TR-V04-085 | Route metadata shall be consistent with navigation labels and homepage journey cards. |
| APW-TR-V04-086 | If sitemap or robots files reference generated routes, they shall be consistent with implemented route outputs. |
| APW-TR-V04-087 | No sitemap, robots, metadata, or CTA shall advertise a route or file that does not exist. |
| APW-TR-V04-088 | External CTAs, including Thinkific and approved Maturion/MMM links, shall be clearly distinguishable from internal routes. |

---

## 8. Testability and QA Traceability Hardening

| ID | Requirement |
|---|---|
| APW-TR-V04-089 | Required routes, card families, CTAs, and Ask Maturion fallback records shall be data-driven or deterministically identifiable for QA. |
| APW-TR-V04-090 | Training recommendations shall be traceable to approved training records, approved Thinkific paths, or approved contact paths. |
| APW-TR-V04-091 | Case-study records shall include a publicSafetyNote field or equivalent public-safe disclaimer mechanism. |
| APW-TR-V04-092 | Public/private status shall be testable for tool cards and Maturion-related CTAs. |
| APW-TR-V04-093 | QA-to-Red v0.4 shall be able to test card existence, detail behavior, CTA destination, Ask Maturion fallback consistency, public-safety boundaries, mobile layout, keyboard access, and metadata consistency. |

---

## 9. Additional Negative Technical Requirements

APW v0.4 shall not:

- publicly embed private/admin app routes;
- expose credentials, secrets, tokens, or environment values;
- render private bucket paths, private table names, or private record identifiers in visitor-facing copy;
- use public visitor copy that implies direct access to DMC, AIMC, Supabase, or private Maturion knowledge;
- add a public AI chat surface without a later approved integration wave.

---

## 10. Downstream Gate

This addendum hardens TRS v0.4 only.

Next required stage after focused TRS review: Architecture v0.4.

This artifact does not authorize implementation.
