# APW Post-Merge Readiness & Launch Gap Review v0.5

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | Post-merge readiness review |
| Version | v0.5 |
| Status | In progress - APW Vercel deployment URL confirmed |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Last Updated | 2026-06-23 |
| Branch | `apw-post-merge-readiness-v05` |
| Main Baseline | PR #29 merge commit `61230a701666626e8b2386a56b279064b995488f` |
| Root Intent Anchor | `APW_WEBSITE_INTENT.md` |
| Confirmed APW Validation URL | `https://apgi-public-website.vercel.app/` |

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
- CS2-provided live deployment URL: `https://apgi-public-website.vercel.app/`.
- CS2-provided screenshot confirming the new APW homepage is visible on that URL.
- Public custom domain check for `https://apginc.ca/`.

---

## Initial Findings

### 1. Main build status

`main` is green from the GitHub/Vercel status perspective for merge commit `61230a701666626e8b2386a56b279064b995488f`.

**Disposition:** PASS for build status.

### 2. Confirmed APW deployment URL

CS2 confirmed that Vercel deploys the new APW implementation to:

`https://apgi-public-website.vercel.app/`

The supplied screenshot shows the expected APW v0.4 homepage content, including:

- APGI public navigation with `Home`, `Services`, `APGI Hub`, `Training`, `About`, `Team`, and `Contact`.
- Hero eyebrow: `Loss prevention through maturity`.
- Hero headline: `Reduce the opportunities that become loss.`
- Free assessment CTA.
- Maturity journey CTA.
- Supporting panel: `From exposed to resilient.`

**Disposition:** PASS for APW Vercel deployment visibility.

### 3. Public custom domain

The public custom domain `https://apginc.ca/` appears to still serve the legacy APGI website content and navigation, including legacy sections such as `Who We Are`, `Who You Are`, `Our Philanthropy`, and `Who Our Clients Are`.

This no longer means the APW deployment is missing. It means `apginc.ca` is a separate custom-domain mapping / launch decision.

**Disposition:** CONFIGURATION DECISION REQUIRED, not a source/build blocker.

### 4. Public route coverage

The v0.4 source implements the governed routes expected for APW, including `/`, `/services`, `/platform`, `/training`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms`.

The homepage route has been visually confirmed by CS2 on `https://apgi-public-website.vercel.app/`.

The remaining route checks should be performed against the confirmed APW Vercel URL, not `https://apginc.ca/`, unless CS2 decides that `apginc.ca` must be mapped before route validation.

**Disposition:** IN PROGRESS.

### 5. Free maturity assessment CTA

The source implements the free maturity assessment handoff using `ISMS_PUBLIC_BASE_URL` when configured, otherwise falling back to contact-assisted access.

CS2 screenshot shows the CTA label `Start free assessment` on the Vercel deployment. The target behaviour still needs to be clicked/validated:

- If `ISMS_PUBLIC_BASE_URL` is configured, CTA should route to the APGI Hub / ISMS maturity-roadmap destination.
- If not configured, CTA should use the governed fallback/contact-assisted path.

**Disposition:** LIVE CTA CHECK REQUIRED.

### 6. Content/design/legal/profile launch polish

The merged source still includes governed placeholders for legal copy and team/profile copy. These may be acceptable for internal preview or soft launch, but they are not automatically public-launch ready.

**Disposition:** POLISH / CS2 DECISION REQUIRED.

---

## Launch-Gap Register

| Gap ID | Area | Finding | Disposition | Required action |
|---|---|---|---|---|
| APW-V05-GAP-001 | APW deployment URL | New APW implementation is visible at `https://apgi-public-website.vercel.app/`. | PASS | Continue live validation on this URL. |
| APW-V05-GAP-002 | Custom public domain | `https://apginc.ca/` appears to serve legacy APGI site content, not the new APW implementation. | CONFIGURATION DECISION | Decide whether/when to map `apginc.ca` to the new Vercel APW deployment. |
| APW-V05-GAP-003 | Live route validation | Homepage has been visually confirmed on the Vercel URL; remaining routes still need live review. | IN PROGRESS | Check `/platform`, `/training`, `/services`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms` on `https://apgi-public-website.vercel.app/`. |
| APW-V05-GAP-004 | Free assessment handoff | CTA is visible on the Vercel homepage; target behaviour still requires live click/path validation. | CHECK REQUIRED | Confirm `ISMS_PUBLIC_BASE_URL` path or accept governed contact-assisted fallback. |
| APW-V05-GAP-005 | Legal copy | `/privacy` and `/terms` source routes still use governed placeholder wording. | CS2 DECISION | Decide whether placeholders are acceptable or final legal copy is required before launch. |
| APW-V05-GAP-006 | Team/profile copy | `/team` source route still uses approved-placeholder profile wording. | CS2 DECISION | Decide whether placeholders are acceptable or approved public profile copy is required before launch. |
| APW-V05-GAP-007 | Public case studies | Source provides anonymised case-study model only, not final case studies. | NON-BLOCKING / CS2 DECISION | Decide whether model-only content is acceptable for launch or whether anonymised examples should be added later. |

---

## Current Disposition

**IN PROGRESS - APW VERCEL DEPLOYMENT CONFIRMED.**

The earlier blocker is narrowed: APW is visible on the Vercel deployment URL, but `apginc.ca` remains a custom-domain mapping / launch decision.

Public launch readiness cannot be finally granted until the remaining live routes and CTA behaviour are reviewed, and CS2 decides whether legal/team placeholders are acceptable.

---

## Recommended Next Actions

1. Use `https://apgi-public-website.vercel.app/` as the v0.5 validation URL unless CS2 instructs otherwise.
2. Check the remaining live routes:
   - `/platform`
   - `/training`
   - `/services`
   - `/about`
   - `/team`
   - `/contact`
   - `/privacy`
   - `/terms`
3. Click/verify the `Start free assessment` CTA behaviour.
4. Decide whether `https://apginc.ca/` should be mapped to this new Vercel deployment now or later.
5. Decide whether legal/team placeholders are acceptable for launch or require a v0.6 polish wave.

---

## Remaining Checks

The following checks remain open:

- live `/platform` content check;
- live `/training` content check;
- live `/services`, `/about`, `/team`, `/contact`, `/privacy`, `/terms` checks;
- live free assessment CTA check;
- live responsive and visual inspection beyond the confirmed homepage screenshot;
- CS2 decision on custom-domain mapping;
- CS2 decision on legal/team/profile placeholders.
