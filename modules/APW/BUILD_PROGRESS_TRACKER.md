# APW Build Progress Tracker

**Module**: APW (APGI Public Website)  
**Module Slug**: APW  
**Status**: APW Post-Merge Readiness & Launch Gap Review v0.5 in progress; APW Vercel deployment URL confirmed  
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

The current wave is APW Post-Merge Readiness & Launch Gap Review v0.5. CS2 confirmed that the new APW implementation is visible at `https://apgi-public-website.vercel.app/`. The public custom domain `https://apginc.ca/` still appears to serve the legacy APGI site, so custom-domain mapping remains a separate configuration/launch decision rather than proof that the APW deployment is missing.

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
| Homepage | Confirmed on APW Vercel URL | `/` shows APGI loss prevention through maturity and includes free assessment CTA on `https://apgi-public-website.vercel.app/`. |
| Platform route | Source complete / live check pending | `/platform` renders a journey-led APGI Hub page in source rather than only a module-card registry. |
| Training route | Source complete / live check pending | `/training` keeps v0.3 catalogue and frames training as maturity capability-building in source. |
| Build evidence | Complete | `modules/APW/11-build/build-evidence.md` updated for v0.4 and PR validation. |
| Boundary | Preserved | No backend, Supabase, CRM, auth, LMS admin, assessment engine, private runtime, secrets, or new environment variables added. |
| Vercel validation | Green after PR #29 | GitHub/Vercel status for PR #29 merge commit is success. |
| APW Vercel URL | Confirmed | `https://apgi-public-website.vercel.app/` shows the new APW implementation. |
| Public custom domain | Configuration decision | `https://apginc.ca/` appears to serve legacy APGI website content; decide whether/when to map it to the new APW deployment. |

---

## Current Focus

Continue live validation against the confirmed APW deployment URL:

`https://apgi-public-website.vercel.app/`

Minimum next checks:

- Review `/platform`, `/training`, `/services`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms` on the APW Vercel URL.
- Click/verify `Start free assessment` CTA behaviour.
- Confirm whether `ISMS_PUBLIC_BASE_URL` is configured or whether the contact-assisted fallback is accepted for launch.
- Decide whether `https://apginc.ca/` should be mapped to this new Vercel deployment now or later.
- Decide whether legal/team placeholders are launch-acceptable or require a v0.6 polish wave.

---

## Current v0.5 Disposition

**In progress - APW Vercel deployment confirmed.**

The merged source and Vercel status are good, and the new APW homepage is visible on the Vercel URL. Final launch readiness still requires remaining route/CTA checks and CS2 decisions on custom-domain mapping plus legal/team/profile placeholders.
