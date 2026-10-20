---
addedDate: '2026-10-20'
title: "This $12 billion startup finally shipped something..."
resourceId: 185
date: '2026-07-20'
collection: fireship
order: 31
videoId: M51asSwRLxA
---

Fireship describes Thinking Machines' reported Inkling release as a customizable base for specialist models rather than a winner on general benchmarks. This summary uses English auto-generated captions only; architecture, training details, weights, and demonstrations were not independently inspected, and the performance claims remain attributed to the report.

## Key ideas

- Inkling is described as a multimodal mixture-of-experts model with 970 billion total parameters and 41 billion active per token, a million-token context, and Apache-licensed weights. Sparse activation reduces computation relative to activating the whole model, not the size of all weights that must be hosted. [01:03–02:06](https://www.youtube.com/watch?v=M51asSwRLxA&t=63s)
- Fireship says its general scores trail frontier models, while a thinking-effort control allows a tradeoff between fast responses and more work per task. The reported token-efficiency comparison on Terminal Bench is a specific benchmark claim, not proof of lower cost for every application. [02:06–03:11](https://www.youtube.com/watch?v=M51asSwRLxA&t=126s)
- The reported demonstration connects the model to Tinker to generate training data, run a fine-tuning job, and load altered weights that avoid the letter E. This is a narrated example of a tool-assisted training workflow, not evidence of unrestricted autonomous self-improvement. [02:06–04:01](https://www.youtube.com/watch?v=M51asSwRLxA&t=126s)
- Fireship attributes uncertainty-aware behavior to rewards for admitting missing knowledge and reports strong forecasting results. Neither claim guarantees calibrated answers on an arbitrary task. Separately, he describes the model as processing pixels and audio directly rather than through separate encoders. [03:11–04:01](https://www.youtube.com/watch?v=M51asSwRLxA&t=191s)

## Practical implications

Editorial: Evaluate a customizable model on the target task after training, including uncertainty handling and total operating cost, rather than assuming the highest general score is the only useful selection criterion.

## Questions and limits

Editorial: Fireship's interpretation that free weights support a paid fine-tuning business is business analysis, not a disclosed internal plan established here. Clerk's closing agent-driven authentication and billing example is sponsored promotion; a passing build does not independently establish production readiness. [04:01–05:18](https://www.youtube.com/watch?v=M51asSwRLxA&t=241s)

Full video: <https://www.youtube.com/watch?v=M51asSwRLxA>
