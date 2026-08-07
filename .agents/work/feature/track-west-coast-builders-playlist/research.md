# Research: The West Coast Builders playlist onboarding

**Date:** 2026-08-07
**Status:** complete
**Question:** How should The West Coast Builders be tracked in the source-only
YouTube library, and how should its existing and future coding-agent resources
be regrouped without misattribution, duplicate public cards, or guard failures?

## Recommendation

Track the complete playlist as `mayank-gupta-west-coast-builders` with English
transcripts, English summaries, and `multiSpeaker: true`. Treat Mayank Gupta
(`@waghnakh`) as the confirmed host, curator, playlist owner, and source channel,
not as the author of guest claims; do not create an author synthesis.

For the public resource hub, add one non-episodic summary-collection model and
replace the three existing standalone Mayank resource cards with one playlist
resource. Keep existing public summary and transcript slugs unchanged, group
their summaries by a new `collection` frontmatter value, and add only the most
relevant future interviews after source review. Do not invent `Ep N` identities
from mutable playlist positions.

## Key Findings

- The official playlist title is **The West Coast Builders**. It was published
  on 2026-04-25, is public and podcast-enabled, and currently contains 11 public
  videos.
- The owner channel is **Mayank Gupta**, channel ID
  `UCPgfAA83ROUVM-E3NCY154A`, with official custom URL `@waghnakh`. All current
  videos advertise English as both default language and default audio language.
- This is a hosted interview playlist. Most substantive claims belong to named
  guests, so modeling it like Antirez's solo-author playlists would risk
  attributing guest positions to Mayank. The existing `multiSpeaker: true`
  contract is the correct fit.
- Three playlist videos already have public resource entries, transcript
  sidecars, and summaries: Mario Zechner (`PZ-sko1NWa0`, resource 15), Quinn
  Slack (`_L8xxUXOTk0`, resource 16), and Thorsten Ball (`thMFsqe8kbQ`, resource
  19).
- The current public UI can group multiple summaries only by `series` plus an
  integer `episode`, and it renders the literal label `Ep N`. The playlist does
  not publish stable episode numbers. A small collection variant is more
  accurate than reusing this episodic model.
- Adding the synced manifest makes all 11 video IDs and the playlist ID subject
  to the public-content guard. Nine pre-existing path-and-video citation pairs
  will initially reference missing or draft source-library summaries. Temporary,
  path-specific exceptions are required during bounded onboarding.
- Source-library capture is ordered by manifest membership and cannot target one
  exact video ID. Capturing through the existing Thorsten Ball video at ordinal
  6 therefore requires processing the preceding available videos as well.
- The source-only and public transcript trees have different contracts. Existing
  public sidecars should remain in place; source-library copies should be
  captured normally and compared during review. Deduplicating the two stores is
  a separate tooling migration, not part of playlist onboarding.

## Remote Playlist Snapshot

The YouTube Data API snapshot was collected on 2026-08-07. Human ordinals below
describe the current source order only; they are not durable episode numbers.

| Ordinal | Video ID | Published | Title | Public coding-agent disposition |
| --- | --- | --- | --- | --- |
| 1 | `fu7th5HiADo` | 2025-07-02 | OpenClaw Creator built App to Control Claude Code | High-confidence candidate: Peter Steinberger, VibeTunnel, prompting, and coding agents |
| 2 | `PZ-sko1NWa0` | 2026-03-28 | Pi Agent Creator on future of Agentic Coding | Already public as resource 15; regroup |
| 3 | `_L8xxUXOTk0` | 2026-04-02 | Amp Code Founder on future of Coding Agents | Already public as resource 16; regroup |
| 4 | `4ksc_PU7NqA` | 2026-04-23 | How to architect AI Agent Memory layer | Track locally; reconsider for public use after transcript review |
| 5 | `5H862RhMgOU` | 2026-05-04 | Building the future of AI Coding Agents | High-confidence candidate: Li Yin, AdaL, context, and code review |
| 6 | `thMFsqe8kbQ` | 2026-05-20 | LLMs are killing Agent Harness | Already public as resource 19; regroup |
| 7 | `EOf8TbwVvH0` | 2026-06-02 | Build Vertical AI Agents for niche problems | Track locally; broader startup/vertical-agent focus |
| 8 | `r6DKV03IULg` | 2026-06-11 | Fashion industry hates AI and I LOVE it | Track locally; do not publish by default |
| 9 | `d7jA462XLBM` | 2026-06-21 | Notion almost Died Before Becoming a $10B Company | Track locally; do not publish by default |
| 10 | `wbsDZpVB4Lg` | 2026-07-30 | Is Agent Harness relevant in 2026 | High-confidence candidate: Ben Vinegar, harnesses, codebase quality, and AI-generated code |
| 11 | `C6u5CBIXRf0` | 2026-08-06 | How to Ship 100x Faster as a Developer? | High-confidence candidate: Gil Feig, agent review, RAG, and developer workflow |

All 11 belong in local source tracking. The initial public collection should
contain the three existing summaries and may expand to ordinals 1, 5, 10, and
11 only after transcript-backed editorial review. Local membership must not be
mistaken for public-resource endorsement.

## Local Architecture Findings

### Source-only library

[`src/content/youtube/catalog.json`](../../../../src/content/youtube/catalog.json)
owns playlist configuration and requires exactly one attribution mode. The new
entry should be:

```json
{
  "id": "PLV_xLvHFOwiuvtEhsFIW55AdFFP7Rpnvg",
  "slug": "mayank-gupta-west-coast-builders",
  "title": "The West Coast Builders",
  "transcriptLanguage": "en",
  "summaryLanguage": "en",
  "multiSpeaker": true
}
```

The playlist should not be added to `authors` or `relationships`. Its overview
is the highest-level source synthesis. Coverage prose should explicitly name
Mayank Gupta (`@waghnakh`, channel `UCPgfAA83ROUVM-E3NCY154A`) as host, curator,
playlist owner, and source channel—not author. Every non-editorial claim must
name its guest speaker and source-supported affiliation.

The normal add workflow applies: manual catalog edit, selected status/check,
one authoritative selected sync, exact-ID public-impact review, one complete
`capture --limit 1` thin slice, and later bounded capture batches. New or
revised editorial files stay `draft` until a dedicated review.

### Public resource grouping

[`CodingWithAgents.tsx`](../../../../src/components/resources/CodingWithAgents.tsx)
currently resolves multiple summaries only when they share `series`, while
[`EpisodeList.tsx`](../../../../src/components/resources/EpisodeList.tsx) labels
them `Ep N`. Reusing that path with playlist positions 2, 3, and 6 would publish
unsupported episode identities and expose mutable ordering as durable metadata.

Add `collection?: string` to the summary schema and public manifest. A resource
with one coherent collection should resolve to a title-only summary list sorted
by summary `date`, with slug as a deterministic tie-breaker. Collection entries
must have dates. Reject or visibly fail mixed standalone, series, and collection
entries for one resource rather than silently selecting the first summary.

Use a new resource identity, proposed ID **31**, for the playlist. In one atomic
public edit:

1. Add the playlist resource with source `Mayank Gupta`, source publication date
   `2026-04-25`, and a description that says it is a selected coding-agent route
   through a broader hosted interview playlist.
2. Remove standalone resource entries 15, 16, and 19.
3. Reassign the three existing summaries to resource 31 and add
   `collection: "the-west-coast-builders"`.
4. Keep all three summary filenames, transcript filenames, `summarySlug`
   values, dates, bodies, and direct YouTube links unchanged.

Suggested resource topics are `tools-harnesses`,
`architecture-maintainability`, `models-evaluation`, and `business-adoption`.
Future collection entries can extend search via their own titles without
turning every playlist member into a public resource.

### Public-content guard migration

The first synced manifest will make these nine pre-existing citations fail until
their source summaries are reviewed:

| Video ID | Public path |
| --- | --- |
| `PZ-sko1NWa0` | `src/data/resources/coding-with-agents.json` |
| `_L8xxUXOTk0` | `src/data/resources/coding-with-agents.json` |
| `thMFsqe8kbQ` | `src/data/resources/coding-with-agents.json` |
| `PZ-sko1NWa0` | `src/content/summaries/coding-with-agents/pi-agent-creator-on-future-of-agentic-coding.md` |
| `_L8xxUXOTk0` | `src/content/summaries/coding-with-agents/amp-code-founder-on-future-of-coding-agents.md` |
| `thMFsqe8kbQ` | `src/content/summaries/coding-with-agents/llms-are-killing-agent-harness.md` |
| `_L8xxUXOTk0` | `src/content/posts/amp-factory-era-case-study.md` |
| `thMFsqe8kbQ` | `src/content/posts/amp-factory-era-case-study.md` |
| `thMFsqe8kbQ` | `src/content/posts/agentic-coding-2026.md` |

Add path-and-ID-specific `publicSourceExceptions` with this temporary reason:

> Pre-existing transcript-backed public citation predates source-library
> onboarding; source summary is being captured and independently reviewed
> during the bounded migration.

Remove each exception immediately after the matching source-library video
summary reaches `reviewed`. Do not exempt the new playlist resource: add that
public card only after the source playlist overview is current and reviewed.
Do not use exceptions for any newly written public video summary.

## Alternatives Considered

### Use a Mayank author relationship

Rejected. Mayank is the verified host and curator, but the playlist's core
claims belong to guests. The author-synthesis model would invite misleading
cross-video claims about Mayank's views. “Similar to Antirez” should mean the
same durable workflow, not the same attribution mode.

### Reuse `series` and playlist order as episode numbers

Rejected. The source does not expose stable episode numbers, the UI renders the
strong `Ep N` label, and playlist position can change. Lower implementation cost
does not justify unsupported public semantics.

### Keep standalone cards and add a guided playlist card

Safe only as a temporary fallback. It would preserve duplicate public entries
and would not satisfy the requested regrouping.

### Move or deduplicate public transcript sidecars

Rejected as out of scope. Public summaries and source-library summaries have
different required sibling/source paths and review tooling. Preserve both,
compare them during review, and consider a global transcript migration only as
a separate work item.

## Oracle Review

Oracle reviewed the attribution, grouping alternatives, guard behavior,
capture ordering, and transcript ownership on 2026-08-07. It endorsed
`multiSpeaker: true`, ranked explicit non-episodic collection support first,
required the nine temporary guard exceptions and atomic public consolidation,
and advised retaining duplicate transcript sidecars. It assessed the UI/model
change as medium-sized and full 11-video capture/editorial review as a bounded,
multi-session effort.

## Confidence and Remaining Uncertainty

**Confidence:** high for source attribution, local tracking design, guard
sequencing, and public grouping architecture.

Caption availability has not been tested; the capture workflow must record
unavailable languages without substituting another track. The four broader
interviews may contain useful supporting coding-agent material, but no public
publication decision should be made from titles or descriptions alone.

## Sources

- [The West Coast Builders playlist](https://www.youtube.com/playlist?list=PLV_xLvHFOwiuvtEhsFIW55AdFFP7Rpnvg) — official title, owner, description, and membership source.
- [Mayank Gupta on YouTube](https://www.youtube.com/@waghnakh) — official channel identity corresponding to channel ID `UCPgfAA83ROUVM-E3NCY154A`.
- [`src/content/youtube/AGENTS.md`](../../../../src/content/youtube/AGENTS.md) — source-library attribution, editorial, language, and provenance contract.
- [`src/data/resources/coding-with-agents.json`](../../../../src/data/resources/coding-with-agents.json) — existing public resources and IDs.
- [`src/content.config.ts`](../../../../src/content.config.ts) — public summary schema.
- [`src/components/resources/CodingWithAgents.tsx`](../../../../src/components/resources/CodingWithAgents.tsx) and [`EpisodeList.tsx`](../../../../src/components/resources/EpisodeList.tsx) — current single/series resolver and episode-only list semantics.
- [`.agents/scripts/public-content-guard.mjs`](../../../scripts/public-content-guard.mjs) — tracked-ID status and path-specific exception behavior.

## Open Questions

- None blocking. Reassess public relevance for ordinals 4, 7, 8, and 9 only
  from captured transcripts, not remote descriptions.
