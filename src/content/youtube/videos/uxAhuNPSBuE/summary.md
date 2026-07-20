---
title: "Progressi su DeepSeek v4: KV cache su disco"
videoId: uxAhuNPSBuE
sourceUrl: "https://www.youtube.com/watch?v=uxAhuNPSBuE"
publishedAt: "2026-05-03T21:00:39Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo demonstrates a rapidly evolving local DeepSeek v4 Flash inference engine used through OpenCode. The main advance is a disk-backed KV cache made practical by DeepSeek's compressed attention state, alongside fixes to indexed attention, specialized Metal kernels, and policies for reusing prompt prefixes across agent sessions.

## Key Ideas

- For tool calls from a two-bit model, Sanfilippo switches sampling to temperature zero between the tool-call tags rather than enforcing a complete grammar. He reports that the coding session is still working at roughly 31,000 context tokens. [00:00:59]-[00:02:43]
- A performance bug had masked irrelevant tokens but still computed attention across the full KV cache, defeating indexed attention. Fixing that path and adding DeepSeek-specific fused Metal kernels improved prefill scaling and kept demonstrated generation around 14–15 tokens per second. [00:02:43]-[00:05:44]
- He says DeepSeek compresses its KV cache by roughly 128 to one, making a 128,000-token cache about 390 MB and therefore fast enough to write to a MacBook Pro SSD in his test. This changes his assessment of disk caching for this particular architecture. [00:05:44]-[00:06:47]
- The binary cache format records versioning, token and quantization data, creation and usage information, the prompt for debugging, and attention state. He allows two- and four-bit model variants to share cache state, with a strict mode that rejects a precision mismatch. [00:06:47]-[00:08:44]
- Prefix digests locate reusable cache entries. In one demonstrated hit, an approximately 11,000-token prefix loaded in 35 milliseconds, leaving only the suffix to prefill; Sanfilippo compares this with about 50 seconds for processing the full prompt in that setup. [00:08:44]-[00:10:29]
- The implementation keeps one active in-memory cache and writes it to disk on eviction. It also stores sufficiently large common prefixes from the beginning of a prompt and ranks disk entries using context size, hit count, and recency under a bounded space policy. [00:10:29]-[00:12:09]
- He reports relatively flat throughput as context grows, starts the server with a 250,000-token limit, and considers periodic disk checkpoints so long sessions could recover after a failure. These are demonstrations and design intentions rather than a published benchmark. [00:12:09]-[00:15:13]
- Sanfilippo attributes the one-day jump from demo to usable implementation to GPT-assisted coding combined with his own architecture, cache policy, steering, and cross-domain experiments; he notes that several kernel attempts had similar or inadequate performance before the current result. [00:16:04]-[00:17:08]

## Practical Implications

- Reconsider disk-backed KV caching when an architecture substantially compresses attention state; conventional assumptions may not transfer across models.
- Measure indexed-attention implementations for avoided computation, not merely correct masking, because a correct output can still retain the full performance cost.
- Version cache formats and make compatibility rules explicit across quantization variants.
- Cache stable prompt prefixes for agent workloads, but preserve strict identity checks before treating a prior prefix as reusable.
- Separate human ownership of architecture and product constraints from the volume of implementation produced by a coding agent.

## Questions and Tensions

- Temperature-zero sampling reduces variation but does not guarantee that every generated tool call conforms to a grammar.
- The video provides selected measurements from an active development session rather than a repeatable benchmark across context sizes, hardware, and workloads.
- Sharing cache state between quantization levels may carry forward approximation error; the practical quality impact is not measured here.
- Prefix matching, eviction, recovery, and cache-file access need correctness and security analysis before multi-user or untrusted workloads.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=uxAhuNPSBuE)
- [transcript.md](./transcript.md)
