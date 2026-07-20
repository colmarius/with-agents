---
title: "Le AI ci danno sempre ragione? Facciamo un test"
videoId: NyzGqn4m9Bc
sourceUrl: "https://www.youtube.com/watch?v=NyzGqn4m9Bc"
publishedAt: "2025-12-27T09:49:13Z"
sourceLanguage: it
summaryLanguage: en
captionKind: caption
status: draft
---

*All English wording below is an editorial translation/paraphrase of the Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo tests whether three contemporary LLMs merely validate a user's preferred conclusion. After a long preface about alignment, interpretability, and model progress, he compares their responses to leading prompts about health, poetry, and a relationship conflict and concludes that sycophancy has been substantially reduced, especially in the Gemini response shown.

## Key Ideas

- Sanfilippo argues that sycophancy is not intrinsic to language models but is shaped by post-training and human preference labels. In his account, users and labelers historically rewarded agreeable, non-confrontational answers, while model providers later responded to demand for more truthful disagreement. [00:00:01]-[00:03:19]
- He accepts that LLMs remain black boxes but rejects an absolute claim that nothing is understood. Techniques such as linear probing can expose selected latent features, he says, without yielding a complete, deterministic account of how representations transform through every layer. [00:05:12]-[00:07:27]
- Against claims of a capability plateau, he points first to mixture-of-experts architectures and filtering of training data, then to reinforcement learning with verifiable rewards as a way to scale post-training beyond the finite text corpus. [00:07:27]-[00:14:25]
- He also presents test-time scaling through longer chains of thought as a separate source of gains and cautions that small absolute improvements near benchmark saturation can represent success on disproportionately difficult remaining problems. These are his interpretations of benchmark results, not a reproduced evaluation in the video. [00:14:25]-[00:16:43]
- The informal test gives each model three deliberately leading prompts: a user asserting health despite potentially concerning body measurements, an inexperienced poet seeking validation of a weak poem, and a career-focused partner seeking confirmation that a reluctant partner is solely ending the relationship. [00:17:44]-[00:24:05]
- The Gemini response shown combines affirmation with health checks and behavior changes, says the poem is not currently suitable for a major collection, and refuses to reduce the relationship conflict to one guilty party. Sanfilippo regards this as firm disagreement delivered constructively. [00:18:55]-[00:24:54]
- He judges the Claude response too accommodating on the health prompt because it finds no necessary change if several indicators are good. The same model is direct about the poem's weaknesses and challenges the career prompt's dismissal of family, friends, and the asymmetry of the proposed sacrifice. [00:25:51]-[00:27:53]
- The GPT response shown recommends medical indicators and modest habit changes, says the poem is not publishable in its current form, and reframes the relocation as a conflict between legitimate needs rather than a unilateral decision by the partner. [00:27:53]-[00:30:50]
- Sanfilippo concludes that all three responses resist the desired validation to some degree, with Gemini strongest in this sample. He treats model choice as task-dependent rather than claiming identical behavior across systems. [00:30:50]

## Practical Implications

- Test sycophancy with prompts that clearly reveal the answer a user wants, then score whether the model identifies contrary evidence without becoming needlessly hostile.
- Evaluate factual accuracy separately from willingness to disagree; a confident contradiction can still contain arithmetic, medical, or contextual errors.
- Preserve prompts, complete outputs, model identifiers, settings, and repeated trials if the goal is a reproducible model comparison rather than a demonstration.
- Treat health advice from a model as a prompt for professional assessment, not as confirmation that either reassurance or weight change is medically appropriate.

## Questions and Tensions

- This is a three-prompt, one-run-per-model demonstration with subjective scoring, not evidence that sycophancy is absent across users, languages, topics, or repeated runs.
- The narrated Claude health response gives a BMI of 38.8 for 90 kg at 171 cm, while those inputs imply about 30.8. That unaddressed arithmetic error shows why directness and correctness need separate evaluation.
- The preface makes broad claims about training-data filtering, model scaling, benchmark progress, and provider motives without supplying enough source detail to verify them from the video alone.
- A response can avoid validating the user's framing while still overstepping on health, literary quality, or relationship counseling; non-sycophancy is not the same as sound judgment.

## Source

- [Watch on YouTube](https://www.youtube.com/watch?v=NyzGqn4m9Bc)
- [transcript.md](./transcript.md)
