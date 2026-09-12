---
title: "The Workflow of the Future With Zed"
resourceId: 94
date: "2026-08-12"
---

Delta aims to let developers discuss and review agent work while it is happening, rather than waiting for a commit. Zed co-founder Nathan Sobo describes the beta-stage editor to Syntax hosts Wes Bos and Scott Tolinski. Its underlying database, DeltaDB, tracks versions between commits so code, agent conversations, and human comments can remain connected.

### Key Points Covered

- **DeltaDB moves provenance below commits**: Sobo describes assigning every evolving software version an address so comments and conversations can attach to work in progress instead of only to committed snapshots ([22:44–25:29](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1364s)).
- **The agent thread and worktree travel together**: Sobo says Delta captures prompts and other activity, lets a teammate join the same thread, synchronizes editable copies of the working files, and attributes generated lines to an agent or model ([26:34–29:06](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1594s)).
- **Review can happen during the work**: In Sobo's description, participants share the agent, its context window, and code while changes are underway, then still use pull requests and CI as later checks ([29:06–32:08](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1746s)).
- **Synchronized files can still contain incompatible changes**: DeltaDB models the file tree in a database and mirrors it to disk for ordinary tools. Sobo says its synchronization can make every replica converge on the same content, but that content may still combine changes that do not work together. The algorithms do not critically depend on a central coordinator; the launch service nevertheless uses a centralized architecture ([36:56–42:19](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2216s)).
- **Cross-version annotations were still roadmap**: The team was working on a repository-wide index intended to retrieve a code annotation wherever the marked range remains visible across committed and uncommitted states ([33:10–34:10](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=1990s)).
- **Local and hosted execution can share one thread**: Sobo describes desktop participants running locally while browser participants use hosted runners, with work synchronized between them ([43:23–44:15](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2603s)).
- **Agent output becomes an annotatable document**: Instead of confining output to chat bubbles, Delta presents commands, edits, and rich text as a cursor-navigable document where a person can type feedback inline ([49:01–50:55](https://www.youtube.com/watch?v=GsLyhrxaMIo&t=2941s)).

Full video: <https://www.youtube.com/watch?v=GsLyhrxaMIo>
