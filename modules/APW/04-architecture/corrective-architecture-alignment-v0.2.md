# APW Corrective Architecture Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | Corrective TRS Alignment v0.2 |

---

## 1. Corrective Architecture Finding

The previous architecture did not make the upgraded design system and multi-page structure strict enough. PR #11 could satisfy the route/build path with a thin one-page scaffold.

The upgraded architecture must make route depth, design system, content model, and evidence model explicit.

---

## 2. Required Architecture Corrections

| ID | Architecture Correction |
|----|-------------------------|
| ARCH-COR-001 | Define a multi-page public route architecture, not a one-page section-only site. |
| ARCH-COR-002 | Add dedicated page templates for services, platform/app, training, about, team, contact, privacy, and terms. |
| ARCH-COR-003 | Add a design-system layer: palette, typography, section treatments, cards, CTAs, responsive grids, dark/light bands, focus states, and reduced-motion support. |
| ARCH-COR-004 | Add a content architecture for services, training offerings, platform modules, CTAs, placeholders, and metadata per route. |
| ARCH-COR-005 | Add a validation architecture that fails missing pages, missing major content domains, and generic one-page scaffold output. |
| ARCH-COR-006 | Preserve static-first/Vercel deployment and public-only scope. |

---

## 3. Architecture Green Standard

Architecture is green only when a future builder can implement a polished, multi-page APW site without inventing route structure, content model, design system, or evidence obligations during implementation.
