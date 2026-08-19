# AI Slop Article Plan

Publish a concise, source-backed article that gives experienced developers a
usable definition of AI slop without treating all AI-generated output as slop.

## Goals

- Explain AI slop as false completion in a broken responsibility loop.
- Give readers a practical test for intent, judgment, ownership, and hidden
  downstream burden.
- Distinguish responsible AI-assisted work and explicit handoffs from slop.
- Support the argument with a small set of precise primary-source anchors.

## Tasks

- [x] **Task 1: Draft the public article**
  - Scope: `src/content/posts/what-is-ai-slop.md`
  - Depends on: none
  - Acceptance:
    - The title is exactly “What Is AI Slop? When Generated Output Only Looks
      Finished,” with valid public-post frontmatter, a concise description,
      `pubDate: 2026-08-19`, relevant tags, `draft: false`, and a suitable order.
    - The opening uses Armin Ronacher's generated issue-report example to show a
      narrow observation buried under polished, speculative diagnosis.
    - Four to six substantive sections develop form outrunning intent, false
      completion, recipient cost, medium- and risk-specific ownership, software's
      delayed bill, and the practical test from `research.md`.
    - Each rendered `##` section starts with a concise blockquote slide message,
      and `## Sources used` remains a non-slide appendix.
    - The article stays roughly 1,000–1,500 words without padding and links to
      existing posts only where they add a distinct next step.
  - Notes: Start from `research.md`; do not turn the piece into a catalog of AI
    stylistic tells or a general argument against coding agents.

- [x] **Task 2: Audit the argument and source fidelity**
  - Scope: `src/content/posts/what-is-ai-slop.md`,
    `.agents/work/articles/demystifying-ai-slop/research.md`
  - Depends on: Task 1
  - Acceptance:
    - The definition requires a false readiness signal, a material deficit in
      intent, risk-appropriate judgment, or accountable ownership, and hidden
      downstream work; burden is a consequence rather than an independent score.
    - Charity Majors's time asymmetry is presented as a warning light rather than
      a universal formula, and explicit, bounded, agreed handoffs are not labeled
      slop merely because they transfer work.
    - Salvatore Sanfilippo is used as the affirmative counterexample: generated
      software can avoid slop when a person owns ideas, system understanding,
      quality, and behavioral evidence. English descriptions of his Italian video
      are clearly identified as paraphrase, not quotation.
    - Every external citation supports its adjacent claim, author synthesis is
      labeled where needed, and the article does not overclaim source positions.
  - Notes: Keep the load-bearing cast small: Caleb Gross for the mechanism, Simon
    Willison for the provenance boundary, Majors for attention and assurance,
    Ronacher for the concrete failure, and Sanfilippo for the counterexample.
    Mario Zechner and Dex Horthy may support the delayed software consequences.

- [x] **Task 3: Record and verify the implementation**
  - Scope: `.agents/work/articles/demystifying-ai-slop/index.md`,
    `.agents/work/articles/demystifying-ai-slop/plan.md`,
    `.agents/work/articles/demystifying-ai-slop/progress.md`, rendered route
    `/posts/what-is-ai-slop`
  - Depends on: Task 2
  - Acceptance:
    - The work item remains `in-progress` pending coordinator acceptance, links
      `progress.md`, and identifies coordinator review as the next action; completed
      task checkboxes match observed work.
    - `progress.md` records the article word count, source/link checks, exact
      validation commands and observed outcomes, and any remaining uncertainty.
    - Formatting, type/content checks, tests, and the production build pass.
    - The built article route is exercised in a real browser and visibly contains
      the selected title, opening argument, practical test, and sources appendix.
  - Notes: Leave the implementation as a reviewable commit. Do not push, deploy,
    close the work item, or remove its folder.

## Implementation Notes

Use the proposed six-part progression in `research.md`, but combine sections when
that makes the argument shorter. Lead with the concrete failure, state the
definition early, and finish with the four questions as a review tool rather than
a pseudo-quantitative score. Preserve the distinction between authorship and
ownership: prose usually warrants line-by-line reading, while software assurance
may come from a system model, targeted inspection, discriminating tests, QA, and
operational evidence scaled to risk.

The article's distinct job is diagnosis. Link to existing articles for durable
context, proof, and outcome measurement instead of repeating those workflows.

## Constraints / Decisions

- The selected title is “What Is AI Slop? When Generated Output Only Looks
  Finished.”
- AI provenance, generic style, output volume, and generation speed are not
  sufficient definitions of slop.
- A rough artifact is not slop when its incompleteness is explicit, bounded, and
  agreed.
- Do not publish an English translation of the captured Italian transcript or
  present editorial paraphrase as Sanfilippo's exact wording.
- Do not add a resource-manifest entry or public summary for the standalone video;
  this task implements the article only.

## Acceptance Criteria

- A reader can state why false completion, not AI authorship, is the discriminator.
- The article offers a practical intent, judgment, ownership, and burden test
  without flattening medium and risk differences.
- Counterexamples and qualifications prevent an anti-AI or raw-time reading.
- The article is publishable, source-backed, slide-compatible, and distinct from
  the site's existing workflow articles.
- The full repository validation and rendered-route browser check pass.

## Verification

- `npm run lint:fix` completes without leaving unintended changes.
- `npm run check` reports zero errors, warnings, and hints.
- `npm test` passes all tests.
- `npm run build` succeeds and emits `/posts/what-is-ai-slop` and its slides route.
- `git diff --check` reports no whitespace errors.
- A real-browser check of `/posts/what-is-ai-slop` confirms the selected title,
  section content, practical test, sources appendix, and working internal links.
