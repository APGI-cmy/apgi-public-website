# APW Post-Merge Readiness & Launch Gap Review v0.5

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | Post-merge readiness review |
| Version | v0.5 |
| Status | Started - initial configuration blocker identified |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-post-merge-readiness-v05` |
| Main Baseline | PR #29 merge commit `61230a701666626e8b2386a56b279064b995488f` |
| Root Intent Anchor | `APW_WEBSITE_INTENT.md` |

---

## Purpose

Inspect the merged `main` deployment as a public launch candidate, not merely as a passing PR.

This review checks whether APW is ready for public launch, whether configuration is still required, and whether final polish is needed before CS2 launch/handover.

---

## Review Inputs

- PR #26: root APW website intent canon.
- PR #27: Stage 1-11 intent-alignment addenda.
- PR #28: Stage 12 v0.4 Website Intent Build Alignment.
- PR #29: post-PR28 tracker update.
- `modules/APW/BUILD_PROGRESS_TRACKER.md` on `main`.
- GitHub/Vercel commit status for PR #29 merge commit.
- Public production domain check for `https://apginc.ca/`.

---

## Initial Findings

### 1. Main build status

`main` is green from the GitHub/Vercel status perspective for merge commit `61230a701666626e8b2386a56b279064b995488f`.

**Disposition:** PASS for build status.

### 2. Public production domain

The public domain `https://apginc.ca/` does not currently appear to serve the newly merged Astro/APW implementation. It still presents the legacy public website content and navigation, including legacy sections such as `Who We Are`, `Who You Are`, `Our Philanthropy`, and `Who Our Clients Are`.

The expected APW v0.4 homepage should lead with loss prevention through maturity and include the maturity journey/free assessment/APGI Hub narrative. That is not visible on the current public domain check.

**Disposition:** CONFIGURATION REQUIRED / LAUNCH BLOCKER.

### 3. Public route coverage on production domain

The v0.4 source implements the governed routes expected for APW, including `/`, `/services`, `/platform`, `/training`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms`.

However, because `https://apginc.ca/` appears to be serving the legacy site, route-level public verification cannot be completed against the intended production domain yet.

**Disposition:** BLOCKED by production domain mapping/configuration.

### 4. Free maturity assessment CTA

The source implements the free maturity assessment handoff using `ISMS_PUBLIC_BASE_URL` when configured, otherwise falling back to contact-assisted access.

Because the production domain is not serving the new APW implementation, the live CTA cannot yet be validated on `https://apginc.ca/`.

**Disposition:** CONFIGURATION REQUIRED.

### 5. Content/design/legal/profile launch polish

The merged source still includes governed placeholders for legal copy and team/profile copy. These may be acceptable for internal preview, but they are not automatically public-launch ready.

**Disposition:** POLISH / CS2 DECISION REQUIRED.

---

## Launch-Gap Register

| Gap ID | Area | Finding | Disposition | Required action |
|---|---|---|---|---|
| APW-V05-GAP-001 | Production domain | `https://apginc.ca/` appears to serve the legacy site, not the merged Astro/APW implementation. | CONFIGURATION REQUIRED - BLOCKER | Confirm Vercel production alias/domain mapping and deploy the merged APW build to the public domain. |
| APW-V05-GAP-002 | Production route validation | Public route checks cannot be completed on the intended domain while it serves the legacy site. | BLOCKED | Re-run route review after domain/deployment mapping is corrected. |
| APW-V05-GAP-003 | Free assessment handoff | CTA behaviour cannot be verified on production until the APW implementation is live on the domain. | CONFIGURATION REQUIRED | Confirm `ISMS_PUBLIC_BASE_URL` or accept contact-assisted pending handoff. |
| APW-V05-GAP-004 | Legal copy | `/privacy` and `/terms` source routes still use governed placeholder wording. | CS2 DECISION | Decide whether placeholders are acceptable or final legal copy is required before launch. |
| APW-V05-GAP-005 | Team/profile copy | `/team` source route still uses approved-placeholder profile wording. | CS2 DECISION | Decide whether placeholders are acceptable or approved public profile copy is required before launch. |
| APW-V05-GAP-006 | Public case studies | Source provides anonymised case-study model only, not final case studies. | NON-BLOCKING / CS2 DECISION | Decide whether model-only content is acceptable for launch or whether anonymised examples should be added later. |

---

## Current Disposition

**CONFIGURATION REQUIRED.**

The merged APW source and main build status are in a good state, but the public production domain check indicates that the new APW implementation is not yet what visitors see at `https://apginc.ca/`.

This is a launch blocker until the domain/deployment mapping is corrected or CS2 confirms that a different production URL should be used for APW launch validation.

---

## Recommended Next Actions

1. Confirm whether `https://apginc.ca/` is intended to serve the new Astro APW implementation immediately.
2. If yes, configure the Vercel production domain/alias so the merged `main` deployment is served at `https://apginc.ca/`.
3. Confirm `ISMS_PUBLIC_BASE_URL` for the free maturity assessment destination, or formally accept the contact-assisted pending fallback.
4. Re-run route validation after the domain is corrected.
5. Decide whether legal/team placeholders are launch-acceptable or require a v0.6 polish wave.

---

## Not Started / Blocked Checks

The following checks remain blocked until the production domain serves the APW implementation:

- live `/platform` content check;
- live `/training` content check;
- live `/services`, `/about`, `/team`, `/contact`, `/privacy`, `/terms` checks;
- live CTA checks;
- live responsive and visual inspection of the production domain.
