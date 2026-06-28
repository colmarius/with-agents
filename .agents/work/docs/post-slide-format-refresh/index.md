# Post and slide format refresh

Status: completed
Category: docs
Updated: 2026-06-28

## Summary

Plan and prepare a refactor of public posts and generated slide views so each article section can serve as both a concise presentation slide and richer reader/speaker notes. The recommended direction keeps Markdown posts as the single source of truth: each `##` section starts with a short slide-message blockquote, may include one immediate lightweight visual, and then continues as normal notes/article prose.

Tasks 1-5 are complete. The slide route now recognizes first-blockquote slide messages with notes, preserves legacy section slides as fallback, excludes source appendices from normal slide navigation, and supports notes/print/no-JS/keyboard behavior. All public posts now follow the post/slide hybrid convention: normal rendered `##` sections start with concise slide-message blockquotes and source appendices stay outside normal slide navigation. Authoring guidance covers the convention in root `AGENTS.md` and the detailed `article-writing` skill; no checker has been added yet.

Task 5 found the Markdown-first model still sufficient after migration: the five public posts have 41 normal slides, all with concise slide-message blockquotes, and 35 have immediate Markdown-native visuals. The recommended next improvement is editorial/presentation work: run a dry presentation pass and add adjacent progressive buildup slides or static diagram stages only where needed. Route-level fragments/overlays, generated static assets, MDX, and deck tooling remain deferred until concrete trigger evidence appears.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoffs: `handoff-task-1.md`, `handoff-task-2.md`, `handoff-task-3.md`, `handoff-task-4.md`, `handoff-task-5.md`
- Decisions: none

## Next Action

- No code action is queued. If presentation quality needs another pass, start with one target post or talk path and add Markdown-native adjacent buildup slides/static diagram stages where a dry-run reveals clutter, missing reveal, or weak visuals. Reconsider route-level reveal only if duplicated buildup creates maintenance pain across multiple posts or talks.

## Resolved Decisions

- [x] Task 1 ships backward-compatible slide-route behavior and skill guidance only. Pilot `agentic-coding-2026.md` in Task 2; do not migrate all posts in Task 1.
- [x] Prefer Mermaid/text/inline SVG for early migrations. If static images are needed later, use `public/visuals/posts/<slug>/` with accessible alt/caption text.
- [x] Task 5 keeps the Markdown-first slide route. Improve engagement through editorial conventions and progressive adjacent slides before adding route fragments, MDX, generated assets, or deck tooling.

## Open Questions

- None.
