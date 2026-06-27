# Progress

## 2026-06-27

- Created work item for a future YouTube transcript → summary/resource prefill workflow.
- Researched transcript extraction options: maintained Node packages, optional `yt-dlp`, brittle direct YouTube endpoint scraping, and hosted APIs.
- Probed example video `DPgJjRdQWrg`; metadata and an English auto-generated caption track are visible, but direct timedtext/get_transcript requests did not return usable transcript text from this environment.
- Added an implementation-ready plan with a script-first, draft-first approach and optional skill wrapper.
- Added Raising an Agent episode 9 and 10 as seed targets to summarize after the transcript prefill logic exists.
- Defined the transcript storage contract: `src/content/transcripts/<same-relative-slug-as-summary>.md`, committed the transcript root directory, and documented an `AGENTS.md` workflow for new and existing YouTube videos.

Next action: implement Task 1 in `plan.md` and test against `DPgJjRdQWrg`, then persist transcripts with Task 2 before generating summaries.

## 2026-06-27 Implementation

- Added `.agents/scripts/youtube-transcript-prefill.mjs`, a local Node/ESM CLI with `fetch`, `prefill`, and `backfill` commands.
  - Uses `youtube-transcript-plus@2.0.0` as a local dev dependency; script help documents that YouTube transcript APIs are unofficial and may break.
  - Supports normalized metadata, explicit `transcriptUnavailable` failures, timestamp-preserving transcript markdown, draft bundle generation, `--dry-run`, and overwrite protection via `--force`.
  - Leaves `src/content.config.ts` unchanged; transcripts remain source sidecars, not an Astro collection.
- Added `npm run youtube:prefill -- ...` as the repo command wrapper.
- Draft generation now distinguishes new manifest resources from existing series resources: new URLs get `resource.json`; drafts that reuse an existing `resourceId` get `resource-reference.json` with a clear "do not append" note.
- Example run succeeded for `https://www.youtube.com/watch?v=DPgJjRdQWrg`:
  - video ID: `DPgJjRdQWrg`
  - title: `Pi Building Pi, Openclaw's Minimalist Coding Agent | Mario Zechner, Creator of Pi`
  - channel/source: `The Modern Software Developer`
  - duration: `5447` seconds
  - transcript: available, `2665` timestamped segments
  - transcript sidecar: `src/content/transcripts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`
  - draft bundle: `drafts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent/`
- Generated draft bundles for the seed placeholders:
  - `drafts/coding-with-agents/raising-an-agent-episode-9/`
  - `drafts/coding-with-agents/raising-an-agent-episode-10/`
- Backfilled existing concrete YouTube `watch?v=` summaries/resources:
  - concrete targets found: `23`
  - transcript sidecars written: `23`
  - skipped existing: `0`
  - failures: `0`
  - skipped non-concrete audit entries: `7`
- Skipped entries/reasons:
  - `coding-with-agents/craft-and-chaos-episode-1`: X/Twitter livestream only; no concrete YouTube `watch?v=` URL.
  - `coding-with-agents/craft-and-chaos-episode-2`: X/Twitter livestream only; no concrete YouTube `watch?v=` URL.
  - `coding-with-agents/next-token-episode-1`: X/Twitter livestream only; no concrete YouTube `watch?v=` URL.
  - `Next Token – Series`, `Build Crew - Series`, and `Raising an Agent - Series`: playlist resources, not concrete videos.
  - `Craft & Chaos - Series`: X/Twitter resource, not a concrete YouTube video.

Commands run so far:

```sh
npm install --save-dev --save-exact youtube-transcript-plus@2.0.0
npx biome check --write .agents/scripts/youtube-transcript-prefill.mjs package.json package-lock.json
node .agents/scripts/youtube-transcript-prefill.mjs fetch https://www.youtube.com/watch?v=DPgJjRdQWrg --json
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=DPgJjRdQWrg --summary-slug coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent --resource-id 9 --source 'The Modern Software Developer' --date 2026-06-27
node .agents/scripts/youtube-transcript-prefill.mjs backfill --json
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=2wjnV6F2arc --summary-slug coding-with-agents/raising-an-agent-episode-9 --resource-id 1 --series raising-an-agent --episode 9 --date 2026-01-22 --source 'Amp, Inc.' --force
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=4rx36wc9ugw --summary-slug coding-with-agents/raising-an-agent-episode-10 --resource-id 1 --series raising-an-agent --episode 10 --date 2026-02-05 --source 'Amp, Inc.' --force
npx biome check --write .agents/scripts/youtube-transcript-prefill.mjs package.json package-lock.json
npm run youtube:prefill -- fetch https://www.youtube.com/watch?v=DPgJjRdQWrg
node .agents/scripts/youtube-transcript-prefill.mjs backfill --json
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=2wjnV6F2arc --summary-slug coding-with-agents/raising-an-agent-episode-9 --resource-id 1 --series raising-an-agent --episode 9 --date 2026-01-22 --source 'Amp, Inc.' --dry-run --json
# Expected to fail without --force, verifying overwrite protection:
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=2wjnV6F2arc --summary-slug coding-with-agents/raising-an-agent-episode-9 --resource-id 1 --series raising-an-agent --episode 9 --date 2026-01-22 --source 'Amp, Inc.' --no-draft
npm run check
npm run build
```

Verification:

- `npm run youtube:prefill -- fetch https://www.youtube.com/watch?v=DPgJjRdQWrg` passed; transcript available with `2665` segments.
- No-force backfill rerun passed; counts were `23` targets, `0` written, `23` skipped existing, `0` failed, and `7` skipped non-concrete entries.
- Dry-run prefill for Raising an Agent episode 9 passed and previewed `resource-reference.json`; a real no-force overwrite attempt failed as expected.
- Transcript sidecar validation passed for `24` markdown files; all had required frontmatter and timestamped transcript lines.
- `npm run check` passed with `0` errors and `0` warnings.
- `npm run build` passed with no empty collection warning.

Next action: review/publish human-approved summaries for Raising an Agent episodes 9 and 10 if desired. Task 4 apply mode and Task 6 skill wrapper remain intentionally unimplemented.

## 2026-06-27 Timestamp and Review Follow-up

- Reduced transcript verbosity by changing the default transcript body format from per-caption-segment timestamps to coarse timestamped chunks.
  - Default format is now `timestampMode: "chunk"` with `chunkSeconds: 30`.
  - Exact old behavior remains available with `--timestamp-mode segment`; timestamp-free chunk bodies are available with `--timestamp-mode none`.
  - Regenerated all `24` transcript sidecars in chunk mode; current transcript files have `55`–`180` timestamped blocks instead of hundreds/thousands of segment lines.
- Added `review` command to the local script:
  - `node .agents/scripts/youtube-transcript-prefill.mjs review <transcript-path-or-summary-slug>`
  - Supports `--all`, `--force`, `--dry-run`, `--json`, and `--max-findings`.
  - Writes review packets under `transcript-reviews/<summary-slug>/review.md`.
  - Flags likely ASR/caption issues for human/agent review without auto-correcting transcript text.
- Generated transcript review packets for the seed placeholders:
  - `transcript-reviews/coding-with-agents/raising-an-agent-episode-9/review.md`: `76` transcript blocks, `13` findings.
  - `transcript-reviews/coding-with-agents/raising-an-agent-episode-10/review.md`: `103` transcript blocks, `7` findings.
- Regenerated the draft bundles for the example video and Raising an Agent episodes 9/10 so draft provenance and excerpts use transcript blocks instead of segment lines.

Commands run for this follow-up:

```sh
npx biome check --write .agents/scripts/youtube-transcript-prefill.mjs package.json package-lock.json
node .agents/scripts/youtube-transcript-prefill.mjs fetch https://www.youtube.com/watch?v=2wjnV6F2arc --json
node .agents/scripts/youtube-transcript-prefill.mjs backfill --force --json
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=DPgJjRdQWrg --summary-slug coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent --resource-id 9 --source 'The Modern Software Developer' --date 2026-06-27 --force
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=2wjnV6F2arc --summary-slug coding-with-agents/raising-an-agent-episode-9 --resource-id 1 --series raising-an-agent --episode 9 --date 2026-01-22 --source 'Amp, Inc.' --force
node .agents/scripts/youtube-transcript-prefill.mjs prefill https://www.youtube.com/watch?v=4rx36wc9ugw --summary-slug coding-with-agents/raising-an-agent-episode-10 --resource-id 1 --series raising-an-agent --episode 10 --date 2026-02-05 --source 'Amp, Inc.' --force
node .agents/scripts/youtube-transcript-prefill.mjs review coding-with-agents/raising-an-agent-episode-9 --force
node .agents/scripts/youtube-transcript-prefill.mjs review coding-with-agents/raising-an-agent-episode-10 --force
node --check .agents/scripts/youtube-transcript-prefill.mjs
node .agents/scripts/youtube-transcript-prefill.mjs fetch https://www.youtube.com/watch?v=DPgJjRdQWrg --json
node .agents/scripts/youtube-transcript-prefill.mjs fetch https://www.youtube.com/watch?v=DPgJjRdQWrg --timestamp-mode segment --json
node .agents/scripts/youtube-transcript-prefill.mjs review coding-with-agents/raising-an-agent-episode-9 --dry-run --json
npm run check
npm run build
```

Verification:

- `node --check .agents/scripts/youtube-transcript-prefill.mjs` passed.
- Chunked fetch for `DPgJjRdQWrg` produced `180` timestamped blocks; `--timestamp-mode segment` still produced `2665` exact caption-timestamp lines.
- Review dry-run for Raising an Agent episode 9 passed, reported `13` findings, and wrote no files.
- Transcript sidecar validation passed for `24` markdown files; all had required frontmatter and timestamped transcript blocks.
- `npm run check` passed with `0` errors and `0` warnings.
- `npm run build` passed with no empty collection warning.

Next action: manually/agent-review the RA9 and RA10 review packets, apply only clear transcript fixes, rerun `review`, then draft the final public summaries.

## 2026-06-27 RA9/RA10 Review and Summary Publishing

- Applied conservative transcript fixes to the saved sidecars for Raising an Agent episodes 9 and 10.
  - Fixed clear ASR issues in speaker names, model/product names, obvious substitutions such as `Asians` → `agents`, and stray noise/music markers.
  - Kept the chunked timestamp structure intact; did not refetch or overwrite transcripts from YouTube after manual fixes.
- Reran transcript review packets for the two seed episodes:
  - `raising-an-agent-episode-9`: `13` automated findings → `0`; status `ready-for-skim`.
  - `raising-an-agent-episode-10`: `7` automated findings → `0`; status `ready-for-skim`.
- Replaced the public placeholder summaries with reviewed, transcript-backed summaries:
  - `src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md` → `The Assistant Is Dead, Long Live the Factory`.
  - `src/content/summaries/coding-with-agents/raising-an-agent-episode-10.md` → `Killing the Sidebar`.
- Left `src/data/resources/coding-with-agents.json` unchanged because both summaries belong to the existing Raising an Agent series resource (`resourceId: 1`).

Commands run for this follow-up:

```sh
node .agents/scripts/youtube-transcript-prefill.mjs review coding-with-agents/raising-an-agent-episode-9 --force
node .agents/scripts/youtube-transcript-prefill.mjs review coding-with-agents/raising-an-agent-episode-10 --force
npm run check
npm run build
git status --short --branch
```

Verification:

- `npm run check` passed with `0` errors and `0` warnings.
- `npm run build` passed and generated the RA9/RA10 summary JSON routes with no empty collection warning.
- `git status --short --branch` showed only the intended transcript/review/summary changes before progress/index updates.

Next action: decide whether Task 4 apply mode is worth implementing after draft-first/manual publishing worked for the seed summaries; keep Task 6 skill wrapper deferred until the script has been used for another new YouTube resource.
