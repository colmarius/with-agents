---
title: "OpenAI o3: un paio di ragionamenti in libertà su questo nuovo modello e sulle direzioni della AI"
videoId: vIUzIYpmb9Q
sourceUrl: "https://www.youtube.com/watch?v=vIUzIYpmb9Q"
publishedAt: "2024-12-21T13:17:00Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

In this early reaction to the OpenAI o3 announcement, Salvatore Sanfilippo focuses less on a definitive model ranking than on what the reported results might imply. His central hypothesis is that more compute and a broader internal search through chain-of-thought reasoning could produce major gains without first combining language models with a separate symbolic system.

## Key Ideas

- Sanfilippo describes o3 as following the o1 approach: the model is conditioned to perform an internal reasoning dialogue before producing its answer, rather than receiving chain-of-thought instructions only through a user prompt. [00:00:00]-[00:01:11]
- He is skeptical of company claims about imminent general intelligence, but treats the reported ARC benchmark result as important because François Chollet discussed it and because o3 appeared to reach human-level performance on some tasks while still missing some easy human tasks. [00:01:11]-[00:02:15]
- If the initial reports hold, Sanfilippo argues that major progress may not require an immediate shift to a hybrid of language models and symbolic reasoning. A deeper search through the space of possible solutions might be another route. [00:02:15]-[00:03:18]
- He interprets chain-of-thought as both enriching the context used for the final answer and expanding the search while pruning many implausible branches through the model's learned judgments. [00:03:18]-[00:04:22]
- The reported benchmark runs used unusually high inference compute. Sanfilippo treats that cost as a serious optimization problem, but not as evidence that the capability gain is meaningless, especially because he says lower-compute results also exceeded the previous state of the art. [00:04:22]-[00:05:29]

## Practical Implications

- Treat increased inference-time search as a distinct scaling dimension alongside model size and training compute.
- Compare reasoning systems at several compute budgets rather than reducing evaluation to a single benchmark score.
- Separate evidence about task capability from forecasts about general intelligence or the architecture required to reach it.

## Questions and Tensions

- This is an immediate response based on announcement materials, not an independent evaluation; the benchmark results and compute costs require primary-source verification.
- Strong ARC, programming, or mathematics results do not by themselves establish broad general intelligence.
- The account of chain-of-thought as search and pruning is Sanfilippo's explanatory interpretation, not a direct measurement of the model's internal mechanism.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=vIUzIYpmb9Q)
- [transcript.md](./transcript.md)
