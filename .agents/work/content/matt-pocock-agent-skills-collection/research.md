# Matt Pocock agent-skills collection research

## Confirmed source identity

- User-supplied channel: <https://www.youtube.com/@mattpocockuk>
- YouTube Data API channel ID: `UCswG6FSbgZjbWtdf_hMLaow`
- Stable uploads playlist ID: `UUswG6FSbgZjbWtdf_hMLaow`
- YouTube reports the channel title as `Matt Pocock` and the handle as `@mattpocockuk`.
- The selected videos have English source audio/captions and will use English summaries.

## Time boundary

The strict three-month window for this work is 2026-05-25 through 2026-08-25. The YouTube Data API returned 29 public uploads in that interval. Most of the July uploads are 50-second to two-minute extracts; the collection prefers complete long-form explanations over derivative shorts. The initial six-video skills boundary excluded a broader Uncle Bob interview, but the user subsequently directed that this existing Matt Pocock channel video be consolidated into Matt's collection rather than remain a standalone resource.

## Final reviewed curation

1. `UzMNBN6xLLA` — **9 Things People Get Wrong With My /grill-* skills** — 2026-05-25 — 13m 28s
2. `mh5XZ-L5SFQ` — **Can Cursor's HARDCORE Review Skill Stop The Slop?** — 2026-05-28 — 13m 24s
3. `M6mYodf0dJM` — **mattpocock/skills: A complete AI Coding workflow, end-to-end** — 2026-07-16 — 17m 17s
4. `n0VhIVtviC0` — **Don't waste time on specs: /prototype instead** — 2026-07-23 — 10m 59s
5. `F3lL98Pj90o` — **/wayfinder: Nothing is too big to plan anymore** — 2026-07-30 — 15m 9s
6. `gaDdrDdczO4` — **New Skills! v1.2 brings /wait-what, /writing-for-agents, and fixes /grill-me** — 2026-08-05 — 11m 38s
7. `zcLPGC-tvgk` — **Software Fundamentals in the Age of AI — Uncle Bob & Matt Pocock** — 2026-08-19 — 57m

This order is chronological. It moves from planning and review failure modes through the complete workflow, prototyping and large-project planning, the latest maintenance changes, and then a hosted conversation about deterministic quality gates and software fundamentals. It excludes two overlapping release/demo videos (`A8mokin_YOs`, `251hsWgoTPM`) and the less coding-specific `/teach` tutorial (`s5T5oQJcJ6U`).

Oracle reviewed the initial strict boundary on 2026-08-25 and recommended keeping all six skills videos. It found the apparent overlaps complementary, the Cursor review directly relevant to anti-slop practice, and no omitted in-window upload material necessary to that skills thesis. The seventh item is a later user-directed consolidation of an existing canonical resource, not an Oracle-proposed expansion.

## Boundary evidence

- `3MP8D-mdheA`, **How To De-Slop A Codebase Ruined By AI (with one skill)**, was published 2026-04-29, outside the strict three-month window.
- `6BB6exR8Zd8`, **I stopped using /grill-me for coding. Here's what I use instead:**, was published 2026-05-14, also outside the strict window.
- The proposed review video keeps anti-slop practice represented without weakening the requested date boundary.
- `zcLPGC-tvgk` is inside the date window and already had a reviewed standalone transcript, summary, and canonical resource. Consolidating it avoids two public resources for videos from the same Matt Pocock selection while preserving Uncle Bob as the source of its substantive claims.

## Repository constraints

- The library tracks playlist IDs, not channel pages, so the full uploads playlist remains the machine-owned manifest while reviewed curation narrows the editorial and public obligations.
- This is an author-linked playlist: add a Matt Pocock author record and relationship rather than `multiSpeaker: true`.
- A public collection requires reviewed curation, reviewed source summaries, a reviewed playlist overview, matching public summary `collection`, `order`, and `videoId` values, one canonical playlist resource, and catalog membership.
- Existing source and public artifacts already discuss Matt Pocock appearances on other channels. None of the first six selected IDs was previously tracked; `zcLPGC-tvgk` already existed as a standalone public resource and transcript and is reused rather than duplicated.

## Sources

- YouTube Data API `channels.list`, `playlistItems.list`, and `videos.list` responses fetched on 2026-08-25.
- Official channel: <https://www.youtube.com/@mattpocockuk>
- Official uploads playlist: <https://www.youtube.com/playlist?list=UUswG6FSbgZjbWtdf_hMLaow>
- Repository contract: [`src/content/youtube/AGENTS.md`](../../../../src/content/youtube/AGENTS.md)
