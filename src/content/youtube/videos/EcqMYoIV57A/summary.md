---
title: "Why More Context Makes Your Agent Dumber and What to Do About It — Nupur Sharma, Qodo"
videoId: EcqMYoIV57A
sourceUrl: "https://www.youtube.com/watch?v=EcqMYoIV57A"
publishedAt: "2026-06-08T15:00:17Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Nupur Sharma of Qodo draws on agentic code-review work and a DevSecOps background to argue that larger context windows do not ensure relevant decisions. She reports a U-shaped pattern in Qodo's benchmarking: agents attend strongly to initial and final inputs while information in the middle can receive less attention ([00:00:14]-[00:04:17]).

Sharma recommends selecting and structuring context rather than dumping everything into one agent. She compares context engines, hierarchical summaries, knowledge graphs, iterative retrieval, critic nodes, constrained validation steps, and mixtures of specialist agents coordinated by a judge; unidentified audience members then question communication, calibration, shared context, and weighting during the Q&A ([00:04:17]-[00:15:31], [00:16:20]-[00:25:37]).

## Key Ideas

- Sharma says static prompts, tool-using workflows, and multi-agent systems fail in different ways when agents receive the wrong inputs, loop while searching, or develop conflicting understandings ([00:00:14]-[00:03:13]).
- She describes Qodo's code-review benchmarking as showing stronger attention to the start and end of supplied context than to material in the middle, motivating deliberate context optimization rather than maximal context volume ([00:03:13]-[00:04:17]).
- Sharma compares several retrieval strategies: ranked context engines, per-file or per-folder hierarchical summaries, dependency-oriented knowledge graphs, iterative retrieval, and critic-node retries, each with different scaling, processing, setup, cost, and latency tradeoffs ([00:04:17]-[00:08:31]).
- Her “orchestration paradox” is that stronger models can spend tokens repeatedly researching how to solve a task; Qodo's proposed 80/20 pattern leaves discovery and planning relatively open while constraining final validation or summarization with hard gates, counters, or timeouts ([00:08:31]-[00:11:42]).
- Sharma says one large agent can lose some assigned tasks as context grows, so a mixture-of-agents design gives narrower work to specialists and uses a judge agent to reconcile their outputs ([00:11:42]-[00:14:41]).
- In Qodo's review architecture, a context collector routes relevant pull-request, tool, and context-engine material to specialist agents before a judge filters their recommendations for relevance ([00:14:41]-[00:15:31]).
- During the Q&A, Sharma says Qodo uses LangChain to pass agent results into later prompts and uses pull-request history, organization guidance, compliance severity, and developer acceptance as calibration and weighting signals ([00:16:20]-[00:25:37]).

## Practical Implications

- Optimize for task-relevant context rather than raw context-window occupancy, and choose a retrieval structure whose indexing and maintenance costs fit the repository scale and dependency shape ([00:03:13]-[00:07:28]).
- Bound exploratory planning with explicit counters, timeouts, and deterministic handoff criteria before final validation or summarization ([00:08:31]-[00:11:42]).
- Give specialist agents only the context needed for their role, but add an integration step that checks whether their outputs are jointly relevant and compatible ([00:12:45]-[00:15:31]).

## Questions and Tensions

- Sharma reports Qodo's U-shaped context pattern but does not provide benchmark composition, model-specific results, or measurements that separate context position from relevance and prompt construction ([00:03:13]-[00:04:17]).
- Iterative retrieval lowers developer setup compared with some alternatives, but Sharma still identifies cost; context engines and hierarchical summaries introduce their own scaling or processing burdens ([00:05:21]-[00:08:31]).
- Audience questions expose a coordination tradeoff: specialist agents reduce overload but may lack a full architectural picture, so the judge and context collector must reconcile security, architecture, compliance, history, and organization-specific guidance without treating historical practice as automatically correct ([00:17:25]-[00:25:37]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=EcqMYoIV57A)
- [transcript.md](./transcript.md)
