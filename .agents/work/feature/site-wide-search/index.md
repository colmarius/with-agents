# Minimalistic site-wide search

Status: planned
Category: feature
Updated: 2026-09-09

## Why

Visitors should be able to open a minimal search interface from any page, enter a string such as “state of agentic coding”, and follow results to the relevant pages without knowing the site's catalog or context structure.

## Summary

Research and Oracle-reviewed planning are complete; no production feature changes. Select MiniSearch with a native dialog and one generated document payload. A high-orb Pagefind experiment established HTML coverage and useful ranking, but real browser failures exposed silently incorrect results that a custom UI cannot detect. Oracle reviewed the plan and new evidence, recommended switching engines, and supplied the incorporated corpus, focus, failure and PWA corrections. MiniSearch qualification is the first implementation task, not a claimed completed benchmark.

## Artifacts

- [Research and experiment evidence](research.md)
- [Implementation plan](plan.md)

## Next Action

- When implementation is requested, begin [Task 1: generate and qualify the rendered search corpus](plan.md#tasks). Preserve its relevance/performance gate before UI polish; do not restart the Pagefind investigation.

## Open Questions

- MiniSearch corpus size, ranking and browser initialization cost remain measured acceptance work in Task 1. No user decision or external account is required to start.
