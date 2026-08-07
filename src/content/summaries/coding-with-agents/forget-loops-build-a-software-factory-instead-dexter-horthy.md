---
title: "“Forget Loops, build a Software Factory instead” – Dexter Horthy"
resourceId: 31
date: "2026-08-07"
---

Dex Horthy explains why an effective software factory is not a contest to run more agents or spend more tokens. The useful goal is faster delivery of maintainable value, with humans applying product and engineering judgment before generated code makes the expensive decisions.

### Key Points Covered

- **Code generation moves the bottleneck rather than removing it**: Agents can turn queued work into changes in minutes or hours and can automate parts of incident triage, testing, and review. Establishing that a change works now and will remain understandable, however, is still slower than generating it [00:01:36]-[00:07:08].
- **HumanLayer's lights-off experiment failed on an issue the agents could not resolve**: After the team stopped reading most generated code, repeated prompts and model reviews failed to diagnose a product bug. Humans then had to recover their understanding while working through accumulated low-quality code, leading Horthy to reject fully unread code for maintainable products [00:07:58]-[00:10:56].
- **Keep humans responsible for the product's logic**: The host suggests that line-by-line reading is not the only way to stay in control, but someone must still understand product behavior, API contracts, onboarding, cancellation, and other consequential flows [00:10:56]-[00:11:56].
- **Start with the user problem and a measurable outcome**: Horthy's first checkpoint asks what problem the feature solves and how success will be observed. Experiments give agents measurable feedback, while a launch-style explanation and HTML mockups force clarity about user value and behavior before coding starts [00:10:56]-[00:14:36].
- **Review architecture and program design before implementation**: His workflow moves from the product definition to service boundaries, endpoints, tables, queries, call stacks, file locations, types, method signatures, and tests. These compact artifacts let humans challenge consequential choices before hundreds or thousands of generated lines anchor the session to one approach [00:14:36]-[00:19:21].
- **Match the rigor to the product stage**: Horthy says this process may be overkill for a pre-product-market-fit startup that still needs to discover what customers will pay for. He frames it for established teams—roughly five or more engineers—with paying users and a need to keep the product maintainable [00:16:15]-[00:17:19].
- **Build vertical slices that can be checked early**: Models tend to implement horizontal layers—database, service, API, then front end—leaving nothing testable until a large change is complete. Horthy instead recommends a thin end-to-end path first, followed by business logic and edge cases, so humans and tools can verify and redirect the work incrementally [00:19:21]-[00:21:16].
- **Passing a coding benchmark does not demonstrate maintainability**: SWE-bench-style evaluation rewards solving a known problem without adequately penalizing poor design. The cost of bad architecture often appears weeks or months later, while benchmark tasks usually reveal the whole problem up front rather than testing whether a codebase stays easy to change across an unknown sequence of features [00:22:13]-[00:27:07].
- **Better evaluation adds more kinds of evidence**: Horthy points to checks for functional equivalence, repository-specific quality rules, and tests that must fail against the pre-change code. These mechanisms raise the floor, but he treats model-based quality review as an incomplete substitute for experienced human judgment [00:27:07]-[00:30:52].
- **Put durable context where agents already work**: The host describes storing ADRs and external-system facts as repository files. Horthy agrees and explains how HumanLayer keeps plans on disk and uses hooks to synchronize team comments or fetch current issues, preserving model attention for reasoning [00:32:40]-[00:36:23].
- **Context engineering is selective, not token maximalist**: Horthy defines the aim as giving the model the correct, complete, and smallest practical context. Larger windows and better compaction make exact thresholds less important, so the operational rule is to notice degraded work, consolidate useful state, and restart when needed [00:35:25]-[00:43:12].
- **Optimize the delivery bottleneck, not agent utilization**: Drawing on factory theory, Horthy argues that maximizing every station creates work in progress without increasing throughput. If code review is the bottleneck, adding coding agents or exhausting a token allowance does not deliver value faster; the relevant measure is value reaching users [00:43:12]-[00:48:58].

Full video: <https://www.youtube.com/watch?v=xgkjtF89-44>
