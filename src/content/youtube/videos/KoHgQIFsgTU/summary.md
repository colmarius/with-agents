---
title: "Viaggio concettuale nella Chain of Thoughts dei modelli \"thinking\""
videoId: KoHgQIFsgTU
sourceUrl: "https://www.youtube.com/watch?v=KoHgQIFsgTU"
publishedAt: "2025-08-24T17:15:04Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo develops an architectural intuition for why chain-of-thought can improve an autoregressive model's answers even when its visible reasoning trace is erratic. He treats generated reasoning tokens as both a sample of latent knowledge and a path that progressively changes the model state toward an answer.

## Key Ideas

- Thinking models can outperform direct-answer models on mathematical, programming, and everyday questions even when the visible reasoning includes detours or incorrect intermediate information. Sanfilippo presents that contrast as the source of confusion about what chain-of-thought does. [00:00:01]-[00:01:04]
- As transformer blocks process an input, token representations move beyond their initial dictionary embeddings toward increasingly abstract contextual information. Generating reasoning tokens also enlarges the active state carried through subsequent blocks. [00:02:14]-[00:03:30]
- Chain-of-thought turns some knowledge held implicitly in the model's weights into explicit tokens in the context window, where that selected information remains available to later computation. [00:04:42]-[00:05:53]
- Sanfilippo describes this process as both sampling and synthesis: the model surfaces information relevant to the question, then repeatedly summarizes the growing input as it generates. [00:05:53]-[00:07:05]
- Adding one token rather than another changes the logits for subsequent tokens. The generated path therefore changes the state from which the model produces its eventual answer. [00:07:05]-[00:08:00]
- In his account, reinforcement learning improves chain-of-thought by favoring token sequences that navigate the model's possible states toward correct answers. Sampling latent knowledge is not sufficient; the sequence must steer in a useful direction. [00:08:00]-[00:10:16]

## Practical Implications

- Treat a reasoning trace as active computational context, not necessarily as a faithful explanation of hidden processing.
- Distinguish the model's stored representations from the generated sequence that selects, exposes, and combines some of them.
- Evaluate reasoning methods by answer quality and robustness as well as by the apparent coherence of intermediate text.

## Questions and Tensions

- The state-navigation account is a conceptual interpretation grounded in transformer behavior; the transcript does not present a mechanistic experiment that distinguishes it from competing explanations.
- An incorrect intermediate statement can still influence later tokens. The account explains how a path changes state, but not how to determine whether every step helps.
- Better performance after reinforcement learning does not by itself show which learned token-level behaviors caused the improvement.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=KoHgQIFsgTU)
- [transcript.md](./transcript.md)
