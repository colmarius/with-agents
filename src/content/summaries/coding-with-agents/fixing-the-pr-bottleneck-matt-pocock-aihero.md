---
title: "Fixing the PR Bottleneck — Matt Pocock, AIHero"
resourceId: 163
date: "2026-09-25"
---

Matt Pocock argues that faster code generation makes an existing pull-request review bottleneck worse. His proposed remedy is to improve the code before it reaches a human: combine meaningful automated checks, a separate agent that enforces team standards, and human review proportional to the consequences of merging.

Based on an English transcript retrieved through the web reader after direct caption capture failed. Caption kind was not exposed; audio and slides were not independently checked. The indexed upload is labelled “bad audio,” and the retrieved transcript has a gap in the early introduction. The recommendations below are Pocock's practitioner advice, not measured productivity or reliability findings.

### Key points

- **Use three layers of review, with different jobs.** Deterministic checks—tests, linting, type checking, and code-quality metrics—provide cheap, repeatable feedback. Automated review then examines problems those checks miss, including code structure; human review sits above both. Pocock's argument is that better work arriving at the final layer needs fewer human interventions, not that green CI proves a change is ready to merge. [02:35–05:14](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=155s)

- **Check whether tests exercise behavior or merely echo the code.** His examples include asserting that a constant equals its declared value, checking UI order by searching source text rather than rendering the screen, and mocking the browser's audio API so thoroughly that its real failure modes cannot occur. The first two bind tests to implementation details; the third hides failures that can still happen in production. Passing such tests gives less assurance than it appears to. [05:24–08:25](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=324s)

- **Deep modules give agents a better testing boundary.** A deep module hides substantial behavior behind a small interface, unlike a broad interface whose many functions each do little. Pocock recommends making agents test through that interface rather than reaching into internals, so implementation changes cause less test churn. His design skill proposes opportunities to deepen modules and presents before-and-after designs for implementation. This is a design recommendation, not a guarantee that interface-level tests catch every bug. [08:25–10:15](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=505s)

- **Give standards review its own context window.** An implementer already has to explore, edit, and debug. Pocock argues that loading it with detailed coding standards overloads that job. His reviewer instead receives the diff, explores the surrounding code, and reads a separate coding-standards file in its own subagent context. He places those standards outside globally loaded `AGENTS.md`, describing the split as “make it work” followed by “make it good.” The claimed improvement is his experience, not a controlled comparison. [11:30–14:22](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=690s)

- **Tailor automated review to the team, and prefer fixes over comment volume.** Pocock says his attempts at generic review produced either irrelevant false positives or rules too specific to transfer between stacks. He recommends accumulating shared team standards rather than outsourcing the whole review. He also wants the reviewer to commit fixes by default, leaving comments for unresolved questions, so humans review the improved result rather than adjudicating a long comment list. This is his workflow preference, not evidence that third-party reviewers cannot be customized. [14:22–16:19](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=862s)

- **Allocate human attention by reversibility and blast radius.** A “two-way door” is a change whose effects can readily be reversed; a “one-way door” has consequences that cannot easily be undone. A tiny change that emails 60,000 people, loses data, or requires an expensive migration deserves careful review despite its size. His PR body includes a “merge danger” assessment explaining reversibility and how widely failures could spread. He argues for lighter or optional review of reversible changes, while insisting on review for one-way doors. [17:23–18:40](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=1043s), [21:56–22:16](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=1316s)

- **Make the change understandable before the reviewer reads the diff.** Pocock favors pseudocode and diagrams that quickly show what changed and why—for example, a CLI sketch highlighting a new command and flags. The aim is faster comprehension, alongside the risk assessment, rather than a longer prose description. His PR skill was still in progress at the time of the talk. [16:34–17:04](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=994s), [18:40–19:43](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=1120s)

- **Turn recurring review feedback into improvements to the process.** His Retro skill examines an agent session, a PR and its session, or a batch of reviews, then suggests new automated checks and coding standards. It also looks for missing navigation pointers, inefficient tool use, and bloated instruction or skill files. The intended feedback loop is to prevent the same human comment recurring on later PRs; it changes the agent's working environment rather than training the underlying model. [19:43–21:56](https://www.youtube.com/watch?v=LlgiOCmFG_w&t=1183s)

Full video: <https://www.youtube.com/watch?v=LlgiOCmFG_w>
