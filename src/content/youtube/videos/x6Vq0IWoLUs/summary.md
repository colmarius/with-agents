---
title: "Fare l'inferenza in streaming dal disco SSD"
videoId: x6Vq0IWoLUs
sourceUrl: "https://www.youtube.com/watch?v=x6Vq0IWoLUs"
publishedAt: "2026-06-05T17:00:07Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo reports adding SSD-streamed model weights to DwarfStar so machines with less RAM can attempt locally useful inference with large mixture-of-experts models. He describes separate overlap strategies for prefill and autoregressive decoding, then gives first-person performance observations for an implementation still being optimized.

The architecture, model comparisons, cache behavior, and measurements are Sanfilippo's account. The recording supplies no code revision, model files, benchmark artifacts, hardware and storage specification, repeated runs, power measurements, or independent reproduction, so its figures do not establish general speed, quality, efficiency, or hardware support.

## Key Ideas

- Sanfilippo frames DwarfStar as an open-source local-inference project with a command-line interface, agent, and OpenAI- and Anthropic-compatible servers. His goal is useful local work rather than a model-loading demonstration, partly to reduce dependence on providers for cost, data handling, access rules, and continued account availability. These are project goals and policy arguments, not measured properties of the SSD path. [00:00:01]-[00:03:11]
- He presents DeepSeek-related Flash inference in 128 GB and Pro inference in 512 GB as meaningful local configurations, while saying Kimi reportedly tolerates heavy quantization poorly. He explicitly says he did not run specific Kimi tests and notes that local quantization and inference are error-prone; the model identities, checkpoints, quantizers, and comparison protocol remain unspecified. [00:03:11]-[00:05:13]
- For smaller machines, he says his tool-calling tests favored a dense 27-billion-parameter Qwen variant over a smaller-active-parameter mixture-of-experts variant, although the dense model was slower and scaled worse with context. He reports implementing it on a private branch, but provides no prompts, scores, run count, context distribution, quality threshold, or reproducible benchmark. [00:05:13]-[00:07:19]
- A contact suggested streaming weights from SSD rather than keeping the entire model in RAM. Sanfilippo says he deliberately began with the harder Pro case on an M5 Max with about 120 GB available: he gives roughly 420 GB for its two-bit GGUF and contrasts that with an approximately 80 GB Flash file targeted at around 60 GB of usable memory. These are reported working assumptions, not a complete memory or file-layout audit. [00:07:19]-[00:09:04]
- For prefill, the implemented idea is to compute one layer while loading the next layer in the background. Sanfilippo expects enough layer compute to hide much of the read latency and reports, for Flash on a 64 GB machine, a decline from roughly 400 to 250 prefill tokens per second rather than a complete collapse. He also says the path may need more optimization; no token count, SSD, operating system, precision, run duration, latency distribution, or baseline setup is supplied. [00:09:04]-[00:10:56]
- Decoding needs a different strategy because every generated token traverses all layers while the router selects only some experts. Sanfilippo says he built an offline frequency table, preloads the experts selected most often, keeps the shared expert resident, uses LRU replacement, computes with resident experts first, and loads missing routed experts concurrently. The transcript states six routed experts per layer but does not specify routing traces, cache capacity, transfer granularity, synchronization, or numerical handling. [00:10:56]-[00:11:57]
- With 64 GB of RAM, he reports that roughly 70%–75% of requested experts are resident and that generation reaches about 13–14 tokens per second. He compares this with roughly 18–19 tokens per second and initially fast prefill for the dense Qwen model, while arguing that the latter has lower semantic capability and worse long-context behavior. The hit rate, throughput, and quality judgments are speaker-observed figures without logs, variance, matched workloads, or independent evaluation. [00:11:57]-[00:13:00]
- Sanfilippo says the same implementation can technically run with 16 GB very slowly, may be partly useful with 32 GB, and is intended to make Flash more accessible at 64 GB. He also proposes it as a way for a 128 GB machine to reserve RAM for other work. The recording does not demonstrate each memory tier or quantify stalls, swap, cache growth, application contention, or an acceptable latency and quality boundary. [00:13:00]-[00:14:03]
- He identifies file access as remaining optimization work: making routed-expert tensors contiguous could reduce non-sequential reads, while his current path batches reads from several offsets and uses multiple threads. A streaming-specific GGUF might perform better, but he prefers to test how far the existing layout can go before imposing a special file on users. This distinguishes a possible future layout from the reported current implementation. [00:14:03]-[00:16:01]

## Practical Implications

- Reproduce the path with exact model and checkpoint hashes, quantization format, GGUF layout, expert sizes, RAM and VRAM limits, operating system, filesystem, SSD model, queue depth, and software revision. Preserve separate results for Flash and Pro rather than transferring one result to the other.
- Measure prefill and decoding independently. Report prompt length, generated length, first-token latency, per-token latency distribution, throughput, bytes read, cache-hit rate, I/O queueing, compute overlap, synchronization stalls, and peak memory instead of relying on one tokens-per-second value.
- Ablate the offline expert-frequency table, initial residency set, LRU policy, shared-expert pinning, asynchronous reads, batched offsets, thread count, and contiguous tensor layout. Compare each change with an all-resident baseline and an unoptimized streaming baseline under the same workload.
- Pair system measurements with output-quality checks. Quantization, delayed expert loading, model choice, and context length can affect useful task completion even when raw throughput improves; also record wall-plug power, thermals, SSD writes and endurance, and numerical deviations where relevant.

## Questions and Tensions

- The auto-generated captions render DwarfStar, DeepSeek, Qwen, GGUF, and several model variants inconsistently. Exact repositories, checkpoints, parameter counts, active experts, and quantization methods are not established by the transcript alone.
- The prefill comparison does not identify whether the resident and streamed cases used the same machine, prompt, context, precision, file cache state, or number of trials. Operating-system caching could materially change what was read from SSD.
- A 70%–75% expert-residency claim depends on workload, routing distribution, cache size, topic continuity, and how a hit is counted. The static table's source corpus and selection method are not described.
- Overlapping compute and I/O can hide latency only when compute lasts long enough and storage delivers data before it is needed. The recording provides no bandwidth budget, deadline analysis, queue trace, or stall distribution for either phase.
- Batched noncontiguous reads, multiple threads, and a custom contiguous file layout can trade latency against memory, preprocessing, portability, and maintenance. None is compared here, and no cross-platform or cross-SSD support result is shown.
- The reported RAM tiers and throughput figures do not establish practical use for every task. Context growth, KV-cache size, concurrent applications, thermal limits, SSD bandwidth, model quality, and acceptable response latency can change the boundary.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=x6Vq0IWoLUs)
- [transcript.md](./transcript.md)
