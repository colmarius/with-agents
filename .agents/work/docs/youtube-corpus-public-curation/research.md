# Research: Public curation from the source-only YouTube corpus

**Date:** 2026-07-31
**Status:** draft
**Question:** What is the smallest source-faithful path from the completed
YouTube library to useful public resources, articles, and improved workflows?

## Recommendation

Keep the playlist library as broad source infrastructure and publish only a few
human-curated orientations or syntheses. Close the existing public-source review
gap first, add one Coding Agents playlist-level resource guide, and publish at
most one new evidence-led article unless a second thesis proves clearly distinct.
Automate structural checks, never editorial judgment.

## Current Source State

- Five tracked playlists contain 161 manifest occurrences and 152 unique video
  IDs.
- There are 149 metadata files, 141 transcripts, and 141 source summaries.
- Eight Antirez IDs have durable caption-unavailable metadata and three AI
  Engineer manifest entries are private.
- There are no pending captures.
- Antirez has 86 unique manifest IDs: 78 captured and summarized, 8
  caption-unavailable. Its 78 summaries, two playlist overviews, and author
  synthesis are current but `draft`.
- The three AI Engineer playlists have 63 unique captured summaries after the
  two bounded-track overlaps are deduplicated. All 63 summaries and all three
  overviews are `reviewed`.
- Coding Agents is the only explicitly active cross-event playlist. Its final
  baseline is 38 manifest / 37 available / 37 captured / 37 summarized / 37
  incorporated / 0 pending / 1 private / 0 caption-unavailable.
- AI Engineer is a curator/source channel, never the author. All three AI
  Engineer playlists remain author-less and `multiSpeaker: true`.

## Existing Public Surface

- The site currently has 8 post files, 49 public summary files, and 24 entries
  in `src/data/resources/coding-with-agents.json`.
- The completed AI Engineer playlist work changed none of those public paths.
- Seventeen tracked source-library IDs are already referenced publicly.
- Three reviewed AI Engineer IDs already have public treatment:
  - `ClWD8OEYgp8` — Maggie Appleton: resource, public summary, and field-guide
    article citation.
  - `RjfbvDXpFls` — Mario Zechner: resource and public summary.
  - `F_RyElT_gJk` — Beyang Liu: resource and public summary.
- Four current resource entries name AI Engineer as their source; one is outside
  the three selected playlists.
- Fourteen Antirez source IDs already support public artifacts. Eight are cited
  directly by `behavior-over-explanation.md`; the remaining public overlap comes
  from the two guided Antirez playlist summaries.
- `behavior-over-explanation.md` is public while all eight source-library
  summaries it cites are still `draft`. The post may still be source-faithful,
  but the repository lacks a completed dedicated source-review gate behind those
  public claims.

## Article Architecture And Overlap

The completed article-refresh work item gives the existing public series clear
roles:

- `agentic-coding-2026`: landscape and reading-path map.
- `durable-context-coding-agents`: repository memory and durable alignment.
- `make-the-agent-prove-it`: proof mechanics for one change.
- `small-threads-durable-state`: resumable work-item operating procedure.
- `amp-factory-era-case-study`: Amp-specific example of durable delegation and
  orchestration contracts.
- `behavior-over-explanation`: Antirez-led methodology for preferring observed
  behavior over fluent explanation.

The highest-confidence new thesis is team-level measurement: evaluate delivered
functionality, rework, defect and verification cost, and review capacity instead
of generated-code, pull-request, subscription, or attention activity. Reviewed
evidence exists from Yegor Denisov-Blanch / Stanford, Tomas Reimers / Graphite,
Brian Scanlan / Intercom, Quinn Slack / Sourcegraph, and the reliability corpus.
The article is justified only if it remains a team/adoption measurement guide,
not another proof-stack or behavior-over-explanation recap.

A reliability-stack article is plausible but optional. The bounded Agent
Reliability corpus is coherent, but most speakers have a commercial interest in
the layer they describe. A public draft must keep those affiliations and evidence
limits visible rather than laundering them into consensus.

## Resource Strategy

- Do not create one resource per captured video.
- Add at most one resource entry per tracked playlist, and only when a guided
  public summary provides a useful route through the source.
- Start with `Coding Agents @ AI Engineer`, the broad active collection that most
  directly matches the resource hub.
- Curate approximately 8–12 starting points by reader question. Link the existing
  Appleton, Zechner, and Liu public summaries where relevant instead of
  duplicating them.
- Avoid hard-coded video counts in public orientation prose because Coding
  Agents is mutable.
- Defer separate SWE Agents and Agent Reliability playlist entries until a
  guided orientation has a distinct reader job.

## Source Review Strategy

- Do not re-review all reviewed AI Engineer transcripts. Correct them on touch
  only when a public citation, retitle, or source comparison exposes a material
  issue.
- Review the 14 publicly referenced Antirez summaries first. Check Italian
  caption fidelity, English translation/paraphrase, timestamps, provenance,
  unsupported certainty, and alignment with adjacent public claims.
- Review the two Antirez overviews and author synthesis as separate artifacts.
- Sample ten remaining unreferenced Antirez summaries across both playlists.
  Escalate only if repeated material translation, attribution, timestamp, or
  source-evidence defects appear.
- Preserve ambiguous captions rather than inventing repairs. Transcript cleanup
  should remain source-faithful and should happen only when a claim depends on
  the affected text.

## Workflow Improvements

1. Add a public-citation gate: a public artifact may cite a tracked source ID
   only when the matching source summary is `reviewed`, unless an explicit
   exception is recorded.
2. Add a dedicated editorial-review mode to the maintenance skill for
   attribution, source anchors, `Editorial:` labels, coverage, chronology, and
   status promotion.
3. Replace recurring ad hoc corpus checkers with a reusable read-only structural
   audit. It may verify manifests, derived states, provenance, links, timestamps,
   coverage, overlap, and attribution mode, but not prose quality.
4. Validate the public resource manifest for raw duplicate keys, unique IDs,
   date shape, type/topic values, and `resourceId` alignment with public
   summaries.
5. Resolve the recurring formatter churn in the eight Antirez unavailable
   metadata files by aligning the writer and canonical committed format.
6. Keep batch size, speaker-specific caveats, and playlist-specific capture
   pacing in work items rather than globalizing them as universal skill rules.

## Oracle Review Incorporated

Oracle recommended the same narrow path: close the Antirez public-review gap,
add one playlist-level Coding Agents resource, and write one new article only if
it owns a distinct thesis. Oracle recommended outcome measurement as the first
article candidate and reliability as optional. It also recommended a
public-citation status rule, a reusable dedicated review gate, and resource JSON
validation.

A suspected duplicate `date` key for resource ID 9 was checked directly and is
not present. The apparent duplicate came from two overlapping `sed` ranges that
both printed line 220. A duplicate-key-aware validator remains useful because
ordinary `JSON.parse` would silently accept a real duplicate.

## Work-Item Cleanup Context

Five existing work items are currently `completed`: article refresh, post/slide
format refresh, AI Engineer playlist tracking, YouTube knowledge library, and
YouTube maintenance workflow. Their durable contracts now mostly live in root or
scoped `AGENTS.md`, skills, code, tests, and public content. Final cleanup should
search for active references and remove only directories whose context has been
superseded, preserving their complete history in Git.

## Open Questions

- [ ] Does the team-level measurement draft remain distinct after a section-level
      overlap audit against all current public posts?
- [ ] Does the Antirez risk sample expose a repeated material error pattern?
- [ ] Is a reliability-stack article worth its vendor-heavy evidence burden?
- [ ] Which completed work items still have unique live context not represented
      by current code, skills, guidance, or this work item?
