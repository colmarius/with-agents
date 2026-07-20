---
title: "DeepSeek v4"
videoId: Yy7pRTHbbf4
sourceUrl: "https://www.youtube.com/watch?v=Yy7pRTHbbf4"
publishedAt: "2026-04-24T10:09:07Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo gives an early assessment of DeepSeek v4 Pro after a two-hour coding session and reviews the announced architecture, API economics, and smaller Flash variant. He is strongly positive about practical coding quality, while repeatedly qualifying the comparisons as workload-dependent and leaving Flash's local performance for later testing.

## Key Ideas

- Based on his initial coding session, Sanfilippo describes DeepSeek v4 Pro as substantially ahead of other open-weight alternatives and similar in behavior to closed frontier models from several months earlier. He also notes that relative strengths depend on the task and benchmark. [00:00:01]-[00:03:05]
- The reported Pro configuration has roughly 1.6 trillion total parameters in a mixture-of-experts design with about 49 billion active per generated token. Sanfilippo describes mixed-precision weights, a complex compressed-attention path, sparse attention, and a one-million-token context. [00:03:05]-[00:05:02]
- The smaller Flash variant is reported at roughly 270 billion total and 13 billion active parameters. He argues that sufficient unified memory could make a near-frontier local coding agent practical, but his speed estimates are explicitly hardware-dependent. [00:05:02]-[00:07:07]
- Among the architectural details, early mixture-of-experts layers reportedly use fixed hash routing because little semantic signal exists there yet. Sanfilippo also highlights several normalization and training changes that the model report says work empirically without a clear explanation. [00:08:01]-[00:10:01]
- DeepSeek's API prices are described as far below the compared frontier API, yet sustained agent use could still exceed a flat subscription. Sanfilippo attributes the remaining floor to the compute and energy needed for autoregressive inference even with sparse activation. [00:10:01]-[00:15:16]
- He configured Claude Code to call DeepSeek by changing endpoint environment variables and reports that its natural-language instructions and tools worked well with the alternative model. This supports treating language-based agent harnesses as portable, while not guaranteeing equal behavior across models. [00:11:09]-[00:15:16]
- His practical benchmark asks an agent to accelerate a small interpreter below a 3,000-line limit without regressions or benchmark-specific shortcuts. In this workload, DeepSeek felt much closer to the paid frontier systems than Kimi K2.6 had. [00:15:16]-[00:17:25]
- Sanfilippo praises the developer documentation and mentions three thinking modes. He had tested only Pro at this stage and planned to evaluate Flash on a 512 GB Mac Studio, so the claims about Flash's quality and local economics remained projections. [00:18:20]-[00:19:24]

## Practical Implications

- Separate total parameters, active parameters, memory footprint, and token-generation cost when evaluating a sparse model.
- Test an alternative model behind the actual coding harness; API compatibility does not establish behavioral compatibility.
- Compare flat subscriptions with metered APIs using sustained workload traces rather than headline token prices alone.
- Keep first-session impressions distinct from repeated benchmarks, especially for a newly released model and an untested smaller variant.

## Questions and Tensions

- The capability comparisons rely on one early user session and vendor benchmarks, not a controlled independent evaluation.
- Several architecture specifications and price figures are recalled approximately in the narration and should be checked against primary documentation before operational decisions.
- Sparse activation lowers computation per token but does not remove the memory required to hold the model's full weights.
- A model that works through a harness's generic instructions may still differ in tool reliability, long-context behavior, and regression rate over extended sessions.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=Yy7pRTHbbf4)
- [transcript.md](./transcript.md)
