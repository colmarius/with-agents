---
addedDate: '2026-10-20'
title: "Meta's new model wants \"deep access\" to your personal life..."
resourceId: 185
date: '2026-08-12'
collection: fireship
order: 25
videoId: G55HSGpuh1M
---

Fireship describes Muse Glimmer as Meta's return to locally deployable weights and explains three techniques intended to make a smaller agent model useful on consumer hardware. This summary uses English auto-generated captions, not model files, benchmarks, or inspected demonstrations. Release, license, and performance details remain attributed to Fireship's report.

## Key ideas

- The reported model is a dense 30-billion-parameter release under Apache 2.0, positioned for personal agents with access to email and calendars. Local deployment can change who receives the data, but broad personal access still creates consequences if the agent is manipulated. [00:00–02:05](https://www.youtube.com/watch?v=G55HSGpuh1M&t=0s)
- Fireship describes logit distillation from the larger closed Muse Spark model: the student learns from the teacher's probability distributions. This is a training relationship, distinct from merely copying a teacher's single final answer. His claims about Meta's strategic motives are interpretation rather than established internal intent. [02:05–03:03](https://www.youtube.com/watch?v=G55HSGpuh1M&t=125s)
- Quantization reportedly reduces weight precision to about four bits and brings the model below 20 GB, versus more than 55 GB at full precision. These are reported model-memory figures, not a complete accounting of all memory needed to serve long contexts. [03:03–04:05](https://www.youtube.com/watch?v=G55HSGpuh1M&t=183s)
- Speculative decoding uses a smaller draft model to propose a block of tokens that the larger model verifies together. Fireship reports a threefold speedup on an RTX 5090; the transcript does not establish performance across other hardware or workloads. [03:03–04:05](https://www.youtube.com/watch?v=G55HSGpuh1M&t=183s)
- The reported prompt-injection success rate is 28%, compared with 40% for a competitor. Fireship highlights that relative improvement still leaves frequent failures, which matters for a model intended to handle sensitive personal information. [03:03–04:05](https://www.youtube.com/watch?v=G55HSGpuh1M&t=183s)

## Practical implications

Editorial: Evaluate hardware fit, task accuracy, and prompt-injection exposure separately. A permissive weight license and local execution do not by themselves provide safe tool permissions or reliable personal-data handling.

## Questions and limits

Editorial: Promised future Spark weights are not an available release. The political and corporate-motive narrative includes speculation and satire. OpenRouter's closing routing features and fictional Rust-rewrite story are sponsored promotion, not an independent evaluation of Glimmer. [04:05–05:43](https://www.youtube.com/watch?v=G55HSGpuh1M&t=245s)

Full video: <https://www.youtube.com/watch?v=G55HSGpuh1M>
