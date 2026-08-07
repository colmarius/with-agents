---
title: "Context engineering with Dex Horthy"
resourceId: 35
date: "2026-07-15"
collection: "pragmatic-engineer-selected-conversations"
order: 2
videoId: "Usufn8IQJgw"
---

Gergely Orosz, host of The Pragmatic Engineer, interviews Dex Horthy, founder of HumanLayer, about context engineering, coding-agent loops, and software factories ([00:01:00]-[00:02:03], [00:20:01]-[00:21:04], [01:20:59]-[01:22:02]). Horthy's central argument is that teams gain more durable leverage by controlling model inputs, using verifiable bounded loops, and placing human judgment before consequential implementation than by maximizing autonomous code output ([00:21:04]-[00:23:00], [00:34:35]-[00:37:43], [00:58:23]-[01:00:30]).

### Key Points Covered

- **Context engineering controls the model's actual input**: Horthy looks beneath abstractions such as retrieval, memory, agent history, and structured output to control token selection and ordering; he presents this as a route toward higher reliability, not a guarantee ([00:20:01]-[00:23:00]).
- **Information and instructions have separate budgets**: Long contexts can contain irrelevant information, conflicting instructions, and abandoned conversational paths that make the next action less dependable ([00:28:06]-[00:31:03]).
- **The outer harness includes the whole working environment**: Horthy uses the term for commands, MCP tools, skills, repository organization, and development setup around an existing agent, distinct from the inner harness's tool interfaces ([00:26:00]-[00:27:02]).
- **Loops need strong back pressure**: He says compilers, tests, linters, or measurable performance should constrain progress. His team's reported “slow loop” fixes a few issues and opens reviewable pull requests rather than producing one large autonomous change ([00:33:32]-[00:37:43]).
- **Passing tests can hide maintainability failures**: In HumanLayer's reported 2025 experiment, unattended feature generation created a cross-cutting identity-type problem that tests and agent review did not expose; humans eventually had to recover the codebase context and diagnose it ([00:41:23]-[00:46:11]).
- **Planning artifacts should be disposable context**: Horthy says research and design can compact codebase state and intent, but detailed plans duplicate review effort and persistent specifications drift from code ([01:01:32]-[01:06:43]).
- **Compact deliberately between difficult phases**: His current workflow starts fresh contexts between research, design, and planning, concentrating human involvement on architecture and vertically testable implementation slices ([01:06:43]-[01:09:36]).
- **Automate bounded subloops, not the whole factory**: Orosz frames implementation and review as stages in an existing product-delivery loop; Horthy argues for adding checkpoints instead of removing human review from the system ([00:49:00]-[00:52:08], [00:58:23]-[01:00:30]).

Full video: <https://www.youtube.com/watch?v=Usufn8IQJgw>
