---
title: "Agents vs Workflows: Why Not Both? — Sam Bhagwat, Mastra.ai"
videoId: 8SUJEqQNClw
sourceUrl: "https://www.youtube.com/watch?v=8SUJEqQNClw"
publishedAt: "2025-08-01T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

The [source title](https://www.youtube.com/watch?v=8SUJEqQNClw) identifies Sam Bhagwat of Mastra.ai as the speaker. Bhagwat argues against treating agents and workflows as competing abstractions. He presents them as composable primitives: agents provide flexible, iterative behavior, while workflows add explicit structure and control where reliability requires it. [00:07:16]-[00:11:20]

Editorial: The practical message is to choose the balance of autonomy and structure per application segment, then combine simple primitives in ways the whole team can read and maintain.

## Key Ideas

- Bhagwat argues that framework APIs based on graph nodes and edges make workflows harder for teams to understand, favoring readable, top-to-bottom control flow instead. [00:03:03]-[00:05:10]
- He describes agents as turn-based interactions and workflows as dependency-aware rules or pipelines, with branching, parallelism, loops, suspension, resumption, and replay emerging from workflow structure. [00:07:16]-[00:09:21]
- He frames agent-versus-workflow design as a power-versus-control trade-off: begin with autonomy where useful, then add structure where behavior becomes unreliable. [00:09:21]-[00:10:17]
- He recommends decomposing unreliable work—for example, replacing one broad LLM call with several narrower calls—and using architecture discussions and diagrams to find where added structure can improve reliability. [00:10:17]-[00:11:20]
- He shows that agents and workflows can contain or invoke one another: an agent can be a workflow step or tool, and a workflow can be an agent tool or step. [00:11:20]-[00:13:23]
- He cautions that large tool sets can make agents fail and suggests injecting only the tools relevant to the current task. [00:13:23]
- In response to a question, he prioritizes observed results over immature theory: if an agent with 20 tools works for the required use case, practitioners should trust that evidence. [00:14:27]

## Practical Implications

- Editorial: Prefer workflow syntax whose execution order is apparent during ordinary code review; do not require every contributor to reconstruct a graph mentally.
- Editorial: Locate unreliable, nondeterministic stages and introduce narrower calls, deterministic sequencing, or workflow boundaries only where they improve outcomes.
- Editorial: Treat agents, tools, steps, and workflows as composable building blocks rather than committing an entire system to one orchestration style.
- Editorial: Validate tool-count limits empirically for the application while keeping dynamic tool selection available as a reliability control.

## Questions and Tensions

- Editorial: Readable linear syntax may become less transparent once a workflow needs extensive branching, parallelism, suspension, or replay; the talk does not compare those complex cases directly.
- Editorial: Adding workflow structure can improve traceability and control, but it also reduces agent autonomy and may increase orchestration code.
- Editorial: The recommendation to follow successful practice over theory is pragmatic, but teams still need explicit evaluation criteria to know whether an agent is actually meeting requirements.

## Source

- [YouTube video](https://www.youtube.com/watch?v=8SUJEqQNClw)
- [transcript.md](./transcript.md)
