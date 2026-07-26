---
title: "Un modello energetico-computazionale del token"
videoId: ibcqRGQ7BKY
sourceUrl: "https://www.youtube.com/watch?v=ibcqRGQ7BKY"
publishedAt: "2026-06-16T16:07:58Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo proposes evaluating language-model inference by useful task completion per output token and, ultimately, per unit of energy. He argues that a token is not a stable unit across model sizes, tokenizers, task difficulty, reasoning length, or search strategy, so token count and price alone can obscure practical efficiency.

This is a conceptual model supported by analogies, qualitative examples, and first-person system observations. The recording gives no formal definition, equation, unit-normalized dataset, power trace, controlled experiment, statistical analysis, or causal evidence that would make the proposed relationship an established physical, computational, or cognitive law.

## Key Ideas

- Sanfilippo begins from the claim that tokens are not directly comparable: a larger model may spend more energy to generate one token, while a byte-level tokenizer may need several tokens for text represented by one token elsewhere. He argues that a smaller per-token unit could still be efficient if several such tokens cost no more than one larger token, but supplies no model, tokenizer, energy reading, or quality-controlled calculation. [00:01:06]-[00:04:43]
- He proposes moving the unit of evaluation from tokens to energy required to solve a problem. A smaller ball accelerated by the same energy is offered as an intuition for why a smaller model may run faster, after which he notes that actual inference depends on moving bits through the memory hierarchy and on parallel computation. The physical analogy is not a derivation of model latency or energy use. [00:04:43]-[00:06:03]
- Addressing memory-bound decoding, he argues that moving weights from memory to the processor consumes substantial energy even when GPU arithmetic is limited. Computer heat during local generation is his observable intuition, and he concludes that future systems should be judged by useful work per joule. No boundary is set for CPU, GPU, RAM, storage, cooling, idle power, embodied energy, or datacenter overhead. [00:06:03]-[00:08:19]
- He defines token efficiency informally as how much useful problem solving a model obtains from its emitted tokens. In his limiting example, a model can solve an easy task with few tokens but approach zero efficiency when allowed to continue indefinitely on an unsolved task. He therefore sketches task difficulty on one axis and token efficiency on the other rather than assigning one scalar to a model; neither axis has an operational definition or equation. [00:08:19]-[00:11:31]
- Tokenization affects emitted length, but Sanfilippo says quality must also enter the denominator or success criterion: a shorter translation is not necessarily better. He suggests binary pass/fail tasks may be easier to evaluate than open-ended quality, while acknowledging that useful-token efficiency is difficult to communicate and apply. The source does not specify task sampling, graders, thresholds, or uncertainty. [00:11:31]-[00:12:38]
- Reasoning length creates another trade-off. He uses a Qwen reasoning model as an example of high token use and says shortening its chain of thought degrades performance; disabling reasoning may emit fewer tokens initially yet become less efficient if the model cannot solve the task and keeps trying. This is a conceptual example without a named checkpoint, prompt set, token accounting rule, or measured result. [00:12:38]-[00:14:48]
- Sanfilippo also links efficiency to selecting a productive solution path. A weaker model may try several failed approaches before finding one that works, whereas a stronger model may choose a promising route earlier. The comparison with human problem solving is an analogy: the recording provides no trace taxonomy, causal mechanism, neuroscience evidence, or experiment showing that apparent path choice explains model efficiency. [00:14:48]-[00:16:47]
- For local inference, he argues that DeepSeek-related Flash can be more token-efficient than Qwen alternatives even when raw emission speed looks less favorable. He connects wasted attempts with both cost and waiting time, but gives no matched tasks, outputs, scoring, hidden-reasoning accounting, exact models, run count, or independent comparison in this section. [00:16:47]-[00:18:00]
- He then applies the idea to reported DwarfStar work on distributed inference and SSD streaming. For a DGX Spark example, he contrasts about 15 tokens per second at two bits with a hypothetical roughly 8 at four bits with streaming; for Macs, he reports approximately 20–22 at four bits across two M5 Max machines and uncertain streaming figures near 15 versus 32–34 at two bits. He says the slower path could be worthwhile only if higher precision materially improves task success, a condition not measured here. [00:18:00]-[00:21:33]
- As a second application, he reports roughly 10 decoding tokens per second and 140–150 prefill tokens per second for a two-bit Pro model on an M3 Ultra, then reasons that it could outperform a faster Flash model on a sufficiently difficult problem. A prior compiler demonstration motivates the expectation, but the recording does not compare both models on the same task or measure task completions, time, energy, quality, or failure probability. [00:21:33]-[00:22:45]
- The closing discussion moves from the efficiency model into Sanfilippo's opinions about Opus, Fable, GPT, distillation, safety, export restrictions, and future releases. These forecasts do not supply evidence for the proposed token-energy metric and do not establish model capabilities, vendor intentions, release timing, or regulatory outcomes. [00:22:45]-[00:25:07]

## Practical Implications

- Define the target quantity before comparing systems: task distribution and difficulty, success and quality threshold, output and hidden-reasoning tokens, tool calls, wall-clock time, retries, and total joules. Report a curve across task difficulty rather than collapsing unlike workloads into one number.
- Normalize across tokenizers with bytes, characters, semantic units, or completed tasks while retaining quality checks. Token count alone cannot distinguish a compact tokenizer from concise reasoning or an incomplete answer.
- Measure energy at explicit boundaries and phases. Separate idle, prefill, decoding, CPU, accelerator, RAM, SSD, interconnect, and cooling contributions; publish sampling rate, integration method, hardware state, batch size, context length, and uncertainty.
- Test whether additional reasoning, higher precision, a larger model, SSD streaming, or distributed inference improves completed work enough to offset lower raw throughput. Use exact checkpoints and configurations, repeated matched tasks, blinded grading, failure accounting, and full latency and power traces.

## Questions and Tensions

- Useful work per token, task completion per joule, latency, throughput, quality, and price are different quantities. The recording relates them conceptually but does not define a dimensionally consistent metric or establish when one predicts another.
- Lower energy per task does not necessarily imply proportionally lower latency: power limits, parallelism, batching, memory bandwidth, utilization, and fixed overhead can change energy and time differently.
- Computer heat is not a measurement of energy attributable to token generation. No sensor, baseline, thermal boundary, sampling interval, or conversion to joules is supplied.
- The asymptotic unsolved-task example assumes effectively unbounded generation and zero useful result. Real systems stop, fail, retry, use tools, or earn partial credit, so falsifiable efficiency measurements need explicit termination and scoring rules.
- Task difficulty is treated as an axis but not defined independently of the model. A task can be easy for one system and impossible for another, complicating a universal curve and model-to-model comparison.
- Longer reasoning can be productive or wasteful, and visible output may exclude hidden reasoning or tool activity. The proposed accounting does not say which tokens and external computations belong in the cost.
- The reported two-bit/four-bit, SSD, distributed, and Pro/Flash figures mix different machines and remembered configurations. Without exact file layouts, models, precision, interconnect, workloads, quality scores, power, and repeated runs, they cannot demonstrate an efficiency advantage.
- The analogy to human route selection does not establish a shared cognitive or biological mechanism. No neuroscience, thermodynamic, information-theoretic, or causal experiment is presented.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=ibcqRGQ7BKY)
- [transcript.md](./transcript.md)
