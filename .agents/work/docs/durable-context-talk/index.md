# Durable Context Talk

Status: planned
Category: docs
Updated: 2026-06-25

## Summary

Prepare a post/slide deck about durable context for AI coding agents, based on the gist "Durable Context for AI Coding Agents: Working with the 'Lossy Encyclopedia'." The work is content-first: refine the concept, title, abstract, narrative arc, source evidence, and 20-minute slide structure before creating the publishable Markdown post.

## Artifacts

- Research: `research.md`
- Source notes: `sources/openai-agentic-software-development-x-post.md`
- PRD: `prd.md`
- Plan: `plan.md`
- Progress: `progress.md`
- Decisions: none

## Next Action

- Finish source verification only where it affects the draft, then create `src/content/posts/durable-context-coding-agents.md` as `draft: true` with 10-11 `##` slide sections using the map → procedure → state → evidence spine.

## Open Questions

- [ ] Who is the exact audience and venue? The gist mentions Zurich AI Club, but tone changes if the audience is mostly engineers, managers, or AI-curious builders.
- [ ] Should the talk be primarily a conceptual warning, a practical workflow recipe, or a dot-agents product/workflow demo? Current default after Oracle: practical field guide with a conceptual hook; dot-agents appears as one concrete implementation, not the whole story.
- [x] Can the "Agents Captain" / "say no to slop" OpenAI memo source be provided or should we replace it with the public OpenAI Harness Engineering article? Source provided: <https://x.com/gdb/status/2019566641491963946>. Keep OpenAI Harness Engineering as the more stable companion source.
- [ ] Should the final post stay `draft: true` until after the talk, or publish immediately once the deck is ready?
