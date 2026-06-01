# APW Corrective QA-to-Red v0.2

## Status Header

| Field | Value |
|-------|-------|
| Module | APW - APGI Public Website |
| Stage | 6 - QA-to-Red corrective alignment |
| Status | Required before upgraded build resumes |
| Date | 2026-06-01 |
| Upstream | App Description v0.2; corrective UX/FRS/TRS/Architecture alignments |
| Build Philosophy | Build to green only |

---

## 1. Corrective QA Finding

The previous RED suite did not fail the PR #11 scaffold strongly enough on design quality, multi-page IA, services depth, platform/app presentation, training depth, and conversion experience.

The corrective suite below must be RED against PR #11 and GREEN only when the upgraded high-profile APW website is delivered.

---

## 2. Corrective RED Catalog

| Test ID | Domain | Source | Description | RED Condition | Acceptance Criteria |
|---------|--------|--------|-------------|---------------|---------------------|
| QA-COR-001 | Multi-page IA | AD-v0.2; FRS-COR-001 | Website includes required pages/routes. | Site is one-page-only or lacks services/platform/training/about/team/contact/legal pages. | All required public pages exist and are navigable. |
| QA-COR-002 | Design quality | AD-v0.2 §5; FRS-COR-006 | Visual design meets professional APGI standard. | Site looks like a generic scaffold, thin template, or design afterthought. | Design uses premium colour, hierarchy, cards, spacing, CTAs, responsive composition, and APGI tone. |
| QA-COR-003 | Homepage conversion | AD-v0.2 §6 | Homepage invites exploration. | Hero and sections do not drive users into services, platform, training, or contact. | Homepage includes strong hero, trust/proof, previews, CTAs, and exploration paths. |
| QA-COR-004 | Services depth | AD-v0.2 §6; FRS-COR-003 | Services page presents meaningful APGI service catalogue. | Services are only a shallow list or generic cards. | Dedicated services page includes required service categories, explanations, outcomes, and contact CTA. |
| QA-COR-005 | Platform/app presentation | AD-v0.2 §6; FRS-COR-004 | Platform page explains APGI ecosystem and submodules. | Hub is only a small section or unexplained tiles. | Dedicated platform/app page includes modules, descriptions, status, link/pending behavior, and ecosystem framing. |
| QA-COR-006 | Training depth | AD-v0.2 §6; FRS-COR-005 | Training page presents offerings and Thinkific handoff. | Training is only one CTA or lacks course/offering context. | Dedicated training page includes course cards/offerings, Thinkific link, and approved/pending course status. |
| QA-COR-007 | Visual richness | AD-v0.2 §5 | Site uses colour and section variety. | Site is mostly white/unstyled/minimal with weak visual rhythm. | Alternating section treatments, premium palette, cards, accents, and designed page rhythm are visible. |
| QA-COR-008 | Mobile design | AD-v0.2 §3 | Mobile is intentionally designed. | Mobile merely collapses without thoughtful nav, spacing, and hierarchy. | Core journeys are usable and polished on mobile. |
| QA-COR-009 | Existing content baseline | AD-v0.2 §4 | Current `apginc.ca` substance is preserved or improved. | New site is less informative than current site for services/training. | Services/training content depth equals or improves on current reference content, with placeholders only where governed. |
| QA-COR-010 | Placeholder honesty | AD-v0.2 §3 | Pending content is honest. | Placeholder legal/team/assets/proof appear as final claims. | All pending content is labelled or safely text-first. |
| QA-COR-011 | Public-only boundary | AD-v0.2 §2 | No unapproved backend scope. | Build adds Supabase, auth, CRM, database, contact form backend, or unapproved automation. | Static/public-only v1 boundary preserved unless CS2 approves change. |
| QA-COR-012 | Build-to-green gate | AD-v0.2 §8 | Build does not proceed unless all corrective RED tests can become green. | Implementation begins from PR #11 scaffold without corrected pre-build approval. | Corrected pre-build artifacts approved before upgraded build resumes. |

---

## 3. PR #11 Scaffold Expected Result

The PR #11 scaffold should fail at least:

- QA-COR-001;
- QA-COR-002;
- QA-COR-003;
- QA-COR-004;
- QA-COR-005;
- QA-COR-006;
- QA-COR-007;
- QA-COR-009.

Therefore PR #11 is not green and should not be merged as final APW website.

---

## 4. Green Handover Rule

A future upgraded build may proceed only after this corrective QA-to-Red suite is incorporated into PBFAG, implementation planning, builder checklist, IAA pre-brief, and builder appointment.
