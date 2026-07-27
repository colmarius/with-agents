# Handoff: Implement Plan 02 playlist onboarding and sync

Implement Plan 02 of the AI Engineer YouTube playlist tracking work item. This
is an implementation task, not another planning pass. Complete catalog
onboarding, read-only remote validation, authoritative manifest sync, and
manifest-derived analysis, then stop before caption capture.

## Read first

Read these files in order before editing:

1. `.agents/work/research/ai-engineer-youtube-playlists/index.md`
2. `.agents/work/research/ai-engineer-youtube-playlists/plans/02-onboard-and-sync-playlists.md`
3. `.agents/work/research/ai-engineer-youtube-playlists/progress.md`
4. The ranked-shortlist, author/attribution, implementation-acceptance, and
   risks sections of
   `.agents/work/research/ai-engineer-youtube-playlists/research.md`
5. `src/content/youtube/catalog.json`
6. `.agents/scripts/youtube-library.test.mjs`
7. `.agents/scripts/lib/youtube-library-core.mjs`
8. `.agents/scripts/lib/youtube-library-capture-status.mjs`
9. `.agents/scripts/youtube-library.mjs`
10. `src/content/youtube/AGENTS.md`
11. `.agents/skills/maintaining-youtube-library/SKILL.md`

Load the `agent-work` and `maintaining-youtube-library` skills before changing
work-item or library state. Follow all applicable `AGENTS.md` files. Start with
`git status --short --branch`, preserve unrelated work, and make the smallest
change that satisfies Plan 02.

## Current state

- Plan 01 is complete in commits `ab9ef45`, `0654976`, and `0c6d024`.
- Catalog validation now accepts an author relationship XOR
  `multiSpeaker: true`; status and capture remain playlist-based, and author
  aggregation remains relationship-only.
- The committed catalog still contains only the two existing Antirez playlists.
- No AI Engineer catalog onboarding, remote check, sync, capture, summary, or
  overview work has started.
- The work item remains `in-progress`, with Plan 02 as its next action.

## Goal

Add exactly the three approved AI Engineer playlists as intentionally
author-less multi-speaker sources, verify each playlist ID against current
remote membership, synchronize the three authoritative manifests, and replace
the live-page count/overlap estimate with manifest-derived results. Preserve
all existing Antirez data and stop before captions or editorial artifacts.

## Credential gate

`YOUTUBE_API_KEY` is required for the read-only check and sync. Confirm only
that a non-empty environment value is available; never print, log, persist, or
pass its value on the command line. If it is absent, record a focused blocker
and stop before catalog mutation rather than leaving a knowingly partial
onboarding.

## Required implementation

### 1. Add and commit the catalog configuration first

Update `src/content/youtube/catalog.json` with exactly these entries, in the
listed order after the existing Antirez playlists:

1. `swe-agents-2025`
   - `id`: `PLcfpQ4tk2k0UwfWS-f6KDInzHc3um4naZ`
   - `title`: `SWE Agents: AI Engineer World's Fair 2025`
2. `agent-reliability-2025`
   - `id`: `PLcfpQ4tk2k0VLQeSLhVinP0lVhNcXa-Ai`
   - `title`: `Agent Reliability: AI Engineer World's Fair 2025`
3. `coding-agents`
   - `id`: `PLcfpQ4tk2k0XFXogv-as7Zu9SrGdiQLgt`
   - `title`: `Coding Agents @ AI Engineer`

Every new entry must have:

```json
"transcriptLanguage": "en",
"summaryLanguage": "en",
"multiSpeaker": true
```

Do not add an AI Engineer author or relationship. Preserve the existing
Antirez entries and relationships byte-for-byte apart from unavoidable
surrounding JSON serialization.

Extend the existing committed-catalog test so it asserts the exact five slugs,
in order:

```text
antirez
antirez-english
swe-agents-2025
agent-reliability-2025
coding-agents
```

Keep the source-only and Antirez assertions. Run focused validation and
`status`; confirm all three new playlists are `manifest: not synced` and the
only author section is Antirez. Review and commit the catalog/test change before
running any network operation that can write manifests.

### 2. Validate all three remote identities read-only

Run one selected JSON check using repeated playlist flags:

```sh
npm run youtube:library -- check \
  --playlist swe-agents-2025 \
  --playlist agent-reliability-2025 \
  --playlist coding-agents \
  --json
```

The check must complete for all three playlists. Exit `2` is a partial report:
resolve every remote failure before sync; do not treat it as acceptance.

For each first-sync report, compare the returned addition video IDs and titles
with the researched playlist membership to establish that the configured ID
resolves to the intended corpus. Do not invent a remote playlist-title
assertion: the current playlist-items check proves identity through membership,
not playlist metadata. Do not infer a manifest from the earlier live-page
scrape, and do not write check output into the source tree.

### 3. Synchronize and commit the authoritative manifests separately

Only after all three read-only checks succeed, run one selected sync:

```sh
npm run youtube:library -- sync \
  --playlist swe-agents-2025 \
  --playlist agent-reliability-2025 \
  --playlist coding-agents
```

Treat this sync report and its exact file diff—not the earlier check—as
authoritative. Review the generated manifests for membership, positions,
`publishedAt` values when supplied, privacy status, and availability. Do not
manually repair or normalize machine-owned manifest data.

The only new source-library files in this step may be:

```text
src/content/youtube/playlists/swe-agents-2025/manifest.json
src/content/youtube/playlists/agent-reliability-2025/manifest.json
src/content/youtube/playlists/coding-agents/manifest.json
```

Commit these manifests separately from the catalog/test commit. Do not run
`capture` and do not create any video metadata, transcript, summary, overview,
or author file.

### 4. Record authoritative counts, overlap, gaps, and public impact

Compute from the committed manifests, without adding a production script:

- For each playlist: total manifest entries, available IDs, and unavailable IDs
  with recorded reasons.
- Full-membership pairwise intersections for all three playlist pairs.
- Available-video pairwise intersections for all three playlist pairs.
- Full-membership and available-video all-three intersections.
- Total occurrences and total unique IDs for full membership and available
  membership.

Record the exact IDs in every non-empty overlap, not only the counts. Explicitly
supersede the live-page precheck of `18/8/37` visible IDs and `63/61`
occurrences/unique IDs with the manifest-derived figures.

Use manifest evidence to reconcile the earlier `19/18`, `9/8`, and `38/37`
card/visible gaps where possible. If a gap remains unexplained, record the
uncertainty without guessing whether an entry is private, deleted, regional,
or otherwise unavailable.

For each of the three playlist IDs, run the safe public-impact search:

```sh
rg -l -e '<playlist-id>' src/content/posts src/content/summaries src/data/resources
```

Inspect every hit and record `keep` or `fix` in `progress.md`. An expected
no-match result has `rg` exit code `1`. Also record the additions review for
playlist orientation, resource dates, corpus counts, and material thesis
impact. Do not automatically create or edit public resources.

## Hard scope limits

- Do not add any playlist beyond the three pinned entries.
- Do not add an AI Engineer author, relationship, curator entity, speaker
  entity, schema field, wizard, or CLI command.
- Do not change existing Antirez catalog values, relationships, manifests,
  metadata, transcripts, summaries, overviews, or author synthesis.
- Do not run `capture`, retry captions, or create anything under
  `src/content/youtube/videos/`.
- Do not write playlist overviews, summaries, posts, resources, or other
  editorial prose.
- Do not begin Plan 03. Its per-playlist thin slices happen only after Plan 02
  is complete.
- Do not manually edit synchronized manifest membership to match research
  expectations.

## Work-item updates

- Keep the overall work item `in-progress`.
- Append Plan 02 decisions, command outcomes, manifest counts, overlap IDs,
  gap reconciliation, public-impact decisions, verification, commits, and any
  blockers to `progress.md`.
- Mark each Plan 02 task checkbox only after all of that task's acceptance
  criteria pass.
- When all Plan 02 tasks pass, point `index.md` at Plan 03 as the next action.
  Do not mark the overall work item completed and do not start Plan 03.

## Verification

Run focused catalog tests before the first commit. After the authoritative sync
and analysis, run the full Plan 02 checks:

```sh
npm run lint:fix
npm run youtube:library -- status
npm run youtube:library -- check --playlist swe-agents-2025 --playlist agent-reliability-2025 --playlist coding-agents --json
node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs
npm run check
npm run build
rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts
rg -n '"publication":"source-only"|"publication": "source-only"' dist
git diff --check
git status --short --branch
```

The two source-only `rg` commands must return no matches. The final selected
check should report all three synced playlists without remote changes unless
the remote state changed after sync; if it did, inspect and resolve that drift
rather than silently accepting it.

`npm run lint:fix` previously reformatted eight out-of-scope Antirez metadata
files. Inspect its exact changes. If that known formatter-only drift recurs,
restore only those changes after confirming they were clean at the start; never
commit unrelated source-library formatting.

Inspect every commit's file list. Final Plan 02 commits should separate:

1. Catalog plus committed-catalog test.
2. Three synchronized manifests.
3. Work-item task/progress/index updates.

## Stop conditions

Stop and record a focused blocker instead of broadening scope if:

- `YOUTUBE_API_KEY` is unavailable.
- Any selected read-only check fails or only partially succeeds.
- Remote membership does not establish the intended playlist identity.
- Sync creates files outside the three expected manifest paths.
- Existing Antirez data would need to change.
- A new schema entity, CLI surface, or manual manifest repair appears
  necessary.
- Verification reveals an unrelated pre-existing failure that cannot be
  separated from this change.

Remaining uncertainty about a card/visible count gap is not itself a blocker if
the manifest is valid; record the uncertainty faithfully.

## Final response

Report:

- The exact catalog entries added and confirmation that no author relationship
  was added.
- Read-only identity-check results and authoritative sync results for all three
  playlists.
- Per-playlist counts, unavailable IDs/reasons, all pairwise and all-three
  overlaps, occurrence/unique totals, and gap reconciliation.
- Public-impact search results and `keep`/`fix` decisions.
- Exact verification results, including any initial failure, expected no-match
  exit, or skipped check.
- Commit hashes and final worktree state.
- Confirmation that credentials stayed environment-only and were not exposed.
- Confirmation that capture, editorial artifacts, public resources, and Plan 03
  were not started.
