---
title: "PewDiePie is setting AI free... and OpenAI is furious"
videoId: _5p1_TNSWqQ
sourceUrl: "https://www.youtube.com/watch?v=_5p1_TNSWqQ"
publishedAt: "2026-10-05T20:34:44Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Fireship describes PewDiePie's Ajax model as an attempt to run specialized agents with locally held weights rather than rented cloud inference. This summary uses English auto-generated captions only; project details, account bans, and capability claims remain attributed to Fireship, and caption spellings are not independently verified.

## Key Ideas

- Fireship says Ajax adapts a nine-billion-parameter Qwen model for the Odysseus agent project. The motivation follows an anecdote about a multi-agent voting system producing unhelpful alliances; that story does not establish a general result about agent behavior. [00:01:02]
- He explains distillation as a smaller student learning a larger teacher's output distribution, then reports that attempts to obtain training material from OpenAI led to two account bans. The general explanation does not establish that this particular attempt accessed full probability distributions, and the report's broad claims about other labs' training are not independently demonstrated. [00:02:05]-[00:03:07]
- Supervised fine-tuning teaches tool use through examples of successful interactions. Fireship reports a target of 20,000 clean examples, only about 300 directly collected useful examples, and a synthetic-data effort filtered to roughly 2,000 examples, making data quality and collection a central bottleneck. [00:03:07]
- The described reinforcement-learning stage uses group relative policy optimization: several attempts at a task are scored, and training favors results above the group's average without a separate critic model. Fireship then describes a separate refusal-removal step with Heretic; reduced refusal is not evidence of safer or more accurate answers. [00:03:07]-[00:04:09]

## Practical Implications

Editorial: Separate task-specific training, data preparation, and refusal behavior when evaluating a local model. Owning weights changes deployment control but does not remove compute, evaluation, or maintenance costs.

## Questions and Tensions

Editorial: The report provides no independent task evaluation of the finished model. Its extreme comparisons about OpenAI's opposition to distillation are satire, not literal policy statements. Namespace's speed, ranking, and infrastructure claims appear in the closing sponsored segment and are not evidence for Ajax's capabilities. [00:03:07]-[00:05:12]

## Source

https://www.youtube.com/watch?v=_5p1_TNSWqQ

[transcript.md](./transcript.md)
