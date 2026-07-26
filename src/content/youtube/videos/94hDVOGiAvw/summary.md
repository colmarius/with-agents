---
title: "L'ipocrisia della distillazione e Harry Potter come prova fallace di violazione del copyright"
videoId: 94hDVOGiAvw
sourceUrl: "https://www.youtube.com/watch?v=94hDVOGiAvw"
publishedAt: "2026-02-25T14:39:30Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo challenges how AI laboratories use the word distillation and present model-output extraction as evidence about training data. He combines technical explanation, reported examples, methodological criticism, and a broader collective-culture argument. The recording does not independently verify the allegations, experiments, training histories, or legal assertions it recounts.

## Key Ideas

- Sanfilippo reports that Anthropic accused Chinese AI providers, including DeepSeek, of distilling models using Claude. He recounts claims about 26,000 accounts extracting reasoning traces and Claude acting as a reinforcement-learning judge, while noting that Anthropic did not document the evidence it claimed to have found. These are allegations, not findings established by the video. [00:00:01]
- He describes two ways one model could assist another: generating reasoning traces for supervised fine-tuning, and producing questions, verified answers, or reward signals for reinforcement learning. His division of roles among pretraining, fine-tuning, and reinforcement learning is a technical interpretation, not an experiment shown here. [00:01:10]-[00:02:20]
- He reserves distillation for much broader transfer from a locally available teacher through a very large output dataset. He allows that training a smaller model on many reasoning traces can be called distillation, but argues that such a student will not reach the original model's level. The video provides no comparative results or operational threshold for this distinction. [00:02:20]-[00:03:33]
- He reports that users could prompt Sonnet 4.6 in Chinese and receive DeepSeek as its self-identification, then infers that laboratories reused DeepSeek reasoning traces. Neither the anecdote nor the inferred training history is independently tested; an output string alone does not document its cause. [00:04:25]
- Sanfilippo describes cross-use of model outputs as an industry practice layered on pretraining from public material. He also invokes unspecified US judicial decisions and laboratories' past conduct when criticizing Anthropic. The recording supplies neither case context nor technical evidence for that broader history. [00:05:16]-[00:06:26]
- He recounts a paper that reportedly reconstructed 95% of a Harry Potter text for about $150 in API usage. As described, the method seeded prompts with source text, varied parameters across many calls, and repeatedly selected the result closest to the known text. He criticizes this post-selection and the lack of texts with different exposure. [00:06:26]-[00:09:37]
- His explanation for the reported extraction result is that famous works can be represented many times through quotations, criticism, fan fiction, OCR variants, scans, and translations even after exact-duplicate removal. He offers this as a corpus hypothesis; the video includes no dataset inventory, deduplication audit, exposure count, or comparison against less prominent works. [00:10:41]-[00:11:52]
- Sanfilippo speculates that extra representation of prominent works may be useful because users ask more about them, and may therefore be encouraged during data selection. He closes with a normative collective-culture argument; it does not establish provenance, permissions, or obligations for a specific system. [00:11:52]-[00:15:06]

## Practical Implications

- Evaluate output-reuse claims by documenting model versions, account behavior, prompts, outputs, access paths, dates, and alternative explanations; an allegation or self-identification anecdote is not a reproducible training-history analysis.
- Define distillation, supervised fine-tuning, teacher-generated data, and model-based reward signals before comparing incidents. Different access patterns and objectives should not be collapsed into one label.
- For memorization or extraction research, disclose the target-selection rationale, corpus-exposure proxy, prompts, decoding settings, number of executions, selection rule, similarity metric, controls, and results for less prominent works.
- Keep questions about what a model emits, why it emits it, and the surrounding policy or legal dispute separate. This transcript supplies an argument and reported examples, not an adjudication.

## Questions and Tensions

- The Anthropic post, underlying evidence, and providers' responses are absent. The account cannot establish how the 26,000 accounts were identified, what they collected, or how outputs were used.
- The extraction paper is not identified in the transcript. Exact model/version, target edition, prompt sequence, run count, decoding parameters, selection metric, baseline, control texts, and replication results remain unavailable.
- Selecting the candidate closest to a known target measures a search-and-selection procedure, not blind recovery from a single prompt. The reported 95% figure cannot be interpreted without the omitted sampling and scoring details.
- Exact deduplication may leave quotations, translations, OCR variants, and derivative discussion, but the video does not measure their presence in a training corpus or connect them to a particular output.
- The recording mentions judicial decisions, a settlement, and possible legal consequences without identifying cases, terms, jurisdictions, or factual records. Those references do not resolve any specific practice's legal status.
- The collective-culture argument is normative. It remains distinct from evidence about a particular model's data provenance, training process, output behavior, or governing terms.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=94hDVOGiAvw)
- [transcript.md](./transcript.md)
