---
title: "Syntax: Practical Agent Workflows"
status: reviewed
coveredVideoIds:
  - aYz9G3__Z4g
  - BLRReTwV8Fc
  - GsLyhrxaMIo
  - 6tZ_R4m_Oc4
  - S916GQVhRb8
  - cWBVMEHPgQU
  - CCaUnet8SB4
  - 1FqiNnOsrgM
---

## Coverage

- Manifest: 1,470 available entries from Syntax's channel uploads playlist.
- Reviewed curation: 8 selected videos; 1,462 unselected entries create no capture or summary obligations.
- Captured: all 8 selected English auto-generated transcripts.
- Summaries: 8 reviewed public summaries; dedicated source-fidelity and readability review completed for the software-factory and Pi Durable additions and revised overview.
- Incorporated: all 8 summaries, reusing public summaries and transcripts without duplicate source-library files.
- Pending selected video IDs: none.
- This is an editorial selection, not an official Syntax course. Syntax is the source channel; speakers vary by video.
- Public navigation uses descending publication dates, not a claimed teaching sequence. For prerequisites, start with the MCP explainer, then the server walkthrough; choose the other videos by workflow need.

## Current Thesis

- Editorial: Useful agent workflows externalize capabilities, task state, and evidence without removing human responsibility for the result. The collection connects tool interfaces and persistent work queues to execution environments, review capacity, and collaborative provenance. A successful tool call, closed issue, resumed agent run, or synchronized worktree is a different result from verified software.

## Stable Ideas

- Swamp Club CEO Adam Jacob argues that automated development needs black-box acceptance tests and explicit architectural patterns, with repeated failures used to improve the production process ([summary](../../../summaries/coding-with-agents/wtf-is-a-software-factory.md)).
- Zed co-founder Nathan Sobo describes linking evolving code versions to conversations so teams can discuss agent work before a commit ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Syntax hosts Wes Bos and Scott distinguish remote chat access from moving the whole development environment; agents need repository access, installed tools, browsers, and credentials where execution happens ([summary](../../../summaries/coding-with-agents/syntax-remote-coding-agents.md)).
- Syntax hosts Wes and Scott argue that generation can outpace human review and amplify maintenance debt; the motivating high-volume PR example is a listener report, not an audited team study ([summary](../../../summaries/coding-with-agents/syntax-ai-code-review.md)).
- Syntax presenter CJ separates model-requested tool calls from host execution and demonstrates testing server tools directly with MCP Inspector before evaluating a model's use of them ([summary](../../../summaries/coding-with-agents/syntax-mcp-explained.md)).
- Syntax host Wes presents MCP as a reusable integration boundary, while preserving ordinary functions for simpler cases; he calls this a working mental model rather than a universal architecture rule ([summary](../../../summaries/coding-with-agents/syntax-build-mcp-servers.md)).

## Emerging Ideas

- A Syntax presenter, unnamed in the title and captions, describes rebuilding a personal agent system on Pi Durable. In the presenter's description, the library saves tool calls, pending approvals, and waits so a new process can resume a crashed run, and each tool declares whether it is safe to repeat. Any client can join and steer the same run ([summary](../../../summaries/coding-with-agents/you-need-to-check-out-pi-durable.md)).
- Zed co-founder Nathan Sobo presents shared agent threads, replicated worktrees, and inline annotations as a beta collaboration design, rather than measured improvements in team outcomes ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Editorial: Beads' persistent issue store illustrates a narrower meaning of agent memory: tasks, dependencies, and diagnostic context outlive chat. It does not demonstrate learning in model weights or complete recollection of past work ([summary](../../../summaries/coding-with-agents/syntax-agent-long-term-memory.md)).

## Revisions and Tensions

- The Syntax presenter's Pi Durable demo turns a Sentry error into a fix and pull request, but automatic merging is limited to private, non-user-facing software, and the guards against duplicate or unwanted work are not shown. The reported 8,000-line code reduction and lower bug rate are personal experience ([summary](../../../summaries/coding-with-agents/you-need-to-check-out-pi-durable.md)).
- Editorial: Adam Jacob recommends putting repeatable execution into deterministic components and calling models for judgment, while the Pi Durable presenter prefers letting the agent choose its next step over a rigid workflow engine. Both keep durable records of work, but neither video compares reliability across the two designs ([software-factory summary](../../../summaries/coding-with-agents/wtf-is-a-software-factory.md), [Pi Durable summary](../../../summaries/coding-with-agents/you-need-to-check-out-pi-durable.md)).
- Swamp Club CEO Adam Jacob questions the value of unit tests in some agent-heavy workflows but describes their removal as a possible experiment, not a completed result. He also says he has seen no large company finish the organizational transition he proposes ([summary](../../../summaries/coding-with-agents/wtf-is-a-software-factory.md)).
- Zed co-founder Nathan Sobo distinguishes converging file replicas from ensuring that combined edits work correctly together ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Syntax host Wes Bos reports a pull request followed by a failed deployment build and proposes returning build logs to the agent; he had not implemented that loop ([summary](../../../summaries/coding-with-agents/syntax-remote-coding-agents.md)).
- Editorial: The MCP tutorials reflect July 2025 clients and SDKs, while the other videos span December 2025 through October 2026. Read compatibility statements as dated accounts, not as a current setup reference. No controlled comparison establishes the collection's productivity or reliability claims.

## Practical Implications

- Editorial: Before letting an unattended agent resume after a crash, decide which tools are safe to repeat and which actions, such as sending email or opening a pull request, must not run twice. The Pi Durable walkthrough shows that distinction at the tool level ([summary](../../../summaries/coding-with-agents/you-need-to-check-out-pi-durable.md)).
- Editorial: Keep code provenance and correctness separate: knowing how an edit was produced does not establish that it should ship ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Editorial: Preserve task state and diagnostic evidence outside chat, but do not confuse a closed issue with a checked fix. The Beads walkthrough is useful for seeing that distinction ([summary](../../../summaries/coding-with-agents/syntax-agent-long-term-memory.md)).
- Editorial: Test a tool's inputs and outputs independently, then check the model's selection and use of that tool. CJ's demonstration includes a case where he must explicitly request search despite the tool being available ([summary](../../../summaries/coding-with-agents/syntax-mcp-explained.md)).
