---
title: "Looped transformer: rapporto tra layer e chain of thoughts"
videoId: PE3pKdRrTkA
sourceUrl: "https://www.youtube.com/watch?v=PE3pKdRrTkA"
publishedAt: "2026-10-06T17:30:27Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo compares reusing transformer layers internally with generating a longer chain of thought. He argues that both can add sequential computation, but differ in how they maintain state and commit to intermediate choices. [00:02:47]-[00:05:40] He begins with a rumor that Astra may be a looped transformer and later explicitly says he has not investigated that rumor's origin; the discussion does not establish Astra's architecture. [00:00:00], [00:08:44]-[00:09:46]

## Key Ideas

- **Layer reuse trades additional computation for reuse of model weights.** In Sanfilippo's account, a decoder-only transformer progressively updates a residual stream—the internal representation passed between layers—before predicting the next token. A looped transformer is trained to reuse intermediate layers for additional internal steps. Reusing their weights avoids adding a new set of weights for each step, but requires more computation; he also notes that the KV cache still consumes memory. This is a conceptual explanation, not a measured memory or speed comparison. [00:00:00]-[00:01:54]
- **Repetition can revisit the context, not merely repeat an unchanged answer.** He explains that running a layer again recomputes attention, allowing another pass to select information from different context tokens. He presents the relative tolerance of ordinary transformers to removing, swapping, or repeating some middle layers as evidence of their generality, while acknowledging positional specialization during training. No experiments or numerical results are supplied in the video. [00:00:51]-[00:02:47]
- **Both approaches add sequential computation and involve state.** He compares additional internal processing with producing more reasoning tokens. In his account, generated tokens add state through the KV cache, while internal processing refines the residual stream toward the next output token. He cautions against imagining unlimited internal layers as a replacement for all token generation: a language model still needs to emit its response. [00:02:47]-[00:04:46]
- **Emitting a token makes a discrete choice that internal processing does not.** Sanfilippo distinguishes continuous internal refinement from sampling and verbalizing intermediate tokens. He argues that token generation commits the model to particular choices and places additional ideas into the reasoning sequence, whereas internal steps need not verbalize their intermediate states. This motivates a comparison rather than a claim that the two mechanisms are interchangeable. [00:05:40]-[00:06:46]
- **Internal processing and chain of thought might complement each other.** He proposes that more internal steps could help a model choose a more promising next thought instead of producing many exploratory reasoning tokens. That could shorten the visible chain while retaining it as a way to combine ideas. He frames this as a possibility, not a demonstrated training result; by the end, he recognizes more similarities between the approaches than he expected when starting the video. [00:06:46]-[00:08:44]
- **Local inference motivates interest, but does not remove the compute bill.** He finds layer reuse attractive when VRAM is constrained, while emphasizing the extra processing it requires. He also relays a warning attributed to Micron's leadership that RAM may become more problematic over the following two years, without specifying the problem or presenting supporting data. His closing wish for a single reusable layer whose repetitions scale with task difficulty is a desired direction, not an available implementation. [00:09:46]-[00:10:50]

## Practical Implications

- Editorial: A shorter visible reasoning trace does not by itself establish less total computation or a particular architecture. Sanfilippo's comparison separates emitted tokens from internal processing, and his Astra discussion leaves the architecture rumor unresolved. [00:06:46]-[00:09:46]
- Editorial: Evaluate layer reuse with separate accounting for weights, KV-cache memory, and repeated computation. The talk explains why reusing weights could help a memory-constrained setting, but does not quantify the overall memory or latency tradeoff. [00:01:54], [00:07:40], [00:09:46]-[00:10:50]

## Questions and Tensions

- Sanfilippo asks whether the Astra rumor originated from observers inferring an architecture from its concise reasoning or from an informal disclosure. He does not resolve that question, so neither the architecture nor the proposed explanation for its token efficiency is established here. [00:08:44]-[00:09:46]
- Editorial: The suggested complementarity leaves an empirical question: when would more internal steps improve the choice of reasoning tokens enough to justify their cost? The video proposes a mechanism but provides no benchmark, training recipe, or performance ranking. [00:06:46]-[00:08:44]

## Source

- Original video: https://www.youtube.com/watch?v=PE3pKdRrTkA
- Full Italian auto-generated captions: [transcript.md](./transcript.md)
