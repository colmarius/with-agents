# AI Engineer YouTube playlist tracking

Status: planned
Category: research
Updated: 2026-07-27

## Summary

Evaluate the AI Engineer YouTube channel as a source for the repository's
source-only knowledge library and future public posts. The live channel has 80
public playlists spanning event dumps, topic collections, event tracks, and
sponsor collections. The selected initial tracking set is the bounded 2025
`SWE Agents` and `Agent Reliability` tracks plus the active cross-event `Coding
Agents` collection.

Unlike the single-speaker Antirez corpus, these playlists contain many
speakers. Onboarding should therefore wait for a small catalog change that lets
multi-speaker playlists omit an author relationship instead of misattributing
the corpus to the AI Engineer channel. All three can be onboarded and synced
together, while capture and editorial work remain staged: `SWE Agents`, `Agent
Reliability`, then `Coding Agents`.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plans:
  1. [Multi-speaker YouTube library support](./plans/01-multi-speaker-library-support.md)
  2. [Onboard and sync the AI Engineer playlists](./plans/02-onboard-and-sync-playlists.md)
  3. [Build the bounded AI Engineer playlist corpus](./plans/03-bounded-playlist-corpus.md)
  4. [Build and maintain the Coding Agents corpus](./plans/04-coding-agents-corpus.md)
- Progress: none
- Decisions: recorded below

## Next Action

- Execute [Plan 01](./plans/01-multi-speaker-library-support.md), starting with
  its validator invariant and focused tests. Do not add the three AI Engineer
  catalog entries until Plan 01 is complete.

## Open Questions

- [x] Initial tracking set: `SWE Agents: AI Engineer World's Fair 2025`, `Agent
      Reliability: AI Engineer World's Fair 2025`, and `Coding Agents @ AI
      Engineer` (decided 2026-07-27).
- [x] Multi-speaker playlists may omit author relationships, making the
      playlist overview their highest-level synthesis (decided 2026-07-27).
- [x] Use `transcriptLanguage: en` and `summaryLanguage: en` for all three
      playlists (explicitly confirmed 2026-07-27).
- [x] Live-page precheck: 63 visible occurrences represent 61 unique IDs. The
      two bounded tracks share two IDs; `Coding Agents` shares none with either
      bounded track. Synced manifests must verify this before capture.

## Decisions

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
