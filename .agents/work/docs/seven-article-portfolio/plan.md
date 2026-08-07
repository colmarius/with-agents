# Seven-article public portfolio plan

Consolidate overlapping proof guidance, preserve both secondary article routes, and
present seven distinct articles through the site's primary navigation.

## Goals

- Keep one clear owner role for every listed article.
- Preserve existing Behavior and Amp case-study URLs while removing them from the
  primary portfolio.
- Move only the reusable discriminating-test method into the proof article.

## Tasks

- [x] **Task 1: Consolidate the discriminating-test method**
  - Scope: `src/content/posts/make-the-agent-prove-it.md`
  - Depends on: none
  - Acceptance:
    - The proof article distinguishes a runnable check from a discriminating check.
    - A compact explanation-audit artifact and adjacent source support are retained.
    - The article remains a focused acceptance contract rather than a combined source
      survey.

- [x] **Task 2: Unlist secondary articles and update primary navigation**
  - Scope: `src/content/posts/behavior-over-explanation.md`,
    `src/content/posts/amp-factory-era-case-study.md`,
    `src/content/posts/agentic-coding-2026.md`, `src/pages/index.astro`
  - Depends on: Task 1
  - Acceptance:
    - Behavior and Amp use the established `unlisted: true` convention.
    - The posts index and homepage present seven retained articles.
    - Field-guide navigation consolidates explanation-versus-behavior into the proof
      article and no longer recommends the Amp case study.
    - Existing direct article and slide routes remain generated.

- [x] **Task 3: Review and verify the reduced portfolio**
  - Scope: all touched files and rendered post routes
  - Depends on: Tasks 1–2
  - Acceptance:
    - Oracle approves the merged article and seven-role portfolio or required fixes
      are applied.
    - Lint, Astro check, build, content guard, and diff checks pass.
    - Browser proof confirms seven listed posts and working unlisted article/slide
      routes.

## Implementation Notes

- Keep source-context links from playlist summaries and specialist articles when the
  unlisted article is genuinely the subject; remove only primary portfolio routing.
- Do not add archival notices unless an existing site pattern requires them.
- Prefer a concise addition to the proof article over moving the behavior article
  wholesale.

## Constraints / Decisions

- Do not delete, draft, rename, or redirect either unlisted article.
- Preserve exact source boundaries and translation disclosures in the standalone
  behavior article.
- Keep homepage entry points aligned with all seven retained article roles.

## Acceptance Criteria

- Exactly seven posts are listed in the public posts index.
- The homepage links all seven retained articles and no unlisted article.
- The field guide routes behavioral-proof questions to `Make the Agent Prove It`.
- Both unlisted article and slide routes build successfully.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `npm run content:guard`
- `git diff --check`
- Browser proof through the orb portal
