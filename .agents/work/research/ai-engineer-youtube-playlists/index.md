# AI Engineer YouTube playlist tracking

Status: researching
Category: research
Updated: 2026-07-27

## Summary

Evaluate the AI Engineer YouTube channel as a source for the repository's
source-only knowledge library and future public posts. The live channel has 80
public playlists spanning event dumps, topic collections, event tracks, and
sponsor collections; the recommended pilot is the bounded 2025 `SWE Agents`
and `Agent Reliability` tracks, followed later by the active cross-event
`Coding Agents` collection.

Unlike the single-speaker Antirez corpus, these playlists contain many
speakers. Onboarding should therefore wait for a small catalog change that lets
multi-speaker playlists omit an author relationship instead of misattributing
the corpus to the AI Engineer channel.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plan: none
- Progress: none
- Decisions: none

## Next Action

- Confirm the first playlist set and language settings, then plan the minimal
  author-optional catalog change before onboarding or transcript capture.

## Open Questions

- [ ] Should the first pilot include both `SWE Agents: AI Engineer World's Fair
      2025` and `Agent Reliability: AI Engineer World's Fair 2025`?
- [ ] Should multi-speaker playlists be allowed to omit author relationships,
      making the playlist overview their highest-level synthesis?
- [ ] Confirm `transcriptLanguage` and `summaryLanguage` explicitly before
      onboarding; the likely values are English and English, but they must not
      be inferred from uploader metadata.
