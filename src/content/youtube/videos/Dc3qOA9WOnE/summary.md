---
title: "Vibes won't cut it — Chris Kelly, Augment Code"
videoId: Dc3qOA9WOnE
sourceUrl: "https://www.youtube.com/watch?v=Dc3qOA9WOnE"
publishedAt: "2025-08-03T04:32:17Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Chris Kelly of Augment Code argues that generating code is not equivalent to engineering production software: teams still have to make architectural decisions, understand complex-system behavior, and change software safely. [00:00:01]-[00:07:03] He proposes adapting established engineering practices for agents through codebase context, reproducible environments, fast tests, defined tasks, code review, explicit rules, and iterative planning. [00:07:03]-[00:15:01]

## Key Ideas

- Kelly argues that AI-generated code remains subject to the behavior and operational failure modes of existing production systems, so software engineers still need to understand, run, and repair those systems. [00:00:01]-[00:02:58]
- Kelly distinguishes code as an artifact from software engineering as a decision-making practice, and emphasizes that each added line carries maintenance and debugging obligations. [00:04:04]-[00:06:08]
- Kelly defines software engineering as changing software safely and identifies codebase knowledge, version control, tests, type systems, deployment practices, and richer context as safeguards that remain relevant with AI. [00:06:08]-[00:08:05]
- Kelly recommends documented standards, reproducible developer environments, fast local tests, clear boundaries, and well-defined tasks so an agent receives the same operating conditions expected by a human engineer. [00:09:08]-[00:11:14]
- Kelly expects code review to become more important as agents produce more code, while arguing that file-ordered review tools do not represent changes in a useful conceptual order. [00:11:14]-[00:12:05]
- Kelly cautions that an LLM's human-like explanations do not prove what the system actually did; he recommends distinguishing different code from worse code and using a plan-create-refine loop with explicit rules. [00:12:05]-[00:15:01]

## Practical Implications

- Editorial: Improve reproducibility, test speed, documentation, and task definition before treating an agent rollout as a prompting problem.
- Editorial: Review generated changes for system behavior and maintenance burden rather than rewarding code volume or accepting plausible explanations.
- Editorial: Practice code review as a primary engineering skill and organize review around the intent and dependency structure of a change, not only a sorted file list.

## Questions and Tensions

- Kelly says Augment treats codebase context as central to AI code generation. [00:07:03]-[00:08:05]
- Editorial: Which context-retrieval and verification methods measurably improve correctness on large, idiosyncratic production systems?
- Kelly argues that LLMs generate patterns rather than making the full set of architectural decisions required by production software. [00:04:04]-[00:06:08]
- Editorial: As models and harnesses improve, which decisions should remain explicit human approvals and which can safely move into automated constraints?
- Editorial: The create-plan-refine loop adds control, but teams still need evidence that the resulting code behaves safely under production conditions.

## Source

- [YouTube video](https://www.youtube.com/watch?v=Dc3qOA9WOnE)
- [transcript.md](./transcript.md)
