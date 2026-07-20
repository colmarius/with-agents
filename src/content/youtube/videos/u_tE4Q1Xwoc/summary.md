---
title: "Perché credo poco nella attention lineare delle alternative ai Transformer"
videoId: u_tE4Q1Xwoc
sourceUrl: "https://www.youtube.com/watch?v=u_tE4Q1Xwoc"
publishedAt: "2025-09-22T16:52:32Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo explains why he remains skeptical that linear-attention architectures can replace standard Transformer attention without losing important capabilities. His argument centers on the increasingly semantic representations in deeper layers, the mathematical changes required to make attention linear, and the long-range relationships found in large texts and programs.

## Key Ideas

- Standard causal self-attention relates each token to all earlier tokens, so its work remains quadratic up to a constant factor. Its output combines the current token with weighted information from those earlier tokens. [00:01:01]-[00:02:29]
- Sanfilippo argues that explanations focused only on the first Transformer block are misleading: at that stage, attention examples are still closely tied to lexical or grammatical relations in the prompt. [00:02:29]-[00:03:22]
- Linear alternatives generally change both how token relationships are computed and how softmax-like competition is implemented. He says these simplifications are not mathematically equivalent to standard self-attention and necessarily alter its semantic properties. [00:03:22]-[00:04:33]
- In deeper layers, token representations move further from their original words and become more semantic. Sanfilippo therefore expects distant relationships to matter more, much as a late passage in a book can depend on a concept introduced near the beginning. [00:05:43]-[00:06:50]
- He says simplified attention can also lose the mathematical ability to focus reliably on one specific token. Mixed architectures respond by combining linear blocks with standard quadratic-attention blocks, especially where fuller semantic capacity is needed. [00:06:50]-[00:08:52]
- Hybrid designs reduce how many blocks pay the quadratic cost rather than making the whole architecture linear. Sanfilippo reports that they perform better than fully linear alternatives but still show a capability loss. [00:08:52]
- He closes with an analogy to software and learning: relationships multiply as programs, texts, and bodies of knowledge grow. Without a fundamentally different architecture, he doubts that a linear algorithm can preserve all of that complexity. [00:08:52]-[00:10:54]

## Practical Implications

- Evaluate efficient-attention proposals by both asymptotic cost and the exact operation they substitute for softmax attention.
- Test deeper-layer semantic and long-range behavior, not only lexical retrieval or short-context benchmarks.
- Treat a hybrid architecture as a reduction in the quadratic workload, not automatically as linear scaling end to end.
- Measure any efficiency gain alongside capability changes on large codebases and long, interdependent documents.

## Questions and Tensions

- The transcript refers to research results and a computational lower-bound argument without naming the papers, assumptions, or benchmark data needed to assess them.
- The analogy between human understanding, software complexity, and model attention is suggestive rather than a proof that quadratic attention is necessary.
- A linear mechanism could remain useful for selected layers or workloads even if it cannot fully replace standard attention.
- The discussion compares architectural principles, not controlled implementations with matched parameters, training data, and compute.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=u_tE4Q1Xwoc)
- [transcript.md](./transcript.md)
