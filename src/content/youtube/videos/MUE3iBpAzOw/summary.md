---
title: "GPT 4.5: cosa ci dice delle frontiere della AI?"
videoId: MUE3iBpAzOw
sourceUrl: "https://www.youtube.com/watch?v=MUE3iBpAzOw"
publishedAt: "2025-02-28T15:04:38Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo interprets GPT-4.5 as a scientifically useful negative result: scaling the prevailing large-model recipe appears to have produced less improvement than expected. He argues that this is evidence of a plateau in current mixture-of-experts training, not evidence that transformers have exhausted every architectural path.

## Key Ideas

- Sanfilippo separates GPT-4.5 from models trained for extended reasoning and discusses it as a conventional pretraining, supervised fine-tuning, and human-feedback pipeline. He calls its limited gain a failed training result that still advances understanding. [00:00:05]-[00:02:30]
- He speculates that the model may contain several trillion parameters and may have been trained on roughly 20 trillion tokens. In his account, the resulting tokens-per-parameter ratio and the likely decline in marginal data quality expose practical limits to scaling. [00:03:37]-[00:04:33]
- Mixture-of-experts models previously moved the frontier beyond the plateau of dense models by routing each token through only part of a much larger network. Sanfilippo treats that sparsity mechanism as an architectural escape rather than a refutation of scaling limits. [00:05:43]-[00:06:53]
- He reads GPT-4.5 as evidence that the current mixture-of-experts recipe has reached another plateau. Routing and expert balancing are difficult to stabilize, while the cost and duration of frontier training severely constrain full-scale experiments. [00:06:53]-[00:08:07]
- Based partly on reported rather than public architectural details, he argues that new routing, balancing, or sparse-model techniques may unlock further gains. His conclusion is that architectural experimentation is required, not that the transformer is finished. [00:09:07]-[00:10:18]

## Practical Implications

- Treat a costly scaling run with weak gains as evidence about the limits of a training recipe, not merely as a failed product launch.
- Separate limits of dense scaling, current mixture-of-experts implementations, and the transformer family when diagnosing a plateau.
- Test routing and balancing changes at smaller scales before committing to a frontier run, while checking whether those results transfer across scale.
- Distinguish public evidence from estimates and rumors when discussing model size, training data, or architecture.

## Questions and Tensions

- The parameter counts, token counts, expert configuration, and comparison with GPT-4o are presented as estimates or reports, not verified disclosures.
- Limited benchmark improvement can reflect architecture, data, optimization, evaluation, or post-training choices; the transcript does not isolate their effects.
- Publishing a weak scaling result can inform research, but the transcript does not provide the primary training evidence needed to validate its diagnosis of the plateau.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=MUE3iBpAzOw)
- [transcript.md](./transcript.md)
