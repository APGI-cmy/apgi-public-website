# APGI Public Website - Foreman Operating Model

## Status

| Field | Value |
|-------|-------|
| Repository | `APGI-cmy/apgi-public-website` |
| Owner / CS2 Authority | Johan Ras |
| Operating Role | Foreman-led governed delivery |
| AI Proxy Mode | Permitted only when Johan Ras explicitly authorizes it |
| Status | Active reference |
| Last Updated | 2026-05-31 |

---

## 1. Why this file exists

This file records how work is run in this repository so a future chat or agent session can continue without rebuilding the operating model from conversation history.

The working model is:

1. Johan Ras remains the CS2 authority.
2. AI may act as CS2 proxy only when Johan explicitly authorizes it.
3. ChatGPT may assume Foreman when Johan asks it to do so.
4. Foreman loads governance and tracker state before changing scope or artifacts.
5. Foreman creates a scope declaration before work starts.
6. Foreman appoints a builder.
7. Builder produces only the scoped artifact or artifacts.
8. Foreman updates the tracker.
9. Foreman performs QP review.
10. ECAP records the administrative trail.
11. IAA performs independent assurance review.
12. CI/status is inspected and reported honestly.
13. CS2 proxy disposition is recorded only where Johan has explicitly authorized it.
14. PRs are opened as draft unless ready for full review.
15. No implementation begins before QA-to-Red, PBFAG, implementation plan, builder checklist, IAA pre-brief, builder appointment, and build evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 2. Roles

### CS2 - Johan Ras

Johan Ras remains the underlying approval authority.

CS2 decisions include stage approval, progression approval, acceptance of conditions, and approval of any gate waiver.

### AI-assisted CS2 proxy

When Johan Ras explicitly authorizes it, AI may evaluate and approve a stage on his behalf.

This must be recorded transparently as:

```text
Approved by AI-assisted CS2 proxy evaluator for Johan Ras.
CS2 Authority: Johan Ras.
```

Proxy sign-offs should be filed under:

```text
.agent-admin/signoffs/
```

### Foreman

The Foreman orchestrates the work.

The Foreman loads governance and tracker state, declares scope, appoints builders, manages the wave, performs QP review, ensures ECAP and IAA are filed, keeps the tracker updated, inspects CI/status, and controls whether work is ready for PR or needs correction.

### Builder

The builder performs the appointed work only within the scope given by the Foreman.

Builder appointment artifacts should be filed under:

```text
.agent-admin/builder-appointments/
```

### ECAP

ECAP preserves the administrative record of the wave so the work can be reviewed or resumed later without relying on chat memory.

ECAP artifacts should be filed under:

```text
.agent-admin/ecap/
```

### IAA

IAA is the independent assurance role.

IAA reviews the work critically against governance, traceability, completeness, fully functional delivery readiness, no hidden test debt, no test dodging, public trust, scope discipline, and readiness for the next stage.

IAA artifacts should be filed under:

```text
.agent-admin/assurance/
```

---

## 3. Standard Foreman wave

A governed wave should normally include:

```text
.agent-admin/scope-declarations/<wave-id>.md
.agent-admin/builder-appointments/<wave-id>-builder-contract.md
<primary stage artifact(s)>
modules/APW/BUILD_PROGRESS_TRACKER.md
.agent-admin/quality/<wave-id>-foreman-qp.md
.agent-admin/ecap/<wave-id>-ecap.md
.agent-admin/assurance/iaa-prebrief-<wave-id>.md
.agent-admin/assurance/iaa-review-<wave-id>.md
.agent-admin/signoffs/<stage-or-wave-signoff>.md
```

A stage is not complete merely because a file exists. The stage should have scope, builder appointment, QP, ECAP, IAA, tracker update, CI/status inspection, and CS2 or authorized proxy disposition where approval is required.

---

## 4. PR and merge rules

PRs should normally start as draft PRs.

A PR may move out of draft when the governance trail is complete enough for review.

Documentation-only PRs may record CI as unavailable if GitHub has no workflow runs. This must not be described as CI passing.

Implementation PRs require stronger evidence. They must not be merged until the relevant pre-build gates are complete or CS2 has explicitly waived them.

No implementation begins before QA-to-Red, PBFAG, implementation plan, builder checklist, IAA pre-brief, builder appointment, and build evidence gates are complete or explicitly waived.

---

## 5. Fully functional delivery rule

The central quality question is:

```text
Are we delivering a fully functional build in accordance with the fully functional build canon?
```

For implementation work, this means the result must be usable, routed, coherent, responsive, accessible to the agreed standard, correctly linked, inspectable, and free of known avoidable broken paths.

For pre-build work, this means the artifact must be specific enough to drive a fully functional downstream build.

---

## 6. APW stage model

| Canonical Stage | Module Folder | Artifact |
|-----------------|---------------|----------|
| Stage 1 | `modules/APW/00-app-description` | App Description |
| Stage 2 | `modules/APW/01-ux-workflow-wiring` | UX Workflow & Wiring Spec |
| Stage 3 | `modules/APW/02-frs` | Functional Requirements Specification |
| Stage 4 | `modules/APW/03-trs` | Technical Requirements Specification |
| Stage 5 | `modules/APW/04-architecture` | Architecture |
| Stage 6 | `modules/APW/05-qa-to-red` | QA-to-Red |
| Stage 7 | `modules/APW/06-pbfag` | PBFAG |
| Stage 8 | `modules/APW/07-implementation-plan` | Implementation Plan |
| Stage 9 | `modules/APW/08-builder-checklist` | Builder Checklist |
| Stage 10 | `modules/APW/09-iaa-pre-brief` | IAA Pre-Brief |
| Stage 11 | `modules/APW/10-builder-appointment` | Builder Appointment |
| Stage 12 | `modules/APW/11-build` | Build Evidence |

Always update:

```text
modules/APW/BUILD_PROGRESS_TRACKER.md
```

when a stage changes state.

---

## 7. Future chat startup instruction

Use this at the start of a new chat:

```text
Load `FOREMAN_OPERATING_MODEL.md` first. Assume Foreman for APW. Load the local governance canon, APW tracker, and current stage artifacts. Continue from the current tracker state. Use AI-assisted CS2 proxy evaluation only where Johan Ras explicitly authorizes it. Preserve Foreman, Builder, ECAP, IAA, and CS2 proxy separation.
```

---

## 8. Current state after PR #7 and Stage 9 branch

As of 2026-05-31:

- PR #2 is merged: Stage 3 FRS complete and approved for Stage 4 TRS progression.
- PR #3 is merged: Stage 4 TRS complete and approved for Stage 5 Architecture progression.
- PR #4 is merged: Stage 5 Architecture complete and approved for Stage 6 QA-to-Red progression.
- PR #5 is merged: Stage 6 QA-to-Red complete and approved for Stage 7 PBFAG progression.
- PR #6 is merged: Stage 7 PBFAG complete and approved for Stage 8 Implementation Plan progression.
- PR #7 is merged: Stage 8 Implementation Plan complete and approved for Stage 9 Builder Checklist progression.
- Stage 9 Builder Checklist is being run on `foreman/apw-stage9-builder-checklist` and is intended to approve progression to Stage 10 IAA Pre-Brief after PR merge.
- PR #1 remains an implementation draft and should wait until required pre-build gates are complete or waived.
- Implementation remains blocked until Stage 10 IAA Pre-Brief, Stage 11 Builder Appointment, and Stage 12 Build Evidence gates are complete or explicitly waived by CS2 / Johan Ras.

---

## 9. Next recommended wave

After the Stage 9 Builder Checklist PR is merged, start:

```text
APW Stage 10 - IAA Pre-Brief
```

Expected branch:

```text
foreman/apw-stage10-iaa-pre-brief
```

Expected stage folder:

```text
modules/APW/09-iaa-pre-brief/
```

Expected primary artifact:

```text
modules/APW/09-iaa-pre-brief/iaa-pre-brief.md
```

Stage 10 must prepare the independent assurance brief that a future IAA will use before the runtime implementation builder is appointed. It must not start implementation.
