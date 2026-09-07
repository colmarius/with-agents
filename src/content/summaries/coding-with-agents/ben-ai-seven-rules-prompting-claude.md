---
title: "Anthropic Just Revealed 7 New Rules for Prompting Claude 5 Models"
resourceId: 116
date: "2026-09-02"
---

Ben AI presents seven prompting rules as his interpretation of Anthropic's guidance for Claude Opus 5 and Fable 5. The practical theme is to invest in a complete task brief before delegating long-running work, rather than repeatedly steering individual steps. His examples include preparing a video outline and planning a personal analytics dashboard; this is a creator tutorial, not independently verified official guidance or a model benchmark.

### Seven rules

1. **Give the whole job, not a prescribed sequence.** [00:00](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=0s): specify the job, why it matters, guardrails, and what done looks like. An embedded Boris Cherny clip recommends describing the task and exit criteria rather than dictating every implementation step. Ben illustrates this with a video-research brief.
2. **Clarify unknowns before execution.** [03:07](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=187s): Ben demonstrates an “interview me” skill that asks questions and produces a dashboard brief. He also suggests voice-dumping context, then organizing it into a structured prompt. His time and token savings are personal observations, not measured results.
3. **Explain why the work matters.** [06:14](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=374s): state the larger task, intended audience, and what the output enables. Ben argues this gives the model context for decisions the initial specification cannot anticipate.
4. **Define completion and output style.** [07:17](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=437s): give explicit exit criteria to bound long-running work. His outline request asks for 8–15 practical tips, each with an example and an Anthropic source, plus an existing outline as a style reference.
5. **Explain the reasons behind guardrails.** [09:21](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=561s): Ben recommends positive instructions with a rationale instead of bare prohibitions. His example asks for Anthropic-backed points so the video's claims have supporting evidence. He still says guardrails matter and later demonstrates a rule-rewriter skill on writing instructions.
6. **Avoid redundant double-check prompts—speaker claim.** [10:24](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=624s): Ben argues that Opus 5 and Fable 5 already verify and correct outputs autonomously, so explicit double-check or subagent-verification prompts add cost without improving results. No comparative evaluation supporting that claim is described in the transcript. He also advises against generic step-by-step reasoning instructions and aggressive emphasis.
7. **Set voice preferences once.** [11:27](https://www.youtube.com/watch?v=HDmBwU5uvEE&t=687s): put reusable style instructions in global instructions, a system prompt, or `CLAUDE.md`. His example asks for focused, brief responses without jargon or excessive verbosity.

### Editorial guidance

Use the task-brief framework to make delegation clearer, not to remove engineering controls. We would limit the double-checking advice to generic self-review prompts—not use it to remove task-specific tests, security checks, required review, or explicit acceptance criteria. The video's model-specific claims and descriptions of Anthropic's internal practices remain the speaker's account.

Full video: [Ben AI — Anthropic Just Revealed 7 New Rules for Prompting Claude 5 Models](https://www.youtube.com/watch?v=HDmBwU5uvEE).
