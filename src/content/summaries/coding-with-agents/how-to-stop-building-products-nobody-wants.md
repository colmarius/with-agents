---
title: "How to Stop Building Products Nobody Wants"
resourceId: 112
date: "2026-09-02"
---

Teresa Torres joins Hamel Husain to explain continuous discovery: regularly testing ideas against customer evidence to decide what to build. She argues that feedback should challenge an idea, not just confirm it. The second half applies this approach to her AI interview coach and tools for making sense of customer interviews.

### Key Points Covered

- **Ask about a specific experience, not your idea.** Torres recommends asking a target customer to reconstruct a time they experienced the problem. Walking through what happened reveals behavior and context that broad questions or reactions to a demo often miss [00:08:04]–[00:18:41].
- **Test assumptions before building the whole solution.** Interviews help identify the problem; assumption tests check whether a proposed solution can work. Map the steps a customer must take to get value, then ask whether they want to, are willing to, and can complete each step. These specific assumptions are easier to test than the whole idea [00:20:27]–[00:23:29].
- **Align on the problem before debating solutions.** An opportunity solution tree links a desired outcome to unmet customer needs—the opportunities—and then to possible solutions. Torres uses an alumni-map disagreement to show how teammates can argue about implementation while silently prioritizing different needs [00:24:19]–[00:34:18].
- **Evaluate an AI coach against the skill it teaches.** Torres initially reviewed every response herself, then used error analysis and evals to detect mistakes. Her interview coach grades story-based questions, scene setting, timeline building, and redirecting generalizations; failures included confusing those categories and recommending general questions [00:43:56]–[00:47:04].
- **Give AI a research goal, not just transcripts.** The model needs to know what the team is trying to learn. Interpreting customer needs also requires judgment: Torres contrasts “too many Slack notifications” with the broader need to avoid interruptions during focused work. How a need is framed changes which solutions a team considers [00:49:07]–[00:56:26].
- **Make generated changes traceable and checkable.** Her tree-update workflow preserves human edits and links opportunities back to interviews. Inferring a change set from two trees proved ambiguous, so she had the model output its moves alongside the tree. An audit tool applies those moves to the input and returns mismatches for correction [01:08:23]–[01:13:32].
- **Fix upstream errors, then add a correction loop.** A customer noticed unsorted opportunities in a generated tree. Poorly framed needs made that grouping failure hard to evaluate. Torres had to address those upstream errors even though customers had not complained about them, but improving one error worsened the other. She reports that returning eval failures to the agent let it correct them on a second pass [01:24:19]–[01:29:34].

### Practical Takeaway

For teams building with agents, faster implementation does not replace evidence about what customers need. Use discovery to choose the problem, domain-specific evals to identify failures, and inspectable correction loops where a single generation is not reliable enough. This is a synthesis of the conversation; the reported AI results are Torres's experience, not a general model benchmark.

Full video: <https://www.youtube.com/watch?v=K3cmR_i3dF0>
