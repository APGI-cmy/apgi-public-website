# APW Stage 4 Addendum - TRS Intent Alignment v0.4

**Stage:** 4 - Technical Requirements Specification  
**Authority:** CS2 - Johan Ras  
**Root intent anchor:** `APW_WEBSITE_INTENT.md`  
**Status:** Corrective alignment addendum

---

## Purpose

This addendum aligns APW technical requirements with the root website intent canon without expanding APW into backend or platform-runtime scope.

---

## Technical content model requirements

APW should support static content structures for:

- loss-prevention proposition;
- malicious and non-malicious loss explanations;
- maturity journey steps;
- maturity level summaries;
- free maturity assessment CTA and handoff destination;
- APGI ecosystem module roles;
- real-time situational awareness explanation;
- hover/click/ask/train educational content;
- anonymised case-study summaries.

These structures may be implemented as static TypeScript data, Markdown content, Astro content collections, or equivalent static files approved by the architecture.

---

## Free assessment technical boundary

APW may expose a free assessment CTA, landing section, route, or handoff link.

APW must not implement the full assessment engine, scoring persistence, user accounts, private assessment records, Supabase database tables, CRM automation, or ISMS platform runtime unless separately approved by CS2.

Where deeper assessment is required, APW must hand the visitor to the approved ISMS/APGI Hub destination.

---

## Interaction requirements

If hover/click/ask/train is implemented in APW, it must remain:

- accessible by keyboard;
- usable on mobile without hover dependency;
- clear when a link leaves APW for ISMS/APGI Hub, Maturion, or training;
- honest about pending destinations.

---

## Route and metadata requirements

Relevant APW routes must be able to expose the maturity/loss-prevention narrative in page titles, descriptions, headings, cards, and CTA metadata.

The Platform/APGI Hub page must technically support a journey-led structure, not only a module-card array.

---

## Validation expectations

Validation should check that static content for the maturity journey and free assessment handoff exists, renders, and does not require runtime secrets or private platform APIs.
