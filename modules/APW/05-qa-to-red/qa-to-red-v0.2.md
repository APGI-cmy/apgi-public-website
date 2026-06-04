# APW Stage 6 - QA-to-Red v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red |
| Folder | `modules/APW/05-qa-to-red` |
| Version | v0.2 - Corrective Canon-Aligned RED Suite |
| Status | Draft for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-04 |
| Upstream Architecture | `modules/APW/04-architecture/architecture.md` v0.2A |
| Architecture Checklist | `modules/APW/04-architecture/architecture-completeness-checklist-v0.2.md` |
| Environment Example | `.env.example` |

---

## 1. Purpose

This artifact converts the corrected APW Architecture v0.2A and architecture completeness checklist into a RED verification suite.

The suite is intentionally RED before implementation. A later builder must turn each item green through implementation evidence and deployment proof.

This artifact does not authorize implementation.

---

## 2. Source Stack

| Source | Role in Stage 6 |
|--------|-----------------|
| App Description v0.2 | Product definition and design standard. |
| UX Workflow v0.2 | Multi-page journeys and wiring. |
| FRS v0.2 | Functional requirements. |
| TRS v0.2 | Technical requirements. |
| Architecture v0.2A | Route, content, design, validation, deployment, and evidence architecture. |
| Architecture completeness checklist | Canon completeness, env/config, wiring, E2E paths, evidence, QA seeds. |
| `.env.example` | Public configuration expectations. |
| Tracker | Current corrective stage state. |

---

## 3. QA-to-Red Rule

Each QA item must include:

- Test ID;
- Source;
- Layer;
- Description;
- RED Condition;
- Acceptance Criteria;
- Clean handover summary.

No item may rely on hidden TODO, TBD, or unstated downstream assumptions.

---

## 4. Test Domains

| Domain | Name | Intent |
|--------|------|--------|
| D1 | Route architecture and page render | Prove every required public page exists and renders. |
| D2 | Navigation, CTA, and mobile menu wiring | Prove header/footer/mobile nav and CTA behavior. |
| D3 | Services depth and conversion | Prove Services content depth and contact path. |
| D4 | Platform/APGI Hub behavior | Prove module rendering, link composition, and pending states. |
| D5 | Training and Thinkific handoff | Prove Training content, course cards, Thinkific handoff, and admin exclusion. |
| D6 | Contact handoffs | Prove public email/phone handoffs and no lead capture workflow. |
| D7 | Design-system visibility | Prove premium visual system and anti-scaffold quality. |
| D8 | Accessibility basics | Prove semantic structure, focus, keyboard, labels, and reduced motion. |
| D9 | Responsive behavior | Prove mobile/tablet/desktop layout and no critical overflow. |
| D10 | Metadata and social readiness | Prove route metadata and approved public claims. |
| D11 | Environment, deployment, and Vercel evidence | Prove public config, build command, output directory, and deployment evidence. |
| D12 | Public-only boundary | Prove no database, auth, private API, form backend, secret, or personal data storage. |
| D13 | Governance and build-to-green gate | Prove stage sequencing, evidence completeness, and no build before gates. |

---

## 5. Stage 6 Artifact Package

| Artifact | Purpose |
|----------|---------|
| `qa-to-red-v0.2.md` | Stage overview and active v0.2 source. |
| `qa-to-red-catalog.md` | Full RED test catalog. |
| `journey-coverage.md` | User journey and E2E coverage. |
| `requirement-traceability.md` | Requirement-to-test mapping. |
| `architecture-alignment.md` | Architecture and canon checklist to QA mapping. |
| `qa-catalog-alignment.md` | QA catalog integrity and no-TBD check. |
| `foreman-signoff-package.md` | Stage signoff and downstream gate record. |

---

## 6. Handover

Corrective Stage 7 PBFAG must verify that every RED check is traceable, source-backed, and ready to constrain implementation planning.

No upgraded implementation is authorized by Stage 6.
