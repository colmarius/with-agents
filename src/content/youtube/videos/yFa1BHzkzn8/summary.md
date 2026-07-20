---
title: "Il paper di Anthropic su AI e competenze, e una prova sul campo di flux2.c"
videoId: yFa1BHzkzn8
sourceUrl: "https://www.youtube.com/watch?v=yFa1BHzkzn8"
publishedAt: "2026-01-31T18:09:33Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo critiques a study of AI assistance and software-engineering skill acquisition, arguing that its unfamiliar library, short tasks, and chat-only interface measure a narrow workflow. He contrasts it with his experience building a compact local image-generation program with coding agents, while leaving a real tension between immediate production gains and the skills needed to supervise generated work.

## Key Ideas

- The study asks whether AI-assisted work weakens the skills people need to supervise automation. It reports lower conceptual understanding, code reading, and debugging performance in its setting, while also finding that some interaction patterns preserve cognitive engagement. [00:01:12]-[00:03:35]
- Sanfilippo says a move from implementation to supervision will naturally reduce some manual practice but may develop different abilities. For him, the consequential question is whether losing implementation experience eventually makes someone worse at directing and checking automated work. [00:04:32]-[00:07:00]
- The study reports a 17% lower assessment score for assisted participants and no statistically significant completion-time improvement. It attributes some overhead to participants composing many chat queries; Sanfilippo also notes that written expression and typing fluency affect this workflow. [00:08:13]-[00:10:25]
- The experiment used the less familiar Trio concurrency library, selected partly to introduce concepts beyond standard Python async practice. Sanfilippo argues that a library designed to be approachable to people but not already familiar to the model can make the assistant an initial handicap. [00:12:37]-[00:13:56]
- Participants had at most 35 minutes for two Trio tasks, and the assisted group used a browser chat rather than a repository-aware coding agent. Sanfilippo concludes that this setup cannot tell him much about the development workflow he wants to evaluate. [00:14:58]-[00:16:08]
- As a counterexample from his own work, he demonstrates a roughly 3,000-line C and Objective-C implementation of a distilled four-billion-parameter image model built over several afternoons. It includes Metal kernels, the Transformer, tokenization, text embeddings, and image decoding for local inference. [00:17:11]-[00:20:31]
- The model generates an image through four denoising steps, with a large final refinement. Sanfilippo uses the runnable demonstration to show that agent-assisted work can make a technically broad local implementation feasible on a much shorter personal schedule. [00:20:31]-[00:21:47]
- He says increased development capacity also supported product details beyond the core inference path: multiple terminal graphics protocols, reference-image conditioning, super-resolution use, and self-contained image-format handling. [00:22:46]-[00:27:21]

## Practical Implications

- Evaluate retained implementation skills separately from newly acquired skills in specification, supervision, review, and system-level reasoning.
- Match experiments to the tool mode being claimed: browser chat, code completion, and repository-aware agents impose different interaction costs.
- Control for model familiarity with the library and provide the same documentation context that a realistic workflow would use.
- Pair productivity demonstrations with correctness tests, maintenance evidence, and an explicit baseline; a compelling artifact alone does not measure learning or long-term reliability.

## Questions and Tensions

- Sanfilippo's project is an anecdotal demonstration by an experienced developer, not a controlled rebuttal of the study's findings about skill acquisition.
- A short experiment with an unfamiliar library may understate realistic agent productivity, but it can still reveal how assistance affects learning under constrained conditions.
- If implementation practice declines, it remains unclear which supervisory skills can compensate and how beginners can acquire them safely.
- More development bandwidth can produce useful polish, yet it can also expand scope and generated code that later needs verification and maintenance.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=yFa1BHzkzn8)
- [transcript.md](./transcript.md)
