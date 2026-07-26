---
title: "Applicare TurboQuant (modificato) alla ricerca vettoriale"
videoId: KM_73zFwlVY
sourceUrl: "https://www.youtube.com/watch?v=KM_73zFwlVY"
publishedAt: "2026-03-30T15:54:21Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo reports adapting a modified form of TurboQuant to vector search in Redis. His version keeps vector rotation and fixed quantization intervals but removes TurboQuant's residual correction so distances between already-quantized HNSW nodes can use a lookup table. He also describes a separate pointer-compression change.

The implementation and measurements are Sanfilippo's first-person account. The recording provides no code revision, dataset, index configuration, benchmark protocol, or independently reproduced evidence.

## Key Ideas

- Sanfilippo argues that four-bit vector quantization can be more acceptable in vector databases than in an LLM KV cache. He gives an eightfold FP32-to-four-bit payload reduction and uses a hypothetical 98%-to-95% recall change to argue that top results may remain practically similar; neither figure is presented as a complete end-to-end measurement here. [00:00:01]-[00:02:21]
- He warns against treating recall alone as RAG quality. His preferred workflow checks whether retrieved material answers the query and reranks candidates with a language model; he also considers agent-directed textual search an alternative. These are design opinions, not comparisons run in the video. [00:02:21]-[00:03:32]
- In his account, standard TurboQuant combines vector rotation, distribution-aware quantization centroids chosen to reduce mean squared error, and a one-bit residual correction. The paper's fast dot product handles an unquantized query against a quantized vector, but he says it does not directly handle two already-quantized vectors without full dequantization. [00:04:30]-[00:06:55]
- That limitation matters for HNSW index operations, particularly relinking, because they can require distances among stored vectors. Sanfilippo says his Redis HNSW modification depends even more heavily on repeated stored-vector distance estimates, but does not specify the modified index algorithm or workload. [00:06:55]
- He reports comparing ordinary four-bit quantization with TurboQuant and observing roughly two percentage points higher recall for TurboQuant. He rejected the original method after observing a performance cost, but supplies no recall definition, dataset, index parameters, timing metric, run count, or uncertainty. [00:08:13]
- His proposed and reportedly implemented adaptation removes the residual path, retains rotation, and uses shared fixed four-bit intervals. Because every coordinate uses the same 16 centroids, a 16×16 lookup table can contribute products between quantized vectors. Rotation is paid when inserting a vector and when transforming a query. [00:08:13]-[00:10:41]
- Sanfilippo says fixed intervals would lose substantial quality on the embedding model's original distribution; the rotation is what makes the expected distribution suitable for shared ranges. The transcript does not identify the rotation, embedding model, dimensionality, numerical precision, or whether the implementation uses the literal dense matrix operation he describes. [00:09:27]-[00:10:41]
- In his specific benchmarks, he says four-bit quantization without the residual produced results substantially overlapping three-bit quantization plus the residual. He also says the modified four-bit path was slower than Redis's default min-max eight-bit path and retained approximately 60%–70% of its speed, settling verbally near 70%; no independently reproduced quality or speed result is shown. [00:11:45]-[00:12:55]
- Separately, he reports compressing HNSW neighbor pointers into 32-bit offsets from a node when possible, guarded by a flag. He says all nodes were compressible in tests with up to three million elements and that combining pointer compression with optional four-bit vectors could make an illustrative two-gigabyte case occupy about one gigabyte. The video does not establish exact memory accounting or generality. [00:12:55]-[00:15:01]

## Practical Implications

- Evaluate the modified quantizer on named embedding models, datasets, query sets, HNSW construction parameters, update patterns, and recall definitions. Report repeated measurements rather than a single percentage-point difference.
- Measure build time, insertion latency, query latency, throughput, memory, and retrieval quality together. Separate vector payload, HNSW links, lookup tables, scales, allocator overhead, and temporary rotation buffers.
- Ablate rotation, fixed intervals, residual removal, lookup-table distance, and pointer compression independently so quality, speed, and memory effects are not assigned to the combined system without evidence.
- Validate stored-vector distance approximations during insertion, relinking, deletion, and search, not only unquantized-query retrieval against a static index.

## Questions and Tensions

- The described modification may be implemented in Sanfilippo's working Redis vector-set code, but the source provides no repository path, commit, build instructions, benchmark artifacts, or reproducible configuration.
- The two-point recall advantage and roughly 60%–70% speed figure lack units, baselines beyond the speaker's verbal comparison, repeated runs, variance, hardware, compiler settings, precision path, dataset, and index size.
- An ideal eightfold FP32-to-four-bit vector reduction is not an eightfold total-index reduction. The transcript does not quantify codebooks, alignment, metadata, graph links, rotation state, or allocator effects.
- The rotation is described as a vector-by-\(d \times d\) matrix multiplication, but its exact algorithm, complexity in the implementation, numerical error, and latency contribution are unstated.
- Similar recall does not prove equivalent ranking quality or downstream RAG performance. The recording supplies no overlap metric, reranker evaluation, answer-quality test, or failure analysis.
- The reported 100% pointer-offset compressibility is limited to unspecified speaker-run tests. Address-space layout, allocator behavior, platform, index growth, deletions, and fallback frequency could change the result.
- The illustrative two-to-one-gigabyte statement does not identify a measured run and cannot establish a universal 50% memory saving.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=KM_73zFwlVY)
- [transcript.md](./transcript.md)
