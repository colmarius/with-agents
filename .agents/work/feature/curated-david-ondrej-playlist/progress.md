# Progress

## 2026-08-07 — Approval and implementation start

- Human approved the five-video selection in the proposed editorial order.
- Human approved folding standalone resources 25 and 31 into one playlist card.
- Human explicitly approved English transcript and summary languages plus
  `multiSpeaker: true`.
- Oracle's planning review is incorporated in `research.md` and `plan.md`.

## 2026-08-07 — Implementation and review complete

- Added strict draft/reviewed playlist curation while retaining complete
  manifests for remote drift. The David Ondrej manifest contains 55 available
  videos; 5 are selected and 50 remain manifest-only.
- Capture, status, audit, and public-content checks scope editorial work to the
  reviewed selection. Standalone reuse is allowed only for reviewed curated
  memberships, and any overlapping uncurated membership still requires local
  library evidence.
- Reused the Dex Horthy and Thorsten Ball public transcript/summary chains.
  Captured and reviewed only the Matt Pocock, Kun, and Magnus Müller sources.
- Replaced standalone cards 25 and 31 with playlist resource 32. Its modal shows
  exactly five ordered items under “Selected videos” without episode prefixes;
  existing numbered series retain their “Episodes” labels and `Ep N` prefixes.
- Public-impact review: the playlist ID appears only in the intended consolidated
  resource; each selected video ID appears only in its intended public summary;
  all are `keep`. The resource date remains the latest selected publication
  date, and the resulting corpus totals of 30 resources and 59 summaries are
  intentional. No public post requires correction.
- Oracle requested fixes for force-capture reuse, reviewed-source gating,
  transcript substitutions, uncurated compatibility, and cross-playlist
  capture obligations. All findings were resolved; final Oracle verdict:
  `approve`.
- Verification passed:
  - 69 targeted Node tests.
  - `npm run youtube:library -- status` and `audit`.
  - `npm run content:guard`.
  - `npm run check` and `npm run build`.
  - Source-only build-boundary checks, transcript-body equality, Biome, and
    `git diff --check`.
  - Browser verification of `/resources/coding-with-agents`: one consolidated
    playlist card; five selected summaries in approved order; fifth summary
    selection and scrolling work; existing episode-series labels remain intact.
