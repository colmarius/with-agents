# YouTube library maintenance research

## Current state

The repository already has the deterministic mechanics needed for routine
maintenance:

- `npm run youtube:library -- sync [--playlist <slug>] [--dry-run]` fetches all
  configured playlist pages, reports additions, removals, moves, retitles, and
  availability changes, and atomically writes only changed manifests.
- `npm run youtube:library -- capture [--playlist <slug>] [--limit <n>]
  [--retry] [--force]` deduplicates by video ID and captures configured-language
  caption transcripts. Default capture is non-destructive; `--force` is the
  destructive exception.
- `npm run youtube:library -- status` reports local transcript, summary,
  playlist-overview, and author-synthesis state.
- `src/content/youtube/catalog.json` owns authors, playlists, relationships,
  transcript languages, and summary languages.
- `src/content/youtube/AGENTS.md` owns source-only, editorial, language-fidelity,
  and safe-write contracts. Scripts may discover, synchronize, capture, and
  report, but must not silently generate or replace editorial Markdown.

Current status is healthy: both configured manifests are synced, 78 transcripts
are captured, eight caption-language failures are recorded, no captured video
lacks a summary, and both playlist overviews and the author synthesis are
current. All 81 editorial artifacts remain `draft` by design.

The remaining problem is orchestration and triggerability, not a missing sync
engine. The existing commands do not provide one structured remote-plus-local
check result, and no skill tells an agent how to turn a playlist diff into
bounded capture, editorial updates, public-impact review, verification, and
reviewable commits.

## Recommended responsibility split

### Root `AGENTS.md`: trigger and invariant

Add only a short instruction near the existing single-video transcript workflow:
when asked to check, synchronize, refresh, or add tracked playlists, load the
`maintaining-youtube-library` skill and use the source-only library command.
Do not duplicate the procedure or scoped editorial contract in the root file.

### `maintaining-youtube-library` skill: orchestration and judgment

The skill should expose four linear modes:

1. **Check:** clean-tree awareness, local status, read-only remote comparison,
   change classification, and a concise next-work report.
2. **Sync:** check, explicit manifest sync, authoritative sync-report review,
   bounded pending capture, draft summaries, stale playlist/author synthesis
   refresh, public-impact review, verification, and commits.
3. **Add playlist:** manually edit and validate `catalog.json`, dry-run the new
   slug, prove one transcript/summary/overview thin slice, then batch the rest.
4. **Retry unavailable:** use bounded `capture --retry` only when explicitly
   requested; do not retry recorded failures on every routine sync.

The skill should call the existing `.agents/scripts` entry points. It should not
duplicate API, diff, status, retry, or write logic in skill-local scripts.

### `.agents/scripts`: deterministic mechanics

Add a composed read-only command:

```sh
npm run youtube:library -- check [--playlist <slug>]... [--json]
```

`check` should reuse dry-run playlist synchronization and
`buildLibraryStatus`; it should not introduce a second diff or status model.
Human output remains the default. JSON exists for the skill and future
scheduler. Do not add a short npm alias until a demonstrated need exists.

## Oracle review

Oracle approved the split and recommended cutting four forms of early
over-engineering:

- no central public-derivative registry or frontmatter migration while public
  video citations remain discoverable by literal video ID;
- no scripted `add playlist` command for an infrequent, review-sensitive catalog
  edit;
- no `youtube:update` command that would imply editorial work is automatic;
- no scheduled workflow before the structured check contract is stable.

Oracle identified these skill-level safety gates:

1. Require a clean or understood `src/content/youtube/` worktree before a writing
   sync so the manifest diff remains isolatable.
2. Treat the sync report, not the earlier dry-run, as authoritative if the
   playlist changes between check and sync.
3. Never use capture `--force` in routine maintenance; require explicit
   destructive-operation approval.
4. Link to, rather than restate, the source-only and editorial contracts in
   `src/content/youtube/AGENTS.md`.
5. For affected public citations, search by video ID and make an explicit
   editorial decision instead of automatically rewriting prose.

## Structured `check` contract

### Exit semantics

- `0`: all selected playlists were fetched and local status was built. Remote
  changes, pending captures, and stale syntheses are data, not failures.
- `1`: fatal preflight failure such as an invalid catalog, missing
  `YOUTUBE_API_KEY`, or an unexpected exception that prevents a useful report.
- `2`: partial result; at least one playlist fetch failed, but JSON/human output
  still includes successful remote results and complete local status.

Consumers branch on report fields for work availability, not on a diff-style
nonzero exit code.

### Result shape

The stable top-level shape should be:

```text
playlists[]
  slug, id, firstSync
  remote: fetched, changed, diff or sanitized error
  local: transcripts, unavailable IDs, summaries, overview state
authors[]
  slug, playlists, video total, transcript states, synthesis state
summary
  remoteChanges, pendingTranscripts, missingSummaries,
  staleSyntheses, errors
```

The remote diff should preserve existing normalized data:

- additions and removals carry normalized entries;
- moves and retitles use `{ videoId, from, to }`;
- availability changes carry the before/after availability states;
- first sync is explicit even though every remote entry appears as an addition;
- per-playlist API errors are sanitized and do not abort other playlist checks.

Local values describe the committed manifests; remote values describe what a
sync would change. Human output must state that distinction.

## Editorial and public impact

After adding summaries, refresh the affected playlist overview in the same
session. Refresh an author synthesis when at least one related playlist overview
changes. The existing `coveredVideoIds` status semantics decide staleness; do not
invent a numerical materiality threshold.

For public dependencies, literal video IDs currently appear in every public
YouTube citation. The smallest reliable discovery step is:

```sh
rg -l '<video-id>' src/content/posts src/content/summaries src/data/resources
```

Also search `list=<playlist-id>` when a whole playlist changes identity or is
removed. Retitles usually require at most source-title review. Removal or
privacy changes require checking link viability and whether the surrounding
claim still has adequate evidence. Additions trigger review of public playlist
orientation, resource date, corpus counts, and material thesis changes, but do
not automatically rewrite public content.

If the project grows beyond roughly five authors or public artifacts stop
embedding literal source IDs, migrate toward source IDs in public-artifact
frontmatter. Do not put site dependencies into the source catalog or create an
unenforced central registry.

## Scheduling

Scheduling is a later phase. The first unattended workflow should be a weekly
and manually dispatchable read-only GitHub Action that runs `check --json`,
writes a job summary, and optionally opens or updates one issue. It must not
push, create source commits, capture transcripts, or publish content.

Prerequisites are a stable structured check contract, a repository Actions
secret for `YOUTUBE_API_KEY`, and a user choice of notification behavior. A
maintenance session must re-run check/sync because scheduled output is advisory
and may be stale.

## Decision outcome

The user selected the recommended mandatory public-impact guarantee. For every
retitled, removed, or availability-changed video ID, the skill must search public
content and record an explicit keep/fix decision for every hit. This remains
skill-level orchestration rather than source-tooling or catalog knowledge.
