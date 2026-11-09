---
addedDate: '2026-08-26'
title: "New Skills! v1.2 brings /wait-what, /writing-for-agents, and fixes /grill-me"
resourceId: 74
date: "2026-08-05"
collection: "matt-pocock-agent-skills"
order: 2
videoId: "gaDdrDdczO4"
---

Matt Pocock's version 1.2 skills update targets friction in agent work: answers that are hard to read, design interviews slowed by one question per turn, and setup steps that need human control. He explains the revised instructions and shows selected interfaces and example outputs.

### Key Points Covered

- **Documentation and packaging for more harnesses**: The release adds a documentation site with a suggested workflow and packaging for Claude Code's plugin marketplace. New sidecar metadata files let Codex, like other supported harnesses, keep user-invoked skills out of the agent's context until they are called [00:00–02:55](https://www.youtube.com/watch?v=gaDdrDdczO4&t=0s).
- **Ask for a plainer version of a confusing answer**: Wait What has the agent restate one hard-to-read response in simplified technical English, using the project's own vocabulary from its context file [02:55–03:58](https://www.youtube.com/watch?v=gaDdrDdczO4&t=175s).
- **Ask independent questions together**: Grill Me previously asked one question per turn, making easy decisions slow. The revision groups questions into rounds, but waits when a question depends on an earlier answer. Pocock shows numbered questions with recommended answers, followed by another round based on the responses [03:58–06:44](https://www.youtube.com/watch?v=gaDdrDdczO4&t=238s).
- **Write instructions for their consumers**: Writing for Agents broadens skill-writing guidance to files such as `AGENTS.md` and `CLAUDE.md`, with an emphasis on concise always-loaded context and extracting specialized procedures into skills [06:44–07:33](https://www.youtube.com/watch?v=gaDdrDdczO4&t=404s).
- **Keep setup under human control**: Wizard generates an interactive shell script that opens configuration pages, guides the user, and saves supplied values. Pocock says entered credentials go through the script rather than the model; he does not review the generated script's security in the walkthrough [07:33–08:37](https://www.youtube.com/watch?v=gaDdrDdczO4&t=453s).
- **Bring collaborators' answers back to the agent**: To Questionnaire exports unresolved decisions into a document people can discuss outside the agent interface. Pocock's example uses Google Docs, then imports the agreed answers back into the conversation [08:37–10:41](https://www.youtube.com/watch?v=gaDdrDdczO4&t=517s).

Full video: <https://www.youtube.com/watch?v=gaDdrDdczO4>
