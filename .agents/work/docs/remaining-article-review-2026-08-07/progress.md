# Progress

## 2026-08-07 — Baseline and scope

- Reviewed recent main-branch history and the prior Amp editorial thread.
- Confirmed the completed pattern: the field guide fell from 2,188 to 1,726 words
  and the Amp case study from 2,423 to 1,744 words while preserving their distinct
  jobs.
- Scoped six untouched public articles for editing and retained the recently
  tightened field guide as a ranking/review input.
- Recorded initial body word counts in `research.md`.

## 2026-08-07 — Make the Agent Prove It

- Oracle recommended keeping the article but separating execution boundaries,
  behavioral evidence, evidence packaging, and human judgment.
- Rebuilt the six-layer stack into a chronological acceptance contract and corrected
  conformance versus differential-compatibility terminology.
- Reduced the body from 1,906 to 1,208 words while retaining the risk table, proof
  artifacts, boundary questions, reviewer questions, and reusable prompt.
- `git diff --check -- src/content/posts/make-the-agent-prove-it.md` passes.

## 2026-08-07 — Small Threads, Durable State

- Oracle recommended keeping the article and consolidating it around restart state,
  bounded handoffs, one implementation owner, and the final procedure.
- Corrected the public dot-agents contract: only `index.md` is required, progress is
  chronological rather than authoritative current state, and one active
  implementation thread owns a work item.
- Replaced repository-specific handoff and commit instructions with generic review-
  unit and durable-state contracts.
- Reduced the body from 1,682 to 1,144 words.
- `git diff --check -- src/content/posts/small-threads-durable-state.md` passes.

## 2026-08-07 — Behavior Over Explanation

- Oracle recommended keeping the article but replacing the absolute "behavior
  decides" framing with behavior under a discriminating test.
- Added a falsifiable explanation-audit artifact and kept the intervention,
  ablation, coding-agent, review, and attention examples within their evidence
  boundaries.
- Removed corpus-management metadata and operating-policy material owned by the
  proof and parallel-admission articles.
- Reduced the body from 1,303 to 970 words.
- `git diff --check -- src/content/posts/behavior-over-explanation.md` passes.

## 2026-08-07 — Measure Outcomes, Not Agent Activity

- Oracle recommended keeping the article as the organization-level measurement owner.
- Corrected the METR historical/current boundary, made Anthropic's population and
  task explicit, and tightened Cui and He affiliation/context disclosures.
- Removed repeated metric lists and non-load-bearing presenter/qualitative
  corroboration while preserving the signal table, segmentation, scorecard, and all
  rollout decisions.
- Added explicit predeclared thresholds and observation-window requirements.
- Reduced the work-item body count from 1,572 to 1,408 words; the source-heavy
  article intentionally retains more than the default target because its empirical
  boundaries are load-bearing.
- `git diff --check -- src/content/posts/measure-outcomes-not-agent-activity.md`
  passes.

## 2026-08-07 — Agent-Ready Interfaces

- Oracle recommended keeping the article as the architectural interface-design owner
  while reducing its eight-source product tour.
- Consolidated the article around six contracts: composition, inspectable/scoped
  state, faithful/actionable feedback, recovery, narrow mutation, and human return.
- Removed non-load-bearing simulator, compiler, language-server, prompt-count, and
  duplicate recovery examples; compressed the checklist from ten rows to six.
- Tightened the low-fidelity and access-control claim boundaries.
- Reduced the body from 1,947 to 1,284 words.
- `git diff --check -- src/content/posts/agent-ready-interfaces.md` passes.

## 2026-08-07 — Parallel Agents Need an Admission Policy

- Oracle recommended keeping the pre-launch gate and centering the article on its
  classifier, admission record, downstream cap, cancellation, and owner.
- Corrected the mixed-axis taxonomy and changed "integrate once" to serialized
  integration, preserving the distinction between independent and competing work.
- Added the named constraint and whole-queue WIP semantics to the admission record.
- Removed orchestration-product and speculative pre-merge detours plus unused sources.
- Reduced the body from 1,901 to 1,425 words.
- `git diff --check -- src/content/posts/parallel-agents-need-an-admission-policy.md`
  passes.

## 2026-08-07 — Agentic Coding in 2026

- Oracle found the recently tightened field guide coherent and requested no further
  compression.
- Added the missing organization-level measurement article to the navigation table.
- The final portfolio review ranks the guide 5 of 9 and recommends keeping it as the
  standalone map.
- Work-item body count moved from 1,683 to 1,700 words for the one table row.
- `git diff --check -- src/content/posts/agentic-coding-2026.md` passes.

## 2026-08-07 — Portfolio ranking and verification

- Final Oracle portfolio review recommends keeping all nine while Amp remains an
  explicit subject. If the series must shrink to seven, unlist the dated Amp case
  study and merge the behavior article's discriminating-test method into the proof
  article before unlisting it.
- Final Oracle QA of the complete diff returned `Approve` with no required fixes.
- `npm run lint:fix` — passed; Biome fixed one Markdown formatting issue.
- `npm run check` — passed with 0 errors, warnings, or hints.
- `npm run build` — passed; 26 pages built.
- `npm run content:guard` — passed; existing duplicate-manifest notice remains
  informational.
- `git diff --check` — passed.
- Rendered-route proof through the orb portal — passed for all seven changed posts:
  each route loaded with the expected title and headings, tables and fenced blocks
  rendered as HTML, no raw Markdown or horizontal overflow was detected, and the
  field guide's new measurement link resolved to the expected article.
