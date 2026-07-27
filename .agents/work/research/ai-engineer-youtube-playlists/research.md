# Research: AI Engineer YouTube playlist tracking

**Date:** 2026-07-27
**Status:** complete
**Question:** Which AI Engineer YouTube playlists should this repository track
first so their transcripts and summaries can support focused, source-backed
posts similar to the Antirez synthesis?

## Recommendation

Start with two bounded 2025 event tracks:

1. [`SWE Agents: AI Engineer World's Fair 2025`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0UwfWS-f6KDInzHc3um4naZ)
   (channel card: 19 videos; 18 visible in the inspected playlist page).
2. [`Agent Reliability: AI Engineer World's Fair 2025`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0VLQeSLhVinP0lVhNcXa-Ai)
   (channel card: 9 videos; 8 visible in the inspected playlist page).

Together they form a bounded pilot of roughly 24 unique visible videos because
two video IDs overlap. They are directly relevant to coding agents, small
enough to review carefully, and unlikely to accumulate the maintenance tail of
an active cross-event collection.

Make [`Coding Agents @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0XFXogv-as7Zu9SrGdiQLgt)
the next playlist after the pilot. It is the best long-term fit for
with-agents.dev, but its 38-video channel card (37 visible during inspection),
cross-event scope, and continuing 2026 additions make it a poor first test of a
new multi-speaker editorial workflow.

### Decision update — 2026-07-27

The initial tracking set will contain all three shortlisted playlists:

1. `SWE Agents: AI Engineer World's Fair 2025`.
2. `Agent Reliability: AI Engineer World's Fair 2025`.
3. `Coding Agents @ AI Engineer`.

The user also explicitly approved author-optional multi-speaker playlists and
confirmed `transcriptLanguage: en` and `summaryLanguage: en` for all three on
2026-07-27.

This changes onboarding scope, not the evidence behind the ranking. Add and
sync all three together after the author-optional prerequisite and explicit
language confirmation. Keep capture and editorial work staged in the order
above. Complete and review the two bounded playlist overviews before drafting
the larger, actively maintained `Coding Agents` overview.

A fresh live-page precheck found 18 visible `SWE Agents` IDs, 8 visible `Agent
Reliability` IDs, and 37 visible `Coding Agents` IDs. `SWE Agents` and `Agent
Reliability` share `Dj0b_cEBHBI` and `n991Yxo1aOI`; `Coding Agents` shares no
visible ID with either bounded track. The 63 visible occurrences therefore
represent 61 unique IDs, with no ID present in all three. Synced manifests must
still recompute and supersede these values before capture because playlist
pages omit one card-counted item from each collection and membership is mutable.

Do not onboard any of these playlists as belonging to an `AI Engineer` author.
The channel is the event producer and curator; the talks have different
speakers. The smallest safe prerequisite is to allow a playlist to have no
author relationship so its playlist overview, with explicit per-speaker
attribution, is the highest-level synthesis.

**Confidence:** high on the three-playlist tracking scope and the attribution
constraint; medium on long-term playlist stability because the channel was
still publishing and reorganizing 2026 talks during inspection.

## Research Method

- Read all three continuation pages of the live AI Engineer channel's public
  Playlists tab on 2026-07-27. The inventory contained 80 playlist cards.
- Extracted playlist IDs, titles, and card counts from the channel page.
- Inspected visible video IDs and exact titles for the most relevant coding,
  reliability, evaluation, security, context, skills, and infrastructure
  candidates. Playlist pages sometimes exposed one fewer visible video than
  their channel card; this research records both values rather than inferring
  why they differ.
- Checked the official World's Fair 2026 program. It describes 566 sessions and
  dedicated tracks including Security, Software Factories, Autoresearch,
  Sandbox & Platform Engineering, Evals, Computer Use, Context Engineering,
  Posttraining, Harness Engineering, and Agentic Engineering. This confirms
  that many new YouTube playlists are partial release views of a much larger
  conference corpus rather than settled editorial collections.
- Compared the candidates with the local Antirez catalog, playlist overview,
  author synthesis, and public post. The current library requires every
  playlist to have an author relationship even though playlist status is
  computed independently from author status.
- Used an expert review to stress-test the ranking and the multi-speaker data
  model. The review favored a bounded pilot and an author-optional playlist
  relationship over treating the uploader as the author.

## Ranked Shortlist

### 1. SWE Agents: AI Engineer World's Fair 2025

- **Why first:** bounded event track, direct coding-agent focus, manageable
  backfill, and broad enough to compare productivity claims, tool design,
  quality, supervision, and developer skill.
- **Current size:** 19 videos on the channel card; 18 visible during playlist
  inspection.
- **Editorial opportunity:** compare what teams and tool builders thought
  worked in 2025 without pretending the speakers share one doctrine.
- **Caution:** several talks are vendor presentations. Claims must name the
  speaker and affiliation and remain tied to transcripts.

Visible videos during inspection:

| Video ID | Title |
| --- | --- |
| `tbDDYKRFjhk` | Does AI Actually Boost Developer Productivity? (100k Devs Study) — Yegor Denisov-Blanch, Stanford |
| `Lue8K2jqfKk` | Claude Code & the evolution of agentic coding — Boris Cherny, Anthropic |
| `Dc3qOA9WOnE` | Vibes won't cut it — Chris Kelly, Augment Code |
| `F_RyElT_gJk` | The emerging skillset of wielding coding agents — Beyang Liu, Sourcegraph / Amp |
| `o_hhkJtlbSs` | Software Development Agents: What Works and What Doesn't — Robert Brennan, OpenHands |
| `MI83buT_23o` | Devin 2.0 and the Future of SWE — Scott Wu, Cognition |
| `eOxOzcw70f0` | Real World Development with GitHub Copilot and VS Code — Harald Kirschner, Christopher Harrison |
| `x_1EumTaXeE` | Beyond the Prototype: Using AI to Write High-Quality Code — Josh Albrecht, Imbue |
| `Dj0b_cEBHBI` | Useful General Intelligence — Danielle Perszyk, Amazon AGI |
| `JVuNPL5QO8Q` | Windsurf everywhere, doing everything, all at once — Kevin Hou, Windsurf |
| `X4BwOu0GWb8` | Your Coding Agent Just Got Cloned And Your Brain Isn't Ready — Rustin Banks, Google Jules |
| `iheWKg2Tkrk` | Ship Production Software in Minutes, Not Months — Eno Reyes, Factory |
| `n991Yxo1aOI` | Vibe Coding with Confidence — Itamar Friedman, Qodo |
| `TswQeKftnaw` | AI powered entomology: Lessons from millions of AI code reviews — Tomas Reimers, Graphite |
| `Fzb1a24hF-o` | Ship Agents that Ship: A Hands-On Workshop — Kyle Penfound, Jeremy Adams, Dagger |
| `6NIr_cYPglk` | To the moon! Navigating deep context in legacy code with Augment Agent — Forrest Brazeal, Matt Ball |
| `Zniw5c9_jx8` | Mentoring the Machine — Eric Hou, Augment Code |
| `tHJSZ1-ZqcA` | The Agent Awakens: Collaborative Development with Copilot — Christopher Harrison, GitHub |

### 2. Agent Reliability: AI Engineer World's Fair 2025

- **Why first:** small and unusually coherent. It complements the local site's
  existing emphasis on proof, behavior, workflows, and durable execution.
- **Current size:** 9 videos on the channel card; 8 visible during playlist
  inspection.
- **Editorial opportunity:** a compact reliability stack spanning application
  patterns, workflows, planning, verification, scale, and confidence in
  generated code.
- **Overlap:** `Dj0b_cEBHBI` and `n991Yxo1aOI` also occur in the SWE Agents
  playlist, so global video-ID storage should avoid duplicate transcript work.

Visible videos during inspection:

| Video ID | Title |
| --- | --- |
| `8kMaTybvDUw` | 12-Factor Agents: Patterns of reliable LLM applications — Dex Horthy, HumanLayer |
| `kTnfJszFxCg` | 3 ingredients for building reliable enterprise agents — Harrison Chase, LangChain/LangGraph |
| `8SUJEqQNClw` | Agents vs Workflows: Why Not Both? — Sam Bhagwat, Mastra.ai |
| `1izYWsokr9s` | Scaling AI Agents Without Breaking Reliability — Preeti Somal, Temporal |
| `n991Yxo1aOI` | Vibe Coding with Confidence — Itamar Friedman, Qodo |
| `Dj0b_cEBHBI` | Useful General Intelligence — Danielle Perszyk, Amazon AGI |
| `sl3icG-IjHo` | How to Build Planning Agents without losing control — Yogendra Miraje, Factset |
| `WJjInLeaJjo` | Building Agents at Cloud Scale — Antje Barth, AWS |

### 3. Coding Agents @ AI Engineer

- **Why third in the capture sequence:** strongest direct fit and the only
  mature cross-event collection whose name exactly matches the site's core
  topic, but the multi-speaker editorial format should be proven on the bounded
  tracks first.
- **Current size:** 38 videos on the channel card; 37 visible during playlist
  inspection.
- **Current themes:** coding benchmarks, context limits, skills, developer role
  changes, architecture and review, orchestration, software factories, IDEs,
  productivity, and security.
- **Maintenance cost:** the page already included recent 2026 talks, so every
  addition can make its overview stale. Onboarding accepts this tail; staged
  editorial work limits the cost of changing the attribution format.
- **Observed overlap:** six visible IDs overlapped the `Agent & Harness
  Engineering` collection and two overlapped `Claws & Personal Agents`. This
  does not establish overlap with the other two selected playlists.

Representative visible titles:

- `Yk87oUPVaxU` — DeepSWE: A Contamination-Resistant Coding Benchmark — James
  Shi, Datacurve.
- `il1c1a2FufU` — Full Workshop: Setting Yourself Up for Success — Jason Liu,
  OpenAI Codex.
- `EcqMYoIV57A` — Why More Context Makes Your Agent Dumber and What to Do About
  It — Nupur Sharma, Qodo.
- `li0SaBt9RDM` — The AI Skill I Rely On Daily — Priscila Andre de Oliveira,
  Sentry.
- `7gujZrJ9L5I` — How Google DeepMind Runs Agents at Scale — KP Sawhney & Ian
  Ballantyne, Google DeepMind.
- `W76woOYHlvY` — Software Engineering Is Becoming Plan and Review — Louis
  Knight-Webb, Vibe Kanban.
- `rnDm57Py54A` — Building your own software factory — Eric Zakariasson,
  Cursor.
- `ClWD8OEYgp8` — Collaborative AI Engineering: One Dev, Two Dozen Agents, Zero
  Alignment — Maggie Appleton, GitHub.
- `-QFHIoCo-Ko` — Full Walkthrough: Workflow for AI Coding — Matt Pocock.
- `prttz9_1XDc` — Enhancing Quality and Security in CI — Gunjan Patel.

## Secondary Candidates

### Evals and reliability

- [`Evals & Benchmarks @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0XZS6wXjyB_8zuZBXHFTwYM)
  — 34 videos. Strong source for verification, observability, judges,
  long-horizon tasks, skills evaluation, and benchmark design, but broader than
  coding and a substantial backfill.
- [`Arize Evals Track @ AI Engineer`](https://www.youtube.com/playlist?list=PLJ7eF79yCUHc)
  — 10 videos. Its talks include agent-as-judge, self-improving agents,
  rollouts, skill evals, closed-loop evals, Vending-Bench, and agent
  simulations. It is coherent but sponsor-branded and appears to overlap the
  larger eval corpus.

### Security

- [`Security @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0XI3Ggbvnfpop8qsfilbvlo)
  — 16 videos. Topics include OAuth, machine identity, agent sandboxing,
  code-executing agents, red teaming, fuzzing, and prompt security.
- [`Snyk Security Track @ AI Engineer`](https://www.youtube.com/playlist?list=PLM1x6AvuYX54)
  — 10 videos. Topics include permissions, provenance, agent supply chains,
  malicious skills, source-code security, production-code access, and privacy.
  This is an attractive future post-sized set but should not take precedence
  over the non-sponsor main security collection without checking overlap.

### Context, skills, and harnesses

- [`Agent & Harness Engineering @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0WzqWDdWkN2DnZOhtYI9jyI)
  — 41 videos. It covers lifecycles, harnesses, verification, interfaces,
  observability, context, computers, and multiple agent domains. Only six
  visible IDs overlapped `Coding Agents`, so this is not merely an alias, but
  it is too broad for the first corpus.
- [`MCP @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0UqhUyxuMMMmDwyiApd4sDw)
  — 27 videos. Strong tooling and integration material but protocol-specific.
- [`Skills @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0VMXKaxLPxeQBR3AuQfw8cA)
  — 4 videos: a daily Sentry skill, teaching coding agents Langfuse, combining
  skills with MCP, and a long skills walkthrough.
- [`Context Engineering @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0X1DNKK3SyZ2Qbl3QxBfHr3)
  — 3 videos: Claude for long-horizon tasks, production-agent context
  infrastructure, and reducing agent babysitting.
- [`Platform Engineering (Sandboxing, Orchestration etc) @ AI Engineer`](https://www.youtube.com/playlist?list=PLEHFHSBaOThI)
  — 1 video on designing an agent sandbox cloud.
- [`Memory @ AI Engineer`](https://www.youtube.com/playlist?list=PLcfpQ4tk2k0WIqlPMUvwIKInSHzJf3g2L)
  — 1 video on context management in agents.

The last four are highly relevant but too sparse and newly assembled to justify
separate onboarding now. Recheck after the 2026 release cycle settles.

## Defer or Avoid as Initial Tracking Units

- **Broad event dumps:** `AIE World's Fair 2026 Complete Playlist` (48) and
  `AI Engineer World's Fair Online Track 2026` (98) are mixed source pools, not
  coherent editorial units. Older complete-event and online-track playlists
  have the same problem.
- **Sponsor/company collections:** Arize, Braintrust, Microsoft, Anthropic,
  OpenAI, Google DeepMind, WorkOS, Neo4j, and Snyk collections are useful for
  discovery but mix product provenance with topic selection. Prefer a topical
  playlist unless the intended post explicitly examines one company's public
  position.
- **Tiny Teams 2025:** seven visible talks about lean startups, small teams,
  rapid revenue, open models at scale, and benchmark incentives. It is coherent
  but less directly about coding-agent mechanics than the recommended tracks.
- **Single-video topic lists:** they add catalog and overview overhead without
  yet offering a synthesis corpus.

## Provisional Post Angles

These are hypotheses from playlist structure and video titles. They must be
revised from captured transcripts before publication.

1. **From coding speed to supervised software work.** Use the SWE Agents track
   to compare productivity evidence, developer skill, deep context, code
   quality, review, and claims from agent vendors.
2. **A reliability stack for coding agents.** Combine the Agent Reliability
   overview with coding-specific talks to distinguish workflows, planning,
   verification, evaluation, durable execution, and operational scale.
3. **From code generation to harness engineering, 2024–2026.** After the two
   bounded overviews are reviewed, examine the apparent shift toward context,
   skills, orchestration, software factories, architecture, and review. Treat
   manifest `publishedAt` as upload time, not necessarily talk time; chronology
   needs corroboration from the event year, title, or transcript and can never
   rely on playlist order.
4. **Context is an operational system, not a larger prompt.** Revisit when the
   Context Engineering, Skills, Memory, and Platform Engineering lists are
   fuller. Their current titles suggest a useful combined thesis but do not yet
   provide enough source breadth.

## Author and Attribution Model

The current catalog validator requires every playlist ID to appear in an
author relationship. Status tooling then aggregates every related playlist
into an author synthesis. That is correct for Salvatore Sanfilippo's two
single-speaker playlists but unsafe here:

- AI Engineer is the uploader, event producer, and playlist curator.
- The actual claims belong to many named speakers, often with employer or
  vendor affiliations.
- Treating AI Engineer as an author would invite statements such as “AI
  Engineer argues...” that the corpus does not support.
- Creating one catalog author per speaker would produce mostly single-video
  author records and substantial overhead without useful cross-playlist
  synthesis.

Smallest safe approach before onboarding:

1. Add `multiSpeaker: true` to intentionally author-less playlists. Validation
   must require every playlist to have either an author relationship or this
   marker, but never both, preserving accidental-orphan protection for Antirez.
2. Keep the existing runtime model: playlist status is independent, while
   author status and synthesis include only playlists reached through genuine
   author relationships.
3. Make each multi-speaker playlist overview the top-level synthesis.
4. Keep attribution in editorial prose rather than adding inert frontmatter:
   every summary's framing paragraph names the speaker and relevant affiliation,
   and every overview claim repeats that attribution with its source anchor.
5. Require each multi-speaker overview's Coverage section to identify AI
   Engineer as the curator/source channel and state that speakers and
   affiliations vary per video; never present the channel as the author.

The prerequisite implementation must update the validator and tests, the
YouTube library contract, and the `maintaining-youtube-library` skill. The skill
must accept either an author relationship or an explicit multi-speaker decision,
support several playlists in one onboarding work item, retain a per-playlist
thin slice, make public-impact searches safe for dash-leading IDs, and inspect a
multi-speaker summary's attribution when a title changes. No catalog or
source-library mutation should occur before that prerequisite passes.

### Pinned catalog entries

| Slug | Playlist ID | Exact catalog title |
| --- | --- | --- |
| `ai-engineer-swe-agents-2025` | `PLcfpQ4tk2k0UwfWS-f6KDInzHc3um4naZ` | SWE Agents: AI Engineer World's Fair 2025 |
| `ai-engineer-agent-reliability-2025` | `PLcfpQ4tk2k0VLQeSLhVinP0lVhNcXa-Ai` | Agent Reliability: AI Engineer World's Fair 2025 |
| `ai-engineer-coding-agents` | `PLcfpQ4tk2k0XFXogv-as7Zu9SrGdiQLgt` | Coding Agents @ AI Engineer |

Every entry uses `transcriptLanguage: en`, `summaryLanguage: en`, and
`multiSpeaker: true` and appears in no author relationship.

## Adversarial Review Outcome

An Ultra stress/grill review returned **ready with changes**. Oracle then
adjudicated the findings against the implementation and live YouTube pages.

Accepted corrections:

- The maintenance skill is part of the prerequisite, not merely operational
  documentation after implementation.
- Intentional authorlessness needs the explicit `multiSpeaker: true` marker so
  authored playlists retain orphan protection.
- Tests must cover marker validation, author-less status/check behavior, the
  committed catalog expansion, and the dash-leading `-QFHIoCo-Ko` video ID.
- Attribution and curator provenance need pinned prose locations, and title
  changes must trigger review of multi-speaker summary attribution.
- Capture requires a deterministic thin-slice, batch, throttle, and exit-code
  protocol rather than an unspecified positive limit.
- Upload timestamps alone cannot support the longitudinal post angle.

Rejected correction:

- The review claimed the first 14 inventory playlist IDs were truncated. Live
  checks on 2026-07-27 reconfirmed representative short IDs—including
  `PLKLSkgrxaJAU`, `PLJ7eF79yCUHc`, `PLM1x6AvuYX54`, and `PLEHFHSBaOThI`—at
  their expected official YouTube pages. YouTube emits these short IDs in its
  own links; they must not be length-normalized or replaced.

## Implementation Acceptance Criteria

- Catalog validation accepts `multiSpeaker: true` playlists without author
  relationships, rejects unmarked orphans, rejects a multi-speaker playlist in
  an author relationship, and preserves all existing relationship and uniqueness
  checks. The current Antirez catalog remains valid without changes.
- Focused tests prove the marker rules and author-less playlist behavior through
  status/check reporting without inventing runtime changes outside validation.
  An existing capture/path fixture gains the dash-leading `-QFHIoCo-Ko` ID.
- The YouTube library contract documents author-optional multi-speaker
  playlists, summary-framing and overview attribution, and curator provenance
  in each overview's Coverage section.
- The maintenance skill accepts an author relationship or explicit multi-speaker
  decision during onboarding, supports selected multi-playlist sync before
  capture, retains one thin slice per playlist, uses `rg -l -e '<video-id>'` for
  dash-leading IDs, and reviews summary attribution after relevant retitles.
- The catalog gains exactly the three pinned entries above and no `AI Engineer`
  author or relationship. The committed-catalog test changes in the same step.
- All three manifests are synced before capture. The visible-count gaps and the
  pairwise and total overlap are recorded from manifest data rather than
  inferred from channel pages.
- Capture is playlist-scoped and staged `SWE Agents` → `Agent Reliability` →
  `Coding Agents`. Each playlist starts with `--limit 1`, transcript review, one
  draft summary, and an overview thin slice; later captures use `--limit 2`, no
  refill in the same session, and immediate stop on throttling. Exit `1` is
  fatal; exit `2` from transient/throttle outcomes pauses the session; exit `2`
  from recorded unavailable captions is an expected state. Shared videos remain
  stored once by video ID.
- The two bounded playlist overviews receive a multi-speaker attribution review
  before work begins on the `Coding Agents` overview. Shared video IDs appear
  in every overview that incorporates their summaries.
- `Coding Agents` overview staleness caused by new uploads is treated as an
  expected maintenance state with an explicit revision cadence, not as a
  reason to overwrite editorial work automatically.

## Risks and Follow-up Checks

- **Visible count gaps:** `Coding Agents` showed 38 on its channel card but 37
  visible videos; `SWE Agents` showed 19/18; `Agent Reliability` showed 9/8.
  A future sync should determine whether the missing entries are private,
  deleted, unavailable, or region-dependent rather than assuming a reason.
- **Mutable membership:** event playlists can still be edited. Sync manifests
  before making overlap or coverage claims, and use video publication dates,
  never playlist position, for changes-over-time analysis.
- **Active staleness tail:** `Coding Agents` is now initial scope even though it
  is actively updated. New summaries will make its overview stale under the
  current `coveredVideoIds` contract, so maintenance needs an explicit overview
  revision cadence.
- **Pre-sync overlap only:** the live-page precheck found 61 unique visible IDs
  across 63 occurrences, with only two IDs shared by the bounded tracks and no
  visible `Coding Agents` overlap. Do not use these as final coverage numbers;
  synced manifests must establish authoritative membership.
- **Caption availability:** do not assume every conference talk has usable
  English captions. Capture must use the explicitly configured language and
  record unavailable caption tracks faithfully.
- **Names in captions:** auto-generated conference captions often damage
  speaker, company, model, and product names. Apply the source-faithful
  editorial transcript pass required by the repository contract.
- **Vendor bias:** speaker affiliation is material evidence context. A post that
  merges claims without attribution would become aggregated marketing rather
  than a source-backed synthesis.
- **Language availability:** English source and summary configuration is
  confirmed. Individual videos can still lack a matching English caption track;
  record requested and available languages rather than substituting another
  track.

## Complete Channel Playlist Inventory

This is the live channel-card inventory captured on 2026-07-27. Counts are
YouTube's displayed playlist-card counts, not independently verified available
video totals. Playlist membership and counts can change. YouTube currently uses
both short and long playlist IDs in this inventory; representative short IDs
were revalidated against their official playlist pages on 2026-07-27.

| # | Videos | Playlist ID | Playlist title |
| ---: | ---: | --- | --- |
| 1 | 12 | `PLKLSkgrxaJAU` | Neo4j Graphs Track @ AI Engineer |
| 2 | 10 | `PLJ7eF79yCUHc` | Arize Evals Track @ AI Engineer |
| 3 | 10 | `PLM1x6AvuYX54` | Snyk Security Track @ AI Engineer |
| 4 | 1 | `PLC9MynXdAvBk` | Startups @ AI Engineer |
| 5 | 2 | `PLEz0frWjePik` | Computer Use (CUA) @ AI Engineer |
| 6 | 1 | `PLI-xoFgNbc_E` | FDE (Forward Deployed Engineering) @ AI Engineer |
| 7 | 3 | `PLbJzt_272Brg` | Post-training @ AI Engineer |
| 8 | 1 | `PLEHFHSBaOThI` | Platform Engineering (Sandboxing, Orchestration etc) @ AI Engineer |
| 9 | 2 | `PLVeaSLBeOF10` | AI in Healthcare @ AI Engineer |
| 10 | 3 | `PLJ6ItxnbwAh8` | Autoresearch @ AI Engineer |
| 11 | 2 | `PLaXbGEDlQFt0` | Data (Datasets and RL Environments) @ AI Engineer |
| 12 | 1 | `PLFWg8gP1ny0A` | GTM & Revenue @ AI Engineer |
| 13 | 2 | `PLS3limeMxDOQ` | Local AI @ AI Engineer |
| 14 | 48 | `PLDyBmFH9HlVc` | AIE World's Fair 2026 Complete Playlist |
| 15 | 98 | `PLcfpQ4tk2k0V1LNigteMgExP1rb4Hy8wn` | AI Engineer World's Fair Online Track 2026 |
| 16 | 5 | `PLcfpQ4tk2k0Wax7AbqhkILMU9_5hPSb9A` | Building AIE |
| 17 | 1 | `PLcfpQ4tk2k0WItab6cUp7VmPsKRm2uhQq` | Agentic Commerce @ AI Engineer |
| 18 | 3 | `PLcfpQ4tk2k0X1DNKK3SyZ2Qbl3QxBfHr3` | Context Engineering @ AI Engineer |
| 19 | 5 | `PLcfpQ4tk2k0XZlZ5XBfwhzsukVmS-VcSo` | Microsoft @ AI Engineer |
| 20 | 1 | `PLcfpQ4tk2k0WyyL_ahUSIRTlWhynPosKp` | AI in Government @ AI Engineer |
| 21 | 1 | `PLcfpQ4tk2k0UNyOUfDkd3oI_4OoH6Fmf9` | Sovereign AI @ AI Engineer |
| 22 | 4 | `PLcfpQ4tk2k0VMXKaxLPxeQBR3AuQfw8cA` | Skills @ AI Engineer |
| 23 | 1 | `PLcfpQ4tk2k0VgUDVUMNdFxXT04zOUHupL` | WorkOS @ AI Engineer |
| 24 | 2 | `PLcfpQ4tk2k0Wp3x8nk48FTMhxa1s8AcbM` | Vision @ AI Engineer |
| 25 | 1 | `PLcfpQ4tk2k0WIqlPMUvwIKInSHzJf3g2L` | Memory @ AI Engineer |
| 26 | 1 | `PLcfpQ4tk2k0Vu-xCX9IWq8dFYpzWz9HaG` | Fundamentals @ AI Engineer |
| 27 | 4 | `PLcfpQ4tk2k0Wq1INI4nDCRYR0mKE8H7s9` | Leadership Sessions @ AI Engineer |
| 28 | 10 | `PLcfpQ4tk2k0XriC9RjhDrqO2q-G0xsYzs` | Arize @ AI Engineer |
| 29 | 1 | `PLcfpQ4tk2k0XivwLkMFQiY_jcG7DAXgkg` | AIE for Founders |
| 30 | 10 | `PLcfpQ4tk2k0UrpDB-61g_7Pcy2xYw8lLK` | Braintrust @ AI Engineer |
| 31 | 11 | `PLcfpQ4tk2k0XkJKw4Idupyhb66vjx4Eu9` | Claws & Personal Agents @ AI Engineer |
| 32 | 1 | `PLcfpQ4tk2k0XeFWzvPb51wqO6dHPUPOCH` | AI in Law / Legal @ AI Engineer |
| 33 | 18 | `PLcfpQ4tk2k0V3a6nNCVfYxVRfcJ-BNQo7` | AIE Europe 2026 Keynotes |
| 34 | 28 | `PLcfpQ4tk2k0VntjlYzeRZR3ay9wAMbAbb` | AIE Europe 2026: Workshops |
| 35 | 243 | `PLcfpQ4tk2k0W4IhTx8dgBjTEYRmbEHcpP` | AIE Europe 2026 Complete Playlist |
| 36 | 18 | `PLcfpQ4tk2k0VZNoUvSBmLBCbM1lMmpug2` | AIE Europe 2026: Online Track |
| 37 | 14 | `PLcfpQ4tk2k0W564IUrISLhTVZ5lOVCuwm` | Anthropic @ AI Engineer |
| 38 | 32 | `PLcfpQ4tk2k0Xq5OF1xbCsMrABt5LnbKuo` | AIE CODE 2025: Coding Model and Agent Labs |
| 39 | 18 | `PLcfpQ4tk2k0WWjA7f5DuTgLOUyy93xsNH` | AIE CODE 2025: AI Leadership |
| 40 | 17 | `PLcfpQ4tk2k0WQMXP87G_uVYQdSFVAiVUZ` | AIE CODE 2025 Online Track |
| 41 | 15 | `PLcfpQ4tk2k0V9bxtzGspxhx3CfxZASk0u` | Google DeepMind @ AI Engineer |
| 42 | 18 | `PLcfpQ4tk2k0VxzFm4TrRp56PIwnboyyrs` | OpenAI @ AI Engineer |
| 43 | 16 | `PLcfpQ4tk2k0VjKRy3q6ZxeOtkbZlmFDLg` | Generative Media @ AI Engineer |
| 44 | 7 | `PLcfpQ4tk2k0UMEJY1KzWu02OkvCc1e5og` | LLM Recommendation Systems: AI Engineer World's Fair 2025 |
| 45 | 10 | `PLcfpQ4tk2k0V16VYYwnwF2g-EsKRIkJaC` | RL + Reasoning: AI Engineer World's Fair 2025 |
| 46 | 8 | `PLcfpQ4tk2k0U5-s5QVLju2-mQ5reSKi9W` | Robotics & Autonomy @ AI Engineer |
| 47 | 34 | `PLcfpQ4tk2k0XZS6wXjyB_8zuZBXHFTwYM` | Evals & Benchmarks @ AI Engineer |
| 48 | 25 | `PLcfpQ4tk2k0VdE7NSMKkNqc2qUH_lhm8K` | Voice @ AI Engineer |
| 49 | 9 | `PLcfpQ4tk2k0VLQeSLhVinP0lVhNcXa-Ai` | Agent Reliability: AI Engineer World's Fair 2025 |
| 50 | 25 | `PLcfpQ4tk2k0U35MFGllN31nmEP9EdCge8` | Graphs @ AI Engineer (Context Graphs, Knowledge Graphs, GraphRAG, GNNs) |
| 51 | 9 | `PLcfpQ4tk2k0UjN2zs7og6xQqWmyE1nuR_` | Product Management: AI Engineer World's Fair |
| 52 | 7 | `PLcfpQ4tk2k0WwP1hhmg17j72X-s54AaBu` | Tiny Teams: AI Engineer World's Fair 2025 |
| 53 | 14 | `PLcfpQ4tk2k0W3T87n_MZGaV9WfWOmEWtQ` | Search & Retrieval @ AI Engineer |
| 54 | 19 | `PLcfpQ4tk2k0XfT3YLdjLXKHAaBJ9MX6re` | Full Workshops: AI Engineer World's Fair 2025 |
| 55 | 23 | `PLcfpQ4tk2k0VeXEfQTcsO7buehrFvQAKj` | AI Architects @ AI Engineer |
| 56 | 16 | `PLcfpQ4tk2k0XI3Ggbvnfpop8qsfilbvlo` | Security @ AI Engineer |
| 57 | 10 | `PLcfpQ4tk2k0VSUinKVkozYixYWE5eMdDv` | Design Engineering: AI Engineer World's Fair 2025 |
| 58 | 19 | `PLcfpQ4tk2k0UwfWS-f6KDInzHc3um4naZ` | SWE Agents: AI Engineer World's Fair 2025 |
| 59 | 13 | `PLcfpQ4tk2k0WntXiXlXc5lpkDqvOzt5hi` | Infra: AI Engineer World's Fair 2025 |
| 60 | 27 | `PLcfpQ4tk2k0UqhUyxuMMMmDwyiApd4sDw` | MCP @ AI Engineer |
| 61 | 70 | `PLcfpQ4tk2k0Vu8ZKg_5TzN87mRhRJt71Y` | AIE World's Fair 2025 Online |
| 62 | 41 | `PLcfpQ4tk2k0WzqWDdWkN2DnZOhtYI9jyI` | Agent & Harness Engineering @ AI Engineer |
| 63 | 18 | `PLcfpQ4tk2k0VGHcZxjSoAe_r5VbdHXmjy` | Complete AI Engineer Summit NY 2025 Playlist |
| 64 | 7 | `PLcfpQ4tk2k0XRs4DnHwh3yzH0Yca4yIHH` | AI Engineer Summit NY 2025 Workshops |
| 65 | 30 | `PLcfpQ4tk2k0VetQVGT1EqTbcr-qcgbfFs` | AI Engineer Summit Online 2025 |
| 66 | 11 | `PLcfpQ4tk2k0UL1fkEq90SxR9iQ_MW4swP` | Expo Sessions: AIE World's Fair 2024 |
| 67 | 22 | `PLcfpQ4tk2k0X9inDiRhePTO98dr466EHo` | AI in the Fortune 500: AI Engineer World's Fair |
| 68 | 8 | `PLcfpQ4tk2k0WO4zlwpGVeQOqV1Z_QbRIh` | Agents: AIE World's Fair 2024 |
| 69 | 21 | `PLcfpQ4tk2k0W2xRgkV4PUnC-oYGjZez8L` | Workshop: AIE World's Fair 2024 |
| 70 | 8 | `PLcfpQ4tk2k0W3_JZkL2SRVKTVOj7DoWtZ` | GPUs & Inference: AIE World's Fair 2024 |
| 71 | 11 | `PLcfpQ4tk2k0U7f6OGAGa64ck6RbzMxsKW` | Evals & LLM Ops: AIE World's Fair 2024 |
| 72 | 13 | `PLcfpQ4tk2k0WIh-HLjzW8SPk7cyTSone_` | AI Leadership: AIE World's Fair 2024 |
| 73 | 38 | `PLcfpQ4tk2k0XFXogv-as7Zu9SrGdiQLgt` | Coding Agents @ AI Engineer |
| 74 | 18 | `PLcfpQ4tk2k0UOtqPpjg8YHZDLsmuT548N` | Open Models @ AI Engineer |
| 75 | 7 | `PLcfpQ4tk2k0W9MogYqgUzGY7DeuspKNvr` | Multimodality: AIE World's Fair 2024 |
| 76 | 19 | `PLcfpQ4tk2k0UCW1hhTRZr_gmt_VILjiIO` | Keynote: AIE World's Fair 2024 |
| 77 | 9 | `PLcfpQ4tk2k0WRU8OLzC80g0lSw6PZeRxj` | RAG & LLM Frameworks: AIE World's Fair 2024 |
| 78 | 11 | `PLcfpQ4tk2k0UkITX5LuOtcrSYwiqfQNin` | AI Engineer Summit 2023 - Remote Talks |
| 79 | 26 | `PLcfpQ4tk2k0VfsL23518EQF5lkA2QIIsJ` | AI Engineer Summit 2023 - Talks |
| 80 | 6 | `PLcfpQ4tk2k0U3Nr2KKWJsVnjF5S9bTXY-` | AI Engineer Summit 2023 Workshops |

## Sources

- [AI Engineer YouTube playlists](https://www.youtube.com/@aiDotEngineer/playlists)
  — official live source for the 80-playlist inventory, displayed counts,
  playlist IDs, and inspected video membership/titles.
- [AI Engineer World's Fair 2026](https://www.ai.engineer/worldsfair/2026)
  — official event overview establishing the scale, audience, release status,
  and track structure behind the newest playlists.
- [World's Fair 2026 schedule](https://www.ai.engineer/worldsfair/schedule)
  — official 566-session schedule and named technical tracks.
- [World's Fair 2026 LLM-readable overview](https://www.ai.engineer/worldsfair/llms.md)
  — official program summary and open-data links.
- [`src/content/youtube/AGENTS.md`](../../../../src/content/youtube/AGENTS.md)
  — local source-library attribution, author-synthesis, language, and editorial
  requirements.
- [`src/content/youtube/catalog.json`](../../../../src/content/youtube/catalog.json)
  — current single-author/two-playlist Antirez catalog pattern.
- [`src/content/posts/behavior-over-explanation.md`](../../../../src/content/posts/behavior-over-explanation.md)
  — target example for turning transcript-backed playlist and author syntheses
  into a focused public post.

## Open Questions

- [x] Initial tracking set includes the two recommended 2025 tracks and `Coding
      Agents @ AI Engineer` (decided 2026-07-27).
- [x] Multi-speaker playlists may omit author relationships; their playlist
      overview is the highest-level synthesis (decided 2026-07-27).
- [x] Use English source transcripts and English summaries, represented as
      `transcriptLanguage: en` and `summaryLanguage: en` (confirmed 2026-07-27).
- [x] Precheck current live membership: 63 visible occurrences, 61 unique IDs,
      two IDs shared by the bounded tracks, and no visible `Coding Agents`
      overlap. Recompute from synced manifests before capture.
