# AI grouping correction

## Decision and scope

The independent high orb and Oracle agree: keep three thematic sections and present Harari as subordinate editorial discovery within Implications & risks. The other 15 placements remain defensible; equal-sized groups are unnecessary. A synthetic parent using summary collection metadata would lose individual source ownership. A new cross-resource collection model or dedicated non-peer page is unnecessary for the requested correction.

Use a non-owning `featuredSelection` annotation referencing IDs 125–128. Validate unique, nonempty IDs belonging to the same section; resolve existing standalone summaries at build time. Preserve all summary/transcript files, original source metadata, and total count 19. Redirect the previously shared Harari route to the selection; preserve resource anchors when JavaScript is enabled and provide meta-refresh plus a visible fallback link.

## Tasks

- [x] Assess independent evidence and consult Oracle before choosing the implementation.
- [x] Move four assignments, render subordinate selection, and preserve the old entry URL.
- [x] Validate exact section sets 5/5/9, counts, invalid selection membership, source identities, search, navigation, and redirect output.
- [x] Run check, content guard, build then tests; verify desktop/mobile and filtered states, direct summary links and legacy redirect in a browser.
- [x] Prepare the verified implementation and completed snapshot for authorized commit and separate closeout.

## Evidence

The high orb inspected the transferred local source snapshot. Parent verified flat section generation in `src/pages/resources/[topic]/[section].astro`, peer navigation in `ResourcesNav.astro`, and per-resource summary grouping in `ResourceCatalog.tsx` / `summaryResolver.ts`. The reviewer did not test or inspect transcripts; this task does not change summary evidence. Baseline: zero Astro diagnostics, 339 pages, 115 passing post-build tests.

Final verification: zero Astro errors/warnings/hints, content guard passed (288 summaries), 339 pages built, 116 post-build tests passed with no skips, and formatting clean. Tests cover invalid selection IDs, exact membership, navigation, original URLs/publishers, summary search, counts and redirect exclusion. Browser verified 19 cards on All, 9 on Implications, Harari search 4 of 9 and interview-title search 1 of 9. Legacy route redirects to the selection and preserves #resource-127. All four selection links were clicked successfully with correct new summary backlinks. Desktop and 390px mobile captures inspected, including mobile filtered state; no overflow. Wrapped inline-link gaps found during browser checks were resolved using block targets, then all four links and both layouts were reverified.
