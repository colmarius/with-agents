# YouTube Transcript Summary Prefill

Status: planned
Category: feature
Updated: 2026-06-27

## Summary

Build a local workflow that takes a YouTube URL, fetches available transcript/caption text plus video metadata, and produces a draft coding-with-agents resource entry and summary markdown for human/agent review. The likely first version should be a repo-local script plus an optional agent skill wrapper, so the transcript fetch and file-prefill mechanics are deterministic while the final summary can still be reviewed by an agent/human before publishing.

Seed targets after the workflow exists: fill the placeholder summaries for Raising an Agent episodes 9 and 10.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Decisions: none

## Next Action

- Implement Task 1 in `plan.md`: create the transcript/metadata fetcher and test it against `https://www.youtube.com/watch?v=DPgJjRdQWrg`.
- After Task 2 is usable, generate reviewed summaries for `https://www.youtube.com/watch?v=2wjnV6F2arc` and `https://www.youtube.com/watch?v=4rx36wc9ugw`.

## Open Questions

- [ ] Should the first version add an npm transcript dependency to `package.json`, or should it remain an agent-only helper that uses an external CLI/package on demand?
- [ ] Should the workflow only draft files for review, or should it support an explicit `--apply` mode that edits `src/data/resources/coding-with-agents.json` and `src/content/summaries/**`?
