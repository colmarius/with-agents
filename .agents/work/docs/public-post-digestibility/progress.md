# Progress

## 2026-07-31 — Audit and plan complete

- Started from clean `ai-engineer-videos` at
  `ef1b62cbc58ddad3020bfe629f764a80b9feaa57` with no existing work items.
- Loaded the article-writing and agent-work contracts.
- Oracle and three independent read-only audits reduced the proposed broad rewrite
  to finding-gated edits. Behavior, measurement, and small-threads stay untouched;
  prove-it receives only two fragment fixes.
- Recorded exact anti-flattening boundaries, the cuts-only Amp rule, and explicit
  reader-first canonical versus talk-first extended-deck divergence.
- Next action: Task 2 homepage and stale-fragment fixes.

## 2026-07-31 — Tasks 2–5 complete

- Added the eighth homepage core-entry card for **Measure Outcomes, Not Agent
  Activity** and one `measure delivered outcomes` clause in commit `07b86a3`.
  The post and its truthful `pubDate: 2026-07-31` remained unchanged. The posts
  index already lists it first and required no edit.
- Repaired the only two stale public heading fragments in the same commit. Both
  now resolve to
  `#evidence-keeps-judgment-attached-to-the-diff`; the numeric image-slide `#1`
  hash remains an intentional client-side slide state.
- Removed repeated recaps in commit `76d15d7`:
  - `agentic-coding-2026`: 2,131 → 1,825 body words (-306, -14.4%); eight
    headings preserved. Removed duplicate opening navigation, throat-clearing,
    recap sentences, and a final summary already represented by the reader-path
    table. Surviving claims retain their anchors and caveats.
  - `amp-factory-era-case-study`: 2,307 → 2,246 body words (-61, -2.6%);
    eight headings preserved. The diff contains only two whole-paragraph
    deletions of uncited synthesis already represented by the final contracts;
    no surviving Amp product claim changed.
- Simplified the reader-first canonical durable-context article in commit
  `24898b7`: 2,896 → 2,385 body words (-511, -17.6%) and 20 → 15 headings.
  Adjacent intent/alignment/comprehension, model-memory, and portability framing
  now shares fewer sections. Noperator, Maggie Appleton, Addy Osmani, and Simon
  Willison retain separate attributed roles. The keep/expire filter, repo-memory
  stack, evidence ladder, before/after table, image-deck link, and byte-identical
  Sources appendix survive.
- The extended deck's content and the image deck stayed unchanged. Both canonical
  and extended maintenance notes now record reader-first versus talk-first
  granularity. Oracle's only optional final observation—clarify that source
  framing intentionally crosses the checkpoint seam—was accepted in `dec2892`.
- Promoted one reusable rule in `c38826b`: a 30-second skim through title,
  description, headings, slide messages, and one practical artifact should expose
  the reader job, argument, and next action. Root `AGENTS.md` was not changed.
- Final Oracle recommendation: **approve**. It independently verified the scoped
  files, homepage claim mapping, fragments, Amp deletions, map cuts, distinct
  durable-context source roles, must-survive artifacts, unchanged Sources
  appendix, extended-deck boundary, and reusable skill rule. No material finding
  remained.
- Verification passed:
  - `npm run lint:fix`: 211 files, no fixes.
  - `npm run content:guard`: 152 videos, 5 playlists, 46 tracked public
    references, 26 resources, and 51 public summaries; the known duplicate
    occurrence was reported without mutation.
  - `npm run check`: 39 files, 0 errors, warnings, or hints.
  - Isolated `npm run build`: 22 pages. One earlier parallel build raced with
    `astro check` over Astro's shared cache rename; rerunning it alone passed and
    produced no repository change.
  - Built-fragment audit: both heading fragments resolve; numeric slide-state
    hashes are deliberately excluded.
  - Browser checks: homepage has eight cards at desktop and mobile with no page
    overflow; measurement is first on `/posts`; edited article routes have no
    broken images or horizontal overflow; all 7 Agentic Coding, 7 Amp, and 14
    canonical durable-context slides have coherent headings and no measured
    horizontal or vertical overflow.
  - Full-page screenshots confirmed the balanced desktop grid and readable mobile
    card stack; article and slide screenshots showed no content-layout regression.
- No new article, resource, date field, source-library mutation, schedule, root
  guidance edit, or image-deck edit occurred. All tasks are complete.
