# Research: Durable Context Talk Sources and Repo Fit

**Date:** 2026-06-25
**Status:** draft
**Question:** What source evidence and local repo constraints should shape a post/slide deck about durable context for AI coding agents?

## Recommendation

Proceed with content planning before writing the post. The strongest public-source spine is: Simon Willison for "lossy encyclopedia," Addy Osmani for cognitive surrender/comprehension debt, Greg Brockman's OpenAI/X memo for the team-level adoption advice (agents captain, AGENTS.md, skills, tooling, agent-first codebases, and saying no to slop), OpenAI Harness Engineering for repo-local knowledge as the system of record, AGENTS.md for persistent project instructions, Agent Skills for procedural workflows, and dot-agents as this repo's concrete lightweight implementation.

The gist's "OpenAI memo / Agents Captain / say no to slop" point is now sourced to Greg Brockman's X post. Because X extraction is brittle, keep the local source note at `sources/openai-agentic-software-development-x-post.md` and use the public OpenAI Harness Engineering article as a stable companion citation for the repo-local context argument.

## Key Findings

- The local site already supports generated slides for every post at `/posts/[slug]/slides`; slides are split by Markdown `##` headings.
- Content before the first `##` is not included in generated slides, so a talk post needs an explicit first `##` title/promise section if the deck needs a title slide.
- No code change is required to start drafting: a slide-aware Markdown post under `src/content/posts/` is enough.
- Possible later code needs are presenter notes, slide-only/post-only content, or a generated title slide. Defer these until the content proves they are necessary.
- Oracle stress-test recommendation: keep one memorable argument rather than a source-heavy tool tour. Use **map → procedure → state → evidence** as the practical spine, add one concrete running example, and target 10 content slides plus Q&A buffer.

## 2026-06-27 Revision Source Pass

The first public/direct-link draft was clear but too introductory. A source-backed upgrade should keep the **map → procedure → state → evidence** loop, but reframe the problem around current agent workflows: implementation got cheaper, while alignment, context hygiene, proof, and human judgment became the bottleneck.

### Stronger insights to integrate

- **Alignment is the new bottleneck:** Maggie Appleton’s collaborative AI engineering talk argues that agent speed pushes planning and alignment too late. If a local agent plan becomes a PR in minutes, the PR becomes the first shared checkpoint and teams accumulate coordination debt. Use this to strengthen the opening and expand beyond individual comprehension debt.
- **Generation outpaces review:** Armin Ronacher and Cristina Poncela Cubeiro frame “friction” as judgment. Agents amplify code production while humans still carry responsibility, so durable context should route risky decisions to humans rather than remove every pause.
- **Proof beats trust:** Simon Willison’s engineering-practices discussion supports a stronger evidence section: red-green TDD, running the service, exercising APIs with `curl`, browser/screenshot checks, conformance suites, sandboxing, and fake data where private data or tool execution is involved.
- **Deterministic checks beat instructions alone:** Mario Zechner’s Pi/OpenClaw workflow shows that `AGENTS.md` guidance helps, but linters, typecheckers, smoke tests, pre-commit hooks, and similar checks are the durable rails that actually reject bad output.
- **Context hygiene is state management:** Build Crew episode 7 adds operational detail for the state section: small focused threads, handoffs, research versus implementation modes, wide critique/report phases, and narrow surgical implementation threads.
- **Codebase structure is context:** The Ronacher/Poncela and Willison material both support the idea that module boundaries, visible flow, simple cores, examples, scaffolds, fixtures, and fast tests are agent infrastructure, not just human DX.
- **Harness minimalism:** Thorsten Ball’s “LLMs are killing Agent Harness” talk supports de-emphasizing tool taxonomy. As models improve, simple tools plus good context often beat elaborate harness layers; the next challenge is preserving and coordinating agent work.

### Editorial implications

- Lead with “code got cheap; alignment got expensive” before returning to “models know patterns, not local truth.”
- Expand the failure mode from **comprehension debt** to **comprehension + coordination debt**.
- Keep `AGENTS.md`, skills, work items, and checks as examples of the loop, not as a tool tour.
- Add sections for **good friction** and **codebase as agent infrastructure**.
- Compress the self-referential running example into the state section rather than giving it a whole slide.
- Keep the post at 10-12 `##` sections so it remains a high-level slide base.

## Evidence

### Input gist

The gist proposes the title **"Durable Context for AI Coding Agents: Working with the 'Lossy Encyclopedia'"** and a 12-slide flow:

1. LLMs as a lossy encyclopedia.
2. Cognitive surrender and cognitive debt.
3. Codebase as source of truth.
4. Team/culture shift via an Agents Captain.
5. `AGENTS.md` and Agent Skills.
6. Thread death and durable workspace state via `dot-agents`.
7. Handoffs, doing the thing, and Q&A.

### Simon Willison: lossy encyclopedia

Simon Willison writes that "an LLM is a lossy encyclopedia" because facts are compressed into it, but the compression is lossy. He says the key is developing intuition for questions where lossiness matters, and for highly specific technical tasks: "make a correct example available to it" rather than expecting it to know exact details.

Talk use: establish the opening mental model. Agents are useful pattern engines, not precise carriers of project-local truth.

### Addy Osmani: cognitive surrender and comprehension debt

Addy Osmani defines cognitive offloading as delegating while still owning the answer, and cognitive surrender as when the AI's output becomes your output with nothing left to check. He connects this to comprehension debt: "the growing gap between how much code exists in your system and how much of it any human genuinely understands." He recommends verification evidence, smaller PRs, conceptual inquiry before generation, and designed friction.

Talk use: frame the risk as human posture and process, not "AI bad." The goal is mutual amplification rather than delegation that erodes understanding.

### OpenAI Harness Engineering: repository knowledge as system of record

Ryan Lopopolo's OpenAI Harness Engineering article describes building an internal beta with Codex-generated code and concludes that human work shifts toward environments, intent, and feedback loops. The article says OpenAI tried "one big AGENTS.md" and found it failed because context is scarce, too much guidance becomes non-guidance, it rots, and it is hard to verify. Their pattern: treat `AGENTS.md` as the table of contents, keep a structured in-repository knowledge base as the system of record, and use progressive disclosure.

Talk use: reinforce the X memo with a stable public article. This source directly supports "repo-local durable context" and "map, not manual."

### OpenAI / Greg Brockman X memo: agents captain and say no to slop

Greg Brockman posted that OpenAI was approaching agentic software development as a cultural and technical retooling effort. The memo recommends designating an "agents captain" for each team, creating and maintaining `AGENTS.md`, writing skills for repeatable Codex workflows, inventorying internal tools and making them agent-accessible, structuring codebases to be agent-first, and "say no to slop" by keeping humans accountable for merged code and maintaining at least the same review bar as human-written code.

Talk use: support the cultural-shift slide. The point is not "OpenAI says everyone must use Codex first" for our audience; the useful transferable lesson is that agent adoption needs ownership, shared workflows, agent-readable project context, tool access, quick tests/interfaces, and human accountability for quality.

### AGENTS.md

The AGENTS.md site describes it as a simple open format for guiding coding agents and a "README for agents": a predictable place for setup commands, tests, style, security notes, and project conventions. It recommends root and nested AGENTS.md files, and says it is supported across many coding-agent tools.

Talk use: present `AGENTS.md` as the stable entry point and map, not a giant encyclopedia.

### Agent Skills

Agent Skills are described as a lightweight open format for extending agents with specialized knowledge and workflows. A skill is a folder with `SKILL.md` plus optional scripts, references, and assets. The format supports progressive disclosure: discovery by name/description, activation by loading `SKILL.md`, then optional execution/loading of bundled resources.

Talk use: distinguish static project rules (`AGENTS.md`) from repeatable procedures (skills).

### dot-agents: durable work items and handoff prompts

dot-agents describes itself as a small `.agents/` workspace for any repo with durable work items, research notes, plans, and handoff prompts that agents can reuse. Its public site says work items live under `.agents/work/<category>/<slug>/` and are meant for multi-session or context-heavy work.

Talk use: present dot-agents as one lightweight implementation of the broader durable-context loop, not as an ecosystem standard.

### Strangest Loop: doing the thing

The essay "Things That Aren't Doing the Thing" repeats that preparing, scheduling, listing, announcing, and reading about the thing are not doing it; "The only thing that is doing the thing is doing the thing."

Talk use: closing nudge. Keep it brief and practical: don't over-design an agent workflow before using it on real work.

## Repo Fit

- Content lives in `src/content/posts/*.md`.
- Required post frontmatter from `src/content.config.ts`: `title`, `description`, `pubDate`, optional `tags`, `draft` defaulting false, and `order`.
- Existing posts include extra fields like `difficulty` and `readingTime`, but current pages do not rely on them. Prefer required schema fields unless a later need is clear.
- Post page: `src/pages/posts/[slug].astro` renders each post via `PostLayout`.
- Slide page: `src/pages/posts/[slug]/slides.astro` renders the same Markdown, splits on `h2`, and provides arrow-key navigation.
- Implication: each `##` should be one slide-sized section. Put speaker-detail paragraphs under concise bullets only if they do not make slides too dense.

## Source Risks / Follow-Up

- [x] Verify or replace the "Agents Captain" source. User provided the X source; local transcript captured at `sources/openai-agentic-software-development-x-post.md`.
- [ ] Verify any Mario Zechner quote before using it. The gist mentions average GitHub code quality, but this has not yet been sourced. Default: drop it from the deck.
- [x] Decide whether to cite the OpenAI Harness Engineering article instead of the gist's "recent OpenAI internal memo" framing. Use both: X memo for culture/process, Harness Engineering for durable repo-local context.
- [ ] If using numerical claims from Addy/Anthropic/Wharton/MIT, either cite the underlying papers or avoid numbers on slides. Default: avoid numerical study claims in the talk.
- [ ] Avoid hard productivity multipliers and extreme OpenAI claims unless directly quoted and tightly caveated.

## Claim Table

| Claim | Source | Confidence | Safe slide use | Avoid |
| --- | --- | --- | --- | --- |
| LLMs behave like lossy encyclopedias and need correct examples for highly specific tasks. | Simon Willison | High | Opening frame: agents know broad patterns, not your exact repo. | Do not imply models are useless or always wrong. |
| Cognitive surrender is accepting AI output without forming an independent view; comprehension debt is code the team owns but does not understand. | Addy Osmani | High | Human failure-mode slide. | Avoid unsourced neuroscience or study percentages. |
| OpenAI recommended agents captains, `AGENTS.md`, skills, agent-accessible tools, agent-first codebases, and saying no to slop. | Greg Brockman X post, local transcript | Medium-high | Culture/process slide with short quotes. | Do not turn OpenAI's internal target into advice that every team must copy. |
| `AGENTS.md` should be a map/table of contents, not a giant manual. | OpenAI Harness Engineering; AGENTS.md docs | High | `AGENTS.md` slide. | Do not make a single large instructions file the solution. |
| Agent Skills package repeatable workflows with progressive disclosure. | Agent Skills docs; OpenAI Codex Skills docs | High | Skills slide. | Do not imply every workflow needs a skill. |
| dot-agents provides durable work items, research, plans, and handoff prompts in `.agents/`. | dot-agents site/GitHub | High for tool description | Concrete implementation example. | Do not call dot-agents a standard. |
| Verification is the exit criterion for agent work. | Addy Osmani; OpenAI memo; local workflow | High | "Say no to slop" / evidence slide. | Do not imply tests alone prove comprehension. |

## Sources

- [Durable Context for AI Coding Agents gist](https://gist.github.com/colmarius/bff9fe53cb8a2f3aec0b469d39470924) — Starting title, abstract, and 12-slide narrative.
- [Greg Brockman X post on OpenAI agentic software development](https://x.com/gdb/status/2019566641491963946) — Source for agents captain, creating skills and AGENTS.md, agent-accessible tools, agent-first codebases, and saying no to slop. Local transcript: `sources/openai-agentic-software-development-x-post.md`.
- [Lossy encyclopedia — Simon Willison](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — Defines the lossy encyclopedia framing and recommends providing correct examples for highly specific tasks.
- [Cognitive Surrender — Addy Osmani](https://addyosmani.com/blog/cognitive-surrender/) — Defines cognitive surrender and links it to comprehension/cognitive debt in AI-assisted software work.
- [Harness engineering: leveraging Codex in an agent-first world — OpenAI](https://openai.com/index/harness-engineering/) — Public source for repository knowledge as system of record, AGENTS.md as table of contents, progressive disclosure, and feedback loops.
- [Customization — Codex / OpenAI Developers](https://developers.openai.com/codex/concepts/customization) — Stable source for Codex customization layers: `AGENTS.md`, memories, skills, MCP, and subagents.
- [Agent Skills — Codex / OpenAI Developers](https://developers.openai.com/codex/skills) — Stable OpenAI source for Codex skills, progressive disclosure, and repo skill locations.
- [AGENTS.md](https://agents.md/) — Primary source for AGENTS.md as a README for agents.
- [Agent Skills Overview](https://agentskills.io/home) — Primary source for Agent Skills structure and progressive-disclosure workflow.
- [dot-agents](https://dot-agents.dev/) — Public source for `.agents/` workspace, durable work items, research notes, plans, and handoff prompts.
- [colmarius/dot-agents](https://github.com/colmarius/dot-agents) — GitHub repository for dot-agents.
- [Things That Aren't Doing the Thing — Strangest Loop](https://strangestloop.io/essays/things-that-arent-doing-the-thing) — Closing quote source.

## Open Questions

- [ ] What level of citation should the public post use: inline links only, footnotes, or a resources section?
- [ ] Should the talk explicitly name `dot-agents` early, or reveal it after the conceptual need is established?
