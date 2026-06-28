# Post and slide format refresh

Status: planned
Category: docs
Updated: 2026-06-28

## Summary

Plan and prepare a refactor of public posts and generated slide views so each article section can serve as both a concise presentation slide and richer reader/speaker notes. The recommended direction keeps Markdown posts as the single source of truth: each `##` section starts with a short slide-message blockquote, may include one immediate lightweight visual, and then continues as normal notes/article prose.

No article migration or code refactor has been implemented yet. This work item records the current-state audit, option comparison, article-by-article target sketches, Oracle feedback, and a first implementation slice.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoff: `handoff-task-1.md`
- Decisions: none

## Next Action

- Start a new implementation thread with `handoff-task-1.md` for `plan.md` Task 1: upgrade the slide route to recognize the first-blockquote slide-message convention while preserving legacy fallback, add notes/print/no-JS/keyboard/source-appendix behavior, and update the article-writing skill. Do not edit `src/content/posts/*.md` in Task 1.

## Resolved Decisions

- [x] Task 1 ships backward-compatible slide-route behavior and skill guidance only. Pilot `agentic-coding-2026.md` in Task 2; do not migrate all posts in Task 1.
- [x] Prefer Mermaid/text/inline SVG for early migrations. If static images are needed later, use `public/visuals/posts/<slug>/` with accessible alt/caption text.

## Open Questions

- None blocking Task 1.
