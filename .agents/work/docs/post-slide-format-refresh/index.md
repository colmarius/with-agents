# Post and slide format refresh

Status: in-progress
Category: docs
Updated: 2026-06-28

## Summary

Plan and prepare a refactor of public posts and generated slide views so each article section can serve as both a concise presentation slide and richer reader/speaker notes. The recommended direction keeps Markdown posts as the single source of truth: each `##` section starts with a short slide-message blockquote, may include one immediate lightweight visual, and then continues as normal notes/article prose.

Tasks 1-4 are implemented. The slide route now recognizes first-blockquote slide messages with notes, preserves legacy section slides as fallback, excludes source appendices from normal slide navigation, and supports notes/print/no-JS/keyboard behavior. All public posts now follow the post/slide hybrid convention: normal rendered `##` sections start with concise slide-message blockquotes and source appendices stay outside normal slide navigation. Authoring guidance covers the convention in root `AGENTS.md` and the detailed `article-writing` skill; no checker has been added yet.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoffs: `handoff-task-1.md`, `handoff-task-2.md`, `handoff-task-3.md`, `handoff-task-4.md`
- Decisions: none

## Next Action

- Start Task 5 from `plan.md`: reassess whether Markdown-native visuals are sufficient or whether MDX/richer visuals are justified after the completed migrations.

## Resolved Decisions

- [x] Task 1 ships backward-compatible slide-route behavior and skill guidance only. Pilot `agentic-coding-2026.md` in Task 2; do not migrate all posts in Task 1.
- [x] Prefer Mermaid/text/inline SVG for early migrations. If static images are needed later, use `public/visuals/posts/<slug>/` with accessible alt/caption text.

## Open Questions

- None blocking Task 5.
