---
title: "Amp features & specialized AI tools"
resourceId: 3
series: "build-crew"
episode: 6
date: "2025-10-28"
---

Long-running agent projects need a way to retain decisions, resume work, and check outputs without losing track of the original goal. Build Crew guest Brian Jones shows the project-management tool he built for that purpose. The Amp team also demonstrates targeted retrieval from past conversations and a small evaluation tool for an AI legal assistant.

### Keep work and context manageable

* **Sequence work when attention is the limit.** Jones breaks a plan into phases and tasks, implements one task, and tests it before continuing. He says generic subagents lose details as instructions pass between them. Thorsten Ball adds a different limitation: even separate agents can leave work unfinished when the human gets absorbed in reviewing one result [08:55–10:46](https://www.youtube.com/watch?v=maggx2Z57aw&t=535s), [17:18–21:11](https://www.youtube.com/watch?v=maggx2Z57aw&t=1038s).
* **Store the decisions needed to resume.** Jones wanted to build an application for the flooring industry but first built a development project manager. His demo tracks projects, tasks, decisions, session history, changed files, and context handoffs. The intended flooring application was still ahead of him; the panel encourages him to start using the tool rather than keep refining it [29:57–40:08](https://www.youtube.com/watch?v=maggx2Z57aw&t=1797s).
* **Retrieve an answer from an old conversation instead of copying it all.** Ball demonstrates Amp's then-new `read_thread` tool. A separate model reads the referenced thread and extracts the information requested, such as which feature flag was removed. Only that answer enters the current conversation. Unlike preparing a handoff at the end of a session, this also works when the need to revisit old work arises later [40:56–50:08](https://www.youtube.com/watch?v=maggx2Z57aw&t=2456s).

### Evaluate the behavior your product needs

* **Compare models on your own task.** Ryan Carson reports that Gemini 2.5 Flash gave him similar results at much lower cost than Sonnet 4.5 for tool calls in his divorce-assistant application. He explicitly distinguishes that experience from coding-model performance [11:38–13:35](https://www.youtube.com/watch?v=maggx2Z57aw&t=698s).
* **Make prompt changes traceable to output changes.** Carson demonstrates a custom evaluation interface after struggling to integrate a third-party service. It runs batches of likely user questions, records the model and prompt versions, displays tool calls, and lets his chief legal officer rate legal correctness, tone, and helpfulness. Versioned prompts and tool descriptions let him inspect what changed between runs; they do not replace the legal review [50:54–54:56](https://www.youtube.com/watch?v=maggx2Z57aw&t=3054s).

The panel also prefers courteous interaction with agents, but describes that preference through personal experience and analogy rather than a measured performance result [23:13–28:01](https://www.youtube.com/watch?v=maggx2Z57aw&t=1393s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=maggx2Z57aw)

Build Crew: <https://buildcrew.team>
