# APW UX Workflow and Wiring v0.4

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 2 - UX Workflow and Wiring |
| Version | v0.4 |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |
| Upstream | APW v0.4 App Description Alignment |

---

## 1. Purpose

This artifact defines the UX journeys and wiring needed to turn the v0.4 offering map into a coherent public website experience.

The website must guide visitors through APGI's maturity-led value proposition and then route them toward the correct next step: learn, ask, contact, train, or explore the Maturion ecosystem.

This stage does not authorize implementation.

---

## 2. Primary Visitor Journeys

| Journey | Entry Trigger | Desired Outcome |
|---|---|---|
| Understand APGI thinking | Homepage, Security Philosophy card, Services page | Visitor understands APGI's maturity-led view of security and operational improvement. |
| Explore maturity roadmap | Homepage, Platform page, Maturity Roadmap card | Visitor understands Basic to Resilient maturity and follows the roadmap path. |
| Request consulting support | Consulting page, service cards, maturity gaps | Visitor reaches Contact with the right context. |
| Explore remote assurance | Remote Assurance card or page | Visitor understands independent review, control visibility, and improvement support. |
| Explore digital tools | Digital Tools / Maturion ISMS page | Visitor understands MMM, PIT, Risk, RADAM, Incident and Intelligence, and Skills as connected maturity accelerators. |
| Review case studies | Case Studies page | Visitor sees public-safe examples of APGI thinking in practice. |
| Enter training | Training page, Maturion prompts, offering cards | Visitor is routed to classroom contact path or public Thinkific storefront. |

---

## 3. Page-Level Wiring

| Page | Primary Role | Required Outbound Paths |
|---|---|---|
| Home | Front door and journey selector | Security Philosophy, Maturity Roadmap, Digital Tools, Training, Contact. |
| Security Philosophy | Explain APGI's thinking | Maturity Roadmap, Consulting, Remote Assurance, Training. |
| Operational Maturity Roadmap | Explain levels, domains, MPSs, criteria, evidence | Digital Tools, Consulting, Remote Assurance, Training. |
| Consulting and Implementation | Explain advisory and implementation support | Contact, Maturity Roadmap, PIT / Digital Tools. |
| Remote Assurance | Explain control visibility and independent review | Contact, Digital Tools, Case Studies. |
| Digital Tools / Maturion ISMS | Explain app ecosystem | MMM, PIT, Risk, RADAM, Incident and Intelligence, Training. |
| Case Studies | Show public-safe proof patterns | Contact, Security Philosophy, Remote Assurance. |
| Training | Show learning catalogue | Thinkific, Contact, relevant offering pages. |
| Contact | Convert interest into direct handoff | Email, phone, office, no backend capture. |

---

## 4. Hover -> Click -> Ask -> Train

### Hover

Cards for offerings, tools, maturity concepts, and case studies should expose a short one-line meaning.

### Click

Clicking a card should open either a dedicated page section or a modal/detail surface with deeper explanation.

### Ask

The detail surface should include an Ask Maturion prompt.

For v0.4 prebuild, Ask Maturion may be a governed placeholder or contact/training pathway until a public-safe Maturion endpoint is approved.

### Train

Where the topic has a learning implication, the UX must route the visitor toward APGI training, the public Thinkific storefront, or a contact path for classroom/group delivery.

---

## 5. Maturion UX Boundary

Maturion may be introduced as the AI guide across the APGI/Maturion ecosystem.

The public website must not assume live AI chat until a later approved integration wave defines endpoint, scope, logging, usage control, and safety boundaries.

The initial UX may render Ask Maturion as:

- a modal CTA marked as coming soon;
- a contact CTA asking APGI to explain the topic;
- a training CTA pointing to relevant APGI learning;
- a link to an approved Maturion/MMM destination when available.

---

## 6. Mobile and Accessibility Wiring

The v0.4 UX must support:

- keyboard access to cards and modals;
- focus-visible states;
- close controls for modals;
- non-hover fallback on mobile;
- readable card grids for long offering lists;
- no hover-only critical information;
- clear CTAs with meaningful labels.

---

## 7. Conversion Wiring

Every major page must contain at least one direct next step:

- Contact APGI.
- Explore training.
- Open public Thinkific storefront.
- Explore Maturion/MMM when approved.
- Read a relevant case study.

No page may dead-end.

---

## 8. Data and Content Boundary

The UX may reference Maturion, APGI knowledge, and the Maturion ecosystem.

The UX must not expose private source records, private knowledge files, or private system surfaces.

Public copy must use approved summaries, governed placeholders, or approved public links.

---

## 9. Acceptance Criteria

Stage 2 v0.4 is acceptable when:

- all required offering pages have a defined journey role;
- Hover -> Click -> Ask -> Train is translated into UX behavior;
- Maturion interaction is explicitly gated until later technical approval;
- training and contact conversion paths are wired;
- mobile and accessibility behavior is accounted for;
- no implementation is authorized before downstream FRS, TRS, Architecture, and QA-to-Red are complete.

---

## 10. Downstream Gate

Next required stage: FRS v0.4.

This artifact does not authorize implementation.
