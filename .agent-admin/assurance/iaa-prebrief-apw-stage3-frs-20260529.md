# IAA Pre-Brief - APW Stage 3 FRS

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage3-frs-20260529 |
| Module | APW - APGI Public Website |
| Role | Independent Assurance Agent Pre-Brief |
| Branch | `foreman/apw-stage3-frs` |
| Status | Ready for IAA review |
| Date | 2026-05-29 |

---

## 1. Purpose

This pre-brief prepares the Independent Assurance Agent to review the APW Stage 3 FRS draft independently.

The IAA must step outside Foreman/build execution and critically evaluate whether the FRS is complete, traceable, governed, functionally meaningful, and suitable to drive later fully functional delivery.

---

## 2. Assurance Objective

Determine whether the APW Stage 3 FRS draft provides a sufficient functional foundation for downstream TRS, Architecture, QA-to-Red, PBFAG, implementation planning, and ultimately fully functional website delivery.

---

## 3. Artifacts for Review

| Artifact | Path |
|----------|------|
| Scope declaration | `.agent-admin/scope-declarations/apw-stage3-frs-20260529.md` |
| Builder appointment | `.agent-admin/builder-appointments/apw-stage3-frs-builder-contract-20260529.md` |
| FRS draft | `modules/APW/02-frs/functional-requirements.md` |
| APW tracker | `modules/APW/BUILD_PROGRESS_TRACKER.md` |
| Foreman QP | `.agent-admin/quality/apw-stage3-frs-foreman-qp-20260529.md` |
| ECAP package | `.agent-admin/ecap/apw-stage3-frs-ecap-20260529.md` |
| App Description | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` |
| UX Workflow & Wiring Spec | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md` |
| Local Governance Canon | `docs/governance/LOCAL_GOVERNANCE_CANON.md` |
| Foreman Role and Agent Stack | `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md` |

---

## 4. Required IAA Review Lens

The IAA must evaluate:

1. **Traceability** - Does the FRS derive cleanly from Stage 0 and Stage 1?
2. **Completeness** - Are all public website journeys and functional areas covered?
3. **Governance adherence** - Does the FRS preserve stage sequencing and pre-build discipline?
4. **Fully functional delivery readiness** - Can this FRS drive a later 100% functional build rather than a partial or decorative build?
5. **No test dodging / no test debt** - Does it create enough clarity for later QA-to-Red and testable acceptance?
6. **OPOJD / one-pass quality mindset** - Does it reduce avoidable rework by making the requirements explicit now?
7. **Scope discipline** - Does it prevent accidental CRM/LMS/admin/app-backend scope creep?
8. **Public trust** - Does it protect credibility, accessibility, content honesty, rights-sensitive assets, and user clarity?

---

## 5. Suggested IAA Findings Format

Use this finding format:

```text
### Finding IAA-XXX - <finding title>

Severity: Critical / High / Medium / Low / Informational
Disposition: Pass / Conditional Pass / Reject / Escalate
Evidence: <artifact/path/section>
Assessment: <critical review>
Required Action: <fix or waiver>
```

---

## 6. Initial Foreman-Declared Conditions

The Foreman already identified these conditions:

| ID | Condition | IAA Review Need |
|----|-----------|-----------------|
| C-001 | Stage 2 UX Workflow & Wiring Spec is still recorded as in progress / ready for sign-off. | Decide whether Stage 3 can be conditionally accepted or must wait for formal Stage 2 sign-off. |
| C-002 | This is a documentation-only pre-build wave. | Ensure QA expectations are appropriate for documentation stage, not runtime implementation. |
| C-003 | FRS contains functional constraints that will later become TRS / QA-to-Red obligations. | Confirm they are specific enough to become testable later. |

---

## 7. Requested IAA Outcome

Return one of:

- **Pass** - FRS may proceed to CS2 approval consideration.
- **Conditional Pass** - FRS may proceed only if listed conditions are accepted or corrected.
- **Reject** - FRS requires builder correction before approval consideration.
- **Escalate** - Authority or governance conflict requires CS2 / Foreman decision.

---

## 8. Handover Block

No final handover should occur until IAA review is completed or explicitly waived by CS2 / Johan Ras.
