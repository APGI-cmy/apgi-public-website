# APW Stage 7 - PBFAG v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 7 - PBFAG |
| Folder | `modules/APW/06-pbfag` |
| Version | v0.2 - Corrective Pre-Build Final Acceptance Gate |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-08 |
| Upstream Stage | `modules/APW/05-qa-to-red/` v0.2 |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage7-pbfag-v02-20260608.md` |

---

## 1. Purpose

This PBFAG v0.2 verifies whether the corrected APW pre-build package is ready to proceed to Corrective Stage 8 Implementation Plan v0.2.

It does not authorize implementation.

PBFAG is the readiness gate that checks whether the upstream product, UX, requirements, architecture, and QA-to-Red artifacts are coherent enough to support build-to-green planning.

---

## 2. Gate Inputs

| Stage | Artifact | Status for PBFAG |
|---|---|---|
| Stage 1 | App Description v0.2 | Accepted via PR #12 |
| Stage 2 | UX Workflow & Wiring v0.2 | Accepted via PR #13 |
| Stage 3 | FRS v0.2 | Accepted via PR #14 |
| Stage 4 | TRS v0.2 | Accepted via PR #15 |
| Stage 5 | Architecture v0.2A | Accepted via PR #16 and PR #17 patch |
| Stage 6 | QA-to-Red v0.2 | Accepted via PR #18 |

---

## 3. Corrective Gate Context

PR #11 produced a functional static scaffold but failed the APW fully functional professional website standard.

The corrected pre-build chain now requires:

- multi-page public site architecture;
- route/page completeness;
- meaningful services depth;
- Platform/APGI Hub module depth;
- training content and Thinkific handoff;
- contact/legal/trust pages;
- premium design-system visibility;
- accessibility and responsive basics;
- environment and Vercel evidence;
- public-only/no-backend boundary;
- build-to-green evidence.

---

## 4. PBFAG Review Matrix

| Gate ID | Gate | Evidence | Disposition |
|---|---|---|---|
| PBFAG-001 | Product definition is corrected | App Description v0.2 | Pass |
| PBFAG-002 | UX is multi-page and journey-based | UX Workflow v0.2 | Pass |
| PBFAG-003 | Functional requirements reject scaffold output | FRS v0.2 | Pass |
| PBFAG-004 | Technical requirements define static multi-page output | TRS v0.2 | Pass |
| PBFAG-005 | Architecture is canon-complete | Architecture v0.2A and checklist | Pass |
| PBFAG-006 | QA-to-Red derives from architecture | Stage 6 architecture alignment | Pass |
| PBFAG-007 | RED catalog is source-backed | Stage 6 QA catalog and alignment | Pass |
| PBFAG-008 | Journey and E2E paths are covered | Stage 6 journey coverage | Pass |
| PBFAG-009 | Requirement traceability exists | Stage 6 requirement traceability v0.2 | Pass |
| PBFAG-010 | Public-only boundary preserved | FRS/TRS/Architecture/QA | Pass |
| PBFAG-011 | Implementation remains blocked | Tracker and Stage 6 signoff | Pass |
| PBFAG-012 | Stage 8 can plan IP-COR work packages | Stage 6 RED suite and tracker | Conditional Pass |

---

## 5. Conditions for Stage 8 Implementation Plan

Stage 8 Implementation Plan v0.2 must:

1. convert the corrected pre-build chain into build work packages;
2. preserve the IP-COR work-package model;
3. map each implementation work package to Stage 6 QA items;
4. include no code execution yet;
5. define build sequencing and evidence expectations;
6. preserve public-only/static-first boundary;
7. plan validation that fails missing routes, weak content depth, missing design-system visibility, and backend scope creep;
8. keep PR #11 scaffold output as a failed reference, not a baseline.

---

## 6. PBFAG Blockers

No absolute blocker to Stage 8 Implementation Plan v0.2 was found.

Implementation itself remains blocked until later gates are complete.

---

## 7. Carried-Forward Risks

| Risk | Handling |
|---|---|
| Stage 8 may over-compress implementation work packages | Require mapping to Stage 6 QA IDs. |
| Design quality may again become subjective | Require design-system evidence and APW-QA-015/APW-QA-016 mapping. |
| Platform links may depend on unknown public base URL | Preserve pending state and env behavior from Architecture checklist. |
| Current APGI content baseline may be underused | Stage 8 must include content harvest/rewrite planning where approved. |
| Implementation may start before gates | Tracker and governance continue to block build until Stage 11/12 gates. |

---

## 8. PBFAG Decision

**Decision**: Conditional Pass for progression to Corrective Stage 8 Implementation Plan v0.2.

**Implementation authorization**: Not granted.

**Next stage**: Corrective Stage 8 Implementation Plan v0.2.
