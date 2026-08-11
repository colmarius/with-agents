---
title: "AI concepts: a guided starting point"
resourceId: 23
date: "2026-08-09"
---

*All English wording below is an editorial translation/paraphrase of Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo's Italian-language playlist works best as a research and engineering notebook rather than a course with one settled thesis. It moves between model representations, reasoning, interpretability, architecture papers, open weights, local inference, the economics of useful computation, and speculative questions about AI and cosmology.

For coding-agent practitioners, its most useful habit is methodological: distinguish an appealing explanation from the intervention, ablation, representative task, or system measurement that would make the explanation credible.

### Key themes

- **Representations preserve selected information, not the whole object.** Sanfilippo introduces embeddings as lossy numeric representations ([00:00:57–00:10:48](https://www.youtube.com/watch?v=T5b69_8f5MI&t=57s)) and follows the trade-offs through similarity search, quantization, and dimensionality reduction ([00:11:59–00:32:12](https://www.youtube.com/watch?v=T5b69_8f5MI&t=719s)).
- **Next-token prediction is a mechanism, not a complete behavioral description.** He argues that the prediction-versus-reasoning binary obscures hidden nonlinear computation and the model's uneven profile of task-specific abilities ([00:01:13–00:08:17](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s)).
- **Interpretability claims become stronger when they survive intervention.** In his account of Anthropic's work, feature labels and a surrogate model remain interpretations; perturbing the original model and observing the predicted change supplies more direct evidence ([00:06:12–00:09:27](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s)).
- **Architecture stories need ablation.** A reported reimplementation of a hierarchical reasoning model found that iterative refinement and augmentation explained more of the result than the headline hierarchy suggested ([00:03:53–00:07:58](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s)).
- **Open weights, reproducibility, licensing, and operational independence are different properties.** Sanfilippo values downloadable weights and inference code while acknowledging that they do not reproduce the original data or training pipeline ([00:12:16–00:15:43](https://www.youtube.com/watch?v=n3rdoQnN7Co&t=736s)).
- **Efficiency should ultimately describe useful completed work.** He proposes looking beyond token rate toward task success and energy, while the recording remains a conceptual argument rather than a controlled measurement ([00:08:19–00:12:38](https://www.youtube.com/watch?v=ibcqRGQ7BKY&t=499s)).
- **Conceptual frameworks organize uncertainty but do not replace measurement.** In his Fermi-paradox discussion, Sanfilippo emphasizes compounding probability uncertainty, tests whether AI could be a universal Great Filter, and labels the paradox a framework for questions rather than a formal result ([00:03:03–00:06:06](https://www.youtube.com/watch?v=cNYwbDI1QOY&t=183s), [00:09:10–00:13:15](https://www.youtube.com/watch?v=cNYwbDI1QOY&t=550s)).

### Where to start

1. [Embeddings and vector search](https://www.youtube.com/watch?v=T5b69_8f5MI&t=57s) for the playlist's clearest foundation in representations and information loss.
2. [Prediction, reasoning, and alternative frames](https://www.youtube.com/watch?v=497EK7ZQ2FY&t=73s) for Sanfilippo's pragmatic view of the prediction-versus-reasoning debate.
3. [Interpretability, composition, and intervention](https://www.youtube.com/watch?v=TlGrAretPQw&t=372s) for his reading of feature tracing and causal perturbation.
4. [Why architecture claims need ablation](https://www.youtube.com/watch?v=PHsxD4X2V2A&t=233s) for the playlist's strongest example of evidence correcting a marketable story.
5. [Open weights versus open source](https://www.youtube.com/watch?v=n3rdoQnN7Co&t=736s) for the practical and unresolved meanings of model openness.
6. [Useful work per token and per joule](https://www.youtube.com/watch?v=ibcqRGQ7BKY&t=499s) for a speculative but useful prompt about measuring whole-task efficiency.
7. [AI and the Fermi paradox](https://www.youtube.com/watch?v=cNYwbDI1QOY&t=183s) for a clear example of using a conceptual framework while preserving its evidentiary limits.

Read the cross-playlist synthesis in [Behavior Over Explanation](/posts/behavior-over-explanation), or [watch the full AI concepts playlist](https://www.youtube.com/playlist?list=PLrEMgOSrS_3eW1UK1D5coDp75wTf62jj6).
