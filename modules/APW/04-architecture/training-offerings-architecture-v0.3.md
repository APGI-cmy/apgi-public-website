# APW Architecture Addendum - Training Offerings v0.3

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture |
| Addendum | Training Offerings Expansion |
| Version | v0.3 |
| Status | Drafted for review |
| Authority | CS2: Johan Ras |

---

## Architecture Decision

Training content shall be represented as structured static content in `src/data/site.ts` and rendered through the existing Astro `/training` route.

The architecture remains static-first and public-only.

---

## Training Content Model

Each classroom/contact-delivery course must include:

- title;
- category/family;
- overview;
- target audience;
- delivery mode;
- duration;
- assessment/post-training indicators where available;
- CTA type: contact APGI.

Each e-learning/platform offering must include:

- title;
- platform status;
- lesson/time/price indicator where known;
- source surface: Thinkific/public platform;
- CTA type: Thinkific storefront unless governed course URL is supplied.

---

## Rendering Pattern

The Training page must render:

1. a training hero;
2. a mode selector/summary band distinguishing classroom and e-learning;
3. classroom/contact catalogue grid;
4. e-learning/platform catalogue grid;
5. VPSHR learning-family note;
6. contact CTA for classroom/group delivery;
7. Thinkific CTA for e-learning.

---

## Boundary

No backend course catalogue, LMS administration, learner database, payment flow, or private training API is included in this architecture update.
