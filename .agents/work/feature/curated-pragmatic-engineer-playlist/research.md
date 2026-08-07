# The Pragmatic Engineer Curated Playlist Research

## Remote Inventory

- Playlist: `PLzwJJv8h-iciW53inSOkQA4mkG8TuQAUh`
- Requested collection title: `The Pragmatic Engineer — selected conversations`
- Snapshot date: 2026-08-07
- Current membership: 71 available videos
- Current generated positions: 0 through 70
- Catalog state: not configured
- Manifest state: not created; catalog configuration requires explicit language
  and attribution approval first

The complete remote membership was fetched read-only through the existing
YouTube Data API client. Once configuration is approved, the generated manifest
must retain all 71 items and their remote order as sync and drift authority,
even though only the approved selection enters editorial scope.

## Existing Public Resources and Reusable Evidence

The public resource manifest has three resources sourced from The Pragmatic
Engineer:

| Resource | Video ID | Playlist member | Reuse / fold recommendation |
| --- | --- | --- | --- |
| 11 — Building Pi, and what makes self-modifying software so fascinating | `n5f51gtuGHE` | Yes, current position 11 | Include and fold into the collection. Its standalone transcript, public summary, canonical video resource, and video ID form a validated reusable evidence chain. |
| 30 — Formal methods with Hillel Wayne | `KSkcgIYQy0U` | Yes, current position 0 | Include and fold into the collection. Its standalone transcript, public summary, canonical video resource, and video ID form a validated reusable evidence chain. |
| 14 — Simon Willison: Engineering practices that make coding agents work | `owmJyKVu5f8` | No | Keep standalone. It is a different video from playlist member `uRuLgar5XZw`, so it cannot satisfy or become a curated playlist item. |

Strict standalone-evidence validation found no errors and no additional exact
playlist overlap. None of the 71 playlist IDs currently has source-library
evidence under `src/content/youtube/videos/`.

## Selection Criteria

Include conversations that give experienced developers a durable route through
coding-agent engineering: nondeterministic-system fundamentals, context and
harness design, concrete agent workflows, a useful architectural counterpoint,
organizational measurement, and verification limits. Prefer distinct claims
and transcript-backed depth over product popularity, click-oriented titles, or
several interviews making the same throughput prediction.

Defer broad software-industry history, product and founder profiles, programming
language discussions, general engineering management, model-release commentary,
and tool-specific demonstrations unless they fill a missing part of the route.
Playlist membership alone is not evidence for public inclusion.

## Proposed Human-Approval List

This is an editorial order, not remote order or chronology. It is a read-only
recommendation until the playlist configuration is approved; any later catalog
candidate list must begin with `curation.status: draft`.

| Order | Video ID | Current position | Conversation | Existing evidence | Inclusion rationale |
| --- | --- | ---: | --- | --- | --- |
| 1 | `CQmI4XKTa0U` | 27 | How AI will change software engineering — with Martin Fowler | None | Establishes the engineering baseline: nondeterministic generation still needs tests, refactoring, architecture, and deterministic techniques. |
| 2 | `Usufn8IQJgw` | 1 | Context engineering with Dex Horthy | None | Connects context, harness, loop, and software-factory design without reducing the problem to prompt tips. |
| 3 | `julbw1JuAz0` | 17 | Building Claude Code with Boris Cherny | None | Adds concrete product and practitioner detail on parallel agents, PR structure, deterministic review, and context retrieval in large codebases. |
| 4 | `n5f51gtuGHE` | 11 | Building Pi, and what makes self-modifying software so fascinating | Resource 11; validated reusable transcript and summary | Provides a contrasting minimalist, extensible harness and keeps human judgment, ownership, and automation risk visible. |
| 5 | `xHHlhoRC8W4` | 35 | Measuring the impact of AI on software engineering — with Laura Tacho | None | Moves from individual anecdotes to organizational rollout and measurement evidence across more than 180 companies. |
| 6 | `KSkcgIYQy0U` | 0 | Formal methods with Hillel Wayne | Resource 30; validated reusable transcript and summary | Closes with verification: where specifications and formal methods help, and why AI does not automatically discover the properties that matter. |

The proposal selects 6 of 71 videos. It reuses two existing transcript-backed
summaries and would require four new captures and source reviews after approval.

## Deliberately Deferred Coding-Agent Conversations

| Video ID | Conversation | Why defer from the initial route |
| --- | --- | --- |
| `WjckELpzLOU` | Mitchell Hashimoto’s new way of writing code | Strong practitioner evidence, but its personal agent workflow overlaps the Boris Cherny and Pi items. First substitute if the route should favor another independent builder over formal methods or organizational measurement. |
| `1VqKUrxR2C8` | Building OpenCode with Dax Raad | Open-source tool construction and judgment overlap the selected Claude Code and Pi conversations. |
| `aFsAOu2bgFk` | From IDEs to AI Agents with Steve Yegge | Broad adoption-level framing and orchestration overlap the selected workflow and harness sources. |
| `8lF7HmQ_RgY` | The creator of OpenClaw: “I ship code I don't read” | Useful edge case, but heavily anecdotal and overlaps the selected Pi discussion of OpenClaw and automation risk. |
| `dHIppEqwi0g` | Beyond Vibe Coding with Addy Osmani | Quality and final-mile framing overlap Martin Fowler and the retained Simon Willison standalone resource. |
| `aSXaxOdVtAQ` | TDD, AI agents and coding with Kent Beck | Strong verification conversation, but TDD overlaps Martin Fowler, Hillel Wayne, and the retained Simon Willison standalone resource. |
| `u-3IILWQPRM` | How AI is changing software engineering at Shopify | A useful company case study, but Laura Tacho provides broader cross-company measurement evidence for the initial route. |
| `G9WOC8sUts8` | Building Windsurf with Varun Mohan | Product-specific IDE and model details are less durable than the selected context, workflow, and review sources. |
| `uRuLgar5XZw` | AI tools for software engineers, but without the hype — with Simon Willison | Relevant but older and substantially overlaps the newer standalone Simon Willison summary already published under a different video ID. |
| `OfMAtaocvJw` | The third golden age of software engineering — with Grady Booch | Historical framing is valuable but less actionable than the six selected conversations. |

All other playlist members remain full-manifest drift data. Their titles center
on broader engineering history, architecture, programming languages, product
development, infrastructure, careers, startup operations, or general AI rather
than a distinct gap in this Coding with Agents route.

## Proposed Public Consolidation

- Publish one playlist card with an ordered `Selected videos` modal only after
  curation, source evidence, and overview review have each passed separately.
- Reassign the existing resource 11 and resource 30 public summaries to the new
  collection without changing their stable transcript or summary slugs.
- Remove standalone cards 11 and 30 only after the collection is publishable.
- Keep resource 14 standalone because `owmJyKVu5f8` is not a member of this
  playlist and cannot be represented as a selected playlist item.
- Capture only the four approved selected IDs that lack validated reuse.

## Required Gates

1. Explicit catalog configuration approval: transcript language, summary
   language, and exactly one attribution mode.
2. Draft catalog curation plus complete manifest synchronization and inventory
   validation.
3. Explicit human approval of exact selected IDs/order and standalone folds.
4. Individual source-evidence review for every selected item.
5. Separate playlist-overview review.
6. Public collection promotion only after all preceding gates pass.
