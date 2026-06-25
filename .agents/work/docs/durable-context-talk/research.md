# Research: Durable Context Talk Sources and Repo Fit

**Date:** 2026-06-25
**Status:** draft
**Question:** What source evidence and local repo constraints should shape a post/slide deck about durable context for AI coding agents?

## Recommendation

Proceed with content planning before writing the post. The strongest public-source spine is: Simon Willison for "lossy encyclopedia," Addy Osmani for cognitive surrender/comprehension debt, OpenAI Harness Engineering for repo-local knowledge as the system of record, AGENTS.md for persistent project instructions, Agent Skills for procedural workflows, and dot-agents as this repo's concrete lightweight implementation.

Treat the gist's "OpenAI memo / Agents Captain / say no to slop" point as a source risk unless the user provides the underlying memo or a stable primary link. The public OpenAI Harness Engineering article supports a closely related and stronger point without relying on social excerpts.

## Key Findings

- The local site already supports generated slides for every post at `/posts/[slug]/slides`; slides are split by Markdown `##` headings.
- Content before the first `##` is not included in generated slides, so a talk post needs an explicit first `##` title/promise section if the deck needs a title slide.
- No code change is required to start drafting: a slide-aware Markdown post under `src/content/posts/` is enough.
- Possible later code needs are presenter notes, slide-only/post-only content, or a generated title slide. Defer these until the content proves they are necessary.

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

Talk use: replace or reinforce the gist's "OpenAI memo" section with a stronger public citation. This source directly supports "repo-local durable context" and "map, not manual."

### AGENTS.md

The AGENTS.md site describes it as a simple open format for guiding coding agents and a "README for agents": a predictable place for setup commands, tests, style, security notes, and project conventions. It recommends root and nested AGENTS.md files, and says it is supported across many coding-agent tools.

Talk use: present `AGENTS.md` as the stable entry point and map, not a giant encyclopedia.

### Agent Skills

Agent Skills are described as a lightweight open format for extending agents with specialized knowledge and workflows. A skill is a folder with `SKILL.md` plus optional scripts, references, and assets. The format supports progressive disclosure: discovery by name/description, activation by loading `SKILL.md`, then optional execution/loading of bundled resources.

Talk use: distinguish static project rules (`AGENTS.md`) from repeatable procedures (skills).

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

- [ ] Verify or replace the "Agents Captain" source. Current search found social excerpts, not a stable primary document.
- [ ] Verify any Mario Zechner quote before using it. The gist mentions average GitHub code quality, but this has not yet been sourced.
- [ ] Decide whether to cite the OpenAI Harness Engineering article instead of the gist's "recent OpenAI internal memo" framing.
- [ ] If using numerical claims from Addy/Anthropic/Wharton/MIT, either cite the underlying papers or avoid numbers on slides.

## Sources

- [Durable Context for AI Coding Agents gist](https://gist.github.com/colmarius/bff9fe53cb8a2f3aec0b469d39470924) — Starting title, abstract, and 12-slide narrative.
- [Lossy encyclopedia — Simon Willison](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — Defines the lossy encyclopedia framing and recommends providing correct examples for highly specific tasks.
- [Cognitive Surrender — Addy Osmani](https://addyosmani.com/blog/cognitive-surrender/) — Defines cognitive surrender and links it to comprehension/cognitive debt in AI-assisted software work.
- [Harness engineering: leveraging Codex in an agent-first world — OpenAI](https://openai.com/index/harness-engineering/) — Public source for repository knowledge as system of record, AGENTS.md as table of contents, progressive disclosure, and feedback loops.
- [AGENTS.md](https://agents.md/) — Primary source for AGENTS.md as a README for agents.
- [Agent Skills Overview](https://agentskills.io/home) — Primary source for Agent Skills structure and progressive-disclosure workflow.
- [Things That Aren't Doing the Thing — Strangest Loop](https://strangestloop.io/essays/things-that-arent-doing-the-thing) — Closing quote source.

## Open Questions

- [ ] What level of citation should the public post use: inline links only, footnotes, or a resources section?
- [ ] Should the talk explicitly name `dot-agents` early, or reveal it after the conceptual need is established?
