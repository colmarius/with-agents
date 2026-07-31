---
title: "Qwen 3.5"
videoId: NDBQq_NzxiE
sourceUrl: "https://www.youtube.com/watch?v=NDBQq_NzxiE"
publishedAt: "2026-03-05T10:12:35Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo gives an early assessment of the Qwen 3.5 model family and the organizational uncertainty surrounding its release. He sees the small models as a meaningful step toward useful local coding agents, especially for privacy-sensitive work, while emphasizing that hosted frontier models remain stronger and often cheaper.

## Key Ideas

- Sanfilippo describes Qwen 3.5 as an unusually large capability gain among small open-weight models. He highlights a 27-billion-parameter dense model and a 35-billion-parameter mixture-of-experts model with about 3 billion active parameters, while attributing their benchmark and agent performance to early reports. [00:00:00]-[00:01:13]
- The dense model is reported to be slightly more capable, whereas the sparse model can iterate much faster. Sanfilippo sees the 27-billion-parameter version as a strong GPU option and the faster mixture-of-experts version as potentially preferable when repeated attempts outweigh a small quality difference. [00:01:13]-[00:02:10]
- The family also includes larger and very small models. He speculates that the smaller releases may have been distilled from the largest training run, but presents neither that lineage nor the recalled parameter counts as confirmed. [00:03:15]
- Qwen's leaders reportedly said the team achieved strong results despite limited GPU capacity. Sanfilippo interprets this as technical efficiency, while explicitly expressing uncertainty about comparisons with DeepSeek's compute resources. [00:04:14]-[00:05:30]
- Soon after the model release, prominent Qwen researchers announced departures. Sanfilippo relays reports of friction between product and engineering groups and a possible dispute over future open-weight releases, but says the cause was not yet clear. [00:05:30]-[00:06:43]
- For simpler coding tasks, he considers Qwen 3.5 the first small-model generation that makes a genuinely useful local agent practical through tools such as Aider or OpenCode. He still places it below hosted frontier systems and argues that privacy, rather than cost, is the strongest reason to deploy it locally. [00:07:41]-[00:09:54]

## Practical Implications

- Compare dense and sparse models using end-to-end task completion, iteration speed, memory capacity, and stability—not parameter count alone.
- Validate a local model through the intended agent harness and representative tasks before provisioning developer hardware.
- Use local inference when data-boundary requirements justify its operational cost; do not assume it is automatically cheaper than a hosted service.
- Treat team changes and release-policy rumors as risks to monitor, not established facts about future weight availability.

## Questions and Tensions

- The parameter counts, benchmark comparisons, model lineage, and personnel reports are recalled from contemporary discussion and are not independently verified here.
- Reports that a local agent works on simpler tasks do not establish reliability on large, long-running, or safety-critical changes.
- A fast sparse model can afford more attempts, but repeated attempts do not necessarily compensate for systematic errors.
- Organizational departures may affect future releases, yet the transcript does not establish their causes or long-term consequences.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=NDBQq_NzxiE)
- [transcript.md](./transcript.md)
