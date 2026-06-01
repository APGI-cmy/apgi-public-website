# APW Corrective FRS Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 3 - FRS corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | App Description v0.2 and Corrective UX Alignment v0.2 |

---

## 1. Corrective Functional Finding

The previous FRS did not make design quality, multi-page information architecture, service depth, platform/app depth, training depth, and conversion experience strong enough as functional requirements.

PR #11 therefore delivered a functional scaffold, but not a functionally complete APW website.

---

## 2. New Functional Requirements

| ID | Requirement |
|----|-------------|
| FRS-COR-001 | The site must include a multi-page public information architecture: home, services, platform/app, training, about, team, contact, privacy, and terms. |
| FRS-COR-002 | The homepage must act as a premium conversion front door, not the whole website. |
| FRS-COR-003 | Services must be presented on a dedicated page with meaningful APGI service categories and visitor outcomes. |
| FRS-COR-004 | The platform/app page must present APGI ecosystem modules/submodules with descriptions, status, and link/pending behavior. |
| FRS-COR-005 | The training page must link prominently to `https://apgi.thinkific.com/` and present available/current training offerings. |
| FRS-COR-006 | Visual richness, colour, hierarchy, card systems, and professional polish are functional acceptance requirements. |
| FRS-COR-007 | The build must invite exploration through CTAs, page routing, and content depth. |
| FRS-COR-008 | The existing `apginc.ca` content substance must be considered a content baseline to preserve or improve. |
| FRS-COR-009 | A one-page generic scaffold is explicitly insufficient and must fail QA-to-Red. |
| FRS-COR-010 | No Supabase, database, auth, CRM, or contact-form backend is permitted for v1 without later CS2 approval. |

---

## 3. Functional Green Standard

The upgraded build is functionally green only when a visitor can understand APGI, explore services, explore the app/platform ecosystem, explore training, contact APGI, and navigate legal/trust pages through a polished multi-page experience.
