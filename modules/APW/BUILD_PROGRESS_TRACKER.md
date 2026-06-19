# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: APW Post-Merge Readiness & Launch Gap Review v0.5 started; production-domain configuration blocker identified  
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

PR #29 merged the tracker update after PR #28.

The current wave is APW Post-Merge Readiness & Launch Gap Review v0.5. Initial review has started and identified a launch blocker: the public production domain `https://apginc.ca/` appears to still serve the legacy APGI website rather than the merged Astro/APW implementation.

---

## Corrective Plan Status

1. Stage 1 App Description v0.2 - complete / merged in PR #12; intent-alignment addendum v0.4 merged in PR #27.
2. Stage 2 UX Workflow & Wiring v0.2 - complete / merged in PR #13; intent-alignment addendum v0.4 merged in PR #27.
3. Stage 3 FRS v0.2 - complete / merged in PR #14; intent-alignment addendum v0.4 merged in PR #27.
4. Stage 4 TRS v0.2A - complete / merged through PR #16 and PR #17; intent-alignment addendum v0.4 merged in PR #27.
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
17. Tracker post-PR28 update - merged in PR #29; merge commit `61230a701666626e8b2386a56b279064b995488f`.
18. Post-Merge Readiness & Launch Gap Review v0.5 - active on branch `apw-post-merge-readiness-v05`.

---

## Stage 12 v0.4 Outcome

| Area | Status | Notes |
|---|---|---|
| QA-to-Red | Complete | `modules/APW/11-build/stage12-v04-intent-qa-to-red.md` records RED findings before build and now follows the standard status-header format. |
| Structured data | Complete | `src/data/site.ts` adds loss framing, maturity journey, free assessment, ecosystem roles, situational awareness, learning pattern and case-study model. |
| Homepage | Complete | `/` leads with APGI loss prevention through maturity and includes free assessment CTA in source. |
| Platform route | Complete | `/platform` renders a journey-led APGI Hub page in source rather than only a module-card registry. |
| Training route | Complete | `/training` keeps v0.3 catalogue and frames training as maturity capability-building in source. |
| Build evidence | Complete | `modules/APW/11-build/build-evidence.md` updated for v0.4 and PR validation. |
| Boundary | Preserved | No backend, Supabase, CRM, auth, LMS admin, assessment engine, private runtime, secrets, or new environment variables added. |
| Vercel validation | Green after PR #29 | GitHub/Vercel status for PR #29 merge commit is success. |
| Public production domain | Blocked | `https://apginc.ca/` appears to serve legacy APGI website content, not the merged Astro/APW implementation. |

---

## Current Focus

Resolve or confirm the production-domain configuration blocker.

Minimum next checks:

- Confirm whether `https://apginc.ca/` is intended to serve the new Astro/APW implementation now.
- If yes, configure Vercel production domain/alias so the merged `main` deployment is served at `https://apginc.ca/`.
- If no, identify the correct production/public validation URL for APW.
- Confirm `ISMS_PUBLIC_BASE_URL` for the free maturity assessment destination, or formally accept the contact-assisted pending fallback.
- Re-run live route validation only after the correct public deployment URL is confirmed.

---

## Current v0.5 Disposition

**Configuration required.**

The merged source and Vercel status are good, but public launch readiness cannot be granted while the public production domain appears to show the legacy site instead of APW.
