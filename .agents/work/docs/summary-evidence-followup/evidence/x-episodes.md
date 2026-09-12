# X-episode evidence recovery

Date: 2026-09-12. Owner: https://ampcode.com/threads/T-01a096eb-a775-742d-887f-872e19d34248.

## Outcome

Recovered official YouTube recordings and English auto-generated captions for both Craft & Chaos entries. Wrote substantive timestamped summaries and matching transcript sidecars. No verified recording/transcript recovered for Next Token episode 1; leave its intentional disclosure unchanged. No shared manifest edits, pushes, or deployment.

Baseline: applied coordinator `.amp/summary-followup-baseline.patch` atop `db68975d2e1237b8a1115313f39faad8b7f27099` and committed locally as `9376cd5` (baseline only; do not integrate it again). Owned changes are separate from that baseline.

## Source identity and recovery methods

- Force-fetched https://x.com/AmpCode/status/1998800449768665274: official Amp post at 17:02 Dec 10, 2025, links to https://x.com/i/broadcasts/1OyJAjQjPQwxb with the title “Live coding, Prompt Duel at Dawn, win $500 Amp Credits and more! Join us for Craft & Chaos”. The broadcast reader exposes only the title and a 00:00 / 00:00 player.
- Force-fetched https://x.com/AmpCode/status/2000974512251383886: official Amp post at 17:01 Dec 16, 2025, links to https://x.com/i/broadcasts/1YqxolroyElKv with the same title. Its broadcast reader likewise exposes no substantive content.
- Direct real-browser navigation to those two X broadcast URLs and https://x.com/i/broadcasts/1MnxnPWoDwLGO failed with `net::ERR_HTTP_RESPONSE_CODE_FAILURE`. No login, proxy, or access-bypass escalation attempted.
- https://buildcrew.team returned HTTP 402 via force-fetch; Chromium showed “This deployment is temporarily paused”. It supplied no archive links.
- Force-fetched full https://ampcode.com/chronicle: its official YouTube link establishes https://www.youtube.com/@AmpCodeInc as the publisher channel. Chronicle lists Next Token episodes 2/3 and different Craft & Chaos recordings, not these three targets. No substitution from those episodes.
- Real browser https://www.youtube.com/@AmpCodeInc/streams exposed two identically titled Craft & Chaos streams that search/Chronicle missed. Extracted links from the rendered channel; then inspected each watch page's public `ytInitialPlayerResponse` metadata.
- Episode 1: https://www.youtube.com/watch?v=nphv0Y5_KbY, channel Amp, Inc. / `UCTBO4_LccT2C8THAOS_W-kQ`, 3198 seconds. `liveBroadcastDetails.startTimestamp` = `2025-12-10T17:02:23+00:00`; end = `2025-12-10T17:55:38+00:00`. Same publisher, exact title and stream start minute match the Dec 10 X post. Transcript opening explicitly introduces the renamed Build Crew / Craft and Chaos show. At 51:39–52:42 it says next week's show moves from Wednesday to Tuesday for a DHH recording on Wednesday.
- Episode 2: https://www.youtube.com/watch?v=RMksGQssrA8, channel Amp, Inc., 3475 seconds. Start = `2025-12-16T17:01:23+00:00`; end = `2025-12-16T17:59:16+00:00`. Same publisher, exact title and stream start minute match the second X post. Closing at 56:20 confirms the date switch and DHH interview “tomorrow”, corroborating the first episode's schedule announcement. Publisher metadata does not itself assign ordinal numbers; mapping follows the existing entries' exact X posts plus matching stream evidence.
- Next Token: force-fetched https://x.com/i/broadcasts/1MnxnPWoDwLGO identifies “Next Token, Episode 1” / replay but supplies no transcript. Real-browser inspection of the manifest's official playlist https://www.youtube.com/playlist?list=PLhToAAkWJ58fssNaA7WgXYSvFA1B2P_t_ showed three items: DHH, McKay Wrigley, and a 58-second “Carpenters” short. The Live tab contains McKay Wrigley, not episode 1. Targeted web searches for the episode names, X IDs, and YouTube mirrors found no verified episode 1 mirror; unrelated 2026 NextTokenShow results were excluded. This establishes a bounded recovery failure, not proof no mirror exists anywhere.

## Source capture and editorial coverage

Ran the repository workflow (no `--force`):

```sh
npm run youtube:transcript -- 'https://www.youtube.com/watch?v=nphv0Y5_KbY' --summary-slug coding-with-agents/craft-and-chaos-episode-1 --title 'Craft & Chaos: Episode 1 Highlights' --series craft-and-chaos --episode 1
npm run youtube:transcript -- 'https://www.youtube.com/watch?v=RMksGQssrA8' --summary-slug coding-with-agents/craft-and-chaos-episode-2 --title 'Craft & Chaos: Episode 2 Highlights' --series craft-and-chaos --episode 2
```

Capture reported 1370 segments / 57 chunks and 1510 segments / 62 chunks respectively. Read both complete saved transcripts before writing. Minimal name correction in episode 1 opening; automatic-caption artifacts remain elsewhere rather than guessing at uncertain words. Summaries disclose the English auto-caption basis and historical product behavior; no independent audio-transcription claim. Avoided uncertain experimental-tool spelling (“ripple” in captions) in the public summary.

- Episode 1 covers runtime versus static checks, the Java palette refactor and feedback loop, push authorization versus test hooks, the limited Librarian prompt comparison, thread search and targeted PDF/image extraction.
- Episode 2 covers client-owned versus provider-managed conversation state, visual iteration and compile feedback, selective thread context, the confounded skills comparison, tools versus instructions/MCP distribution, and the unreleased interactive-process demo.
- News benchmarks, promotional prizes, unrelated opinions and unverified current feature contracts are not converted into general facts. Explicitly preserve observed demo failures and comparison limitations.

## Owned paths and integration proposals

- `src/content/summaries/coding-with-agents/craft-and-chaos-episode-1.md`
- `src/content/summaries/coding-with-agents/craft-and-chaos-episode-2.md`
- `src/content/transcripts/coding-with-agents/craft-and-chaos-episode-1.md` (new)
- `src/content/transcripts/coding-with-agents/craft-and-chaos-episode-2.md` (new)

All existing summary frontmatter, IDs, series, dates and URLs preserved. `next-token-episode-1.md` is byte-unchanged from coordinator baseline.

Coordinator decision: episode 2 date remains `2025-12-17` as explicitly required, but both publisher timestamps and the transcripts support Dec 16. Consider a separately authorized metadata correction. No new resource record is needed: both summaries already join canonical series ID 8. Its existing X series URL remains valid; a manifest change is optional, not required for these recovered per-episode YouTube links. Do not replace it with an invented playlist URL.

## Validation and preview

- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm test`: 116 tests, 115 passed, 1 skipped, 0 failed.
- `npm run build`: 343 pages built; complete.
- `npm run content:guard`: passed, 292 public summaries. Existing duplicate `antirez-ai-concepts` notice remains unrelated.
- `npm run summaries:check`: 292 files passed.
- `npm run lint:fix`: 460 files checked, no fixes.
- `git diff --check`: clean. Installed changed-summary pre-commit hook.
- Ran `amp orb services ensure`; portal is https://t-03guunlnnwxt4dx532em5q6vc-p24421.onamp.dev/ (preview, not deployed).
- Both `/summaries/coding-with-agents/craft-and-chaos-episode-1` and `/summaries/coding-with-agents/craft-and-chaos-episode-2` rendered in real Chromium. DOM checks confirmed disclosure, five/six exact timestamp links to the correct video, recording links, and no remaining X-only claim in these summaries. Episode 2 browser error list was empty.
- Screenshots: `.amp/in/artifacts/craft-chaos-episode-1.png` and `craft-chaos-episode-2.png`. Initial full-page captures exposed the development toolbar over text; recaptured representative viewport after removing only the browser's `astro-dev-toolbar` element (no repository edit). This isolates site content from dev tooling.

This report stays uncommitted for coordinator transfer/review.
