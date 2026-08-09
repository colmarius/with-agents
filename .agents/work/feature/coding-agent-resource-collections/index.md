# Coding-agent resource collections

Status: in-progress
Category: feature
Updated: 2026-08-09

## Why

The Coding with Agents resource hub has grown into one flat list that mixes practitioner workflows, agent-system design, reliability practices, and ecosystem change. Split it into durable reader-intent collections so visitors can choose a useful path without losing the existing all-resources search, topic facets, summaries, or stable URLs.

## Summary

Implementation and initial verification are complete for four primary sections over the existing canonical resource catalog: Working with Coding Agents, Building Coding Agent Systems, Reliable Agentic Engineering, and Teams & the Software Ecosystem. The catalog boundary and public guard validate every assignment; `/resources/coding-with-agents` remains the browse-all hub, nested section views and the collection overview are live in the static build, and resource IDs and summary content paths are unchanged. Required independent implementation review is next.

## Artifacts

- Research: [research.md](research.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Review: [Ultra plan review](https://ampcode.com/threads/T-019fe7e1-ffa7-73ef-aac7-4f7685395de3)
- Progress: [progress.md](progress.md)
- Decisions: none
- Handoffs: none

## Next Action

- Commit the browser-found accessibility remediation, generate `implementation-review.patch` from the remote baseline, and run the required high-mode independent review before final release verification.

## Open Questions

- None.
