# APW Corrective Stage 11 - Builder Appointment v0.2

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 11 - Builder Appointment |
| Folder | `modules/APW/10-builder-appointment` |
| Version | v0.2 |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage11-builder-appointment-v02` |
| Upstream Merge Commit | `e1168b8fe47f0db40429382067dffb7a6dfdebe2` |
| Upstream Stage | Stage 10 IAA Pre-Brief v0.2, merged in PR #22 |
| Next Stage | Stage 12 Build Evidence |

---

## 1. Purpose

This artifact appoints the future implementation builder for Corrective Stage 12 Build Evidence.

It binds that builder to the corrected APW source package, Stage 8 Implementation Plan, Stage 9 Builder Checklist, Stage 6 QA-to-Red catalog, and Stage 12 evidence obligations.

This Stage 11 artifact does not build website pages, does not alter runtime source, does not deploy, and does not treat the earlier scaffold as a finished APW website.

---

## 2. Appointment

| Field | Value |
|---|---|
| Appointed Role | APW Stage 12 Implementation Builder |
| Appointment Authority | CS2 / Johan Ras |
| Execution Vehicle | Future Stage 12 implementation wave / PR |
| Appointment Scope | Build and evidence the corrected APW public website under Stage 12 |
| Appointment Condition | Activation only after Stage 11 review and merge, unless CS2 explicitly overrides |

The appointed builder must produce Stage 12 build evidence, not just code changes.

---

## 3. Required Source Acknowledgement

Before beginning Stage 12 work, the builder must acknowledge the source package listed in `builder-source-acknowledgement-v0.2.md`.

Minimum binding sources include:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- Stage 9 Builder Checklist artifacts under `modules/APW/08-builder-checklist/`
- Stage 8 Implementation Plan artifacts under `modules/APW/07-implementation-plan/`
- Stage 7 PBFAG artifacts under `modules/APW/06-pbfag/`
- Stage 6 QA-to-Red artifacts under `modules/APW/05-qa-to-red/`
- Stage 5 Architecture artifacts under `modules/APW/04-architecture/`
- Stage 4 TRS and Stage 3 FRS artifacts

The builder must stop if required source files are missing, contradictory, stale, or materially incomplete.

---

## 4. Checklist and QA Binding

The builder is bound to:

- Stage 9 Builder Checklist tasks and evidence gates;
- Stage 8 implementation sequencing and work-package mapping;
- Stage 6 QA IDs `APW-QA-001` through `APW-QA-030`;
- Stage 12 evidence capture requirements.

No Stage 6 QA item may be marked green by assumption alone.

---

## 5. Stage 12 Evidence Obligations

Stage 12 must later prove the actual APW website, including:

- required public routes;
- desktop and mobile navigation;
- footer and CTA links;
- homepage, services, platform / APGI Hub, training, about, team, contact, privacy, and terms coverage;
- Thinkific and contact handoffs;
- premium design system evidence;
- accessibility and responsive checks;
- metadata and social readiness;
- environment example and public-only configuration;
- Vercel deployment evidence;
- build and validation output;
- QA-to-green mapping back to Stage 6 QA IDs.

Current deployability, scaffold output, or a 404 page is not completion evidence.

---

## 6. Stop and Escalation Rules

The builder must stop and escalate to Foreman / CS2 when:

- required source artifacts conflict or cannot be found;
- Stage 12 work would require unapproved backend, database, authentication, CRM, LMS administration, private API, or contact-form processing scope;
- evidence cannot be produced for a claimed complete item;
- a route, link, content, legal, training, Hub, or deployment decision is missing;
- Vercel or environment setup blocks required evidence;
- CI/status output is absent and someone attempts to treat it as passing;
- PR #11 scaffold behavior is being treated as the APW product baseline.

---

## 7. Known Conditions

- PR #11 remains closed and retained only as scaffold reference.
- Stage 11 may authorize movement into Stage 12 after review and merge.
- Stage 11 does not itself perform implementation.
- Stage 12 must prove the fully functional, premium, multi-page APGI public website.
- Public configuration variables include `ISMS_PUBLIC_BASE_URL` and `APW_PUBLIC_SITE_URL`; these are public config values, not secrets.

---

## 8. Handoff

The Stage 12 builder must begin with:

1. source acknowledgement;
2. branch and baseline confirmation;
3. implementation plan and checklist mapping;
4. route and evidence plan;
5. build and validation command inventory;
6. deployment evidence plan;
7. QA-to-green matrix tied to `APW-QA-001` through `APW-QA-030`.

Detailed handoff requirements are recorded in `stage12-handoff-v0.2.md`.

---

## 9. Gate Statement

Corrective Stage 11 Builder Appointment v0.2 is a governance and appointment stage.

It conditionally appoints the APW Stage 12 Implementation Builder and binds that role to the corrected pre-build package.

After review and merge, the project may proceed to Corrective Stage 12 Build Evidence.
