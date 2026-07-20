---
title: "Gli LLM sanno stimare la complessità dei problemi che affrontano"
videoId: sVF85x1Wh7g
sourceUrl: "https://www.youtube.com/watch?v=sVF85x1Wh7g"
publishedAt: "2025-11-07T17:45:07Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo discusses research that uses a linear probe to recover how difficult an LLM represents a problem as being. He highlights a reported distinction between human-like judgments of intrinsic difficulty and the model's own likelihood of success, then describes an activation-steering result that raises questions about learned reasoning behavior.

## Key Ideas

- Sanfilippo introduces Kimi K2 Thinking as a very large reasoning model and uses it to revisit why an explicit chain of thought may help: generated tokens bring relevant knowledge into the context and success-oriented training can shape a sequence toward an answer. [00:01:23]-[00:03:35]
- An initially wrong reasoning path may still help if the model can inspect it in context and reverse course before producing the final answer. He treats this as another way intermediate tokens can affect later predictions. [00:04:37]
- He says recent Chinese open-weight models have narrowed the performance gap with leading closed models, while still differing in capability and context-window size. This is background commentary rather than the video's main research result. [00:05:50]
- The paper he discusses applies linear probes to several models to extract a representation of the difficulty of the problem currently being presented. [00:08:09]
- Sanfilippo explains a linear probe as a single linear layer trained over a network's activation state. Because its transformation is simple, he uses successful extraction as evidence that the underlying state already represents the target information in an accessible form. [00:09:09]
- The reported experiment compares the probe output with difficulty scores assigned by human experts. Sanfilippo says the recovered scores track those human judgments closely. [00:10:21]
- He emphasizes that this representation reportedly correlates more strongly with human-rated problem difficulty than with how often other LLMs solve the problem. He therefore interprets it as a human-like estimate of intrinsic difficulty, not merely self-knowledge about likely success. [00:11:24]
- The researchers also reportedly steer activations along the probe direction. Making a problem feel easier is described as improving solution rates, reducing hallucinations, and encouraging tool use, which Sanfilippo sees as a clue that reinforcement learning can sometimes reinforce counterproductive reasoning behavior. [00:12:21]-[00:13:20]

## Practical Implications

- Distinguish a model's representation of task difficulty from calibrated confidence about whether that model will solve the task.
- Use probes as diagnostic evidence of accessible internal representations, while avoiding the stronger claim that they fully explain how those representations are computed.
- Test activation interventions against unmodified controls and measure tool use, accuracy, and hallucination rates separately.
- Treat reasoning length or expressed uncertainty as learned behavior that may not always improve task performance.

## Questions and Tensions

- The transcript does not identify the paper, models, dataset, correlation values, intervention size, or evaluation protocol, so the reported effects cannot be assessed quantitatively from this source alone.
- Linear decodability shows that information is accessible in activations, but does not by itself establish that the model uses that information causally when answering.
- Steering a representation labeled as difficulty may alter other correlated features, making the mechanism behind any improvement uncertain.
- The video's broader comments about model quality and chain-of-thought mechanisms are explanatory interpretations rather than controlled comparisons presented in the transcript.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=sVF85x1Wh7g)
- [transcript.md](./transcript.md)
