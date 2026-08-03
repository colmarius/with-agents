You are continuing the work item at:

`.agents/work/docs/parallel-work-admission/`

Read first:
1. `.agents/work/docs/parallel-work-admission/index.md`
2. `.agents/work/docs/parallel-work-admission/plan.md`
3. `.agents/work/docs/parallel-work-admission/research.md`
4. `src/content/posts/agentic-coding-2026.md`
5. `src/content/posts/small-threads-durable-state.md`
6. `src/content/posts/make-the-agent-prove-it.md`
7. `src/content/posts/amp-factory-era-case-study.md`
8. `src/content/posts/measure-outcomes-not-agent-activity.md`

Goal:
Write and publish a source-backed article that helps a tech lead decide whether
one task may fan out across parallel agents, what downstream constraint caps the
work, when attempts must be cancelled, and who owns final integration. The
article's distinct contribution is a fillable parallel-work admission record.

Current state:
Oracle has pressure-tested the candidate and recommended proceeding with
admission and integration capacity as the single center. The work item contains
an implementation-ready plan, candidate transcript anchors, evidence caveats,
scope boundaries, and publication stop conditions. No public article draft or
source-library mutation has started.

Implement only this slice:
- Execute Tasks 1–4 in `plan.md` in order.
- Verify every anchor directly against the transcript before using it.
- Draft with `draft: true`; publish only after the adversarial review passes.
- Keep the article vendor-neutral and centered on the pre-launch admission
  decision.

Scope limits:
- Do not sync, capture, edit, or otherwise mutate `src/content/youtube/`.
- Do not broaden into a control-plane product survey, general multi-agent future,
  Amp walkthrough, proof-stack recap, work-item tutorial, or adoption-metrics
  article.
- Add at most two inbound links from existing posts and only when they clarify a
  reader path.
- If either load-bearing source anchor fails transcript verification, stop before
  drafting and mark the work item blocked.

Progress contract:
- Update completed task checkboxes in `plan.md`.
- Create or append `progress.md` with source-verification decisions, changes,
  review findings, commands, results, blockers, and next action.
- Update `index.md` Status, Updated, Artifacts, Next Action, and Open Questions
  when they change.
- Preserve the working title only while it remains the clearest statement of the
  reader job.

Verification:
- Run `npm run content:guard`.
- Run `npm run check`.
- Run `npm run build`.
- Run `git diff --check`.
- Confirm article and slide routes exist in `dist` and source-only YouTube
  content remains absent.

Stop conditions:
- Stop if the Banks task-class distinction or Mistele backpressure rule is not
  supported by its full transcript context.
- Stop if the draft's reader job cannot be distinguished from the existing
  factory checklist in one sentence.
- Stop if an unresolved source, affiliation, publication, or overlap issue would
  require weakening a load-bearing claim.

Expected final response:
- Article thesis and practical artifact
- Files changed and internal links added
- Source and Oracle review outcome
- Verification results
- Work-item updates made
- Any caveats or remaining next action
