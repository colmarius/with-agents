---
title: "Kimi K2.5 (bonus point: Open Weights è Open Source?)"
videoId: n3rdoQnN7Co
sourceUrl: "https://www.youtube.com/watch?v=n3rdoQnN7Co"
publishedAt: "2026-01-28T17:30:30Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo presents Moonshot AI's newly released Kimi K2.5 as a Chinese open-weight frontier model with technical and geopolitical significance. He describes the architecture and company-reported benchmarks, then argues that downloadable weights and inference code provide much of the practical value commonly sought from open source, even without the original training data and pipeline.

## Key Ideas

- At the time of recording, Sanfilippo contrasts Moonshot AI's reported $3.6 billion valuation with much larger US AI-company valuations. He argues that the release of a strong Chinese open-weight model deserves more attention than minor product features from better-known vendors. [00:00:01]-[00:01:53]
- He describes Kimi K2.5 as a one-trillion-parameter sparse Mixture-of-Experts model that activates 32 billion parameters per generated token, routes to eight of roughly 380 experts, and includes one shared expert. These figures are presented from the release, not independently checked in the video. [00:01:53]-[00:03:08]
- Sanfilippo treats the vendor's benchmark history as credible but still calls for independent evaluation. He criticizes frontier-model companies for publishing their own comparisons and, in his view, increasingly comparing only against their prior products. [00:03:08]-[00:04:15]
- He says the multimodal model received vision-and-coding training intended to help agents solve interface problems. More broadly, he argues that agent performance depends on short, observable feedback loops; for long training jobs, he suggests smaller proxy models, while visual programs may require better instrumentation or vision feedback. [00:04:15]-[00:06:38]
- In the benchmark results he recounts, Kimi K2.5 is usually slightly behind GPT-5.2 and Claude Opus 4.5, usually ahead of Gemini 3 Pro, and well ahead of DeepSeek 3.2. These are company-reported benchmark outcomes rather than tests reproduced in the video. [00:07:51]-[00:09:59]
- He recalls the license as a modified BSD license that adds prominent attribution requirements for products above specified user or monthly-revenue thresholds. Because he is citing the terms from memory, the exact conditions require confirmation from the published license. [00:09:59]-[00:12:16]
- For practical reuse, Sanfilippo emphasizes that the architecture and Python inference code are available alongside the weights. He argues that this permits custom inference and continued training, while acknowledging that the exact reinforcement-learning pipeline is not included. [00:12:16]-[00:13:26]
- He proposes testing a downloaded model on newly devised, relevant problems when benchmark leakage is a concern. He considers full training reproduction unrealistic for most users because it also requires immense compute and rebuilding data and training infrastructure. [00:13:26]-[00:14:32]
- Sanfilippo says the model was trained for native 4-bit quantization, but explicitly does not know the exact method and guesses it may be quantization-aware training. He estimates roughly 500 GB for quantized weights and 600–700 GB including KV-cache capacity, then presents distributed inference on several Apple machines as a strategic possibility—not a demonstrated setup or measured result. [00:14:32]-[00:16:50]

## Practical Implications

- Treat vendor benchmark tables as leads: compare models on newly written tasks that resemble the intended workload and document the evaluation method.
- Separate practical model access from full reproducibility. Weights and inference code can support inspection, adaptation, and self-hosting even when training data and the original reinforcement-learning pipeline are absent.
- Design agent workflows around fast, observable feedback. Use representative proxies for expensive experiments and add instrumentation when the agent cannot directly observe program behavior.
- Confirm license terms, quantization support, memory requirements, interconnect costs, and throughput before planning production or strategic infrastructure around an open-weight release.

## Questions and Tensions

- The architecture and performance comparisons come from the release materials as recounted by Sanfilippo; the video performs no independent benchmark and gives no run counts, task-selection method, or reproducibility details.
- The license thresholds are recalled from memory. The video does not establish the exact legal text, currency, definition of users, or obligations for a particular deployment.
- Equating much of open source's practical value with open weights leaves unresolved questions about training-data provenance, copyright, training-code access, governance, and full reproducibility.
- The 4-bit method is uncertain, and the 600–700 GB distributed-inference proposal is an estimate rather than an implemented or benchmarked system.
- The geopolitical argument depends on continued access to weights, sufficiently permissive licenses, affordable hardware, and a durable ecosystem—not solely on one model release.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=n3rdoQnN7Co)
- [transcript.md](./transcript.md)
