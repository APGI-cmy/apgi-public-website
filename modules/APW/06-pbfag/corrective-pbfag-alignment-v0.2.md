# APW Corrective PBFAG Alignment v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 7 - PBFAG corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | Corrective QA-to-Red v0.2 |

---

## 1. Corrective PBFAG Finding

The previous PBFAG allowed progression after the RED suite confirmed technical and routing coverage, but did not strongly gate professional design quality, multi-page information architecture, services depth, platform/app depth, and training depth.

---

## 2. Required Corrective PBFAG Checks

| Gate ID | Gate |
|---------|------|
| PBFAG-COR-001 | App Description v0.2 is authoritative and loaded. |
| PBFAG-COR-002 | Corrective UX, FRS, TRS, and Architecture alignments exist. |
| PBFAG-COR-003 | Corrective QA-to-Red v0.2 exists and fails the PR #11 scaffold. |
| PBFAG-COR-004 | Multi-page IA is required before build. |
| PBFAG-COR-005 | Services, platform/app, and training pages have explicit content depth criteria. |
| PBFAG-COR-006 | Design quality is a functional gate, not a cosmetic preference. |
| PBFAG-COR-007 | Build remains public-only/static-first unless CS2 approves scope change. |
| PBFAG-COR-008 | No upgraded implementation starts until all corrective gates pass. |

---

## 3. PBFAG Green Standard

PBFAG is green only when the corrected pre-build package can support a first-class APW website build, not merely a deployable static scaffold.
