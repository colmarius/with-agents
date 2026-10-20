# Fireship execution evidence

## Selection and public impact

- 2026-10-20: YouTube Data API resolved `@Fireship` to channel `UCsBjURrPoezykLs9EqgamOA` and uploads playlist `UUsBjURrPoezykLs9EqgamOA`.
- Selected check and authoritative sync completed with 856 manifest entries, all additions because this is the first sync. No existing entries were retitled, removed, moved, or changed.
- 52 entries fall within the approved Europe/Zurich date window. All 52 appear among the first 80 entries from `yt-dlp --flat-playlist https://www.youtube.com/@Fireship/videos`; none are marked live. No date-window upload was excluded.
- Literal public-impact search for all 856 video IDs and the playlist ID across posts, summaries, and resource manifests returned no matches. Decision: keep existing public content unchanged; add one new collection after evidence review. There are no duplicate public identities to migrate.
- Curation uses the user-approved date/type rule, newest first. English source/summary languages and Fireship author identity were explicitly approved. Placement is Coding only.

## Capture ledger

- All 52 selected IDs succeeded on attempt 1 using sequential `youtube:library capture --playlist fireship --limit 1` calls, with at least five seconds between captures. All tracks are English auto-generated captions. No media downloads, retries, fallback orbs, or pending IDs.
- The parent authored the first and final five summaries; a bounded worker authored the other 46 after reading their full transcripts. Oracle reviewed all 52 summary/transcript pairs, the overview, author synthesis, resource description, assessment, and public conversion. Corrections clarify flags and benchmark runs, restore source attribution, avoid unsupported mathematical precision, improve citations, simplify wording, and date the hacking-report chronology. Affected passages were reread before final validation.
- All 52 source summaries and both syntheses are reviewed. Public pages reuse authored prose with linked citation ranges extending through the complete final supporting chunk. Resource 184 owns all 52 children; only Coding lists it, at Context tier.

## Verification

- Catalog status, selected remote check, and selected sync completed successfully.
- `npm run lint:fix`: 535 files checked, no fixes. `npm run check`: 80 files, zero errors, warnings, or hints.
- `npm run content:guard`: passed, 412 public summaries. `npm run summaries:check`: 412 files passed. Existing duplicate-manifest notices and explicit standalone exceptions remain unchanged.
- `npm run build`: 511 pages. `npm test`: 152 passed, zero failed. The initial test run found the new DHH summary in search; its expected result list was updated to include the added content, then all tests passed.
- Library status: 52 captured, 52 reviewed, zero pending among selected IDs, current overview and author synthesis. Structural audit passed. Source-only boundary search found no imports from rendered code and no source-library files in `dist/`.
- Portal: `https://t-03h33kawswp5qis48lz6bwsn7-p22233.onamp.dev/`. Chromium opened the Coding Teams & Software Ecosystem card, followed Read Summaries, and navigated from the newest summary to the operating-systems summary. The sidebar has 52 links. Sequential browser fetch/DOM checks found all 52 pages with HTTP 200, matching titles, and Key ideas content; the AI catalog has no Fireship entry. No browser errors were reported.
- Inspected screenshots: `.amp/in/artifacts/fireship-resource.png`, `fireship-summary.png`, and `fireship-operating-systems.png`. Titles, prose, citations, and navigation are legible without horizontal clipping. Content continues below the viewport normally.
- No push, PR, external playlist mutation, or deployment. Captions, rather than audio or visuals, are the evidence basis; third-party allegations and benchmark claims remain attributed rather than independently verified.
