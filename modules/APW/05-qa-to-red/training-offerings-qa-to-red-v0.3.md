# APW QA-to-Red Addendum - Training Offerings v0.3

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Addendum | Training Offerings Expansion |
| Version | v0.3 |
| Status | RED until implementation and Vercel validation pass |
| Authority | CS2: Johan Ras |

---

## RED Test Catalog

| Test ID | Layer | RED Condition | Acceptance Criteria |
|---|---|---|---|
| APW-QA-TRN-031 | Training catalogue | Classroom/contact offerings are missing or collapsed into one generic card. | `/training` renders the full classroom/contact catalogue from the APGI course source. |
| APW-QA-TRN-032 | Training modes | Classroom delivery and e-learning are not visually separated. | Page has distinct classroom/contact and e-learning/platform sections. |
| APW-QA-TRN-033 | VPSHR | VPSHR is presented as the only training business or levels are unclear. | VPSHR Level 1, Level 2, and Level 3 classroom offerings are visible and Level 1 e-learning availability is noted. |
| APW-QA-TRN-034 | Diamond / DMP | Diamond/process training is absent or not explained. | DMP classroom/contact offering and Diamond Control e-learning offering are both represented where applicable. |
| APW-QA-TRN-035 | Tiger Kidnapping | Tiger Kidnapping e-learning surface is absent. | Tiger Kidnapping Awareness Programme and risk-assessment offering are visible in e-learning section. |
| APW-QA-TRN-036 | CTA behavior | Classroom courses imply unavailable online enrolment. | Classroom courses use contact/group delivery CTA; e-learning uses public Thinkific storefront CTA. |
| APW-QA-TRN-037 | Public boundary | Page exposes LMS admin, payment, auth, private API, or learner account behavior. | No backend, admin, auth, CRM, private API, or payment implementation is added. |
| APW-QA-TRN-038 | Responsive layout | Expanded catalogue overflows or is unusable on mobile. | Training grids remain readable and tappable on mobile/tablet/desktop. |
| APW-QA-TRN-039 | Build evidence | Implementation is merged without build/deploy evidence. | Vercel/build status is green before merge disposition. |

---

## Disposition

This addendum is RED until the training page is updated and Vercel validation passes.
