# Scope Declaration - APW Corrective Stage 6 QA-to-Red v0.2

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage6-qa-to-red-v02-20260604 |
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras |
| Branch | `apw-stage6-qa-to-red-v02` |
| Status | Active corrective Stage 6 wave |
| Primary Folder | `modules/APW/05-qa-to-red/` |
| Upstream | Architecture v0.2A plus architecture completeness checklist |
| Date | 2026-06-04 |

---

## 1. Purpose

Create Corrective Stage 6 QA-to-Red v0.2 after the Stage 5 architecture canon-completeness patch was merged in PR #17.

This wave converts Architecture v0.2A and `architecture-completeness-checklist-v0.2.md` into RED tests that must fail incomplete/scaffold output and later drive build-to-green evidence.

---

## 2. In Scope

- Align the Stage 6 directory at `modules/APW/05-qa-to-red/`.
- Replace or deepen QA-to-Red artifacts to match the canon-complete architecture.
- Define QA catalog items with source traceability, RED condition, acceptance criteria, and clean handover summary.
- Define journey coverage, requirement traceability, architecture alignment, QA catalog alignment, and signoff package.
- Update tracker.
- File QP, ECAP, IAA review, CS2 proxy disposition, and draft PR.

---

## 3. Out of Scope

- No implementation code.
- No visual build.
- No production deploy request.
- No Supabase, database, auth, CRM, or contact-form backend.
- No merge without user direction.

---

## 4. Acceptance Criteria

Stage 6 is complete when QA-to-Red v0.2:

1. derives directly from Architecture v0.2A and the completeness checklist;
2. includes route, navigation, services, platform, training, contact, legal, design-system, accessibility, responsive, metadata, environment, Vercel, evidence, and public-boundary tests;
3. is RED against PR #11-style scaffold output;
4. can later be turned green by the upgraded implementation without adding new unstated QA assumptions;
5. hands off cleanly to Corrective Stage 7 PBFAG v0.2.
