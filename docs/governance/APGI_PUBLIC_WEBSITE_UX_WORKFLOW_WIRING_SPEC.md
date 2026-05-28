# APGI Public Website - UX Workflow & Wiring Spec

## Status Header

| Field | Value |
|-------|-------|
| Version | v0.1 |
| Status | Draft |
| Owner | Johan Ras |
| Approval Date | N/A |
| Last Updated | 2026-05-28 |
| Authority | Johan Ras |
| Canonical Location | `docs/governance/APGI_PUBLIC_WEBSITE_UX_WORKFLOW_WIRING_SPEC.md` |
| Policy Authority | `PRE_BUILD_STAGE_MODEL_CANON.md` v1.0.0 - Stage 2 |

---

## Section 0: Derivation and Upstream Authority (REQUIRED)

### Derivation Statement

> This UX Workflow & Wiring Spec is derived from `APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` version v0.1, drafted on 2026-05-28 and currently pending approval. All user journeys, interactions, data flows, and wiring definitions herein operationalise the scope, purpose, and capabilities defined in that upstream document.

### Upstream Authority References

| Artifact | Location | Version | Status |
|----------|----------|---------|--------|
| App Description | `docs/governance/APGI_PUBLIC_WEBSITE_APP_DESCRIPTION.md` | v0.1 | Draft / pending approval |

---

## Section 1: Purpose and Scope (REQUIRED)

**Purpose**: Define the user journeys, screen-level interactions, triggers, data flows, and wiring for the APGI public website so the design can be implemented consistently and tuned later without redesigning the page structure.

**Scope**: User journeys and wiring in this document are scoped to:
- The public home experience for APGI
- Responsive navigation, hero, proof, services, training, hub, impact, team, and contact sections
- External handoffs to LinkedIn, Thinkific, VPSHR course content, and future APGI/ISMS destinations
- The frozen v1 APGI Hub route map for the canonical public ISMS module marketing pages

**Out of Scope**: This spec does not cover backend app delivery, Thinkific administration, internal ISMS application implementation, CRM/lead automation, authenticated staff tooling, or any database-backed workflow for v1.

**Variant**: [x] Full UX Workflow & Wiring Spec (user-facing build) | [ ] Wiring Spec Only (non-user-facing build)

---

## Section 2: User Journey Maps (REQUIRED for user-facing builds)

> **Rule**: All primary and secondary user paths must be documented. No user journey present in the App Description may be omitted.

### Journey Coverage Matrix

| Journey ID | Journey Name | Type | Status | Section Reference |
|-----------|-------------|------|--------|-------------------|
| UJ-APGI-001 | Brand orientation and trust building | Primary | Documented | §2.1 |
| UJ-APGI-002 | Training discovery and course handoff | Primary | Documented | §2.2 |
| UJ-APGI-003 | APGI Hub exploration and launch selection | Primary | Documented | §2.3 |
| UJ-APGI-004 | Contact and conversion handoff | Primary | Documented | §2.4 |
| UJ-APGI-005 | LinkedIn referral and return | Secondary | Documented | §2.5 |

> **Coverage Gate**: Every journey listed as "Primary" must be fully documented before approval. "Secondary" journeys must be at minimum sketched with screen transitions noted.

---

### 2.1 Journey: UJ-APGI-001 - Brand Orientation and Trust Building

**Journey ID**: UJ-APGI-001  
**Type**: Primary  
**Entry Point**: User lands on `/` from direct navigation, search, a LinkedIn referral, or a shared link.  
**Exit Point**: User chooses a next step from training, hub, LinkedIn, or contact.  
**Error Exit Points**: Slow network, reduced-motion mode, image fallback mode, or partial content load.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User opens the APGI website homepage. | The page shell renders the hero, navigation, and trust cues. | SCR-APGI-001 | Browser request for `/` | Landing page HTML/CSS/JS |
| 2 | User scans the hero and proof strip. | APGI positioning, value proposition, and trust markers are presented without needing interaction. | SCR-APGI-001 | None | Visible hero and proof content |
| 3 | User scrolls through services, training, hub, impact, team, and contact sections. | Section content reveals in sequence and the sticky nav remains available. | SCR-APGI-001 | Scroll position | Visible section content |
| 4 | User selects the next destination. | The website routes internally to an anchor or externally to a destination selected from the page. | SCR-APGI-001 | Click / tap on CTA | Internal anchor change or external navigation |

**Observable Outcomes**:
- The visitor understands what APGI does and where to go next.
- The homepage gives a premium, credible impression on desktop and mobile.

**Edge Cases and Exceptions**:
- Slow assets fall back to text-first content and placeholder-safe layout.
- Reduced motion disables non-essential animation without breaking the layout.
- Mobile users receive the same content with a collapsed nav state.

---

### 2.2 Journey: UJ-APGI-002 - Training Discovery and Course Handoff

**Journey ID**: UJ-APGI-002  
**Type**: Primary  
**Entry Point**: User clicks the hero CTA, the training nav item, or the VPSHR course spotlight.  
**Exit Point**: User reaches the current course reference or the approved Thinkific storefront.
**Error Exit Points**: External destination unavailable or course asset fails to load.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User selects a training CTA. | The page scrolls to the training section and highlights the VPSHR Level 0 spotlight. | SCR-APGI-001 | Click on CTA | Section focus / anchor update |
| 2 | User reads the course summary and available actions. | The UI presents a clear choice between the current course reference and the Thinkific handoff. | SCR-APGI-001 | None | Visible course card and CTA labels |
| 3 | User clicks the course handoff button. | The browser opens the approved course destination in a normal external-navigation flow. | SCR-APGI-001 | Click on course link | External URL navigation |
| 4 | User reaches the course destination. | The user can continue learning or return to the APGI site via browser history. | External destination | Browser navigation state | External platform content |

**Observable Outcomes**:
- The user can move from APGI marketing content into the course ecosystem without confusion.
- The current VPSHR Level 0 course is visibly featured and easy to access.
- The public course preview and the Thinkific storefront are both explicit and non-admin.

**Edge Cases and Exceptions**:
- If the course destination is unavailable, the button degrades to a safe disabled or informational state.
- The training section remains useful even if only one course is live.

**Frozen v1 Training Handoff**:
- Public course preview reference: `https://training-urls-module.vercel.app/courses/vpshr-level-0`
- Public storefront handoff: `https://apgi.thinkific.com/`
- Staff/admin destination remains excluded from public navigation.

---

### 2.3 Journey: UJ-APGI-003 - APGI Hub Exploration and Launch Selection

**Journey ID**: UJ-APGI-003  
**Type**: Primary  
**Entry Point**: User scrolls to the APGI Hub section or clicks a hub navigation anchor.  
**Exit Point**: User selects one of the frozen public ISMS destination tiles.
**Error Exit Points**: Unresolved destination URL, disabled tile confusion, or missing status label.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User opens the APGI Hub area. | The hub tile grid becomes visible with clear status badges. | SCR-APGI-001 | Scroll / anchor navigation | Visible hub grid |
| 2 | User compares tiles and route labels. | The UI distinguishes each canonical public ISMS module destination. | SCR-APGI-001 | Hover / focus state | Accessible tile metadata |
| 3 | User clicks a live tile. | The browser opens the selected external destination. | SCR-APGI-001 | Click on tile | External navigation |
| 4 | User returns or continues onward. | The destination opens cleanly and the APGI site remains available for return navigation. | SCR-APGI-001 | Browser back action | Restored site context |

**Observable Outcomes**:
- The APGI Hub feels like an intentional launch surface rather than a random link list.
- The user can see the frozen public module map and move directly into the ISMS ecosystem.

**Edge Cases and Exceptions**:
- External destinations should use a clear outbound indicator.
- Disabled tiles must still be keyboard-focusable or clearly labelled for accessibility, depending on final implementation.

**Frozen v1 APGI Hub Map**:
- Maturity Roadmap / MMM -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/maturity-roadmap`
- Risk Management -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/risk-management`
- Project Implementation Tracker / PIT -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/project-implementation`
- Incident & Intelligence Hub -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/incident-intelligence`
- Data Analytics & Remote Assurance -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/data-analytics-assurance`
- Systems Integration / RADAM -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/systems-integration`
- Skills Development Portal -> `{{ISMS_PUBLIC_BASE_URL}}/marketing/skills-development`
- The v1 hub map is complete with these seven tiles; future tiles require a governance update.

---

### 2.4 Journey: UJ-APGI-004 - Contact and Conversion Handoff

**Journey ID**: UJ-APGI-004  
**Type**: Primary  
**Entry Point**: User clicks the contact CTA, footer contact link, email chip, phone chip, or a service-specific call-to-action.
**Exit Point**: User reaches the approved contact mechanism, or sees a clearly labelled contact card with email, phone, and address if outbound intent is unavailable.
**Error Exit Points**: Contact address unresolved or phone link unavailable.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User scrolls to the contact section or clicks the contact link. | The contact area comes into view with the approved call-to-action. | SCR-APGI-001 | Scroll / click | Visible contact section |
| 2 | User selects a contact method. | The interface opens `mailto:info@apginc.ca` or `tel:+14166429974` and does not expose a form in v1. | SCR-APGI-001 | Click / tap on contact CTA | Outbound link action |
| 3 | User follows the contact channel. | The browser hands off to the native mail client or phone app, while the contact card keeps the postal address visible. | External destination | Browser / OS intent | External contact channel |

**Observable Outcomes**:
- The user knows how to contact APGI and what the next step is.
- The page exposes a concrete, non-ambiguous v1 contact policy.

**Edge Cases and Exceptions**:
- If the site later adds a form, the journey must be upgraded to include validation and submission states.
- If the email or phone destination changes, the contact policy must be versioned and re-approved.

---

### 2.5 Journey: UJ-APGI-005 - LinkedIn Referral and Return

**Journey ID**: UJ-APGI-005  
**Type**: Secondary  
**Entry Point**: User clicks a LinkedIn icon, social link, or social CTA in the header or footer.  
**Exit Point**: User arrives at `https://www.linkedin.com/company/assurance-protection-group-inc` and can return to the APGI site.
**Error Exit Points**: Social link removed or destination unavailable.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User taps the LinkedIn social link. | The browser opens the external LinkedIn destination. | SCR-APGI-001 | Click / tap on social icon | External navigation |
| 2 | User reviews APGI social proof. | The LinkedIn page provides a supporting trust channel for APGI. | External destination | None | Social profile content |
| 3 | User returns to APGI. | Browser history returns the user to the previous APGI state. | SCR-APGI-001 | Browser back action | Restored site context |

**Observable Outcomes**:
- APGI's social proof is easy to verify.
- The site and LinkedIn work as a coordinated trust system, not disconnected assets.

**Edge Cases and Exceptions**:
- If the destination opens in a new tab, the original APGI page remains available immediately.

---

## Section 3: Screen-Level Interaction Definitions (REQUIRED for user-facing builds)

> **Rule**: Every screen involved in a Primary user journey must be defined here.

### Screen Inventory

| Screen ID | Screen Name | Accessible From | Leads To | Journey References |
|-----------|------------|----------------|----------|--------------------|
| SCR-APGI-001 | Home Landing Page | `/`, social shares, direct navigation, or external referrals | Section anchors, external destinations, contact handoff, social links | UJ-APGI-001, UJ-APGI-002, UJ-APGI-003, UJ-APGI-004, UJ-APGI-005 |
| SCR-APGI-002 | Mobile Navigation Overlay | Hamburger menu on the home page at small breakpoints | Section anchors, external destinations, close state | UJ-APGI-001, UJ-APGI-005 |

---

### 3.1 Screen: SCR-APGI-001 - Home Landing Page

**Screen ID**: SCR-APGI-001  
**Purpose**: Present the APGI brand, explain the offer, and provide clear next-step handoffs into training, the APGI Hub, LinkedIn, and contact channels.  
**Access Control**: Public; no authentication required.

**UI Elements**:

| Element | Type | Action / Trigger | Validation | API / Data Source |
|---------|------|-----------------|------------|-------------------|
| Logo / brand wordmark | Link | Returns to the top of the page or home route | Must be visible in header and footer | Static route |
| Primary nav links | Anchor links | Scroll to About, Services, Training, Team, or Contact sections | Must resolve to visible sections | In-page anchors |
| Hero headline | Text block | Establishes APGI positioning | Copy must be approved and readable on mobile | Static content |
| Hero primary CTA | Button | Scrolls to the training section or approved training handoff | Must be visually dominant and accessible | In-page anchor or external link |
| Hero secondary CTA | Button | Sends users to the APGI Hub or contact area | Must remain clearly distinguishable from the primary CTA | In-page anchor |
| Proof strip | Logo / text trust strip | Reinforces trust and legitimacy | APGI-owned marks and text-first credibility cues only in v1 | Static media |
| About / Who We Are block | Text section | Explains APGI's purpose and offer | Must not exceed approved copy boundary | Static content |
| Services cards | Card grid | Summarises APGI services | Cards must remain readable and visually balanced | Static content |
| Training spotlight | Card / CTA area | Promotes VPSHR Level 0 and Thinkific handoff | Current course link must be clearly labelled | External URL |
| APGI Hub tile grid | Tile grid | Routes to the frozen v1 public ISMS module destinations | Every tile must show a status badge and resolve to the frozen route map | External URLs |
| Philanthropy / Impact block | Text and image section | Explains community and mentorship narrative | Content must be APGI-owned or explicitly licensed | Static media / copy |
| Team block | Card or profile grid | Introduces people behind the brand | Bio and photo content must be APGI-owned or explicitly licensed | Static content |
| Contact CTA block | Button / link group | Opens the approved contact channel | Must not fail silently; no form in v1 | `mailto:info@apginc.ca`, `tel:+14166429974`, address card |
| Footer social links | Icon links | Opens LinkedIn and other approved destinations | Social URLs must be explicit and valid | `https://www.linkedin.com/company/assurance-protection-group-inc` |
| Footer legal links | Text links | Opens policy pages or placeholder pages | Legal pages must be present or clearly marked as pending | Internal routes / placeholders |

**State Conditions**:
- Loading state: skeleton or low-motion content shell while page assets hydrate.
- Empty state: placeholder-safe copy and layout remain visible even if images or proof assets are not final.
- Error state: missing image or unavailable outbound asset falls back to text and accessible alt content.
- Success state: all sections visible, CTAs enabled, and destination labels accurate.

---

### 3.2 Screen: SCR-APGI-002 - Mobile Navigation Overlay

**Screen ID**: SCR-APGI-002  
**Purpose**: Allow mobile visitors to reach the same key sections and external destinations without losing context.  
**Access Control**: Public; visible when the navigation toggle is opened on small screens.

**UI Elements**:

| Element | Type | Action / Trigger | Validation | API / Data Source |
|---------|------|-----------------|------------|-------------------|
| Menu button | Button | Opens and closes the overlay | Must have accessible label and focus state | Client state |
| Close button | Button | Closes the overlay | Must be reachable by keyboard | Client state |
| Nav links | Buttons / anchors | Scroll to in-page sections | Each target must exist on the home page | In-page anchors |
| Training CTA in menu | Button | Jumps to training section or approved external handoff | Must match the primary CTA wording | In-page anchor or external URL |
| LinkedIn social link | Icon link | Opens LinkedIn destination | Must have external-link indicator where needed | `https://www.linkedin.com/company/assurance-protection-group-inc` |
| Contact link | Button / link | Opens the contact section or approved contact channel | Must remain clearly labelled | Anchor or external URL |

**State Conditions**:
- Loading state: overlay is hidden until the page shell is ready.
- Empty state: menu may show only the approved core anchors if secondary content is not yet available.
- Error state: if a nav target is missing, the item must be disabled or removed rather than broken.
- Success state: menu closes cleanly after selection and focus returns to the page.

---

## Section 4: Trigger Point Catalogue (REQUIRED)

> **Rule**: Every trigger point (user action, system event, time-based event) that initiates a workflow must be documented.

| Trigger ID | Type | Description | Initiating Source | Resulting Workflow | Notes |
|-----------|------|-------------|------------------|-------------------|-------|
| TRG-APGI-001 | System Event | Homepage load and initial render | Browser navigation to `/` | UJ-APGI-001 | Public landing entry |
| TRG-APGI-002 | User Action | Hero primary CTA click | Visitor | UJ-APGI-002 | Jumps to training content |
| TRG-APGI-003 | User Action | Training spotlight click | Visitor | UJ-APGI-002 | External course handoff |
| TRG-APGI-004 | User Action | APGI Hub tile click | Visitor | UJ-APGI-003 | Frozen public ISMS destination |
| TRG-APGI-005 | User Action | Contact CTA click | Visitor | UJ-APGI-004 | Contact handoff |
| TRG-APGI-006 | User Action | LinkedIn icon click | Visitor | UJ-APGI-005 | Social proof handoff |
| TRG-APGI-007 | User Action | Mobile menu toggle | Visitor on small screens | UJ-APGI-001 / UJ-APGI-005 | Overlay open/close state |
| TRG-APGI-008 | System Event | Reduced-motion or narrow viewport rendering | Browser environment | UJ-APGI-001 | Layout and motion adaptation |

---

## Section 5: Data Movement Flows (REQUIRED)

> **Rule**: For every user journey, document the data movement from input through processing to output and storage.

### 5.1 Data Flow: UJ-APGI-001 - Brand Orientation and Trust Building

```text
User Input: Browser request for the APGI public website and scroll/navigation actions
    ↓
Frontend Processing: Render page shell, hydrate sections, attach anchors, and apply responsive layout and motion
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: Hero, proof strip, services, training, hub, team, contact, and footer content become visible
    ↓
UI Update: User sees the site as a coherent, premium brand experience
    ↓
Storage Side-Effect (if any): None
```

### 5.2 Data Flow: UJ-APGI-002 - Training Discovery and Course Handoff

```text
User Input: Click on the hero training CTA or training spotlight card
    ↓
Frontend Processing: Scroll to the training section and prepare the external handoff
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: User is routed to the current course preview and the approved Thinkific storefront
    ↓
UI Update: Training section stays readable while outbound navigation is in progress
    ↓
Storage Side-Effect (if any): None
```

### 5.3 Data Flow: UJ-APGI-003 - APGI Hub Exploration and Launch Selection

```text
User Input: Click on a hub tile or hub anchor
    ↓
Frontend Processing: Resolve tile state, badge type, and destination status against the frozen route-slug map
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: User is routed to the canonical public ISMS marketing page for the selected tile
    ↓
UI Update: Tile badges and hover/focus states communicate the frozen route map clearly
    ↓
Storage Side-Effect (if any): None
```

### 5.4 Data Flow: UJ-APGI-004 - Contact and Conversion Handoff

```text
User Input: Click on the contact CTA, email chip, phone chip, or footer contact link
    ↓
Frontend Processing: Resolve the approved contact action (`mailto:info@apginc.ca` or `tel:+14166429974`)
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: Native mail client or phone intent opens while the address card remains visible
    ↓
UI Update: The contact area remains visible and clearly labelled
    ↓
Storage Side-Effect (if any): None
```

### 5.5 Data Flow: UJ-APGI-005 - LinkedIn Referral and Return

```text
User Input: Click on the LinkedIn icon in the header or footer
    ↓
Frontend Processing: Resolve the canonical LinkedIn destination
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: LinkedIn opens at `https://www.linkedin.com/company/assurance-protection-group-inc`
    ↓
UI Update: The APGI page remains available for return navigation
    ↓
Storage Side-Effect (if any): None
```

---

## Section 6: State Transition Definitions (REQUIRED)

> **Rule**: All significant state transitions affecting user experience or data integrity must be documented.

| Entity | From State | To State | Trigger | Reversible? | Guard Conditions |
|--------|-----------|---------|---------|-------------|-----------------|
| Page shell | Unloaded | Loaded | Browser navigation to `/` | Yes | Assets available |
| Page shell | Loaded | Hydrated | Client script completes | Yes | JavaScript available |
| Mobile nav | Closed | Open | Menu button click | Yes | Small-screen or menu-enabled layout |
| Mobile nav | Open | Closed | Close button click or link selection | Yes | Focus returns to page |
| Hero CTA | Idle | Focused / Hovered | Pointer or keyboard focus | Yes | CTA visible |
| Hero CTA | Focused / Hovered | Activated | Click / tap | No | Destination configured |
| Hub tile | Available | Focused / Hovered | Pointer or keyboard focus | Yes | Tile is live and destination is valid |
| Hub tile | Focused / Hovered | Activated | Click / tap | No | Tile destination is valid |
| Contact CTA | Idle | Activated | Click / tap | No | Contact destination configured |

---

## Section 7: AI Action Integration Points (REQUIRED if AI used)

N/A - No AI action points in this module.

---

## Section 8: Report and Dashboard Flow Definitions (REQUIRED if applicable)

N/A - No reports or dashboards in this module.

---

## Section 9: End-to-End Wiring Matrix (REQUIRED)

> **Rule**: This matrix explicitly wires every UI element, API endpoint, schema table, and reporting output together. No element may be present in any one column without a corresponding entry in at least one other column.

> **Destination Policy**: All APGI Hub routes resolve against the deployment-time `ISMS_PUBLIC_BASE_URL` variable. The route slugs below are frozen; only the host may vary by environment.

| UI Element (Screen + Element ID) | API Endpoint | HTTP Method | Schema Table(s) | Report / Output | Journey Reference |
|----------------------------------|-------------|-------------|----------------|-----------------|-------------------|
| SCR-APGI-001 / Logo / brand wordmark | `/` | GET | None | Home route render | UJ-APGI-001 |
| SCR-APGI-001 / Primary nav links | `/#about`, `/#services`, `/#training`, `/#team`, `/#contact` | GET | None | Section anchors | UJ-APGI-001 |
| SCR-APGI-001 / Hero headline | None | None | None | Hero positioning copy | UJ-APGI-001 |
| SCR-APGI-001 / Hero primary CTA | `/#training` | GET | None | Training section focus | UJ-APGI-001, UJ-APGI-002 |
| SCR-APGI-001 / Hero secondary CTA | `/#hub` or `/#contact` | GET | None | Hub or contact focus | UJ-APGI-001, UJ-APGI-003, UJ-APGI-004 |
| SCR-APGI-001 / Proof strip | None | None | None | Trust cues and brand proof | UJ-APGI-001 |
| SCR-APGI-001 / About / Who We Are block | None | None | None | Brand story copy | UJ-APGI-001 |
| SCR-APGI-001 / Services cards | None | None | None | Service summary cards | UJ-APGI-001 |
| SCR-APGI-001 / Training spotlight - VPSHR Level 0 | `https://training-urls-module.vercel.app/courses/vpshr-level-0` | GET | None | Course handoff | UJ-APGI-002 |
| SCR-APGI-001 / Training spotlight - Thinkific storefront | `https://apgi.thinkific.com/` | GET | None | Public course destination | UJ-APGI-002 |
| SCR-APGI-001 / Hub tile - Maturity Roadmap / MMM | `{{ISMS_PUBLIC_BASE_URL}}/marketing/maturity-roadmap` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Risk Management | `{{ISMS_PUBLIC_BASE_URL}}/marketing/risk-management` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Project Implementation Tracker / PIT | `{{ISMS_PUBLIC_BASE_URL}}/marketing/project-implementation` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Incident & Intelligence Hub | `{{ISMS_PUBLIC_BASE_URL}}/marketing/incident-intelligence` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Data Analytics & Remote Assurance | `{{ISMS_PUBLIC_BASE_URL}}/marketing/data-analytics-assurance` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Systems Integration / RADAM | `{{ISMS_PUBLIC_BASE_URL}}/marketing/systems-integration` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Hub tile - Skills Development Portal | `{{ISMS_PUBLIC_BASE_URL}}/marketing/skills-development` | GET | None | ISMS marketing landing | UJ-APGI-003 |
| SCR-APGI-001 / Philanthropy / Impact block | None | None | None | Community and mentorship narrative | UJ-APGI-001 |
| SCR-APGI-001 / Team block | None | None | None | Leadership narrative | UJ-APGI-001 |
| SCR-APGI-001 / Contact address card | None | None | None | Postal contact display | UJ-APGI-004 |
| SCR-APGI-001 / Contact email CTA | `mailto:info@apginc.ca` | None | None | Email handoff | UJ-APGI-004 |
| SCR-APGI-001 / Contact phone CTA | `tel:+14166429974` | None | None | Phone handoff | UJ-APGI-004 |
| SCR-APGI-001 / Footer social links | `https://www.linkedin.com/company/assurance-protection-group-inc` | GET | None | External social handoff | UJ-APGI-005 |
| SCR-APGI-001 / Footer legal links | None | None | None | Policy pages and legal routes | UJ-APGI-001 |
| SCR-APGI-002 / Menu button | None | None | None | Mobile nav open/close | UJ-APGI-001, UJ-APGI-005 |
| SCR-APGI-002 / Menu nav links | `/#about`, `/#services`, `/#training`, `/#team`, `/#contact` | GET | None | Section anchors | UJ-APGI-001 |

---

## Section 10: Wiring Completeness Gate (REQUIRED)

Before this spec may be approved, confirm:

- [x] Every user journey in Section 2 maps to at least one row in the Wiring Matrix (§9)
- [x] Every screen in Section 3 maps to at least one row in the Wiring Matrix (§9)
- [x] Every API endpoint in §9 has a corresponding TRS entry (or is explicitly noted as new - pending TRS)
- [x] Every schema table in §9 is accounted for in the Architecture data model (or is explicitly noted as new)
- [x] No journey end-state is left without a defined system response or data outcome
- [x] No UI element is wired to a non-existent API endpoint or table
- [x] All AI action points in §7 have a corresponding trigger in §4

**Gate Condition**: All items above must be checked. Any unchecked item blocks approval.

---

## Section 11: Open Issues and Wiring Gaps (REQUIRED)

> **Note**: The original major and minor gaps identified during drafting are resolved in this revision. The table below is retained for traceability and approval review.

| Gap ID | Description | Severity | Artifact to Update | Status | Resolution |
|--------|-------------|----------|--------------------|--------|------------|
| GAP-001 | Canonical LinkedIn destination URL is not yet finalized. | MAJOR | UX Workflow & Wiring Spec, wiring matrix | Resolved | Frozen to `https://www.linkedin.com/company/assurance-protection-group-inc` |
| GAP-002 | Thinkific storefront URL for the public training handoff is still a placeholder. | MAJOR | UX Workflow & Wiring Spec, wiring matrix | Resolved | Frozen to `https://apgi.thinkific.com/` |
| GAP-003 | Final APGI Hub tile destination map for future ISMS app launches is not yet frozen. | MAJOR | UX Workflow & Wiring Spec, app hub inventory | Resolved | Frozen to the seven canonical public ISMS marketing routes with `ISMS_PUBLIC_BASE_URL` host resolution |
| GAP-004 | Contact destination policy (mailto, tel, form, or placeholder) is not yet finalized. | MINOR | UX Workflow & Wiring Spec, contact block | Resolved | Public v1 uses `mailto:info@apginc.ca` and `tel:+14166429974`; no form in v1 |
| GAP-005 | Rights-cleared photo and proof asset set is still subject to final content selection. | MINOR | UX Workflow & Wiring Spec, visual asset inventory | Resolved | V1 proof assets are APGI-owned or text-first only; third-party logos/photos are deferred until separately licensed |

**Open Gap Gate**: No gap of CRITICAL or MAJOR severity remains open at time of approval. Minor gaps are resolved in this draft and documented above.

---

## Section 12: Approval and Sign-Off (REQUIRED)

### Completeness Checklist

- [x] All primary user journeys fully documented in §2
- [x] All screens for primary journeys defined in §3
- [x] Trigger point catalogue (§4) complete
- [x] Data movement flows (§5) documented for all primary journeys
- [x] State transitions (§6) documented for all stateful entities
- [x] AI action points (§7) documented or explicitly N/A
- [x] Report / dashboard flows (§8) documented or explicitly N/A
- [x] Wiring matrix (§9) complete - no orphan UI elements, endpoints, or tables
- [x] Wiring completeness gate (§10) fully checked
- [x] No CRITICAL or MAJOR open gaps in §11
- [x] Derivation statement in §0 references specific App Description file and version

### Approval

**Approval Required From**:
- [ ] Foreman (FM) - UX Workflow & Wiring Spec complete and correct
- [ ] Client / User Representative - User journeys reflect actual intended workflows
- [ ] Governance Administrator - Governance compliance validated

**Approval Date**: {DATE}  
**Approved By**: {APPROVER}

**Status After Approval**: `Approved` -> Ready for FRS stage

---

## Section 13: Change History (REQUIRED)

| Version | Date | Change Description | Changed By | Approval |
|---------|------|--------------------|------------|----------|
| v0.1 | 2026-05-28 | Initial Stage 2 draft aligned to the APGI public website App Description, including journeys, screen definitions, triggers, data flows, state transitions, wiring matrix, and open gap analysis. | Johan Ras | Draft |
