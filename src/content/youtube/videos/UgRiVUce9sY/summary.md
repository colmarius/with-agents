---
title: "Predire dunque è comprimere? Similitudini e differenze profonde tra concetti tangenti"
videoId: UgRiVUce9sY
sourceUrl: "https://www.youtube.com/watch?v=UgRiVUce9sY"
publishedAt: "2026-08-13T15:58:36Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo revisits a 2007 post about entropy, prediction, and compression, then connects those ideas to language-model training. His central distinction is that prediction and compression are closely related under a model, but neither that relationship nor next-token pretraining fully describes a modern model shaped by reinforcement-learning post-training.

## Key Ideas

- Predictability depends on structure: a repeated sequence has low entropy for a predictor that discovers its pattern, while a random sequence remains difficult to predict. Sanfilippo uses this intuition rather than a formal derivation. [00:03:16]-[00:05:14]
- Dictionary compression exploits repeated substrings by replacing them with shorter references. Better prediction and better compression therefore meet at the ability to model regularities in the data. [00:05:14]-[00:07:20]
- Entropy is relative to a model. Digits of pi look difficult to compress as raw symbols, yet a short program can generate them; a sufficiently informed predictor can exploit that generative rule. [00:07:20]-[00:10:12]
- Sanfilippo argues that next-token training can reward learned logical operations: when surface frequencies cannot determine a yes-or-no answer, extracting the relevant relations can reduce prediction loss. He offers this as a qualitative account of how reasoning-like capabilities may emerge, not as an experimental proof. [00:10:12]-[00:13:16]
- He further argues that understanding context can improve the probability of key tokens even when several continuations remain valid, so prediction need not reduce to memorizing local token frequencies. [00:12:14]-[00:13:16]
- Modern post-training weakens any simple equivalence between language models and compressors because reinforcement learning can reward answer-level outcomes rather than reproduction of the next training token. [00:13:16]-[00:15:22]

## Practical Implications

- Editorial: When using compression as an analogy for language models, specify the model relative to which information is predictable and distinguish dictionary matching from learning a generative mechanism.
- Editorial: Separate claims about pretraining incentives from claims about post-training behavior; they optimize different signals.
- Editorial: Treat the proposed route from lower prediction loss to general reasoning as a useful hypothesis that still needs mechanistic and behavioral evidence.

## Questions and Tensions

- The transcript argues that a capability learned on some logical cases becomes general, but does not establish when or how broadly that transfer occurs.
- A short generator for pi illustrates model-relative description length, but the analogy does not show that a language model has discovered the true generative process behind its data.
- Reinforcement learning can reward better final answers, yet the discussion does not identify which internal strategies produce those improvements.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=UgRiVUce9sY)
- [transcript.md](./transcript.md)
