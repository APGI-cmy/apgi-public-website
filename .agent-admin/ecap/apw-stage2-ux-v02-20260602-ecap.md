# ECAP Package - APW Corrective Stage 2 UX v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage2-ux-v02-20260602 |
| Module | APW - APGI Public Website |
| Role | ECAP Administration / Closure Resilience |
| Branch | `apw-stage2-ux-v02` |
| Status | Filed |
| Date | 2026-06-02 |

---

## 1. ECAP Purpose

This ECAP package preserves the administrative context for the Corrective Stage 2 UX Workflow and Wiring v0.2 wave.

---

## 2. Execution Context

| Item | Value |
|---|---|
| User instruction | Proceed from merged PR #12 baseline into corrected pre-build sequence, starting with upgraded Stage 2 UX Workflow and Wiring. |
| Foreman interpretation | Replace the old one-page UX model with a corrected multi-page professional website UX specification. |
| Branch | `apw-stage2-ux-v02` |
| Primary artifact | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC_V0_2.md` |
| Code impact | None. Documentation/governance only. |

---

## 3. Artifact Inventory

| Artifact | Path | Status |
|---|---|---|
| Scope declaration | `.agent-admin/scope-declarations/apw-stage2-ux-v02-20260602.md` | Filed |
| UX Workflow v0.2 | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC_V0_2.md` | Filed |
| Module pointer | `modules/APW/01-ux-workflow-wiring/ux-workflow-wiring-spec.md` | Updated |
| Tracker | `modules/APW/BUILD_PROGRESS_TRACKER.md` | Updated |
| Foreman QP | `.agent-admin/quality/apw-stage2-ux-v02-20260602-foreman-qp.md` | Filed |
| ECAP | `.agent-admin/ecap/apw-stage2-ux-v02-20260602-ecap.md` | Filed |
| IAA review | `.agent-admin/assurance/iaa-review-apw-stage2-ux-v02-20260602.md` | To be filed |
| CS2 proxy signoff | `.agent-admin/signoffs/cs2-proxy-stage2-ux-v02-20260602.md` | To be filed |

---

## 4. Known Conditions

| ID | Condition | Disposition |
|---|---|---|
| ECAP-001 | The original canonical v0.1 UX spec remains in place. | v0.2 companion file is now the active source through the module pointer and tracker. |
| ECAP-002 | Stage 3 FRS remains old until corrected. | Proceed to Corrective Stage 3 FRS v0.2 after this PR is reviewed/merged. |
| ECAP-003 | No implementation should resume yet. | Build remains blocked until corrected pre-build chain is approved. |

---

## 5. ECAP Recommendation

Proceed to IAA review, CS2 proxy disposition, draft PR creation, and PR review.
