---
title: "This $12 billion startup finally shipped something..."
videoId: M51asSwRLxA
sourceUrl: "https://www.youtube.com/watch?v=M51asSwRLxA"
publishedAt: "2026-07-20T17:02:30Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Fireship describes Thinking Machines' reported Inkling release as a customizable base for specialist models rather than a winner on general benchmarks. This summary uses English auto-generated captions only; architecture, training details, weights, and demonstrations were not independently inspected, and the performance claims remain attributed to the report.

## Key Ideas

- Inkling is described as a multimodal mixture-of-experts model with 970 billion total parameters and 41 billion active per token, a million-token context, and Apache-licensed weights. Sparse activation reduces computation relative to activating the whole model, not the size of all weights that must be hosted. [00:01:03]
- Fireship says its general scores trail frontier models, while a thinking-effort control allows a tradeoff between fast responses and more work per task. The reported token-efficiency comparison on Terminal Bench is a specific benchmark claim, not proof of lower cost for every application. [00:02:06]
- The reported demonstration connects the model to Tinker to generate training data, run a fine-tuning job, and load altered weights that avoid the letter E. This is a narrated example of a tool-assisted training workflow, not evidence of unrestricted autonomous self-improvement. [00:02:06]-[00:03:11]
- Fireship attributes uncertainty-aware behavior to rewards for admitting missing knowledge and reports strong forecasting results. Neither claim guarantees calibrated answers on an arbitrary task. Separately, he describes the model as processing pixels and audio directly rather than through separate encoders. [00:03:11]

## Practical Implications

Editorial: Evaluate a customizable model on the target task after training, including uncertainty handling and total operating cost, rather than assuming the highest general score is the only useful selection criterion.

## Questions and Tensions

Editorial: Fireship's interpretation that free weights support a paid fine-tuning business is business analysis, not a disclosed internal plan established here. Clerk's closing agent-driven authentication and billing example is sponsored promotion; a passing build does not independently establish production readiness. [00:04:01]-[00:04:56]

## Source

https://www.youtube.com/watch?v=M51asSwRLxA

[transcript.md](./transcript.md)
