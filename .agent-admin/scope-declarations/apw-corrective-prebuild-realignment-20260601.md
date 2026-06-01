# Scope Declaration - APW Corrective Pre-Build Realignment

## Status Header

| Field | Value |
|-------|-------|
| Wave | apw-corrective-prebuild-realignment-20260601 |
| Module | APW - APGI Public Website |
| Foreman | ChatGPT Foreman Operator |
| Authority | CS2: Johan Ras |
| Branch | `foreman/apw-corrective-prebuild-realignment` |
| Status | Active corrective pre-build wave |
| Date | 2026-06-01 |

---

## 1. Trigger

Stage 12 PR #11 produced a functional static scaffold and verified that Vercel can build the repository, but the preview did not meet Johan Ras's fully functional design standard for APW.

The design, information architecture, service depth, training depth, platform/app presentation, brand richness, and conversion experience were not aligned with the intended high-profile professional website outcome.

---

## 2. Scope

This wave returns to Stage 1 and updates the pre-build chain before any upgraded build proceeds.

In scope:

- Update Stage 1 App Description.
- Record the Stage 12 design-quality failure in the tracker.
- Update downstream pre-build artifacts so the upgraded build has explicit green criteria before implementation resumes.
- Preserve the public-only/static-first boundary unless later explicitly changed by CS2.
- Leave PR #11 unmerged as a failed design scaffold reference.

Out of scope:

- No upgraded runtime implementation.
- No merge of PR #11 as final website.
- No Supabase/database/auth/CRM/contact-form backend.

---

## 3. Build Philosophy Correction

The APW build philosophy is: **build to green only**.

A functional scaffold is not green if design quality, page structure, content depth, conversion flow, or brand experience fail the approved product expectation.

---

## 4. Acceptance Criteria

This corrective wave is complete only when:

1. Stage 1 captures the upgraded high-profile APW website requirements.
2. The tracker records PR #11 as a functional-build/design-failure event.
3. FRS, TRS, Architecture, QA-to-Red, PBFAG, Implementation Plan, Builder Checklist, IAA Pre-Brief, and Builder Appointment are marked as requiring corrective alignment or updated with the upgraded criteria.
4. QA-to-Red contains RED conditions for design excellence, multi-page IA, services depth, platform/app presentation, training depth, visual richness, and conversion readiness.
5. No new upgraded build is authorized until the corrected pre-build artifacts are aligned and approved.
