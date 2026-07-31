# Progress

## 2026-07-31 — Implementation started

- Created and committed the work-local evidence matrix and implementation plan at
  `d226283` from clean branch `ai-engineer-videos`.
- Began the in-place article refresh. The scope remains one existing public post,
  one durable article-writing contract update, this work item, and the separately
  approved deletion of the completed predecessor work item.
- No resource entry, new article, YouTube source-library artifact, schedule,
  frontmatter schema, or broad research database is in scope.
- Next action: verify source wording, formatting, article/slide rendering, and
  content guards before checking Tasks 1–3.

## 2026-07-31 — Tasks 1–3 complete

- Refreshed the existing article in `e34c0f0` without changing its title, route,
  frontmatter, five-section shape, or reader job. Word count fell from 1,653 to
  1,621 words despite adding primary research and a stronger pilot contract.
- The body now:
  - keeps the Denisov-Blanch 30–40% gross / 15–20% after-rework range exactly
    once as conference-presented, observational, non-reproducible from the talk,
    and not a benchmark;
  - contrasts bounded positive randomized workplace evidence with METR's bounded
    slowdown and later selection/concurrency failure instead of proposing one
    replacement uplift;
  - makes current single-company review displacement explicit while preserving
    observational, target, and short-horizon-quality limits;
  - uses DORA, Intercom, and Anthropic only for bounded qualitative, operating,
    and immediate-comprehension guardrails;
  - predeclares unit, denominator, comparison, window, selection integrity,
    concurrent changes, delayed quality, review capacity, and five possible pilot
    decisions: expand, constrain, redesign, stop, or inconclusive.
- Added the reusable empirical-claim contract in `bb61768`: name design, outcome
  layer, setting/time, and material affiliation for load-bearing claims; do not
  promote presenter/vendor/observational figures into benchmarks; keep stronger
  evidence within its treatment and outcome limits; refresh event-driven; and do
  not turn curated resources into a paper database.
- First independent adversarial review found an intermediate 28% length increase,
  missing Cui/DORA affiliation disclosures, an unearned 30–90-day prescription,
  a benchmark wording loophole, and ambiguous minimum instrumentation. All were
  remediated before commit: the final article is shorter than its parent, sources
  disclose Microsoft/vendor and Google-program roles, follow-up is system-suited
  and predeclared, no figure is transferable, and the pilot chooses one primary
  outcome plus relevant guardrails.
- Final Oracle review approved the article and skill contract with no material
  finding. Its sole low-severity verification request was closed against the
  primary pages: Hao He is the first author of the enterprise preprint; Judy
  Hanwen Shen and Alex Tamkin authored the Anthropic study; Becker et al. authored
  the METR study.
- Verification passed:
  - `npm run lint:fix`: 211 files checked, no fixes.
  - `npm run content:guard`: 152 videos, 5 playlists, 46 tracked public
    references, 26 resources, and 51 public summaries; the known duplicate
    manifest occurrence was reported without mutation.
  - `npm run check`: 39 files, 0 errors, warnings, or hints.
  - `npm run build`: 22 pages, including article and slide routes.
  - Browser review of the local article and five-slide deck: correct headings,
    no overflow, no broken images, and no layout regression. Screenshots showed
    only the expected Astro development toolbar overlay.
  - `git diff --check`: clean.
- Task 4 deletion audit: Oracle approved deletion after confirming the predecessor
  is completed, durable rules were promoted, and no live inbound references exist
  outside the directing Task 4 plan. Next action: commit this record, then delete
  only that completed directory in a separate recoverable commit.
