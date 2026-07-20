---
title: "Come funzionano DeepSeek R1 e R1-Zero"
videoId: 8gg-oJr4dTY
sourceUrl: "https://www.youtube.com/watch?v=8gg-oJr4dTY"
publishedAt: "2025-01-21T08:52:12Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo outlines the training pipelines presented for DeepSeek R1-Zero and R1. He focuses on how reinforcement learning, supervised examples, automatically generated reasoning data, and distillation contribute at different stages.

## Key Ideas

- R1-Zero starts from a base model and uses reinforcement learning rather than an initial supervised fine-tuning stage. The model is prompted to expose a reasoning section before its final answer. [00:03:12]-[00:04:31]
- The reward process evaluates both answer correctness and compliance with the requested output structure. Mathematical answers can be checked and generated code can be compiled, while format adherence receives a separate incentive. [00:05:30]-[00:06:39]
- Because R1-Zero can repeat itself and mix language or formatting, the R1 pipeline first fine-tunes the base model on higher-quality reasoning examples and then applies reinforcement learning. [00:06:39]-[00:07:59]
- The resulting model generates a much larger reasoning dataset, which is further filtered with human and model feedback and then used to fine-tune smaller Llama- and Qwen-based models through distillation. [00:07:59]-[00:09:07]

## Practical Implications

- Reward design can combine outcome checks with structural constraints instead of relying on a single quality signal.
- A staged pipeline can use supervised data to improve consistency without discarding reinforcement learning's ability to discover useful reasoning behavior.
- Distillation offers a route for transferring some reasoning capability from a larger model into models that are more practical to run.

## Questions and Tensions

- The presentation summarizes the released paper and occasionally marks details as uncertain; model sizes, dataset counts, and comparisons should be checked against the paper before being reused as independent factual claims.
- R1-Zero's behavior suggests that reinforcement learning alone can produce useful reasoning patterns, while its consistency problems motivate the additional supervised stages used for R1.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=8gg-oJr4dTY)
- [transcript.md](./transcript.md)
