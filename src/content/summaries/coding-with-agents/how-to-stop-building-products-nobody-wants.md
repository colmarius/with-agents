---
title: "How to Stop Building Products Nobody Wants"
resourceId: 112
date: "2026-09-02"
---

Teresa Torres joins Hamel Husain to explain continuous discovery: learning what to build through fast feedback loops, rather than treating delivery as the only work. The second half connects customer research to AI engineering through her interview coach and interview-synthesis tools.

### Key Points Covered

- **Ask about a specific experience, not your idea.** Torres recommends asking a target customer to reconstruct a time they experienced the problem. Walking through what happened reveals behavior and context that broad questions or reactions to a demo often miss [00:08:04]–[00:18:41].
- **Test assumptions before building the whole solution.** Map the steps a customer must take to get value, then examine whether they want to, are willing to, and can complete each step. Small, specific assumptions are easier to test quickly than an entire product idea [00:20:27]–[00:23:29].
- **Align on the problem before debating solutions.** An opportunity solution tree connects a desired outcome to customer needs and possible solutions. Torres uses an alumni-map disagreement to show how teammates can argue about implementation while silently prioritizing different problems [00:24:19]–[00:34:18].
- **Evaluate an AI coach against the skill it teaches.** Torres initially reviewed every response herself, then used error analysis and evals to detect mistakes. Her interview coach grades story-based questions, scene setting, timeline building, and redirecting generalizations; failures included confusing those categories and recommending general questions [00:43:56]–[00:47:04].
- **Synthesis needs domain judgment.** Dumping transcripts into an LLM does not specify the research goal or what matters to the product. Torres contrasts “too many Slack notifications” with the broader need to avoid interruptions during focused work: how a need is framed changes which solutions a team considers [00:49:07]–[00:56:26].
- **Make generated changes traceable and checkable.** Her tree-update workflow preserves human edits and links opportunities back to interviews. Inferring a change set from two trees proved ambiguous, so she had the model output its moves alongside the tree. An audit tool applies those moves to the input and returns mismatches for correction [01:08:23]–[01:13:32].
- **Some failures need a correction loop, not another prompt tweak.** In a customer-triggered investigation, missed groupings and poorly framed opportunities interfered with each other and with judge calibration. Torres reports that running evals as guardrails and returning failures to the agent allowed it to correct errors on a second pass [01:24:19]–[01:29:34].

### Practical Takeaway

For teams building with agents, faster implementation does not replace evidence about what customers need. Use discovery to choose the problem, domain-specific evals to identify failures, and inspectable correction loops where a single generation is not reliable enough. This is a synthesis of the conversation; the reported AI results are Torres's experience, not a general model benchmark.

Full video: <https://www.youtube.com/watch?v=K3cmR_i3dF0>
