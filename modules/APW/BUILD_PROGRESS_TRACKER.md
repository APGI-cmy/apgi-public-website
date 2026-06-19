# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: Stage 12 v0.4 Website Intent Build Alignment merged; post-merge validation and final site polish next  
**Last Updated**: 2026-06-19  
**Authority**: CS2: Johan Ras  
**Canonical Root**: `modules/APW`

> **Document Role**: Primary module-stage progress tracker for the APGI Public Website process.  
> **Governance Source**: `FOREMAN_OPERATING_MODEL.md`  
> **Root Website Intent Anchor**: `APW_WEBSITE_INTENT.md`

---

## Current Position

PR #26 merged the root APW website intent alignment canon in `APW_WEBSITE_INTENT.md`.

PR #27 merged the Stage 1 through Stage 11 prebuild intent-alignment addenda.

PR #28 merged Stage 12 v0.4 Website Intent Build Alignment. The public Astro implementation now includes the APGI loss-prevention maturity narrative, malicious and non-malicious loss framing, free maturity assessment CTA/handoff, journey-led APGI Hub Platform page, ecosystem role mapping, real-time situational awareness, hover/click/ask/train content, and anonymised case-study model.

The current position is post-merge validation and final public-site readiness review. The next wave should verify the merged `main` deployment and then decide whether APW needs final copy/design polish, ISMS/free-assessment URL confirmation, legal copy finalisation, team/profile content, or launch/handover evidence.

---

## Corrective Plan Status

1. Stage 1 App Description v0.2 - complete / merged in PR #12; intent-alignment addendum v0.4 merged in PR #27.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13; intent-alignment addendum v0.4 merged in PR #27.
3. Stage 3 FRS v0.2 - complete / merged in PR #14; intent-alignment addendum v0.4 merged in PR #27.
4. Stage 4 TRS v0.2 - complete / merged in PR #15; intent-alignment addendum v0.4 merged in PR #27.
5. Stage 5 Architecture v0.2A - complete / merged through PR #16 and PR #17; intent-alignment addendum v0.4 merged in PR #27.
6. Stage 6 QA-to-Red v0.2 - complete / merged in PR #18; intent-alignment addendum v0.4 merged in PR #27.
7. Stage 7 PBFAG v0.2 - complete / merged in PR #19; intent-alignment addendum v0.4 merged in PR #27.
8. Stage 8 Implementation Plan v0.2 - complete / merged in PR #20; intent-alignment addendum v0.4 merged in PR #27.
9. Stage 9 Builder Checklist v0.2 - complete / merged in PR #21; intent-alignment addendum v0.4 merged in PR #27.
10. Stage 10 IAA Pre-Brief v0.2 - complete / merged in PR #22; intent-alignment addendum v0.4 merged in PR #27.
11. Stage 11 Builder Appointment v0.2 - complete / merged in PR #23; intent-alignment addendum v0.4 merged in PR #27.
12. Stage 12 Build Evidence v0.2 - baseline implementation merged in PR #24.
13. Stage 12 Training Catalogue Expansion v0.3 - merged in PR #25.
14. Root Website Intent Canon - merged in PR #26.
15. Prebuild Intent Alignment v0.4 - merged in PR #27.
16. Stage 12 Website Intent Build Alignment v0.4 - merged in PR #28; merge commit `10ad4acf05ad4bdf9ffd5d15a0dbd1a0b90a5948`.
17. Tracker post-PR28 update - active on branch `apw-tracker-after-pr28`.

---

## Stage 12 v0.4 Outcome

| Area | Status | Notes |
|---|---|---|
| QA-to-Red | Complete | `modules/APW/11-build/stage12-v04-intent-qa-to-red.md` records RED findings before build and now follows the standard status-header format. |
| Structured data | Complete | `src/data/site.ts` adds loss framing, maturity journey, free assessment, ecosystem roles, situational awareness, learning pattern and case-study model. |
| Homepage | Complete | `/` leads with APGI loss prevention through maturity and includes free assessment CTA. |
| Platform route | Complete | `/platform` renders a journey-led APGI Hub page rather than only a module-card registry. |
| Training route | Complete | `/training` keeps v0.3 catalogue and frames training as maturity capability-building. |
| Build evidence | Complete | `modules/APW/11-build/build-evidence.md` updated for v0.4 and PR validation. |
| Boundary | Preserved | No backend, Supabase, CRM, auth, LMS admin, assessment engine, private runtime, secrets, or new environment variables added. |
| Vercel validation | Green before merge | PR #28 Vercel preview was Ready/success on the reviewed head. Merged `main` deployment should be checked next. |

---

## Current Focus

Run a post-merge APW readiness review on `main`.

Minimum checks:

- Confirm the merged `main` Vercel deployment is green.
- Inspect `/`, `/platform`, `/training`, `/services`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms` on the deployed site.
- Confirm the free maturity assessment CTA behaviour is acceptable when `ISMS_PUBLIC_BASE_URL` is configured or absent.
- Decide whether the assessment destination should remain contact-assisted pending or point to a confirmed ISMS/APGI Hub public URL.
- Review final copy tone for APGI philosophy, especially homepage and Platform.
- Decide whether legal placeholders, team/profile placeholders, case-study model, and contact handoffs are launch-acceptable or need a final polish wave.

---

## Recommended Next Wave

**APW Post-Merge Readiness & Launch Gap Review v0.5**

Purpose: inspect the merged deployment as a public website, not just a passing PR. The output should be a launch-gap list with one of three dispositions:

1. **Launch acceptable** - no blocking gaps; proceed to final launch/handover evidence.
2. **Polish required** - content/design/legal/profile/CTA improvements needed before launch.
3. **Configuration required** - environment or external destination setup needed, especially the ISMS/APGI Hub free assessment URL.

No new feature build should start until that post-merge readiness review is complete.
