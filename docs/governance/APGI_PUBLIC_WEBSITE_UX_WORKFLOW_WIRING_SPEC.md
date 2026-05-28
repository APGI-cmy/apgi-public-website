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
**Exit Point**: User reaches the current course reference or the approved Thinkific destination.  
**Error Exit Points**: Thinkific URL pending, external destination unavailable, or course asset fails to load.

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

**Edge Cases and Exceptions**:
- If the Thinkific storefront URL is still pending, the card remains clearly labelled as a placeholder.
- If the course destination is unavailable, the button degrades to a safe disabled or informational state.
- The training section remains useful even if only one course is live.

---

### 2.3 Journey: UJ-APGI-003 - APGI Hub Exploration and Launch Selection

**Journey ID**: UJ-APGI-003  
**Type**: Primary  
**Entry Point**: User scrolls to the APGI Hub section or clicks a hub navigation anchor.  
**Exit Point**: User selects a public destination, a gated destination, or a clearly labelled coming-soon tile.  
**Error Exit Points**: Unresolved destination URL, disabled tile confusion, or missing status label.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User opens the APGI Hub area. | The hub tile grid becomes visible with clear status badges. | SCR-APGI-001 | Scroll / anchor navigation | Visible hub grid |
| 2 | User compares tiles and status labels. | The UI distinguishes public, gated, and coming-soon options. | SCR-APGI-001 | Hover / focus state | Accessible tile metadata |
| 3 | User clicks a live tile. | The browser opens the selected destination or internal anchor. | SCR-APGI-001 | Click on tile | Internal anchor or external navigation |
| 4 | User encounters a coming-soon tile. | The tile explains that the destination is not yet live and does not mislead the user. | SCR-APGI-001 | Click / tap on disabled tile | No navigation; informational state |

**Observable Outcomes**:
- The APGI Hub feels like an intentional launch surface rather than a random link list.
- The user can see which destinations are live, gated, or still coming soon.

**Edge Cases and Exceptions**:
- Future ISMS tiles may remain placeholders until their routes are approved.
- External destinations should use a clear outbound indicator.
- Disabled tiles must still be keyboard-focusable or clearly labelled for accessibility, depending on final implementation.

---

### 2.4 Journey: UJ-APGI-004 - Contact and Conversion Handoff

**Journey ID**: UJ-APGI-004  
**Type**: Primary  
**Entry Point**: User clicks the contact CTA, footer contact link, or a service-specific call-to-action.  
**Exit Point**: User reaches the approved contact mechanism, or sees a clearly labelled placeholder if the contact destination is still pending.  
**Error Exit Points**: Contact address unresolved, phone link unavailable, or placeholder state not clearly labelled.

**Step-by-Step Flow**:

| Step | User Action | System Response | Screen / State | Data In | Data Out |
|------|------------|-----------------|----------------|---------|----------|
| 1 | User scrolls to the contact section or clicks the contact link. | The contact area comes into view with the approved call-to-action. | SCR-APGI-001 | Scroll / click | Visible contact section |
| 2 | User selects a contact method. | The interface opens the configured outbound channel, such as mail, call, or a future form. | SCR-APGI-001 | Click / tap on contact CTA | Outbound link action or placeholder state |
| 3 | User follows the contact channel. | The browser hands off to the native mail client, phone app, or a future form route. | External destination or placeholder state | Browser / OS intent | External contact channel |

**Observable Outcomes**:
- The user knows how to contact APGI and what the next step is.
- If the final contact method is not yet finalized, the page still makes that state obvious rather than failing silently.

**Edge Cases and Exceptions**:
- If the contact address is still pending, the CTA stays labelled as a placeholder.
- If the site later adds a form, the journey must be upgraded to include validation and submission states.

---

### 2.5 Journey: UJ-APGI-005 - LinkedIn Referral and Return

**Journey ID**: UJ-APGI-005  
**Type**: Secondary  
**Entry Point**: User clicks a LinkedIn icon, social link, or social CTA in the header or footer.  
**Exit Point**: User arrives at the approved LinkedIn destination and can return to the APGI site.  
**Error Exit Points**: LinkedIn destination not finalized or social link removed.

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
- If the canonical LinkedIn URL is not finalized, the social link should stay in a placeholder state.
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
| Proof strip | Logo / icon strip | Reinforces trust and legitimacy | Only rights-cleared assets may be used | Static media |
| About / Who We Are block | Text section | Explains APGI's purpose and offer | Must not exceed approved copy boundary | Static content |
| Services cards | Card grid | Summarises APGI services | Cards must remain readable and visually balanced | Static content |
| Training spotlight | Card / CTA area | Promotes VPSHR Level 0 and Thinkific handoff | Current course link must be clearly labelled | External URL |
| APGI Hub tile grid | Tile grid | Routes to public, gated, or coming-soon destinations | Every tile must show a status badge | External URLs or placeholder states |
| Philanthropy / Impact block | Text and image section | Explains community and mentorship narrative | Content must be rights-cleared | Static media / copy |
| Team block | Card or profile grid | Introduces people behind the brand | Bio and photo placeholders must be labelled if incomplete | Static content |
| Contact CTA block | Button / link group | Opens the approved contact channel | Must not fail silently if contact details are pending | External mailto/tel or placeholder state |
| Footer social links | Icon links | Opens LinkedIn and other approved destinations | Social URLs must be explicit and valid | External URLs |
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
| LinkedIn social link | Icon link | Opens LinkedIn destination | Must have external-link indicator where needed | External URL |
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
| TRG-APGI-004 | User Action | APGI Hub tile click | Visitor | UJ-APGI-003 | Public, gated, or coming-soon destination |
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
Response: User is routed to the approved training destination or shown a clearly labelled placeholder state
    ↓
UI Update: Training section stays readable while outbound navigation is in progress
    ↓
Storage Side-Effect (if any): None
```

### 5.3 Data Flow: UJ-APGI-003 - APGI Hub Exploration and Launch Selection

```text
User Input: Click on a hub tile or hub anchor
    ↓
Frontend Processing: Resolve tile state, badge type, and destination status
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: User is either routed to a live destination or shown a safe coming-soon/informational state
    ↓
UI Update: Tile badges and hover/focus states communicate availability clearly
    ↓
Storage Side-Effect (if any): None
```

### 5.4 Data Flow: UJ-APGI-004 - Contact and Conversion Handoff

```text
User Input: Click on the contact CTA or footer contact link
    ↓
Frontend Processing: Resolve the approved contact action (mailto, tel, or future form placeholder)
    ↓
API Call: None
    ↓
Backend Processing: None
    ↓
Database Operation: None
    ↓
Response: Native mail client, phone intent, or placeholder contact state opens
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
Response: LinkedIn opens in a new tab or current browser context, depending on the final link policy
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
| Hub tile | Available | Focused / Hovered | Pointer or keyboard focus | Yes | Tile is live or enabled |
| Hub tile | Focused / Hovered | Activated | Click / tap | No | Tile destination is valid |
| Hub tile | Coming Soon | Informational | Click / tap on disabled tile | Yes | Tile must be clearly labelled |
| Contact CTA | Idle | Activated | Click / tap | No | Contact destination configured or placeholder shown |

---

## Section 7: AI Action Integration Points (REQUIRED if AI used)

N/A - No AI action points in this module.

---

## Section 8: Report and Dashboard Flow Definitions (REQUIRED if applicable)

N/A - No reports or dashboards in this module.

---

## Section 9: End-to-End Wiring Matrix (REQUIRED)

> **Rule**: This matrix explicitly wires every UI element, API endpoint, schema table, and reporting output together. No element may be present in any one column without a corresponding entry in at least one other column.

| UI Element (Screen + Element ID) | API Endpoint | HTTP Method | Schema Table(s) | Report / Output | Journey Reference |
|----------------------------------|-------------|-------------|----------------|-----------------|-------------------|
| SCR-APGI-001 / Logo / brand wordmark | `/` | GET | None | Home route render | UJ-APGI-001 |
| SCR-APGI-001 / Primary nav links | `/#about`, `/#services`, `/#training`, `/#team`, `/#contact` | GET | None | Section anchors | UJ-APGI-001 |
| SCR-APGI-001 / Hero primary CTA | `/#training` | GET | None | Training section focus | UJ-APGI-001, UJ-APGI-002 |
| SCR-APGI-001 / Hero secondary CTA | `/#hub` or `/#contact` | GET | None | Hub or contact focus | UJ-APGI-001, UJ-APGI-003, UJ-APGI-004 |
| SCR-APGI-001 / Training spotlight - VPSHR Level 0 | `https://training-urls-module.vercel.app/courses/vpshr-level-0` | GET | None | Course handoff | UJ-APGI-002 |
| SCR-APGI-001 / Training spotlight - Thinkific handoff | `TBD` | GET | None | Public course destination | UJ-APGI-002 |
| SCR-APGI-001 / Hub tile - LinkedIn | `TBD` | GET | None | Social proof handoff | UJ-APGI-003, UJ-APGI-005 |
| SCR-APGI-001 / Hub tile - ISMS destination slot | `TBD` or informational placeholder | GET / None | None | Coming-soon state | UJ-APGI-003 |
| SCR-APGI-001 / Contact CTA | `TBD` (mailto/tel or future form route) | GET | None | Contact handoff | UJ-APGI-004 |
| SCR-APGI-001 / Footer social links | `TBD` | GET | None | External social handoff | UJ-APGI-005 |
| SCR-APGI-002 / Menu button | None | None | None | Mobile nav open/close | UJ-APGI-001, UJ-APGI-005 |
| SCR-APGI-002 / Menu nav links | `/#about`, `/#services`, `/#training`, `/#team`, `/#contact` | GET | None | Section anchors | UJ-APGI-001 |

---

## Section 10: Wiring Completeness Gate (REQUIRED)

Before this spec may be approved, confirm:

- [ ] Every user journey in Section 2 maps to at least one row in the Wiring Matrix (§9)
- [ ] Every screen in Section 3 maps to at least one row in the Wiring Matrix (§9)
- [ ] Every API endpoint in §9 has a corresponding TRS entry (or is explicitly noted as new - pending TRS)
- [ ] Every schema table in §9 is accounted for in the Architecture data model (or is explicitly noted as new)
- [ ] No journey end-state is left without a defined system response or data outcome
- [ ] No UI element is wired to a non-existent API endpoint or table
- [ ] All AI action points in §7 have a corresponding trigger in §4

**Gate Condition**: All items above must be checked. Any unchecked item blocks approval.

---

## Section 11: Open Issues and Wiring Gaps (REQUIRED)

| Gap ID | Description | Severity | Artifact to Update | Owner | Resolution Date |
|--------|-------------|----------|--------------------|-------|-----------------|
| GAP-001 | Canonical LinkedIn destination URL is not yet finalized. | MAJOR | UX Workflow & Wiring Spec, wiring matrix | Johan Ras | Open |
| GAP-002 | Thinkific storefront URL for the public training handoff is still a placeholder. | MAJOR | UX Workflow & Wiring Spec, wiring matrix | Johan Ras | Open |
| GAP-003 | Final APGI Hub tile destination map for future ISMS app launches is not yet frozen. | MAJOR | UX Workflow & Wiring Spec, app hub inventory | Johan Ras | Open |
| GAP-004 | Contact destination policy (mailto, tel, form, or placeholder) is not yet finalized. | MINOR | UX Workflow & Wiring Spec, contact block | Johan Ras | Open |
| GAP-005 | Rights-cleared photo and proof asset set is still subject to final content selection. | MINOR | UX Workflow & Wiring Spec, visual asset inventory | Johan Ras | Open |

**Open Gap Gate**: No gap of CRITICAL or MAJOR severity may remain open at time of approval. MINOR gaps must be documented with owner and target resolution date.

---

## Section 12: Approval and Sign-Off (REQUIRED)

### Completeness Checklist

- [ ] All primary user journeys fully documented in §2
- [ ] All screens for primary journeys defined in §3
- [ ] Trigger point catalogue (§4) complete
- [ ] Data movement flows (§5) documented for all primary journeys
- [ ] State transitions (§6) documented for all stateful entities
- [ ] AI action points (§7) documented or explicitly N/A
- [ ] Report / dashboard flows (§8) documented or explicitly N/A
- [ ] Wiring matrix (§9) complete - no orphan UI elements, endpoints, or tables
- [ ] Wiring completeness gate (§10) fully checked
- [ ] No CRITICAL or MAJOR open gaps in §11
- [ ] Derivation statement in §0 references specific App Description file and version

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
