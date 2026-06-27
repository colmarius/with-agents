# YouTube Transcript Summary Prefill

Status: in-progress
Category: feature
Updated: 2026-06-27

## Summary

Build a local workflow that takes a YouTube URL, fetches available transcript/caption text plus video metadata, saves a committed transcript under `src/content/transcripts/**`, and produces a draft coding-with-agents resource entry and summary markdown for human/agent review. The likely first version should be a repo-local script plus an optional agent skill wrapper, so the transcript fetch and file-prefill mechanics are deterministic while the final summary can still be reviewed by an agent/human before publishing.

Seed targets after the workflow exists: fill the placeholder summaries for Raising an Agent episodes 9 and 10.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Script: `.agents/scripts/youtube-transcript-prefill.mjs`
- Transcript sidecars: `src/content/transcripts/**`
- Draft bundles: `drafts/**`
- Transcript review packets: `transcript-reviews/**`
- Decisions: none

## Next Action

- Decide whether to close this work item with draft-first/manual publishing as the accepted workflow, or implement optional Task 4 apply mode.
- Defer Task 6 skill wrapper until the script interface has been used for another new YouTube resource.
- If RA9/RA10 need editorial polish beyond transcript-backed summaries, handle that as content review rather than transcript tooling.

## Open Questions

- [x] Should the first version add an npm transcript dependency to `package.json`, or should it remain an agent-only helper that uses an external CLI/package on demand? Added `youtube-transcript-plus@2.0.0` as a small local dev dependency.
- [ ] Should the workflow only draft files for review, or should it support an explicit `--apply` mode that edits `src/data/resources/coding-with-agents.json` and `src/content/summaries/**`? Draft-first plus manual publishing was enough for the RA9/RA10 seed summaries; a generalized apply mode remains optional.
