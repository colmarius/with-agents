---
title: "Sono i token o le GPU il più grande fattore limitante per gli LLM?"
videoId: mJyxKkfYWuQ
sourceUrl: "https://www.youtube.com/watch?v=mJyxKkfYWuQ"
publishedAt: "2025-09-29T16:25:53Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo challenges the claim that limited text data, rather than limited compute, is the main obstacle to further LLM progress. He argues that training data contains substantial redundancy, later training stages can generate additional learning signals, and slow frontier-scale experiments constrain the iteration needed to discover better methods.

## Key Ideas

- The position Sanfilippo disputes is that available pre-training tokens are nearing exhaustion, so model scaling must stall without an architectural change. He notes that human-produced data and human evaluation still underpin both pre-training and reinforcement learning from human feedback. [00:00:03]-[00:02:23]
- Even under a purely interpolative account of LLMs, he questions how much unique information additional trillions of tokens provide because languages, concepts, and grammar recur throughout the corpus. He asks whether fewer tokens seen for more epochs might sometimes be competitive. [00:03:21]-[00:04:37]
- More data may add useful nuances or help optimization find shared gradients and more abstract structure, but Sanfilippo expects diminishing returns as the corpus increasingly saturates what humans have expressed. [00:04:37]-[00:05:49]
- The full training pipeline does not rely only on fixed human text. Thinking models can produce sampled reasoning paths, evaluator models can rank them, and reinforcement learning with verifiable answers can create learning signals in bounded domains; he uses AlphaZero as an existence example while distinguishing those domains from general intelligence. [00:01:12]-[00:02:23] [00:06:50]
- Sanfilippo sees compute as crucial because frontier experiments can take months, making rapid iteration on training techniques difficult. He compares this delay to waiting months after every program compilation before seeing whether a change worked. [00:08:09]-[00:09:22]
- More GPUs alone do not guarantee shorter training: the pipeline must keep them utilized and scale effectively. Reinforcement learning with verifiable answers is itself expensive because it produces, stores, groups, and evaluates many candidate trajectories. [00:09:22]-[00:10:31]
- In a closing aside, he describes Qwen 3 Max as potentially significant if its reported benchmarks hold and discusses efficiency, weight availability, and first-party API economics as unresolved parts of its practical impact. [00:10:31]-[00:13:06]

## Practical Implications

- Separate corpus size, unique information, number of training passes, synthetic trajectories, and verifiable feedback when diagnosing a data bottleneck.
- Optimize time to a trustworthy experiment, not only aggregate accelerator count or one final training run.
- Measure whether a training pipeline actually saturates its hardware before attributing slow iteration to insufficient GPUs.
- Treat benchmark claims, model-weight availability, and serving economics as separate questions when evaluating a new model family.

## Questions and Tensions

- The transcript offers a conceptual case rather than measurements comparing additional data, repeated epochs, and additional compute at frontier scale.
- AlphaZero shows what verifiable reinforcement learning can achieve in closed games; it does not establish how far the approach transfers to open-ended language tasks.
- Synthetic data and model-based evaluation can expand the training signal while also reproducing model errors or narrowing diversity.
- The Qwen performance, efficiency, release, and business claims are provisional in the narration and are not independently verified here.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=mJyxKkfYWuQ)
- [transcript.md](./transcript.md)
