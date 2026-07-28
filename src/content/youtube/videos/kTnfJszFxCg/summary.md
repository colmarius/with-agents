---
title: "3 ingredients for building reliable enterprise agents - Harrison Chase, LangChain/LangGraph"
videoId: kTnfJszFxCg
sourceUrl: "https://www.youtube.com/watch?v=kTnfJszFxCg"
publishedAt: "2025-07-23T15:51:25Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The [source title](https://www.youtube.com/watch?v=kTnfJszFxCg) identifies Harrison Chase with LangChain/LangGraph. Chase frames enterprise-agent adoption as an expected-value problem: increase the value produced when an agent succeeds and its probability of success, while reducing the cost when it fails. [00:01:58]-[00:02:47]

He argues that reliable systems combine deterministic workflows with agentic decisions, make behavior legible through observability and evaluation, and use reversible actions and human checkpoints to bound failures. [00:05:42]-[00:11:50]

## Key Ideas

- Chase proposes evaluating an agent by the probability and value of success against the cost of failure and operation. [00:01:58]-[00:02:47]
- Chase says high-value domains such as legal and investment research are promising, and that longer-running deep-research and coding systems can create more value by completing larger bodies of work. [00:02:47]-[00:04:41]
- Chase argues that enterprise systems often need workflows and agents together: deterministic code should enforce required sequences while models handle the parts that benefit from flexible tool use or looping. [00:05:42]-[00:06:47]
- Chase says observability and evaluation can reduce stakeholders' uncertainty by exposing an agent's steps, failures, and benchmarked performance during production review. [00:07:49]-[00:09:48]
- Chase recommends reversible changes and human approval at consequential boundaries, using commits, pull requests, drafts, and clarification questions as examples. [00:09:48]-[00:12:53]
- Chase distinguishes ambient agents from fully autonomous ones: event-triggered background work can scale concurrency and complexity while still pausing for approval, correction, questions, or rollback. [00:12:53]-[00:17:47]

## Practical Implications

- Editorial: Choose use cases by expected value, including the operational cost of running the agent and the recoverability of a bad outcome.
- Editorial: Encode mandatory sequences in deterministic control flow, and reserve model discretion for decisions where flexibility provides measurable value.
- Editorial: Treat traces, evaluations, approval queues, rollback, and resumable execution as adoption infrastructure rather than post-launch debugging extras.

## Questions and Tensions

- Chase says greater autonomy can increase the amount and value of work, while emphasizing that ambient operation should retain human interaction patterns. [00:13:57]-[00:15:43]
- Editorial: More background concurrency also multiplies review load and correlated-failure risk, so teams need explicit escalation and capacity limits.
- Chase identifies code and mathematics as comparatively verifiable domains, while describing writing quality as more ambiguous. [00:18:46]-[00:19:48]
- Editorial: Less-verifiable domains need outcome-specific evaluation and review standards rather than borrowing software tests as a universal reliability measure.
- Chase recommends first drafts as a general interaction pattern that lets an agent do substantial work before a human reviews it. [00:19:48]
- Editorial: A draft boundary lowers deployment risk only when reviewers have enough context, time, and authority to detect and reject bad work.

## Source

- [YouTube video](https://www.youtube.com/watch?v=kTnfJszFxCg)
- [transcript.md](./transcript.md)
