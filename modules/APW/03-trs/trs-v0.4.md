# APW Technical Requirements Specification v0.4

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 4 - Technical Requirements Specification |
| Version | v0.4 |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |
| Upstream | FRS v0.4 and FRS v0.4A hardening addendum |

---

## 1. Purpose

This TRS converts FRS v0.4 into technical requirements for the APW public website.

It defines the technical boundary, data structures, rendering behavior, accessibility expectations, public-safe integration rules, and validation expectations required before Architecture v0.4.

This document does not authorize implementation.

---

## 2. Technical Boundary

| ID | Requirement |
|---|---|
| APW-TR-V04-001 | APW v0.4 shall remain compatible with the existing static Astro public-site baseline unless a later approved Architecture changes that boundary. |
| APW-TR-V04-002 | APW v0.4 shall not add Supabase runtime dependencies, authentication, backend form processing, payment processing, learner accounts, or private app surfaces. |
| APW-TR-V04-003 | Public content shall be represented through static or build-time data structures unless later Architecture approves a different public-safe content source. |
| APW-TR-V04-004 | References to Maturion, DMC, AIMC, MMM, PIT, Risk, RADAM, Incident and Intelligence, and Skills shall be public-safe summaries or governed placeholders. |
| APW-TR-V04-005 | No raw private source files, private knowledge records, private system records, or confidential client details shall be rendered or linked from APW. |

---

## 3. Route and Navigation Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-006 | The implementation shall support first-class routes or first-class navigable sections for Security Philosophy, Operational Maturity Roadmap, Consulting and Implementation, Remote Assurance, Digital Tools / Maturion ISMS, Case Studies, Training, and Contact. |
| APW-TR-V04-007 | If any offering is implemented as a section instead of a route, the section shall be addressable through navigation, anchors, or an offering hub and shall have equivalent depth and accessibility. |
| APW-TR-V04-008 | Navigation data shall include label, route or anchor, summary, and CTA metadata for each required offering area. |
| APW-TR-V04-009 | The homepage shall render a journey-selector surface that links to every required offering area. |
| APW-TR-V04-010 | No public route or first-class section shall dead-end; each shall expose at least one next-step CTA. |

---

## 4. Content Model Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-011 | The build shall define structured content models for offering cards, maturity cards, tool cards, case-study cards, and training cards. |
| APW-TR-V04-012 | Offering card records shall include id, title, hoverSummary, detailSummary, maturityRelationship, primaryCta, secondaryCta, and publicStatus. |
| APW-TR-V04-013 | Maturity card records shall include levelName, shortDefinition, detailExplanation, evidenceImplication, nextStep, and recommendedCta. |
| APW-TR-V04-014 | Tool card records shall include toolName, oneLinePurpose, maturityRole, publicPrivateStatus, detailSummary, askMaturionFallback, and nextStepCta. |
| APW-TR-V04-015 | Case-study card records shall include title, anonymizedContext, challenge, approach, resultPattern, relatedCapabilities, publicSafetyNote, and cta. |
| APW-TR-V04-016 | Training card records shall preserve the v0.3 split between classroom/contact delivery and e-learning/public storefront delivery. |
| APW-TR-V04-017 | Training recommendation records shall map topics to approved training cards, Thinkific, or contact paths without inventing unavailable courses. |

---

## 5. Page Composition Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-018 | The homepage shall include a hero, maturity-led proposition, offering cards, Maturion prompt, training CTA, and contact CTA. |
| APW-TR-V04-019 | The Security Philosophy page or section shall include operating view, maturity implication, situational-awareness target state, real-world application, and next steps. |
| APW-TR-V04-020 | The Operational Maturity Roadmap page or section shall include a five-level maturity ladder, model explanation, evidence explanation, long-journey framing, support ecosystem, and CTAs. |
| APW-TR-V04-021 | The Consulting and Implementation page or section shall include advisory role, implementation support, coaching, PIT linkage, and contact CTA. |
| APW-TR-V04-022 | The Remote Assurance page or section shall include review model, control visibility, improvement support, digital-tool linkage, and contact CTA. |
| APW-TR-V04-023 | The Digital Tools / Maturion ISMS page or section shall include tool cards, maturity role, Ask Maturion fallback, approved links/placeholders, and training/contact paths. |
| APW-TR-V04-024 | The Case Studies page or section shall include anonymized cards using challenge, approach, result, related capability, public-safety note, and CTA. |
| APW-TR-V04-025 | The Training page shall preserve the expanded v0.3 classroom/contact and e-learning catalogue model and add cross-links from v0.4 offering/detail surfaces where relevant. |

---

## 6. Interaction Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-026 | Card components shall support visible summary behavior for hover-capable devices and equivalent tap/visible summary behavior for touch and keyboard users. |
| APW-TR-V04-027 | Click/detail behavior may be implemented through route navigation, anchored sections, modal, drawer, or detail panel, subject to accessibility requirements. |
| APW-TR-V04-028 | Every detail surface shall show what the concept is, why it matters, where it fits in the APGI maturity journey, and what the visitor can do next. |
| APW-TR-V04-029 | Ask Maturion UI shall use a single reusable fallback pattern until a live public Maturion endpoint is approved. |
| APW-TR-V04-030 | Ask Maturion fallback destinations shall be limited to coming-soon explanation, Contact APGI, relevant Training, or approved public Maturion/MMM destination. |
| APW-TR-V04-031 | The implementation shall avoid inconsistent Ask Maturion placeholder copy across pages by centralising fallback label and body copy. |
| APW-TR-V04-032 | Train CTAs shall route to APGI Training, Thinkific, or contact delivery paths based on approved training availability. |

---

## 7. Accessibility Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-033 | All interactive cards shall be keyboard reachable. |
| APW-TR-V04-034 | Hover content shall have an equivalent visible or tap-accessible path for mobile and keyboard users. |
| APW-TR-V04-035 | Modal, drawer, or detail-panel implementations shall include visible close controls where applicable. |
| APW-TR-V04-036 | Modal, drawer, or detail-panel implementations shall not trap the user without a clear exit. |
| APW-TR-V04-037 | Interactive controls shall have meaningful accessible names. |
| APW-TR-V04-038 | Long card grids shall remain readable and navigable on mobile widths. |
| APW-TR-V04-039 | Reduced-motion preferences shall be respected for any hover or transition effects. |

---

## 8. Public-Safety and Content Governance Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-040 | Case-study content shall be sourced only from approved public-safe summaries. |
| APW-TR-V04-041 | Case-study rendering shall include no client names, facility names, confidential document names, drawings, layouts, vulnerabilities, or restricted operational detail. |
| APW-TR-V04-042 | Maturion, DMC, AIMC, and ISMS references shall not expose private data sources, private tables, private bucket paths, or private records. |
| APW-TR-V04-043 | Public/private status shall be displayed or implied honestly for tools and Maturion-related CTAs. |
| APW-TR-V04-044 | Coming-soon or placeholder states shall be explicit where functionality is not live. |

---

## 9. Performance and SEO Requirements

| ID | Requirement |
|---|---|
| APW-TR-V04-045 | New pages or sections shall preserve static-site performance characteristics and avoid unnecessary client-side runtime. |
| APW-TR-V04-046 | Page metadata shall include meaningful titles and descriptions for new first-class routes. |
| APW-TR-V04-047 | Navigation labels and headings shall be human-readable and aligned with the v0.4 offering map. |
| APW-TR-V04-048 | The implementation shall avoid hidden critical content that is only available after hover. |

---

## 10. Validation Expectations

| ID | Requirement |
|---|---|
| APW-TR-V04-049 | TRS shall be traceable to FRS v0.4 and FRS v0.4A hardening requirements. |
| APW-TR-V04-050 | Architecture v0.4 shall define how structured content, routes/sections, reusable card components, Ask Maturion fallback, and public-safety controls will be implemented. |
| APW-TR-V04-051 | QA-to-Red v0.4 shall include RED tests for route/section completeness, card behavior, Ask Maturion fallback consistency, Train routing, public-safety boundaries, mobile behavior, and accessibility. |
| APW-TR-V04-052 | Build-to-green shall remain blocked until QA-to-Red v0.4 exists. |

---

## 11. Negative Technical Requirements

APW v0.4 shall not:

- add a Supabase runtime dependency;
- add authentication;
- add backend form processing;
- add payment processing;
- add learner accounts;
- expose DMC/AIMC source records;
- expose private client or project detail;
- implement live public Maturion chat;
- implement MMM, PIT, Risk, RADAM, Incident and Intelligence app functionality inside APW;
- replace or administer Thinkific.

---

## 12. Downstream Gate

Next required stage: Architecture v0.4.

This TRS does not authorize implementation.
