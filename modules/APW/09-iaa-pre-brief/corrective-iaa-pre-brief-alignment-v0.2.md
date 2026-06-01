# APW Corrective IAA Pre-Brief Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 10 - IAA Pre-Brief corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | Corrective Builder Checklist Alignment v0.2 |

---

## 1. Corrective Assurance Finding

The IAA pre-brief must explicitly tell assurance reviewers that PR #11 failed the intended design-quality gate even though it built successfully.

---

## 2. Required IAA Questions

IAA must ask:

1. Does the corrected package prevent another one-page scaffold from passing?
2. Are design quality and visitor experience treated as delivery requirements?
3. Are services, platform/app, and training pages deep enough to support APGI credibility?
4. Does QA-to-Red v0.2 fail PR #11 and define green criteria for the upgraded build?
5. Are browser, Vercel, mobile, keyboard, and responsive evidence required?
6. Is public-only/no-Supabase/no-backend scope preserved?

---

## 3. Green Standard

IAA pre-brief is green only when assurance can block any future build that compiles but fails the approved APW product/design experience.
