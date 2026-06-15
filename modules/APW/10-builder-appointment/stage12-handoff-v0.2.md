# APW Stage 11 - Stage 12 Handoff v0.2

## Purpose

This handoff defines what the APW Stage 12 Implementation Builder must carry forward from the Stage 11 appointment.

Stage 11 authorizes a governed transition to build evidence after review and merge. It does not perform the build.

---

## Stage 12 Starting Conditions

The Stage 12 builder must begin by recording:

1. repository binding to `APGI-cmy/apgi-public-website`;
2. baseline branch and commit;
3. source package acknowledgement;
4. Stage 8 implementation plan alignment;
5. Stage 9 checklist alignment;
6. Stage 6 QA ID mapping approach;
7. public configuration and deployment evidence plan.

---

## Required Stage 12 Evidence Package

Stage 12 must produce evidence for:

- required route rendering;
- desktop and mobile navigation;
- footer links and primary CTA links;
- homepage section flow and conversion path;
- services depth;
- platform / APGI Hub modules and handoff links;
- Thinkific training handoff;
- contact handoffs;
- privacy and terms routes;
- premium visual system;
- accessibility basics;
- responsive behavior;
- metadata and social readiness;
- `.env.example` and public config boundary;
- build logs and validation output;
- Vercel deployment URL/status where available;
- source inspection for public-only scope;
- QA-to-green matrix tied to `APW-QA-001` through `APW-QA-030`.

---

## Route Expectations

The Stage 12 builder must verify the final route slugs against the approved Architecture and QA catalog before implementation. Expected public coverage includes:

- `/`
- services
- platform or APGI Hub
- training
- about
- team
- contact
- privacy
- terms

---

## Implementation Baseline

Unless CS2 approves an exception, Stage 12 must use:

- Astro static site baseline;
- Vercel deployment target;
- Node 20+;
- `npm run build` as the build command;
- `npm run validate` or an equivalent validation command;
- `dist` output.

Expected project structure includes `package.json`, Astro config, environment example, pages, layouts, components, public assets, scripts, and generated output evidence.

---

## Handoff Disposition

Stage 12 may proceed only after Stage 11 review and merge or explicit CS2 override.

The first Stage 12 PR must not claim the website is complete unless it includes build, route, deployment, UX, accessibility, metadata, and QA evidence sufficient to turn the Stage 6 RED catalog green.
