# Publish the Matt Pocock agent-skills collection

Onboard Matt Pocock's uploads playlist as an author-linked source, review the selected videos, and publish a matching collection in the coding-with-agents catalog.

## Goals

- Track the official uploads playlist while keeping editorial scope to seven reviewed videos from 2026-05-25 through 2026-08-25.
- Publish concise, source-backed summaries and a working public collection link.

## Tasks

- [x] **Task 1: Onboard and synchronize the tracked playlist**
  - Scope: `src/content/youtube/catalog.json`, `src/content/youtube/playlists/matt-pocock-agent-skills/manifest.json`
  - Depends on: none
  - Acceptance:
    - Catalog explicitly configures Matt Pocock, the uploads playlist, English transcript and summary languages, reviewed seven-video curation, and an author relationship.
    - Selected `status`, `check`, and `sync` commands succeed, and the authoritative manifest contains every selected ID.
    - Public-impact review records the addition as isolated from existing public identities.

- [x] **Task 2: Prove the capture thin slice and complete bounded capture**
  - Scope: `src/content/youtube/videos/{UzMNBN6xLLA,mh5XZ-L5SFQ,M6mYodf0dJM,n0VhIVtviC0,F3lL98Pj90o,gaDdrDdczO4}/`, existing standalone evidence for `zcLPGC-tvgk`
  - Depends on: Task 1
  - Acceptance:
    - A `capture --playlist matt-pocock-agent-skills --limit 1` thin slice succeeds before any broader capture.
    - Remaining selected sources are captured in one bounded follow-up command without force or unrelated capture.
    - The first six selected sources have source-library metadata and English transcripts; `zcLPGC-tvgk` reuses its existing reviewed standalone transcript rather than duplicating evidence.

- [x] **Task 3: Write and independently review source editorial artifacts**
  - Scope: selected `summary.md` files, `src/content/youtube/playlists/matt-pocock-agent-skills/overview.md`, `src/content/youtube/authors/matt-pocock.md`
  - Depends on: Task 2
  - Acceptance:
    - Each summary follows the source-summary contract and anchors material claims to adjacent transcript chunks.
    - The playlist overview and author synthesis cover all seven selected videos, separate Pocock's claims, Uncle Bob's guest claims, and editorial synthesis, and remain within source-supported identities.
    - A dedicated reviewer compares claims and anchor endpoints against transcript context; all findings are resolved before statuses become `reviewed`.

- [x] **Task 4: Publish the consolidated collection**
  - Scope: `src/content/summaries/coding-with-agents/`, `src/data/resources/coding-with-agents.json`, related catalog tests
  - Depends on: Task 3
  - Acceptance:
    - Seven public summaries share `collection: "matt-pocock-agent-skills"`, unique orders 1–7, canonical video IDs, and the matching resource ID.
    - The existing Uncle Bob summary becomes item 7 and its standalone canonical resource is removed rather than duplicated.
    - One canonical playlist resource appears under coding-with-agents workflows with accurate source, date, description, and topics.
    - Public-content guard accepts the reviewed source and public collection relationship.

- [x] **Task 5: Verify the source boundary and rendered route**
  - Scope: repository checks and `/resources/coding-with-agents/workflows`
  - Depends on: Task 4
  - Acceptance:
    - Library status, audit, targeted library tests, content guard, check, tests, build, source-only boundary searches, and `git diff --check` pass.
    - A real browser opens the workflows collection, exposes the new Matt Pocock card, opens all seven selected summaries in order, and provides a stable shareable URL.

## Implementation Notes

- Use the full uploads playlist as the machine-owned manifest; curation alone narrows capture, review, and publication obligations.
- Keep the strict three-month boundary. Do not add the 2026-04-29 De-Slop or 2026-05-14 Grill Me videos. Include the in-window 2026-08-19 Uncle Bob conversation per the user's consolidation request.
- Prefer complete tutorials over derivative shorts and redundant release/demo coverage.
- New editorial artifacts start at `draft`; promote only after dedicated source review.

## Constraints / Decisions

- Author attribution is Matt Pocock, explicitly connected to the user-supplied official channel and YouTube channel metadata.
- Transcript and summary languages are English, based on the selected videos' configured source tracks and intended public output.
- Oracle endorsed the initial six skills videos and strict date boundary on 2026-08-25; the user subsequently directed the existing in-window Uncle Bob resource into the same collection.
- No force capture, live data in public prose, source-only imports, or unrelated catalog cleanup.

## Acceptance Criteria

- The collection contains exactly the seven IDs and order recorded in [research.md](research.md).
- Every published claim remains traceable to reviewed source evidence.
- The public collection is discoverable and usable on the rendered resources route.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- audit`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library-structural-audit.test.mjs`
- `npm run content:guard`
- `npm run check`
- `npm test`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist`
- `git diff --check`
- Real-browser verification of `/resources/coding-with-agents/workflows`
