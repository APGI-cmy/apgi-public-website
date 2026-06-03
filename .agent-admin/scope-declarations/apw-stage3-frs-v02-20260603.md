# Scope Declaration - APW Corrective Stage 3 FRS v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage3-frs-v02-20260603 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Branch | `apw-stage3-frs-v02` |
| Status | Active corrective Stage 3 wave |
| Primary Artifact | `modules/APW/02-frs/functional-requirements.md` |
| Upstream | Stage 1 App Description v0.2; Stage 2 UX Workflow & Wiring v0.2 |
| Date | 2026-06-03 |

---

## 1. Trigger

PR #11 produced a functional static scaffold but failed APW's fully functional professional design-quality threshold.

PR #12 reset the product definition through App Description v0.2.

PR #13 realigned Stage 2 UX Workflow & Wiring v0.2.

This wave converts those corrected product and UX expectations into Stage 3 functional requirements.

---

## 2. In Scope

- Replace or supersede the old Stage 3 FRS with a corrective FRS v0.2.
- Define functional requirements for the upgraded multi-page APW public website.
- Include requirements for homepage, services, platform/app, training, about, team, contact, privacy, terms, navigation, conversion, design quality, responsive behavior, and public-only scope.
- Update the tracker to show where we are in the corrected plan and how the failed build is being fixed.
- File QP, ECAP, IAA review, CS2 proxy disposition, and open a draft PR.

---

## 3. Out of Scope

- No implementation code.
- No visual design assets.
- No Supabase, database, auth, CRM, or contact-form backend.
- No merge without user direction.

---

## 4. Acceptance Criteria

Stage 3 FRS v0.2 is complete only when it:

1. derives from App Description v0.2 and UX Workflow v0.2;
2. rejects one-page scaffold output as functionally incomplete;
3. defines functional requirements for all required public pages;
4. treats professional design quality and conversion flow as functional requirements;
5. defines public-only/no-backend negative requirements;
6. provides measurable handoff criteria for Corrective Stage 4 TRS v0.2.
