# APW Architecture v0.4

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 5 - Architecture |
| Version | v0.4 |
| Status | Drafted for review |
| Owner | Johan Ras |
| Authority | CS2: Johan Ras |
| Branch | `apw-maturion-offerings-appdesc-v04` |
| Upstream | TRS v0.4 and TRS v0.4A hardening addendum |

---

## 1. Purpose

This architecture defines how APW v0.4 shall be structured as a static-first public website that presents APGI's maturity-led offering architecture.

It converts TRS v0.4 into an implementation architecture without authorizing implementation.

Build work remains blocked until QA-to-Red v0.4 exists.

---

## 2. Architectural Boundary

APW v0.4 remains a static-first Astro public website.

The architecture shall not introduce:

- Supabase runtime dependency;
- authentication;
- backend contact-form processing;
- payment processing;
- learner accounts;
- public DMC/AIMC access;
- live public Maturion chat;
- private app surfaces;
- MMM, PIT, Risk, RADAM, or Incident and Intelligence app functionality inside APW.

Public content shall be driven by approved static/build-time data.

---

## 3. Route Architecture

Architecture v0.4 adopts a multi-route model.

Required first-class public routes:

| Route | Purpose |
|---|---|
| `/` | Homepage and maturity-led journey selector. |
| `/security-philosophy` | Explain APGI's maturity-led security philosophy. |
| `/maturity-roadmap` | Explain maturity levels, domains, MPSs, criteria, evidence, and improvement journey. |
| `/consulting` | Explain consulting and implementation support. |
| `/remote-assurance` | Explain independent review, assurance feedback, and control visibility. |
| `/platform` | Explain Digital Tools / Maturion ISMS public-safe ecosystem. |
| `/case-studies` | Present anonymized public-safe proof patterns. |
| `/training` | Preserve expanded classroom/contact and e-learning training catalogue. |
| `/contact` | Direct public contact handoff without backend processing. |
| `/privacy` | Legal/privacy route. |
| `/terms` | Legal/terms route. |

Homepage sections may summarize the offering areas, but they shall not replace the first-class routes unless CS2 explicitly approves a route omission.

---

## 4. Route Registry Architecture

A route registry shall be the source of truth for route metadata, navigation, homepage journey cards, and route-level CTAs where practical.

Required route registry shape:

```ts
type RouteStatus = 'live' | 'placeholder' | 'contact-only' | 'coming-soon' | 'private';

type CtaType = 'internal' | 'external' | 'contact' | 'training' | 'thinkific' | 'maturion-placeholder' | 'coming-soon';

type RouteCta = {
  label: string;
  href: string;
  type: CtaType;
  isExternal: boolean;
};

type PublicRouteRecord = {
  id: string;
  slug: string;
  navLabel: string;
  pageTitle: string;
  metaDescription: string;
  summary: string;
  primaryCta: RouteCta;
  secondaryCta?: RouteCta;
  publicStatus: RouteStatus;
};
```

Rules:

- IDs must be stable.
- Required strings must be non-empty and public-safe.
- Private routes or private statuses must not render private URLs or private implementation detail.
- Coming-soon or placeholder statuses must render honest copy and a safe next step.

---

## 5. Content Data Architecture

APW v0.4 shall extend the existing static content model with typed collections for:

- offering cards;
- maturity cards;
- tool cards;
- case-study cards;
- training cards;
- training recommendations;
- Ask Maturion fallback copy.

### Offering card record

```ts
type OfferingCard = {
  id: string;
  title: string;
  hoverSummary: string;
  detailSummary: string;
  maturityRelationship: string;
  primaryCta: RouteCta;
  secondaryCta?: RouteCta;
  publicStatus: RouteStatus;
};
```

### Maturity card record

```ts
type MaturityCard = {
  id: string;
  levelName: 'Basic' | 'Reactive' | 'Compliant' | 'Proactive' | 'Resilient';
  shortDefinition: string;
  detailExplanation: string;
  evidenceImplication: string;
  nextStep: string;
  recommendedCta: RouteCta;
};
```

### Tool card record

```ts
type ToolCard = {
  id: string;
  toolName: string;
  oneLinePurpose: string;
  maturityRole: string;
  publicPrivateStatus: RouteStatus;
  detailSummary: string;
  askMaturionFallback: AskMaturionMode;
  nextStepCta: RouteCta;
};
```

### Case-study card record

```ts
type CaseStudyCard = {
  id: string;
  title: string;
  anonymizedContext: string;
  challenge: string;
  approach: string;
  resultPattern: string;
  relatedCapabilities: string[];
  publicSafetyNote: string;
  cta: RouteCta;
};
```

### Training recommendation record

```ts
type TrainingRecommendation = {
  id: string;
  topic: string;
  relatedTrainingIds: string[];
  fallbackCta: RouteCta;
};
```

---

## 6. Component Architecture

The build architecture shall prefer reusable static Astro components.

Required component families:

| Component | Role |
|---|---|
| `RouteHero` | Route-level headline, summary, and CTA block. |
| `JourneySelector` | Homepage entry point into required offering areas. |
| `OfferingCardGrid` | Renders offering cards with summary and detail behavior. |
| `MaturityLadder` | Renders five maturity levels in structured progression. |
| `ToolCardGrid` | Renders public-safe Maturion/tool ecosystem cards. |
| `CaseStudyGrid` | Renders anonymized challenge/approach/result cards. |
| `TrainingCatalogue` | Preserves classroom/contact and e-learning split. |
| `DetailSurface` | Reusable page section, modal, drawer, or detail panel pattern. |
| `AskMaturionFallback` | Reusable Ask Maturion placeholder/CTA pattern. |
| `CtaLink` | Normalizes internal, external, Thinkific, contact, and placeholder CTAs. |

No heavy client-side application shell is required for these components.

---

## 7. Interaction Architecture

Hover -> Click -> Ask -> Train is implemented through reusable data-driven components.

### Hover / summary

- Cards render visible summary text by default or on hover where appropriate.
- Critical information is never hover-only.
- Mobile and keyboard users receive equivalent summary access.

### Click / detail

Detail behavior may use:

- dedicated route navigation;
- anchored detail sections;
- modal;
- drawer;
- inline expandable panel.

Architecture preference:

1. Use route or anchored sections for major offering detail.
2. Use inline expandable panels for card-level detail where simpler.
3. Use modal/drawer only when the design requires overlay behavior and accessibility rules can be satisfied.

### Ask

`AskMaturionFallback` supports only:

- `comingSoon`;
- `contact`;
- `training`;
- `approvedExternal`.

The label and body copy shall come from a central content source.

No runtime call to private systems is allowed.

### Train

Train routing is implemented through approved training records, public Thinkific path, or contact path.

The architecture shall not invent training courses or imply APW enrolment/payment.

---

## 8. Accessibility Architecture

If modal or drawer surfaces are used, the implementation architecture must support:

- focus moves into opened surface;
- focus returns to triggering control on close;
- visible close control;
- Escape close for modal dialogs unless later accessibility review approves a safer alternative;
- accessible name or heading;
- no keyboard trap;
- no critical hover-only content.

All cards and CTAs must be keyboard reachable and have meaningful accessible names.

Reduced-motion preferences must be respected for transitions.

---

## 9. Public-Safety Architecture

Public-safety controls are implemented through data and rendering rules:

- tool records carry public/private status;
- private status never renders private URLs;
- case-study records require a publicSafetyNote;
- visitor-facing copy must not include private bucket paths, table names, record IDs, credentials, secrets, tokens, environment values, private app routes, or private client/project detail;
- placeholders must state the limitation honestly;
- live public AI chat is excluded until a later approved integration wave.

---

## 10. Metadata and SEO Architecture

Each first-class route shall use the route registry to provide:

- page title;
- meta description;
- nav label;
- route slug;
- page summary;
- primary CTA.

Sitemap, robots, metadata, navigation, and CTAs must not advertise missing routes or missing files.

External CTAs, including Thinkific and any approved public Maturion/MMM destination, must be distinguishable from internal routes.

---

## 11. Validation Architecture

Architecture v0.4 shall enable QA-to-Red v0.4 to test:

- required routes exist;
- route registry is complete;
- required card families render;
- card IDs are stable;
- detail behavior exists;
- Ask Maturion fallback copy is centralized and consistent;
- Train CTAs route to approved training/contact/Thinkific paths;
- case-study cards contain publicSafetyNote;
- public/private status prevents private URL rendering;
- sitemap/robots/metadata do not reference missing routes;
- mobile and keyboard behavior are testable.

---

## 12. File-Level Architecture Direction

Expected implementation targets, subject to final build wave:

| Area | Likely target |
|---|---|
| Route registry and shared content data | `src/data/site.ts` or split `src/data/*.ts` files. |
| Reusable card/detail components | `src/components/*.astro` or equivalent. |
| First-class routes | `src/pages/[slug].astro` plus structured route records, or explicit route files where needed. |
| Global styling | `public/styles/global.css` or approved CSS structure. |
| Build evidence | `modules/APW/11-build/build-evidence.md` in build stage only. |

This Architecture does not create implementation files.

---

## 13. Negative Architecture Requirements

Architecture v0.4 shall not design:

- Supabase runtime access;
- client-side private-service fetches;
- DMC/AIMC public browsing;
- public AI chat;
- authentication;
- backend forms;
- payment processing;
- learner accounts;
- Thinkific administration;
- MMM/PIT/Risk/RADAM/Incident app functionality inside APW.

---

## 14. Downstream Gate

Next required stage: QA-to-Red v0.4.

This Architecture does not authorize implementation.
