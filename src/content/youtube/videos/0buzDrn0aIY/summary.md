---
title: "Non credo che le specifiche rimpiazzeranno il codice, tuttavia..."
videoId: 0buzDrn0aIY
sourceUrl: "https://www.youtube.com/watch?v=0buzDrn0aIY"
publishedAt: "2026-02-10T18:00:04Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo argues that specifications will become more important in agent-driven software development without replacing source code. His more consequential proposal is that coding agents can extract implementation culture from several specialized programs and transfer those patterns into a new, hardware-specific system after a deliberate research and reference-implementation phase.

## Key Ideas

- Agent-driven development shifts effort toward initial and extension specifications, although the right workflow still depends on the project's purpose and criticality. Sanfilippo prefers a planned outline over building only through successive short prompts. [00:00:03]-[00:00:58]
- Coding agents can also work in reverse by studying source code and producing a specification intended to reproduce the system with different languages or abstractions. This makes future distribution of compilable specifications conceivable, but not inevitable. [00:00:58]-[00:02:15]
- Mature software accumulates bug fixes, edge cases, and fine interactions that its original designers could not predict. Sanfilippo argues that natural-language specifications cannot reliably capture all of that history, so source code and specifications should remain complementary. [00:03:20]-[00:04:23]
- He sees a larger change in how related specialized programs can serve as a constellation of examples. Their source contains practical patterns that an agent can extract when implementing another system in the same family. [00:04:23]-[00:05:34]
- His inference example contrasts composable generic kernels with model-specific fused kernels. Generic primitives are cleaner and easier to support, while specialized kernels and formats can improve speed at the cost of portability and broader compatibility. [00:06:56]-[00:09:13]
- Rather than start each optimized inference engine from scratch, Sanfilippo asks an agent to inspect previous high-performance implementations on the same hardware and transfer their shader patterns and optimization techniques to the new model. [00:09:13]-[00:10:25]
- Reuse should follow investigation rather than a vague instruction to search for an answer. The developer and agent first need to understand the model's pipeline, data transformations, and peculiarities well enough to form a checked specification. [00:10:25]-[00:13:09]
- For a complicated pipeline, he uses a small self-contained PyTorch or NumPy implementation as an intermediate reference. The agent can then combine that behavioral baseline with hardware-specific techniques extracted from earlier projects. [00:13:09]-[00:14:16]

## Practical Implications

- Maintain both a readable specification and the source that records accumulated operational details and edge cases.
- Give agents curated, relevant implementations to study instead of relying on broad repository search or a generic request to discover the architecture.
- Establish a simple correctness-oriented reference before transferring specialized performance patterns.
- Treat optimization knowledge as reusable across a family of projects, but revalidate it against each model's data pipeline, formats, and hardware constraints.

## Questions and Tensions

- The transcript presents an emerging personal workflow rather than benchmark evidence that transferred implementations are correct or faster.
- Specifications extracted from code can omit accidental but relied-upon behavior, just as hand-written specifications can omit historical edge cases.
- Specialized implementations may improve performance while increasing maintenance, conversion, and compatibility costs.
- Agents can transfer existing patterns efficiently, but genuinely new architectures may not fit the culture encoded in earlier examples.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=0buzDrn0aIY)
- [transcript.md](./transcript.md)
