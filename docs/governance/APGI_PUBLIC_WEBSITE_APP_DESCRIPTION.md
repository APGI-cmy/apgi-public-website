# APGI Public Website - App Description

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.1 |
| Status | Draft |
| Owner | Johan Ras |
| Approval Date | N/A |
| Last Updated | 2026-05-29 |
| Authority | Johan Ras |
| Canonical Location | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` |
| Policy Authority | `governance/policy/APP_DESCRIPTION_REQUIREMENT_POLICY.md` v2.0 |

---

## §1 — Application Identity

- **Application Name**: APGI Public Website
- **Purpose**: A modern, high-trust public website for Assurance Protection Group Inc. that presents the brand, markets training, and acts as the central launch hub for APGI's digital ecosystem, including Thinkific courses and linked ISMS applications.
- **Target Users / Audience**:
  - Prospective clients
  - Current clients and partners
  - Course learners and training prospects
  - APGI staff and collaborators
  - Returning visitors from LinkedIn and Thinkific
- **Core Value Proposition**:
  - Give visitors a clear, premium first impression of APGI.
  - Convert interest into enquiries, course sign-ups, or app exploration.
  - Unify the APGI website, LinkedIn presence, Thinkific training, and ISMS app ecosystem under one navigable front door.

---

## §2 — Scope Definition

### In Scope

- Recreate the APGI public site as a modern, responsive, Vercel-hosted website.
- Preserve and modernize the current company story, training offer, client proof, philanthropy, and contact pathways.
- Add a polished APGI hub section that links to the frozen v1 public ISMS marketing routes and any later governed expansions.
- Include clear external link-outs to LinkedIn and Thinkific.
- Include a featured training area for the current course surface, including the VPSHR Level 0 course.
- Include placeholder content slots so copy, proof points, testimonials, and app tiles can be tuned progressively.
- Support SEO, social sharing metadata, and link previews that work well when shared from LinkedIn.
- Provide a mobile-first, accessible, visually distinctive design with modern motion and strong brand presence.

### Explicitly Out of Scope

- Replacing Thinkific as the learning management system.
- Rebuilding the training delivery backend inside the public website.
- Recreating the ISMS apps themselves inside this website.
- Building a full CRM, marketing automation suite, or internal admin console inside the public site.
- Using the LinkedIn feed URL as a canonical public destination.
- Scraping or synchronizing LinkedIn data directly into the site.
- Exposing staff-only or management-only tools in the public navigation unless explicitly approved.

### Boundaries and Constraints

- The public website is a marketing and routing layer, not a system of record.
- Thinkific remains the system of record for course delivery and management.
- LinkedIn remains the social proof and discovery channel, but the website must own the canonical brand narrative.
- App tiles that lead into the ISMS ecosystem resolve through a frozen route-slug map at deploy time; the host may vary by environment, but the route paths are canonical.
- Any later contact-form, CMS, or analytics integration must be added as a deliberate artifact, not as an accidental code shortcut.

---

## §3 — Success Criteria

- A first-time visitor understands who APGI is, what it offers, and where to go next within 10 seconds.
- The site presents a premium, contemporary, and credible visual identity on both desktop and mobile.
- Every primary link works: APGI home, LinkedIn, Thinkific, course pages, contact actions, and selected app hub tiles.
- The site includes explicit placeholder slots for tuning content without requiring structural redesign.
- Social previews are strong enough to share cleanly from LinkedIn and other platforms.
- The site is deployable on Vercel with fast page loads, good SEO, and accessible markup.
- The design should feel intentional and differentiated, not like a generic template.
- Definition of Done for the application: the public site is live, visually coherent, responsive, accessible, and routed correctly, with all intended external destinations verified and the placeholder slots documented.

---

## §4 — Strategic Context

- The current APGI website is functional but visually and structurally dated for the role it now needs to play.
- Replacement / extension of: the current `https://apginc.ca/` public website, extended into a modern modular APGI hub.
- The new site should be the central APGI front door for:
  - brand credibility,
  - training and course discovery,
  - outbound social proof via LinkedIn,
  - and downstream product or app discovery from the ISMS ecosystem.
- APGI's training presence lives in Thinkific, so the website should market and route into Thinkific rather than duplicate it.
- The ISMS repository contains the applications that will eventually be linked or launched from the public website, so the site needs a hub section that can grow with that ecosystem.
- The site should keep the current APGI story structure where it helps, but modernize the presentation, hierarchy, and visual rhythm.

### 4.1 Current Reference Sources

| Source | URL | Use |
|---|---|---|
| Current public site | `https://apginc.ca/` | Content and positioning reference |
| LinkedIn presence | `https://www.linkedin.com/company/assurance-protection-group-inc` | Social proof, outbound referral, and launch channel |
| VPSHR course index | `https://training-urls-module.vercel.app/courses/vpshr-level-0` | Course content reference for the current training focus |
| Thinkific manage | `https://apgi.thinkific.com/manage` | Staff/admin destination, not public nav |
| Thinkific storefront | `https://apgi.thinkific.com/` | Public course destination to link from the site |
| APGI contact reference | `https://apginc.ca/contact-us/` | Public contact model reference for email, phone, and address |
| ISMS repo | `https://github.com/APGI-cmy/maturion-isms` | App ecosystem reference |
| Governance repo | `https://github.com/APGI-cmy/maturion-foreman-governance` | Canonical build/governance reference |

### 4.2 Design Direction

- Visual tone: authoritative, calm, modern, and premium.
- Typography: expressive headline treatment with a clean body face.
- Palette: deep slate, warm ivory, brass or gold accent, with restrained supporting neutrals.
- Layout: strong vertical rhythm, generous whitespace, alternating full-bleed and card-based sections.
- Motion: subtle, purposeful motion only, such as scroll reveals, hero ambient movement, hover lift, and gentle logo movement.
- Imagery: APGI-owned or explicitly licensed imagery only; no generic security stock. The proof strip is text-first in v1 so rights ambiguity does not leak into the launch.
- Social/SEO: strong Open Graph and LinkedIn preview images, canonical metadata, and clear page titles.

### 4.3 Proposed Public Site Composition

| Section | Purpose | Placeholder Status |
|---|---|---|
| Hero | Immediate positioning and primary CTA | Headline and subheadline to tune |
| Proof strip | APGI-owned marks / trust cues | Text-first proof strip in v1; third-party logos deferred until separately licensed |
| About / Who We Are | APGI story and authority | Copy to tune |
| Services | What APGI does | Card labels and descriptions to tune |
| Training | Thinkific and course spotlight | VPSHR Level 0 featured now; more slots later |
| APGI Hub | Links to the frozen v1 ISMS public module routes | Frozen public route map; future tiles require governance |
| Philanthropy / Impact | Community and mentorship narrative | Copy to tune |
| Team | People behind the brand | Bios and photos to tune |
| Contact | Enquiry path and utility links | Email, phone, and address card; no form in v1 |
| Footer | Legal, social, and utility links | Stable |

### 4.4 Content Slots to Tune Later

| Slot | Initial State | Notes |
|---|---|---|
| Hero headline | Placeholder | Needs a strong APGI positioning statement |
| Hero subheadline | Placeholder | Should explain APGI in one plain-language sentence |
| Primary CTA | Stable placeholder | Usually "Explore Training" or equivalent |
| Secondary CTA | Stable placeholder | LinkedIn, contact, or app hub |
| Client proof stats | Placeholder | Use only once verified |
| Testimonials | Placeholder | Add after approval and rights clearance |
| App tiles | Frozen v1 route map + reserved future expansion | Public routes are fixed; future routes require governance |
| Team bios | Placeholder | Add as the leadership story is confirmed |
| Contact details | Stable | `info@apginc.ca`, `+1 416 642 9974`, and the Scarborough address |
| Legal pages | Stable | Privacy and terms required before launch |

---

## §AD-01 - Build Lifecycle Stages

The canonical build lifecycle is:

1. App Description
2. UX Workflow & Wiring Spec
3. Functional Requirements Specification (FRS)
4. Technical Requirements Specification (TRS)
5. Architecture
6. QA-to-Red
7. PBFAG
8. Implementation Plan
9. Builder Checklist
10. IAA Pre-Brief
11. Builder Appointment
12. Build

Skipping or reordering stages is prohibited without documented CS2 approval.

---

## §AD-02 - Requirements Derivation Chain

```text
APGI Public Website App Description
    ↓ derives
UX Workflow & Wiring Spec
    ↓ derives
FRS
    ↓ derives
TRS
    ↓ derives
Architecture
    ↓ derives
QA-to-Red, PBFAG, Implementation Plan, Builder Checklist, IAA Pre-Brief
    ↓ enables
Build
```

Every downstream artifact must explicitly reference this App Description by filename and version.

---

## §AD-03 - Technology Stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend framework | Next.js (App Router) | Best fit for Vercel and modern public-site routing |
| Language | TypeScript | Strong typing for content and route config |
| State management | React component state + small contexts | Keep global state minimal for v1 |
| Styling | Tailwind CSS | Utility-first styling for fast iteration |
| UI primitives | shadcn/ui | Accessible, composable components |
| Motion | Framer Motion or equivalent CSS motion | Keep motion subtle and intentional |
| Content source | Repository-first content files or MDX/JSON | Keep placeholders easy to tune |
| Database | None in v1 | Add only if forms, CMS, or lead capture require it |
| Auth | None in v1 | Public site only; staff tooling stays external |
| Edge functions | None in v1 | Add only if a future action requires serverless execution |
| CI/CD | GitHub Actions + Vercel | Expected deployment path |
| Deployment | Vercel | Primary hosting target |
| Notifications | Sonner or equivalent toast/banner system | No `alert()`-based UX |
| Analytics | None in v1 | Add only if approved |

---

## §AD-04 - Deliverable Artifacts

- [ ] Deployable public website
- [ ] This App Description
- [ ] UX Workflow & Wiring Spec
- [ ] FRS
- [ ] TRS
- [ ] Architecture
- [ ] QA-to-Red suite
- [ ] PBFAG package
- [ ] Implementation Plan
- [ ] Builder Checklist
- [ ] IAA Pre-Brief
- [ ] Build Progress Tracker
- [ ] Route and link inventory
- [ ] Social metadata inventory
- [ ] Content slot inventory
- [ ] Deployment runbook
- [ ] Screenshots and browser verification evidence

---

## §AD-05 - Component Definition of Done

Each major component is only done when it is:

- Implemented
- Integrated
- Tested
- Browser-verified
- Included in prehandover evidence

### Major Components

| Component | Definition of Done |
|---|---|
| Hero | Copy, CTA, and motion render correctly on all target viewports |
| Navigation | Links are correct and responsive |
| Trust strip | Client or proof assets render cleanly and are rights-cleared |
| Services section | Service cards are legible and tuned |
| Training section | Thinkific and course links resolve correctly |
| APGI hub | App tiles route correctly and show intended state |
| Contact section | Contact actions work and are clearly labelled |
| Footer | Legal and social links are present and correct |

---

## §AD-06 - Test-First Guarantee

- QA-to-Red must exist before implementation.
- Every build wave, including remediation, must have tests that fail before the code is written.
- The test suite must cover layout, routing, responsive behavior, and external link correctness.
- Content changes that affect visible copy or routing must be covered by the red suite before they are built.
- QA Agent / Role: APGI site QA or delegated builder QA, assigned in the QA-to-Red stage.
- Expected QA-to-Red state before builder allocation: all planned acceptance tests fail on the initial scaffold before implementation begins.

---

## §AD-07 - Physical Verification Gate

- Every UI wave requires browser-based verification.
- Required evidence includes desktop and mobile screenshots of the home page and each public page added in the wave.
- Browser verification must include navigation to LinkedIn and Thinkific destinations where those are in scope.
- No UI wave closes without screenshot evidence.
- Role responsible: Foreman or delegated QA/Builder under Foreman verification.

---

## §AD-08 - PBFAG Checklist

- QA-to-Red suite exists and is red before implementation.
- Scope and placeholder inventory are approved.
- External link inventory is complete.
- Social metadata targets are defined.
- Accessibility targets are confirmed.
- No unfinished route or CTA is left without a destination or explicit placeholder label.
- Prior-wave evidence is filed.
- Build tracker is current.
- Any rights-sensitive asset use has been reviewed.
- Deployment assumptions are explicit.
- Gate condition: all checklist items must be green before builder allocation.

---

## §AD-09 - Agent Authority Chain

| Role | Authority | Gate Point |
|---|---|---|
| Johan Ras | Final product and brand approval | App Description approval and any later scope override |
| Foreman | Wave allocation and sequencing | Builder appointment and wave closure |
| Builder | Implements within approved scope only | Build execution |
| QA | Authors and validates QA-to-Red coverage | QA-to-Red completion |
| CodexAdvisor | Writes or updates agent contracts if needed | Agent contract changes only |

- No builder may modify governance artifacts without authorization.
- No public-content change should be treated as approved until the upstream artifact chain is complete.

---

## §AD-10 - Schema-to-Hook Validation

- N/A for the initial static public site if no database-backed features are present.
- If contact forms, CMS content, or analytics event storage are added later, every schema or payload field must be mapped to the consuming hook or component.
- Any future form or content schema must be checked column-by-column or field-by-field before merge.

---

## §AD-11 - Table Pathway Audit

- N/A unless the public website introduces a database-backed feature.
- If the site later stores contact submissions, newsletter signups, or CMS records, every table usage must be audited against the consuming UI and tests.

---

## §AD-12 - RLS Audit Gate

- N/A unless the public website introduces a database-backed feature.
- If a future feature uses Supabase or another database, row-level or row-based access control must be reviewed before production.

---

## §AD-13 - Auth Wiring Checklist

- v1 of the public website is public-first and does not require authenticated pages.
- Any staff-only or admin-only page must be explicit, protected, and documented.
- Thinkific manage remains external and is not treated as a public authenticated route inside this website.
- No mock auth should ever be introduced if authenticated routes are added later.

---

## §AD-14 - AI Integration Requirements

- N/A — No AI action points in this module for v1.
- If an AI assistant, content helper, or chat feature is added later, all AI calls must route through the approved gateway pattern and not directly to provider APIs.

---

## §AD-15 - Edge Function Registry

- N/A — No edge functions in v1.
- If a contact form or other serverless action is introduced later, every function must appear in a named registry before handover.

---

## §AD-16 - Deployment Wave

- The final wave must include Vercel preview validation, production environment provisioning, configuration injection, Combined Wave Test (CWT) execution, production deployment, and smoke testing.
- The deployment wave must confirm redirects, external links, Open Graph previews, responsive behavior, and commissioning readiness.
- A CWT closure report must be produced before the wave is considered complete.
- Rollback steps must be defined before the production push.

---

## §AD-17 - Secret Naming Convention

- All environment variables must be UPPERCASE.
- `.env.example` must be the canonical list of environment variables.
- Only add secrets when a real integration needs them.
- The public site should avoid unnecessary secrets in the client bundle.

---

## §AD-18 - Deployment Runbook

- The repository must include a runbook for preview, production, rollback, and domain verification.
- If a future form or CMS integration is added, its deployment and rollback steps must be added to the runbook.
- The runbook must also include link-check and metadata-check steps.

---

## §AD-19 - Notification / UX Patterns

- `alert()` is prohibited for user notifications.
- Use a toast or inline banner pattern for success and failure states.
- Form submissions, copy-to-clipboard actions, and other small interactions should use a quiet, premium feedback style.

---

## §AD-20 - Shared State Architecture

- Keep state minimal.
- Use route state and small React contexts for theme, mobile navigation, and any modal or banner state.
- Avoid a heavyweight global store unless later content complexity makes it necessary.
- Content should be data-driven so placeholders can be tuned without touching layout code.

---

## §AD-21 - API Authentication

- N/A for the initial public site if no session-scoped API is introduced.
- Any future API that relies on user or session context must use proper authentication and not rely on anonymous trust.

---

## §AD-22 - Audit Log Design

- N/A for the initial static public site.
- If a future form backend, CMS, or admin workflow is added, define what events are logged, where they are visible, and how duplicates are prevented.

---

## §AD-23 - Tracker Update Requirement

- The build progress tracker must be updated at every wave closure.
- No wave is complete until the tracker reflects the current state.
- Canonical tracker location for this repository: `docs/governance/APGI_PUBLIC_WEBSITE_BUILD_PROGRESS_TRACKER.md`.
- If the repository later adopts a formal tracker file, it becomes a mandatory closure artifact.

---

## §AD-24 - State Persistence Specification

| State Item | Storage | Retention | Ownership |
|---|---|---|---|
| Theme preference | Local storage or cookie | Persistent | Frontend |
| Mobile navigation open state | Component state | Session | Frontend |
| Dismissed banner state | Local storage or session storage | Configurable | Frontend |
| Contact form draft | Session storage if needed | Session | Frontend |

Any new persistent state must be defined here before implementation.

---

## 5. Approval and Authority

- This document is a draft and is not yet authoritative.
- It becomes authoritative only after Johan Ras approves it.
- Once approved, it should be treated as the upstream source for the website's UX, FRS, TRS, and architecture artifacts.

---

## 6. Working Guidance

- Keep the first build intentionally shaped around placeholders, not final copy perfection.
- Design the site so that APGI can evolve sections and cards without reworking the page architecture.
- Treat LinkedIn, Thinkific, and the ISMS apps as coordinated destinations, not disconnected links.
- The public website should feel like APGI's command surface for brand, training, and launch paths.

---

## 7. Approval Record

| Action | By | Date | Notes |
|--------|----|------|-------|
| Draft created | Johan Ras | 2026-05-28 | Initial APGI public website App Description drafted and scoped. |
| Review completed | Codex | 2026-05-29 | Canon gap analysis completed; file is ready for human sign-off. |
| Authoritative status granted | Johan Ras | Pending | Awaiting final approval to move status from Draft to Authoritative. |

## §4 — CS2 Approval and Sign-Off

I, **CS2: Johan Ras**, hereby review and approve this **APGI Public Website - App Description** document as a governed description of the APGI Public Website application.

By signing off this document, I confirm that:

* the stated application identity, scope, boundaries, and success criteria are acceptable for the current governed version;
* the document may be used as the approved reference for design, implementation, deployment, and related governance decisions for the APGI Public Website;
* any material changes after this approval must be handled through the appropriate governed review and update process.

| Field             | Value                                                    |
| ----------------- | -------------------------------------------------------- |
| Approved By       | CS2: Johan Ras                                           |
| Role / Authority  | CS2 Approval Authority                                   |
| Approval Decision | Approved                                                 |
| Approval Date     | 2026-05-29                                               |
| Document Location | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` |
| Version Approved  | v0.1                                                     |

**Signed:** CS2: Johan Ras
**Date:** 2026-05-29
**Status:** Approved

