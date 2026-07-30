# AI Engineer YouTube playlist tracking

Status: in-progress
Category: research
Updated: 2026-07-30

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
one-video editorial thin slice now passes. Sixteen Task 3 batches have captured,
summarized, and incorporated thirty-two more videos, bringing Coding Agents to
38 manifest / 37 available / 33 captured / 33 summarized / 33 incorporated / 4
available pending / 1 private / 0 caption-unavailable-recorded. The draft
summaries and current draft overview use source-supported James Shi / Datacurve,
Jason Liu / OpenAI, James Russo / HeyGen, Benoit Schillings / Google DeepMind,
Lee Robinson / Cursor, Theo Browne / `@t3dotgg`, Bennet Fenner / Zed, Nuno
Campos / Witan Labs, Nupur Sharma / Qodo, Priscila Andre de Oliveira / Sentry,
Daniel Szoke / Sentry, Ian Ballantyne and KP Sawhney / Google DeepMind, and
Michael Richman / Bitly presenting Cmd+Ctrl, Lou Bichard / Ona, and Sarah Chieng
/ Cerebras, Liam Hampton / Microsoft, and Onur Solmaz / OpenClaw attribution;
Solmaz's separate TextCortex work remains explicit. Ara Khan / Cline and Lawrence
Jones / incident.io, Brian Scanlan / Intercom, Madison Faulkner / NEA with her
former Meta AI researcher role, and Hugo Santos / Namespace with his former
Google microservices role, Vincent Koc / OpenClaw with his Comet
evaluation-research role, and Matthias Luebken / Tavon with his spoken company
name auto-captioned as `Seven AI` are also represented; the source does not
reconcile Luebken's two company names. Luke Alvoeiro / Factory with his spoken
former Block and Goose provenance, and Chris Parsons / Cherrypick with his
spoken CTO, startup, agency, and agile background are now also represented.
Louis Knight-Webb / Vibe Kanban and Katia Gil Guzman and Vaibhav Srivastav /
OpenAI's Developer Experience team are now represented, as are Eric Zakariasson
/ Cursor and Maggie Appleton / GitHub with her spoken GitHub Next team role. Ido
Salomon / AgentCraft and Matt Pocock, who identifies himself as a teacher and
references his AI Hero site and Course Video Manager repository without
supplying an employer affiliation, are now also represented. Mario Zechner, who
says he built Pi without supplying an employer affiliation, and Rahul Pandita /
GitHub Next are now represented too. No AI Engineer author or relationship
exists. Plan 04 Tasks 1 and 2 are complete; Task 3 remains in progress.

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
- 2026-07-29: Completed the third bounded Plan 04 Task 3 session for
  `xUnRQ9vLXxo` and `HsxQICTLF84`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 7 incorporated videos and 30 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-29: Completed the fourth bounded Plan 04 Task 3 session for
  `HEFSExa0xl0` and `EcqMYoIV57A`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 9 incorporated videos and 28 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-29: Completed the fifth bounded Plan 04 Task 3 session for
  `li0SaBt9RDM` and `ugUeZ8-b-u0`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 11 incorporated videos and 26 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-29: Completed the sixth bounded Plan 04 Task 3 session for
  `7gujZrJ9L5I` and `W-SX_srBa3Y`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 13 incorporated videos and 24 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-29: Completed the seventh bounded Plan 04 Task 3 session for
  `5Sui_OnSRlY` and `TeGsFFNqRLA`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 15 incorporated videos and 22 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-30: Completed the eighth bounded Plan 04 Task 3 session for
  `dyHpnnlkTc8` and `VaS2h-dY1-4`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 17 incorporated videos and 20 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-30: Completed the ninth bounded Plan 04 Task 3 session for
  `yUmS-F9IX90` and `L2r6vLlLgs8`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 19 incorporated videos and 18 available
  pending. Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-30: Completed the tenth bounded Plan 04 Task 3 session for
  `4_VQBbs2iQA` and `VktrqzQgytY`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 21 incorporated videos and 16 available
  pending. Brian Scanlan / Intercom, Madison Faulkner / NEA with her former Meta
  AI researcher role, and Hugo Santos / Namespace with his former Google
  microservices role are source-supported. Task 3 remains unchecked for the
  next no-refill two-video session.
- 2026-07-30: Completed the eleventh bounded Plan 04 Task 3 session for
  `4VhbYlfC7Gs` and `vAIDdLKB6-w`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 23 incorporated videos and 14 available
  pending. Vincent Koc's OpenClaw and Comet roles are source-supported;
  Matthias Luebken's title attribution to Tavon remains separate from the
  spoken company name auto-captioned as `Seven AI`. Task 3 remains unchecked
  for the next no-refill two-video session.
- 2026-07-30: Completed the twelfth bounded Plan 04 Task 3 session for
  `ow1we5PzK-o` and `2TLXsxkz0zI`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 25 incorporated videos and 12 available
  pending. Luke Alvoeiro's Factory, former Block, and Goose provenance and Chris
  Parsons's source-title Cherrypick attribution and spoken professional
  background are source-supported. Task 3 remains unchecked for the next
  no-refill two-video session.
- 2026-07-30: Completed the thirteenth bounded Plan 04 Task 3 session for
  `W76woOYHlvY` and `MhHEGMFCEB0`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 27 incorporated videos and 10 available
  pending. Louis Knight-Webb's Vibe Kanban and Katia Gil Guzman and Vaibhav
  Srivastav's OpenAI Developer Experience attributions are source-supported.
  Task 3 remains unchecked for the next no-refill two-video session.
- 2026-07-30: Completed the fourteenth bounded Plan 04 Task 3 session for
  `rnDm57Py54A` and `ClWD8OEYgp8`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 29 incorporated videos and 8 available
  pending. Eric Zakariasson's Cursor and Maggie Appleton's GitHub and GitHub
  Next attributions are source-supported. Task 3 remains unchecked for the next
  no-refill two-video session.
- 2026-07-30: Completed the fifteenth bounded Plan 04 Task 3 session for
  `kR64LOqBBCU` and `-QFHIoCo-Ko`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 31 incorporated videos and 6 available
  pending. Ido Salomon's AgentCraft creator role and Matt Pocock's teacher, AI
  Hero, and Course Video Manager provenance are source-supported without an
  inferred employer affiliation. Task 3 remains unchecked for the next
  no-refill two-video session.
- 2026-07-30: Completed the sixteenth bounded Plan 04 Task 3 session for
  `RjfbvDXpFls` and `1oySeF37SZc`; both videos are captured, summarized, and
  incorporated. Coding Agents now has 33 incorporated videos and 4 available
  pending. Mario Zechner's Pi-builder role and absent employer affiliation and
  Rahul Pandita's GitHub Next researcher role remain source-explicit. Task 3
  remains unchecked for the next no-refill two-video session.
