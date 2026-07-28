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
authoritative manifests contain 19, 9, and 38 entries respectively. Seven SWE
Agents videos are captured, summarized, and incorporated into the draft
overview; 11 available SWE Agents videos remain pending. Broader capture remains
staged: `SWE Agents`, `Agent Reliability`, then `Coding Agents`.

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

- Execute Task 3 of [Plan 03](./plans/03-bounded-playlist-corpus.md): continue
  the 11 pending available SWE Agents videos in a later session with exactly
  one `--limit 2` capture command, then review and summarize each successful
  capture and refresh the overview. Do not refill that bounded batch in the
  same session.

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
