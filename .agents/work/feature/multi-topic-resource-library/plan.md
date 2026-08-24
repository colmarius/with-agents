# Multi-topic Resource Library Plan

Generalize the public resource catalog for independent Cloud and Security topics, onboard the 12 supplied Google Cloud Tech playlists into the source-only YouTube library, and publish reviewed transcript-backed collections through bounded editorial batches.

## Goals

- Preserve all existing Coding with Agents URLs and behavior while removing topic-specific infrastructure from the reusable catalog path.
- Model Cloud and Security as separate top-level catalogs with canonical resources that can be cross-listed without duplication.
- Track complete remote manifests for all 12 playlists and produce reviewable transcript-backed selections rather than an unbounded 405-video backfill.
- Keep source capture, editorial review, public summaries, and publication as explicit gates with deterministic checks.

## Tasks

- [x] **Task 1: Generalize the resource catalog foundation**
  - Scope: `src/types/resources.ts`, `src/data/resources/**`, `src/components/resources/**`, `src/pages/resources/**`, focused resource tests
  - Depends on: none
  - Acceptance:
    - One catalog registry owns topic metadata, sections, filter labels, resource membership, and canonical resource IDs.
    - Generic static routes render `/resources/[topic]` and optional section pages while preserving every existing `/resources/coding-with-agents` URL.
    - The interactive catalog receives topic/filter configuration as data; Coding with Agents-specific names and filter constants no longer own reusable behavior.
    - Tests reject duplicate global resource IDs, unknown catalog membership, sections, and filter tags.
  - Notes: Preserve the existing JSON data where practical; do not migrate content merely for naming symmetry.

- [x] **Task 2: Generalize public-content and standalone-evidence validation**
  - Scope: `.agents/scripts/public-content-guard.mjs`, `.agents/scripts/lib/youtube-standalone-evidence.mjs`, related tests
  - Depends on: Task 1
  - Acceptance:
    - Every registered public resource manifest is validated and scanned for source references.
    - Summary `resourceId` joins are checked against the globally unique resource set.
    - Standalone YouTube evidence can resolve a canonical resource from any registered public manifest.
    - Existing guard behavior and curated collection invariants remain covered by tests.
  - Notes: Do not weaken the requirement that publishable resources have public summaries or that tracked source references are reviewed.

- [ ] **Task 3: Configure and synchronize the 12 source playlists**
  - Scope: `src/content/youtube/catalog.json`, `src/content/youtube/playlists/<slug>/manifest.json`, work-item impact record
  - Depends on: approved `en` transcript/summary language and `multiSpeaker: true` (confirmed 2026-08-24)
  - Acceptance:
    - All supplied playlist IDs are present once with current official titles and stable `google-cloud-*` slugs.
    - Each playlist uses exactly one explicit attribution mode; the Google Cloud Tech channel is not inferred to be an author.
    - One authoritative selected sync records complete manifests for all 12 playlists, currently totaling 405 available videos with no duplicate IDs.
    - Additions receive the mandatory public-impact review and the exact manifest diff is inspected.
  - Notes: Sync is coordinator-owned and sequential. Workers must not concurrently edit the shared catalog or manifests.

- [ ] (blocked) **Task 4: Establish capture scope and prove one thin slice per playlist**
  - Scope: source curation records, `src/content/youtube/videos/<video-id>/**`, playlist draft overviews
  - Depends on: Task 3; reviewed curation for broad playlists
  - Acceptance:
    - Focused playlists of at most 11 coherent videos are explicitly classified as full-series candidates.
    - Every broad playlist has a human-reviewed ordered curation or an explicit full-series decision before capture.
    - A separate `capture --playlist <slug> --limit 1` command proves English caption capture for every playlist; partial failures remain recorded rather than silently retried.
    - Every successful transcript receives a source-faithful draft source summary and every playlist receives a draft overview with exact coverage and pending IDs.
  - Notes: Preflight selected Serverless videos because API caption flags are unreliable. Mark obsolete or historical material (for example Pub/Sub Lite and 2019 Security Command Center UI) explicitly.

- [ ] **Task 5: Parallelize bounded source backfill**
  - Scope: disjoint `src/content/youtube/videos/<video-id>/**` directories and one playlist overview per worker batch
  - Depends on: Task 4
  - Acceptance:
    - High-effort orb workers own disjoint playlist groups and receive the stabilized catalog/manifests plus exact selection IDs.
    - Each worker uses one bounded capture command per assigned batch, writes only draft editorial artifacts, packages reviewable files, and reports per-video caption/source issues.
    - The coordinator inspects transferred files, resolves global video-ID collisions, refreshes overviews from summaries, and runs combined status/audit checks.
  - Notes: Keep capture, editorial writing, and dedicated review as distinct hats. Do not ask workers to push, merge, or mutate shared Git state.

- [ ] (manual-verify) **Task 6: Review and publish Cloud and Security collections**
  - Scope: source summary/overview status, public resource manifests, `src/content/summaries/cloud/**`, `src/content/summaries/security/**`, resource index cards
  - Depends on: Task 5
  - Acceptance:
    - A dedicated reviewer checks every published claim and timestamp range against adjacent transcript context before source artifacts become `reviewed`.
    - Canonical playlist resources are created once with globally unique IDs; cloud-security playlists are cross-listed in both catalogs through membership, not duplicated records.
    - Public collection child summaries exactly match reviewed curation IDs and order, and every item links to its canonical video.
    - `/resources` presents Coding with Agents, Cloud, and Security; topic pages expose the intended sections/tags and only reviewed summary content.
  - Notes: Curation approval, source-summary review, overview review, and public-content publication are separate gates.

- [ ] (manual-verify) **Task 7: Run combined acceptance and browser proof**
  - Scope: repository-wide checks and affected rendered routes
  - Depends on: Tasks 1-6
  - Acceptance:
    - `npm run lint:fix`, `npm run check`, `npm test`, `npm run youtube:library -- status`, `npm run youtube:library -- audit`, `npm run content:guard`, and `npm run build` pass.
    - Source-only boundary searches find no imports from `src/content/youtube` into site code and no source-only catalog marker in `dist`.
    - Real-browser checks cover `/resources`, `/resources/coding-with-agents`, `/resources/cloud`, `/resources/security`, one section route, search/filter behavior, and one selected-video summary modal.
    - `git diff --check` passes and the final diff contains no generated build output, credentials, or unrelated files.
  - Notes: Inspect at least one narrow and one desktop viewport for topic navigation and modal behavior.

## Implementation Notes

- Use the current source-library machinery; do not create a parallel transcript store or expose source-only files to Astro.
- The public data model needs one canonical resource record plus catalog memberships. Global numeric `resourceId` remains the summary join key until a separate migration justifies changing it.
- Keep all complete YouTube manifests even when curation narrows capture. Manifest drift and editorial obligation are deliberately separate.
- Start public publication only after source status is reviewed. Draft source material may support work in progress but must not leak into production pages through exceptions added for convenience.
- Worker fan-out begins only after shared schemas, catalog entries, manifests, and selection IDs stabilize. The coordinator remains the only integrator.

## Constraints / Decisions

- Cloud and Security are separate top-level catalogs; GCP is a provider facet under Cloud.
- Cloud-security resources may belong to both catalogs, but one canonical record and one public summary identity own the content.
- Google Cloud Tech is the uploader/curator for these playlists, not an inferred author.
- The full 405-item remote corpus is tracked; the editorial/public corpus is bounded by reviewed selections.
- Existing Coding with Agents routes, query parameters, summary behavior, and content remain backward compatible.
- No push, deployment, or shared-state mutation is part of this plan.

## Acceptance Criteria

- The site can add future Cloud, Security, or other catalogs by registering data rather than copying routes and React components.
- All 12 supplied playlist manifests are reproducible locally and have explicit language/attribution metadata.
- Every published collection item has a canonical video link, committed transcript, reviewed source summary, reviewed overview coverage, and matching public summary metadata.
- The resource index and all three topic catalogs work in a real browser without regressing Coding with Agents.

## Verification

- Resource and guard unit tests prove generic catalog membership, global ID uniqueness, summary joins, and source-review boundaries.
- YouTube `status` and structural `audit` prove local manifest/transcript/summary/overview relationships.
- Astro check, full tests, content guard, and production build prove repository integration.
- Browser interaction proves route generation, catalog navigation, filtering, and selected-video modal behavior.

## Deployment / Migration

This is a static-site source migration. Preserve `/resources/coding-with-agents` and its section URLs during route generalization. GitHub Pages deployment is outside this plan and requires the normal repository delivery workflow; no redirect or data migration should be needed when static paths remain identical.
