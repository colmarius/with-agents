# Fireship collection plan

## Goals

- Publish one Coding-only collection for regular Fireship videos from 20 April through 20 October 2026, newest first.
- Keep full transcript evidence and clear, source-faithful English summaries, with Fireship attribution.

## Tasks

- [x] **Task 1: Confirm selection and configure tracking**
  - Scope: `src/content/youtube/catalog.json` and `playlists/fireship/manifest.json`.
  - Depends on: none.
  - Acceptance: compare dated uploads with the Videos tab, exclude Shorts and livestreams, sync the full manifest, and record exact-ID public-impact checks.
- [x] **Task 2: Prove one capture and summary**
  - Scope: the newest selected video's transcript, draft summary, and draft overview.
  - Depends on: Task 1.
  - Acceptance: capture one full transcript, read it completely, and write a source-backed summary before broader backfill.
- [x] **Task 3: Process remaining videos sequentially**
  - Scope: selected video evidence and summaries, playlist overview, and author synthesis.
  - Depends on: Task 2.
  - Acceptance: each video has a full transcript and a deliberately written summary, or an explicit pending reason after no more than two attempts. Wait before fallback capture in a medium orb. Never run parallel downloads.
- [x] **Task 4: Review and integrate one public collection**
  - Scope: source review status, public summaries/transcripts, canonical resource, Coding membership, and curation.
  - Depends on: Task 3.
  - Acceptance: Oracle reviews readability and source fidelity against full transcripts; actionable findings are resolved before reviewed promotion. One canonical resource, no AI membership, and public selection matches reviewed curation.
- [x] **Task 5: Verify and deliver**
  - Scope: repository checks and portal routes.
  - Depends on: Task 4.
  - Acceptance: lint/format, Astro check, content guard, build then tests, source-library status/audit, source-only boundary, and real-browser collection/summary navigation pass. Report pending videos and local delivery state.

## Constraints

- Prefer captions; download media only when needed for transcription. Do not commit media, credentials, or temporary extraction files.
- No invented summaries, automatic editorial generation, silent selection shrinkage, pushes, or deployment.
- Maintain one video at a time and a maximum of two capture attempts per video across all environments.

## Verification

- Run `npm run youtube:library -- status` and `npm run youtube:library -- audit` after source edits.
- Run README Development checks, building before tests, and `npm run summaries:check`.
- Use `amp orb services ensure`, open the returned portal, and verify collection links and representative summary pages in a real browser.
