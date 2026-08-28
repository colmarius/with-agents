---
title: "The Workflow of the Future With Zed"
resourceId: 94
date: "2026-08-12"
---

Syntax hosts Wes Bos and Scott Tolinski interview Zed co-founder Nathan Sobo about Delta, a beta-stage collaborative agent editor backed by DeltaDB. The reusable contribution is a fine-grained version and provenance layer that binds code, agent conversation, and human annotations before a commit exists.

This is a founder and product interview rather than a workflow demo or comparative study. It does not measure productivity, review accuracy, synchronization reliability, or team outcomes, and some repository-wide annotation behavior was still planned.

### Key Points Covered

- **DeltaDB moves provenance below commits**: Sobo describes assigning every evolving software version an address so comments and conversations can attach to work in progress instead of only to committed snapshots ([00:22:44–00:25:29](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1364s)).
- **The agent thread and worktree travel together**: Delta continuously captures prompts and other activity, lets a teammate join the same thread, synchronizes editable worktree replicas, and attributes generated lines to an agent or model ([00:26:34–00:29:06](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1594s)). These are first-party descriptions, not independently tested guarantees.
- **Review can happen in the producing context**: Participants can share the agent, its context window, and code while work is underway, then still use pull requests and CI as downstream gates ([00:29:06–00:32:08](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1746s)). The interview does not show that this improves defect detection.
- **Conflict-free synchronization does not remove semantic conflict**: Sobo says DeltaDB models the file tree with copy-on-write persistent structures, mirrors it to disk for tools, and synchronizes replicas without a critical central coordinator; he explicitly notes that concurrent changes can still converge into a semantically conflicting result ([00:36:56–00:41:28](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2216s)).
- **Cross-version annotations were still roadmap**: The team was working on a repository-wide index intended to retrieve a code annotation wherever the marked range remains visible across committed and uncommitted states ([00:33:10–00:34:10](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1990s)).
- **Local and hosted execution can share one thread**: Sobo describes desktop participants running locally while browser participants use hosted runners, with work synchronized between them ([00:43:23–00:44:15](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2603s)).
- **Agent output becomes an annotatable document**: Instead of confining output to chat bubbles, Delta presents commands, edits, and rich text as a cursor-navigable document where a person can type feedback inline ([00:49:01–00:50:55](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2941s)).

Full video: <https://www.youtube.com/watch?v=GsLyhrxaMIo>
