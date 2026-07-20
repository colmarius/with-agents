---
title: "Dimostrazione pratica di DeepSeek v4 Flash in locale con 128GB di RAM"
videoId: todMmp6AGCE
sourceUrl: "https://www.youtube.com/watch?v=todMmp6AGCE"
publishedAt: "2026-05-02T16:10:58Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo demonstrates an early local inference engine for a two-bit DeepSeek v4 Flash quantization on an M3 Max MacBook Pro with 128 GB of RAM. The model can handle useful interactive and coding tasks, but the session makes the main tradeoff visible: generation can feel adequate while long agent prompts and tool output make prefill latency increasingly expensive.

## Key Ideas

- Sanfilippo presents the setup as local inference that has moved beyond a toy for some uses, while acknowledging that a 128 GB laptop is expensive and therefore not broad democratization. [00:00:02]-[00:01:06]
- He started a dedicated engine partly because of restrictions on AI-authored contributions elsewhere and partly because the local-inference ecosystem leaves users to match models, quantizations, engines, templates, and coding agents themselves. He chooses tighter product and design control while delegating much implementation to GPT. [00:01:06]-[00:03:50]
- Delegation does not remove domain expertise: he says a generic request for fast Metal inference would produce poor results without detailed technical direction, experimentation, and product judgment. [00:03:50]-[00:04:43]
- In the demonstrated configuration, an approximately 81 GB model plus a 32,000-token context uses about 82 GB, while a 250,000-token setting adds roughly 6–7 GB. He attributes the unusually small context-memory cost to DeepSeek v4 Flash's architecture. [00:04:43]-[00:06:47]
- A general-knowledge exchange and a small C-program explanation illustrate the intended quality and responsiveness. Sanfilippo contrasts adaptive thinking length with models he believes over-sample for benchmark performance, while noting that conventional benchmarks do not fully represent general usefulness. [00:06:47]-[00:11:20]
- The project includes an interactive shell with history, paste handling, interruption, and multi-turn KV-cache reuse, plus an OpenAI-compatible server intended for coding agents. As the interactive context grows, both prefill and generation slow, motivating future context compaction. [00:09:29]-[00:12:24]
- OpenCode sends an approximately 11,000-token system prompt for the unfamiliar model. Sanfilippo demonstrates high initial prefill throughput followed by declining speed as context grows, then another large prefill when tool calls add file contents. [00:13:26]-[00:17:46]
- A comparison of two files takes about one minute and 50 seconds in the shown coding-agent session, whereas a short follow-up without a large new prefix returns quickly. He identifies tool output and accumulated context, rather than short-answer generation alone, as the practical bottleneck and proposes compaction. [00:18:37]-[00:20:30]
- He distinguishes memory-bandwidth-limited token generation from compute-heavy prefill when comparing possible hardware, and speculates about splitting those phases across machines while recognizing network latency as an obstacle. [00:21:37]-[00:22:40]
- The final demonstration emphasizes knowledge-heavy questions and code explanations as already useful local tasks, while further kernel and prefill optimization remain planned work. [00:23:46]-[00:24:48]

## Practical Implications

- Profile prefill and generation separately; a satisfactory tokens-per-second figure can conceal long delays from system prompts and tool results.
- Evaluate the complete model–quantization–engine–template–agent combination rather than assuming that any individually compatible pieces form a usable product.
- Budget context deliberately in local coding agents through smaller system prompts, selective tool output, cache reuse, and compaction.
- Treat agent-generated implementation as leverage for an expert-led design process, not as a substitute for domain-specific performance steering and validation.

## Questions and Tensions

- The demonstration is not a controlled benchmark and does not provide repeatability, quality, energy-use, or comparison data.
- Two-bit quantization makes the model fit, but the transcript does not measure how much capability or reliability it loses relative to higher precision.
- Very large configured context windows are not equivalent to practical agent throughput when prefill slows as the working context expands.
- The project was not yet public at the time described, so its implementation and claims could not be independently inspected from this source.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=todMmp6AGCE)
- [transcript.md](./transcript.md)
