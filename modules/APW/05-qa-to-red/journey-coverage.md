# APW Stage 6 - Journey Coverage v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Artifact | Journey Coverage |
| Version | v0.2 |
| Status | Draft for review |
| Last Updated | 2026-06-04 |

---

## 1. Purpose

This artifact maps user journeys and end-to-end paths to RED tests in the Stage 6 catalog.

---

## 2. User Journey Coverage

| Journey | Source | QA Coverage | RED if |
|---|---|---|---|
| Premium brand orientation | UX v0.2; Architecture homepage composition | APW-QA-006, APW-QA-015 | Homepage lacks premium hero, exploration paths, or design-system visibility. |
| Services exploration | UX v0.2; FRS services; Architecture services model | APW-QA-003, APW-QA-004, APW-QA-007 | Services route missing, shallow, or lacks CTA. |
| Platform/app exploration | UX v0.2; Architecture Hub model | APW-QA-008, APW-QA-009, APW-QA-023 | Required modules missing or link/pending behavior unclear. |
| Training exploration | UX v0.2; FRS training; Architecture training model | APW-QA-010, APW-QA-011, APW-QA-012, APW-QA-023 | Thinkific handoff missing, training content shallow, or admin URL exposed. |
| Contact conversion | UX v0.2; Architecture contact page | APW-QA-013, APW-QA-029 | Contact methods missing or capture workflow added. |
| About/team credibility | UX v0.2; route architecture | APW-QA-001, APW-QA-004, APW-QA-014 | Required trust pages missing or placeholders dishonest. |
| Legal/trust review | UX v0.2; legal page architecture | APW-QA-014, APW-QA-020 | Privacy/Terms missing or metadata/claims unsafe. |
| Mobile exploration | UX v0.2; responsive architecture | APW-QA-003, APW-QA-017, APW-QA-018, APW-QA-019 | Mobile nav or layout blocks primary journeys. |
| Design-quality exploration | UX v0.2; design-system architecture | APW-QA-015, APW-QA-016, APW-QA-019 | Site returns to plain scaffold design. |

---

## 3. End-to-End Path Coverage

| E2E Path | Source | QA Coverage | Required Green Evidence Later |
|---|---|---|---|
| Home -> Services -> Contact | Architecture checklist E2E-001 | APW-QA-006, APW-QA-007, APW-QA-013, APW-QA-026 | Browser route and CTA evidence. |
| Home -> Platform -> Module or Pending | Architecture checklist E2E-002 | APW-QA-008, APW-QA-009, APW-QA-023, APW-QA-026 | Module card/link or pending-state evidence. |
| Home -> Training -> Thinkific | Architecture checklist E2E-003 | APW-QA-010, APW-QA-011, APW-QA-023, APW-QA-026 | Training route and Thinkific link evidence. |
| Home -> About/Team -> Contact | Architecture checklist E2E-004 | APW-QA-001, APW-QA-004, APW-QA-013, APW-QA-026 | Route and contact CTA evidence. |
| Footer -> Privacy/Terms | Architecture checklist E2E-005 | APW-QA-003, APW-QA-014, APW-QA-026 | Footer and legal route evidence. |
| Mobile menu -> Any primary route | Architecture checklist E2E-006 | APW-QA-003, APW-QA-017, APW-QA-018, APW-QA-019, APW-QA-026 | Mobile browser evidence. |

---

## 4. Coverage Disposition

All Stage 2 journeys and Architecture checklist E2E paths have at least one RED test and later green-evidence path.
