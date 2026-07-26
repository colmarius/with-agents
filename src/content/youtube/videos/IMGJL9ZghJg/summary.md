---
title: "I nuovi meccanismi di attenzione sparsa confermano che l’attenzione è un problema quadratico"
videoId: IMGJL9ZghJg
sourceUrl: "https://www.youtube.com/watch?v=IMGJL9ZghJg"
publishedAt: "2026-05-28T06:00:17Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo connects his informal local tests of several open-weight models with a broader argument about sparse attention. He reports that a DeepSeek-related model behaved better on his long-horizon coding tasks, then interprets recent sparse-attention announcements as support for his earlier skepticism about replacing dense attention with a strictly linear mechanism.

The model tests, explanation of the sparse mechanism, and conclusion about quadratic attention are Sanfilippo's reports and interpretation. The recording provides no named sparse-attention paper, equations, code, complete benchmark record, or independent reproduction, and it does not establish that every effective attention design must have the same theoretical or practical cost.

## Key Ideas

- Sanfilippo says he tested the smaller open-weight Xiaomi MiMo V2.5 and MiniMax V2.7 models rather than their larger variants. His immediate interest is in aggressively quantized models that fit either 128 GB or 512 GB of RAM while retaining acceptable prefill and generation performance; no exact checkpoints, files, kernels, hardware, or measurements are supplied. [00:00:01]-[00:01:55]
- He describes using GPT 5.5 as an LLM judge for a long-horizon task in which each candidate built a C DNS server with specified properties. He read the two models' reasoning traces himself, while the judge checked tool-calling details for subtle errors, but he does not provide the prompt, candidate outputs, rubric, judge settings, number of runs, or selection procedure. [00:03:02]-[00:04:08]
- Although he recalls public benchmarks favoring MiMo or MiniMax slightly, he says his tests favored the DeepSeek-related model. MiMo was reportedly used at three bits rather than two, which he says theoretically disadvantaged DeepSeek. He allows that quantization may have damaged the alternatives but does not think that is the main explanation, because they worked on single-round tasks and lost coherence on longer ones. These are informal observations rather than a controlled quality comparison. [00:04:08]-[00:05:03]
- For roughly 100,000-token tests, Sanfilippo attributes the favored model's behavior partly to its attention design and strongly compressed KV cache. He reasons that denser useful information lets attention process less data and says prefill and generation performance degrade more slowly with context than for the two dense-attention alternatives. The transcript gives no quality metric, cache format, context distribution, latency, throughput, memory, or scaling curve. [00:05:03]-[00:06:08]
- On that evidence, he plans not to merge his private MiniMax and MiMo branches unless their multimodality or performance in another domain supplies a clear product advantage. He reports already writing optimized kernels and refactoring model templates and disk-cache records, illustrating an implementation decision rather than a general model ranking. [00:06:08]-[00:08:01]
- Sanfilippo recalls previously arguing that linear-attention alternatives would not work as well, then cites a recent sparse-attention announcement from either Xiaomi or MiniMax, while acknowledging that he no longer remembers which. He treats the announcement and his local observations as support for his prior view, but neither identifies the exact method nor tests the causal role of attention. [00:08:01]
- He characterizes dense attention as fundamentally quadratic because a new token must be related to all prior tokens. The recording does not formalize whether the claim concerns pairwise interactions across a complete sequence, incremental decoding per token, total generation cost, training, memory, or a specific implementation. [00:08:01]-[00:09:06]
- In his description, the sparse design first applies a cheaper, coarse attention process over the content to select indices for the most relevant tokens, then applies the more expensive attention to that subset. His book analogy compares this with remembering a rough location, scanning chapters, and revisiting only the relevant passages. No selection rule, sparsity pattern, approximation, or complexity is specified. [00:09:06]-[00:10:09]
- He concludes that reduced-scale coarse attention followed by selective expensive attention reinforces his earlier prediction. That conclusion is a speaker interpretation: the recording reports no paper result, empirical quality comparison, asymptotic proof, hardware measurement, or independent reproduction showing that the method universally confirms quadratic attention. [00:10:09]

## Practical Implications

- Separate algorithmic complexity from end-to-end performance. Report sequence length, prefill and decoding phases, selected-token count, theoretical operations, actual memory traffic, cache size, kernel, hardware, precision, latency, and throughput.
- Reproduce the local model comparison with exact checkpoints, quantization formats, prompts, context lengths, tool interfaces, decoding settings, judge configuration, all candidate outputs, repeated runs, and human evaluation blinded to model identity.
- Specify and ablate the sparse mechanism: coarse representation, candidate-selection rule, sparsity pattern, expensive-attention stage, cache layout, and fallback behavior. Compare each part with a matched dense baseline.
- Measure both system efficiency and empirical quality across short and long contexts. Lower compute or memory is useful only if retrieval, reasoning, coding, and generation quality remain acceptable under the same evaluation protocol.

## Questions and Tensions

- The auto-generated captions render several model names inconsistently, and Sanfilippo is unsure which company announced the sparse mechanism. Exact model and method identity remain unresolved.
- No benchmark artifact supports the reported model ordering. Quantization, architecture, model size, context handling, multimodality, kernel maturity, and task design all vary or remain unspecified.
- An LLM judge plus manual trace inspection can help find subtle errors, but the absent prompts, outputs, rubric, repetitions, and independent graders make reliability and selection effects impossible to assess.
- Dense sequence attention, incremental decoding, a reduced-scale coarse stage, and attention over a selected subset can have different asymptotic and practical costs. The transcript does not distinguish them mathematically.
- A coarse selector that considers all content may still be useful even if its cost is quadratic on a smaller representation. That particular design would not prove that every high-quality alternative requires full dense attention or the same scaling law.
- The speaker links long-context behavior to attention and KV-cache compression without an ablation. Training data, architecture, quantization sensitivity, cache precision, software, and decoding could also affect the reported result.
- Private branches and optimized kernels show implementation effort, not that the alternatives are generally inferior or that the favored system will remain best on other hardware, domains, or quality thresholds.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=IMGJL9ZghJg)
- [transcript.md](./transcript.md)
