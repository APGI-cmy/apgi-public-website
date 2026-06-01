# ECAP Package - APW Stage 12 Build Evidence

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage12-build-evidence-20260601 |
| Module | APW - APGI Public Website |
| Role | ECAP Administration / Closure Resilience |
| Branch | `foreman/apw-stage12-build-evidence` |
| Status | Filed - pending PR creation/status inspection/Vercel verification |
| Date | 2026-06-01 |

---

## 1. ECAP Purpose

This ECAP package preserves the administrative execution context for the APW Stage 12 Build Evidence wave.

---

## 2. Execution Context

| Item | Value |
|---|---|
| User instruction | Proceed with Stage 12 after Vercel project creation. |
| Foreman interpretation | Create static-first APW website implementation and build evidence package. |
| Branch | `foreman/apw-stage12-build-evidence` |
| Primary artifact | `modules/APW/11-build/build-evidence.md` |
| Vercel project | `https://vercel.com/rassie-ras-projects/apgi-public-website` |
| Vercel project ID | `prj_Ms3RG1z7HFlWjG8NXISYqPrXrluW` |

---

## 3. Artifact Inventory

| Artifact | Path | Status |
|---|---|---|
| Scope declaration | `.agent-admin/scope-declarations/apw-stage12-build-evidence-20260601.md` | Filed |
| Static build manifest | `package.json` | Filed |
| Vercel config | `vercel.json` | Filed |
| Structured site data | `src/site-data.mjs` | Filed |
| Build script | `scripts/build.mjs` | Filed |
| Validation script | `scripts/validate.mjs` | Filed |
| Static styles | `public/styles.css` | Filed |
| Mobile nav script | `public/app.js` | Filed |
| Build evidence | `modules/APW/11-build/build-evidence.md` | Filed |
| Tracker update | `modules/APW/BUILD_PROGRESS_TRACKER.md` | Filed |
| Foreman QP | `.agent-admin/quality/apw-stage12-build-evidence-20260601-foreman-qp.md` | Filed |
| ECAP | `.agent-admin/ecap/apw-stage12-build-evidence-20260601-ecap.md` | Filed |
| IAA review | `.agent-admin/assurance/iaa-review-apw-stage12-build-evidence-20260601.md` | To be filed |
| CS2 proxy sign-off | `.agent-admin/signoffs/cs2-proxy-stage12-build-evidence-signoff-20260601.md` | To be filed |

---

## 4. Known Conditions

| ID | Condition | Required Disposition |
|---|---|---|
| ECAP-001 | Vercel deployment evidence is pending until PR/build runs. | Verify after PR creation or main deployment. |
| ECAP-002 | `ISMS_PUBLIC_BASE_URL` is not yet known. | Hub cards show pending state until public Hub/ISMS base URL is available. |
| ECAP-003 | Legal/team/assets remain placeholder or text-first. | Accept as governed placeholders or replace with approved content later. |
| ECAP-004 | GitHub connector cannot run local commands. | Use Vercel build logs or local checkout for final command output. |
| ECAP-005 | CI/status may be unavailable. | Record factually and do not treat absence as passing. |

---

## 5. ECAP Recommendation

Proceed to IAA review, authorized CS2 proxy disposition, draft PR creation, CI/status inspection, and Vercel preview verification.
