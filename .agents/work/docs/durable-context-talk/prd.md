# Durable Context Talk Requirements Brief

## Problem

The gist has a promising talk idea, but the current outline mixes several threads: LLM limitations, cognitive debt, team culture, AGENTS.md, Agent Skills, dot-agents, and a motivational closing. Before drafting a post/slide deck, we need a tighter narrative that fits a 20-minute talk plus 10 minutes of Q&A and can later be represented as a slide-aware Markdown post in this repo.

## Desired Outcome

A clear, iteratable content plan for a post that doubles as a slide deck. The next implementation step should be able to draft one Markdown post under `src/content/posts/` with 10-12 `##` sections that work as slides.

## Working Thesis

LLMs are broad, lossy pattern-compressors. Coding agents become more reliable when the exact intent, rules, workflows, and verification loops they need are made durable in the repository as plain text and executable checks.

## Assumed Audience And Tone

- **Audience:** Developers and technical leads already experimenting with coding agents.
- **Tone:** Practical field guide with a strong conceptual hook, not a product demo and not a general AI survey.
- **Talk promise:** Make coding agents less generic by moving project truth into the repo.

## Recommended Content Spine

1. **Why agents feel both magical and wrong:** they know common patterns, not your exact project.
2. **The failure mode:** if you accept plausible generated code without forming your own model, speed turns into cognitive/comprehension debt.
3. **The pivot:** stop treating model weights or chat history as the source of truth; make the repository the source of truth.
4. **The practical loop:** use small, repo-local artifacts: `AGENTS.md` as the map, skills as repeatable procedures, work items/plans as durable state, and verification as the exit criterion. The memorable loop is **map → procedure → state → evidence**.
5. **The takeaway:** start with one real task; write down the context that made the agent better; keep iterating the harness.

## Title Candidates

- **Your Repo Is the Memory: Durable Context for AI Coding Agents**
- **Durable Context for Coding Agents: From Lossy Encyclopedia to Local Source of Truth**
- **Stop Prompting From Scratch: Durable Context Loops for Coding Agents**
- **Working With the Lossy Encyclopedia: How to Ground Coding Agents in Your Repo**

Current recommendation: **Your Repo Is the Memory: Durable Context for AI Coding Agents**. It is shorter, more concrete, and points at the action: move useful context into the repo.

## Abstract Candidate

LLMs are excellent at recalling broad programming patterns, but they are lossy encyclopedias: they often miss the exact constraints, taste, and history that make code fit a real project. When we accept plausible agent output without understanding it, speed turns into cognitive debt: code we own but cannot confidently change. This talk shows how to ground coding agents in durable, repo-local context instead of ephemeral chat history. We will connect `AGENTS.md`, Agent Skills, work items, handoff prompts, and verification loops into a small plain-text workflow that keeps humans in the loop while making agents much more useful.

## Users / Use Cases

- **Primary audience:** Developers already experimenting with coding agents who want more reliable results in existing codebases.
- **Secondary audience:** Engineering leads deciding how to introduce agents without lowering quality.
- **Use case:** A 20-minute talk that can also become a public post with generated slides at `/posts/<slug>/slides`.

## Requirements

### Must Have

- [ ] Fit a 20-minute presentation plus 10 minutes Q&A.
- [ ] Use 10-12 slide sections, because the site currently splits slides on Markdown `##` headings.
- [ ] Preserve a strong conceptual arc, not just a tool tour.
- [ ] Include practical artifacts: `AGENTS.md`, Agent Skills, `.agents/work/`, handoff prompts, verification loops.
- [ ] Cite or clearly attribute external concepts: Simon Willison's "lossy encyclopedia," Addy Osmani's cognitive surrender/debt framing, AGENTS.md, Agent Skills, and any OpenAI claims.
- [ ] Keep the deck slide-readable: one main idea per slide, short bullets, diagrams where useful.
- [ ] Include one running example across 2-3 slides. Recommended example: this repo's own slide-aware post workflow, where intent goes into a work item, repo rules live in `AGENTS.md`, the plan tracks durable state, and `npm run check` / `npm run build` verify output.
- [ ] Keep a claims budget: every strong claim is directly sourced, reframed as personal workflow observation, or removed.

### Optional

- [ ] Include a short live or screenshot-based example of a `.agents/work/` item moving from brief to plan to handoff.
- [ ] Include a one-slide Q&A seed: common objections and answers.
- [ ] Add a companion checklist at the end of the post.

## Non-Goals

- Do not create a new slide framework before the content proves it needs one.
- Do not turn the talk into a general AI-agent survey.
- Do not make dot-agents the entire story; it should be the concrete implementation of the broader durable-context idea.
- Do not publish unverified claims from social posts or private/internal memos as if they were primary sources.

## Proposed 20-Minute Slide Structure

1. **Title / promise** — "Your repo is the memory" (1 min)
2. **The baseline: LLMs are lossy encyclopedias** (2 min)
3. **Where that breaks coding agents** — generic code, missing local constraints (2 min)
4. **The human failure mode: cognitive surrender/debt** (2 min)
5. **The pivot: repository as source of truth** (2 min)
6. **The durable context loop** — map → procedure → state → evidence → promote lessons back (2 min)
7. **Map + procedures** — `AGENTS.md` and Agent Skills (2 min)
8. **State across thread death** — work items, plans, handoffs, dot-agents (2 min)
9. **Evidence: say no to slop** — tests, builds, screenshots, logs, accountable human review (2 min)
10. **A minimal example you can copy** — tiny repo tree plus one task walkthrough (2 min)
11. **Start small / Q&A** — one repeated pain, one durable context improvement, "doing the thing" (1 min)

Target 16-18 minutes in rehearsal to preserve Q&A buffer. If the talk needs exactly 10 slides, merge slides 10 and 11. If a 12th slide is allowed, use it as an optional objection slide: "Isn't this just documentation?"

## Q&A Prep Topics

- "Isn't this just documentation?"
- "How do you prevent AGENTS.md and work items from going stale?"
- "When should a rule become a lint/test instead of prose?"
- "Is this overkill for small projects?"
- "What should stay out of the repo for security/privacy reasons?"
- "How does this work across different coding-agent tools?"

## Constraints / Decisions

- The repo already generates slides from posts. The post draft should be slide-aware from the beginning.
- Draft post path should likely be `src/content/posts/durable-context-coding-agents.md` or similar.
- Initial frontmatter should include `draft: true` until the user approves publication.
- Use existing post schema fields only unless a later content need justifies schema changes.

## Acceptance Criteria

- The user can review and adjust the thesis, title, abstract, outline, and source choices before drafting.
- The next agent has an implementation-ready plan for creating the draft post.
- Source risks are explicit before any public-facing content is written.

## Open Questions

- [ ] Should the talk include a live demo, a static repo tree, or only conceptual diagrams?
- [ ] Which specific agent client(s) should be named besides Amp, if any?
- [ ] Should the final article read like a polished essay, a field guide, or a transcript-style talk?
