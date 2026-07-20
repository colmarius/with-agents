---
title: "[parte 2] Qwen 2.5 72B contro la rete neurale che stampa il logo di Twitter."
videoId: sJ5E7P1i5b8
sourceUrl: "https://www.youtube.com/watch?v=sJ5E7P1i5b8"
publishedAt: "2025-01-29T15:07:03Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo follows up on a test of a distilled DeepSeek R1 32B model by giving the same obfuscated C program to Qwen 2.5 72B. The larger, conventionally trained model explains more of the program correctly, but still fails to recover the complete neural-network layout, supporting a narrow conclusion about this test rather than a general model ranking.

## Key Ideas

- Sanfilippo begins from the premise that, under comparable training conditions, model size strongly affects reasoning, problem solving, and multilingual output. He therefore does not expect a much smaller fine-tune to reproduce a roughly 600-billion-parameter model at full precision. [00:00:01]
- Distillation can still make a smaller model more useful than an ordinary model of similar size. He attributes that advantage to training on targeted outputs from a stronger model, including knowledge shaped by supervised and reinforcement learning. [00:01:05]-[00:02:19]
- His central question is whether exposing an explicit chain of thought is enough when the smaller model lacks the semantic capacity to use it effectively. [00:02:19]
- As a comparison, he runs the same prompt on the conventionally trained Qwen 2.5 72B. He says the eight-bit version needs about 72 GB for weights plus attention memory and fits on his 128 GB system. [00:03:30]
- Qwen identifies the C program as a small neural network, explains the sigmoid-like activation and intermediate outputs, and recognizes that the two inputs are coordinates in a two-dimensional space. [00:04:30]-[00:05:25]
- Despite that stronger functional account, it gives the wrong layer structure; the intended layout is 2-6-6-1. Sanfilippo therefore judges it better than the tested 32B distill but still not powerful enough to complete the analysis. [00:05:25]-[00:06:35]
- He cautiously recommends the 72B model for some local contexts when sufficient memory is available and notes that the same test should be repeated across more models. [00:06:35]

## Practical Implications

- Compare distilled models with strong conventional baselines at nearby deployment sizes rather than assuming a reasoning fine-tune always wins.
- Test both high-level intent and exact structural details; a model can explain what code broadly does while misreading its architecture.
- Include memory use, quantization, and latency in local-model comparisons alongside answer quality.
- Repeat a diagnostic prompt across multiple tasks and runs before turning one example into a deployment choice.

## Questions and Tensions

- The video reports one edited interaction and no fixed decoding settings, timing, repeated trials, or independent scoring.
- Qwen has more than twice the parameter count of the 32B distill, so the test does not isolate conventional training from scale.
- The model's partly correct explanation and wrong topology show that qualitative judgments about which answer is better need explicit correctness criteria.
- The comparison does not establish whether another quantization, prompt, or model version would produce the same result.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=sJ5E7P1i5b8)
- [transcript.md](./transcript.md)
