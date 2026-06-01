# APGI Public Website - App Description

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.2 - Corrective Design Upgrade |
| Status | Authoritative - corrective replacement for v0.1 |
| Owner | Johan Ras |
| Approval Date | 2026-06-01 |
| Last Updated | 2026-06-01 |
| Authority | Johan Ras |
| Canonical Location | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` |
| Corrective Trigger | Stage 12 PR #11 delivered a functional static scaffold but failed the fully functional design-quality expectation |

---

## §0 - Corrective Context

Stage 12 PR #11 proved that APW could be deployed as a static Vercel site, but it did **not** deliver the intended APGI website experience.

The failure was not primarily technical. The branch produced a functional build scaffold, but design and product experience arrived as an afterthought. It did not meet the required standard for a high-profile, professional APGI public website.

This App Description v0.2 supersedes the earlier one-page/scaffold interpretation. All downstream pre-build artifacts must be realigned before the upgraded build resumes.

APW build philosophy:

> We only build to green.

A build is not green merely because it compiles, deploys, and has working links. It is green only when it satisfies the approved experience, information architecture, visual design, content depth, conversion readiness, accessibility, routing, deployment, and evidence requirements.

---

## §1 - Application Identity

- **Application Name**: APGI Public Website
- **Purpose**: A high-profile, modern, professional public website for Assurance Protection Group Inc. that presents APGI as a credible security, risk, training, assurance, and technology-enabled advisory organization.
- **Primary Product Goal**: Replace a functional scaffold with a polished, content-rich, multi-page public website that can stand beside or improve on the current public APGI website at `https://apginc.ca/`.
- **Target Users / Audience**:
  - Prospective clients assessing APGI credibility
  - Current clients and partners
  - Training prospects and course learners
  - Visitors looking for APGI services
  - Visitors exploring the APGI app/platform ecosystem
  - Returning visitors from LinkedIn, Thinkific, Vercel previews, and referrals
- **Core Value Proposition**:
  - Give visitors a premium first impression within seconds.
  - Make APGI's service lines, training offer, and digital ecosystem easy to explore.
  - Convert interest into training visits, service enquiries, contact action, or app/platform exploration.
  - Present APGI with enough depth, polish, colour, and structure to invite exploration rather than merely proving deployability.

---

## §2 - Scope Definition

### In Scope

The upgraded APW site must include a real multi-page information architecture, not only a single landing page.

Required pages/routes:

| Route | Required Purpose |
|-------|------------------|
| `/` | High-impact homepage and conversion front door |
| `/services/` or `/services.html` | Full service catalogue and service-detail presentation |
| `/platform/` or `/platform.html` | APGI app/platform ecosystem and submodule showcase |
| `/training/` or `/training.html` | Training catalogue, course cards, and Thinkific handoff |
| `/about/` or `/about.html` | APGI story, credibility, mission, and positioning |
| `/team/` or `/team.html` | Leadership/team presentation, text-first until final bios/photos are approved |
| `/contact/` or `/contact.html` | Direct contact actions and enquiry guidance, without backend capture in v1 |
| `/privacy/` or `/privacy.html` | Privacy page or governed legal placeholder |
| `/terms/` or `/terms.html` | Terms page or governed legal placeholder |

Required content areas:

- Premium homepage hero with strong APGI positioning.
- Services overview and full services page.
- Platform/APGI Hub page displaying app modules and submodules.
- Training page linking to `https://apgi.thinkific.com/` and presenting available/current training content.
- Strong visual design with colour, contrast, rhythm, and professional polish.
- Rich calls to action that invite visitors to explore rather than merely scroll.
- Current-site content migration or summarisation where useful, especially services and training.
- Placeholder discipline for unapproved legal, team, asset, testimonial, or client proof content.
- SEO, social metadata, route titles, and share-ready pages.
- Vercel deployment with evidence.

### Explicitly Out of Scope for v1

- Supabase project unless later explicitly approved by CS2.
- Database-backed content or lead capture.
- Authentication.
- CRM/contact-form backend.
- Thinkific replacement or Thinkific administration.
- ISMS backend/application implementation inside APW.
- LinkedIn scraping or automated social synchronization.
- Unapproved analytics, CMS, marketing automation, client logos, testimonials, or regulated claims.

---

## §3 - Success Criteria

The upgraded APW site is green only when all of the following are true:

1. It is visually credible as a professional public website for APGI.
2. It is materially richer than the Stage 12 PR #11 scaffold.
3. It has a multi-page information architecture with homepage, services, platform/app, training, about/team/contact, and legal pages.
4. Services are presented with enough depth for a visitor to understand what APGI provides.
5. The app/platform page clearly shows the APGI ecosystem and submodules.
6. The training page links to `https://apgi.thinkific.com/` and presents training offerings clearly.
7. The homepage uses colour, hierarchy, sections, cards, CTAs, and visual rhythm to invite exploration.
8. Every public route is browser-verified on desktop and mobile.
9. Navigation works across desktop and mobile.
10. All primary CTAs have correct destinations or explicit governed placeholder states.
11. Legal/team/assets/social-preview placeholders are honest and visible.
12. No Supabase, auth, backend, CRM, or contact-form processing is introduced without later approval.
13. Vercel build and preview/production evidence is recorded.
14. QA-to-Red tests for design, IA, services, platform, training, conversion, and visual quality are green.

---

## §4 - Strategic Context

The existing public APGI website already has more content substance than PR #11. The upgrade must respect that existing value while modernizing structure, presentation, and interaction.

The new APW must feel like a first-class public website, not an internal proof-of-build page.

Key strategic requirements:

- Present APGI as professional, credible, serious, and modern.
- Create a visitor journey from initial trust to services, training, platform exploration, or contact.
- Preserve and improve the current website's services/training substance.
- Make the APGI app/platform ecosystem visible and understandable.
- Support future content expansion without redesigning the site again.

---

## §5 - Required Design Standard

The visual language must include:

- Strong APGI brand presence.
- Deep navy/slate foundation with richer accent colour, such as blue, gold/brass, teal, or warm neutral accents.
- Alternating dark/light sections.
- Premium card systems.
- Large editorial hero treatment.
- Service and platform cards with visual hierarchy.
- Clear CTAs.
- Responsive layouts that feel designed, not collapsed.
- Modern but controlled motion, respecting reduced-motion settings.
- Text-first fallback where images/assets are not approved.
- No generic low-effort template feel.

Design is a delivery requirement, not decoration.

---

## §6 - Required Information Architecture

### Homepage

Must include:

- hero with strong headline/subheadline;
- trust/proof/positioning strip;
- services preview;
- platform/APGI Hub preview;
- training preview;
- why APGI / approach / credibility section;
- impact/philanthropy/community section if content is approved or text-first placeholder is accepted;
- contact CTA;
- footer with legal/social/navigation links.

### Services Page

Must include a service catalogue, at minimum:

- Security awareness and organizational design;
- Intelligence and investigations;
- Independent third-party security assurance and reporting;
- Remote/security systems administration support where approved;
- Business reporting / assurance support;
- Security human rights training;
- any other approved APGI service lines from the current site or CS2-provided updates.

Each service must include a short explanation, visitor value, and contact CTA.

### Platform / APGI Hub Page

Must display the APGI digital ecosystem and submodules, including at minimum:

- Maturity Roadmap / MMM;
- Risk Management;
- Project Implementation Tracker / PIT;
- Incident & Intelligence Hub;
- Data Analytics & Remote Assurance;
- Systems Integration / RADAM;
- Skills Development Portal.

Each module must have a description, status, and link/pending behavior.

### Training Page

Must link prominently to:

`https://apgi.thinkific.com/`

Must also present training offerings and course cards, including the current known course surface and placeholders for additional courses where final titles/details are not yet approved.

### Contact Page

Must provide readable contact information and direct handoffs. No backend form processing in v1 unless separately approved.

---

## §7 - Build Lifecycle Rule

Because PR #11 failed the fully functional design threshold, downstream artifacts that were written for the scaffold interpretation are no longer sufficient.

The required corrective sequence is:

1. Update App Description.
2. Realign UX Workflow & Wiring.
3. Realign FRS.
4. Realign TRS.
5. Realign Architecture.
6. Realign QA-to-Red with design/IA/content RED tests.
7. Realign PBFAG.
8. Realign Implementation Plan.
9. Realign Builder Checklist.
10. Realign IAA Pre-Brief.
11. Realign Builder Appointment.
12. Only then resume upgraded Build Evidence.

Skipping directly from the failed scaffold to design implementation is prohibited unless CS2 explicitly waives the corrective pre-build chain.

---

## §8 - QA-to-Red Requirement

QA-to-Red must fail the current PR #11 scaffold before the upgraded build begins.

At minimum, RED tests must cover:

- multi-page information architecture;
- professional visual design quality;
- service-page depth;
- platform/app submodule presentation;
- training-page depth and Thinkific handoff;
- homepage conversion quality;
- colour/visual richness;
- desktop/mobile designed layouts;
- navigation across all major pages;
- placeholder honesty;
- Vercel deployment evidence;
- no Supabase/backend/auth/CRM/contact-form backend in v1.

Only a build that turns those tests green can be considered acceptable.

---

## §9 - Definition of Done

The APW website is done only when it is:

- implemented;
- integrated;
- visually designed to the approved professional standard;
- multi-page;
- content-rich enough for services, platform/app, and training exploration;
- tested against corrected QA-to-Red;
- browser-verified on desktop and mobile;
- Vercel-verified;
- documented with build evidence;
- approved by CS2/Johan or authorized proxy disposition.

A functional scaffold does not satisfy this definition.
