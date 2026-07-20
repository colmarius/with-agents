---
title: "DeepSeek 3.2: a un anno dal v3.0-base, DeepSeek brilla ancora con una attention pseudo-lineare"
videoId: BBAD-8vanro
sourceUrl: "https://www.youtube.com/watch?v=BBAD-8vanro"
publishedAt: "2025-12-04T16:37:44Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo discusses the DeepSeek 3.2 paper, concentrating on DeepSeek Sparse Attention and the model's reinforcement-learning phase. He presents the sparse-attention design as a pragmatic compromise: retain dense attention where it matters, but first use a much cheaper learned indexer to select the tokens that receive it.

## Key Ideas

- Sanfilippo praises DeepSeek for publishing useful research details and contrasts that openness with the limited technical disclosure of major US AI companies. He acknowledges that similar techniques may exist inside closed models but cannot be assessed publicly. [00:00:00]-[00:01:13]
- His prior objection to linear and heavily compressed attention is that later Transformer blocks may need relationships between concepts separated by long distances. In his account, reducing attention therefore tends to trade context capacity against model quality. [00:01:13]-[00:03:36]
- He says DeepSeek 3.2 continues training from the roughly year-old DeepSeek 3 base rather than beginning a new pretraining run. Whether that reflects limited GPU access or a deliberate research choice is speculation in the narration, not a documented conclusion. [00:03:36]-[00:04:50]
- DeepSeek Sparse Attention adds a lightweight Lightning Indexer that learns from the original dense attention which earlier tokens are likely to receive high attention scores. Its output is a set of token indices for the full attention operation. [00:04:50]-[00:07:08]
- Full dense attention then runs only over the indexer's selected subset. Sanfilippo's analogy is a quick scan that locates potentially relevant parts of a book before the reader studies those parts closely. [00:07:08]-[00:08:16]
- He describes an initial phase that trains the indexer while the model and dense-attention weights remain frozen, followed by continued training of the revised architecture. He reports no material regression and characterizes the effective runtime as close to linear over the tested context sizes, despite the indexer itself remaining quadratic. [00:08:16]-[00:09:30]
- The indexer's smaller computation and FP8 execution keep its constant factors low at DeepSeek's 128K context, according to the discussion. Sanfilippo stresses that quadratic scaling has not disappeared: it would become increasingly consequential at contexts of millions or hundreds of millions of tokens. [00:09:30]-[00:12:45]
- Sanfilippo reports that reinforcement-learning compute was about 10% of pretraining compute and says the paper presents that as unusually high. He describes GRPO plus stabilization techniques and a long-thinking variant incorporating ideas from DeepSeek Math, while cautioning that the strongest reported results come from a very slow, generous thinking budget. [00:12:45]-[00:15:08]
- The closing discussion moves from architecture to conjecture about DeepSeek's resources, research talent, and lack of a newer base pretraining run. Sanfilippo argues that constraints can encourage architectural invention, then gives his subjective assessment that European LLM development trails Chinese and US laboratories. [00:15:08]-[00:18:39]

## Practical Implications

- Separate the asymptotic complexity of a retrieval or indexing stage from its observed cost at the context lengths a system actually serves.
- Evaluate sparse attention as a two-stage system: selection quality determines whether reduced dense attention preserves the long-range relationships needed by later layers.
- When comparing model releases, distinguish changes to the base model, continued training, attention architecture, reinforcement learning, and inference-time thinking budget.
- Check model-paper tables and implementation details before reusing the reported parameter counts, context limits, compute ratios, or benchmark comparisons in an engineering decision.

## Questions and Tensions

- The video is commentary on a paper rather than an independent reproduction; its claims about regression, runtime, training compute, and benchmark standing need confirmation from the paper and evaluations.
- Low constant factors can make a quadratic indexer inexpensive at 128K tokens without making it linear or guaranteeing acceptable cost at much larger contexts.
- Selecting only likely high-attention tokens raises a recall question: the discussion does not quantify how often the indexer omits a token that dense attention would have found important.
- The explanations for DeepSeek's pretraining cadence and the assessments of individual laboratories' talent or hardware are explicitly speculative and unsupported by direct organizational evidence here.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=BBAD-8vanro)
- [transcript.md](./transcript.md)
