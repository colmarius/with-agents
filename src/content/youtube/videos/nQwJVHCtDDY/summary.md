---
title: "Matt Pocock’s Agentic Engineering Workflow (just copy him)"
videoId: nQwJVHCtDDY
sourceUrl: "https://www.youtube.com/watch?v=nQwJVHCtDDY"
publishedAt: "2026-06-18T19:26:59Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

David Ondrej interviews Matt Pocock, who says he sells developer courses and directs viewers to AI Hero for his skills and newsletter. Pocock argues that AI has made tactical implementation cheap, increasing the value of strategic software design, scoped delegation, codebase quality, and human judgment ([00:00:00]-[00:03:56], [01:02:02]).

## Key Ideas

- Pocock separates tactical code production from strategic decisions about architecture, interfaces, tests, and task boundaries; he argues developers should retain the latter while delegating the former ([00:00:00]-[00:02:52]).
- He distinguishes user-invoked procedural skills from model-invoked abilities. He prefers procedures such as Grill Me because they keep the human in control of planning and avoid loading every skill description into model context ([00:17:00]-[00:21:51]).
- His current workflow uses Claude Code locally for planning and some implementation, then Sandcastle sandboxes and GitHub Actions for parallel AFK implementation and review ([00:24:51]-[00:26:59]).
- Pocock treats model and harness quality as roughly equal concerns. Better prompts, skills, repository architecture, tests, and feedback systems can make less capable or cheaper models useful ([00:27:47]-[00:32:34]).
- He prefers task queues to undirected perpetual loops: agents can explore, implement, and review scoped work asynchronously while humans retain prioritization and selected approval checkpoints ([00:42:53]-[00:51:20]).
- Review protects production and gives maintainers evidence for improving the system that produces code; Pocock suggests making review faster with richer agent-generated evidence rather than simply removing it ([00:50:15]-[00:53:09]).
- His practical reset is to remove accumulated skills, plugins, MCP servers, and instruction files, observe the baseline agent, then restore only procedures that solve demonstrated problems ([01:00:05]-[01:02:02]).

## Practical Implications

- Design module boundaries, tests, and acceptance criteria before dispatching bounded implementation work ([00:01:59]-[00:02:52]).
- Keep reusable planning and review procedures under human control, and account for the context cost of automatically exposed skill descriptions ([00:17:00]-[00:22:58]).
- Run unattended agents in isolated environments and preserve review gates appropriate to the risk of each change ([00:24:51]-[00:26:59], [00:48:08]-[00:51:20]).
- When an agent discovers a defect, improve the recurring test, security check, or review process that allowed it—not only the immediate code ([00:38:54]-[00:41:50]).

## Questions and Tensions

- Claims that AI makes senior developers ten times better and that skills determine AI's ceiling are observations from Pocock's conversations, not controlled measurements in the video ([00:02:52]-[00:03:56]).
- The proposed 50/50 balance between model and harness is a heuristic; the interview supplies no comparison across fixed tasks, models, harnesses, costs, or outcomes ([00:27:47]-[00:30:54]).
- Pocock wants to move human checkpoints later while retaining enough sampling and observability to improve the harness, but the video does not define risk thresholds or evidence for safe automatic merging ([00:48:08]-[00:52:20]).
- The captured auto-captions contain obvious product-name substitutions and one opening fragment later repeated in context; no claim above relies on resolving ambiguous wording.

## Source

- [YouTube video](https://www.youtube.com/watch?v=nQwJVHCtDDY)
- [transcript.md](./transcript.md)
