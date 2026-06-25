# Durable Context Talk

Status: in-progress
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
- Meetup organizer gist: `meetup-organizer-gist.md`
- Draft post: `src/content/posts/durable-context-coding-agents.md`
- Decisions: none

## Next Action

- Use `meetup-organizer-gist.md` for organizer outreach as needed. Then preview and tune `src/content/posts/durable-context-coding-agents.md` at `/posts/durable-context-coding-agents/slides`, incorporate user feedback, and re-run the source-expansion gate only if edits add risky claims.

## Open Questions

- [x] Who is the exact audience and venue? Default assumption for drafting: developers and technical leads already experimenting with coding agents. Venue can still tune tone later.
- [x] Should the talk be primarily a conceptual warning, a practical workflow recipe, or a dot-agents product/workflow demo? Current default after Oracle: practical field guide with a conceptual hook; dot-agents appears as one concrete implementation, not the whole story.
- [x] Can the "Agents Captain" / "say no to slop" OpenAI memo source be provided or should we replace it with the public OpenAI Harness Engineering article? Source provided: <https://x.com/gdb/status/2019566641491963946>. Keep OpenAI Harness Engineering as the more stable companion source.
- [x] Should the final post stay `draft: true` until after the talk, or publish immediately once the deck is ready? Current draft is `draft: true`; publish decision remains later after review.
