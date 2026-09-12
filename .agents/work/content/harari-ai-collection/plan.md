# Harari collection integration

## Outcome and boundaries

Provide `/resources/ai/yuval-noah-harari` as an explicitly editorial collection of the four user-supplied recordings. Use existing section routes and standalone resource/summary joins. Do not invent playlist identity, extend tracked-source obligations, duplicate records, or broaden into unreviewed channel backfill.

## Tasks

- [x] Discover official channel/site/playlist sources and consult Oracle on representation.
- [x] Capture all four transcripts; use two independent high-mode orbs for disjoint summary writing.
- [x] Integrate and review four summaries and canonical records, with correct publisher dates, speaker attribution, caption disclosures and linked source ranges.
- [x] Add the AI section and official discovery links; test exact identity, membership, standalone joins and rendered navigation.
- [x] Run formatting, check, content guard, summaries check, build and post-build tests; inspect desktop and narrow browser renders and exercise four summary links.
- [ ] Commit the coherent work, request final Oracle review and address actionable findings with verified follow-up changes.
- [ ] Record final outcome, commit completed work snapshot, close the work item in a separate removal commit and return a short summary.

## Verification

Expect 19 AI resources, four in the Harari section. All existing AI sections retain their five IDs. Each new source has one canonical video record, standalone summary and matching transcript. Source URLs and publication dates must match original YouTube metadata. Official discovery links are not represented as reviewed/summarized playlist entries. All new summary links resolve with a Harari parent link and no fabricated series/collection pagination.

Observed: formatting clean, Astro check 0 errors/warnings/hints, content guard passed (288 summaries), timestamp check passed (288 files), build 339 pages, and all 115 post-build tests passed with no skips. The new corpus assertion initially omitted summary links' established trailing slash; corrected the test expectation. Browser clicked all four summary links and observed correct titles, caption disclosures and resource-specific parent anchors. Desktop and 390px renders inspected; discovery links wrap without overlap, page width equals viewport, and Business & adoption filters to resource 125 alone (1 of 4). Existing mobile search placeholder truncation and low-contrast selected topic styling are unchanged.
