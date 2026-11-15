# APW VPSHR Marketing — Requirements, Wiring, QA and Release Gates v0.1
**Status:** Proposed pre-build specification; no implementation authorised.
**Parent controls:** APW root intent, established FRS/TRS/Architecture and Foreman Operating Model.

## Proposed route/experience
- `/training` existing catalogue: preserve other offerings; introduce a prominent but truthful VPSHR listing.
- `/training/vpshr` proposed campaign landing route (confirm route naming/redirect impact before freezing): hero, applicability, curriculum highlights, delivery choices, level distinctions, learning outcomes, FAQ, trust/provenance, CTA and related courses.
- `/contact` or approved external destination: use existing handoff or a separately approved intake system. No new APW database, form capture or payment service by default.
- LinkedIn campaign links: canonical HTTPS landing URL with controlled UTM parameters; no secrets or personal identifiers in URLs.
- Course/LMS handoff: verified configured destination; fail visibly to 'Request information' when not yet available.

## Requirements and executable acceptance tests
| ID | Requirement | Acceptance / QA-to-Red contract |
|---|---|---|
| MKT-01 | Canonical training offer represented truthfully | Test Level 0/1 language against verified course catalogue; fail on unsupported 'live' or certificate claim |
| MKT-02 | Navigation and routing | Desktop/mobile nav and `/training` → VPSHR page succeed with no broken/internal 404 links |
| MKT-03 | Buyer-oriented content | Page includes audience, outcomes, mode, level, prerequisites, duration or 'to be confirmed', and appropriate CTA |
| MKT-04 | Launch status governs CTA | If enrolment readiness not proven, CTA is enquiry/interest; start/enrol CTA requires verified downstream path |
| MKT-05 | Handoff ownership | APW sends users to owned contact/LMS endpoint; no learner profile/auth/payment stored in APW |
| MKT-06 | Campaign attribution | LinkedIn UTM link resolves to intended page and never contains PII |
| MKT-07 | Accessibility | Keyboard navigation, visible focus, labels, headings, contrast, alt text and reduced-motion behaviour reviewed |
| MKT-08 | SEO/preview | Unique title/description, canonical URL, Open Graph image/content, sitemap and no duplicate conflicting course schema |
| MKT-09 | Security/privacy | External links validated, no secrets in client output, privacy/consent review of tracking and contact method |
| MKT-10 | Existing website regressions | Homepage, maturity assessment, platform, services, training, contact and legal routes preserved |
| MKT-11 | Editorial approval | Published copy version and course-owner/CS2 approval recorded; unapproved draft not discoverable |
| MKT-12 | Operational rollback | Known last-good deploy, redirect and link validation documented; no custom-domain cutover in this wave |

## Wiring contracts and failure paths
1. **LinkedIn → APW:** reviewed post contains approved canonical URL → APW responds successfully → campaign attribution recorded only if allowed by consent configuration. On invalid campaign URL, existing training landing page remains independently navigable.
2. **APW → Training/LMS:** CTA chosen by verified course status; destination must be checked in production-like environment. If broken, hold enrolment CTA and use contact fallback.
3. **CCC → LinkedIn:** CCC holds approvals and copy, APW holds public landing content; posting remains manual/export until LinkedIn API access, app permissions, token storage, audit and rate-limit/error policies are independently approved.
4. **APW → contact:** clearly disclosed recipient and privacy basis; avoid collecting any learner or special-category data in a new APW datastore.
5. **Level mismatch:** if APW catalogue says Level 1 available but Training says coming soon, block sale/enrol marketing until course owner issues signed status disposition.

## QA-to-Red sequence
Before new implementation: map each requirement to a failing test (or a documented baseline pass for capabilities already present). Distinguish intentional feature gaps from test harness failure. Preserve existing website smoke tests. Execute build, accessibility, SEO, link integrity, responsive and handoff tests; capture commands, SHA, environment, expected/actual results. Zero regression and zero hidden test debt.

## Launch dependencies
- Course owner verifies Level 0 vs Level 1, detailed syllabus, language, learning outcomes, assessment/certificate terms, delivery/pricing, current enrolment URL and readiness.
- CS2 approves APGI positioning and public marketing claims.
- APW product owner verifies route, CTA and existing maturity-journey preservation.
- CCC owner verifies campaign approval/status and manual vs API publishing capability.
- Legal/privacy owner validates public policy and tracking disclosures.
- Release owner checks Vercel preview, production paths and domain authority.

## Explicit GO/NO-GO
GO only with course status evidence, approved copy, QA-to-Red/build-to-green evidence, successful downstream CTA tests, QP/ECAP, independent IAA PASS, CI/status inspection and explicit CS2 approval. Otherwise NO-GO; enquiry-only informational content may be separately approved without implying enrolment is open.
