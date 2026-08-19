# Refresh Amp research and related articles

Bring reusable Amp research and load-bearing public product claims up to date
with first-party sources published through 2026-08-19.

## Goals

- Correct stale canonical product details in reusable research.
- Incorporate only new evidence that materially strengthens the Amp case study.
- Verify the rendered article and obtain the requested Oracle review before
  shipping to `main`.

## Tasks

- [x] **Task 1: Refresh reusable Amp research**
  - Scope: `.agents/research/amp-orb-sizing.md`,
    `.agents/research/amp-orb-workflow-and-change-governance.md`
  - Depends on: none
  - Acceptance:
    - Current 60 GB orb disks and current subscription allowance wording replace
      stale details.
    - The four Chronicle items after 2026-08-16 are classified with explicit
      evidence and caveats.

- [x] **Task 2: Refresh the load-bearing article claims**
  - Scope: `src/content/posts/amp-factory-era-case-study.md`
  - Depends on: Task 1
  - Acceptance:
    - Teammate mentions are described as a collaboration entry point without
      implying ownership transfer or participant-scoped permissions.
    - The non-load-bearing education price detail is removed.
    - No unrelated public article changes and no broken internal links are
      introduced.

- [x] **Task 3: Verify and review**
  - Scope: all changed files and `/posts/amp-factory-era-case-study`
  - Depends on: Task 2
  - Acceptance:
    - `npm run lint:fix`, `npm run check`, `npm test`, `npm run build`, and
      `git diff --check` pass.
    - The affected article route renders correctly in a real browser.
    - Oracle reviews source fidelity, incorporation choices, article clarity,
      and the actual diff; material findings are resolved and reverified.

- [x] **Task 4: Finalize delivery state**
  - Scope: work-item state and Git history
  - Depends on: Task 3
  - Acceptance:
    - A final forced Chronicle refresh finds no unreviewed same-day item.
    - Completed metadata is reconciled and ready for the work-item snapshot and
      separate closeout-removal commits.
    - The current thread retains the user's explicit authority to push the
      resulting commits to `origin/main`.

## Implementation Notes

Keep dated announcements subordinate to current canonical documentation. The
word “pass” in the announcement title is framing; the source says teammates can
view, drive, and message, while the Manual still assigns costs to the owner.

## Constraints / Decisions

- Do not add a resource-manifest entry for dated product announcements.
- Do not update product-agnostic articles when the new source only duplicates
  stronger existing evidence.
- Do not preserve volatile prices in public prose unless they are load-bearing.

## Acceptance Criteria

- Reusable research reflects current first-party Amp sources as of 2026-08-19.
- Public prose makes no unsupported ownership or permission claim.
- The repository and rendered route pass their required checks.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm test`
- `npm run build`
- `git diff --check`
- Real-browser inspection of `/posts/amp-factory-era-case-study`
- Focused Oracle review of the final diff
