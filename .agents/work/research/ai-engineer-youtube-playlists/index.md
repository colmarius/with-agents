# AI Engineer YouTube playlist tracking

Status: in-progress
Category: research
Updated: 2026-07-28

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
draft overview; its remaining manifest entry is private. The Agent Reliability
corpus is also complete for all 10 available entries, including 2 shared global
SWE Agents artifacts; all 10 are captured, summarized, and incorporated into
the draft overview, with its remaining manifest entry private. Plan 03 Task 4
is complete. Broader capture remains staged behind the bounded multi-speaker
review gate, then `Coding Agents`.

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

- Run Task 5 of [Plan 03](./plans/03-bounded-playlist-corpus.md): perform the
  dedicated bounded multi-speaker attribution and overview review gate across
  SWE Agents and Agent Reliability. Record an explicit pass or the required
  corrections before starting Plan 04; do not begin Coding Agents capture until
  that gate passes.

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
