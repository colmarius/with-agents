---
title: "Can Cursor's HARDCORE Review Skill Stop The Slop?"
resourceId: 74
date: "2026-05-28"
collection: "matt-pocock-agent-skills"
order: 6
videoId: "mh5XZ-L5SFQ"
---

Matt Pocock tests Cursor's thermonuclear code-quality-review skill against recent changes in his Sandcastle repository. He values its willingness to challenge structure beyond the diff, while rejecting several findings and arguing that the prompt needs clearer attention to tests and feedback loops.

### Key Points Covered

- **Review can challenge surrounding architecture**: The skill looks beyond the submitted diff for maintainability, modularity, simpler abstractions, and wider codebase health [00:01:03]-[00:03:12].
- **Concrete structural criteria improve the report**: Large files, nested special cases, unclear type boundaries, duplicated helpers, and needless sequential work become explicit review targets rather than vague quality concerns [00:03:12]-[00:05:18].
- **Prioritize consequential findings**: The generated report places structural regressions above smaller legibility concerns and applies an approve-or-reject bar [00:07:12]-[00:08:08].
- **Human codebase knowledge remains necessary**: Pocock accepts suggestions about decomposition, swallowed errors, and hard-coded dependencies, but rejects findings based on an inaccurate system reading or duplication that is intentional [00:08:08]-[00:12:06].
- **Broad review trades precision for discovery**: Pocock accepts additional false positives to surface options that narrow review might miss, but the demonstration does not implement the proposals or compare defect and maintenance outcomes [00:12:06]-[00:13:04].

Full video: <https://www.youtube.com/watch?v=mh5XZ-L5SFQ>
