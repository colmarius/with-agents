# AI Engineer YouTube playlist tracking

Status: researching
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
- Plan: none
- Progress: none
- Decisions: none

## Next Action

- Stress-test the confirmed research, incorporate review feedback, and write
  ordered implementation plans. The first implementation plan should make
  author relationships optional before catalog onboarding or source capture.

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
