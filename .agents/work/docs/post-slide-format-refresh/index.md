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
- Decisions: none

## Next Action

- Implement `plan.md` Task 1 only: upgrade the slide route to recognize the first-blockquote slide-message convention while preserving legacy fallback, add notes/print behavior, and update the article-writing skill. Do not migrate all posts in that first slice.

## Open Questions

- [ ] Should the first coding slice migrate `agentic-coding-2026.md` as a pilot, or only ship the backward-compatible slide-route behavior first?
- [ ] Should lightweight image assets live under `public/visuals/posts/<slug>/` by convention, or should the first migration avoid raster/image assets and use only Mermaid/text/SVG-in-Markdown?
