# APW Corrective TRS Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 4 - TRS corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | Corrective FRS Alignment v0.2 |

---

## 1. Corrective Technical Finding

The earlier technical requirements permitted a minimal static implementation to satisfy too much of the build gate.

The upgraded TRS must define technical requirements for a richer multi-page, design-led, content-driven static/Vercel site.

---

## 2. New Technical Requirements

| ID | Requirement |
|----|-------------|
| TRS-COR-001 | The build must support static generation of all required public pages. |
| TRS-COR-002 | The route model must include home, services, platform/app, training, about, team, contact, privacy, and terms. |
| TRS-COR-003 | The content model must support service categories, training cards, platform modules, CTAs, placeholder states, and metadata per page. |
| TRS-COR-004 | The design system must support premium colour, cards, dark/light sections, responsive grids, strong hero treatments, and accessible focus states. |
| TRS-COR-005 | Validation must fail if required pages, major sections, or route links are missing. |
| TRS-COR-006 | Validation must fail if the build collapses into a single-page-only scaffold. |
| TRS-COR-007 | Vercel build output must be verified for every public route. |
| TRS-COR-008 | No Supabase/client database/auth/back-end form processing may be added without explicit CS2 scope change. |

---

## 3. Technical Green Standard

The technical implementation is green only when the required multi-page site builds, deploys, validates, and can be browser-tested across routes and viewports.
