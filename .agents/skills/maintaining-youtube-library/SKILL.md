---
name: maintaining-youtube-library
description: "Maintains the source-only YouTube knowledge library. Triggers on: check tracked playlists for new or changed videos, sync or update the library, retry unavailable captions, add a tracked playlist."
---

# Maintaining the YouTube Library

Maintain configured playlists through the deterministic library command while
keeping editorial and publication decisions explicit. Read and follow the
[authoritative library contract](../../../src/content/youtube/AGENTS.md) before
changing `src/content/youtube/`; do not restate or bypass it.

This skill is only for the tracked playlist library. A request to summarize one
standalone YouTube video follows the root `AGENTS.md` single-video transcript
workflow instead.

## Choose One Mode

Match the user's intent to one mode. If mutation is not explicit, use Mode A and
do not write. Never turn a check request into sync, capture, retry, or editorial
changes.

## Mode A — Read-Only Check

1. Run the complete library check, optionally selecting repeated playlist slugs
   or JSON output:

   ```sh
   npm run youtube:library -- check [--playlist <slug>]... [--json]
   ```

2. Report remote changes as advisory maintenance data, not command failure. Exit
   `0` means a complete report even when changes exist; exit `2` means a useful
   partial report with isolated remote failures.
3. Do not write files or directories in this mode. If `YOUTUBE_API_KEY` is
   unavailable, state the credential limitation without requesting or exposing
   it. Use `npm run youtube:library -- status` only for local inspection.

## Mode B — Explicit Sync or Update

Enter this mode only when the user explicitly requests repository mutation.

1. Run `git status --short -- src/content/youtube` and inspect any existing diff.
   Continue only when that tree is clean or every existing change is understood
   and can be kept separate from this update.
2. Run Mode A first when it will clarify scope, then synchronize only the
   requested playlists when possible:

   ```sh
   npm run youtube:library -- sync [--playlist <slug>]...
   ```

3. Treat the sync report—not an earlier check—as authoritative. Inspect its
   manifest diff before deciding what to capture or review; remote state may have
   changed between commands.
4. Run the mandatory public-impact review below against the authoritative diff.
5. Keep capture bounded by selected playlists and/or a positive limit:

   ```sh
   npm run youtube:library -- capture [--playlist <slug>]... [--limit <positive-n>]
   ```

6. Review committed transcripts before deliberately writing editorial work.
   Keep every new or revised editorial artifact at `draft`. Refresh each affected
   playlist overview in the same session as its new summaries. Review the author
   synthesis after an overview changes only when that playlist has an author
   relationship.
7. Never silently generate, promote, publish, replace, or overwrite editorial
   work. Never use routine `--force`; require explicit destructive-operation
   approval before force regeneration, then keep it narrowly bounded.
8. Finish with the mutating-workflow checks below and reviewable commits.

## Mode C — Add a Tracked Playlist

Do not create or use an `add` subcommand or catalog wizard.

1. Apply the same clean-or-understood tree gate as Mode B. If the onboarding is
   more than a small single-session update, create or continue a work item and
   plan bounded batches. One onboarding work item may add and sync several
   selected playlists together.
2. For every selected playlist, obtain an explicit playlist ID, explicit
   transcript and summary languages, and exactly one attribution decision: an
   author relationship or `multiSpeaker: true`. Do not infer author identity,
   multi-speaker status, or language settings.
3. Manually edit `src/content/youtube/catalog.json`, review the exact diff, and
   validate it with the existing commands:

   ```sh
   npm run youtube:library -- status
   npm run youtube:library -- check [--playlist <slug>]...
   ```

4. After explicit mutation intent is confirmed, sync only the selected
   playlists and treat each sync report as authoritative:

   ```sh
   npm run youtube:library -- sync [--playlist <slug>]...
   ```

5. Review each addition's public impact as described below. Before any broad
   backfill, prove one complete thin slice for every playlist with a separate
   command per slug:

   ```sh
   npm run youtube:library -- capture --playlist <slug> --limit 1
   ```

   Review each transcript, write its draft summary deliberately, and update its
   draft playlist overview under the authoritative contract before broad
   backfill for that playlist.
6. Continue only in bounded batches. Review the author synthesis after a related
   playlist overview changes only when that playlist has an author relationship,
   then run the mutating-workflow checks.

## Mode D — Retry Unavailable Captions

Enter this mode only when the user explicitly asks to retry recorded caption
failures. Do not retry them during every routine check or sync.

1. Keep the operation bounded by at least a selected playlist and/or a positive
   limit:

   ```sh
   npm run youtube:library -- capture --retry [--playlist <slug>]... [--limit <positive-n>]
   ```

2. Never combine retry with `--force`. Inspect the resulting transcript and
   metadata changes, then handle any newly possible editorial work deliberately
   at `draft` under the authoritative contract.
3. Finish with the mutating-workflow checks below.

## Mandatory Public-Impact Review

Apply this review to every authoritative sync diff or manual playlist identity
change before completing a mutating workflow.

1. For every retitled, removed, or availability-changed video ID, run:

   ```sh
   rg -l -e '<video-id>' src/content/posts src/content/summaries src/data/resources
   ```

2. Inspect every matching artifact. Record an explicit `keep` or `fix` decision
   for every hit in the active work item's `progress.md` or the commit message.
   Do not assume a retitle is harmless or automatically rewrite public prose.
3. For a retitled video in a tracked `multiSpeaker: true` playlist, also inspect
   `src/content/youtube/videos/<video-id>/summary.md` and review whether its
   framing still attributes the correct speakers and affiliations. Record a
   `keep` or `fix` decision, but never rewrite editorial prose automatically.
4. Search playlist IDs with the same `rg -l -e '<playlist-id>'` form in the
   public paths when playlist-level identity or availability changes, inspect
   every hit, and record the same decisions.
5. For additions, review public playlist orientation, resource dates, corpus
   counts, and material thesis changes. Record the conclusion, but do not
   automatically edit public content.

## Finish Every Mutating Workflow

1. Inspect the final diff and run:

   ```sh
   npm run youtube:library -- status
   node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs
   ```

2. When code or public content changed, also run:

   ```sh
   npm run check
   npm run build
   ```

3. Verify the source-only boundary; both searches must return no matches:

   ```sh
   rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts
   rg -n '"publication":"source-only"|"publication": "source-only"' dist
   ```

4. Run `git diff --check`, inspect `git status --short --branch`, and commit only
   coherent, reviewable changes. Never include build output, credentials, or
   unrelated worktree changes.
