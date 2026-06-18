# APW Stage 12 v0.4 - Intent QA-to-Red

**Wave:** Stage 12 Website Intent Build Alignment v0.4  
**Branch:** `apw-stage12-intent-build-v04`  
**Authority:** CS2 - Johan Ras  
**Root intent anchor:** `APW_WEBSITE_INTENT.md`  
**Prebuild alignment:** Stage 1-11 intent addenda merged in PR #27  
**Status:** QA-to-Red before implementation

---

## Purpose

This QA-to-Red artifact applies the new APW intent checks to the current Stage 12 implementation before build changes are made.

The current website already has a functional Astro baseline and training catalogue. This wave is limited to turning the newly introduced intent checks green.

---

## RED findings against current implementation

| QA ID | Check | Current state | Disposition before build |
|---|---|---|---|
| APW-QA-INTENT-001 | Build evidence cites `APW_WEBSITE_INTENT.md` | Existing build evidence predates PR #26/#27. | RED |
| APW-QA-INTENT-002 | APGI is presented as holistic loss-prevention and maturity-improvement partner | Homepage still leads with generic protecting people/process/property and advisory wording. | RED |
| APW-QA-INTENT-003 | Malicious and non-malicious loss are explained | No explicit malicious/non-malicious loss framing on public pages. | RED |
| APW-QA-INTENT-004 | Maturity journey is visible | Current site shows services/platform/training, but not the assessment-to-resilience journey. | RED |
| APW-QA-INTENT-005 | Free maturity assessment entry point exists | No free maturity assessment CTA/handoff currently visible. | RED |
| APW-QA-INTENT-006 | Platform is not a flat app directory | Platform route currently renders a module registry/card list with pending links. | RED |
| APW-QA-INTENT-007 | Ecosystem roles are mapped to maturity journey | Module names exist, but their maturity-journey roles are not explained. | RED |
| APW-QA-INTENT-008 | Real-time situational awareness concept is introduced | Current implementation does not explain work/risk/control/evidence/exception awareness. | RED |
| APW-QA-INTENT-009 | Hover/click/ask/train is supported/accessibly represented if used | Not represented in public content. | RED |
| APW-QA-INTENT-010 | Case-study confidentiality is protected | No case-study section or confidentiality framing exists. | RED |
| APW-QA-BOUNDARY-001 | No unapproved backend/platform runtime scope | Existing site is static/public only. | GREEN |

---

## Build-to-green target

The builder may change only what is required to make the RED intent checks green:

- public content/data and Astro rendering;
- homepage narrative sections;
- Platform/APGI Hub journey structure;
- free assessment CTA/handoff with governed pending state if the final ISMS URL is not configured;
- build evidence and tracker updates.

No backend assessment engine, Supabase/database change, CRM, auth, LMS administration, or private ISMS/APGI Hub runtime may be added.
