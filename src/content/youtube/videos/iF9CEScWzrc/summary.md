---
title: "Capire il sampling negli LLM"
videoId: iF9CEScWzrc
sourceUrl: "https://www.youtube.com/watch?v=iF9CEScWzrc"
publishedAt: "2026-08-28T08:00:30Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo explains sampling as choosing both an output token and the next input to an autoregressive model. He distinguishes several reasons to introduce randomness and argues that reinforcement learning changes their relative importance. His broad performance and training claims are not accompanied by benchmark results in this recording.

## Key Ideas

- Greedy decoding chooses the highest-scoring next token. Sampling can choose alternatives, which then become part of the context and change subsequent generation: the effect is not merely stylistic variation. Sanfilippo claims greedy decoding generally scores best on benchmarks, but does not establish that as a universal rule. [00:01:01]-[00:03:49]
- One reason to sample is to obtain different candidate explanations or implementations for the same prompt. Another is to escape repetitive loops, although he describes that as a workaround for training or capability limitations rather than their cure. [00:04:53]-[00:09:06]
- A third use is generating several answers and asking a model to produce a new answer with them as context. He distinguishes this synthesis from merely ranking candidates, which can fail near the model's capability limit. [00:10:11]-[00:11:51]
- A fourth use is exploration during reinforcement learning: varied answers provide alternatives to reinforce, particularly when correctness can be checked. Multiple attempts may find a valid answer more often than one attempt; this does not mean each sample is better. [00:11:51]-[00:12:55]
- He argues that extensive reinforcement learning narrows default output variety while making higher-temperature trajectories less fragile and reducing looping. He also interprets learned chain-of-thought as more directed exploration of internal representations than independent answer sampling. These are qualitative interpretations, not an identified model's verified training recipe. [00:12:55]-[00:16:06]

## Practical Implications

- Editorial: Choose a sampling policy for the actual goal—repeatability, candidate diversity, or exploration—and evaluate both correctness and token cost.
- Editorial: Distinguish success across multiple attempts from single-attempt quality, and verify synthesized answers rather than treating agreement as validation.

## Questions and Tensions

- Editorial: The recording supplies no controlled comparison supporting its general greedy-decoding or looping claims; model, prompt, training, and task may change the trade-off.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=iF9CEScWzrc)
- [transcript.md](./transcript.md)
