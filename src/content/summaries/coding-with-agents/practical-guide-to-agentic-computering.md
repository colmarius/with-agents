---
title: "I can't sleep gud anymore - A Practical Guide to Agentic Computering"
resourceId: 82
date: "2025-07-01"
---

Mario Zechner demonstrates a Claude Code workflow in which he keeps tight control through explicit context, state stored on disk, and human review. The most transferable pattern is to treat a prompt as a program and small Markdown or JSON artifacts as inspectable state that the agent queries and updates.

### Practical Workflow

- **Use agents for disposable automation, not only production code**: Zechner asks Claude Code to convert media and write small Bash or Node scripts, then keeps only tools that become reusable [09:00–13:45](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=540s).
- **Write project context to files and review it yourself**: He has Claude draft project and module documentation and corrects omissions manually. After each change, he recommends having Claude update the matching module document from the final git diff. He repeatedly warns that generated documentation is a first draft and can be wrong [14:40–25:55](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=880s).
- **Save a task summary before compaction instead of relying on it**: When a session nears its context limit, he writes a task-summary file, compares it with the conversation, iterates until important decisions are retained, then starts a fresh session with the project spec and task summary. His demo also shows the first summary losing proposal details, so the method still depends on manual checking [47:30–59:50](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=2850s).
- **Make large-codebase context queryable**: To port changes from the Java reference runtime of Spine, his 2D animation tool, to other languages, Zechner generates symbol indexes with `lsp-cli`, queries only needed records with `jq`, and keeps a port plan, target-language conventions, and accumulated porting notes on disk. This limits the context loaded for each unit of work while preserving progress between sessions [1:02:00–1:12:14](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=3720s).
- **Put the human inside the workflow**: The port loop opens the reference diff and target files, pauses before each type, compiles the change, shows the resulting diff, and waits for Zechner to review or intervene before marking the item complete. The demonstrated item is small; the broader 68-file, 5,000-line and one-day-versus-two-weeks figures are his report without task logs, quality measures, or an independent baseline [1:12:14–1:20:19](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=4334s).
- **Treat generated tests as drafts**: Zechner says Claude may over-mock behavior, weaken assertions, or remove them while resolving failures. His recommendation is to give the loop executable feedback but manually verify that the tests still assert the intended behavior; the video provides examples from his experience rather than a measured failure rate [1:23:11–1:24:16](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=4991s).

### Permission prompts are a separate safety decision

In this July 2025 demonstration, Zechner bypasses Claude Code's permission prompts on a machine he says contains nothing irreplaceable. He reports no incident in two months and briefly suggests a container. That experience does not establish the safety of skipping permissions on machines or accounts with valuable data or credentials [02:38–06:52](https://www.youtube.com/watch?v=sq6a3WC5_Ns&t=158s).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=sq6a3WC5_Ns).
