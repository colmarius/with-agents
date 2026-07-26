---
title: "Il nuovo paper del team di Kimi: Attention Residuals"
videoId: S8iuzrkYpIk
sourceUrl: "https://www.youtube.com/watch?v=S8iuzrkYpIk"
publishedAt: "2026-03-23T17:30:09Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo explains a Moonshot AI paper that, in his account, replaces fixed residual accumulation across transformer depth with input-dependent attention over earlier block representations. He presents the design as a deeper change to the transformer than routine optimization, but the recording neither identifies quantitative paper results nor independently implements or reproduces the method.

## Key Ideas

- Sanfilippo praises Chinese laboratories for publishing architecture research, then connects Moonshot AI to a dispute over Cursor's reported use of Kimi K2.5 in Composer 2. He alleges inadequate attribution under a modified MIT license, but supplies no model analysis, license text, company statement, or authorization record. This dispute is his report, not evidence about the paper's method. [00:00:01]-[00:03:18]
- In his description of an ordinary transformer, each block adds its update through a residual connection, so successive blocks refine a representation that carries accumulated earlier contributions. The video gives this conceptual account without equations, implementation details, or a named baseline architecture. [00:04:27]
- He attributes two problems to fixed accumulation across depth: normalization can make a later block's contribution comparatively harder to express, and backward-projected gradients can differ substantially between early and late layers. These are the speaker's technical explanation; no measured activation, normalization, or gradient data appears in the recording. [00:05:24]
- His motivating contrast is between horizontal attention and vertical residual flow. Token attention can dynamically weight earlier tokens for the current input, whereas a conventional residual path combines block contributions through a fixed rule that does not select among earlier depth-wise representations. [00:06:29]
- As Sanfilippo describes the paper, Attention Residuals lets a layer form an input-dependent linear combination of outputs from earlier blocks and combine it with the current block's contribution. He interprets this as allowing each layer to choose which earlier refinements matter for the current input. [00:06:29]-[00:07:39]
- He reports only qualitatively that the approach works and calls it semantically more powerful. He also says fully dynamic attention across blocks would increase computation and limit parallelization. No score, model size, training budget, latency, or quality comparison is stated. [00:07:39]
- The design in his account mixes learned fixed representations with projections derived dynamically at inference. It groups earlier layers into superblocks, reducing the representations over which a deeper layer selects. Which projections are fixed, the grouping schedule, and the resulting complexity are unstated. [00:08:40]-[00:09:51]
- Sanfilippo suggests that depth groups may retain different syntactic or semantic information, then predicts stronger architectures will matter as returns from reinforcement learning and parameter scaling diminish. His roughly one-trillion-parameter standard and forecast of saturation are broad interpretations, not reproduced results. [00:09:51]-[00:11:04]

## Practical Implications

- Read the paper and implementation before translating this high-level account into code; the transcript leaves the projection equations, normalization placement, grouping policy, training procedure, and inference path underspecified.
- Evaluate dynamic depth-wise residual attention against a conventional residual baseline under matched model size, data, optimization, and compute. Report quality together with memory, training cost, inference latency, and parallelization effects.
- Ablate input-dependent weighting, fixed learned projections, and superblock grouping separately so any gain is not attributed to the combined architecture without evidence.
- Keep the reported Composer attribution dispute separate from evaluation of Attention Residuals. Model provenance, authorization, license compliance, and architectural merit require different evidence.

## Questions and Tensions

- The paper and code are said to be linked in the video description, but neither is part of the transcript. Exact architecture, equations, checkpoints, datasets, and experimental tables therefore remain unavailable in this source.
- The qualitative statement that the method works gives no benchmark, metric, baseline, score, variance, run count, hardware, precision, context length, or compute budget. It cannot establish the size or reproducibility of an improvement.
- Sanfilippo's explanations about diluted contributions, normalization, gradient scale, and syntactic versus semantic depth groups are not separated from claims directly reported from the paper.
- Grouping earlier blocks reduces selection granularity while lowering cost. The transcript does not characterize that trade-off or say whether group boundaries are fixed, learned, or architecture-specific.
- The balance between fixed and input-dependent projections is described only verbally, so neither asymptotic complexity nor practical overhead can be inferred safely.
- The Composer 2 base-model, reinforcement-learning, authorization, and attribution claims are not independently checked here and do not validate or invalidate the research contribution.
- The closing scaling argument is prospective. The video does not show that scaling has saturated or that this architecture produces a frontier model.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=S8iuzrkYpIk)
- [transcript.md](./transcript.md)
