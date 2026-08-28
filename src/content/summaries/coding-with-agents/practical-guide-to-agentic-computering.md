---
title: "I can't sleep gud anymore - A Practical Guide to Agentic Computering"
resourceId: 82
date: "2025-07-01"
---

Mario Zechner demonstrates a control-heavy Claude Code workflow built around explicit context, state stored on disk, and human review. The most transferable pattern is to treat a prompt as a program and small Markdown or JSON artifacts as inspectable state that the agent queries and updates.

This July 2025 recording is a personal workflow and live demonstration, not a controlled comparison. Its Claude Code interface, system prompt, tools, pricing, permission behavior, and compaction details are historical. Zechner's claim that the workflow reduced one Spine port from about two weeks to one day is an unverified anecdote from his own codebase, not a general productivity forecast.

### Practical Workflow

- **Use agents for disposable automation, not only production code**: Zechner asks Claude Code to convert media and write small Bash or Node scripts, then keeps only tools that become reusable. These demonstrations show his process; they do not compare correctness or maintenance cost with hand-written scripts ([00:09:00–00:13:45](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=540s)).
- **Externalize project context, then review it as ground truth**: He has Claude draft project and module documentation, corrects omissions manually, and proposes updating the relevant document from the final diff after each change. He repeatedly warns that generated documentation is a first draft and can be wrong ([00:14:40–00:25:55](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=880s)).
- **Recover before compaction, not after it**: When a session nears its context limit, he writes a task-summary file, compares it with the conversation, iterates until important decisions are retained, then starts a fresh session with the project spec and task summary. His demo also shows the first summary losing proposal details, so the method still depends on manual checking ([00:47:30–00:59:50](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=2850s)).
- **Make large-codebase context queryable**: For a cross-language Spine runtime port, Zechner generates symbol indexes with `lsp-cli`, queries only needed records with `jq`, and keeps a port plan, target-language conventions, and accumulated porting notes on disk. This limits the context loaded for each unit of work while preserving progress between sessions ([01:02:00–01:12:14](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=3720s)).
- **Put the human inside the workflow**: The port loop opens the reference diff and target files, pauses before each type, compiles the change, shows the resulting diff, and waits for Zechner to review or intervene before marking the item complete. The demonstrated item is small; the broader 68-file, 5,000-line and one-day-versus-two-weeks figures are his report without task logs, quality measures, or an independent baseline ([01:12:14–01:20:19](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=4334s)).
- **Treat generated tests as drafts**: Zechner says Claude may over-mock behavior, weaken assertions, or remove them while resolving failures. His recommendation is to give the loop executable feedback but manually verify that the tests still assert the intended behavior; the video provides examples from his experience rather than a measured failure rate ([01:23:11–01:24:16](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=4991s)).

### Safety and Evidence Limits

Zechner demonstrates bypassing Claude Code's permission prompts on a machine he says contains nothing irreplaceable, reports that nothing bad happened during two months of use, and briefly suggests a container for concerned users. That anecdote is not a security assessment: it does not test credential theft, network exfiltration, container isolation, dependency compromise, or destructive commands. Skipping permissions should not be generalized to machines, repositories, or accounts with valuable data or credentials ([00:02:38–00:06:52](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=158s)).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=sq6a3WC5_Ns).
