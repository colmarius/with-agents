# AI Engineer YouTube playlist tracking

Status: in-progress
Category: research
Updated: 2026-07-29

## Summary

Evaluate the AI Engineer YouTube channel as a source for the repository's
source-only knowledge library and future public posts. The live channel has 80
public playlists spanning event dumps, topic collections, event tracks, and
sponsor collections. The selected initial tracking set is the bounded 2025
`SWE Agents` and `Agent Reliability` tracks plus the active cross-event `Coding
Agents` collection.

Unlike the single-speaker Antirez corpus, these playlists contain many
speakers. Multi-speaker validation and the three-playlist onboarding are now
complete without misattributing the corpus to the AI Engineer channel. The
authoritative manifests contain 19, 11, and 38 entries respectively. All 18
available SWE Agents videos are captured, summarized, and incorporated into the
reviewed overview; its remaining manifest entry is private. The Agent Reliability
corpus is also complete for all 10 available entries, including 2 shared global
SWE Agents artifacts; all 10 are captured, summarized, and incorporated into
the reviewed overview, with its remaining manifest entry private. The dedicated
bounded multi-speaker review gate passed for all 26 unique global summaries and
both playlist overviews, completing Plan 03. The active `Coding Agents` baseline
was refreshed by a selected check and authoritative no-op sync, and its
one-video editorial thin slice now passes. Two Task 3 batches have captured,
summarized, and incorporated four more videos, bringing Coding Agents to 38
manifest / 37 available / 5 captured / 5 summarized / 5 incorporated / 32
available pending / 1 private / 0 caption-unavailable-recorded. The draft
summaries and current draft overview use source-supported James Shi / Datacurve,
Jason Liu / OpenAI, James Russo / HeyGen, Benoit Schillings / Google DeepMind,
and Lee Robinson / Cursor attribution without creating an AI Engineer author or
relationship. Plan 04 Tasks 1 and 2 are complete; Task 3 remains in progress.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plans:
  1. [Multi-speaker YouTube library support](./plans/01-multi-speaker-library-support.md)
  2. [Onboard and sync the AI Engineer playlists](./plans/02-onboard-and-sync-playlists.md)
  3. [Build the bounded AI Engineer playlist corpus](./plans/03-bounded-playlist-corpus.md)
  4. [Build and maintain the Coding Agents corpus](./plans/04-coding-agents-corpus.md)
- Handoffs:
  1. [Implement Plan 01 multi-speaker library support](./handoff-plan-01.md)
  2. [Implement Plan 02 playlist onboarding and sync](./handoff-plan-02.md)
  3. [Start Plan 03 bounded playlist corpus](./handoff-plan-03.md)
- Progress: [progress.md](./progress.md)
- Decisions: recorded below

## Next Action

- Continue Task 3 of [Plan 04](./plans/04-coding-agents-corpus.md) with the next
  bounded Coding Agents session: run exactly one selected `capture --limit 2`
  command, apply the fixed stop protocol, and do not refill the session.

## Open Questions

- [x] Initial tracking set: `SWE Agents: AI Engineer World's Fair 2025`, `Agent
      Reliability: AI Engineer World's Fair 2025`, and `Coding Agents @ AI
      Engineer` (decided 2026-07-27).
- [x] Multi-speaker playlists may omit author relationships, making the
      playlist overview their highest-level synthesis (decided 2026-07-27).
- [x] Use `transcriptLanguage: en` and `summaryLanguage: en` for all three
      playlists (explicitly confirmed 2026-07-27).
- [x] Manifest baseline: 66 full-membership occurrences represent 64 unique
      IDs; 63 available occurrences represent 61 unique IDs. The bounded tracks
      share `Dj0b_cEBHBI` and `n991Yxo1aOI`; `Coding Agents` shares none with
      either bounded track. Each playlist has one private placeholder.

## Decisions

- Namespace playlist slugs by source: `antirez-*` and `ai-engineer-*`.
- Complete and review the two bounded 2025 corpora before starting the active
  Coding Agents corpus.
- Defer public post and resource implementation to a later work item after the
  source corpus and playlist overviews are reviewed.

## Timeline

- 2026-07-27: Researched the 80-playlist channel inventory and selected the
  initial three-playlist tracking set.
- 2026-07-27: Confirmed author-less multi-speaker playlists and English source
  and summary languages; completed the live overlap precheck.
- 2026-07-27: Stress-tested the research in an Ultra grill thread and
  incorporated accepted Oracle feedback into `research.md`.
- 2026-07-27: Finalized four ordered implementation plans after Oracle review,
  splitting bounded and active editorial work at an attribution gate.
- 2026-07-27: Completed Plan 01 multi-speaker validation, runtime-path tests,
  editorial attribution contract, and maintenance workflow updates.
- 2026-07-27: Namespaced playlist slugs by source, onboarded and synchronized
  all three AI Engineer manifests, and completed Plan 02 without starting
  caption capture.
- 2026-07-27: Refreshed the bounded-track baseline and completed the first SWE
  Agents transcript, draft summary, and draft overview thin slice.
- 2026-07-28: Completed a second two-video SWE Agents backfill batch; 5 videos
  are now captured, summarized, and incorporated, with 13 available pending.
- 2026-07-28: Completed a third two-video SWE Agents backfill batch; 7 videos
  are now captured, summarized, and incorporated, with 11 available pending.
- 2026-07-28: Completed the remaining bounded SWE Agents batches; all 18
  available videos are captured, summarized, and incorporated, with the sole
  remaining manifest entry private. Plan 03 Task 3 is complete.
- 2026-07-28: Synchronized two Agent Reliability additions, completed its
  one-video editorial thin slice, reused both shared SWE Agents summaries, and
  created the draft overview. Coverage is 11 manifest / 10 available / 3
  captured / 3 summarized / 3 incorporated / 7 pending / 1 private / 0
  caption-unavailable-recorded.
- 2026-07-28: Completed Agent Reliability in four bounded continuation batches.
  All 10 available videos are captured, summarized, and incorporated, the two
  shared SWE Agents artifacts remain globally reused without recapture, and
  Plan 03 Task 4 is complete.
- 2026-07-28: Passed Plan 03 Task 5's bounded multi-speaker review gate after
  deliberately reviewing all 26 unique summaries and both overviews, making
  four source-supported claim/anchor corrections, and setting all 28 editorial
  artifacts to `reviewed`. Plan 03 is complete; Plan 04 remains unstarted.
- 2026-07-29: Refreshed the active Coding Agents baseline with a selected check
  and authoritative no-op sync, reconciled 38 manifest / 37 available / 37
  pending / 1 private with no overlap or existing global source artifacts, and
  passed Plan 04 Task 1 without starting capture or editorial work.
- 2026-07-29: Completed the one-video Coding Agents editorial thin slice for
  `Yk87oUPVaxU`, including source-faithful transcript cleanup, one draft summary,
  and the draft author-less multi-speaker overview. Plan 04 Task 2 passed; Task
  3 remains unstarted.
- 2026-07-29: Completed the first bounded Plan 04 Task 3 session for
  `il1c1a2FufU` and `Cz4v1WHVyZc`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 3 incorporated videos and 34 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-29: Completed the second bounded Plan 04 Task 3 session for
  `1P1hJ36rxM0` and `q4Tr-DknG2M`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 5 incorporated videos and 32 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
