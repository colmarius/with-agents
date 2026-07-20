---
title: "LLM come surroganti del ragionamento"
videoId: WDlQOnj8G_U
sourceUrl: "https://www.youtube.com/watch?v=WDlQOnj8G_U"
publishedAt: "2025-12-19T08:40:50Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo examines an apparent conflict between discrete reasoning and gradient-based learning. Drawing on an exchange involving François Chollet, an anonymous account, and his own response, he argues that an LLM need not optimize the discrete space of logical programs directly: it can learn a continuous, differentiable surrogate that approximates behavior in that space.

## Key Ideas

- The motivating objection is that programs, logical rules, and reasoning steps form a discrete combinatorial space with abrupt changes. A single logical operator can alter an outcome completely, so ordinary gradient descent cannot move smoothly through that space itself. [00:00:00]-[00:02:06]
- The response Sanfilippo highlights separates three domains that the objection can conflate: the discrete space of programs and rules, the continuous high-dimensional space of model parameters and activations, and the training outcomes that provide a smoother surrogate objective. [00:02:06]-[00:04:26]
- LLM training does not apply gradients directly to symbolic reasoning steps. It optimizes continuous parameters against a dense, differentiable training signal, even when the behavior ultimately sought includes discrete reasoning. [00:04:26]
- Sanfilippo reframes the central issue as whether the training signal creates a geometry in which gradient direction correlates with genuine progress toward stronger reasoning, rather than whether reasoning itself is continuous. [00:05:24]
- As related evidence, he recalls a 2022 paper's hypothesis about gradient agreement across examples: gradients that point in inconsistent directions tend to cancel, while examples that repeatedly support the same useful direction retain a stronger aggregate signal. [00:05:24]-[00:06:36]
- His synthesis treats the LLM as a differentiable simulator of a discrete target space. The simulator can approximate logical steps while remaining compatible with gradient descent because the model implementing the approximation is continuous. [00:07:37]-[00:08:44]
- This same non-symbolic character carries limitations: model outputs can hallucinate, and a chain of thought may not faithfully explain the resulting answer. Sanfilippo nevertheless sees differentiability as a reason LLMs can improve where systems that attempt direct symbolic computation have struggled. [00:07:37]-[00:08:44]

## Practical Implications

- Identify the exact space being optimized before arguing that gradient descent is unsuitable: program behavior, model parameters, and training outcomes have different mathematical structure.
- Treat a differentiable surrogate as useful only when improvement on its objective tracks improvement on the discrete capability of interest.
- Evaluate reasoning with outcome tests and interventions rather than assuming that a plausible chain of thought reveals the mechanism that produced an answer.
- Compare hybrid or symbolic alternatives on learning signal, generalization, and search cost, not only on whether their internal representation looks more like explicit logic.

## Questions and Tensions

- The account offers a conceptual reconciliation, not a formal demonstration that current training objectives reliably produce general reasoning.
- Gradient agreement may explain why some shared patterns dominate training, but the transcript does not establish that those patterns correspond to valid reasoning rather than exploitable correlations.
- A smooth surrogate can be easy to optimize while remaining misaligned with the discrete target, especially outside the training distribution.
- The comparison with symbolic systems is broad; no specific symbolic architecture or controlled empirical result is examined in the video.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=WDlQOnj8G_U)
- [transcript.md](./transcript.md)
