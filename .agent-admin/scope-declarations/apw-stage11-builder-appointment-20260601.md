# Scope Declaration - APW Stage 11 Builder Appointment

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage11-builder-appointment-20260601 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage11-builder-appointment` |
| Target Folder | `modules/APW/10-builder-appointment/` |
| Primary Artifact | `modules/APW/10-builder-appointment/builder-appointment.md` |
| Date | 2026-06-01 |

---

## 1. Job Statement

Create the APW Stage 11 Builder Appointment after PR #9 merged Stage 10 IAA Pre-Brief.

The appointment must bind the future APW implementation builder to the approved source package, Stage 9 checklist, Stage 10 pre-brief, public-only boundary, evidence obligations, Vercel/environment setup conditions, and stop/escalation rules.

This wave appoints the implementation builder for the next build stage, but does not itself create build evidence or complete implementation.

---

## 2. Governance Loaded

The Foreman applied:

- `FOREMAN_OPERATING_MODEL.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/09-iaa-pre-brief/iaa-pre-brief.md`
- `modules/APW/08-builder-checklist/builder-checklist.md`
- `modules/APW/07-implementation-plan/implementation-plan.md`
- `modules/APW/06-pbfag/pbfag-checklist.md`
- `modules/APW/05-qa-to-red/qa-to-red-catalog.md`
- `modules/APW/04-architecture/architecture.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `modules/APW/02-frs/functional-requirements.md`

---

## 3. In Scope

- Create the Stage 11 Builder Appointment artifact.
- Bind the implementation builder to required source artifacts and the Stage 9 checklist.
- Define Vercel project/environment setup timing and responsibilities.
- Define required acknowledgement before Stage 12 Build Evidence.
- Update tracker current-state wording after PR #9 merge.
- File Foreman QP, ECAP, IAA review, and authorized CS2 proxy disposition.
- Open a governed draft PR.

---

## 4. Out of Scope

- No runtime code changes.
- No Vercel project creation by ChatGPT.
- No environment secret creation by ChatGPT.
- No build evidence yet.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Stage 11 wave must:

1. clearly appoint the implementation builder for Stage 12 work;
2. bind the builder to the source package, Stage 9 checklist, and Stage 10 pre-brief;
3. require Vercel/environment readiness before or at the beginning of Stage 12 evidence collection;
4. preserve public-only v1 scope;
5. require D1-D12 evidence in Stage 12;
6. define stop/escalation rules;
7. preserve role separation and honest CI/status reporting.
