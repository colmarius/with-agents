---
title: "CI/CD Is Dead, Agents Need Continuous Compute and Computers — Hugo Santos and Madison Faulkner"
videoId: VktrqzQgytY
sourceUrl: "https://www.youtube.com/watch?v=VktrqzQgytY"
publishedAt: "2026-05-13T13:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Madison Faulkner, an NEA partner focused on infrastructure and developer tools and a former Meta AI researcher, and Hugo Santos, Namespace's CEO and a former Google microservices lead, argue that agent-generated change volume will exceed the delayed feedback and merge model of traditional CI/CD ([00:00:07]-[00:02:55]).

Faulkner frames acceleration, caching, ingress control, and agent identity as the starting infrastructure. Santos then proposes a stateful inner loop in which agents implement a written intent, continuously build and test, receive specialized-agent feedback, and enter a pre-merge reconciliation queue before a person approves the intent and demonstrated result ([00:03:43]-[00:05:43], [00:10:16]-[00:14:51]).

## Key Ideas

- Faulkner argues that thousands of short-lived agent branches make verification and merging difficult when agents reuse systems designed around a few human-authored pull requests per week ([00:01:59]-[00:03:43]).
- She proposes accelerating existing CI/CD first, then treating caches as an orchestration layer behind ingress shaping, rate limiting, infrastructure routing, agent identity, and scaled retries ([00:03:43]-[00:05:43]).
- Santos says cheap continuous code generation moves evaluation into the inner development loop because machine latency is no longer hidden behind slower human iteration ([00:05:43]-[00:07:36]).
- He describes pull requests as delayed human-review units and compares merging at high change volume to serializing writes into a single database ledger ([00:08:32]-[00:10:16]).
- Santos's current workflow begins with codified intent and plan, checks out a known commit, uses repository build and test assets for internal validation, asks a person for feedback, and eventually enters a merge queue ([00:10:16]-[00:12:07]).
- His near-term architecture replaces human feedback inside the loop with specialized security or API-conformance agents running in a stateful environment, while allowing new plans or upstream changes to alter the loop ([00:12:07]-[00:14:04]).
- Completed candidates enter a pre-merge queue that reconciles overlapping work into a serializable repository history; the human approval point moves from individual code review to intent and outcome evidence such as a working-feature video or security-agent result ([00:13:02]-[00:14:51]).
- Santos extends the model to several candidate base commits for one plan, which increases compute demand and makes incremental state and avoidance of redundant work important ([00:14:51]-[00:16:44]).
- He closes by saying CI has not disappeared: build, test, provenance, compliance, coordination, and governance move into the continuous harness rather than remaining separate phases ([00:16:44]-[00:17:46]).

## Practical Implications

- Measure build, test, and merge latency inside the agent loop; speeding generation alone can move the bottleneck into validation and reconciliation ([00:06:48]-[00:09:23], [00:12:07]-[00:13:02]).
- Begin work from a written intent and known repository state, and make build and test assets callable by the agent before it requests approval ([00:10:16]-[00:12:07]).
- Keep security, API conformance, and other review roles independently observable instead of folding every judgment into the producing agent ([00:12:07]-[00:13:02]).
- Design a pre-merge gate for overlapping completed candidates and present reviewers with both the intended change and inspectable outcome evidence ([00:13:02]-[00:14:51]).
- Reuse state and cached work carefully, while preserving source provenance and compliance invariants on every iteration ([00:13:02]-[00:16:44], [00:16:44]-[00:17:46]).

## Questions and Tensions

- The title says CI/CD is dead, but Santos concludes that CI's validation and governance remain necessary and have shifted into the harness; the boundary between replacement and rearchitecture is therefore rhetorical rather than fully specified ([00:00:07]-[00:01:07], [00:16:44]-[00:17:46]).
- Faulkner cites a sharp GitHub activity increase and Santos reports roughly four times his team's former pull-request-equivalent volume, but neither provides the data source, baseline, repository mix, or failure rates needed to size the claimed transition ([00:03:43], [00:14:51]).
- Santos predicts human-free external validation inside weeks to months without evidence that specialized LLM reviewers catch security, API, behavioral, and cross-system failures reliably enough to replace code review ([00:11:10]-[00:13:02]).
- Stateful environments and multiple candidate base commits may accelerate loops, but the talk does not detail cache invalidation, isolation, secret handling, reproducibility, cost limits, or recovery from stale world signals ([00:13:02]-[00:16:44]).
- Pre-merge reconciliation is presented as the answer to overlapping candidates without an implementation or evaluation of semantic grouping, conflict resolution, approval granularity, or incorrect automated merges ([00:13:02]-[00:15:55]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=VktrqzQgytY)
- [transcript.md](./transcript.md)
