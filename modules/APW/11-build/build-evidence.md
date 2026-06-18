# APW Corrective Stage 12 - Build Evidence v0.4 Intent Alignment

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 12 - Build Evidence |
| Addendum | Website Intent Build Alignment |
| Version | v0.4 |
| Status | Drafted for PR validation |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage12-intent-build-v04` |
| Upstream Baseline | PR #26 root intent canon and PR #27 Stage 1-11 prebuild intent alignment |
| Root Intent Anchor | `APW_WEBSITE_INTENT.md` |

---

## 1. Build Summary

This update turns the new Stage 12 intent QA-to-Red checks green by aligning the public Astro implementation with the APW root website intent canon.

The build remains static-first and public-only. It does not add backend assessment logic, Supabase persistence, CRM capture, authentication, LMS administration, private ISMS runtime, or new secrets.

---

## 2. Implementation Inventory

| Area | Evidence |
|---|---|
| QA-to-Red | `modules/APW/11-build/stage12-v04-intent-qa-to-red.md` |
| Structured content | `src/data/site.ts` adds loss framing, maturity journey, free assessment, ecosystem roles, real-time awareness, hover/click/ask/train and case-study model content. |
| Homepage | `src/pages/index.astro` now leads with loss prevention, maturity journey, free assessment CTA, ecosystem role preview and learning pattern. |
| Platform route | `src/pages/[slug].astro` now renders a journey-led APGI Hub page rather than only a module registry. |
| Build evidence | `modules/APW/11-build/build-evidence.md` updated for v0.4. |
| Tracker | `modules/APW/BUILD_PROGRESS_TRACKER.md` updated for the Stage 12 v0.4 wave. |

---

## 3. Intent QA-to-Green Mapping

| QA ID | Stage 12 v0.4 disposition |
|---|---|
| APW-QA-INTENT-001 | Build evidence now cites `APW_WEBSITE_INTENT.md` as the root intent anchor. |
| APW-QA-INTENT-002 | Homepage hero and service/platform content present APGI as a holistic loss-prevention and maturity-improvement partner. |
| APW-QA-INTENT-003 | Homepage now distinguishes malicious and non-malicious loss with explanatory cards. |
| APW-QA-INTENT-004 | Homepage and Platform route now render the maturity journey from assessment through resilient operations. |
| APW-QA-INTENT-005 | Homepage and Platform route now include a free maturity assessment CTA. If `ISMS_PUBLIC_BASE_URL` is configured, the CTA links to the MMM/APGI Hub path; otherwise it uses a governed contact-assisted pending handoff. |
| APW-QA-INTENT-006 | Platform route now opens with maturity journey and roadmap context before ecosystem module cards. |
| APW-QA-INTENT-007 | `hubModules` now carries role and journey text for MMM, Risk Management, PIT, Incident & Intelligence, Data Analytics/Remote Assurance, Systems Integration/RADAM and Skills Development. |
| APW-QA-INTENT-008 | Homepage and Platform route now introduce real-time situational awareness: work, people, risk, controls, evidence, exceptions and escalation. |
| APW-QA-INTENT-009 | Hover/click/ask/train is represented as accessible public content cards, not hover-only interaction. |
| APW-QA-INTENT-010 | Platform route includes an anonymised case-study model and permission boundary. |
| APW-QA-BOUNDARY-001 | Public-only boundary preserved; no backend, database, CRM, auth, LMS admin or private runtime was added. |

---

## 4. Current Route Evidence

### Homepage `/`

The homepage now introduces:

- APGI loss prevention through maturity;
- malicious and non-malicious loss;
- maturity journey steps;
- free maturity assessment CTA;
- APGI Hub ecosystem role preview;
- real-time situational awareness;
- hover/click/ask/train learning model;
- training and contact handoffs.

### Platform `/platform`

The Platform page now introduces:

- APGI Hub as one maturity journey;
- assessment and roadmap flow;
- free maturity assessment handoff;
- ecosystem module roles;
- real-time situational awareness;
- hover/click/ask/train;
- anonymised case-study model.

### Training `/training`

The Training page retains the v0.3 catalogue and now explicitly frames training as capability-building within the maturity journey.

---

## 5. Known Conditions

- Final ISMS/APGI Hub public assessment URL remains environment-driven through `ISMS_PUBLIC_BASE_URL`.
- If the Hub base URL is unset, the assessment CTA uses a governed contact-assisted pending state.
- Case-study content is a public model only. No client or project names are included.
- Final copy/design polish may continue in later waves after CS2 review.

---

## 6. Validation Status

Validation is pending PR creation and Vercel status inspection.
