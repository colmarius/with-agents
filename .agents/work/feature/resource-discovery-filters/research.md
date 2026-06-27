# Resource Discovery Filters Research

## User Goal

Make the resources section, especially Coding with Agents resources, easier to navigate and understand. Keep this work focused on resources; posts/articles are intentionally out of scope because they may be reworked later.

## Current Resource Structure

- Resource metadata lives in `src/data/resources/coding-with-agents.json`.
- Summary content lives in `src/content/summaries/**` and links to resources by `resourceId`, plus optional `series` and `episode` frontmatter.
- Transcript sidecars live in `src/content/transcripts/**` and link to summaries by `summarySlug`.
- `/resources/coding-with-agents` renders one flat reverse-chronological list and opens summaries in a modal via `/api/summaries/[slug].json`.
- Current manifest `tags` are broad display labels, not useful navigation facets. `Coding agents` is universal, while labels like `Workflow`, `Practices`, and `Tools` are too broad to express the concrete user intent.

## Taxonomy Decision

Use **one controlled taxonomy field** named `topics`.

Do not keep both `tags` and `topics`. For this small curated corpus, two parallel fields would drift and make UI behavior unclear. Product/entity names, sources, and formats should remain searchable through existing fields (`title`, `subtitle`, `description`, `source`, `type`) instead of becoming topics.

Implementation preference:

- Replace `tags` with `topics` in `src/data/resources/coding-with-agents.json`.
- Store stable slugs in JSON and map them to user-facing labels in the resource UI.
- Label the UI section/filter as “Topics”.

## Approved Topic Vocabulary

Use these 10 topic filters in this fixed order:

| Slug | Label | Meaning |
| --- | --- | --- |
| `prompting-orchestration` | Prompting & orchestration | Prompt structure, task scoping, subagents, feedback loops, human/agent coordination. |
| `context-memory` | Context & memory | Context engineering, repo navigation, long context, external memory, thread/context management. |
| `tools-harnesses` | Tools & harnesses | Agent product design, CLIs/TUIs, MCP/CLI interfaces, extensions, minimal harnesses, tool calling. |
| `review-verification` | Review & verification | Code review, tests, TDD, deterministic checks, conformance, validating agent output. |
| `architecture-maintainability` | Architecture & maintainability | Module boundaries, codebase design, migrations, dependencies, long-term ownership. |
| `collaboration-teams` | Collaboration & teams | Multiplayer agent environments, team alignment, shared sessions, human collaboration around agents. |
| `safety-permissions` | Safety & permissions | Sandboxing, security, permissions, risky workflows, guarding destructive actions. |
| `open-source-ecosystem` | Open source ecosystem | Open-source maintainer burden, agent spam, open tooling, ecosystem effects. |
| `models-evaluation` | Models & evaluation | Model quality, frontier capability, model choice, benchmarks, evals, LLM limitations. |
| `business-adoption` | Business & adoption | Enterprise adoption, pricing/economics, SaaS disruption, organizational rollout. |

## Assignment Rules

- Assign 1–3 topics per normal resource.
- Allow up to 4 topics only for broad playlist/series resources.
- A topic should apply only if a user filtering by it would reasonably expect that resource to be relevant.
- For playlist/series resources, assign topics based on recurring series themes, not one-off episode mentions.
- Prefer specific topics over generic buckets:
  - Use `review-verification` instead of a generic “Practices” label when the resource is about tests/checks/review.
  - Use `tools-harnesses` instead of a generic “Tools” label when it discusses agent interface/product/harness design.
  - Use `models-evaluation` only when model capability/evals are central, not merely because LLMs are involved.
  - Use `open-source-ecosystem` only when open source is substantively discussed, not just because a tool is open source.

## Labels That Should Not Be Filters

- `Coding agents`: universal across this hub.
- `Workflow`, `Practices`, `Trends`: too broad/vague; map to specific topics.
- `Amp`, `Pi`, `Claude Code`, `OpenCode`, `Sourcegraph`: product/entity names; keep searchable through titles/descriptions.
- `Video`, `Podcast`, `Playlist`, `Article`, `Live coding`: format/source metadata; use `type` or text search instead.
- Channel/source/person names such as `AI Engineer`, `Mayank Gupta`, `The Pragmatic Engineer`: source metadata, not topics.
- Standalone `Testing`, `Security`, `LLMs`, `Enterprise`, `Business`, `Open source`: fold into the controlled labels above unless the taxonomy grows later.

## Seed Topic Mapping

| Resource ID | Resource | Topics |
| --- | --- | --- |
| 19 | LLMs are killing Agent Harness | `tools-harnesses`, `models-evaluation`, `prompting-orchestration` |
| 18 | Collaborative AI Engineering | `collaboration-teams`, `tools-harnesses` |
| 17 | The Friction is Your Judgment | `review-verification`, `architecture-maintainability`, `safety-permissions` |
| 16 | Amp Code Founder on future of Coding Agents | `business-adoption`, `models-evaluation` |
| 15 | Pi Agent Creator on future of Agentic Coding | `tools-harnesses`, `architecture-maintainability`, `open-source-ecosystem` |
| 14 | Simon Willison practices | `review-verification`, `safety-permissions`, `architecture-maintainability` |
| 13 | A love letter to Pi | `tools-harnesses`, `context-memory`, `review-verification` |
| 12 | I Hated Every Coding Agent | `tools-harnesses`, `context-memory`, `open-source-ecosystem` |
| 11 | Building Pi / self-modifying software | `tools-harnesses`, `review-verification`, `open-source-ecosystem` |
| 10 | Building Pi in a World of Slop | `tools-harnesses`, `review-verification`, `open-source-ecosystem` |
| 9 | Pi Building Pi | `tools-harnesses`, `architecture-maintainability`, `review-verification` |
| 7 | Linus Torvalds keynote | `open-source-ecosystem`, `review-verification` |
| 6 | The Truth About Coding Agents | `review-verification`, `tools-harnesses`, `models-evaluation` |
| 5 | Emerging Skillset of Wielding Coding Agents | `prompting-orchestration`, `tools-harnesses`, `architecture-maintainability` |
| 4 | Next Token series | `prompting-orchestration`, `review-verification` |
| 8 | Craft & Chaos series | `prompting-orchestration` |
| 3 | Build Crew series | `prompting-orchestration`, `context-memory`, `models-evaluation` |
| 2 | Amp: The Emperor Has No Clothes | `tools-harnesses`, `architecture-maintainability`, `business-adoption` |
| 1 | Raising an Agent series | `context-memory`, `tools-harnesses`, `models-evaluation` |

## Source of Review

Oracle was consulted on 2026-06-27 for the one-field vs two-field taxonomy decision and topic vocabulary. The guidance above incorporates its recommendation.
