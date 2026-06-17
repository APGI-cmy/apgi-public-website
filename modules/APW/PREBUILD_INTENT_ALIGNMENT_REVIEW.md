# APW Prebuild Intent Alignment Review

**Wave:** APW prebuild intent alignment v0.1  
**Branch:** `apw-prebuild-intent-alignment-v01`  
**Authority:** CS2 - Johan Ras  
**Root intent anchor:** `APW_WEBSITE_INTENT.md`  
**Scope:** Review and align APW corrective Stage 1 through Stage 11 prebuild artifacts before further implementation relies on the maturity/loss-prevention narrative.

---

## 1. Foreman finding

The corrective prebuild chain was strong on multi-page website structure, services, training, APGI Hub module visibility, Vercel/Astro boundaries, and no-backend discipline.

However, before `APW_WEBSITE_INTENT.md`, the chain did not consistently treat APGI's **loss-prevention maturity journey** as the conceptual spine of the website.

The recurring gap was this:

- APGI Hub / Platform was sufficiently described as a module ecosystem.
- The stages did not consistently require the website to explain why those modules belong together in one maturity journey.
- Free maturity assessment handoff into ISMS/APGI Hub was not explicit enough as a public conversion path.
- Malicious and non-malicious loss prevention was not consistently framed as the business problem APGI solves.
- Case studies and hover/click/ask/train were not consistently preserved as downstream content and interaction obligations.

---

## 2. Alignment action taken

This wave adds Stage 1 through Stage 11 intent-alignment addenda. The addenda do not replace the existing corrective artifacts. They bind them to `APW_WEBSITE_INTENT.md` and close the narrative gap before further APW implementation work proceeds.

Added stage addenda:

1. `modules/APW/00-app-description/app-description-intent-alignment-v0.4.md`
2. `modules/APW/01-ux-workflow-wiring/ux-intent-alignment-v0.4.md`
3. `modules/APW/02-frs/frs-intent-alignment-v0.4.md`
4. `modules/APW/03-trs/trs-intent-alignment-v0.4.md`
5. `modules/APW/04-architecture/architecture-intent-alignment-v0.4.md`
6. `modules/APW/05-qa-to-red/qa-to-red-intent-alignment-v0.4.md`
7. `modules/APW/06-pbfag/pbfag-intent-alignment-v0.4.md`
8. `modules/APW/07-implementation-plan/implementation-plan-intent-alignment-v0.4.md`
9. `modules/APW/08-builder-checklist/builder-checklist-intent-alignment-v0.4.md`
10. `modules/APW/09-iaa-pre-brief/iaa-pre-brief-intent-alignment-v0.4.md`
11. `modules/APW/10-builder-appointment/builder-appointment-intent-alignment-v0.4.md`

---

## 3. Cross-stage alignment rule

From this wave onward, every APW prebuild and build artifact must preserve the following canon:

> APW presents APGI as a holistic loss-prevention and maturity-improvement partner. The website must explain malicious and non-malicious loss, organisational opportunity generation, maturity assessment, criteria-based gap identification, roadmap creation, long-term implementation, monitoring, remote assurance, coaching, training, and platform handoff as one connected maturity journey.

A stage is not aligned if it reduces APGI to:

- a generic security consultancy;
- a static services brochure;
- a flat APGI Hub app directory;
- a training catalogue without maturity context;
- a technology vendor without consulting and assurance context;
- a website with no free maturity assessment entry point and no ISMS/APGI Hub handoff.

---

## 4. Stage-by-stage disposition

| Stage | Existing gap | Alignment disposition |
|---|---|---|
| Stage 1 App Description | Strong site upgrade context, weak maturity/loss-prevention spine | Addendum binds App Description to root intent and free assessment journey |
| Stage 2 UX | Strong page/CTA concepts, weak hover/click/ask/train maturity education path | Addendum requires maturity journey flow and layered learning |
| Stage 3 FRS | Strong route/content requirements, weak functional obligations for loss-prevention narrative | Addendum adds functional requirements for narrative, free assessment, ecosystem roles, and case studies |
| Stage 4 TRS | Strong static-site boundary, weak data/content model for maturity journey | Addendum defines content structures without backend creep |
| Stage 5 Architecture | Strong route architecture, weak platform page journey composition | Addendum requires journey-led Platform/APGI Hub architecture |
| Stage 6 QA-to-Red | Strong QA catalogue, missing root-intent tests | Addendum adds RED tests for maturity journey, free assessment, loss framing, hover/click/ask/train, and case-study confidentiality |
| Stage 7 PBFAG | Gate did not explicitly check root intent readiness | Addendum adds root-intent gate checks |
| Stage 8 Implementation Plan | Implementation sequencing did not explicitly start from maturity narrative | Addendum sequences website work around root intent |
| Stage 9 Builder Checklist | Builder checklist did not explicitly bind builders to root intent | Addendum adds builder obligations |
| Stage 10 IAA Pre-Brief | IAA pre-brief did not explicitly call out the new strategic narrative risk | Addendum adds assurance focus |
| Stage 11 Builder Appointment | Builder appointment did not explicitly appoint against root intent | Addendum adds appointment condition |

---

## 5. Boundary

This is documentation/prebuild alignment only.

This wave does not implement website pages, create assessment-engine logic, add Supabase/database scope, add CRM/contact form handling, add LMS administration, or implement private ISMS/APGI Hub functionality inside APW.

---

## 6. Next governed step

After this alignment is reviewed and accepted, further APW implementation should be reviewed against both:

- the existing corrective Stage 1 through Stage 11 artifacts; and
- `APW_WEBSITE_INTENT.md` plus the Stage 1 through Stage 11 intent-alignment addenda created by this wave.
