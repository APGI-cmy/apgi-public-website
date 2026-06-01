# Scope Declaration - APW Stage 12 Build Evidence

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-stage12-build-evidence-20260601 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras; AI-assisted CS2 proxy permitted by explicit task instruction |
| Status | Active scope package |
| Branch | `foreman/apw-stage12-build-evidence` |
| Target Folder | `modules/APW/11-build/` |
| Primary Artifact | `modules/APW/11-build/build-evidence.md` |
| Date | 2026-06-01 |

---

## 1. Job Statement

Implement APW Stage 12 Build Evidence after PR #10 merged Stage 11 Builder Appointment.

The wave must create a static-first deployable APW public website, preserve the approved public-only boundary, and produce build evidence aligned to Stage 6 D1-D12 RED domains.

---

## 2. In Scope

- Add deployable static website files at repository root.
- Add build and validation scripts without backend dependencies.
- Add Vercel configuration for static output.
- Implement public homepage, legal routes, navigation, training/contact handoffs, APGI Hub behavior, metadata, accessibility basics, responsive layout, placeholder/asset honesty, and no-backend posture.
- Update Stage 12 build evidence and tracker.
- File QP, ECAP, IAA review, and CS2 proxy disposition.
- Open a governed draft PR.

---

## 3. Out of Scope

- No Supabase project.
- No database.
- No authentication.
- No CRM or contact-form backend.
- No private secrets.
- No unapproved analytics, CMS, LMS administration, or marketing automation.
- No merge without user direction.

---

## 4. Vercel Context

Johan created the Vercel project:

- Project URL: `https://vercel.com/rassie-ras-projects/apgi-public-website`
- Project ID: `prj_Ms3RG1z7HFlWjG8NXISYqPrXrluW`

Stage 12 must verify deployment behavior once Vercel builds this PR or a merged commit.

---

## 5. Acceptance Criteria

The Stage 12 wave must:

1. preserve the public-only/static-first scope;
2. provide a deployable app structure;
3. provide build/validation scripts;
4. satisfy or explicitly condition D1-D12 evidence obligations;
5. record Vercel/environment status honestly;
6. avoid CI/admin loops;
7. identify any remaining launch-readiness conditions.
