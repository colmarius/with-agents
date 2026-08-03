# Parallel-Work Admission Article Plan

Verify the candidate source anchors, write a concise article around one
pre-launch admission record, review it adversarially for evidence and overlap,
then publish only if it remains distinct from the existing series.

## Goals

- Give tech leads a practical decision procedure for admitting and integrating
  parallel agent work.
- Convert the strongest cross-video evidence into a durable synthesis without
  presenting vendor demonstrations as established operating results.
- Add clean internal links that clarify ownership between the field guide,
  per-lane procedure, proof stack, measurement framework, and product case study.

## Tasks

- [x] **Task 1: Verify the source plan**
  - Scope: `src/content/youtube/videos/{X4BwOu0GWb8,xIt_mTQp6mY,ow1we5PzK-o,2TLXsxkz0zI,ClWD8OEYgp8,F_RyElT_gJk,Lue8K2jqfKk,VktrqzQgytY}/`, `.agents/work/docs/parallel-work-admission/research.md`
  - Depends on: none
  - Acceptance:
    - Every candidate anchor is checked against the full adjacent transcript context and its specific claim is confirmed, narrowed, or removed in `research.md`.
    - Speaker and affiliation boundaries match the source title, transcript, or reviewed summary without inference from the uploader.
    - The two load-bearing anchors—Banks's task-class distinction and Mistele's review-backpressure rule—remain supported; otherwise the work item is marked blocked and the article is not drafted.
  - Notes: Do not sync or modify the source-only YouTube library. Optionally evaluate `rnDm57Py54A` only if a source gap remains.

- [x] **Task 2: Draft the article and admission record**
  - Scope: `src/content/posts/parallel-agents-need-an-admission-policy.md`
  - Depends on: Task 1
  - Acceptance:
    - Frontmatter matches `src/content.config.ts`, starts with `draft: true`, and uses the next appropriate public order.
    - The body contains 4–6 substantive sections plus exact `## Sources used`, with each normal section beginning with a concise slide-message blockquote.
    - The article stays centered on admission and integration capacity and contains one standalone parallel-work admission record.
    - Every factual claim has a matching source anchor; synthesis, presenter reports, demonstrations, and forecasts are explicitly labeled.
    - The draft does not restate the proof stack, work-item mechanics, measurement evidence, factory overview, or Amp product details.
  - Notes: Target roughly 1,500–1,900 words. Suggested five-section outline: admission decision; serial mutation/parallel discovery; isolation and declared collisions; backpressure and cancellation; named integration ownership plus artifact.

- [x] **Task 3: Run an adversarial editorial review**
  - Scope: new post, all cited transcripts, `src/content/posts/{agentic-coding-2026,small-threads-durable-state,make-the-agent-prove-it,amp-factory-era-case-study,measure-outcomes-not-agent-activity,behavior-over-explanation}.md`
  - Depends on: Task 2
  - Acceptance:
    - Source-to-claim review finds no unsupported universalization, affiliation drift, forecast presented as fact, or quantitative claim outside its evidence boundary.
    - Overlap review confirms the reader job can still be stated as deciding whether and how one task fans out before per-lane work begins.
    - The artifact is usable without reading another post, and removing it would materially weaken the article.
    - High-value review findings are applied before publication; unresolved blockers leave the post at `draft: true` and the work item blocked.
  - Notes: Consult Oracle for the finished-draft review because the source boundaries and overlap risks are subtle.

- [x] **Task 4: Publish, cross-link, and verify**
  - Scope: new post and at most two existing posts that gain a clear inbound-reader route; work-item files
  - Depends on: Task 3
  - Acceptance:
    - Set `draft: false` only after Task 3 passes.
    - Add no more than two inbound links, each with a distinct reader-routing purpose; avoid broad series rewrites.
    - `npm run content:guard`, `npm run check`, `npm run build`, and `git diff --check` pass.
    - Article and slide routes build, internal links resolve, and source-only YouTube content remains absent from `dist`.
    - `progress.md` records word count, source review, Oracle findings, verification, and any retained caveats; `index.md` is completed with no unresolved publication question.
  - Notes: Run a targeted formatter only if the repository supports Markdown formatting; do not make unrelated formatting changes.

## Implementation Notes

Keep the operating model simple:

```text
classify task → name constraint → set cap → isolate lanes
             → cancel stale work → integrate once → prove combined result
```

The article should answer a pre-launch decision, not describe a control-plane UI.
Use serial mutation as the conservative default when shared-state overlap is not
controlled. Treat isolation as necessary but insufficient: independent branches
still require selection, reconciliation, and one accountable integration owner.

## Constraints / Decisions

- Working title: `Parallel Agents Need an Admission Policy`.
- Working post slug: `parallel-agents-need-an-admission-policy`.
- Center: admission and integration capacity.
- Deferred topic: attention-aware multi-agent control planes.
- The admission record and task taxonomy are author synthesis.
- No universal WIP number, throughput forecast, control-plane comparison, or
  claim that parallel agents outperform a serial workflow.
- No source-library sync, capture, or editorial mutation belongs in this work
  item.

## Acceptance Criteria

- The article fills a reader job not owned by any current post.
- The two load-bearing source anchors survive transcript review.
- The practical artifact is concise, pre-launch, and independently usable.
- Vendor reports and demonstrations remain bounded by explicit caveats.
- Public content and slide conventions pass all repository checks.

## Verification

- `npm run content:guard`
- `npm run check`
- `npm run build`
- `git diff --check`
- Confirm both `dist/posts/parallel-agents-need-an-admission-policy/index.html` and
  `dist/posts/parallel-agents-need-an-admission-policy/slides/index.html` exist.
- Confirm `dist` contains no `src/content/youtube` path or source-only publication
  marker.
