# APW Stage 11 - Builder Appointment

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 11 - Builder Appointment |
| Folder | `modules/APW/10-builder-appointment` |
| Version | v0.1 |
| Status | Approved for Stage 12 Build Evidence progression |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Approval Method | AI-assisted CS2 proxy evaluation for Johan Ras |
| Approval Date | 2026-06-01 |
| Last Updated | 2026-06-01 |
| Upstream Stage | `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage11-builder-appointment-20260601.md` |
| Artifact Builder Appointment | `.agent-admin/builder-appointments/apw-stage11-builder-appointment-20260601-artifact-builder-contract.md` |
| IAA Review | `.agent-admin/assurance/iaa-review-apw-stage11-builder-appointment-20260601.md` |
| CS2 Proxy Sign-Off | `.agent-admin/signoffs/cs2-proxy-stage11-builder-appointment-signoff-20260601.md` |

---

## 1. Purpose

This Stage 11 artifact appoints the APW implementation builder for Stage 12 Build Evidence.

It binds the implementation builder to the approved pre-build source package, Stage 9 Builder Checklist, Stage 10 IAA Pre-Brief, public-only v1 scope, Vercel/environment readiness conditions, D1-D12 evidence obligations, and stop/escalation rules.

This artifact does not itself provide build evidence. Build evidence is Stage 12.

---

## 2. Appointed Implementation Builder

| Field | Value |
|-------|-------|
| Appointed Builder Role | APW Runtime Implementation Builder |
| Appointed By | Foreman under CS2 authority |
| Appointment Scope | Stage 12 Build Evidence for APW public website |
| Appointment Status | Approved for activation after this PR is merged |
| Governing Checklist | `modules/APW/08-builder-checklist/builder-checklist.md` |
| Assurance Brief | `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md` |

The appointed builder may begin Stage 12 build work only after this Stage 11 appointment is merged or explicitly waived by CS2 / Johan Ras.

---

## 3. Required Source Acknowledgement

Before beginning Stage 12 work, the implementation builder must load and acknowledge:

| Source | Required Builder Acknowledgement |
|--------|----------------------------------|
| `FOREMAN_OPERATING_MODEL.md` | Governance and gate rules understood. |
| `modules/APW/BUILD_PROGRESS_TRACKER.md` | Current stage state understood. |
| `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md` | IAA assurance questions and readiness criteria understood. |
| `modules/APW/08-builder-checklist/builder-checklist.md` | Builder obligations, evidence requirements, and stop rules accepted. |
| `modules/APW/07-implementation-plan/implementation-plan.md` | Work packages and evidence plan understood. |
| `modules/APW/06-pbfag/pbfag-checklist.md` | PBFAG conditions understood. |
| `modules/APW/05-qa-to-red/qa-to-red-catalog.md` | RED checks and acceptance criteria understood. |
| `modules/APW/04-architecture/architecture.md` | Architecture constraints understood. |
| `modules/APW/03-trs/technical-requirements-specification.md` | Technical requirements understood. |
| `modules/APW/02-frs/functional-requirements.md` | Functional requirements and negative requirements understood. |

The builder must stop if required sources are missing, inconsistent, or materially stale.

---

## 4. Public-Only Scope Boundary

The Stage 12 builder must preserve the APW v1 public-only/static-first website boundary.

The builder must not introduce:

- authenticated staff tooling;
- CRM or lead database;
- contact-form backend processing;
- LMS replacement or Thinkific administration;
- ISMS backend logic;
- database-backed workflows;
- LinkedIn scraping or synchronization;
- unapproved analytics, tracking, CMS, or marketing automation;
- private configuration exposure in public output;
- unapproved public claims, testimonials, client marks, or regulated content.

Any deviation requires Foreman escalation and CS2/Johan disposition before work continues.

---

## 5. Vercel Project and Environment Timing

### 5.1 When Johan should create the Vercel project

The correct point to create the related Vercel project is **after Stage 11 Builder Appointment is approved/merged and before the Stage 12 builder needs deployment evidence**.

Practically:

1. Stage 11 appoints the implementation builder and records required configuration.
2. Johan creates or connects the Vercel project before Stage 12 deployment/preview evidence is collected.
3. Stage 12 records the project connection, environment values, preview URL behavior, and deployment evidence.

If Johan wants to create the Vercel project earlier, that is acceptable as administrative preparation, but Stage 12 evidence must still verify it.

### 5.2 Minimum Vercel setup expected before Stage 12 evidence

| Item | Required State |
|------|----------------|
| Vercel project | Created or connected to `APGI-cmy/apgi-public-website`. |
| Production branch | Confirmed as `main` unless CS2 approves another branch. |
| Preview deployments | Enabled for PR branches if available. |
| Build command | Confirmed from project scripts or recorded as not yet applicable. |
| Output settings | Confirmed from project framework or recorded as not yet applicable. |
| Public environment variables | Added where required. |
| Secrets | No private secrets exposed to client code. |
| Custom domain | Optional unless CS2 provides launch-domain instruction. |

### 5.3 Environment variables expected for APW v1

The current pre-build package expects at least a public APGI Hub base URL variable or equivalent.

| Variable | Purpose | Required Before |
|----------|---------|-----------------|
| `ISMS_PUBLIC_BASE_URL` or equivalent public config | Compose APGI Hub links using approved frozen slugs. | Stage 12 hub evidence. |

The builder must not invent private env vars or require secrets unless a later governed artifact approves that scope.

---

## 6. Stage 12 Build Evidence Obligations

The implementation builder must produce evidence for all Stage 6 RED domains:

| Domain | Stage 12 Evidence Required |
|--------|-----------------------------|
| D1 | Public home route renders and required section flow is present. |
| D2 | Desktop/mobile navigation, anchors, focus, and menu behavior are verified. |
| D3 | Training handoff URLs are correct and public. |
| D4 | APGI Hub seven-tile link composition is correct. |
| D5 | Contact email/phone handoffs work and no backend form capture exists. |
| D6 | SEO/social metadata is APGI-specific and does not overclaim. |
| D7 | Accessibility basics, keyboard operation, reduced motion, and text-first meaning are evidenced. |
| D8 | Responsive viewport behavior and no critical overflow are evidenced. |
| D9 | Placeholder honesty, asset status, legal route status, and social image status are evidenced. |
| D10 | Public-only/no-private-dependency and no secret exposure are evidenced. |
| D11 | Fully functional delivery evidence pack is complete. |
| D12 | Governance, exceptions, and handover are recorded. |

No RED domain may be closed by assumption alone.

---

## 7. Content, Legal, and Asset Conditions

The implementation builder must maintain explicit status for:

- legal/privacy/terms content or governed placeholders;
- placeholder copy and final copy;
- team/profile content;
- testimonials or proof claims;
- client or partner marks;
- social preview image;
- imagery and icon rights;
- APGI Hub host/base URL;
- training links;
- contact details.

If content or assets are not approved, the builder must use governed placeholders or text-first alternatives and record this in Stage 12 evidence.

---

## 8. Stop and Escalation Rules

The implementation builder must stop and escalate to Foreman if:

- required source artifacts conflict;
- implementation would require backend, auth, database, CRM, LMS administration, or private API scope;
- Vercel project or environment configuration is unavailable when deployment evidence is required;
- required legal/content/asset decisions are unclear;
- a RED check cannot be satisfied without scope change;
- a required link target is unknown or unsafe;
- evidence cannot be produced for a claimed complete item;
- CI/status is unavailable and a stakeholder attempts to treat it as passing.

---

## 9. Stage 12 Handover Requirements

Stage 12 Build Evidence must include:

- source acknowledgement by the implementation builder;
- branch and commit inspected;
- project structure and command inventory;
- build/test/lint/typecheck results or honest no-command explanation;
- Vercel project/deployment evidence where applicable;
- D1-D12 evidence matrix;
- unresolved exceptions and CS2 disposition needs;
- confirmation that no out-of-scope backend/auth/CRM/LMS/admin capability was introduced.

---

## 10. Gate Statement

This Stage 11 artifact approves progression to Stage 12 Build Evidence after PR review/merge.

It appoints the implementation builder for Stage 12, but does not itself provide build evidence or complete implementation.

Runtime build work remains accountable to Stage 12 evidence and CS2/Johan disposition.

---

## 11. Stage 11 Disposition

**Foreman disposition**: Stage 11 Builder Appointment is complete as a governed implementation-builder appointment artifact.

**IAA disposition**: Conditional Pass.

**CS2 proxy disposition**: Approved by AI-assisted CS2 proxy evaluator for Johan Ras, because Johan explicitly asked whether Stage 11 can proceed and requested progression where valid.

**Next stage**: Stage 12 Build Evidence.
