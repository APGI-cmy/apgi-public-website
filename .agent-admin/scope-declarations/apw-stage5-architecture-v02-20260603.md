# Scope Declaration - APW Corrective Stage 5 Architecture v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage5-architecture-v02-20260603 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage5-architecture-v02` |
| Status | Active corrective Stage 5 wave |
| Primary Artifact | `modules/APW/04-architecture/architecture.md` |
| Date | 2026-06-03 |

---

## 1. Purpose

Create Corrective Stage 5 Architecture v0.2 after PR #15 merged Corrective Stage 4 TRS v0.2.

This wave defines the architecture for the upgraded APW website before QA-to-Red and implementation planning resume.

---

## 2. In Scope

- Update the Stage 5 Architecture for the corrected APW website.
- Define route, content, component, design-system, validation, Vercel, evidence, and public-boundary architecture.
- Update the tracker if tool safety permits.
- File QP, ECAP, IAA review, CS2 proxy disposition, and open a draft PR.

---

## 3. Out of Scope

- No runtime implementation.
- No production deploy request.
- No Supabase, database, auth, CRM, or contact-form backend.
- No merge without user direction.

---

## 4. Acceptance Criteria

Stage 5 Architecture v0.2 is complete when it:

1. follows TRS v0.2;
2. defines multi-page static route architecture;
3. defines structured content and page composition architecture;
4. defines design-system and validation architecture;
5. defines Vercel and evidence architecture;
6. preserves public-only/static-first scope;
7. hands off to Corrective Stage 6 QA-to-Red v0.2.
