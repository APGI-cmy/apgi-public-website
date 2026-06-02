# APGI Public Website - UX Workflow and Wiring Spec v0.2

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.2 - Corrective Multi-Page Professional Website UX |
| Status | Corrective authoritative draft for Stage 2 review |
| Owner | Johan Ras |
| Last Updated | 2026-06-02 |
| Authority | Johan Ras |
| Upstream Authority | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` v0.2 |
| Corrective Trigger | PR #11 proved a static scaffold but did not meet the APW professional website experience standard |

---

## 1. Purpose

This v0.2 UX Workflow and Wiring Spec replaces the old one-page interpretation with a multi-page professional website journey model.

The upgraded APW website must let visitors understand APGI, explore services, explore the APGI platform/app ecosystem, explore training, contact APGI, review legal/trust pages, and experience a polished professional visual design on desktop and mobile.

A one-page-only scaffold is not acceptable for the upgraded APW build.

---

## 2. Required Public Routes

| Route | Page Purpose | Required User Outcome |
|-------|--------------|-----------------------|
| `/` | Premium homepage and conversion front door | Visitor understands APGI and sees clear next steps. |
| `/services/` or `/services.html` | Full service catalogue | Visitor can review meaningful APGI service categories and outcomes. |
| `/platform/` or `/platform.html` | APGI app/platform ecosystem | Visitor can understand modules, statuses, and links or pending states. |
| `/training/` or `/training.html` | Training catalogue and Thinkific handoff | Visitor can review training options and reach Thinkific. |
| `/about/` or `/about.html` | APGI story and positioning | Visitor understands APGI credibility and approach. |
| `/team/` or `/team.html` | Leadership/team presentation | Visitor sees approved bios/photos or honest placeholders. |
| `/contact/` or `/contact.html` | Direct contact actions | Visitor can email or phone APGI without a form workflow. |
| `/privacy/` or `/privacy.html` | Privacy page or governed placeholder | Visitor can review privacy information or placeholder status. |
| `/terms/` or `/terms.html` | Terms page or governed placeholder | Visitor can review terms information or placeholder status. |

---

## 3. Global Navigation

Desktop and mobile navigation must expose:

- Home
- Services
- Platform / APGI Hub
- Training
- About
- Team
- Contact

Footer navigation must additionally expose Privacy and Terms.

Navigation must move between pages, not only within a single page.

---

## 4. User Journey Matrix

| Journey ID | Journey | Required Outcome |
|------------|---------|------------------|
| UJ-APW-001 | Premium brand orientation | Visitor sees a credible, polished APGI front door. |
| UJ-APW-002 | Services exploration | Visitor can open a services page and understand APGI service lines. |
| UJ-APW-003 | Platform/app exploration | Visitor can open a platform page and understand APGI modules. |
| UJ-APW-004 | Training exploration | Visitor can open a training page and reach `https://apgi.thinkific.com/`. |
| UJ-APW-005 | Contact conversion | Visitor can contact APGI through public email and phone handoffs. |
| UJ-APW-006 | About/team credibility | Visitor can understand APGI story, people, and positioning. |
| UJ-APW-007 | Legal/trust review | Visitor can reach Privacy and Terms pages or labelled placeholders. |
| UJ-APW-008 | Mobile exploration | Visitor can complete all primary journeys on mobile. |
| UJ-APW-009 | Design-quality exploration | Visitor is invited to explore through colour, hierarchy, cards, CTAs, and visual rhythm. |

---

## 5. Homepage Journey

The homepage must be a conversion front door, not the whole website.

Required homepage flow:

1. Hero with strong APGI positioning.
2. Trust/credibility or positioning band.
3. Services preview linking to Services page.
4. Platform/APGI Hub preview linking to Platform page.
5. Training preview linking to Training page and Thinkific.
6. About/credibility preview.
7. Contact CTA.
8. Footer with legal and navigation links.

Green criteria:

- The page feels designed and premium.
- CTAs invite exploration.
- The user can reach deeper pages quickly.
- The homepage does not attempt to carry the entire website alone.

---

## 6. Services Journey

The Services page must include meaningful service categories, explanations, outcomes, and contact CTAs.

Required categories:

- Security awareness and organizational design
- Intelligence and investigations
- Independent third-party security assurance and reporting
- Remote/security systems administration support where approved
- Business reporting / assurance support
- Security human rights training
- Later CS2-approved APGI service lines

Green criteria:

- Services are not just a shallow list.
- Each service has a clear visitor value.
- Visitors can contact APGI from the page.

---

## 7. Platform / APGI Hub Journey

The Platform page must explain the APGI ecosystem and show modules/submodules with descriptions, statuses, and links or polished pending states.

Required modules:

- Maturity Roadmap / MMM
- Risk Management
- Project Implementation Tracker / PIT
- Incident and Intelligence Hub
- Data Analytics and Remote Assurance
- Systems Integration / RADAM
- Skills Development Portal

If the public Hub base URL is not yet known, the page must show a professional pending state rather than a broken link.

---

## 8. Training Journey

The Training page must link prominently to:

`https://apgi.thinkific.com/`

It must also show training offerings as course cards or offering groups, including approved current courses and honest placeholders for upcoming or pending offerings.

Green criteria:

- Training is not represented by a single button only.
- Thinkific is clearly available.
- Group/custom training interest routes to Contact.

---

## 9. Contact Journey

The Contact page must expose public contact methods clearly.

Required handoffs unless CS2 updates them:

- `mailto:info@apginc.ca`
- `tel:+14166429974`

The v1 contact journey must not imply a form workflow or hidden lead capture. If a form is ever added, it requires a later governed scope update.

---

## 10. About, Team, and Legal Journeys

About must provide meaningful APGI story, positioning, and credibility.

Team must use approved content or honest placeholders.

Privacy and Terms must render as real routes or clearly labelled governed placeholders.

No placeholder should appear as final approved content.

---

## 11. Mobile and Responsive UX

Mobile users must be able to complete every primary journey.

Required mobile behavior:

- full navigation access;
- tappable CTAs;
- no critical horizontal overflow;
- intentional spacing and hierarchy;
- visible focus states;
- readable cards and page sections;
- reduced-motion preference respected where motion exists.

---

## 12. Design-Quality UX Gate

Design quality is part of the user workflow.

Green criteria:

- Strong APGI brand presence.
- Premium colour and contrast.
- Cards, badges, CTAs, and clear hierarchy.
- Alternating or otherwise rich section treatments.
- Modern but controlled visual rhythm.
- No generic scaffold feel.

---

## 13. Wiring Rules

Internal wiring:

- Homepage previews link to deeper pages.
- Header and footer route across the site.
- Services pages link to contact and relevant training/platform pages.
- Platform modules link to approved destinations or polished pending states.
- Training links to Thinkific and contact.

External wiring:

| Destination | Use |
|-------------|-----|
| `https://apgi.thinkific.com/` | Training storefront handoff. |
| `mailto:info@apginc.ca` | Email contact. |
| `tel:+14166429974` | Phone contact. |
| `ISMS_PUBLIC_BASE_URL` plus governed slugs | Platform/APGI Hub links when public host is known. |

---

## 14. Negative UX Requirements

The upgraded UX must not:

- be one-page-only;
- be a thin static scaffold;
- hide core journeys behind vague labels;
- rely on hover-only interaction;
- use broken or empty CTAs;
- make pending content look final;
- imply backend form processing in v1;
- include unapproved claims, client marks, or testimonials.

---

## 15. Stage 3 FRS Handover

Corrective Stage 3 FRS v0.2 must convert this UX spec into functional requirements for:

- required routes;
- page navigation and CTAs;
- services depth;
- platform/app depth;
- training depth;
- contact and legal behavior;
- mobile UX;
- professional design quality;
- public-only v1 scope.

---

## 16. Stage 2 Disposition

Corrective Stage 2 UX Workflow and Wiring v0.2 is complete for review and is ready to feed Corrective Stage 3 FRS v0.2 after PR review and merge.
