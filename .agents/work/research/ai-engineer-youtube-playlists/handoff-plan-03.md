# Handoff: Start Plan 03 bounded playlist corpus

Continue the work item at:

`.agents/work/research/ai-engineer-youtube-playlists/`

This is an implementation handoff for Plan 03 Tasks 1 and 2 only. Establish
the bounded-track baseline and complete one SWE Agents editorial thin slice,
then stop before broad backfill.

## Read first

1. `.agents/work/research/ai-engineer-youtube-playlists/index.md`
2. `.agents/work/research/ai-engineer-youtube-playlists/plans/03-bounded-playlist-corpus.md`
3. The final Plan 02 section of
   `.agents/work/research/ai-engineer-youtube-playlists/progress.md`
4. `src/content/youtube/AGENTS.md`
5. `.agents/skills/maintaining-youtube-library/SKILL.md`
6. The two bounded manifests under
   `src/content/youtube/playlists/ai-engineer-swe-agents-2025/` and
   `src/content/youtube/playlists/ai-engineer-agent-reliability-2025/`

Load the `agent-work` and `maintaining-youtube-library` skills before changing
work-item or source-library state. Start with `git status --short --branch` and
preserve unrelated work.

## Goal and current state

Plan 02 is complete. The bounded manifests currently contain:

- SWE Agents: 19 entries, 18 available, private `jBr-EERbXJw`.
- Agent Reliability: 9 entries, 8 available, private `WnTq5Mc5bIU`.
- Shared available IDs: `Dj0b_cEBHBI` and `n991Yxo1aOI`.

No AI Engineer caption, metadata, source-only summary, or overview artifact
exists yet. AI Engineer is the curator/source channel, never the author. The
catalog slugs are source-namespaced; do not use the obsolete unprefixed slugs.

## Implement only this slice

### Task 1: Refresh and record the bounded baseline

- Verify `YOUTUBE_API_KEY` without printing it. A local `.env` may be sourced
  into the command process only after confirming it is untracked and ignored;
  never print, persist, or pass the value on the command line.
- Run one selected read-only check for
  `ai-engineer-swe-agents-2025` and
  `ai-engineer-agent-reliability-2025`.
- If remote changes exist, run the selected sync, inspect its exact diff, apply
  the mandatory public-impact review, and commit manifest changes separately.
  If there are no changes, do not create a no-op commit.
- Run status and record current manifest, available, captured, pending,
  unavailable, and overlap counts plus the Plan 03 stop protocol in
  `progress.md`.

### Task 2: Complete exactly one SWE Agents thin slice

- Run exactly one command:

  `npm run youtube:library -- capture --playlist ai-engineer-swe-agents-2025 --limit 1`

- Do not refill the limit or run a second capture command in this session.
- Follow Plan 03's outcome-aware exit protocol. Stop immediately on fatal or
  throttling/transient conditions; record durable unavailable outcomes
  faithfully.
- For a successful capture, review the final transcript source-faithfully and
  correct only obvious caption errors involving names, products, models, or
  meaning-changing punctuation.
- Write one deliberate draft summary using the exact source-only contract. Its
  framing must name every supported speaker and affiliation.
- Create the draft SWE Agents overview with exact headings, one incorporated
  ID, honest manifest/available/captured/summarized/incorporated/pending/
  unavailable counts, and an explicit statement that AI Engineer is the
  curator/source channel rather than the author.
- Anchor every speaker claim and prefix every editorial interpretation with
  `Editorial:`.

## Scope limits

- Do not start broad two-video backfill (Plan 03 Task 3).
- Do not capture Agent Reliability yet.
- Do not use `--retry` or `--force`.
- Do not generate editorial artifacts mechanically or overwrite existing
  editorial work.
- Do not create an AI Engineer author, relationship, post, or public resource.
- Do not start Plan 04.

## Progress contract

- Mark Plan 03 Task 1 and Task 2 only after all their acceptance criteria pass.
- Append exact commands, outcomes, selected video ID, transcript corrections,
  attribution decisions, coverage math, verification, commits, blockers, and
  next action to `progress.md`.
- Keep `index.md` status `in-progress`; point Next Action to Task 3 only when
  the thin slice passes.

## Verification

Run the mutating-workflow checks from the maintenance skill, including:

- `npm run lint:fix` and inspection/restoration of any known out-of-scope
  Antirez formatter-only drift.
- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run check`
- `npm run build`
- Both source-only boundary searches, each with expected no-match exit `1`.
- `git diff --check`
- `git status --short --branch`

Commit source capture, deliberate editorial artifacts, and work-item progress
in coherent reviewable steps. Inspect every commit's file list.

## Stop conditions

Stop and report without broadening scope if credentials are unavailable, the
remote check is partial, sync changes cannot be reconciled, caption capture is
fatal or throttled/transient, speaker attribution is unsupported, existing
source artifacts would need destructive overwrite, or unrelated verification
failures cannot be separated.

## Expected final response

Report the baseline/check result, exact capture outcome and video ID,
transcript/editorial changes, attribution and coverage decisions, verification
results, commit hashes, final worktree state, and confirmation that no second
capture, Agent Reliability capture, broad backfill, public artifact, or Plan 04
work began.
