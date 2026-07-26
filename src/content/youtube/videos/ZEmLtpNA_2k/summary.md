---
title: "Proviamo a capire TurboQuant"
videoId: ZEmLtpNA_2k
sourceUrl: "https://www.youtube.com/watch?v=ZEmLtpNA_2k"
publishedAt: "2026-03-28T11:15:47Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo explains his understanding of TurboQuant, a method for compressing transformer key-value caches through a norm-preserving rotation, distribution-aware quantization, and a one-bit residual correction. He treats the mathematics as useful while disputing stronger publicity around the method. The recording inspects reported tables informally but does not implement TurboQuant, rerun a benchmark, or independently reproduce any result.

## Key Ideas

- KV caching avoids recomputing attention over prior tokens during each generation step, but stores many key and value vectors. Sanfilippo describes lower-bit quantization as a memory-quality trade-off: it saves space while introducing errors that can weaken attention. This is background, not a measurement performed here. [00:00:00]-[00:01:07]
- He argues that degradation extends beyond literal retrieval. As representations become more semantic across transformer blocks, quantization error may affect how later layers recover synthesized concepts. He proposes retrieval and long-input reasoning tests without reporting his own runs. [00:02:12]-[00:03:21]
- Local inference motivates the method: model weights might fit in 64 or 128 GB while a long-context KV cache does not. His 16K, 32K, and 250K context sizes are illustrative, not a documented configuration or achieved deployment. [00:03:21]-[00:04:34]
- Sanfilippo says the work dates from 2025 and may recently have been published by Google. He relays RabbitQ researchers' criticism about characterization and prior attribution, saying a rotation idea also appeared there. The chronology, review record, and priority claim are not independently checked. [00:04:34]-[00:05:39]
- He estimates that TurboQuant may match a conventional quantizer using roughly one to one-and-a-half more bits, not make 16-to-4-bit compression lossless. Viewing a reported experiment, he recalls an older 7-billion-parameter model and reads a Kiwi score of 0.981, but is unsure which bit widths are displayed. [00:05:39]-[00:07:49]
- He reviews scalar quantization as mapping higher-precision values to limited points between extrema. KV vectors may have a few disproportionately large components, making poor use of uniform quantization levels. His simplified examples do not specify the paper's complete quantizer. [00:07:49]-[00:11:15]
- As he describes TurboQuant, a norm-preserving rotation spreads a biased vector across its coordinates, yielding a known distribution. This makes quantization data-oblivious in his terminology and allows MSE-oriented interval tables to be precomputed by bit width. [00:11:15]-[00:13:44]
- For remaining error, the method subtracts the quantized vector from the original, applies a random Gaussian projection, stores one sign bit per residual component, and uses an estimated fixed magnitude for correction. Sanfilippo highlights this step but does not derive its estimator, cost, or error bound. [00:13:44]-[00:16:05]
- Inspecting LongBench tables, he says Kiwi at 5 bits scores about 45 while TurboQuant at 3.5 bits scores slightly lower. He concludes that TurboQuant saves at most roughly one bit, later calling that about 20% of KV-cache memory. This is his table reading, not a reproduced result or general guarantee. [00:16:05]-[00:17:14]
- He relays a RabbitQ complaint that TurboQuant was tested on an H100 GPU while RabbitQ was tested on a CPU, then admits uncertainty about the comparison. He closes by prioritizing the rotation, spreading, table, and residual-sign ideas over the controversy. [00:17:14]-[00:18:24]

## Practical Implications

- Compare KV-cache methods on the same model, layers, context lengths, tasks, bit accounting, hardware, kernels, and precision path. Separate cache bytes from codebooks, scales, correction bits, and temporary buffers.
- Measure retrieval, long-context reasoning, generation quality, throughput, latency, and memory together. A favorable needle-in-a-haystack score does not establish quality on larger models or more demanding workloads.
- Ablate the rotation, nonuniform quantization tables, and residual-sign correction independently to show which component contributes quality and what computation it adds.
- Treat theoretical optimality, practical kernel speed, and end-to-end model quality as separate claims. A method can improve quantization error without winning on hardware throughput or downstream tasks.

## Questions and Tensions

- Exact paper versions, equations, checkpoints, datasets, table columns, and implementations are absent. The reported comparisons cannot be reconstructed from this source alone.
- Several details remain uncertain as Sanfilippo reads them, including Kiwi's bit width, whether a RabbitQ comparison appears, and the scope of the displayed scores.
- No benchmark is rerun. Model size, task selection, prompts, context distribution, run count, uncertainty, hardware settings, kernel maturity, and reproducibility remain unverified.
- The video gives both a roughly one-to-one-and-a-half-bit estimate and a later ceiling of one bit. It establishes no universal relation between bit savings, quality, and total memory.
- A norm-preserving rotation can redistribute coordinates, but the transcript does not specify the transform, block size, randomness, numerical precision, inverse operation, or runtime overhead.
- The one-bit correction description omits how magnitude is estimated and how projection and reconstruction costs affect attention. Its benefit and asymptotic optimality cannot be inferred from the verbal account.
- Attribution and CPU-versus-GPU claims are reported disputes that require the underlying papers, code, review comments, and protocols.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=ZEmLtpNA_2k)
- [transcript.md](./transcript.md)
