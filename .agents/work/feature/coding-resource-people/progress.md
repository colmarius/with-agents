# Progress

## Implemented

- Added five explicitly curated practitioners with two natural summary IDs
  each.
- Added a closed native disclosure on `/resources/coding-with-agents/` that
  resolves link titles and routes from the summary manifest.
- Added build-time failures for missing summaries and same-parent selections.
- Left thematic navigation, catalog search/topics, canonical records, summary
  schema, counts, and `ResourceCatalog.tsx` unchanged.

## Verification

- `npm run lint:fix`: passed; 437 files checked, one file formatted.
- `npm run check`: 56 files, 0 errors, 0 warnings, 0 hints.
- `npm test`: 96 passed, 0 failed.
- `npm run content:guard`: passed for 77 resources and 255 public summaries;
  retained the existing informational duplicate-manifest notice.
- `npm run build`: passed; 300 static pages built.
- Fresh authenticated real-browser session:
  - desktop closed state measured 58px high, retained 65-resource count, and
    had no horizontal overflow;
  - keyboard Enter expanded the native disclosure;
  - expanded desktop state contained five groups and ten direct links, kept
    catalog search visible at 1440×1100, and had no horizontal overflow;
  - mobile 390×844 rendered one column with no horizontal overflow;
  - direct child-summary navigation resolved to the expected summary article;
  - Coding subsection and Cloud catalog routes rendered no disclosure;
  - browser errors were empty in the fresh session.
- Inspected screenshot: `.amp/in/artifacts/featured-practitioners.png`.
- Supervised portal: `https://t-03grpv9h71wdk20xgzs8oilpl-p21796.onamp.dev/`.
