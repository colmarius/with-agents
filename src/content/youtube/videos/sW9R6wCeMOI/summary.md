---
title: "Gli n-gram di Qwen 3.8 Flash Next"
videoId: sW9R6wCeMOI
sourceUrl: "https://www.youtube.com/watch?v=sW9R6wCeMOI"
publishedAt: "2026-08-29T08:19:40Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo describes a learned lookup-table mechanism that enriches a token with information about short token sequences. He frames it as moving routine composition out of expensive model computation. The model-specific sizes and implementation details below are his account, not a code or paper audit.

## Key Ideas

- A character-level model must learn to combine characters into familiar concepts. Ordinary tokenization reduces that work, but combinations such as New York still require composition; enlarging the output vocabulary indefinitely creates its own cost. He uses this comparison to motivate learned representations for token pairs and triples. [00:04:41]-[00:10:31]
- In his description, fixed order-sensitive hashes of recent token IDs retrieve pieces of learned vectors from a large table. Multiple hashes reduce the damage of collisions because unrelated sequences need not share every retrieved piece; collisions are reduced, not eliminated. [00:11:22]-[00:15:15]
- A learned gate compares the retrieved information with the token's contextualized state and controls how much enters that state. Thus York can gain information about New York, while an incidental sequence need not receive the same enrichment. The table is static during inference, but its contribution is context-dependent. [00:12:12]-[00:16:13]
- He says lookup begins while the first layer runs and enrichment occurs at the second, allowing computation to hide fetch latency. He describes roughly 51 billion table parameters that may reside in RAM instead of VRAM and are retrieved rather than all used in matrix multiplication. This is a proposed efficiency explanation, not a measured hardware comparison in the video. [00:13:18]-[00:18:24]
- The retrieved vector enriches an existing token rather than adding context positions or separate KV-cache entries. He explicitly distinguishes the mechanism from speculative decoding, which predicts candidate future tokens. [00:18:24]-[00:20:17]

## Practical Implications

- Editorial: Separate total parameter storage from parameters participating in dense computation, and include lookup bandwidth, latency, gating, and memory placement in performance analysis.
- Editorial: Do not infer a larger context sequence or a speculative drafter from the term n-gram; identify what the retrieved information actually changes.

## Questions and Tensions

- Editorial: The character-token analogy explains the intended division of work, but the recording provides no ablation proving how much capacity or throughput the lookup mechanism contributes.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=sW9R6wCeMOI)
- [transcript.md](./transcript.md)
