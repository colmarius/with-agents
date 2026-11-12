---
addedDate: '2026-08-26'
title: "Can Cursor's HARDCORE Review Skill Stop The Slop?"
resourceId: 74
date: "2026-05-28"
collection: "matt-pocock-agent-skills"
order: 7
videoId: "mh5XZ-L5SFQ"
---

Matt Pocock runs Cursor's code-quality review skill, which he invokes as a "thermonuclear code quality review", on the last five merged PRs in Sandcastle, his open-source software factory. He values its willingness to challenge structure beyond the diff, while rejecting several findings and arguing that the prompt needs clearer attention to tests and feedback loops.

### Key Points Covered

- **Review can challenge surrounding architecture**: The skill looks beyond the submitted diff for maintainability, modularity, simpler abstractions, and wider codebase health [01:03–03:12](https://www.youtube.com/watch?v=mh5XZ-L5SFQ&t=63s).
- **Concrete structural criteria improve the report**: Large files, nested special cases, unclear type boundaries, duplicated helpers, and needless sequential work become explicit review targets rather than vague quality concerns [03:12–05:18](https://www.youtube.com/watch?v=mh5XZ-L5SFQ&t=192s).
- **Prioritize consequential findings**: The skill tells the agent to rank structural code-quality regressions above smaller legibility and maintainability concerns, then approve or reject the PR [07:12–08:08](https://www.youtube.com/watch?v=mh5XZ-L5SFQ&t=432s).
- **Human codebase knowledge remains necessary**: Pocock accepts suggestions about decomposition, swallowed errors, and hard-coded dependencies, but rejects findings based on an inaccurate system reading or duplication that is intentional [08:08–12:06](https://www.youtube.com/watch?v=mh5XZ-L5SFQ&t=488s).
- **More false positives are an acceptable cost of ambitious review**: Pocock accepts additional false positives to surface options that narrow review might miss, but the demonstration does not implement the proposals or compare defect and maintenance outcomes [12:06–13:04](https://www.youtube.com/watch?v=mh5XZ-L5SFQ&t=726s).

Full video: <https://www.youtube.com/watch?v=mh5XZ-L5SFQ>
