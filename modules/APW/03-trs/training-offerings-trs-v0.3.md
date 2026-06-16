# APW TRS Addendum - Training Offerings v0.3

## Status Header

| Field | Value |
|---|---|
| Module | APW - APGI Public Website |
| Stage | 4 - TRS |
| Addendum | Training Offerings Expansion |
| Version | v0.3 |
| Status | Drafted for review |
| Authority | CS2: Johan Ras |

---

## Technical Requirements

| ID | Requirement |
|---|---|
| APW-TR-TRN-031 | Training offerings shall be maintained in a structured source registry, not hard-coded across multiple page files. |
| APW-TR-TRN-032 | Classroom/contact offerings and e-learning offerings shall be typed or otherwise structurally distinguishable. |
| APW-TR-TRN-033 | Training page rendering shall support responsive card grids for long catalogue content. |
| APW-TR-TRN-034 | Contact CTAs shall use existing public contact routes and `mailto:` behavior only. |
| APW-TR-TRN-035 | E-learning CTAs shall use the public Thinkific storefront unless a governed course-specific public URL exists. |
| APW-TR-TRN-036 | No secret, database, authentication, LMS admin, or payment-processing configuration shall be required for the training catalogue. |
| APW-TR-TRN-037 | The implementation shall remain compatible with static Astro output and Vercel deployment. |

---

## Validation Requirements

- `npm run build` / Vercel build must remain green.
- `/training` must render the expanded catalogue without overflow on mobile.
- No Thinkific admin URLs may be present in generated public markup.
