# APW FRS v0.4 Hardening Addendum

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 3 - Functional Requirements Specification |
| Addendum | FRS v0.4 Hardening |
| Version | v0.4A |
| Status | Drafted for focused review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |

---

## 1. Purpose

This addendum hardens FRS v0.4 so the downstream TRS, Architecture, QA-to-Red, and build stages do not have to infer functional intent.

The requirements below supplement `frs-v0.4.md` and must be treated as binding functional requirements for APW v0.4.

---

## 2. Route and Page Completeness Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-041 | The v0.4 build shall provide first-class public routes or clearly navigable first-class public sections for Security Philosophy, Operational Maturity Roadmap, Consulting and Implementation, Remote Assurance, Digital Tools / Maturion ISMS, Case Studies, Training, and Contact. |
| APW-FR-V04-042 | If any offering is implemented as a section rather than a route, it shall still be reachable from homepage navigation or an offering hub and shall have equivalent content depth, headings, CTAs, and accessibility behavior. |
| APW-FR-V04-043 | The homepage shall act as a journey selector that explains APGI's maturity-led proposition and routes visitors into the seven required offering areas. |
| APW-FR-V04-044 | Each required offering area shall include a plain-language overview, value statement, maturity-journey relationship, primary CTA, and at least one onward path. |

---

## 3. Security Philosophy Functional Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-045 | The Security Philosophy area shall explain that operational environments create changing loss opportunities and control demands. |
| APW-FR-V04-046 | The Security Philosophy area shall explain that security improvement depends on understanding work activities, people, controls, evidence, and accountability. |
| APW-FR-V04-047 | The Security Philosophy area shall introduce real-time situational awareness as a target operating state without implying live monitoring by APW itself. |
| APW-FR-V04-048 | The Security Philosophy area shall connect the philosophy to maturity progression from Basic/Reactive to Proactive/Resilient. |
| APW-FR-V04-049 | The Security Philosophy area shall route visitors to Operational Maturity Roadmap, Consulting and Implementation, Remote Assurance, and Training. |

---

## 4. Operational Maturity Roadmap Functional Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-050 | The Operational Maturity Roadmap area shall include a five-level maturity ladder or equivalent visual/structured progression. |
| APW-FR-V04-051 | The maturity ladder shall explain Basic, Reactive, Compliant, Proactive, and Resilient in visitor-friendly language. |
| APW-FR-V04-052 | The roadmap area shall explain how domains, MPSs, criteria, maturity descriptors, evidence, and gap-to-next-level guidance relate to each other. |
| APW-FR-V04-053 | The roadmap area shall explain that maturity improvement may be a long-term journey rather than a quick checklist exercise. |
| APW-FR-V04-054 | The roadmap area shall show how consulting, PIT, RADAM, remote assurance, training, and Maturion support the journey. |
| APW-FR-V04-055 | The roadmap area shall provide CTAs to Consulting and Implementation, Digital Tools / Maturion ISMS, Remote Assurance, Training, and Contact. |

---

## 5. Digital Tools / Maturion ISMS Functional Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-056 | Each tool card shall include a tool name, one-line purpose, maturity role, public/private status, and next-step CTA. |
| APW-FR-V04-057 | The Digital Tools area shall explain Maturion as the AI guide across the ecosystem without implying unapproved public AI access. |
| APW-FR-V04-058 | MMM shall be presented as the maturity roadmap and evidence/scoring backbone. |
| APW-FR-V04-059 | PIT shall be presented as the implementation and action-tracking pathway that turns improvement intent into managed work. |
| APW-FR-V04-060 | Risk shall be presented as the method for identifying, rating, prioritising, and treating exposure. |
| APW-FR-V04-061 | RADAM / data analytics shall be presented as an assurance and anomaly-awareness capability, subject to public-safe wording. |
| APW-FR-V04-062 | Incident and Intelligence shall be presented as workflow, escalation, evidence, and learning support, not as a public incident system. |
| APW-FR-V04-063 | Skills / Training shall be presented as the capability-building component of the maturity journey. |

---

## 6. Interaction Mapping Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-064 | Offering cards shall support hover/summary, click/detail, Ask/Contact, and Train/Explore next-step behavior. |
| APW-FR-V04-065 | Maturity cards shall support hover/summary, click/detail, Ask Maturion fallback, and training/contact next-step behavior. |
| APW-FR-V04-066 | Tool cards shall support hover/summary, click/detail, approved link/contact behavior, and Ask Maturion fallback. |
| APW-FR-V04-067 | Case-study cards shall support hover/summary, click/detail, related offering links, and Contact APGI. |
| APW-FR-V04-068 | Training cards shall support hover/summary, click/detail, Thinkific where public e-learning applies, and Contact where classroom/group delivery applies. |
| APW-FR-V04-069 | Ask Maturion fallback shall use consistent wording and route to one of: coming-soon explanation, Contact APGI, relevant Training, or approved public Maturion/MMM destination. |
| APW-FR-V04-070 | The build shall not scatter inconsistent Ask Maturion placeholder text across pages. |

---

## 7. Training Recommendation Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-071 | Training recommendations shall be based only on approved APGI training offerings or approved contact pathways. |
| APW-FR-V04-072 | VPSHR-related topics shall route toward VPSHR training or contact pathways. |
| APW-FR-V04-073 | Risk, maturity, implementation, and assurance topics shall route toward relevant training, consulting, digital tools, or contact pathways without inventing unavailable courses. |
| APW-FR-V04-074 | The Train step shall never imply automatic enrolment, learner accounts, or payment processing inside APW. |

---

## 8. Case Study Functional Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-075 | Case-study cards shall use a challenge, approach, result, and related capability structure. |
| APW-FR-V04-076 | Case studies shall include an anonymised/public-safe framing statement where needed. |
| APW-FR-V04-077 | Case studies shall not disclose client names, facility names, confidential document names, drawings, layouts, vulnerabilities, or restricted operational detail. |
| APW-FR-V04-078 | Case studies shall link back to relevant offering areas such as Security Philosophy, Remote Assurance, Digital Tools, Consulting, or Training. |

---

## 9. Accessibility and Mobile Testability Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-079 | All interactive cards shall be reachable by keyboard. |
| APW-FR-V04-080 | Hover content shall have an equivalent visible or tap-accessible mobile and keyboard path. |
| APW-FR-V04-081 | Modal or drawer detail surfaces shall include visible close controls. |
| APW-FR-V04-082 | Modal or drawer detail surfaces shall not trap users without a clear exit. |
| APW-FR-V04-083 | Interactive controls shall have meaningful accessible names. |
| APW-FR-V04-084 | Long card grids shall remain readable and navigable on mobile widths. |

---

## 10. Build-Level Functional Success Criteria

The eventual v0.4 build shall be considered functionally green only when:

- each required offering route or first-class section exists;
- the homepage routes visitors into every required offering area;
- each card family renders meaningful public-safe content;
- each card has hover/summary and click/detail behavior or approved accessible equivalent;
- each detail surface provides a useful next step;
- Ask Maturion fallback behavior is consistent;
- training/contact routes are present and accurate;
- case-study content is anonymised and public-safe;
- no private system, private data, backend form, auth, payment, or live public AI integration is introduced without approval;
- desktop and mobile routes are verified during QA-to-Red and build validation.

---

## 11. Downstream Gate

This addendum hardens FRS v0.4 only.

Next required stage after focused FRS review: TRS v0.4.

This artifact does not authorize implementation.
