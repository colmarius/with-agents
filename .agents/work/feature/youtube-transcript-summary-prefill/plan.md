# YouTube Transcript Summary Prefill Plan

Create a local agent-assisted workflow for turning a YouTube video into a reviewed resource draft and summary.

## Goals

- Fetch transcript/caption text and basic metadata from a YouTube URL.
- Generate draft content aligned with `src/data/resources/coding-with-agents.json` and `src/content/summaries/**`.
- Keep publishing safe: drafts first, explicit apply later.
- Make the workflow usable by agents through a small skill wrapper once the script behavior is stable.

## Tasks

- [ ] **Task 1: Build transcript and metadata fetcher**
  - Scope: `.agents/scripts/` or a new repo-local tooling script; `package.json` only if a committed dependency is chosen
  - Depends on: none
  - Acceptance:
    - Given `https://www.youtube.com/watch?v=DPgJjRdQWrg`, the command prints or writes normalized JSON with video ID, title, channel/source, duration, URL, and transcript text or a clear `transcriptUnavailable` reason.
    - Caption fetching handles at least English auto-generated captions when available.
    - Failures are explicit and actionable; the script does not silently produce empty summaries.
  - Notes: Prefer a maintained Node transcript package first; keep `yt-dlp` as an optional fallback if present.

- [ ] **Task 2: Generate draft resource and summary files**
  - Scope: draft output under `.agents/work/feature/youtube-transcript-summary-prefill/` or another non-published draft location
  - Depends on: Task 1
  - Acceptance:
    - The command produces a proposed resource JSON object with `title`, `url`, `description`, `type`, `source`, `date`, and tags.
    - The command produces a summary markdown draft with valid frontmatter shape for `src/content/summaries/**`.
    - Draft output includes enough provenance (source URL, transcript availability, generation date) for review.
  - Notes: The script can generate a summary prompt bundle if no LLM API is added; the agent can then write the final summary from the transcript.

- [ ] **Task 3: Add reviewed apply mode**
  - Scope: `src/data/resources/coding-with-agents.json`, `src/content/summaries/**`, and script tests/guards
  - Depends on: Task 2
  - Acceptance:
    - `--apply` or equivalent writes the reviewed resource entry and summary file only when required fields are present.
    - The script refuses to overwrite existing summaries unless an explicit force flag is provided.
    - Running `npm run check` and `npm run build` succeeds after applying a draft.
  - Notes: Keep this behind an explicit flag; do not auto-publish raw AI output.

- [ ] **Task 4: Wrap as an agent skill**
  - Scope: `.agents/skills/youtube-resource-prefill/` plus any reusable templates/assets
  - Depends on: Tasks 1-3
  - Acceptance:
    - The skill explains when to use the script, how to handle transcript failures, how to review summaries, and which verification commands to run.
    - The skill follows `.agents/skills/AGENTS.md` and the `building-skills` skill guidance before creating `SKILL.md`.
    - The skill is tested by loading it and running the DPgJjRdQWrg example workflow.
  - Notes: Keep the skill as orchestration/documentation, not as the transcript implementation itself.

## Implementation Notes

- Start as agent/tooling infrastructure, not a public site feature.
- Avoid adding API keys or hosted scraping credentials to the repo.
- Keep generated transcript artifacts out of `src/` unless they are intentionally published.
- If adding npm dependencies, choose one small transcript package and document the unofficial-API limitation in the script/help text.
- If transcript extraction fails for a video, output metadata and a clear manual fallback path instead of inventing content.

## Constraints / Decisions

- Draft-first is safer than direct publishing.
- The transcript fetcher should be deterministic; summarization can remain agent-assisted in the first version.
- Direct YouTube endpoint scraping was tested lightly and looked brittle for the example video; avoid building the first version around custom endpoint reverse engineering.

## Acceptance Criteria

- A fresh agent can run one command against the example YouTube URL and get either a transcript-backed draft or a clear transcript-unavailable result.
- Drafted summary content can be reviewed before it becomes part of the public site.
- Applying a finished draft keeps Astro content schema valid.

## Verification

- `npm run check`
- `npm run build`
- Manual run of the example video workflow: `https://www.youtube.com/watch?v=DPgJjRdQWrg`
