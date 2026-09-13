---
title: "Pi Agent dev reveals his Agentic Engineering Workflow"
resourceId: 136
date: "2026-09-12"
---

Armin Ronacher describes a mostly local, collaborative way of working with coding agents: investigate problems together, keep a functioning development environment, and retain the ability to understand what the agent did. In this conversation with David Ondrej, he treats higher agent concurrency and more generated code as means to an outcome, not evidence of success.

This summary uses English auto-generated captions, which contain recognition errors in names and product terms; it is not an original-audio check. The interview offers practitioner observations and forecasts, not a controlled benchmark or a step-by-step setup tutorial. The host's opening claim that Pi beats other harnesses is not established by evidence presented here.

### A small harness lets the model compose existing tools

- **Bash can reduce how much intermediate output enters the conversation.** Ronacher says Pi largely exposes shell access and describes Codex using `rg` to find files. A model can combine commands in one pipeline rather than returning every intermediate result to its context. His explanation is about tool composition and context efficiency, not proof that fewer tools always produce a better agent [00:00–02:01](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=0s).
- **Minimalism and extensibility work together.** He attributes part of Pi's appeal to a small starting point that users could adapt, contrasting it with tools whose frequent feature additions changed established workflows. He explicitly says he does not know the full explanation for Pi's popularity [05:02–06:53](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=302s).

### His workflow depends on a real development environment

- **Investigation is a substantial part of the work.** Ronacher says he has not established an autonomous “software factory.” He mostly uses agents on his own machines, with some remote Linux work and GitHub Actions automation. Much of the interaction concerns understanding how something should work or turning a problem report into a reproduction, rather than generating code [23:15–26:10](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1395s).
- **Check that the environment can run the tests it claims to support.** He recounts helping someone whose cloud agent environment had never started PostgreSQL; database behavior had been mocked instead. His preference for a machine he controls reflects working dependencies, faster local tests, and less friction moving data—not an argument that cloud agents cannot work [26:10–28:16](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1570s).
- **Independent environments require more than separate code directories.** In his complex-stack example, each agent may need its own running database and Kafka cluster. Starting that stack adds setup time before work can begin; keeping a pool of environments ready adds complexity. He acknowledges that others may have solved this and that managed cloud environments can be easier to use than his own remote-access setup [28:16–30:11](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1696s).

### Better interfaces must preserve human understanding

- **Durability means suspending an agent and resuming its work reliably.** Ronacher identifies this as unfinished infrastructure for systems that should operate without continuous human intervention. Separately, he criticizes server-side compaction—reducing a session's accumulated context—for making sessions non-portable across providers [12:34–14:34](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=754s).
- **Generating some UI is not the same as providing a lasting interface.** Ronacher wants a home-automation agent to show the household and its devices, not just accept text commands. He acknowledges that agents can already produce some UI; the gap is making custom interfaces persist and remain useful. He sees application state management, reusable UI components, and database handling as systems-engineering work with existing models, rather than problems that require an AI breakthrough [14:34–19:26](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=874s).
- **Accountability creates a reason to keep systems inspectable.** If a human must answer for a failure, that person needs to understand the system without relying entirely on another agent's explanation. Ronacher connects this to human-readable formats such as Markdown and JSON, and to keeping human access even when automation performs most operations [21:16–24:16](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1276s).

### Judge adoption by outcomes and maintenance

- **More commits do not establish business value.** Ronacher asks whether enterprise AI spending improves revenue or other meaningful outcomes, rather than merely raising activity and cost. He presents his lack of convincing examples as a limited, potentially biased observation—not evidence that enterprise adoption never works [30:11–34:07](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=1811s).
- **Open-source quality becomes visible through sustained maintenance.** He emphasizes continuing to fix issues and serve users, using projects such as Django, curl, and PHP to distinguish long-term usefulness from launch excitement or initially elegant code. His criterion is whether a project remains useful, maintained, and open years later [35:10–40:13](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2110s), [46:14–48:13](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2774s).
- **Training-data familiarity is an advantage, not a complete solution.** He argues that public code can make a technology more familiar to models. But agents must also work in private repositories absent from training, so they need to learn from the code and documentation supplied during a task. He leaves open how much this will reduce the advantage of already-familiar tools [44:18–45:24](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2658s), [49:06–51:11](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=2946s).

### Costs and broader implications remain uncertain

- **Cheaper tokens have not made his own agent work cheaper.** Ronacher says his sessions are not getting cheaper and that paying API rather than subscription prices would substantially reduce his use. He suggests that reliable people using AI may offer better value than replacing them outright. These are personal spending observations and a conditional comparison, not a measured cost-per-task result [52:14–54:21](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=3134s).
- **Future spending depends on value and acceptance, not capability alone.** He describes customers rejecting visibly AI-generated advertising and suggests that competition or excess data-center capacity could push token prices down. In the Europe discussion, he argues that differing national rules create friction for businesses. These are observations and scenarios, not established market-wide outcomes [56:28–59:42](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=3388s), [1:01:41–1:03:48](https://www.youtube.com/watch?v=SxuQs9GGYbk&t=3701s).

**Practical takeaway — editorial synthesis:** Before increasing agent concurrency, verify that each environment runs the real dependencies and tests, that someone can inspect the resulting system, and that the extra work improves an outcome you care about. This combines the interview's environment, accountability, and measurement arguments; it is not a prescribed workflow from the speaker.

Full video: <https://www.youtube.com/watch?v=SxuQs9GGYbk>
