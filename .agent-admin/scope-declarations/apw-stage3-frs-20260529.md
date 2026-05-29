# Scope Declaration - APW Stage 3 FRS

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage3-frs-20260529 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras instruction in chat, 2026-05-29 |
| Status | Active scope package |
| Branch | `foreman/apw-stage3-frs` |
| Target Artifact | `modules/APW/02-frs/functional-requirements.md` |

---

## 1. Job Statement

Create the APGI Public Website Stage 3 Functional Requirements Specification (FRS) by deriving functional requirements from the approved App Description and the current UX Workflow & Wiring Spec.

The repository module scaffold uses zero-based folder numbering inherited from the APW structure:

- Canonical build sequence Stage 1 = App Description -> `modules/APW/00-app-description/`
- Canonical build sequence Stage 2 = UX Workflow & Wiring Spec -> `modules/APW/01-ux-workflow-wiring/`
- Canonical build sequence Stage 3 = FRS -> `modules/APW/02-frs/`

---

## 2. Governance Loaded

The Foreman loaded and applied the local governing structure:

- `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md`
- `docs/governance/LOCAL_GOVERNANCE_CANON.md`
- `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/00-app-description/app-description.md`
- `modules/APW/01-ux-workflow-wiring/ux-workflow-wiring-spec.md`
- `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`
- `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md`

---

## 3. In Scope

- Replace the Stage 3 FRS placeholder with a complete FRS draft.
- Derive requirements from the App Description and UX Workflow & Wiring Spec.
- Preserve the public website boundary: marketing and routing layer, not system of record.
- Include traceability to user journeys, screens, app hub routes, training handoffs, contact handoffs, accessibility, SEO, placeholders, and deployment expectations.
- Update the APW module tracker to show Stage 3 FRS drafted and pending QP / ECAP / IAA review.
- File builder appointment, QP note, ECAP package, and IAA pre-brief artifacts for this wave.

---

## 4. Out of Scope

- No implementation code.
- No TRS authoring.
- No architecture authoring.
- No QA-to-Red authoring beyond noting requirements that will later become QA-to-Red gates.
- No changes to routes, UI, package configuration, or deployment workflows.
- No merge or final approval without CS2 direction.

---

## 5. Acceptance Criteria

The FRS draft must:

1. define clear functional requirements using stable IDs;
2. cover all primary and secondary journeys identified in Stage 2;
3. cover public navigation, training, APGI Hub, contact, LinkedIn, content slots, accessibility, responsive behavior, SEO/social metadata, and deployment readiness;
4. include explicit negative requirements for out-of-scope behavior;
5. include traceability to Stage 0 and Stage 1;
6. avoid implementation-specific TRS detail except where needed as functional constraints;
7. preserve governance stage sequencing and identify Stage 4 TRS as the next artifact.

---

## 6. Handover Rule

The wave must not be considered closed until Foreman QP, ECAP, IAA pre-brief, and CI/PR status inspection are complete or explicitly waived by CS2.
