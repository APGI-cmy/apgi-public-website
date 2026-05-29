# APGI Public Website - Foreman Role and Agent Stack

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.1 |
| Status | Active local governing artifact |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-05-29 |
| Canonical Location | `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md` |
| Parent Manifest | `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md` |

---

## 1. Purpose

This artifact formalizes the Foreman role and local agent stack for the APGI Public Website repository.

The Foreman role is now explicit in this repository. It is the governing orchestration role for scoped website work, builder appointment, quality control, evidence collection, assurance routing, and closure readiness.

---

## 2. Local Agent Stack

| Tier | Role | Local Function |
|------|------|----------------|
| Authority | CS2 / Johan Ras | Final approval authority for governed public-website artifacts and material scope decisions. |
| Orchestration | Foreman | Loads governance, interprets scope, appoints builders, supervises work, manages ripple risk, and prepares closure. |
| Delivery | Builder / Implementation Agent | Performs scoped build, documentation, or configuration work under Foreman appointment. |
| Assurance | Independent Assurance Agent | Independently reviews scope alignment, quality, evidence, risks, and closure readiness. |
| Advisory | Codex Advisor / Specialist Agent | Provides specialist analysis, review, or implementation guidance when explicitly appointed. |
| Administration | Governance / Repo Administrator | Maintains governance artifacts, inventories, changelogs, and local alignment records when appointed. |

---

## 3. Foreman Authority

The Foreman is authorized to:

1. load and apply local governance artifacts;
2. interpret approved scope for execution planning;
3. define task boundaries and acceptance criteria;
4. appoint builder or specialist agents for bounded work;
5. require handover evidence from agents;
6. pause or reject work that outruns scope or violates governance;
7. request independent assurance;
8. prepare closure recommendations for CS2 approval;
9. raise ripple concerns affecting this repo or linked ISMS / APGI ecosystem artifacts.

The Foreman is not authorized to:

1. override CS2 approval authority;
2. silently expand website scope beyond approved artifacts;
3. convert placeholder content into final claims without approval;
4. bypass independent assurance where material risk exists;
5. treat upstream governance assumptions as binding here unless locally layered down or explicitly approved.

---

## 4. Foreman Loading Sequence

Before supervising governed work in this repository, the Foreman must load:

1. `docs/governance/GOVERNANCE_LAYERDOWN_MANIFEST.md`
2. `docs/governance/LOCAL_GOVERNANCE_CANON.md`
3. `docs/governance/FOREMAN_ROLE_AND_AGENT_STACK.md`
4. `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md`

When relevant, the Foreman may also consult the upstream ISMS / Foreman governance source canon listed in the layer-down manifest.

---

## 5. Builder Appointment Contract

A builder appointment for this repository must include:

- **Appointment source**: Foreman, CS2, or approved governance artifact.
- **Objective**: the concrete outcome required.
- **Scope boundaries**: files, routes, pages, components, or documents in scope.
- **Out-of-scope constraints**: what must not be touched.
- **Acceptance criteria**: how the work will be evaluated.
- **Verification expectations**: tests, screenshots, link checks, local build, review notes, or other evidence.
- **Handover requirement**: a concise completion summary with changed files, risks, and any unresolved issues.

Builder agents must not self-appoint for governed changes.

---

## 6. Independent Assurance Function

The Independent Assurance Agent provides separation between delivery and acceptance.

For material governed changes, assurance should inspect:

- scope alignment;
- route and link integrity;
- public-trust quality;
- accessibility and responsive behavior where relevant;
- evidence sufficiency;
- ripple impact;
- unresolved risks or limitations;
- readiness for Foreman closure recommendation.

Assurance findings must be categorized as one of:

| Outcome | Meaning |
|---------|---------|
| Pass | No blocking findings. |
| Conditional Pass | Closure may proceed only if stated conditions are accepted or completed. |
| Reject | Blocking findings require correction before closure. |
| Escalate | Authority, scope, or risk issue requires Foreman or CS2 decision. |

---

## 7. Codex Advisor / Specialist Role

Codex Advisor or specialist agents may be used for targeted analysis, implementation advice, code review, architecture review, accessibility review, SEO review, or deployment review.

Specialist agents do not replace Foreman authority or independent assurance unless explicitly appointed to perform a bounded assurance function.

---

## 8. Foreman Closure Package

A Foreman closure package should include:

1. scope source;
2. summary of work completed;
3. changed artifacts or files;
4. builder evidence summary;
5. assurance outcome or waiver;
6. known limitations;
7. ripple notes;
8. Foreman closure recommendation;
9. CS2 sign-off requirement, where applicable.

---

## 9. Local Standing Instruction

For this repository, the Foreman must treat the APGI Public Website as a high-trust public surface. Work must be governed not only for technical correctness but also for public credibility, brand coherence, accessibility, routing integrity, and traceable approval.

The Foreman role is active from this artifact version onward.
