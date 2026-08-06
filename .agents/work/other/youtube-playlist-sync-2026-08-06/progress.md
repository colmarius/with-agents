# Progress

## 2026-08-06

- Authorized scope: synchronize all changed tracked Antirez and AI Engineer
  playlists and perform bounded capture/editorial follow-up.
- Starting state: `main` matched `origin/main`; worktree and
  `src/content/youtube/` were clean.
- Read-only discovery before authorization found six globally new videos, one
  cross-playlist move, one additional removal, and playlist position changes.
- Authoritative selected sync: four changed manifests updated with 7 membership
  additions, 2 membership removals, 69 position changes, 0 retitles, 0
  availability changes, and 0 publication-date changes. The AI Engineer Coding
  Agents session used exactly one selected check and one selected sync.

### Public-impact decisions

- `HUh7zFiTi-I` — **keep**: new Antirez AI concepts membership; no exact-ID
  public hit. The existing guided summary is a selected orientation without a
  corpus-count claim, so no public correction is required.
- `RDGe3_87cSY` — **keep**: new Antirez AI concepts membership; no exact-ID
  public hit. Its consciousness topic may broaden the source-only synthesis
  after transcript review but does not invalidate the public guided route.
- `b7E-4jBPUec` — **keep**: new Antirez Coding with AI membership; no exact-ID
  public hit. The public route remains a selected starting point rather than a
  complete latest-video list.
- `AMiyLItEtLA` — **keep**: new AI Engineer Coding Agents membership; no
  exact-ID public hit. The public guided route has no corpus-count claim.
- `CgsWxRUY5Eo` — **keep**: new AI Engineer Coding Agents membership; no
  exact-ID public hit. The public guided route has no corpus-count claim.
- `zkX03APVj0M` — **keep**: new AI Engineer Coding Agents membership; no
  exact-ID public hit. The public guided route has no corpus-count claim.
- `xIt_mTQp6mY` — **keep**: moved from Agent Reliability to Coding Agents. Its
  global transcript and reviewed summary are reusable. The public post
  `parallel-agents-need-an-admission-policy.md` cites the same public talk and
  remains correctly attributed to Kyle Mistele of HumanLayer.
- `Ib5t2RLtxvM` — **keep**: removed from Agent Reliability with no exact-ID
  public hit. Preserve its global transcript and reviewed summary as an orphaned
  source artifact; do not delete source history.
- Playlist-level orientation — **keep**: public playlist-ID hits are limited to
  the Antirez and Coding Agents resource entries/guided summaries. Their dates
  describe the editorial artifacts, not a live last-video date, and their prose
  presents selected routes without mutable manifest counts. The Antirez article
  explicitly frames its 78-video count as the corpus synthesized for its July
  27 publication, so later source additions do not make that historical scope
  false. Agent Reliability has no public playlist-ID hit.

### Post-sync baseline before capture

- Antirez AI concepts: 65 manifest / 65 available / 60 captured / 2 pending / 3
  caption-unavailable / 60 summarized (44 draft, 16 reviewed) / overview current.
- Antirez Coding with AI: 31 manifest / 31 available / 25 captured / 1 pending /
  5 caption-unavailable / 25 summarized (13 draft, 12 reviewed) / overview current.
- AI Engineer Agent Reliability: 9 manifest / 8 available / 8 captured / 0
  pending / 0 caption-unavailable / 8 reviewed summaries. Its overview requires
  deliberate removal of the two no-longer-tracked talks; structural audit
  reports both extra covered IDs.
- AI Engineer Coding Agents: 42 manifest / 41 available / 38 captured / 3 pending
  / 0 caption-unavailable / 38 reviewed summaries. Its overview is stale because
  the reusable `xIt_mTQp6mY` summary is not yet incorporated.
- Overlap: nine IDs occur in more than one manifest; eight are cross-playlist
  overlaps and `8gg-oJr4dTY` is an existing duplicate occurrence within Antirez
  AI concepts. No new global-artifact duplication was created.
- Global artifact reuse: 149 video directories, 141 transcripts, and 141
  summaries. `xIt_mTQp6mY` reuses one existing global artifact set in its new
  playlist; `Ib5t2RLtxvM` is the sole artifact directory no longer referenced by
  any manifest and is intentionally retained.

### Capture and editorial follow-up

- Antirez capture ran once, selected to both changed playlists and bounded to
  three items. It returned exit 2 after recording caption-unavailable metadata
  for `RDGe3_87cSY`, `HUh7zFiTi-I`, and `b7E-4jBPUec`; no retry or force capture
  was attempted.
- AI Engineer Coding Agents capture ran exactly once with `--limit 2` and
  captured `zkX03APVj0M` and `AMiyLItEtLA`. No refill or second capture ran;
  `CgsWxRUY5Eo` remains pending for a later session.
- Reviewed both complete transcripts, corrected only clear source-faithful ASR
  names/casing, and added draft summaries with manifest/metadata provenance and
  transcript anchors.
- Refreshed the Coding Agents overview at draft to incorporate the two new
  summaries and reusable `xIt_mTQp6mY` summary. Refreshed Agent Reliability at
  draft to remove the two no-longer-member talks without deleting global source
  artifacts. Refreshed both Antirez overview coverage sections at draft for the
  new caption-unavailable outcomes.
- Reviewed the Antirez author synthesis after both related overview changes.
  No author edit was needed because no new Antirez transcript or summary was
  captured and its covered summary set remains unchanged.
- Oracle review requested one invalid Mistele timestamp fix and clear Emulated
  transcript proper-name corrections (`ML`, `SWE-bench Pro`, `Terminal-Bench`,
  `FrontierCode`, `DeepSWE`, and `Emulated`). All requested fixes were applied;
  Oracle otherwise found attribution, claims, frontmatter, counts, membership,
  and artifact retention consistent.

### Final baseline

- Antirez AI concepts: 65 manifest / 65 available / 60 captured / 0 pending / 5
  caption-unavailable / 60 summarized manifest occurrences (44 draft, 16
  reviewed) / 60 incorporated occurrences representing 59 unique summaries /
  overview current at draft.
- Antirez Coding with AI: 31 manifest / 31 available / 25 captured / 0 pending /
  6 caption-unavailable / 25 summaries (13 draft, 12 reviewed) / 25 incorporated
  / overview current at draft.
- AI Engineer SWE Agents: 19 manifest / 18 available / 1 private / 18 captured /
  0 pending / 0 caption-unavailable / 18 reviewed and incorporated / overview
  current at reviewed.
- AI Engineer Agent Reliability: 9 manifest / 8 available / 1 private / 8
  captured / 0 pending / 0 caption-unavailable / 8 reviewed and incorporated /
  overview current at draft.
- AI Engineer Coding Agents: 42 manifest / 41 available / 1 private / 40
  captured / 1 pending (`CgsWxRUY5Eo`) / 0 caption-unavailable / 40 summaries (2
  draft, 38 reviewed) / 40 incorporated / overview current at draft.
- Antirez author: 89 deduplicated manifest videos / 78 captured / 0 pending / 11
  caption-unavailable; synthesis current at reviewed because its covered summary
  set did not change.
- Global: 157 tracked videos across 166 manifest occurrences; 142 tracked
  transcripts and summaries. On disk there are 154 video directories, 143
  transcripts, and 143 summaries; the extra transcript/summary pair is retained
  orphan `Ib5t2RLtxvM`. Nine IDs have multiple manifest occurrences: eight
  cross-playlist overlaps plus the existing duplicate `8gg-oJr4dTY` occurrence.

### Verification

- `npm run lint:fix` — passed; Biome reported 217 checked files.
- `npm run youtube:library -- status` — passed; all overviews and the author
  synthesis are current, with only `CgsWxRUY5Eo` pending.
- `npm run youtube:library -- audit` — passed: 157 tracked videos, 166 manifest
  occurrences, 142 transcripts, and 142 summaries. The existing
  `8gg-oJr4dTY` duplicate remains a notice only.
- Required Node test suite — 51 tests passed.
- `npm run check` — passed with 0 errors, warnings, or hints.
- `npm run build` — passed; 26 static pages built.
- Both source-only boundary searches returned no matches.
- `git diff --check` — passed.

### Commits

- `7d322b0` — Sync Antirez and AI Engineer playlists
- `01c5830` — Capture new playlist transcript state
- `0150b58` — Correct Emulated transcript names
- `f6acc2f` — Update playlist editorial coverage
