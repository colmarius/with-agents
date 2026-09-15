---
title: "Syntax: Practical Agent Workflows"
status: reviewed
coveredVideoIds:
  - GsLyhrxaMIo
  - 6tZ_R4m_Oc4
  - S916GQVhRb8
  - cWBVMEHPgQU
  - CCaUnet8SB4
  - 1FqiNnOsrgM
---

## Coverage

- Manifest: 1,437 available entries from Syntax's channel uploads playlist.
- Reviewed curation: 6 selected videos; 1,431 unselected entries create no capture or summary obligations.
- Captured: all 6 selected English auto-generated transcripts.
- Summaries: 6 reviewed standalone summaries; dedicated Oracle reviews completed and citation/attribution corrections applied.
- Incorporated: all 6 summaries, reusing public summaries and transcripts without duplicate source-library files.
- Pending selected video IDs: none.
- This is an editorial selection, not an official Syntax course. Syntax is the source channel; speakers vary by video.
- Public navigation uses descending publication dates, not a claimed teaching sequence. For prerequisites, start with the MCP explainer, then the server walkthrough; choose the other videos by workflow need.

## Current Thesis

- Editorial: Useful agent workflows externalize capabilities, task state, and evidence without removing human responsibility for the result. The collection connects tool interfaces and persistent work queues to execution environments, review capacity, and collaborative provenance. A successful tool call, closed issue, or synchronized worktree is a different result from verified software.

## Stable Ideas

- Zed co-founder Nathan Sobo describes linking evolving code versions to conversations so teams can discuss agent work before a commit ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Syntax hosts Wes Bos and Scott distinguish remote chat access from moving the whole development environment; agents need repository access, installed tools, browsers, and credentials where execution happens ([summary](../../../summaries/coding-with-agents/syntax-remote-coding-agents.md)).
- Syntax hosts Wes and Scott argue that generation can outpace human review and amplify maintenance debt; the motivating high-volume PR example is a listener report, not an audited team study ([summary](../../../summaries/coding-with-agents/syntax-ai-code-review.md)).
- Syntax presenter CJ separates model-requested tool calls from host execution and demonstrates testing server tools directly with MCP Inspector before evaluating a model's use of them ([summary](../../../summaries/coding-with-agents/syntax-mcp-explained.md)).
- Syntax host Wes presents MCP as a reusable integration boundary, while preserving ordinary functions for simpler cases; he calls this a working mental model rather than a universal architecture rule ([summary](../../../summaries/coding-with-agents/syntax-build-mcp-servers.md)).

## Emerging Ideas

- Zed co-founder Nathan Sobo presents shared agent threads, replicated worktrees, and inline annotations as a beta collaboration design, rather than measured improvements in team outcomes ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Editorial: Beads' persistent issue store illustrates a narrower meaning of agent memory: tasks, dependencies, and diagnostic context outlive chat. It does not demonstrate learning in model weights or complete recollection of past work ([summary](../../../summaries/coding-with-agents/syntax-agent-long-term-memory.md)).

## Revisions and Tensions

- Zed co-founder Nathan Sobo distinguishes converging file replicas from ensuring that combined edits work correctly together ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Syntax host Wes Bos reports a pull request followed by a failed deployment build and proposes returning build logs to the agent; he had not implemented that loop ([summary](../../../summaries/coding-with-agents/syntax-remote-coding-agents.md)).
- Editorial: The MCP tutorials reflect July 2025 clients and SDKs, while the other videos span December 2025 through August 2026. Read compatibility statements as dated accounts, not as a current setup reference. No controlled comparison establishes the collection's productivity or reliability claims.

## Practical Implications

- Editorial: Keep code provenance and correctness separate: knowing how an edit was produced does not establish that it should ship ([summary](../../../summaries/coding-with-agents/workflow-of-the-future-with-zed.md)).
- Editorial: Preserve task state and diagnostic evidence outside chat, but do not confuse a closed issue with a checked fix. The Beads walkthrough is useful for seeing that distinction ([summary](../../../summaries/coding-with-agents/syntax-agent-long-term-memory.md)).
- Editorial: Test a tool's inputs and outputs independently, then check the model's selection and use of that tool. CJ's demonstration includes a case where he must explicitly request search despite the tool being available ([summary](../../../summaries/coding-with-agents/syntax-mcp-explained.md)).
