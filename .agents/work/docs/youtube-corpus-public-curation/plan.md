# YouTube corpus public curation plan

Convert the completed source-only playlist corpus into a small, reviewed public
surface and promote only the workflow rules that proved generally reusable.

## Goals

- Ensure existing public claims are backed by deliberately reviewed source
  artifacts.
- Add a minimal curated orientation to the broad Coding Agents playlist.
- Publish or extend articles only when a distinct reader job survives an overlap
  review.
- Reduce future structural verification effort without automating editorial
  judgment.
- Remove superseded completed work-item directories only after their durable
  context is safely represented elsewhere.

## Tasks

- [ ] **Task 1: Reconcile publicly referenced source summaries**
  - Scope: the 14 publicly referenced Antirez `src/content/youtube/videos/*/summary.md`
    files, their transcripts and metadata, the three publicly represented
    reviewed AI Engineer source summaries, matching files under
    `src/content/posts`, `src/content/summaries`, `src/data/resources`, and
    work-item progress
  - Depends on: none
  - Acceptance:
    - Recompute the exact public-reference set from tracked manifest IDs rather
      than relying on the recorded count.
    - Deliberately review every publicly referenced Antirez summary against its
      committed transcript, metadata, manifest provenance, and adjacent public
      claims; make source-faithful corrections where necessary and set an
      artifact to `reviewed` only after it passes.
    - Compare the Appleton, Zechner, and Liu public summaries/resources/posts
      against their reviewed source summaries and record explicit keep/fix/block
      decisions.
    - Correct public prose only when a material discrepancy is established; do
      not broaden the task into a general article refresh.
    - Record every changed artifact, retained ambiguity, and public-impact
      decision in `progress.md`.
  - Notes: English Antirez wording is translation/paraphrase of Italian
    auto-captions and must never be presented as a verbatim quotation.

- [ ] **Task 2: Review Antirez syntheses and sample the remaining corpus**
  - Scope: two Antirez playlist overviews, `authors/antirez.md`, ten
    manifest-stratified unreferenced summaries and sibling transcripts,
    work-item research/progress
  - Depends on: Task 1
  - Acceptance:
    - Review every claim, source anchor, `coveredVideoIds` entry, translation
      disclosure, and chronology statement in both overviews and the author
      synthesis.
    - Review a deterministic ten-summary sample spanning both playlists,
      publication dates, conceptual material, coding workflows, and systems
      experiments.
    - Record material/minor defect counts and decide explicitly whether a full
      78-summary review is justified.
    - Promote only artifacts that pass their own dedicated review; never
      bulk-change status as a mechanical operation.
  - Notes: Any repeated translation, attribution, timestamp, or unsupported
    certainty pattern triggers a plan update before broader public work.

- [ ] **Task 3: Add public-source and resource-manifest guards**
  - Scope: root/content guidance, focused tests or scripts under `.agents`,
    `package.json` only if a command is warranted
  - Depends on: Task 1
  - Acceptance:
    - Document that public content may cite a tracked source summary only when it
      is `reviewed` or an explicit exception is recorded.
    - Add a read-only check that extracts tracked YouTube IDs from public posts,
      summaries, and resources and enforces that rule without rejecting public
      sources outside the tracked library.
    - Add resource-manifest validation for duplicate raw JSON keys, unique IDs,
      valid dates and enums, and public-summary `resourceId` alignment.
    - Focused tests prove both failure and success cases.
  - Notes: Keep exceptions explicit and small; do not silently promote source
    summaries to make a check pass.

- [ ] **Task 4: Add a curated Coding Agents playlist orientation**
  - Scope: `src/data/resources/coding-with-agents.json`, one matching file under
    `src/content/summaries/coding-with-agents/`, reviewed Coding Agents source
    summaries and overview
  - Depends on: Task 3
  - Acceptance:
    - Add exactly one playlist-level resource entry and one aligned guided public
      summary.
    - Present AI Engineer as curator/source channel, not author.
    - Offer a human-curated route through approximately 8–12 talks organized by
      reader questions; reuse links to existing Appleton, Zechner, and Liu public
      artifacts where useful.
    - Avoid hard-coded active-playlist counts and avoid one-entry-per-video
      expansion.
    - Every public claim resolves to reviewed source evidence and passes the
      article/resource house style and source-anchor checks.
  - Notes: Do not add separate bounded-track playlist resources in this task.

- [ ] **Task 5: Decide whether to extend an article or create a new one**
  - Scope: all current public posts, reviewed AI Engineer overviews/summaries,
    work-item research/progress
  - Depends on: Tasks 1 and 4
  - Acceptance:
    - Compare the proposed team-level outcome-measurement thesis section by
      section against the field guide, proof stack, durable-context, small-thread,
      Amp case-study, and Antirez behavior articles.
    - Record one decision: new article, minimal extension to one existing
      article, or no article.
    - A new article is allowed only if it owns the team/adoption measurement
      reader job and can keep non-vendor evidence, vendor claims, and editorial
      synthesis visibly distinct.
    - Record a title, thesis, source map, non-overlap statement, target length,
      and internal-link role for the selected path.
  - Notes: Recommended candidate is “Measure outcomes, not activity”; the title
    may change during the editorial pass.

- [ ] **Task 6: Implement the selected article outcome**
  - Scope: at most one new or existing public post, deliberate resource/internal
    links, work-item progress
  - Depends on: Task 5
  - Acceptance:
    - Implement only the Task 5 decision; do not opportunistically refresh other
      posts.
    - Follow the article-writing contract, including slide-message blockquotes,
      source anchors, commercial-interest caveats, synthesis labeling, route and
      internal-link checks, and concise length.
    - If Task 5 selects no article, record that decision and complete this task
      without a no-op content commit.
    - Run content checks, build, route inspection, and source-boundary checks.
  - Notes: Article prose remains human-curated editorial work from reviewed
    sources; do not generate it mechanically from overviews.

- [ ] **Task 7: Decide the reliability article and harden library review tooling**
  - Scope: Agent Reliability source artifacts, maintenance skill, reusable
    read-only corpus audit, metadata formatting path, work-item progress
  - Depends on: Tasks 2 and 6
  - Acceptance:
    - Record an explicit publish/defer decision for a reliability-stack article
      based on distinctness and the claim-to-caveat burden; implement it only in
      a separately planned follow-up if warranted.
    - Add a reusable dedicated editorial-review checklist to the maintenance
      skill.
    - Replace repeated one-off structural checkers with the smallest reusable
      read-only audit that proves derived state, provenance, anchors, coverage,
      overlap, and attribution mode without evaluating prose quality.
    - Resolve or explicitly decide the canonical formatting of the eight
      recurring Antirez unavailable-caption metadata files so routine lint no
      longer creates unexplained churn.
  - Notes: Keep playlist-specific batch sizes and speaker caveats in work-item
    context rather than global skill rules.

- [ ] **Task 8: Run final editorial review and clean completed work items**
  - Scope: all changes from this plan, `.agents/work/**`, final work-item state
  - Depends on: Tasks 1–7
  - Acceptance:
    - Run an Oracle review of the final public/editorial and workflow outcomes;
      address high-confidence issues within scope.
    - Verify the complete public/source boundary, resource alignment, source
      statuses, links, routes, tests, check, build, and clean Git state.
    - Inventory every completed work item, search live references, and identify
      whether its unique durable context exists in current guidance, skills,
      code, tests, public artifacts, or this work item.
    - Remove only completed, unreferenced, superseded work-item directories in a
      separate cleanup commit. Preserve active/blocked work and record removed
      paths plus Git recovery guidance.
    - Mark this work item completed only after the final gate passes; keep its
      directory until a later cleanup decision.
  - Notes: Git history is the archive. Deletion is not permission to remove
    source-library, public-content, skill, or code artifacts.

## Implementation Notes

- Keep source review, tooling, resources, articles, workflow guidance, and
  cleanup as separate reviewable commits.
- Prefer one mutating owner at a time. Read-only editorial or plan reviews may be
  delegated only when they can inspect the current branch state.
- Public posts and resources remain human-curated. Scripts may validate
  structure and provenance but must not write or promote editorial prose.
- The source-only YouTube tree must remain absent from Astro collections,
  application imports, and production output.
- A playlist removal never authorizes deletion of its global video directory.
- Do not create a recurring schedule without explicit user approval.

## Constraints / Decisions

- Broad playlists are research and monitoring inputs, not a public feed.
- Fewer, higher-signal public artifacts are preferred over preserving every
  useful source as a resource entry or post.
- Existing public AI Engineer resources remain unless source reconciliation
  finds a material issue.
- Coding Agents gets at most one playlist-level resource in the initial public
  slice.
- The outcome-measurement article and reliability article are decision gates,
  not predetermined publication commitments.
- Completed work-item cleanup happens only after live-reference and durable-rule
  audits.

## Acceptance Criteria

- Every tracked source ID referenced publicly is deliberately reviewed or has an
  explicit, documented exception.
- The public resource hub gains no more than one playlist-level entry from this
  corpus unless the plan is explicitly revised.
- Any article change has a distinct reader job and uses reviewed, visibly
  attributed evidence.
- Reusable guards reduce future citation, resource, and corpus-audit risk without
  automating editorial decisions.
- Removed work items are completed and superseded, with recovery available from
  Git history.

## Verification

- `npm run lint:fix`
- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- New focused tests introduced by Tasks 3 and 7
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` returns no matches
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist` returns no matches
- Public tracked-ID citation/status audit
- Resource manifest/summary alignment audit
- Internal route and source-anchor checks
- `git diff --check`
- `git status --short --branch`
