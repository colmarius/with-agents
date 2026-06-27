# YouTube Transcript Summary Prefill Plan

Create a local agent-assisted workflow for turning a YouTube video into a reviewed resource draft and summary.

## Goals

- Fetch transcript/caption text and basic metadata from a YouTube URL.
- Save transcript files under `src/content/transcripts/**`, mirrored to matching summary slugs.
- Generate draft content aligned with `src/data/resources/coding-with-agents.json` and `src/content/summaries/**`.
- Backfill missing transcript files for existing YouTube resources and summaries.
- Keep publishing safe: drafts first, explicit apply later.
- Make the workflow usable by agents through a small skill wrapper once the script behavior is stable.

## Seed Targets

- Raising an Agent Episode 9: <https://www.youtube.com/watch?v=2wjnV6F2arc>
- Raising an Agent Episode 10: <https://www.youtube.com/watch?v=4rx36wc9ugw>
- Example/test video for initial fetcher: <https://www.youtube.com/watch?v=DPgJjRdQWrg>

## Tasks

- [x] **Task 0: Define transcript storage contract**
  - Scope: `AGENTS.md`, `src/content/transcripts/`, this work item
  - Depends on: none
  - Acceptance:
    - `AGENTS.md` documents the YouTube link + title → transcript → summary → resource flow.
    - `src/content/transcripts/` exists as the committed transcript root.
    - Future transcript files have a clear path and frontmatter contract.
  - Notes: Completed before implementation so future agents have a stable target structure.

- [ ] **Task 1: Build transcript and metadata fetcher**
  - Scope: `.agents/scripts/` or a new repo-local tooling script; `package.json` only if a committed dependency is chosen
  - Depends on: Task 0
  - Acceptance:
    - Given `https://www.youtube.com/watch?v=DPgJjRdQWrg`, the command prints or writes normalized JSON with video ID, title, channel/source, duration, URL, and transcript text or a clear `transcriptUnavailable` reason.
    - Caption fetching handles at least English auto-generated captions when available.
    - Failures are explicit and actionable; the script does not silently produce empty summaries.
  - Notes: Prefer a maintained Node transcript package first; keep `yt-dlp` as an optional fallback if present.

- [ ] **Task 2: Persist transcript sidecar files**
  - Scope: `src/content/transcripts/**`, transcript writer in tooling script, optional `src/content.config.ts` validation once real transcript files exist
  - Depends on: Task 1
  - Acceptance:
    - Given a fetched transcript, the script can write `src/content/transcripts/<summarySlug>.md` with valid transcript frontmatter and body text.
    - The script preserves timestamps when available.
    - The script refuses to overwrite existing transcript files unless an explicit force flag is provided.
  - Notes: Transcript files are source material and may be committed before summaries are finalized. If adding an Astro `transcripts` collection for validation, add it with the first real transcript file so `npm run build` stays warning-free.

- [ ] **Task 3: Generate draft resource and summary files**
  - Scope: draft output under `.agents/work/feature/youtube-transcript-summary-prefill/` or another non-published draft location
  - Depends on: Task 2
  - Acceptance:
    - The command produces a proposed resource JSON object with `title`, `url`, `description`, `type`, `source`, `date`, and tags.
    - The command produces a summary markdown draft with valid frontmatter shape for `src/content/summaries/**`.
    - Summary drafts are generated from the saved transcript file, not directly from a one-off in-memory transcript.
    - Draft output includes enough provenance (source URL, transcript availability, generation date) for review.
    - The command can draft replacements for the placeholder Raising an Agent episode 9 and 10 summaries without publishing them automatically.
  - Notes: The script can generate a summary prompt bundle if no LLM API is added; the agent can then write the final summary from the transcript.

- [ ] **Task 4: Add reviewed apply mode**
  - Scope: `src/data/resources/coding-with-agents.json`, `src/content/summaries/**`, and script tests/guards
  - Depends on: Task 3
  - Acceptance:
    - `--apply` or equivalent writes the reviewed resource entry and summary file only when required fields are present.
    - The script refuses to overwrite existing summaries unless an explicit force flag is provided.
    - Running `npm run check` and `npm run build` succeeds after applying a draft.
  - Notes: Keep this behind an explicit flag; do not auto-publish raw AI output.

- [ ] **Task 5: Backfill existing YouTube transcripts**
  - Scope: `src/content/transcripts/**`, existing YouTube URLs in `src/content/summaries/**` and `src/data/resources/coding-with-agents.json`
  - Depends on: Task 2
  - Acceptance:
    - Every existing YouTube video summary/resource with a concrete `watch?v=` URL has a matching transcript file, or a recorded reason why transcript capture failed.
    - Existing X-only livestream entries are skipped until a YouTube URL is known.
    - Backfill progress is logged in `progress.md` with counts and failures.
  - Notes: Prioritize Amp/Raising an Agent, Build Crew, Next Token, and other coding-agent videos before unrelated/general resources.

- [ ] **Task 6: Wrap as an agent skill**
  - Scope: `.agents/skills/youtube-resource-prefill/` plus any reusable templates/assets
  - Depends on: Tasks 1-5
  - Acceptance:
    - The skill triggers on new YouTube link/title, video summary, transcript prefill, and backfill requests.
    - The skill explains when to use the script, how to handle transcript failures, how to review summaries, how to backfill existing videos, and which verification commands to run.
    - The skill follows `.agents/skills/AGENTS.md` and the `building-skills` skill guidance before creating `SKILL.md`.
    - The skill is tested by loading it and running the DPgJjRdQWrg example workflow.
  - Notes: Keep the skill as orchestration/documentation, not as the transcript implementation itself.

## Implementation Notes

- Start as agent/tooling infrastructure, not a public site feature.
- Avoid adding API keys or hosted scraping credentials to the repo.
- Save final transcript artifacts under `src/content/transcripts/**`; keep intermediate/raw drafts out of `src/` unless they are intentionally committed.
- If adding npm dependencies, choose one small transcript package and document the unofficial-API limitation in the script/help text.
- If transcript extraction fails for a video, output metadata and a clear manual fallback path instead of inventing content.
- Keep transcript slugs aligned with summary slugs so backfills and future tooling can pair them deterministically.

## Constraints / Decisions

- Draft-first is safer than direct publishing.
- Saved transcript first, then summary, then resource manifest update.
- The transcript fetcher should be deterministic; summarization can remain agent-assisted in the first version.
- Direct YouTube endpoint scraping was tested lightly and looked brittle for the example video; avoid building the first version around custom endpoint reverse engineering.

## Acceptance Criteria

- A fresh agent can run one command against the example YouTube URL and get either a transcript-backed draft or a clear transcript-unavailable result.
- New YouTube video workflows save a transcript file before creating a summary.
- Existing YouTube videos can be audited and backfilled for missing transcript files.
- Drafted summary content can be reviewed before it becomes part of the public site.
- Applying a finished draft keeps Astro content schema valid.

## Verification

- `npm run check`
- `npm run build`
- Manual run of the example video workflow: `https://www.youtube.com/watch?v=DPgJjRdQWrg`
