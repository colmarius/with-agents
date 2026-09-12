---
title: "Sento puzza di AGI: Chollet, GPT Astra e Fable 5 1"
resourceId: 108
date: "2026-09-04"
---

Salvatore Sanfilippo argues that recent model progress challenges claims that language models cannot reason, then asks how developers should evaluate that progress in practice. His practical focus is useful software work: can a new model complete a task that previously resisted automation? He interprets that progress as movement toward artificial general intelligence (AGI), rather than demonstrating that a threshold has been reached.

### Reasoning and the role of the harness

- **Symbolic modeling as a reported capability**: Reading a post attributed to Chollet, Sanfilippo describes GPT Astra constructing symbolic representations and game-specific notation for interactive reasoning tasks. He interprets this as capabilities previously supplied by sophisticated harnesses moving into the model. The discussed setup still includes a harness, with continuous reasoning and custom compaction in one configuration; this is not evidence of harness-free performance ([01:52–07:31](https://www.youtube.com/watch?v=I-5j_nzqnAo&t=112s)).
- **More reasoning steps need working space**: He argues that long problems benefit from working memory and tools for manipulating it. He also discusses looping transformer layers as a possible way to refine representations, but explicitly says he does not know whether Astra uses that architecture. His prediction about a newer ARC benchmark is likewise speculative ([07:31–10:25](https://www.youtube.com/watch?v=I-5j_nzqnAo&t=451s)).

### Evaluate progress through software outcomes

- **Look for tasks that a previous model could not complete**: Sanfilippo criticizes Artificial Analysis's aggregate rankings and argues that practitioner judgments should identify concrete newly achievable work, not just a preferred conversational style. As an example, he reports that Fable 5.1 raised Dwarf Star inference throughput from 42 to 49 tokens per second in an afternoon after weeks of earlier optimization attempts. This is his project anecdote, not a controlled model comparison ([10:25–16:11](https://www.youtube.com/watch?v=I-5j_nzqnAo&t=625s)).
- **Measure useful optimization under explicit constraints**: He proposes giving a model a token budget to improve Redis speed and memory use while keeping all tests passing, then repeating the exercise and measuring the gains. He contrasts this with tasks he believes mostly stress harness and tool-calling mechanics, and points to CUDA-kernel optimization as a more meaningful evaluation direction. The Redis exercise is a proposal, not a benchmark run presented in the video ([16:11–18:07](https://www.youtube.com/watch?v=I-5j_nzqnAo&t=971s)).
- **Broader transfer remains an expectation**: He closes by anticipating greater usefulness in science and adjacent domains as abstract reasoning improves. The recording does not establish that transfer or an AGI threshold ([18:07–20:01](https://www.youtube.com/watch?v=I-5j_nzqnAo&t=1087s)).

**Editorial takeaway:** Use a repeatable task from your own codebase, record the starting performance and resource budget, and check correctness alongside any claimed gain. That is a practical application of the evaluation proposal, not evidence that one model is universally better.

[Watch the full video on YouTube](https://www.youtube.com/watch?v=I-5j_nzqnAo).
