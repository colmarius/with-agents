# Post and slide format refresh

Status: in-progress
Category: docs
Updated: 2026-06-28

## Summary

Plan and prepare a refactor of public posts and generated slide views so each article section can serve as both a concise presentation slide and richer reader/speaker notes. The recommended direction keeps Markdown posts as the single source of truth: each `##` section starts with a short slide-message blockquote, may include one immediate lightweight visual, and then continues as normal notes/article prose.

Task 1 is implemented: the slide route now recognizes first-blockquote slide messages with notes, preserves legacy section slides as fallback, excludes source appendices from normal slide navigation, and supports notes/print/no-JS/keyboard behavior. No article migration has been started yet.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoffs: `handoff-task-1.md`, `handoff-task-2.md`
- Decisions: none

## Next Action

- Start a new implementation thread with `handoff-task-2.md` for `plan.md` Task 2: pilot the post/slide hybrid convention in `src/content/posts/agentic-coding-2026.md` only, then smoke-check article, slides, notes, and print modes.

## Resolved Decisions

- [x] Task 1 ships backward-compatible slide-route behavior and skill guidance only. Pilot `agentic-coding-2026.md` in Task 2; do not migrate all posts in Task 1.
- [x] Prefer Mermaid/text/inline SVG for early migrations. If static images are needed later, use `public/visuals/posts/<slug>/` with accessible alt/caption text.

## Open Questions

- None blocking Task 1.
