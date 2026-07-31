---
title: "I grandi LLM pensano: i nuovi sconvolgenti studi di Anthropic sulla comprensione della AI"
videoId: TlGrAretPQw
sourceUrl: "https://www.youtube.com/watch?v=TlGrAretPQw"
publishedAt: "2025-03-30T16:14:34Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo presents his reading of two Anthropic interpretability studies as evidence that language models can perform multi-step computation and plan later output before emitting it. He explains the experimental method, then uses examples involving factual composition and rhyme to argue against treating autoregressive generation as mere local token association.

## Key Ideas

- The studies pair a transformer with a more interpretable replacement model that reads residual-stream states and is trained to activate a small number of features strongly. Sanfilippo reports that this surrogate selects the same top token as the original model about half the time. [00:02:41]-[00:03:51]
- Researchers then inspect activation patterns, manually label features, and group multiple features that appear to represent one concept. This creates a vocabulary for tracing activity across layers, but the labels remain an interpretation of a surrogate. [00:05:00]-[00:06:12]
- Sanfilippo describes perturbation experiments that feed the extracted representation back into the original model and test whether its output changes as predicted. He treats this intervention as evidence that the identified representation participates in the model's computation. [00:06:12]-[00:07:19]
- In one example, a question asks for the capital of the state containing Dallas. The traced activations move through Dallas, Texas, and Austin, which Sanfilippo interprets as a multi-step internal computation rather than a direct surface association. [00:08:29]-[00:09:27]
- In a poetry example, features associated with a planned final rhyming word activate while earlier words are generated. Sanfilippo reads this as forward planning that shapes the intermediate phrase around a later target. [00:10:32]-[00:12:32]
- He also reports separate research in which a linear mapping relates language and conceptual activations in a model to measured human-brain activations. He interprets the reported mapping as evidence of related processing structures, while the transcript does not establish full equivalence. [00:13:41]-[00:14:49]

## Practical Implications

- Distinguish behavioral evidence, feature-level correlations, and causal interventions when evaluating claims about model internals.
- Treat interpretable surrogate models as measurement instruments whose fidelity must be quantified, not as transparent copies of the original model.
- Use concrete traced tasks to test hypotheses about composition and planning instead of inferring mechanisms only from fluent output.
- Check the primary papers before reusing the experimental details, model names, percentages, or neuroscience comparison.

## Questions and Tensions

- A replacement model that matches only part of the original model's behavior may omit mechanisms that matter to a specific trace.
- Manually assigned feature meanings can simplify distributed or context-dependent representations, even when perturbation supports a causal role.
- Evidence of multi-step computation and forward planning does not by itself settle which definition of reasoning should apply.
- The brain-mapping result is reported secondhand and does not justify a broad claim that human and model cognition are equivalent.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=TlGrAretPQw)
- [transcript.md](./transcript.md)
