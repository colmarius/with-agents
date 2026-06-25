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
- Direct-link published post: `src/content/posts/durable-context-coding-agents.md` (`unlisted: true`)
- Decisions: none

## Next Action

- Confirm the direct post URL and slides URL after push. The post should remain hidden from `/posts` while `unlisted: true`. Then use `meetup-organizer-gist.md` for organizer outreach as needed and tune the slides if the talk deck needs rehearsal edits.

## Open Questions

- [x] Who is the exact audience and venue? Default assumption for drafting: developers and technical leads already experimenting with coding agents. Venue can still tune tone later.
- [x] Should the talk be primarily a conceptual warning, a practical workflow recipe, or a dot-agents product/workflow demo? Current default after Oracle: practical field guide with a conceptual hook; dot-agents appears as one concrete implementation, not the whole story.
- [x] Can the "Agents Captain" / "say no to slop" OpenAI memo source be provided or should we replace it with the public OpenAI Harness Engineering article? Source provided: <https://x.com/gdb/status/2019566641491963946>. Keep OpenAI Harness Engineering as the more stable companion source.
- [x] Should the final post stay `draft: true` until after the talk, or publish immediately once the deck is ready? User chose direct-link-only publishing on 2026-06-25; post frontmatter is now `draft: false` and `unlisted: true`.
