# APW VPSHR Marketing Enhancement — App Description Addendum v0.1
**Status:** PROPOSED / not approved for implementation
**Date:** 2026-11-15
**Authority:** CS2 — Johan Ras
**Parent:** `APW_WEBSITE_INTENT.md`, `FOREMAN_OPERATING_MODEL.md`, `modules/APW/BUILD_PROGRESS_TRACKER.md`
**Scope:** Documentation-only, APW public marketing enhancements. This does not replace Stage 1 or reopen completed stages.

## Product purpose
Enhance the existing APGI Public Website to make APGI's Voluntary Principles on Security and Human Rights (VPSHR) training discoverable, understandable and actionable; support targeted LinkedIn promotion via the separate APGI Content Command Centre (CCC); and direct prospective learners or corporate training buyers into an approved enrolment, enquiry or learning pathway.

## Alignment
APGI's overarching proposition remains **loss prevention through operational maturity**. Training is the skills/capability-building layer in the assessment → maturity → roadmap → implementation → monitoring/assurance journey. VPSHR is an initial high-priority course campaign, **not a replacement** for the full APGI services, training catalogue or maturity assessment entry point.

## Users and jobs to be done
- Corporate security leaders, mining/extractive operators, contractor managers and compliance teams: understand fit, outcomes and enterprise delivery options; request a training discussion.
- Individual learners and security personnel: understand course level, prerequisites, delivery mode, access status and approved enrolment handoff.
- APGI content owner: publish only approved public course statements and use traceable landing URLs for LinkedIn.
- APGI approver/CS2: approve course claims, CTAs, campaign status and launch gates.

## Functional boundaries
**APW owns:** public course information, responsive landing page, metadata/SEO, accessible CTA links and contact handoff, conversion event instrumentation subject to consent, and routing to authorised external systems.
**Training repo / LMS owns:** course content, learner accounts, enrolment, assessments, progress, certificates and payment, where actually supported.
**Content Command Centre owns:** private campaign asset lifecycle: upload/source → draft → review → approved → scheduled/exported → published → measured. Automated LinkedIn publication is future scope contingent on approved integrations and permissions.
**Outside scope:** authoring a course inside APW, duplicating LMS/Auth/CRM, accepting payments, storing learner records, direct social posting without authorisation, replacing the existing custom domain.

## Core public experience
Visitor enters from LinkedIn → VPSHR landing page → sees course identity, audience, practical learning outcomes, format, duration, prerequisites, language, fees or enquiry status, provider credentials, privacy notice and CTA → reaches a verified course/enquiry endpoint. If Level 1 is not launch-ready, show a truthful 'Register interest / Request information' CTA, not 'Start now' or 'Enrol now'.

## Key hard decision: Level 0 vs Level 1
Training README and structured data currently document a VPSHR Level 0 foundational course, while its URL map and static catalogue mark Level 1 'Coming soon'. The APW source catalogue separately lists Level 1 as a classroom/e-learning offering. **These claims must be reconciled by the course owner and confirmed against the deployed LMS before any Level 1 enrolment advertising.** Do not silently rename Level 0 as Level 1, imply Level 1 is live, or advertise certificates/pricing without evidence.

## Success signals
Approved campaign landing page deployed without broken links; website and LinkedIn messaging consistent; enquiries route to an approved monitored destination; mobile accessibility and speed acceptable; measurable campaign source attribution where consent permits; no unapproved public claims; zero changes to protected platform boundaries.

## Non-functional constraints
Responsive and accessible design (target WCAG 2.2 AA); privacy-by-design and minimal data collection; no public API secrets; only approved third-party scripts; clear editorial provenance, versioning and human approval; preserve existing loss-prevention/maturity narrative and free maturity assessment journey.

## Release rule
This addendum is a proposal. Prior to build, Foreman must reconcile it with the existing APW Stage 1–12 canon, record scope, assign bounded work, derive QA-to-Red, perform QP, ECAP, independent IAA and obtain CS2 disposition. No deployment, merge or domain switch is authorised by this document.
