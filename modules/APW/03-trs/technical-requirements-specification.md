# APW Stage 4 - Technical Requirements Specification (TRS)

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 4 - Technical Requirements Specification |
| Folder | `modules/APW/03-trs` |
| Version | v0.1 |
| Status | Draft - pending Foreman QP / ECAP / IAA review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-05-29 |
| Upstream Stage | `modules/APW/02-frs/functional-requirements.md` |
| Scope Declaration | `.agent-admin/scope-declarations/apw-stage4-trs-20260529.md` |
| Builder Appointment | `.agent-admin/builder-appointments/apw-stage4-trs-builder-contract-20260529.md` |

---

## 1. Purpose

This Technical Requirements Specification translates the approved APW Stage 3 Functional Requirements Specification into implementation-facing technical requirements.

The TRS is not implementation code and does not authorize implementation. It defines the technical obligations that downstream Architecture, QA-to-Red, PBFAG, implementation planning, builder checklist, and build execution must satisfy.

---

## 2. Technical Boundary

The APGI Public Website is a public, unauthenticated, static or statically served marketing and routing surface.

The technical design must not introduce:

- authenticated staff tooling;
- CRM or lead database;
- Thinkific administration;
- ISMS application backend logic;
- database-backed workflows;
- LinkedIn scraping or synchronization;
- unapproved analytics, tracking, CMS, or marketing automation.

Any future addition of these capabilities requires governed scope change.

---

## 3. Source Traceability

| Source | TRS Function |
|--------|--------------|
| Stage 3 FRS | Defines functional requirements to be converted into technical requirements. |
| Stage 2 UX Workflow & Wiring Spec | Defines journeys, screens, triggers, route map, handoffs, and wiring expectations. |
| Foreman Operating Model | Defines Foreman, builder, ECAP, IAA, CS2 proxy, and merge discipline. |
| Local Governance Canon | Defines local governance gates and fully functional expectations. |

---

## 4. Runtime and Framework Requirements

### TRS-RUN-001 - Public Website Runtime

The website must run as a public, unauthenticated frontend application suitable for static or static-first deployment.

**Derived From**: FRS-SCR-004, FRS-GOV-001.

### TRS-RUN-002 - Framework Expectations

If the project uses a framework, it should support:

- route-based public page rendering;
- metadata generation;
- responsive layout;
- reusable sections/components;
- accessible markup;
- environment-based configuration;
- CI-compatible build commands.

**Derived From**: FRS-SEO, FRS-A11Y, FRS-HUB.

### TRS-RUN-003 - No Server-Side Business Workflow

The v1 website must not require server-side business workflow processing to satisfy its approved scope.

**Derived From**: Functional boundary and negative requirements.

### TRS-RUN-004 - Environment Separation

Environment-specific values must be isolated from source logic and must be configurable without editing canonical route paths.

**Derived From**: FRS-HUB-005.

---

## 5. Routing and Navigation Requirements

### TRS-ROUTE-001 - Home Route

The website must expose a public home route at `/`.

**Derived From**: FRS-SCR-001.

### TRS-ROUTE-002 - Section Anchors

The home route must support stable section anchors for core sections:

- `#about`
- `#services`
- `#training`
- `#hub`
- `#team`
- `#contact`

Where a section exists visually, its anchor target must exist technically and must not resolve to a missing element.

**Derived From**: FRS-NAV-001, FRS-NAV-004.

### TRS-ROUTE-003 - Mobile Navigation State

Small-screen navigation must provide equivalent navigation access to the desktop header and must preserve focus and context when opened or closed.

**Derived From**: FRS-SCR-002, FRS-A11Y-002.

### TRS-ROUTE-004 - External Handoff Handling

External links must be implemented as explicit outbound destinations with accessible labels and clear user intent.

**Derived From**: FRS-NAV-003.

### TRS-ROUTE-005 - Dead Link Prevention

No enabled public navigation element may point to an unresolved destination. A deferred destination must be disabled, hidden, or labelled as pending.

**Derived From**: FRS-NAV-004, FRS-TRN-005.

---

## 6. APGI Hub Technical Requirements

### TRS-HUB-001 - Configurable Public ISMS Base URL

The ISMS public host must be configurable through an environment variable or equivalent deployment configuration.

Recommended name:

```text
ISMS_PUBLIC_BASE_URL
```

**Derived From**: FRS-HUB-005.

### TRS-HUB-002 - Frozen Route Slugs

The APGI Hub route slugs must be treated as frozen v1 constants:

| Tile | Route Slug |
|------|------------|
| Maturity Roadmap / MMM | `/marketing/maturity-roadmap` |
| Risk Management | `/marketing/risk-management` |
| Project Implementation Tracker / PIT | `/marketing/project-implementation` |
| Incident & Intelligence Hub | `/marketing/incident-intelligence` |
| Data Analytics & Remote Assurance | `/marketing/data-analytics-assurance` |
| Systems Integration / RADAM | `/marketing/systems-integration` |
| Skills Development Portal | `/marketing/skills-development` |

**Derived From**: FRS-HUB-002.

### TRS-HUB-003 - Hub Tile Data Model

Each hub tile must be representable as structured data with at least:

- stable ID;
- display title;
- short description;
- route slug;
- status label;
- accessibility label;
- outbound link destination resolved from base URL plus slug.

**Derived From**: FRS-HUB-003.

### TRS-HUB-004 - Future Tile Control

New hub tiles must not be added by ad hoc UI changes. The tile list must remain explicit and reviewable.

**Derived From**: FRS-HUB-004.

---

## 7. Training Handoff Technical Requirements

### TRS-TRN-001 - VPSHR Course Link

The VPSHR Level 0 course reference must be technically represented as an external public course link.

Current approved destination:

```text
https://training-urls-module.vercel.app/courses/vpshr-level-0
```

**Derived From**: FRS-TRN-002.

### TRS-TRN-002 - Thinkific Storefront Link

The Thinkific public storefront must be represented as an external public link.

Current approved destination:

```text
https://apgi.thinkific.com/
```

**Derived From**: FRS-TRN-003.

### TRS-TRN-003 - Admin URL Exclusion

No Thinkific admin or management URL may appear in public navigation, public source content constants, public page copy, or user-facing metadata.

**Derived From**: FRS-TRN-004.

### TRS-TRN-004 - Training Link Failure Mode

If a training destination is not configured, the UI must not render a broken enabled CTA. It must present a safe disabled or informational state.

**Derived From**: FRS-TRN-005.

---

## 8. Contact Technical Requirements

### TRS-CON-001 - Email Handoff

The website must support an approved `mailto:` email handoff.

Current approved destination:

```text
mailto:info@apginc.ca
```

**Derived From**: FRS-CON-002.

### TRS-CON-002 - Phone Handoff

The website must support an approved `tel:` handoff where device capability permits.

Current approved destination:

```text
tel:+14166429974
```

**Derived From**: FRS-CON-003.

### TRS-CON-003 - No Form Processing

The v1 site must not include contact form submission, validation, API routes, CRM posting, email automation, or database persistence.

**Derived From**: FRS-CON-005.

### TRS-CON-004 - Contact Fallback

Contact details must remain visible as text even if device-level email or phone handlers are unavailable.

**Derived From**: FRS-CON-004.

---

## 9. Content and Asset Requirements

### TRS-CNT-001 - Structured Static Content

Public website content should be represented in a structured, maintainable form such as constants, configuration objects, local content files, or component props.

**Derived From**: FRS-CNT-001.

### TRS-CNT-002 - Placeholder Safety

Placeholder content must be technically distinguishable and easy to find. It must not be hidden inside hard-to-audit markup.

**Derived From**: FRS-CNT-002.

### TRS-CNT-003 - Rights-Sensitive Asset Control

Assets used in public rendering must be APGI-owned, explicitly licensed, or text-first placeholders. Third-party marks must not be added without approval.

**Derived From**: FRS-CNT-003.

### TRS-CNT-004 - Team Content Control

Team/profile content must be maintainable separately from layout logic so names, roles, bios, or images can be revised without redesign.

**Derived From**: FRS-CNT-004.

### TRS-CNT-005 - Legal Route Readiness

The technical design must reserve or implement stable legal destinations for privacy and terms content before launch readiness.

**Derived From**: FRS-CNT-005, FRS-NAV-002.

---

## 10. SEO and Social Metadata Requirements

### TRS-SEO-001 - Metadata Support

The website must support page title, description, canonical URL, Open Graph title, Open Graph description, and share image metadata where available.

**Derived From**: FRS-SEO-001, FRS-SEO-002.

### TRS-SEO-002 - LinkedIn Share Compatibility

Metadata must be suitable for LinkedIn link sharing without scraping or syncing LinkedIn content.

**Derived From**: FRS-SEO-003.

### TRS-SEO-003 - Brand Narrative Metadata

Metadata must reflect APGI's approved brand narrative and must not imply unapproved capabilities.

**Derived From**: FRS-SEO-004, FRS-TRUST-004.

### TRS-SEO-004 - Social Image Control

If a social preview image is used, it must be an approved APGI-owned or licensed asset.

**Derived From**: FRS-CNT-003.

---

## 11. Accessibility Technical Requirements

### TRS-A11Y-001 - Semantic Structure

The page must use semantic HTML structure appropriate to a public marketing site, including meaningful headings, landmarks, links, and buttons.

**Derived From**: FRS-A11Y-004.

### TRS-A11Y-002 - Keyboard Access

All navigation, CTAs, hub tiles, contact actions, and mobile menu controls must be keyboard reachable and operable.

**Derived From**: FRS-A11Y-002.

### TRS-A11Y-003 - Focus Management

The mobile navigation overlay must provide sensible focus behavior when opened and closed.

**Derived From**: FRS-SCR-002.

### TRS-A11Y-004 - Reduced Motion

Non-essential animation must be avoidable or disabled for reduced-motion users.

**Derived From**: FRS-A11Y-003.

### TRS-A11Y-005 - Text-First Resilience

Core APGI positioning, training, hub, and contact information must remain understandable if images, icons, or motion fail.

**Derived From**: FRS-A11Y-005.

---

## 12. Responsive Technical Requirements

### TRS-RESP-001 - Mobile-First Layout

The implementation must support mobile-first rendering and scale cleanly to tablet and desktop viewports.

**Derived From**: FRS-A11Y-001.

### TRS-RESP-002 - Section Stability

Core sections must remain readable and navigable at common viewport widths without horizontal overflow or hidden critical content.

**Derived From**: FRS-SCR-001.

### TRS-RESP-003 - CTA Visibility

Primary CTAs must remain visible, readable, and tappable on mobile.

**Derived From**: FRS-TRUST-003.

---

## 13. Security and Privacy Requirements

### TRS-SEC-001 - Public-Only Data Posture

The v1 site must not collect or persist personal data.

**Derived From**: FRS-CON-005.

### TRS-SEC-002 - No Secret Exposure

Environment variables, tokens, or private configuration must not be exposed in public source output or page content.

**Derived From**: Public website boundary.

### TRS-SEC-003 - External Link Safety

External links must be explicit, approved, and reviewable.

**Derived From**: FRS-NAV-003.

### TRS-SEC-004 - Dependency Discipline

Implementation must avoid unnecessary runtime dependencies for simple public-site behavior.

**Derived From**: Fully functional delivery and maintainability expectations.

---

## 14. Fully Functional Delivery Technical Controls

### TRS-FFD-001 - Routed

Every enabled route, anchor, CTA, and external link must resolve to its intended destination or safe unavailable state.

**Derived From**: FRS-GOV-006, FRS-NAV-004.

### TRS-FFD-002 - Usable

The homepage must be usable without requiring hidden knowledge, authentication, or developer intervention.

**Derived From**: FRS-USER-001, FRS-SCR-004.

### TRS-FFD-003 - Coherent

The implemented sections, labels, and CTAs must align with the approved journeys and must not contradict the FRS.

**Derived From**: FRS-TRUST-003, FRS-TRUST-004.

### TRS-FFD-004 - Verified

Implementation readiness must include evidence for routing, external links, responsive layout, keyboard access, metadata, and placeholder safety.

**Derived From**: FRS-GOV-006.

### TRS-FFD-005 - No Known Avoidable Functional Debt

Known broken routes, unresolved CTAs, inaccessible navigation, missing core content, and unlabelled placeholders must not be deferred as polish.

**Derived From**: FRS-GOV-006 and no-test-debt governance.

---

## 15. Verification Requirements for QA-to-Red

The following items must become QA-to-Red checks in Stage 6:

| QA Seed | Required Later Check |
|---------|----------------------|
| TRS-ROUTE-001 | `/` renders successfully. |
| TRS-ROUTE-002 | All section anchors resolve. |
| TRS-ROUTE-003 | Mobile navigation opens, closes, and preserves access. |
| TRS-ROUTE-005 | No enabled dead links. |
| TRS-HUB-001 / TRS-HUB-002 | Hub links resolve from configured base URL plus frozen route slugs. |
| TRS-TRN-001 / TRS-TRN-002 | Training links are public and non-admin. |
| TRS-CON-001 / TRS-CON-002 | Email and phone handoffs are present. |
| TRS-CON-003 | No contact form or backend submission exists in v1. |
| TRS-SEO-001 | Metadata exists. |
| TRS-A11Y-002 | Keyboard access works for primary controls. |
| TRS-RESP-001 | Common mobile/tablet/desktop widths are usable. |
| TRS-FFD-005 | No known avoidable functional debt is accepted. |

---

## 16. Technical Traceability Matrix

| FRS Area | TRS Coverage |
|----------|--------------|
| User and audience requirements | TRS-RUN, TRS-ROUTE, TRS-FFD |
| Page and screen requirements | TRS-ROUTE, TRS-RESP, TRS-A11Y |
| Navigation and routing | TRS-ROUTE, TRS-FFD |
| Training | TRS-TRN |
| APGI Hub | TRS-HUB |
| Contact and conversion | TRS-CON, TRS-SEC |
| Content and placeholders | TRS-CNT |
| SEO and social sharing | TRS-SEO |
| Accessibility | TRS-A11Y |
| Public trust and quality | TRS-CNT, TRS-SEO, TRS-FFD |
| Governance and lifecycle | TRS-FFD, verification requirements |
| Negative requirements | TRS-SEC, TRS-CON, TRS-TRN, technical boundary |

---

## 17. Readiness for Stage 5 Architecture

This TRS is ready for Foreman QP, ECAP, IAA pre-brief, and IAA review.

After approval, Stage 5 Architecture should define:

- site architecture;
- route and section architecture;
- content/config architecture;
- component architecture;
- APGI Hub link-resolution architecture;
- accessibility architecture;
- verification and evidence architecture;
- deployment architecture.

---

## 18. Conditions Carried Forward

| Item | Status | Notes |
|------|--------|-------|
| Architecture design | Carry forward | Stage 5 must convert technical requirements into design structure. |
| QA-to-Red | Carry forward | Stage 6 must create failing/inspectable tests before implementation. |
| Public legal pages | Carry forward | Legal/privacy/terms destinations must be addressed before launch. |
| Final content | Carry forward | Copy, proof, team, and imagery remain subject to content approval. |
| CI workflow | Carry forward | Implementation waves should have stronger CI evidence than documentation waves. |

---

## 19. Foreman Note

This TRS does not authorize implementation. It authorizes progression to Architecture after QP, ECAP, IAA, and CS2 proxy disposition.
