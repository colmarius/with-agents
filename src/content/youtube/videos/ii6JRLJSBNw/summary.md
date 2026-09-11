---
title: "Contro il watermarking"
videoId: ii6JRLJSBNw
sourceUrl: "https://www.youtube.com/watch?v=ii6JRLJSBNw"
publishedAt: "2026-08-18T13:44:43Z"
sourceLanguage: it
summaryLanguage: en
captionKind: auto-generated
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo argues against watermarking AI-generated text, contending that provenance of the final wording is a poor proxy for research quality, truthfulness, or human contribution. He also explains a keyed token-bias watermarking scheme and sketches ways to remove its statistical signal while changing as little of the original text as possible. The policy position, proposed removal method, and quality assessment are his views rather than established results in this transcript.

## Key Ideas

- Sanfilippo distinguishes text from synthetic images: for text, he argues that the quality of the research and editorial process matters more than whether an AI emitted the final words. A person can carefully develop AI-assisted prose or manually write unsupported claims. [00:02:24]-[00:05:33]
- He argues that policing AI-written prose can disadvantage non-native writers and people with language-related difficulties who use models as assistive tools. [00:04:26]-[00:06:30]
- In the described model-agnostic watermark, a secret key and preceding text reproducibly partition candidate tokens into two groups. Sampling gives one group a small probability boost, leaving a detectable aggregate bias for someone holding the key. [00:11:07]-[00:17:01]
- The detector identifies use of that particular keyed generation scheme, not AI authorship in general. Text produced by an unwatermarked local model does not contain this signal. [00:15:55]-[00:17:01]
- Sanfilippo expects the small sampling bias to have no meaningful effect on output quality, while acknowledging that it changes the token distribution and may increase perplexity relative to the original model. This is his assessment; the transcript presents no evaluation. [00:17:01]-[00:19:09]
- Full paraphrasing can erase a watermark but may destroy deliberate wording. He proposes using teacher-forced inference to annotate plausible alternative tokens, then asking a model to make the minimum semantically safe substitutions needed to weaken detection. [00:19:09]-[00:25:11]
- His simpler alternative is local inference with open-weight models that never add the watermark, which he presents as further motivation for local hardware and his Dwarf Star project. [00:25:11]-[00:26:17]

## Practical Implications

- Editorial: Do not treat a positive watermark result as evidence that a text is false, low quality, or produced without meaningful human work; it supports only the detector's defined provenance claim.
- Editorial: Evaluate watermark robustness against light editing, paraphrase, missing prompt context, false positives, and distribution shifts before relying on it.
- Editorial: Any removal experiment should measure detection rate, semantic preservation, edit distance, and writing quality rather than declaring success from changed wording alone.

## Questions and Tensions

- Sanfilippo's accessibility argument conflicts with policy goals that may require disclosure or provenance; the transcript does not evaluate narrower labeling regimes.
- The proposed minimal-edit attack is a design sketch, not a demonstrated algorithm, and the secret partition means an attacker cannot directly know which substitutions remove the signal.
- His planned removal tooling raises governance and misuse questions that are not examined in the video.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=ii6JRLJSBNw)
- [transcript.md](./transcript.md)
