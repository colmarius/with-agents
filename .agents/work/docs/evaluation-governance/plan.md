# Your Coding-Agent Evals Need Change Control: Article Plan

Publish a source-backed article that gives teams a compact change-control method
for the evaluation suite behind a shared coding-agent stack.

## Goals

- Keep comparisons interpretable as models, prompts, harnesses, tools, skills,
  policies, environments, verifiers, and judges change.
- Give readers one practical artifact: a compact frozen-axis change-control
  table and per-change checklist.
- Fill the gap between per-change proof, agent-ready interfaces, and outcome
  measurement without repeating those posts.

## Tasks

- [x] **Task 1: Draft the bounded evaluation-governance article**
  - Scope: `src/content/posts/your-coding-agent-evals-need-change-control.md`
  - Depends on: none
  - Acceptance:
    - The frontmatter follows current post conventions, uses `order: 10`, and
      remains `draft: true` during editorial review.
    - The lead identifies the shared coding-agent stack and explicitly labels
      the source transfer from model, benchmark, and agent-product teams.
    - The article says when a deterministic test is enough before introducing
      versioned evaluation change control.
    - Each normal `##` section starts with a concise blockquote suitable for the
      generated slide view.
  - Notes: Aim for roughly 1,600–2,100 words. Do not expand into generic MLOps.

- [x] **Task 2: Make the frozen-axis artifact actionable**
  - Scope: `src/content/posts/your-coding-agent-evals-need-change-control.md`
  - Depends on: Task 1
  - Acceptance:
    - The article separates system, acceptance contract, and evaluator identity.
    - A five-row table enforces system change → frozen evaluator, evaluator
      change → frozen promoted system and new baseline, mixed change → split or
      make no comparative claim.
    - A compact checklist records versions, frozen axis, exposure, provenance,
      sanitization, variance, decision owner, rollback, and active/archive state.
    - Held-out, trace-promotion, judge-drift, and retirement caveats match the
      research without inventing universal thresholds or operating results.
  - Notes: Retirement means leaving the active gate, not deleting history.

- [x] **Task 3: Add only earned inbound navigation**
  - Scope: `src/content/posts/agent-ready-interfaces.md`,
    `src/content/posts/make-the-agent-prove-it.md`,
    `src/content/posts/durable-context-coding-agents.md`, and
    `src/content/posts/durable-context-coding-agents-extended-deck.md`
  - Depends on: Task 2
  - Acceptance:
    - Each edited post gains at most one contextual link at the exact ownership
      seam identified in the research.
    - Links distinguish interface mechanics, per-change proof, and durable
      deterministic checks from evaluation-suite governance.
    - The canonical durable-context post and extended deck keep their shared
      link set synchronized.
    - No backlink is added where it does not improve a reader's next step.
  - Notes: Do not add a link from `measure-outcomes-not-agent-activity.md` unless
    final review finds a real navigation gap.

- [x] **Task 4: Run adversarial editorial review and publish**
  - Scope: the new post and proposed inbound-link diff
  - Depends on: Tasks 1–3
  - Acceptance:
    - Oracle reviews the complete draft for source fidelity, transfer language,
      attribution, overlap, bounded use, exposure accounting, trace safety,
      retirement, and artifact usability.
    - Required feedback is applied or documented with a reason not to apply it.
    - The final article changes to `draft: false` only after the review finds no
      publication blocker.
  - Notes: Hold publication if the bounded-use rule leaves no distinct reader
    problem or the draft needs invented numeric thresholds.

- [x] **Task 5: Validate and complete the work item**
  - Scope: generated site plus `.agents/work/docs/evaluation-governance/`
  - Depends on: Task 4
  - Acceptance:
    - `npm run lint:fix`, `git diff --check`, `npm run content:guard`,
      `npm run check`, and `npm run build` pass.
    - The article and slides exist in `dist`, cited YouTube summaries remain
      reviewed, and source-only transcripts do not leak into generated output.
    - `progress.md` records review and validation, `index.md` is completed, and
      every plan task is checked.

## Implementation Notes

Use this six-section structure plus sources:

1. Your eval suite is a ruler that keeps changing.
2. When a plain test suite is enough.
3. Separate the system, the contract, and the evaluator.
4. Change one axis at a time.
5. Protect the held-out edge.
6. Admit and retire cases deliberately.
7. Sources used.

Lead with Lee Robinson and James Shi as the nearest coding-system examples. Use
Rustem Feyzkhanov for lifecycle mechanics, Lawrence Jones only as an adjacent
agent-maintained-eval example, Vincent Koc only for the adaptive-edge tension,
and Dwork et al. only for adaptive holdout reuse.

## Constraints / Decisions

- Governed object: a team's shared coding-agent stack, selected by the user.
- The article makes a comparative-validity claim, not a productivity,
  reliability, or ROI claim.
- The source-to-reader application is editorial synthesis and must be explicit.
- Do not restate Jones's eval CLI, the existing proof stack, adoption metrics,
  or the repo-memory model.
- Do not invent held-out percentages, run counts, confidence levels, saturation
  thresholds, consultation budgets, or release thresholds.
- Production-derived cases require provenance plus data and instruction review;
  they do not represent invisible failures.

## Acceptance Criteria

- A reader can classify a proposed change and know which axis must remain frozen.
- The article distinguishes private from unexposed evaluations.
- Judge identity includes model, prompt, rubric, threshold, and run policy.
- Retired cases remain available in archived suite versions.
- Related-post links clarify ownership rather than duplicating material.

## Verification

- `npm run lint:fix`
- `git diff --check`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- `test -f dist/posts/your-coding-agent-evals-need-change-control/index.html`
- `test -f dist/posts/your-coding-agent-evals-need-change-control/slides/index.html`
- `! find dist -type f -path '*youtube*' | grep -q .`
- `! rg -l 'src/content/youtube|^## Transcript' dist | grep -q .`
