# Plan

## Outcome

Track and fully synchronize `PLQorOn5nOmSA` in the source-only YouTube library,
then make an evidence-based public-content decision without manufacturing a
publication obligation.

## Tasks

- [x] Add and validate the explicit English, multi-speaker catalog record.
- [x] Verify remote playlist identity, ownership, membership, order, and drift;
      sync the complete authoritative manifest.
- [x] Audit exact video-ID overlap with tracked playlists, captured artifacts,
      and public resources; record public-impact decisions.
- [x] Prove a one-video capture thin slice, then capture every remaining video
      with matching English captions and record unavailable-caption failures.
- [x] Review transcripts source-faithfully and create reviewed per-video source
      summaries with supported speaker and affiliation attribution.
- [x] Create and review the complete playlist overview from the summaries.
- [x] Compare the corpus against existing Coding with Agents resources and posts;
      propose either a coherent public artifact/integration or source-only sync.
- [x] Consult Oracle on that focused editorial proposal and apply its feedback.
- [x] Run library status/audit/tests, lint, content guard, Astro check/build,
      source-only boundary checks, and browser checks if rendered routes changed.
- [x] Commit coherent reviewable steps, complete the work item, and close it in a
      separate commit without pushing.

## Constraints

- Preserve complete remote membership even for unavailable captions.
- Do not infer authorship from the uploader; AI Engineer is curator/source only.
- Do not publish merely to advertise the sync or duplicate existing coverage.
- Do not force transcript replacement, push, merge, or open a pull request.

## Acceptance Criteria

- Local manifest exactly represents the current available remote playlist order.
- Every available matching-caption video has metadata, transcript, and reviewed
  summary; caption failures are explicit and reproducible.
- The reviewed overview covers every summarized video and reports the complete
  AI Engineer multi-speaker baseline.
- The public-content decision is supported by exact overlap and claim analysis
  plus a focused Oracle review.
- Every required verification command passes, with no source-only leakage.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- audit`
- YouTube library and transcript Node test suites
- `npm run lint:fix`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- Source-only boundary searches and `git diff --check`
- Representative real-browser route checks only if rendered routes change
