# YouTube library maintenance progress

## 2026-07-27 — Task 1 complete

### Implementation summary

- Added `check [--playlist <slug>]... [--json]` to the existing YouTube library
  CLI without adding an npm alias or changing sync, capture, status, or help
  semantics.
- Reused catalog selection, environment-only API-key handling, dry-run playlist
  synchronization, normalized manifest diffs, and `buildLibraryStatus`.
- Added deterministic human and JSON reports that separate remote changes a
  later sync would apply from local state derived from committed manifests and
  source artifacts.
- Kept selected playlist records in catalog order and included related authors
  with their full cross-playlist local synthesis status.
- Isolated remote failures per playlist, continued later checks, and sanitized
  serialized errors without exposing credentials, request URLs/query strings,
  or stacks.

### Report and exit-code decisions

- Successful playlist records expose `firstSync`, `remote.fetched`,
  `remote.changed`, the existing normalized diff (including
  `privacyChanges`), and projected local transcript, summary, unavailable-ID,
  and overview state. Failed remote records expose only a sanitized error while
  retaining local state.
- Aggregate `remoteChanges` counts changed playlists, first syncs, additions,
  removals, moves, retitles, and availability changes. The remaining summary
  counts selected-playlist pending transcripts and missing summaries,
  non-current selected playlist/related-author syntheses, and remote errors.
- Exit `0` means every selected remote check and local status operation
  completed, even when work was found. Exit `2` carries a useful report with at
  least one isolated remote error. Fatal preflight or local-report failures exit
  `1` through the CLI error boundary.

### Files changed

- `.agents/scripts/youtube-library.mjs`
- `.agents/scripts/lib/youtube-library-core.mjs`
- `.agents/scripts/lib/youtube-library-capture-status.mjs`
- `.agents/scripts/youtube-library.test.mjs`
- `.agents/work/tooling/youtube-library-maintenance/index.md`
- `.agents/work/tooling/youtube-library-maintenance/plan.md`
- `.agents/work/tooling/youtube-library-maintenance/progress.md`

### Verification

- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
  passed: 45 tests.
- `npm run youtube:library -- help` passed and lists the read-only check command.
- `npm run youtube:library -- status` passed with the existing local report.
- Scoped Biome checks passed for all four touched JavaScript files.
- `npm run check` passed with no diagnostics.
- `npm run build` passed.
- `git diff --check` passed.
- Source-only guards found no imports/registrations under Astro source and no
  `publication: "source-only"` marker in `dist/`.
- `npm run lint:fix` was attempted. It retained the known unrelated failure in
  `.agents/references/dot-agents/site/` and formatted eight protected YouTube
  metadata files; that unrelated metadata drift was restored exactly.
- No live API check was performed because `YOUTUBE_API_KEY` was unavailable.
  Fixture-backed remote tests cover human/JSON shape, complete and partial exit
  semantics, selected ordering, first sync, all diff categories, sanitization,
  deterministic aggregates, and no file or directory writes.

### Blockers and known limitations

- Live remote behavior remains unverified in this environment because no API
  credential was present; this does not block Task 1.
- The deferred scheduler notification choice remains open and out of scope.

### Next action

- Task 2: add the maintenance skill and discovery triggers.

## 2026-07-27 — Tasks 2 and 3 complete

### Skill implementation summary

- Added the instruction-only `maintaining-youtube-library` workspace skill with
  a valid quoted 196-character discovery description and no skill-local scripts,
  references, assets, or dependencies.
- Registered the skill in `.agents/skills/AGENTS.md` and added a short root
  discovery trigger beside the existing single-video workflow. The root trigger
  keeps standalone video summaries on that existing workflow and links to
  `src/content/youtube/AGENTS.md` as the authoritative source-only and editorial
  contract.
- Added no npm alias, `youtube:update`, `add` subcommand, scheduler, GitHub Action,
  dependency registry, LLM API, public route, UI, or automatic editorial action.

### Trigger and mode decisions

- Ambiguous or check-only intent routes to Mode A, which runs only the read-only
  `check` command and writes nothing. Remote changes remain advisory data;
  missing `YOUTUBE_API_KEY` leaves `status` as the local-only inspection path.
- Explicit sync/update intent routes to Mode B with a clean-or-understood
  `src/content/youtube/` gate, optional prior check, authoritative sync-report
  handling, bounded capture, no routine force, draft-only editorial work, same-
  session playlist overview refresh, and related author-synthesis review.
- Playlist addition routes to Mode C: manual reviewed `catalog.json` editing with
  explicit playlist, author, transcript-language, and summary-language values;
  existing-command validation; scoped sync; and a one-video thin slice before
  bounded backfill. No identity or language values are inferred.
- Explicit caption retry routes to Mode D with `capture --retry` bounded by
  playlist and/or positive limit. Routine checks and syncs do not retry recorded
  failures, and retry never combines with force.
- Standalone single-video summary intent is explicitly outside the maintenance
  skill and remains governed by the root transcript workflow.

### Public-impact policy encoded

- Every authoritative retitle, removal, or availability change requires an
  `rg -l '<video-id>' src/content/posts src/content/summaries src/data/resources`
  search, inspection of every hit, and a recorded per-hit `keep` or `fix`
  decision in work-item progress or a commit message.
- Playlist IDs receive the same search and decision treatment for playlist-level
  identity or availability changes. Additions require review of public playlist
  orientation, resource dates, corpus counts, and material thesis changes without
  automatic public edits.
- No public-impact search was needed during this implementation because no sync,
  capture, retry, corpus mutation, or public-content mutation was run.

### Files changed

- `.agents/skills/maintaining-youtube-library/SKILL.md`
- `.agents/skills/AGENTS.md`
- `AGENTS.md`
- `.agents/work/tooling/youtube-library-maintenance/index.md`
- `.agents/work/tooling/youtube-library-maintenance/plan.md`
- `.agents/work/tooling/youtube-library-maintenance/progress.md`

### Skill validation and representative intents

- Loaded `building-skills` before examining skill patterns or writing the skill.
  Structural validation confirmed the skill name matches its directory, the
  frontmatter shape and name characters are valid, the quoted description is 196
  characters and covers all four triggers, and the 172-line skill remains below
  the 500-line guidance.
- A fresh post-commit local Amp runner discovered and loaded the skill through the
  skill tool. The temporary runner and detached worktree were removed after the
  validation.
- Loaded-skill review passed all representative intents: tracked-playlist check
  to read-only Mode A; library sync to explicit Mode B; `coding-with-ai` caption
  retry to bounded Mode D; playlist addition to manual catalog/thin-slice Mode C;
  and standalone video summary back to the existing root workflow.
- Loaded-skill review also confirmed clean-or-understood gating, authoritative
  sync-report handling, no routine force, draft-only editorial behavior, and the
  mandatory public-impact search plus per-hit keep/fix record.

### Complete verification

- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
  passed: 45 tests, including fixture proof that complete, changed, first-sync,
  and partial-error checks do not write files or directories.
- `npm run youtube:library -- help` passed and presents the expected check, sync,
  capture, status, and help surface.
- `npm run youtube:library -- status` passed: both playlists and the related
  author synthesis remain current; 78 transcripts are captured, eight caption
  failures remain recorded, and no captured video lacks a summary.
- No live `check` or `check --json` ran because `YOUTUBE_API_KEY` was unavailable.
  The key was neither requested nor exposed; fixture-backed remote verification
  remains authoritative and the missing credential is not a blocker.
- `npm run check` passed with no diagnostics.
- `npm run build` passed and built 20 pages.
- `git diff --check` passed before and after verification.
- The source-only source guard found no `src/content/youtube` references in
  `src/content.config.ts`, pages, components, or layouts. The generated-output
  guard found no source-only publication marker in `dist/`.
- A scoped Biome check was attempted for the three Markdown implementation files;
  the repository configuration ignores Markdown, so it processed no files.
  Frontmatter validation, loaded-skill review, and `git diff --check` covered the
  touched skill and guidance files instead.
- `npm run lint:fix` was attempted. It retained the known unrelated baseline in
  `.agents/references/dot-agents/site/` (`index.html` button/function diagnostics
  and `style.css` specificity warnings) and formatted eight protected YouTube
  metadata files. Exactly those unrelated metadata changes were restored; the
  reference checkout was not modified.
- No catalog, manifest, transcript, metadata, summary, playlist overview, author
  synthesis, public post/resource, package dependency, or generated build output
  is included in the implementation or completion commits.

### Blockers and known limitations

- No blockers remain. Live API behavior was not rerun because credentials were
  absent, and the unrelated reference-site lint baseline remains unchanged.
- Scheduler and notification behavior remain intentionally deferred to a later
  work item.

### Final next action

- None for this work item.
