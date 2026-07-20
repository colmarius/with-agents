---
title: "AI: Estrarre un prompt da uno stile non funziona. Lo style transfer lo si fa attraverso gli esempi."
videoId: eTnUphIXr84
sourceUrl: "https://www.youtube.com/watch?v=eTnUphIXr84"
publishedAt: "2025-11-27T13:17:16Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo runs a live comparison between two ways of transferring a writer's style with Claude Opus 4.5. Supplying the full reference text produces an imitation he judges convincing, while first compressing that text into a reusable style prompt produces a generic result; he attributes the gap to information lost in the description.

## Key Ideas

- Sanfilippo challenges the idea that an LLM can reliably extract a compact prompt from one text and then use that prompt to reproduce its style. He argues for learning through small experiments with the model rather than accepting an attractive technique without testing it. [00:00:00]-[00:02:21]
- For the demonstration, he chooses a highly mannered post by Giulio Mozzi and a markedly different post of his own. He points to features such as parenthetical digressions, erudite references, accumulations of related words, shifts in register, and contrasting narrative imagery. [00:02:21]-[00:09:00]
- In the first method, he gives Claude both complete texts and asks for a radical rewrite of his post in Mozzi's style. The model identifies stylistic tendencies and generates an opening that Sanfilippo considers a strong transfer. [00:09:00]-[00:11:35]
- In the second method, he asks the model to turn Mozzi's post into a reusable instruction that preserves meaning while imposing the reference style. He then copies that extracted instruction into a new chat with his own source text. [00:12:41]-[00:13:43]
- The resulting rewrite retains much of the original wording and adds flourishes that Sanfilippo considers generic and unlike Mozzi. Within this single demonstration, the descriptive prompt performs substantially worse than direct access to the example. [00:14:51]
- He argues that style includes a large combination of syntax, vocabulary, punctuation, rhythm, meter, and allusion. Compressing those particulars into a short verbal description discards information; an exact account could require more text than the example itself. [00:15:57]
- A full example keeps those particulars available for the model to inspect. He compares replacing the example with a description to reconstructing a film from its plot, characters, and behavioral notes rather than watching the film itself. [00:17:10]
- Many distinct styles can satisfy broad descriptors such as digressive, self-ironic, or conversational, so the mapping from styles to a short prompt is many-to-one. His practical conclusion is to perform style transfer with examples rather than extracted descriptions. [00:18:20]-[00:19:31]

## Practical Implications

- Put representative source passages in context when fidelity matters instead of relying only on a generated list of stylistic traits.
- Preserve the target text and reference example as separate inputs, with an explicit instruction to retain meaning while changing presentation.
- Compare exemplar-based and description-only methods in fresh contexts so earlier text does not leak into the second condition.
- Evaluate several passages, reference lengths, and model runs before treating one successful imitation as a dependable workflow.

## Questions and Tensions

- This is one live, subjective comparison with one model; it has no blinded evaluation, repeated runs, fixed decoding settings, or independent judgment of resemblance.
- The direct method receives the complete reference while the prompt method receives a compressed derivative, so the experiment demonstrates an information advantage but does not measure how much compression is tolerable.
- The information-theory argument is intuitive in the transcript rather than formal: no description length, retained information, or stylistic similarity is quantified.
- Direct imitation may preserve more stylistic detail, but the video does not address permission, attribution, originality, or how to avoid over-copying a living writer.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=eTnUphIXr84)
- [transcript.md](./transcript.md)
