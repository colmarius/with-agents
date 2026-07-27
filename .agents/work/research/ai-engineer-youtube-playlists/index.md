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

- Confirm language settings and the author-optional model, then plan the minimal
  validator and contract change. Onboard and sync all three playlists together,
  compute their manifest overlap, and only then begin staged capture.

## Open Questions

- [x] Initial tracking set: `SWE Agents: AI Engineer World's Fair 2025`, `Agent
      Reliability: AI Engineer World's Fair 2025`, and `Coding Agents @ AI
      Engineer` (decided 2026-07-27).
- [ ] Should multi-speaker playlists be allowed to omit author relationships,
      making the playlist overview their highest-level synthesis?
- [ ] Confirm `transcriptLanguage` and `summaryLanguage` explicitly before
      onboarding; the likely values are English and English, but they must not
      be inferred from uploader metadata.
- [ ] Compute pairwise and total overlap from synced manifests; the current
      research does not establish `Coding Agents` overlap with the two bounded
      tracks.
