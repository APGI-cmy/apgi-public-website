# Portal branding and course catalogue

Authority: Johan's 15 November 2026 request to align this website with V2 Training, link courses and automatically reflect publication.

The existing APW stage gates are recorded complete in the module tracker. This bounded implementation retains the maturity-journey content and Maturion routes. Independent acceptance is not claimed.

## Ownership and flow

The Training portal owns published course metadata, saved cover images, APGI branding and card CSS. APW reads its anonymous, summary-only `/api/public/catalogue` and loads `/api/public/catalogue.css`. Both public catalogues use that same service and stylesheet. APW does not receive database credentials or read learner data.

Only registered courses with APGI's published, reviewed offering and public visibility are exported. Client-specific courses, drafts and review copies are excluded. A newly registered course appears automatically after its existing publication workflow completes. An APW rebuild is not required. Withdrawal and image changes follow the same path. Website pages refresh on opening, returning to the tab and every 60 seconds while visible; the feed has a maximum 60-second CDN cache. Allow up to about two minutes for an already-open page.

The anonymous public list intentionally differs from a signed-in learner's personalised catalogue, which can also contain assigned private courses and reviews. The marketing site does not change enrolment or grant content access.

## Failure behaviour

A failed feed read displays a portal handoff instead of a stale or invented available-course list. No private fallback data is exposed. APGI's verified portal logo and default palette remain usable if the feed is unavailable. Images retain the original portal/public-storage URL, with safe URL validation and text-only DOM insertion.

## Targets and boundaries

- APW: `apgi-public-website.vercel.app`.
- Training: `training-platform-v2-staging.vercel.app`, explicitly the V2 test environment.
- No V1 deployment, billing change, learner publication approval or custom-domain mapping.
- Existing classroom/contact programmes remain separate from the live published e-learning list.
- Production training-domain replacement, when authorised, changes the portal origin in the catalogue client, layout and site data together.

## Validation

### 16 November visibility correction

Johan's homepage screenshot exposed a placement problem: the saved course image loaded correctly but the homepage preview was below eight content sections (approximately 3053px below the initial viewport). The earlier handover screenshot showed the training page. The homepage now features the first published course with an available cover alongside its opening headline and places the shared catalogue immediately below the hero. A direct in-page courses link improves discovery. Both images still come from the portal feed; no separate course-image copy is introduced. Missing covers, image failures and catalogue outages retain the descriptive hero fallback. Publication and privacy rules are unchanged. Local nine-route build and three existing safety tests passed, and browser checks confirmed the original 1448px cover loads in the opening panel with a single-column narrow layout and no horizontal overflow. These remain producer checks.

Portal tests cover reviewed publication, client privacy, draft exclusion, fail-closed reads and automatic publish/withdraw changes. APW tests cover portal-only links, image URL boundaries and original cover identity. Builds and browser checks are recorded in the delivery evidence. These producer checks do not constitute independent acceptance.
