# APW Corrective Stage 12 - Build Evidence v0.3 Training Expansion

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 12 - Build Evidence |
| Addendum | Training Offerings Expansion |
| Version | v0.3 |
| Status | Drafted for PR validation |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-training-v02` |
| Upstream Baseline | Stage 12 Build Evidence v0.2 merged in PR #24 |
| Source Package | Uploaded APGI Training Course Catalogue and e-learning platform screenshot |

---

## 1. Build Summary

This update expands the APW Training page from a limited training surface into a substantive APGI training catalogue.

The implementation is still static-first and public-only. It adds structured training data and renders classroom/contact-delivery courses separately from e-learning/platform offerings.

---

## 2. Implementation Inventory

| Area | Evidence |
|---|---|
| App Description | `modules/APW/00-app-description/training-offerings-app-description-v0.3.md` |
| UX Workflow | `modules/APW/01-ux-workflow-wiring/training-offerings-ux-workflow-v0.3.md` |
| FRS | `modules/APW/02-frs/training-offerings-frs-v0.3.md` |
| TRS | `modules/APW/03-trs/training-offerings-trs-v0.3.md` |
| Architecture | `modules/APW/04-architecture/training-offerings-architecture-v0.3.md` |
| QA-to-Red | `modules/APW/05-qa-to-red/training-offerings-qa-to-red-v0.3.md` |
| Structured content | `src/data/site.ts` now includes classroom and e-learning training registries. |
| Training route | `src/pages/[slug].astro` renders expanded `/training` catalogue sections. |

---

## 3. Training Catalogue Evidence

### Classroom / Contact Delivery

The `/training` route now represents:

- Security Investigations.
- Security Supervisor.
- Diamond Mining and Processing - A Security Perspective.
- Security Surveillance and Control Monitoring.
- X-ray Scanning and Search Techniques.
- Security Risk Management Training Programme.
- Voluntary Principles on Security and Human Rights - Level 1.
- Voluntary Principles on Security and Human Rights - Level 2.
- Voluntary Principles on Security and Human Rights - Level 3.
- Security Project Management.
- Customer Relations in Security.

### E-Learning / Platform Surface

The `/training` route now represents:

- Voluntary Principles on Security and Human Rights Level 0.
- Voluntary Principles on Security and Human Rights Level 1 - Refresher 2025.
- Mastering Diamond Control Standards: A Comprehensive Guide.
- Tiger Kidnapping Awareness Programme.
- Tiger Kidnapping: Know the Threat / Assess Your Risk.

---

## 4. QA-to-Green Mapping

| QA IDs | Stage 12 v0.3 disposition |
|---|---|
| APW-QA-TRN-031 | Full classroom/contact catalogue is implemented in structured data and rendered on `/training`. |
| APW-QA-TRN-032 | Classroom/contact delivery and e-learning/platform sections are visually separated. |
| APW-QA-TRN-033 | VPSHR Level 1, Level 2, and Level 3 are visible; Level 1 e-learning pathway is noted. |
| APW-QA-TRN-034 | Diamond Mining and Processing classroom offering and Diamond Control e-learning offering are represented. |
| APW-QA-TRN-035 | Tiger Kidnapping e-learning offerings are represented. |
| APW-QA-TRN-036 | Classroom cards use contact CTA; e-learning cards use public Thinkific storefront CTA. |
| APW-QA-TRN-037 | Public-only boundary preserved; no backend, LMS admin, payment, learner accounts, or secrets added. |
| APW-QA-TRN-038 | Responsive card-grid pattern reused; browser validation pending preview review. |
| APW-QA-TRN-039 | Vercel/build status pending PR creation and check inspection. |

---

## 5. Known Conditions

- Course-specific Thinkific URLs were not provided, so e-learning cards link to the public Thinkific storefront.
- Classroom/contact offerings use APGI contact handoff, not self-enrolment.
- No new environment variables or secrets are required.
- Final copy/design polish can continue after this content baseline if needed.

---

## 6. Validation Status

Validation is pending PR creation and Vercel status inspection.
