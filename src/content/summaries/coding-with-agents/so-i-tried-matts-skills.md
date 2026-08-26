---
title: "So I tried Matt's skills..."
resourceId: 48
date: "2026-08-18"
---

After a week using skills from Matt Pocock’s collection and Lauren Tan’s pstack, Theo Browne reviews how he chose, tested, adapted, and managed them. His main recommendation is not to copy a published setup: use collections as reference material, inspect the instructions, try the relevant pieces, and keep only what improves your own work.

The examples come from Browne’s projects and agent history. They show his preferences and reported results, not a controlled comparison of skill effectiveness.

### Key Points Covered

- **Audit skills against real work before adopting them**: Browne asked an agent to inspect his usage history across several machines, compare that evidence with the available skills, and rank the likely fit and benefit. He recommends using other people’s collections as inputs to judgment rather than as installation checklists [00:02:57]-[00:05:06].
- **Write the description as a routing trigger**: The agent sees a skill’s name and description before deciding whether to load its body. Browne therefore evaluates descriptions by whether they activate the right skill for the right task, not by whether they summarize every instruction inside [00:05:06]-[00:06:08].
- **Concrete examples can reshape agent writing**: pstack’s `unslop` skill pairs undesirable patterns with more direct alternatives, asks the model to preserve meaning and match tone, and ends with a self-audit. Browne’s side-by-side outputs suggest a large readability improvement for him, but the demonstration is illustrative rather than a controlled test [00:06:08]-[00:11:55].
- **Choose invocation behavior deliberately**: Interactive workflows such as grilling a design are manually invoked, while a debugging skill can load when the task calls for it. Browne treats that split as important: some skills are explicit commands, while others are background guidance for the model [00:13:56]-[00:14:57], [00:19:54]-[00:20:43].
- **Test simple skills before installing them**: For a text-only skill, paste its instructions into an agent request and observe the behavior first. Skills that depend on scripts or supporting files need those dependencies too, but a direct trial is a cheap first filter [00:15:47]-[00:16:49].
- **Good interviews expose product decisions hidden in the repository**: The grilling skill inspected Browne’s Lakebed project, found stale and conflicting guidance, then asked concrete questions about users, milestones, product boundaries, ownership, simplicity, and irreversible actions. Browne frequently rejected its suggested answers, but found the questions useful for clarifying his own design [00:16:49]-[00:18:51], [00:23:56]-[00:25:01].
- **Adopt parts of a workflow, not necessarily the whole sequence**: Pocock’s collection connects design interviews, specs, tickets, implementation, review, architecture, domain modeling, and human-only setup steps. Browne likes several components but rejects a fully prescribed process in favor of adapting selected pieces to his existing workflow [00:21:48]-[00:23:56], [00:28:00]-[00:29:04].
- **Use skills to demand evidence, not just better prose**: pstack’s blast-radius workflow tells the agent not to trust its own thread summary and to prove the facts a change depends on by running code. Its show-me-your-work workflow records decisions, reasons, evidence, and results in an append-only trail that a reviewer can inspect [00:33:08]-[00:35:09].
- **Treat a skill set as maintained tooling**: Browne keeps selected skills in a repository, distributes them across his machines, and wants grouping and enable/disable controls. His closing advice is to read and edit the Markdown, refine it from personal usage, and remove what does not fit [00:21:48]-[00:22:52], [00:35:09]-[00:38:10].

Full video: <https://www.youtube.com/watch?v=0oXOOlqVu5M>

### Related here

- [Durable Context for Coding Agents: Agent Skills are procedures](/coding/posts/durable-context-coding-agents/#put-each-fact-in-the-smallest-useful-home) — when a repeatable workflow belongs in a skill and how to test whether it helps.
- [Writing & Using Skills](/resources/coding-with-agents/workflows?summary=coding-with-agents__writing-and-using-agent-skills-nick-nisi-zack-proser) — a hands-on workshop on skill triggers, supporting files, and comparative evaluation.
- [Matt Pocock’s Agentic Engineering Workflow](/resources/coding-with-agents/workflows?summary=coding-with-agents__matt-pococks-agentic-engineering-workflow) — Pocock’s companion explanation of deliberate invocation, reusable procedures, and human-owned direction.
