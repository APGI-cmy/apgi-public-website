# APW Functional Requirements Specification v0.4

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 3 - Functional Requirements Specification |
| Version | v0.4 |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |
| Upstream | APW v0.4 App Description and UX Workflow/Wiring |

---

## 1. Purpose

This FRS converts the v0.4 App Description and UX Workflow into functional requirements.

The requirements define what the public website must do in the next build wave. They do not define technical implementation details and do not authorize build work before TRS, Architecture, and QA-to-Red are complete.

---

## 2. Functional Requirements

| ID | Requirement |
|---|---|
| APW-FR-V04-001 | The website shall present APGI as a maturity-led advisory, training, assurance, and technology-enabled organisation. |
| APW-FR-V04-002 | The website shall present one coherent visitor journey rather than disconnected service, training, and tool fragments. |
| APW-FR-V04-003 | The homepage shall introduce APGI's maturity-led value proposition within the primary hero or first content section. |
| APW-FR-V04-004 | The homepage shall provide visible paths to Security Philosophy, Operational Maturity Roadmap, Consulting and Implementation, Remote Assurance, Digital Tools / Maturion ISMS, Case Studies, Training, and Contact. |
| APW-FR-V04-005 | The website shall provide or prepare a Security Philosophy public offering area. |
| APW-FR-V04-006 | The Security Philosophy area shall explain APGI's view of security as a maturity journey tied to work, people, controls, evidence, and improvement. |
| APW-FR-V04-007 | The website shall provide or prepare an Operational Maturity Roadmap public offering area. |
| APW-FR-V04-008 | The Operational Maturity Roadmap area shall explain Basic, Reactive, Compliant, Proactive, and Resilient maturity states in plain language. |
| APW-FR-V04-009 | The Operational Maturity Roadmap area shall explain domains, Minimum Performance Standards, criteria, descriptors, evidence, and gap-to-next-level guidance without overwhelming the visitor. |
| APW-FR-V04-010 | The website shall provide or prepare a Consulting and Implementation offering area. |
| APW-FR-V04-011 | The Consulting and Implementation area shall explain how APGI helps translate maturity requirements into practical improvement work. |
| APW-FR-V04-012 | The website shall provide or prepare a Remote Assurance offering area. |
| APW-FR-V04-013 | The Remote Assurance area shall explain independent review, control visibility, improvement support, and assurance feedback. |
| APW-FR-V04-014 | The website shall provide or prepare a Digital Tools / Maturion ISMS offering area. |
| APW-FR-V04-015 | The Digital Tools / Maturion ISMS area shall explain the role of Maturion, MMM, PIT, Risk, RADAM, Incident and Intelligence, and Skills / Training as maturity accelerators. |
| APW-FR-V04-016 | The website shall provide or prepare a Case Studies offering area. |
| APW-FR-V04-017 | The Case Studies area shall present only public-safe, anonymized proof patterns and examples. |
| APW-FR-V04-018 | The website shall preserve and continue the expanded Training page direction from v0.3. |
| APW-FR-V04-019 | The Training area shall remain split between classroom/contact delivery and e-learning/public storefront pathways. |
| APW-FR-V04-020 | The website shall support offering cards for Security Philosophy, Maturity Roadmap, Consulting, Remote Assurance, Digital Tools, Case Studies, and Training. |
| APW-FR-V04-021 | The website shall support maturity cards for Basic, Reactive, Compliant, Proactive, and Resilient. |
| APW-FR-V04-022 | The website shall support tool cards for Maturion, MMM, PIT, Risk, RADAM, Incident and Intelligence, and Skills / Training. |
| APW-FR-V04-023 | The website shall support case-study cards using challenge, approach, and result framing where content is approved. |
| APW-FR-V04-024 | The website shall support the public interaction model Hover -> Click -> Ask -> Train. |
| APW-FR-V04-025 | Hover or equivalent visible summary behavior shall provide a short plain-language explanation. |
| APW-FR-V04-026 | Hover-only information shall not be required for mobile or keyboard users. |
| APW-FR-V04-027 | Clicking a card shall provide deeper context through a page section, detail surface, drawer, modal, or equivalent accessible pattern. |
| APW-FR-V04-028 | Each detail surface shall explain what the concept is, why it matters, where it fits in the APGI maturity journey, and what the visitor can do next. |
| APW-FR-V04-029 | The website shall include an Ask Maturion call to action or placeholder where relevant. |
| APW-FR-V04-030 | Ask Maturion shall not imply live AI chat or private knowledge access before an approved integration exists. |
| APW-FR-V04-031 | Ask Maturion fallback behavior shall route to a coming-soon note, contact path, training recommendation, or approved public Maturion/MMM destination. |
| APW-FR-V04-032 | Topic surfaces with learning implications shall route visitors toward APGI Training, Thinkific, or classroom/group contact paths. |
| APW-FR-V04-033 | Every major page and major section shall provide at least one useful next step. |
| APW-FR-V04-034 | The website shall provide direct Contact APGI paths without backend form capture unless separately approved. |
| APW-FR-V04-035 | The website shall support desktop and mobile browsing for long card grids and offering lists. |
| APW-FR-V04-036 | The website shall support keyboard access, focus states, mobile tap behavior, modal close controls, meaningful button labels, and readable layouts. |
| APW-FR-V04-037 | The website shall use approved public summaries, governed placeholders, or approved public links for Maturion, DMC, AIMC, and ISMS references. |
| APW-FR-V04-038 | The website shall not expose private source records, private client details, private knowledge files, private app surfaces, or non-public working records. |
| APW-FR-V04-039 | The website shall not implement live public Maturion chat until a later integration wave is approved. |
| APW-FR-V04-040 | The website shall remain compatible with the existing static public-site baseline unless a later approved architecture changes that boundary. |

---

## 3. Negative Functional Requirements

The v0.4 website shall not:

- add Supabase runtime dependency inside APW without later approval;
- expose DMC or AIMC records directly;
- expose private client or project details;
- add authentication;
- add learner accounts;
- add backend contact-form processing;
- add payment processing inside APW;
- imply live Maturion chat before it exists;
- replace Thinkific or administer Thinkific;
- implement app functionality from MMM, PIT, Risk, RADAM, or Incident and Intelligence inside APW.

---

## 4. Functional Acceptance Criteria

FRS v0.4 is acceptable when it defines:

- required public offering areas;
- required maturity explanation behavior;
- required card families;
- Hover -> Click -> Ask -> Train behavior;
- Maturion fallback behavior;
- training and contact conversion behavior;
- accessibility and mobile functional expectations;
- public-safe knowledge and case-study boundaries;
- negative requirements that protect APW from becoming a private app surface.

---

## 5. Downstream Gate

Next required stage: TRS v0.4.

This artifact does not authorize implementation.
