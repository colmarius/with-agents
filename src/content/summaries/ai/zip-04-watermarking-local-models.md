---
title: "Watermarking, l'odio per l'AI e modelli locali senza censura | ZIP 04"
resourceId: 121
series: "zip"
episode: 4
date: "2026-08-24"
---

*This English summary paraphrases Italian auto-generated captions. It is an editorial translation, not a verbatim quotation or an original-audio review.*

Enkk and Salvatore Sanfilippo connect three questions: what a text watermark can establish, what changes when users control model weights and inference, and why people object to AI-assisted work. Their technical explanations sit alongside personal experience, social interpretations, and forecasts—not independent measurements of model quality or public opinion.

### Watermarks indicate provenance, not quality

- **Enkk explains a statistical signal inserted during generation.** In his teaching example, a secret key, preceding text, and candidate token deterministically assign each candidate a color. The sampler favors one color among plausible candidates; a detector later checks for an unusual excess of that color without running the language model. He explicitly says this is an illustration, not a complete account of Anthropic's implementation. [05:53–11:01](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=353s)
- **A negative detection result does not prove human authorship.** They argue that paraphrasing can disrupt the signal, while different providers' secret keys complicate interoperable detection. Sanfilippo also points to local inference where the user controls sampling. These are their criticisms of the discussed approach, not a measured false-positive or evasion rate. [11:01–14:34](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=661s)
- **Detection strength and output distortion must be evaluated together.** They discuss the tension between changing token selection, preserving output quality, and having enough text to detect a signal. Enkk asks whether published benchmarks would use the same watermarking configuration as the delivered product; the episode does not establish a benchmark mismatch or quantify degradation. [11:01–12:05](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=661s), [13:46–16:33](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=826s)
- **The writer remains responsible for the result.** Enkk describes criticizing repetitive, poorly assembled student writing rather than treating AI use as a binary verdict. Later, he argues that selecting, prompting, and iterating still require effort: comparing outputs helps users articulate and enforce their own standards. [16:33–20:28](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=993s), [31:02–33:08](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=1862s)

### Local control changes the safety and trust boundary

- **Removing refusals is not a clean switch.** They describe *abliteration*: modifying internal model behavior to suppress refusals. Their warning is that model representations overlap; changing a direction associated with refusal can also damage unrelated capabilities. Enkk's steering experiments illustrate the sensitivity to intervention strength, not a dependable recipe for isolating one behavior. [36:22–44:49](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=2182s)
- **Local privacy and misuse risk can coexist.** The speakers argue that locally controlled models can bypass the restrictions of hosted services. Their concern extends beyond access to information: interactive feedback can help a user correct mistakes over successive attempts. Enkk explicitly says this does not justify abandoning safeguards and calls for further safety research. [47:58–52:50](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=2878s)
- **The model download becomes a software-supply-chain concern.** Enkk raises the possibility that a third-party model could be deliberately modified to generate vulnerable code. Sanfilippo says model backdoors have been demonstrated and favors more controlled model sources. This is a discussion of a threat and provenance choices, not an audit of a named distributor or proof that a curated source is safe. [51:45–54:47](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=3105s)

### Opposition to AI has several causes

- **They distinguish job loss, creative identity, environmental concerns, and dismissal of human effort.** Enkk rejects the assumption that any AI involvement means the person contributed nothing; he also emphasizes that losing the value of a hard-earned creative skill can provoke an understandable reaction. He later adds artists' objections to training on their work without permission. The speakers acknowledge that their online circles do not establish how the wider public thinks. [59:53–1:04:31](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=3593s), [1:06:36–1:11:40](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=3996s), [1:19:45–1:21:45](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=4785s)
- **Their responses differ without becoming simply pro- or anti-AI.** Sanfilippo argues for protecting displaced people's income and dignity rather than preserving every task. Enkk frames AI as an accelerator of an existing commercial preference for cheap, optimized content: what changes is how many people can produce it and at what scale. These are political and cultural interpretations, not established forecasts of employment or artistic quality. [1:11:40–1:18:39](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=4300s)
- **They end by asking for higher standards, regardless of the production method.** Their shared preference is to reject mediocre work whether generated by a model or produced by humans, while keeping room for thoughtful AI-assisted creation. Predictions about new niche productions and psychologically optimized entertainment remain speculation. [1:18:39–1:20:48](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=4719s), [1:23:44–1:30:00](https://www.youtube.com/watch?v=xCBEDnPKtBI&t=5024s)

**Editorial takeaway:** Separate provenance, quality, and safety. A watermark does not review a document; a locally runnable model does not establish trustworthy weights; and AI involvement alone does not explain the human work behind an output.

### ZiP episode guide

This site's combined series currently summarizes episodes **1, 4, and 5**. The hosts alternate channels; neither [Enkk's playlist](https://www.youtube.com/playlist?list=PLNYj5B1tjzls) nor [Sanfilippo's playlist](https://www.youtube.com/playlist?list=PLUxl0pxM2E-w) contains all five episodes in the September 14, 2026 check.

Earlier episodes:

- [Episode 1 — GPT 5.6, Fable e i moscerini della frutta](/summaries/ai/zip-01-gpt-fable-fruit-flies) — July 11, 2026; transcript-backed summary.
- [Episode 2 — L'evasione di GPT, la congettura Jacobiana e… ha ancora senso leggere il codice?](https://www.youtube.com/watch?v=v2jJwgmWEVw) — July 23, 2026; not yet summarized here.
- [Episode 3 — Sviluppo AI responsabile, Kimi K3, DS4 Flash e la frontiera a fette](https://www.youtube.com/watch?v=IBqKnPrF7K4) — August 2, 2026; not yet summarized here and absent from both checked playlists.

[Read episode 5: AGI and benchmarks](/summaries/coding-with-agents/antirez-zip-5-agi-benchmarks), or [watch episode 4 on YouTube](https://www.youtube.com/watch?v=xCBEDnPKtBI).
