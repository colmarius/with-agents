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
