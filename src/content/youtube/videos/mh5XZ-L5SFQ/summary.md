---
title: "Can Cursor's HARDCORE Review Skill Stop The Slop?"
videoId: mh5XZ-L5SFQ
sourceUrl: "https://www.youtube.com/watch?v=mh5XZ-L5SFQ"
publishedAt: "2026-05-28T14:00:25Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock examines Cursor's thermonuclear code-quality-review skill, runs it against the last five merged pull requests in his Sandcastle repository, and assesses the resulting findings. He finds the strict, structurally ambitious review useful, while arguing that its prompt is repetitive and gives too little attention to tests and feedback loops.

## Key Ideas

- The skill asks the reviewer to look beyond a changed diff and consider broader restructuring for maintainability, modularity, simpler abstractions, and codebase health. [00:01:03]-[00:03:12]
- Its standards challenge large files, nested special cases, unclear type boundaries, duplicated helpers, and needless sequential work, while warning against micro-optimization. [00:03:12]-[00:05:18]
- Pocock likes prompts that ask for a simpler reframing or the deletion of an indirection layer, but says vague quality language and repeated instructions make the review criteria harder to prioritize. [00:05:18]-[00:07:12]
- The output prioritizes structural regressions above smaller legibility concerns and applies an explicit approve-or-reject bar. [00:07:12]-[00:08:08]
- In the demonstration, Pocock accepts several suggestions about splitting a large service, replacing scattered special cases, examining hard-coded dependencies, exposing swallowed errors, and completing a partial decomposition. [00:08:08]-[00:11:17]
- He rejects other findings, including a proposed type-boundary change based on an inaccurate reading of the system and deduplicating prompts that he wants to remain independently changeable. [00:09:11]-[00:12:06]
- Pocock concludes that an ambitious review can be worth the additional false positives because developers can reject them, whereas missed improvement opportunities remain invisible. [00:12:06]-[00:13:04]

## Practical Implications

- Tell a review agent whether it may challenge surrounding structure rather than assuming the submitted diff is its boundary.
- Rank structural findings ahead of minor style observations, and require concrete alternatives rather than generic calls to improve architecture.
- Review automated findings with codebase knowledge; treat them as proposals, not automatically correct diagnoses.
- Add explicit checks for tests, seams, and future feedback loops when a review prompt otherwise concentrates on source structure.

## Questions and Tensions

- Pocock's informal tally reflects one run on code he knows; it does not compare reviewers, repeated runs, defect detection, review cost, or downstream maintenance outcomes.
- A broader review may reveal useful structural options, but it can also increase false positives and scope beyond the change under review.
- The transcript shows and discusses the generated report, not implementation or validation of its proposed refactors.
- The auto-generated captions render the repository star count inconsistently near the opening; no summary claim relies on that figure. [00:00:00]-[00:01:03]

## Source

- https://www.youtube.com/watch?v=mh5XZ-L5SFQ
- [transcript.md](./transcript.md)
