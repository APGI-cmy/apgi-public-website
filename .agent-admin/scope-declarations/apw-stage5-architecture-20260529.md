# Scope Declaration - APW Stage 5 Architecture

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage5-architecture-20260529 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by standing instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage5-architecture` |
| Target Artifact | `modules/APW/04-architecture/architecture.md` |

---

## 1. Job Statement

Create the APW Stage 5 Architecture artifact from the approved Stage 4 TRS after completing a once-over readiness review of Stages 1-4.

The Architecture must convert technical requirements into a coherent design structure suitable for Stage 6 QA-to-Red and later implementation planning.

---

## 2. Governance Loaded

The Foreman must apply:

- `FOREMAN_OPERATING_MODEL.md`
- `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md`
- `docs/governance/LOCAL_GOVERNANCE_CANON.md`
- `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`
- `modules/APW/BUILD_PROGRESS_TRACKER.md`
- `modules/APW/02-frs/functional-requirements.md`
- `modules/APW/03-trs/technical-requirements-specification.md`
- `.agent-admin/readiness/stages-1-to-4-fully-functional-readiness-review-20260529.md`

---

## 3. In Scope

- Create Stage 5 Architecture in `modules/APW/04-architecture/architecture.md`.
- Preserve fully functional delivery controls from the TRS.
- Define route, section, component, content/config, APGI Hub, metadata, accessibility, responsive, deployment, and evidence architecture.
- Update the APW tracker.
- File builder appointment, Foreman QP, ECAP, IAA pre-brief, IAA review, and CS2 proxy sign-off.
- Open a governed draft PR.

---

## 4. Out of Scope

- No implementation code.
- No QA-to-Red artifact.
- No PBFAG.
- No implementation plan.
- No runtime build work.
- No merge without user direction.

---

## 5. Acceptance Criteria

The Architecture must:

1. derive from the approved TRS;
2. preserve route, content, hub, accessibility, responsive, SEO, security, and fully functional delivery controls;
3. define a clear public-site architecture without introducing unapproved backend systems;
4. create a structure that Stage 6 QA-to-Red can inspect;
5. identify carried-forward risks and evidence needs;
6. avoid implementation details that belong to build execution;
7. be reviewable by Foreman QP, ECAP, IAA, and CS2 proxy disposition.

---

## 6. Handover Rule

This wave must not be considered complete until QP, ECAP, IAA pre-brief, IAA review, tracker update, CI/status inspection, and CS2 proxy disposition are filed or explicitly deferred.
