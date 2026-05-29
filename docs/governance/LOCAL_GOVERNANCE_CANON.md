# APGI Public Website - Local Governance Canon

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.1 |
| Status | Active local governing artifact |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-05-29 |
| Canonical Location | `docs/governance/LOCAL_GOVERNANCE_CANON.md` |
| Parent Manifest | `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md` |

---

## 1. Purpose

This canon defines the local governance rules for the APGI Public Website repository.

It translates the ISMS / Foreman governance canon into a lightweight local operating model suitable for a public website repository while preserving governed delivery, role clarity, traceability, quality controls, and authority boundaries.

---

## 2. Scope

This canon applies to all governed work in this repository, including:

- application description and governance documentation;
- website design, implementation, content structure, routing, deployment, and release preparation;
- app hub links into the ISMS ecosystem;
- external link-outs to LinkedIn, Thinkific, and related destinations;
- future contact-form, CMS, analytics, SEO, or social-preview integrations;
- agent-led work, delegated implementation, assurance, and sign-off packages.

This canon does not convert the public website into a system of record. The public website remains a marketing, trust, and routing layer.

---

## 3. Governing Principles

### 3.1 Local Governance Must Be Explicit

Governance in this repository must be documented locally. Agents may reference upstream governance repositories, but the active rules for this repository must be discoverable in `docs/governance`.

### 3.2 Foreman Authority Must Be Formalized

The Foreman role is the explicit local orchestration role for governed website work. Foreman authority must not be treated as implied, informal, or dependent on tribal context from the ISMS repository.

### 3.3 Scope Must Bind Delivery

Every governed implementation wave must be traceable to a scope source, such as:

- `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`;
- an approved implementation plan;
- a Foreman-issued task package;
- a CS2-approved instruction.

Implementation must not outrun approved scope.

### 3.4 Builder Work Must Be Appointed

Builder or implementation agents must have a clear appointment source before performing governed changes. The appointment must define:

- task objective;
- files or areas in scope;
- out-of-scope boundaries;
- acceptance criteria;
- required evidence or handover material.

### 3.5 Assurance Must Remain Independent

Independent Assurance Agent activity must remain separate from builder delivery. Assurance may inspect, reject, request correction, or escalate but must not silently absorb builder responsibility.

### 3.6 Ripple Awareness Is Mandatory

Agents must consider downstream effects before modifying routes, app hub references, links, governance documentation, deployment configuration, SEO metadata, content hierarchy, or externally visible trust signals.

### 3.7 Fully Functional Means Usable, Routed, and Verifiable

Website delivery must be judged against functional outcomes, not merely file changes. A completed change must be coherent, accessible, responsive where applicable, routed correctly, and supported by appropriate verification evidence.

---

## 4. Local Governance Gates

### Gate 1 - Scope Readiness

Before implementation, confirm the work has an approved source of scope and does not conflict with the app description.

### Gate 2 - Foreman Loading

Before orchestration or delegation, Foreman must load the local governance set:

1. `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md`
2. `docs/governance/LOCAL_GOVERNANCE_CANON.md`
3. `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`
4. `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`

### Gate 3 - Builder Appointment

Before build work begins, Foreman must issue or confirm a builder task package with scope, constraints, acceptance criteria, and handover expectations.

### Gate 4 - Build Evidence

Builder output must include sufficient evidence for Foreman and assurance review. Evidence may include summary, changed files, screenshots, tests, link checks, deployment notes, or known limitations.

### Gate 5 - Independent Assurance

Material governed changes require independent assurance or an explicit CS2 waiver. Assurance should evaluate scope alignment, quality, risks, regressions, and governance traceability.

### Gate 6 - Closure / Sign-Off

Foreman may recommend closure only when scope, build evidence, assurance outcome, and known limitations are documented. CS2 / Johan Ras retains final authority where approval is required.

---

## 5. Repository-Specific Controls

### 5.1 Public Website Boundary

The website may present APGI, training, proof points, contact pathways, and app hub tiles. It must not become the operational backend for Thinkific, ISMS apps, CRM, staff-only tooling, or internal system-of-record workflows unless separately approved.

### 5.2 Route and Link Integrity

Routes, external links, app hub tiles, and social-preview metadata are governed surface areas. They require verification before closure.

### 5.3 Placeholder Honesty

Placeholder content is permitted only where it is deliberate, visible to maintainers, and documented. Placeholder content must not masquerade as final proof, testimonial, operational capability, or customer commitment.

### 5.4 Public Trust Standard

The website is a high-trust public artifact. Visual polish, credibility, accessibility, responsive behavior, and clear navigation are governance-relevant quality requirements.

### 5.5 Cross-App References

Any reference to ISMS applications, app tiles, frozen route-slug maps, or linked governed applications must preserve canonical paths and must not imply capabilities that the linked app does not provide.

---

## 6. Escalation Rules

Escalate to Foreman when:

- scope is unclear or conflicting;
- a change may affect app routing, trust posture, external links, or canonical descriptions;
- a builder cannot satisfy acceptance criteria;
- assurance rejects or conditionally approves a change;
- upstream canon appears inconsistent with this local repository.

Escalate to CS2 / Johan Ras when:

- authority is unclear;
- public commitments, legal claims, or brand-critical content are affected;
- governance conflicts cannot be resolved locally;
- final approval or sign-off is required.

---

## 7. Maintenance

This canon must be updated when:

- upstream Foreman / ISMS canon materially changes;
- the website scope changes;
- new agent roles are formally added;
- new governed integrations are introduced;
- assurance identifies governance gaps.

Updates to this document must preserve local clarity. Do not replace local rules with vague references to upstream repositories.
