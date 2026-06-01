# APW Corrective UX Workflow Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 2 - UX Workflow & Wiring Spec corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` v0.2 |
| Corrective Trigger | PR #11 functional scaffold failed fully functional design-quality expectation |

---

## 1. Corrective UX Finding

The previous UX flow allowed a single-page scaffold to pass too much of the route/navigation journey. That is no longer sufficient.

The upgraded APW UX must be multi-page, design-led, content-rich, and conversion-oriented.

---

## 2. Required User Journeys

| Journey | Required UX Outcome |
|---------|---------------------|
| Premium brand landing | Visitor immediately understands APGI, trusts the brand, and is invited into deeper content. |
| Services exploration | Visitor can open a dedicated services page and review meaningful service categories. |
| Platform/app exploration | Visitor can open a dedicated platform page and understand APGI ecosystem modules/submodules. |
| Training exploration | Visitor can open a dedicated training page, review training offerings, and reach Thinkific. |
| Contact conversion | Visitor can reach direct contact actions from home and contact page. |
| Mobile exploration | Visitor can complete all core journeys on mobile without collapsed or thin design. |
| Legal/trust review | Visitor can reach privacy/terms or governed placeholders without broken links. |

---

## 3. Required Routes

The upgraded UX must include homepage, services, platform/app, training, about, team, contact, privacy, and terms routes or equivalent static pages.

A one-page-only implementation is RED.

---

## 4. UX Build-to-Green Gate

The upgraded UX is green only when the visitor experience feels intentionally designed and encourages exploration across multiple pages.

A build that only renders a generic landing page is not green, even if it deploys successfully.
