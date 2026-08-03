# Evaluation Governance Article Progress

## 2026-08-03 — Implementation started

- The user selected a team's shared coding-agent stack as the governed object.
- Added Dwork et al. as the narrow written source for adaptive holdout reuse and
  bounded the process to cases that ordinary deterministic tests cannot settle.
- Oracle returned a high-confidence Go after reviewing the reframed research.
- Committed the implementation-ready plan and handoff in `03aed59`.
- Drafted `your-coding-agent-evals-need-change-control.md` with the frozen-axis
  table, compact change record, exposure accounting, trace-review boundary, and
  active-versus-archived retirement path.
- Proposed one contextual inbound link from each of `agent-ready-interfaces.md`,
  `make-the-agent-prove-it.md`, and `durable-context-coding-agents.md`.

## Verification

- Final word count: 2,087 words including frontmatter and source appendix.
- Oracle verdict: revise, then publish with high confidence. It found no
  substantive argument or source-fidelity blocker.
- Applied all required Oracle feedback: corrected Cursor and Koc actor phrasing,
  synchronized the durable-context extended deck, and published the new post
  atomically with its inbound links.
- Applied all three optional clarity edits: described Cursor's skill-file example
  as intent interpretation, changed the proof-post link to “track exposure,” and
  replaced language implying that an article itself governs the stack.
- `npm run lint:fix` passed.
- `git diff --check` passed.
- `npm run content:guard` passed for 152 tracked videos, 5 tracked playlists, 66
  tracked public references, 29 resources, and 54 public summaries. It retained
  the existing non-blocking duplicate-manifest notice for `8gg-oJr4dTY`.
- `npm run check` passed with 0 errors, warnings, or hints across 39 files.
- `npm run build` passed and generated 28 pages.
- The article and slide routes exist in `dist`.
- All five cited AI Engineer summaries remain `status: reviewed`.
- No YouTube source paths, transcript paths, or transcript headings leaked into
  generated output.

## Next Action

- None. The work item is complete and ready to commit.
