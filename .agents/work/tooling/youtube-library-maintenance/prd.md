# YouTube library maintenance workflow requirements brief

## Problem

The repository can synchronize configured playlists, capture caption
transcripts, and report local coverage, but an operator still has to remember
the correct sequence and decide manually which editorial and public artifacts
need review. There is no single read-only remote-plus-local check result or
discoverable agent workflow for routine maintenance and future playlist growth.

## Desired Outcome

A human can ask an agent to check or synchronize the YouTube library and receive
a safe, bounded, reviewable update. Deterministic tooling reports remote and
local state; a project skill orchestrates capture and explicit editorial work;
public content is reviewed deliberately and never silently regenerated or
published.

## Goals

- Provide one read-only command for remote playlist changes plus local library
  state, with human and structured output.
- Make natural-language maintenance requests reliably load one project skill.
- Turn small playlist additions into bounded transcript, summary, playlist, and
  author updates with explicit public-impact review.
- Make new-playlist onboarding repeatable without hiding catalog and language
  decisions behind a mutating wizard.
- Establish a stable check contract that can later support scheduled and
  on-demand notifications.

## Non-Goals

- Downloading or committing video/audio media.
- Putting an LLM API inside synchronization or capture scripts.
- Automatically rewriting summaries, syntheses, posts, or resource entries.
- Automatically promoting drafts or publishing library source through Astro.
- Adding a custom public route, library UI, central dependency registry, or
  generalized knowledge graph.
- Adding scheduled writes, generated commits, pull requests, or direct pushes to
  `main` in the first implementation.
- Adding a second package alias or a monolithic `youtube:update` command without
  demonstrated need.

## Users / Use Cases

- A maintainer asks, “Check tracked YouTube playlists for new videos,” and gets
  a read-only report with clear next work.
- A maintainer asks, “Sync the YouTube library,” and an agent safely updates
  manifests, captures pending transcripts, writes draft editorial artifacts,
  reviews public impact, verifies, and commits bounded changes.
- A maintainer supplies another playlist and the agent validates identity and
  languages, edits the catalog, proves a thin slice, and batches the backfill.
- A later scheduled or manually dispatched job checks for changes and notifies a
  maintainer without modifying the repository.

## Requirements

### Must Have

- [ ] Add `check [--playlist <slug>]... [--json]` to the existing library CLI.
- [ ] Compose existing dry-run synchronization and local status logic; do not
      duplicate normalization, diffing, or status models.
- [ ] Emit exit `0` for a complete report regardless of detected work, `1` for a
      fatal preflight/report failure, and `2` for partial per-playlist remote
      failure with useful output.
- [ ] Keep JSON deterministic, sanitized, catalog-ordered, and explicit about
      committed local state versus hypothetical remote changes.
- [ ] Capture additions, removals, moves, retitles, availability changes,
      first-sync state, per-playlist errors, pending transcripts, missing/draft/
      reviewed summaries, and stale playlist/author syntheses.
- [ ] Create `.agents/skills/maintaining-youtube-library/SKILL.md` with triggers
      for checking, syncing, retrying, and adding tracked playlists.
- [ ] Keep the skill workflow linear: check, review, sync, inspect authoritative
      diff, bounded capture, draft summaries, stale synthesis refresh,
      public-impact review, verification, and reviewable commits.
- [ ] Add a brief root `AGENTS.md` trigger and register the skill in
      `.agents/skills/AGENTS.md`; do not duplicate scoped contracts.
- [ ] Require a clean or explicitly understood YouTube-library worktree before
      sync and prohibit routine use of capture `--force`.
- [ ] Keep new editorial artifacts at `draft` and preserve the source-only
      publication boundary.
- [ ] Document manual catalog editing and one-video thin-slice validation for
      adding a playlist; do not add an `add` subcommand.
- [ ] For every retitled, removed, or availability-changed video ID, require a
      public-content search and an explicit keep/fix decision for every hit.

### Optional / Later

- [ ] Add a weekly plus manually dispatchable read-only GitHub Action after the
      check contract is stable.
- [ ] Publish a job summary and, if chosen, open/update one notification issue.
- [ ] Add automated summary-title drift reporting only if real retitle frequency
      makes the skill-level review insufficient.
- [ ] Add source IDs to public-artifact frontmatter only when repository scale or
      citation style makes literal-ID discovery unreliable.

## Constraints / Decisions

- `src/content/youtube/AGENTS.md` remains authoritative for editorial format,
  language fidelity, safe writes, and source-only publication boundaries.
- Skills own orchestration and judgment; `.agents/scripts` own deterministic
  mechanics; root guidance owns only discovery triggers and invariants.
- `check` requires `YOUTUBE_API_KEY`; local-only reporting remains `status`.
- Remote changes are report data, not command failure.
- Playlist overview refresh follows new summary coverage; author synthesis
  refresh follows related playlist-overview changes.
- `sync` output is authoritative if it differs from an earlier check result.
- Public content remains independently authored and is never a library script
  output.
- Public-impact review is mandatory for retitles, removals, and availability
  changes. The skill discovers affected artifacts with `rg` by video ID and
  records a keep/fix decision in the commit message or progress record.
- No npm short alias, central derivative registry, or scripted catalog wizard in
  the first implementation.

## Acceptance Criteria

- “Check the YouTube library” predictably loads the maintenance skill and runs a
  read-only remote-plus-local report.
- The check JSON supports both agent orchestration and a future scheduler without
  parsing human text.
- A small addition can complete manifest → transcript → draft summary → playlist
  overview → author review while keeping every write reviewable.
- Retitles, removals, and privacy changes cannot silently invalidate public
  citations under the selected public-impact policy.
- Existing `sync`, `capture`, `status`, and public single-video transcript
  behavior remains compatible.
- Focused script tests, library status, project check/build, and source-boundary
  checks pass after implementation.

## Open Questions

- [x] **Public-citation guarantee:** require `rg` discovery and an explicit
      keep/fix decision for every public artifact matching a retitled, removed,
      or availability-changed video ID. The user selected the recommended
      mandatory policy.
- [ ] **Deferred scheduling preference:** when scheduling is implemented, should
      changes create/update one issue or only appear in the Actions job summary?
      This does not block the first implementation slice.
