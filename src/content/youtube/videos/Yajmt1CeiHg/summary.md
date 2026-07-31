---
title: "Vlog sugli sviluppi di DS4"
videoId: Yajmt1CeiHg
sourceUrl: "https://www.youtube.com/watch?v=Yajmt1CeiHg"
publishedAt: "2026-05-06T16:33:53Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

In the technical portion of this vlog, Salvatore Sanfilippo reports early smoke testing of the local DeepSeek v4 Flash inference engine with Claude Code. He focuses on disk-backed KV caching, request canonicalization, streaming feedback, visibility into model reasoning traces, and the stronger sandboxing requirements of smaller local models.

## Key Ideas

- Sanfilippo says he has not yet run the benchmarks he wants, but reports extensive smoke tests of DeepSeek v4 Flash with Claude Code. A fast disk-backed KV cache makes Claude Code's roughly 25,000-token system prompt practical to reuse. [00:02:10]-[00:03:17]
- Sequential reads and writes fit SSD strengths, while cache reuse also requires normalizing request details that otherwise change between calls, including a varying Anthropic field and the ordering or representation of tool calls. [00:03:17]-[00:04:20]
- He presents agent-assisted programming as making these small compatibility fixes easier to implement, and reports that the local model works through Claude Code with tool calls and subagents in his tests. [00:04:20]-[00:05:25]
- His server streams generated tokens, but Claude Code exposes normal answer streaming rather than the model's longer thinking phase. For a slower local model, the resulting silence weakens feedback while the user waits. [00:06:17]-[00:07:20]
- Sanfilippo wants local inference interfaces to expose DeepSeek's reasoning trace instead of hiding it, both to make waiting visible and to keep the user connected to the model's process. He defers a separate argument about distillation and the value of such traces. [00:07:20]-[00:09:25]
- Because Claude Code is designed around faster frontier-model behavior, he considers building or revisiting a minimal local agent. He identifies sandboxing as a major constraint because smaller, less aligned local models may make damaging mistakes when granted broad machine permissions. [00:10:29]-[00:11:31]

## Practical Implications

- Canonicalize stable prompt and tool-call inputs before computing or reusing a disk-backed KV cache.
- Stream enough local-model activity to give users timely feedback, while distinguishing interface visibility from proof that a trace faithfully explains internal computation.
- Treat sandboxing and permission limits as core requirements for local coding agents rather than assuming frontier-agent safety behavior transfers to smaller models.
- Keep benchmark conclusions separate from smoke-test impressions, especially when evaluating cache speed and end-to-end agent usability.

## Questions and Tensions

- The reported behavior is preliminary and contains no benchmark data, comparative measurements, or documented test matrix.
- Showing a reasoning trace can improve observability, but the transcript does not establish that the trace is a faithful account of the model's internal process.
- Request masking and canonicalization must avoid treating semantically meaningful changes as cache-equivalent.
- A minimal custom agent could better fit local inference while also creating additional maintenance, security, and tool-compatibility work.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=Yajmt1CeiHg)
- [transcript.md](./transcript.md)
