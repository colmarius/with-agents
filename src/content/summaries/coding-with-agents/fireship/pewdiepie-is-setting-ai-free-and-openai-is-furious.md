---
addedDate: '2026-10-20'
title: "PewDiePie is setting AI free... and OpenAI is furious"
resourceId: 185
date: '2026-10-05'
collection: fireship
order: 6
videoId: _5p1_TNSWqQ
---

Fireship describes PewDiePie's Ajax model as an attempt to run specialized agents with locally held weights rather than rented cloud inference. This summary uses English auto-generated captions only; project details, account bans, and capability claims remain attributed to Fireship, and caption spellings are not independently verified.

## Key ideas

- Fireship says Ajax adapts a nine-billion-parameter Qwen model for the Odysseus agent project. The motivation follows an anecdote about a multi-agent voting system producing unhelpful alliances; that story does not establish a general result about agent behavior. [01:02–02:05](https://www.youtube.com/watch?v=_5p1_TNSWqQ&t=62s)
- He explains distillation as a smaller student learning a larger teacher's output distribution, then reports that attempts to obtain training material from OpenAI led to two account bans. The general explanation does not establish that this particular attempt accessed full probability distributions, and the report's broad claims about other labs' training are not independently demonstrated. [02:05–04:09](https://www.youtube.com/watch?v=_5p1_TNSWqQ&t=125s)
- Supervised fine-tuning teaches tool use through examples of successful interactions. Fireship reports a target of 20,000 clean examples, only about 300 directly collected useful examples, and a synthetic-data effort filtered to roughly 2,000 examples, making data quality and collection a central bottleneck. [03:07–04:09](https://www.youtube.com/watch?v=_5p1_TNSWqQ&t=187s)
- The described reinforcement-learning stage uses group relative policy optimization: several attempts at a task are scored, and training favors results above the group's average without a separate critic model. Fireship then describes a separate refusal-removal step with Heretic; reduced refusal is not evidence of safer or more accurate answers. [03:07–05:12](https://www.youtube.com/watch?v=_5p1_TNSWqQ&t=187s)

## Practical implications

Editorial: Separate task-specific training, data preparation, and refusal behavior when evaluating a local model. Owning weights changes deployment control but does not remove compute, evaluation, or maintenance costs.

## Questions and limits

Editorial: The report provides no independent task evaluation of the finished model. Its extreme comparisons about OpenAI's opposition to distillation are satire, not literal policy statements. Namespace's speed, ranking, and infrastructure claims appear in the closing sponsored segment and are not evidence for Ajax's capabilities. [03:07–05:45](https://www.youtube.com/watch?v=_5p1_TNSWqQ&t=187s)

Full video: <https://www.youtube.com/watch?v=_5p1_TNSWqQ>
