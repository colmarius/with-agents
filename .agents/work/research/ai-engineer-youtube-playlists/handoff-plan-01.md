# Handoff: Implement Plan 01 multi-speaker library support

Implement Plan 01 of the AI Engineer YouTube playlist tracking work item. This
is an implementation task, not another planning pass.

## Read first

Read these files in order before editing:

1. `.agents/work/research/ai-engineer-youtube-playlists/index.md`
2. `.agents/work/research/ai-engineer-youtube-playlists/plans/01-multi-speaker-library-support.md`
3. The implementation-relevant sections of
   `.agents/work/research/ai-engineer-youtube-playlists/research.md`
4. `.agents/scripts/lib/youtube-library-core.mjs`
5. `.agents/scripts/lib/youtube-library-capture-status.mjs`
6. `.agents/scripts/youtube-library.test.mjs`
7. `src/content/youtube/AGENTS.md`
8. `.agents/skills/maintaining-youtube-library/SKILL.md`

Load the `agent-work` skill before updating work-item state. Follow all
applicable `AGENTS.md` files. Start with `git status --short --branch`, preserve
unrelated work, and make the smallest change that satisfies the plan.

## Goal

Add explicit support for intentionally author-less multi-speaker playlists while
preserving the existing invariant that ordinary playlists require an author
relationship. Align validator tests, status/check behavior, the source-only
editorial contract, and the YouTube maintenance skill.

## Required implementation

1. Add optional `multiSpeaker` validation in
   `.agents/scripts/lib/youtube-library-core.mjs`:
   - If present, its value must be exactly `true`.
   - Every playlist must have exactly one attribution mode: at least one valid
     author relationship or `multiSpeaker: true`.
   - Reject both an unmarked orphan playlist and a marked playlist that also has
     an author relationship.
   - Preserve all current author, playlist, relationship, credentials, and
     source-only validation.

2. Extend existing tests rather than creating a parallel fixture framework:
   - Accept a catalog with one authored playlist and one `multiSpeaker: true`
     playlist.
   - Reject absent, false/non-true, and author-plus-marker invalid modes.
   - Prove human and JSON status/check output includes the multi-speaker playlist
     without inventing author aggregation for it.
   - Prove capture selection remains playlist-based. Do not change runtime code
     unless a focused failing test demonstrates that it is necessary.
   - Exercise the ordinary leading-dash video ID `-QFHIoCo-Ko` through an
     existing path/capture fixture without adding a production special case.

3. Update `src/content/youtube/AGENTS.md`:
   - Document `multiSpeaker: true` and its mutual exclusion with relationships.
   - Keep playlist overview as the highest-level synthesis for these playlists.
   - Require summary framing and non-editorial overview claims to name supported
     speakers and relevant affiliations.
   - Require Coverage to identify AI Engineer as curator/source channel, not
     author, and report manifest, available, captured, summarized, incorporated,
     pending, and unavailable counts.
   - Do not add frontmatter fields or change the existing frontmatter key order.

4. Update `.agents/skills/maintaining-youtube-library/SKILL.md`:
   - Mode C must require either an author relationship or an explicit
     multi-speaker decision, plus explicit transcript and summary languages.
   - Support several selected playlists in one onboarding work item while
     requiring a separate `capture --playlist <slug> --limit 1` thin slice for
     each before broad backfill.
   - Make author synthesis review conditional on an author relationship.
   - Change public-impact searches to `rg -l -e '<video-id>' ...`.
   - Require tracked multi-speaker retitles to trigger summary-framing
     attribution review without automatically rewriting editorial prose.

## Hard scope limits

- Do not add the three AI Engineer catalog entries.
- Do not edit any existing Antirez catalog data, relationships, manifests,
  transcripts, summaries, or overviews.
- Do not sync playlists, capture captions, write editorial summaries, or begin
  Plan 02.
- Do not add curator/speaker entities, a catalog wizard, a new CLI command, or
  new summary/overview frontmatter.
- Preserve the current `buildLibraryStatus` boundary: playlists are independent;
  author aggregation comes only from `catalog.relationships`.

## Oracle use

The plan and design have already received Oracle review. Consult Oracle only if
a focused test shows that supporting author-less playlists requires runtime
changes beyond validation, or if the exactly-one attribution invariant conflicts
with an existing catalog/relationship contract. Ask for the smallest safe fix;
do not use Oracle to reopen the selected playlists, marker name, languages, or
author decision.

## Work-item updates

- Set the work item to `in-progress` when implementation begins.
- Create or append `progress.md` with implementation decisions, validation
  results, commits, and blockers.
- Mark Plan 01 task checkboxes only after their acceptance criteria pass.
- When all Plan 01 tasks pass, keep the overall work item `in-progress`, point
  `index.md` at Plan 02 as the next action, and link `progress.md` from the
  artifact list. Do not mark the whole work item completed.

## Verification

Run the narrow tests during development, then complete the full Plan 01 checks:

```sh
npm run lint:fix
node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs
npm run youtube:library -- status
npm run check
npm run build
rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts
rg -n '"publication":"source-only"|"publication": "source-only"' dist
git diff --check
```

The two `rg` commands should return no matches. Inspect formatter changes and do
not include unrelated files. Commit each logical step with clear messages after
verification, following the repository's Git workflow.

## Stop conditions

Stop and record a focused blocker instead of broadening scope if:

- Existing Antirez data would need to change.
- A new schema entity or CLI surface appears necessary.
- Status/check tests require behavior that contradicts relationship-only author
  aggregation.
- Verification reveals an unrelated pre-existing failure that cannot be
  separated from this change.

## Final response

Report:

- The validator/runtime behavior implemented.
- Tests and contract/skill updates.
- Exact verification results, including any failure or skipped check.
- Whether Oracle was consulted and what changed because of it.
- Commit hashes and worktree state.
- Confirmation that Plan 02, catalog onboarding, sync, and capture were not
  started.
