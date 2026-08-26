# Resource Summary Pages

Status: completed
Category: feature
Updated: 2026-08-26

## Why

Resource summaries are long-form reading destinations, but the current modal constrains them to nested scroll regions and makes episode navigation especially cramped on mobile. Research and implement a summary experience that improves mobile and desktop usability, direct navigation, sharing, and accessibility without losing a clear path back to the resource catalog.

## Summary

The current flow and live UI were audited, external guidance reviewed, Oracle consulted, and three isolated high-effort prototype/review threads compared. Dedicated pages won and are implemented: every summary has one canonical static page, responsive linked group navigation, exact catalog return anchors, per-summary metadata, and legacy query redirects. Modal-only client state, components, hooks, and JSON endpoints were removed. Static checks, 93 tests, the content guard, a 289-page production build, responsive browser checks, and targeted WCAG A/AA audits all passed.

## Artifacts

- Research: [research.md](research.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: none
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
