---
title: "Gli LLM Frankenstein per elisione o duplicazione dei blocchi del transformer"
videoId: 4YISBw_4vLU
sourceUrl: "https://www.youtube.com/watch?v=4YISBw_4vLU"
publishedAt: "2026-03-16T17:30:01Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo uses transformer block removal and duplication to explain Frankenstein language models: systems enlarged or reshaped from an existing model rather than trained from scratch. He treats the techniques mainly as clues about residual networks and internal representations while limiting their practical value. The video performs no ablation, training, fine-tuning, or benchmark run.

## Key Ideas

- Sanfilippo frames Frankenstein models as a response to limited compute: communities and researchers start from a capable base and alter its block structure in pursuit of a stronger model. He uses a reported 2024 ablation paper to connect deleting blocks with later duplicating them, but identifies neither the paper nor its tested models. [00:00:00]-[00:00:51]
- In his account, removing initial or final blocks can destroy capabilities, while removing some middle or deeper blocks leaves a model partly functional. He attributes this tolerance to residual connections, through which each block adds a change to an existing representation instead of replacing the entire signal. [00:01:43]-[00:04:50]
- He hypothesizes that later blocks repeatedly refine a similar semantic representation through small reasoning steps. He compares this to Bayesian updating but separates the analogy from output logits representing token probabilities. The analogy is an interpretation, not a mechanism demonstrated by ablation alone. [00:02:48]-[00:04:50]
- Sanfilippo says the ablated model can retain factual answers and some reasoning while degrading on harder reasoning benchmarks. He rejects the idea that removed layers do nothing: in his interpretation, small individual contributions accumulate into capability. No benchmark names, scores, removal schedules, or repeated runs are supplied. [00:04:50]-[00:05:52]
- He reports that removing roughly 35–40% of blocks can leave a working model and could reduce memory or improve inference speed. He calls this revealing but often unnecessary because model families already ship in many sizes; the recording provides no measured latency, memory, or quality trade-off. [00:05:52]-[00:06:53]
- The reverse operation is not immediately symmetric. A duplicated block receives its original block's output rather than the input on which its weights were trained, so Sanfilippo says naive duplication initially worsens performance. Residual connections may keep the representation usable, but they do not make the new depth useful without further adaptation. [00:07:57]-[00:09:52]
- He describes continued pretraining, full fine-tuning, or LoRA after duplication. Another option inserts an identity-like or simpler block and freezes the original transformer so new capacity learns without initially perturbing the existing path. These are possibilities, not procedures evaluated here. [00:09:52]-[00:11:47]
- As a more aggressive historical example, he recalls Solar growing from roughly 7 billion to 12 billion parameters by joining selected middle portions of a model, omitting the original head and tail at the join, then adapting the resulting seam through training. He says Solar performed better, but gives the sizes from memory and provides no baseline, training budget, metric, or citation. [00:13:59]-[00:14:56]

## Practical Implications

- Treat block removal as task-specific compression: map removed positions, then measure factual recall, reasoning, generation quality, memory, throughput, and failure modes on the intended workload.
- Residual connectivity can explain why structural edits do not always break execution, but continued operation is not evidence that quality is preserved or that every surviving block sees its expected representation.
- When evaluating duplicated or inserted blocks, separate the effect of architecture from additional pretraining data, optimization steps, adapters, and compute. Compare against an unchanged model continued under the same budget.
- Regard parameter counts and nominal depth as capacity descriptions, not achieved capability. A larger stitched model still needs explicit training, evaluation, and deployment measurements.

## Questions and Tensions

- The recording names no ablation paper, checkpoint, benchmark suite, block-selection rule, score, run count, uncertainty estimate, or implementation, so its 35–40% range is not reproducible here.
- Calling later blocks incremental reasoning steps or Bayesian refinements is a conceptual hypothesis. The observed survival of some outputs after ablation does not by itself identify what each block computes.
- Factual answers and complex reasoning can vary with model family, task, prompt, decoding, and removal position. The video does not establish a general compression threshold.
- Added blocks initially degrade the model in Sanfilippo's description, while any later gain follows more training. Without a compute-matched control, architecture expansion and additional optimization remain confounded.
- The Solar architecture and parameter figures are recalled rather than sourced, and no result is reproduced. Likewise, the proposed enlargement of a frontier model is a hypothetical path, not a completed training outcome.
- Auto-generated captions render several model and hardware names ambiguously. The summary preserves the technical structure of the argument without resolving uncertain product naming from outside the source.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=4YISBw_4vLU)
- [transcript.md](./transcript.md)
