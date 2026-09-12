---
title: "Context Engineering"
resourceId: 1
series: "raising-an-agent"
episode: 7
date: "2025-07-22"
---

Coding agents can find files, edit them, and run checks without asking the user to relay every step. Thorsten Ball explains what that changes for the developer: specify the intended result before execution, keep the conversation focused, and delegate self-contained work without confusing a separate context window with a guarantee of correctness.

### Key Points Covered

- **An agent acts on tool results**: Unlike a chat assistant that returns code for the user to apply, an agent can edit files and run tests itself. Each tool result becomes input to the next model call, letting it continue or correct an error. It can also stop because it runs out of tokens or cannot find a way forward [03:47–07:50](https://www.youtube.com/watch?v=p8a0PePNWlA&t=227s).

- Up-Front Intent: Agent prompting needs clearer initial direction because the agent acts instead of stopping to ask clarifying questions. The more specific the task, constraints, and desired outcome, the less likely the agent is to wander into expensive or unwanted work [07:49–08:37](https://www.youtube.com/watch?v=p8a0PePNWlA&t=469s).

- **Keep the context relevant to the task**: The context window holds the conversation, supplied files, and tool results available to the model. The hosts report less reliable behavior as it fills. Their practical example is starting a database migration in a fresh conversation rather than one already crowded with unrelated UI work [26:02–33:25](https://www.youtube.com/watch?v=p8a0PePNWlA&t=1562s).

- **Subagents keep intermediate work out of the main conversation**: A subagent receives a task, works in a separate context window, and returns a result. The main agent retains the request and answer rather than every search, failed attempt, and retry. Thorsten favors this for self-contained tasks, while noting the extra model calls make it unnecessary for a trivial edit [33:25–38:39](https://www.youtube.com/watch?v=p8a0PePNWlA&t=2005s), [44:25–46:18](https://www.youtube.com/watch?v=p8a0PePNWlA&t=2665s).

- **Parallel output still needs review**: Thorsten shows subagents working on separate slow tests. Their work stays outside the main context and runs concurrently, but the apparent speedup came partly from mocking behavior that should have remained under test [41:27–43:31](https://www.youtube.com/watch?v=p8a0PePNWlA&t=2487s).

- **Oracle brings a second model into the same workflow**: In this episode's implementation, Oracle uses OpenAI o3 to inspect files and advise on review, planning, and debugging. Sonnet remains the implementing agent. Thorsten can request the consultation in one conversation instead of copying code into a separate chat and bringing the answer back himself [47:07–51:57](https://www.youtube.com/watch?v=p8a0PePNWlA&t=2827s).

Full video: <https://www.youtube.com/watch?v=p8a0PePNWlA>

Episode page: <https://ampcode.com/podcast/episode-7>
