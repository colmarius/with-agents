---
title: "AI Revisited – REWORK"
videoId: AkeTmfUW4_U
sourceUrl: "https://www.youtube.com/watch?v=AkeTmfUW4_U"
publishedAt: "2026-01-21T10:00:12Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

REWORK host Kimberly Rhodes speaks with 37signals co-founder and CTO David Heinemeier Hansson about his shift from skepticism toward hands-on coding-agent use. Hansson distinguishes terminal agents that execute and test work from intrusive editor completion, while repeatedly retaining expert review and the option to discard generated code.

## Key Ideas

- Hansson says terminal-based agents changed his workflow because they can follow a plan, use shell tools, run programs, and work independently without interrupting his own typing. [00:00:51]-[00:04:57]
- He reports that generated work became useful enough to keep frequently—sometimes after agent iteration, sometimes after he completes or rewrites the remaining portion—rather than serving only as disposable experimentation. [00:04:57]-[00:06:54]
- At 37signals, agents help triage security reports and investigate operational degradation by combining data from logs and monitoring systems; Hansson also identifies routine production-access review as a candidate for agent assistance. [00:06:54]-[00:13:18]
- Hansson describes an agent debugging a Rails console defect by testing multiple hypotheses with low-level tools, locating the responsible change, and proposing a temporary patch. [00:15:26]-[00:18:32]
- He also ran five models against an MCP connector task; all produced working drafts and useful ideas, but he retained none unchanged because they did not meet his interface goals. [00:18:32]-[00:21:19]
- Hansson says non-programmers can gain more novel capability from agents than experts, but warns that generated systems may be insecure and should be matched to the consequence of failure. [00:25:34]-[00:30:43]

## Practical Implications

- Delegate bounded investigations or drafts that can be tested, inspected, and discarded without blocking the primary workflow.
- Use parallel drafts to explore implementation space, but evaluate them against product and architectural goals rather than accepting the first working result.
- Scale review, data access, and operational controls to the sensitivity of the task and the consequences of an incorrect result.

## Questions and Tensions

- The episode's success rates and “80%” framing are personal estimates rather than controlled evaluation results.
- Giving agents security, access-log, or production-monitoring context can reduce toil while increasing privacy, permission, and false-negative risk.
- The debugging and multi-model examples show successful cases; the episode does not quantify failed sessions, review time, or total token cost.

## Source

- <https://www.youtube.com/watch?v=AkeTmfUW4_U>
- [transcript.md](./transcript.md)
