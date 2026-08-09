# Research: Coding-agent resource collections

**Date:** 2026-08-09  
**Status:** complete  
**Question:** How should the existing Coding with Agents hub be split into coherent resource collections, and what repository constraints must the implementation preserve?

## Recommendation

Use four reader-intent sections over one canonical resource catalog:

1. **Working with Coding Agents**
2. **Building Coding Agent Systems**
3. **Reliable Agentic Engineering**
4. **Teams & the Software Ecosystem**

Give every top-level resource exactly one `primarySection`. Keep the current topics as cross-cutting facets and keep `/resources/coding-with-agents` as the all-resources search and umbrella route. Treat primary placement as navigation rather than an immutable statement about everything a resource covers.

## Current State

- [`coding-with-agents.json`](../../../../src/data/resources/coding-with-agents.json) contains 31 top-level resources: 17 videos, 13 playlists, and one podcast.
- The summaries collection contains 78 public summary files covering all 31 resource IDs. Seventy-four live under `src/content/summaries/coding-with-agents/`; four legacy summaries remain at the summaries root.
- [`/resources`](../../../../src/pages/resources/index.astro) exposes one Coding with Agents card and reports only the top-level resource count.
- [`/resources/coding-with-agents`](../../../../src/pages/resources/coding-with-agents.astro) renders one reverse-chronological list.
- [`CodingWithAgents.tsx`](../../../../src/components/resources/CodingWithAgents.tsx) directly imports the full JSON catalog. Its search covers resource metadata, topic labels, and child-summary titles; its topic filter is single-select.
- [`summaryResolver.ts`](../../../../src/components/resources/summaryResolver.ts) supports standalone summaries, episode series, and curated summary collections. These shapes control modal behavior and are independent of the proposed site sections.
- Summary frontmatter `collection` already identifies selected-video groups and is coupled to `order`, `videoId`, and date validation in [`content.config.ts`](../../../../src/content.config.ts). It must not be reused for resource navigation.
- [`public-content-guard.mjs`](../../../scripts/public-content-guard.mjs) validates one canonical resource manifest, globally unique IDs, allowed topics and types, complete summary coverage, and reviewed curated-playlist alignment.
- [`CodingResource`](../../../../src/types/resources.ts) is stale: it exposes optional `tags` while the catalog and React component use required `topics`, and the component maintains its own local resource type.

## Why Existing Topics Should Remain Facets

The ten topics overlap too heavily to become disjoint collections:

| Topic | Top-level resources |
| --- | ---: |
| Tools & harnesses | 23/31 |
| Review & verification | 18/31 |
| Architecture & maintainability | 11/31 |
| Models & evaluation | 11/31 |

Resources average 3.23 topics each. Promoting topics to collections would either duplicate most cards or force a primary-topic judgment that discards useful cross-cutting information.

## Options Considered

### Four reader-intent sections — selected

Collections answer why a visitor is browsing. The tie-breaker is the object the reader wants to change:

- their operating workflow;
- the coding-agent system;
- the trustworthiness of delivered software; or
- a team, organization, profession, market, or open-source community.

This produces balanced sections of 8, 8, 9, and 6 resources while retaining topics for secondary discovery.

### Series, guided playlists, and talks/interviews

This maps cleanly to content packaging and summary-resolver shapes, but packaging does not answer the reader's question. It would leave 18 heterogeneous talks and interviews in one catch-all collection. Format should remain a badge and modal behavior rather than the primary information architecture.

### Practitioner, builder, and leader audiences

Three audience routes are simple, but the practitioner group would absorb most workflow and reliability material. Reliability and safety would also appear incorrectly limited to leaders.

### Topic-derived or source-specific collections

Topic-derived collections duplicate too much content. An Amp-specific collection would mix a publisher axis with reader-intent axes. Source, format, and topic are better retained as metadata and filters.

## Selected Taxonomy and Assignments

### Working with Coding Agents

**Promise:** Practical ways to scope, prompt, delegate, coordinate, inspect, and complete software work with coding agents.  
**Rule:** The primary reader question is “How should I work with an agent on a task or workstream?”  
**Size:** 8 resources, 20 summaries.

| ID | Resource |
| ---: | --- |
| 3 | Build Crew — Series |
| 5 | The Emerging Skillset of Wielding Coding Agents |
| 8 | Craft & Chaos — Series |
| 13 | A Love Letter to Pi |
| 26 | Coding-agent talks from AI Engineer — guided collection |
| 28 | Field Guide to Fable |
| 32 | David Ondrej Podcast — selected agentic engineering conversations |
| 36 | Setting Yourself Up for Success — Jason Liu’s Codex Workshop |

### Building Coding Agent Systems

**Promise:** How models, prompts, tools, harnesses, context systems, evaluation, orchestration, and execution infrastructure shape coding-agent products.  
**Rule:** The agent, harness, model integration, or execution environment is the system being designed or evaluated. Model/harness evaluation belongs here; evaluation of delivered work belongs under Reliable Agentic Engineering.  
**Size:** 8 resources, 23 summaries.

| ID | Resource |
| ---: | --- |
| 1 | Raising an Agent Season 1 — Series |
| 9 | Pi Building Pi, OpenClaw’s Minimalist Coding Agent |
| 10 | Building Pi in a World of Slop |
| 12 | I Hated Every Coding Agent, So I Built My Own |
| 20 | Raising an Agent Season 2 — Series |
| 23 | AI Concepts — Salvatore Sanfilippo |
| 29 | Boris Cherny: We Cut 80% of Claude Code’s Prompt |
| 31 | The West Coast Builders — coding-agent collection |

### Reliable Agentic Engineering

**Promise:** Practices for making agent-generated and agent-operated systems reviewable, correct, secure, maintainable, and safe to run.  
**Rule:** The central question is what evidence or controls make the work trustworthy.  
**Size:** 9 resources, 21 summaries.

| ID | Resource |
| ---: | --- |
| 14 | Simon Willison: Engineering practices that make coding agents work |
| 17 | The Friction Is Your Judgment |
| 22 | Coding with AI — Salvatore Sanfilippo |
| 24 | Architecture, AI agents, and product empathy with Robert C. Martin |
| 27 | An AI state of the union |
| 33 | Ending AI Slop |
| 34 | Production agent reliability — AI Engineer guided collection |
| 35 | The Pragmatic Engineer — selected conversations |
| 37 | The OpenAI–Hugging Face Incident |

### Teams & the Software Ecosystem

**Promise:** How coding agents change collaboration, developer roles, product organizations, adoption, economics, and open-source communities.  
**Rule:** The principal unit of analysis is larger than one practitioner or one technical system.  
**Size:** 6 resources, 14 summaries.

| ID | Resource |
| ---: | --- |
| 2 | Amp: The Emperor Has No Clothes |
| 4 | Next Token — Series |
| 6 | The Truth About Coding Agents |
| 7 | Linus Torvalds on AI |
| 18 | Collaborative AI Engineering |
| 21 | State of Agentic Coding — Series |

## Ambiguous Assignments

- **2 → Teams & Ecosystem:** product strategy, company operation, economics, and changes to software work outweigh the harness material.
- **6 → Teams & Ecosystem:** code review is prominent, but the broader promise concerns developer roles, orchestration interfaces, open models, and probabilistic software.
- **13 → Working:** Pi is demonstrated, but the transferable value is context management, inspectable artifacts, and faster review.
- **20 → Building:** the currently available Season 2 episode centers isolated remote execution and reproducible team environments. Reassess as the rolling series expands.
- **26 → Working:** the anthology crosses all four sections but is organized as a route through engineering decisions in front of a practitioner.
- **27 → Reliable:** despite the field-overview title, the actionable center is proof through tests and real use plus prompt-injection containment.
- **31 → Building:** the selection emphasizes harness relevance, agent products, model-harness fit, Pi, and Amp.
- **32 → Working:** its interviews mainly address delegation, orchestration, judgment, and validation in practice.
- **33 → Reliable:** decomposing subjective evaluation and preserving plural preferences is a trust-and-evidence problem.
- **35 → Reliable:** the broad anthology's strongest recurring thread is durable software quality through context, architecture, TDD, formal methods, review, measurement, and judgment.

Broad anthologies and playlists remain single top-level resources. Their child summaries must not be split or duplicated among sections.

## Implementation Constraints

1. Keep one canonical resource manifest and globally stable numeric resource IDs.
2. Add one required controlled field named `primarySection`; do not reuse `collection`.
3. Preserve `/resources/coding-with-agents` as the canonical browse-all route and global search.
4. Add nested section routes so taxonomy changes never alter resource identity or summary API paths.
5. Keep all summary files, frontmatter, series membership, curated collection membership, and source-evidence relationships in place.
6. Reuse one list, filter, card, and modal implementation across all routes.
7. Validate section assignments in the existing public-content guard and its fixture tests.
8. Keep primary placement revisable for rolling resources without requiring redirects or content moves.

## Independent Review Evidence

- [Medium analysis](https://ampcode.com/threads/T-019fe7c8-80f8-70b9-a2c8-6a3be0ca1c8e) recommended four reader-intent collections.
- [High analysis](https://ampcode.com/threads/T-019fe7c8-8a2a-712c-9c2a-604117ddbbf2) independently recommended a similar four-way intent model.
- [Ultra analysis](https://ampcode.com/threads/T-019fe7c8-90e5-72aa-8bf9-300e50d0e535) recommended the strongest alternative: series, guided playlists, and standalone talks/interviews.
- An Oracle consultation stress-tested the disagreement and favored reader intent, provided the all-resources route and global search remain available.

The independent analyses initially disagreed on summary coverage because some counted only the nested directory. A repository-wide check established the corrected baseline: 78 summaries and coverage for all 31 resource IDs.

## Deferred Questions

- Whether section analytics later justify secondary memberships or cross-listed cards.
- Whether direct URLs into individual modal summaries should be added as a separate discoverability improvement.
- Whether topic filtering should become multi-select.
- Whether a future section grows large enough to warrant another split.
