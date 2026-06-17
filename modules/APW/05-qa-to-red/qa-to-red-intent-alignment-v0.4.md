# APW Stage 6 Addendum - QA-to-Red Intent Alignment v0.4

**Stage:** 6 - QA-to-Red  
**Authority:** CS2 - Johan Ras  
**Root intent anchor:** `APW_WEBSITE_INTENT.md`  
**Status:** Corrective alignment addendum

---

## Purpose

This addendum adds RED tests that fail any APW implementation that ignores the root website intent canon.

---

## Additional QA-to-Red tests

### APW-QA-INTENT-001 - Root intent acknowledgement

The APW build evidence must cite `APW_WEBSITE_INTENT.md` as a root intent anchor. If it does not, this test remains RED.

### APW-QA-INTENT-002 - Loss-prevention proposition

The website must explain APGI as a holistic loss-prevention and maturity-improvement partner. If APGI is presented only as a generic security service provider, this test remains RED.

### APW-QA-INTENT-003 - Malicious and non-malicious loss

The website must distinguish malicious and non-malicious loss in public-facing language. If this framing is absent, this test remains RED.

### APW-QA-INTENT-004 - Maturity journey spine

The website must explain the maturity journey from assessment to resilient operations. If the journey is not visible across the homepage and/or Platform/APGI Hub page, this test remains RED.

### APW-QA-INTENT-005 - Free maturity assessment entry point

The website must provide a visible free maturity assessment entry point and handoff path to ISMS/APGI Hub for deeper assessment. If this path is missing or unclear, this test remains RED.

### APW-QA-INTENT-006 - Platform is not a flat app directory

The Platform/APGI Hub page must explain how ecosystem modules work together in the maturity journey. A page that only shows module cards remains RED.

### APW-QA-INTENT-007 - Ecosystem role clarity

The website must explain the roles of MMM, Risk Management, PIT, Incident & Intelligence, RADAM/Data Analytics/Remote Assurance, Skills Development/Training, and ISMS/APGI Hub. If roles are missing or disconnected, this test remains RED.

### APW-QA-INTENT-008 - Real-time situational awareness

The website must introduce APGI's concept of identifying work, risk, controls, evidence, exceptions, and escalation early enough to prevent or mitigate loss. If absent, this test remains RED.

### APW-QA-INTENT-009 - Hover/click/ask/train accessibility

If APW implements hover/click/ask/train interactions, they must work without hover-only dependency and must be usable on mobile/keyboard. If not, this test remains RED.

### APW-QA-INTENT-010 - Case-study confidentiality

Any case-study content must be anonymised unless approval exists. If client or project names are exposed without recorded permission, this test remains RED.

---

## Boundary test

APW must not implement full private platform functionality as part of these intent requirements. It introduces, explains, and hands off to the relevant destination.
