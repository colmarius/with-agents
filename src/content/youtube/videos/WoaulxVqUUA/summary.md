---
title: "Altre considerazioni su Claude Fable"
videoId: WoaulxVqUUA
sourceUrl: "https://www.youtube.com/watch?v=WoaulxVqUUA"
publishedAt: "2026-06-10T16:23:07Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

After another day using Claude Fable, Salvatore Sanfilippo refines an earlier assessment. He focuses on deliberate token use, limited steerability, cross-model review, persuasive failure modes, and restrictions around AI research.

## Key Ideas

- Sanfilippo reports that Fable consumes credits faster than Opus, but argues that the practical rate depends heavily on whether users run focused sessions or let several agents generate work without a clear purpose. [00:00:04]-[00:02:14]
- His concern about steerability remains: the model gives little feedback while working and is difficult to redirect until a turn finishes, reducing the developer's ability to influence an imperfect process. [00:02:14]
- Rather than assigning fixed roles such as designer and coder, he proposes reciprocal code review between two strong models. Each model reviews the other's work, and the review is returned to the original model for revision. [00:03:26]-[00:05:44]
- A stronger model can also defend an incorrect conclusion more convincingly. In his optimization example, Sanfilippo had to challenge a plausible explanation and supply behavioral evidence before the model reconsidered its diagnosis. [00:05:44]-[00:09:03]
- He reports concerns that some frontier-model research prompts trigger refusal or a less capable response rather than normal assistance. He distinguishes this observation from his own Dwarf Star work, where he had not yet seen the same behavior. [00:10:09]-[00:11:18]
- The revised assessment reinforces a broader concern that access to model capability is increasingly shaped by price and permitted use, not capability alone. [00:12:13]

## Practical Implications

- Reserve expensive frontier-model calls for concrete problems and avoid uncontrolled parallel sessions.
- Use disagreement between models to surface omitted considerations, then require the implementing model to respond to the review.
- Test persuasive explanations against observed behavior; rhetorical confidence does not establish a diagnosis.
- Evaluate an agent's feedback cadence and mid-turn steering behavior as part of tool selection, not only final output quality.

## Questions and Tensions

- These are early, experience-based observations rather than a controlled comparison of models, plans, or workloads.
- Cross-model review adds diversity of reasoning but remains model-generated review, not independent proof of correctness.
- The transcript raises serious concerns about hidden capability restrictions, but it does not independently verify how the product implements or selects those restrictions.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=WoaulxVqUUA)
- [transcript.md](./transcript.md)
