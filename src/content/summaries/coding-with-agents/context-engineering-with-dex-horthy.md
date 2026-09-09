---
title: "Context engineering with Dex Horthy"
resourceId: 35
date: "2026-07-15"
collection: "pragmatic-engineer-selected-conversations"
order: 2
videoId: "Usufn8IQJgw"
---

Gergely Orosz interviews Dex Horthy about context engineering, coding-agent loops, and software factories ([01:00–02:03](https://www.youtube.com/watch?v=Usufn8IQJgw&t=60s), [20:01–21:04](https://www.youtube.com/watch?v=Usufn8IQJgw&t=1201s), [1:20:59–1:22:02](https://www.youtube.com/watch?v=Usufn8IQJgw&t=4859s)). Horthy argues for controlling model inputs, bounded loops, and human judgment before consequential implementation ([21:04–23:00](https://www.youtube.com/watch?v=Usufn8IQJgw&t=1264s), [34:35–37:43](https://www.youtube.com/watch?v=Usufn8IQJgw&t=2075s), [58:23–1:00:30](https://www.youtube.com/watch?v=Usufn8IQJgw&t=3503s)).

### Key Points Covered

- **Context engineering controls the model's actual input**: Horthy looks beneath abstractions such as retrieval, memory, agent history, and structured output. He controls token selection and ordering. He presents this as a route toward higher reliability, not a guarantee ([20:01–23:00](https://www.youtube.com/watch?v=Usufn8IQJgw&t=1201s)).
- **Information and instructions have separate budgets**: Long contexts can contain irrelevant information, conflicting instructions, and abandoned conversational paths that make the next action less dependable ([28:06–31:03](https://www.youtube.com/watch?v=Usufn8IQJgw&t=1686s)).
- **The outer harness includes the whole working environment**: Horthy uses the term for commands, MCP tools, skills, repository organization, and development setup around an existing agent. He distinguishes this environment from the inner harness's tool interfaces ([26:00–27:02](https://www.youtube.com/watch?v=Usufn8IQJgw&t=1560s)).
- **Loops need strong back pressure**: Horthy says compilers, tests, linters, or measurable performance should constrain progress. His team's reported “slow loop” fixes a few issues. It opens reviewable pull requests rather than producing one large autonomous change ([33:32–37:43](https://www.youtube.com/watch?v=Usufn8IQJgw&t=2012s)).
- **Passing tests can hide maintainability failures**: In HumanLayer's reported 2025 experiment, unattended feature generation created a cross-cutting identity-type problem. Tests and agent review did not expose it. Humans eventually had to recover the codebase context and diagnose it ([41:23–46:11](https://www.youtube.com/watch?v=Usufn8IQJgw&t=2483s)).
- **Planning artifacts should be disposable context**: Horthy says research and design can compact codebase state and intent, but detailed plans duplicate review effort and persistent specifications drift from code ([1:01:32–1:06:43](https://www.youtube.com/watch?v=Usufn8IQJgw&t=3692s)).
- **Compact deliberately between difficult phases**: His current workflow starts fresh contexts between research, design, and planning, concentrating human involvement on architecture and vertically testable implementation slices ([1:06:43–1:09:36](https://www.youtube.com/watch?v=Usufn8IQJgw&t=4003s)).
- **Automate bounded subloops, not the whole factory**: Orosz frames implementation and review as stages in an existing product-delivery loop. Horthy argues for adding checkpoints instead of removing human review from the system ([49:00–52:08](https://www.youtube.com/watch?v=Usufn8IQJgw&t=2940s), [58:23–1:00:30](https://www.youtube.com/watch?v=Usufn8IQJgw&t=3503s)).

Full video: <https://www.youtube.com/watch?v=Usufn8IQJgw>
