# Post and slide format refresh

Status: in-progress
Category: docs
Updated: 2026-06-28

## Summary

Plan and prepare a refactor of public posts and generated slide views so each article section can serve as both a concise presentation slide and richer reader/speaker notes. The recommended direction keeps Markdown posts as the single source of truth: each `##` section starts with a short slide-message blockquote, may include one immediate lightweight visual, and then continues as normal notes/article prose.

Tasks 1-3 are implemented. The slide route now recognizes first-blockquote slide messages with notes, preserves legacy section slides as fallback, excludes source appendices from normal slide navigation, and supports notes/print/no-JS/keyboard behavior. The pilot post `agentic-coding-2026.md` now has 7 blockquote-led normal slides with immediate Markdown-native visuals and `## Sources used` retained as a source appendix outside normal slide navigation. Authoring guidance now covers the convention in root `AGENTS.md` and the detailed `article-writing` skill; no checker was added yet because only one post is migrated and the legacy fallback remains intentional.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoffs: `handoff-task-1.md`, `handoff-task-2.md`, `handoff-task-3.md`
- Decisions: none

## Next Action

- Start Task 4 from `plan.md`: migrate the remaining posts one at a time to the first-blockquote slide-message convention, using the pilot post and article-writing skill as the reference.

## Resolved Decisions

- [x] Task 1 ships backward-compatible slide-route behavior and skill guidance only. Pilot `agentic-coding-2026.md` in Task 2; do not migrate all posts in Task 1.
- [x] Prefer Mermaid/text/inline SVG for early migrations. If static images are needed later, use `public/visuals/posts/<slug>/` with accessible alt/caption text.

## Open Questions

- None blocking Task 3.
