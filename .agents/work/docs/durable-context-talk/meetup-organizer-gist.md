# Your Repo Is the Memory: Durable Context for AI Coding Agents

## Talk proposal for meetup organizers

**Format:** 20-minute talk + 10 minutes Q&A  
**Audience:** developers, tech leads, engineering managers, platform/DX engineers, and teams already experimenting with coding agents  
**Style:** practical field guide, not a vendor demo

## Short blurb

AI coding agents are becoming useful fast, but they still do not know the local truth of your codebase. This talk shows how to make repo-local context durable so agents produce work that fits the project and humans can still understand, review, and maintain what gets merged.

## Abstract

LLMs are powerful because they compress a huge amount of public programming knowledge. But that compression is lossy: a model can infer the broad idea of an Astro site, a React component, or a test suite, while still missing the exact build commands, architecture boundaries, style rules, deployment constraints, and half-finished decisions inside your project.

When teams hide that local truth in chat threads, prompt snippets, or one person's memory, coding agents can produce changes that are plausible but misaligned. The result is not just bad code; it is comprehension debt: code the team owns but cannot fully explain.

This talk reframes agent adoption as a context-design problem. Instead of expecting the model to remember everything, put the reusable truth close to the code, keep it plain-text and reviewable, and make "done" observable. The core loop is simple:

```text
map → procedure → state → evidence
```

We will look at what belongs in `AGENTS.md`, when to promote repeatable workflows into Agent Skills, how durable work items can survive thread death and handoffs, and why every agent task should end with evidence such as tests, builds, screenshots, logs, or reviewable diffs.

The goal is not more documentation for its own sake. It is documentation with a job: invoked by agents, versioned with the repo, and updated whenever it makes future runs better.

## Why this talk now

The tooling has crossed a threshold where many developers are moving from "AI helps me autocomplete" to "an agent can plan, edit, test, debug, and hand off work." That shift is useful, but it also changes the failure modes. Teams need practices that keep quality high, context reusable, and humans accountable for what lands in the codebase.

This talk connects current industry vocabulary such as `AGENTS.md`, Agent Skills, "agents captain," and "say no to slop" with a concrete workflow developers can adopt incrementally.

## Outline: 20 minutes

1. **The model knows patterns, not your project** — LLMs are useful "lossy encyclopedias," but project-specific work needs anchors.
2. **The real failure mode is comprehension debt** — the risk is not only that AI writes bad code; it is that the team stops understanding the code it owns.
3. **The pivot: stop storing truth in the chat** — model weights and chat history are weak sources of truth; the repository is versioned, reviewable, searchable, and close to the work.
4. **The durable context loop** — introduce `map → procedure → state → evidence` as a small operating model for agent-ready repos.
5. **Map: tell agents where truth lives** — use `AGENTS.md` as a table of contents for commands, conventions, constraints, and deeper docs.
6. **Procedure: capture workflows you repeat** — use Agent Skills for repeatable processes such as releases, migrations, browser checks, or incident investigation.
7. **State: survive thread death** — keep long-running work in durable work items with briefs, research, plans, progress, decisions, and handoff prompts; `dot-agents` is one lightweight implementation.
8. **Evidence: make "done" observable** — hold agent-generated work to the same review bar as human-written work, with checks and artifacts that a reviewer can inspect.
9. **Running example** — show how this talk itself moved from a rough gist into a repo-local work item, source notes, plan, draft post, validation, and slides.
10. **Takeaway** — start with one repeated pain, promote only what helped, and keep improving the next run.

## Attendees will leave with

- A simple sorting rule for what belongs in `AGENTS.md`, a skill, a work item, or an automated check.
- A practical way to reduce context loss between agent sessions.
- A vocabulary for pushing back on low-quality generated code without rejecting agent workflows outright.
- A lightweight adoption path: start with one task, capture what helped, and promote it into the repo.

## Not a demo of one tool

The talk uses `dot-agents` as one concrete example of durable work items, but the main idea is tool-agnostic: make context local, reviewable, and reusable. The same principles apply whether a team uses Amp, Codex, Claude Code, Cursor, custom MCP tools, or internal automation.

## Source threads behind the talk

- Simon Willison on LLMs as a ["lossy encyclopedia"](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/)
- Addy Osmani on [cognitive surrender and comprehension debt](https://addyosmani.com/blog/cognitive-surrender/)
- OpenAI [Harness Engineering](https://openai.com/index/harness-engineering/) on repo-local knowledge and `AGENTS.md` as a table of contents
- Greg Brockman's note on [agentic software development, "agents captain," and "say no to slop"](https://x.com/gdb/status/2019566641491963946)
- The [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [`dot-agents`](https://dot-agents.dev/) ecosystems
