---
title: "Chi se ne frega di Jev?"
videoId: -Km-bQ1uQl4
sourceUrl: "https://www.youtube.com/watch?v=-Km-bQ1uQl4"
publishedAt: "2026-09-20T17:04:19Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo questions the attention given to Jev, which he describes as a classification model from former OpenAI employees. He acknowledges a useful niche for fast, inexpensive classification with calibrated probabilities, but distinguishes that commercial use from what he considers technically interesting. He explicitly notes that little public information is available; his architectural suggestions are hypotheses, not an account of a verified implementation. [00:00:01]-[00:00:57], [00:04:03]

## Key Ideas

- **Classification and autoregressive reasoning serve different needs.** Sanfilippo describes Jev as assigning probabilities to labels, such as categories for incoming messages. He speculates that it could use an LLM with a retrained output layer or a BERT-like bidirectional architecture. His contrast is with an autoregressive model that can generate intermediate reasoning before answering, rather than produce labels in a single forward pass. The video does not establish Jev's actual architecture. [00:00:01]-[00:03:03]
- **Calibration is useful, but does not confer reasoning ability.** He explains calibration as probabilities corresponding to how likely the labels really are. In his account, post-trained LLMs can put excessive weight on a preferred answer when label probabilities are read from output logits. He nevertheless argues that a calibrated classifier remains limited by the tasks it can solve: calibration does not replace the ability to reason through a difficult input. He offers routing uncertain messages to human review as a use case, without presenting calibration measurements or a comparative evaluation. [00:00:57]-[00:03:03]
- **A viable product need not be a major technical advance.** Sanfilippo accepts that inexpensive, high-speed classification can meet industrial demand and that building such a company may be sensible. His objection is to the breadth of the excitement: he thinks existing LLMs already handle many potential use cases and values their flexible prompting and autoregressive output. These are his assessments, not benchmark-backed rankings of the alternatives. [00:04:03]-[00:05:07]
- **Repeated attention is not evidence of importance.** He says audience questions prompted the video, then argues that an initial burst of publicity can be amplified by people who have not assessed the underlying technical contribution. His criticism of AI discourse is an opinion about how attention spreads, not evidence that a particular user's classification need is unimportant. [00:05:07]-[00:07:02]

## Practical Implications

- Editorial: When evaluating a classifier against an autoregressive model, separate label quality, probability calibration, latency, cost, and the need for intermediate reasoning. The talk motivates these distinctions but supplies no measurements that would select a winner for a particular workload. [00:00:57]-[00:05:07]
- Editorial: Treat a confidence threshold for human review as a decision rule to validate on the intended task, not as proof that a model can handle inputs beyond its capabilities. This follows from Sanfilippo's distinction between calibration and reasoning limits. [00:01:58]-[00:03:03]

## Questions and Tensions

- Sanfilippo acknowledges limited public information while making a strong judgment about Jev's technical interest. Its actual architecture, calibration, speed, and cost remain unverified within this talk. [00:00:01]-[00:04:03]
- His dismissal of the publicity coexists with an explicit concession that the product could meet real industrial needs. The distinction is between his own technical interests and usefulness to customers, not a demonstration that the product has no value. [00:04:03]-[00:06:10]

## Source

- Original video: https://www.youtube.com/watch?v=-Km-bQ1uQl4
- Full Italian auto-generated captions: [transcript.md](./transcript.md)
