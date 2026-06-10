# APW Stage 8 - Implementation Plan v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 8 - Implementation Plan |
| Folder | `modules/APW/07-implementation-plan` |
| Version | v0.2 - Corrective Implementation Plan |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-10 |
| Upstream Stage | `modules/APW/06-pbfag/pbfag-v0.2.md` |
| QA Source | `modules/APW/05-qa-to-red/qa-to-red-catalog.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage8-implementation-plan-v02-20260610.md` |

---

## 1. Purpose

This Stage 8 plan translates the corrected APW pre-build package into sequenced work packages, evidence obligations, and downstream handover requirements.

This stage is planning only. It prepares the Stage 9 Builder Checklist and later builder appointment.

---

## 2. Corrective Context

The earlier scaffold proved a deployment path but did not meet the APW professional website standard.

This corrected plan is based on the approved Stage 1 through Stage 7 artifacts and must build toward the Stage 6 QA-to-Red catalog.

---

## 3. Implementation Boundary

APW v1 remains a public static-first website.

Stage 8 must not expand scope beyond the approved public website boundary. Any expansion requires a later governed scope change.

---

## 4. Required IP-COR Work Packages

| ID | Work Package | Outcome |
|---|---|---|
| IP-COR-001 | Required public pages | Home, Services, Platform, Training, About, Team, Contact, Privacy, and Terms render. |
| IP-COR-002 | Premium design system | Palette, typography, cards, CTAs, section rhythm, and responsive layout are applied. |
| IP-COR-003 | Services page | Service categories, explanations, outcomes, and CTAs are present. |
| IP-COR-004 | Platform/app page | APGI ecosystem modules, descriptions, status, and link or pending behavior are present. |
| IP-COR-005 | Training page | Thinkific handoff, course cards, current offerings, and pending placeholders are present. |
| IP-COR-006 | Homepage front door | Hero, trust/proof, previews, CTAs, and exploration paths are present. |
| IP-COR-007 | Browser evidence | Route, mobile, keyboard, metadata, links, and Vercel evidence can be collected. |
| IP-COR-008 | QA-to-green map | Every Stage 6 RED item has a planned green evidence path. |

---

## 5. Build Sequence

| Sequence | Package | Purpose | Evidence Plan |
|---|---|---|---|
| 1 | Foundation | Confirm static framework, scripts, route registry, content model, and public config. | Script, route, config, and env notes. |
| 2 | Route shell | Implement the required public page shell and shared layout. | Route list and page render checks. |
| 3 | Content model | Implement structured services, modules, training, contact, legal, and metadata sources. | Content inventory and placeholder register. |
| 4 | Page composition | Build homepage, Services, Platform, Training, About, Team, Contact, Privacy, and Terms. | Page screenshots/browser notes. |
| 5 | Design system | Apply premium visual system and responsive section patterns. | Visual evidence and design-system notes. |
| 6 | Interaction and access | Add mobile navigation, keyboard paths, focus states, and reduced-motion handling. | Browser accessibility notes. |
| 7 | Validation | Add validation checks for routes, links, content depth, metadata, and scope boundary. | Validation log. |
| 8 | Evidence preparation | Prepare Stage 12 evidence capture. | QA-to-green evidence map. |

---

## 6. Stage 6 QA Linkage

The detailed mapping from IP-COR work packages to Stage 6 QA IDs is maintained in:

`modules/APW/07-implementation-plan/ip-cor-work-package-map-v0.2.md`

The Stage 12 evidence mapping is maintained in:

`modules/APW/07-implementation-plan/qa-to-green-evidence-map-v0.2.md`

---

## 7. Handoff to Stage 9

Stage 9 Builder Checklist v0.2 must convert this plan into builder-ready checklist items without weakening QA-to-Red.

---

## 8. Disposition

**Decision**: Draft for review.

**Implementation authorization**: Not granted.

**Next stage after merge**: Corrective Stage 9 Builder Checklist v0.2.
