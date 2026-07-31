---
title: "Ciò che importa di più del \"prediction is / is-not reasoning\": pensare agli LLM in altro modo"
videoId: 497EK7ZQ2FY
sourceUrl: "https://www.youtube.com/watch?v=497EK7ZQ2FY"
publishedAt: "2025-03-31T17:00:04Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo argues that the practical value of language models does not depend on winning a binary debate over whether next-token prediction counts as reasoning. He proposes a different conceptual frame: model outputs can be viewed as candidate continuations selected by a nonlinear computational system, while capability should be assessed across many distinct skills.

## Key Ideas

- Sanfilippo wants to move beyond the opposition between prediction and reasoning, but first cautions against reducing a neural network to a device that merely emits probabilities. He points to nonlinear activations as components that can behave more like conditional switches than a simple probability calculation. [00:01:13]
- Softmax makes output values sum to one and supports differentiable training, while argmax would expose only the selected continuation. He argues that the mathematical convenience of softmax should not determine the only conceptual interpretation of the network. [00:02:16]-[00:03:23]
- Training examples provide observed token continuations rather than an explicit probability distribution over every possible next token. Sanfilippo therefore prefers to read the output as the model's relative support for several possible continuations. [00:04:19]-[00:05:16]
- He uses coherent autoregressive image generation as an intuition for internal planning: constructing an image piece by piece would be difficult if every output depended only on previously emitted pieces with no representation of the intended whole. [00:06:13]
- Intelligence should be decomposed into many narrower abilities. Weakness at textual arithmetic does not negate strengths in other tasks, just as a person can reason mathematically without computing every large operation mentally. [00:06:13]-[00:07:25]
- Sanfilippo cites one-shot program generation as a capability that can exceed what people usually do unaided, and interprets it as consistent with programming drawing heavily on linguistic rather than purely mathematical skill. [00:07:25]-[00:08:17]

## Practical Implications

- Separate the output transformation used for training and sampling from claims about the computation performed in hidden layers.
- Evaluate models through a profile of task-specific abilities rather than using one arithmetic failure or one fluent answer as a verdict on intelligence.
- Treat conceptual frames such as probability, selection, and possible continuation as analytical tools, then test which frame predicts behavior most usefully.
- Use mechanistic or controlled evidence when making claims about planning; output coherence alone supplies a hypothesis, not a direct internal measurement.

## Questions and Tensions

- Softmax outputs can be interpreted probabilistically even if probability is not the only useful description of the system; the transcript does not invalidate that standard interpretation.
- The image-generation example is behavioral intuition rather than an experiment isolating an internal plan.
- The relationship between programming and language is asserted with reference to unspecified studies, so the transcript cannot establish the strength or scope of that relationship.
- Reframing logits as possible continuations does not resolve the philosophical definition of reasoning, which Sanfilippo deliberately treats as secondary to practical capability.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=497EK7ZQ2FY)
- [transcript.md](./transcript.md)
