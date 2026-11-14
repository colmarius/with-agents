---
title: "Agents Sucked At UI (Until Today)"
resourceId: 215
date: "2026-11-03"
---

Theo describes refining T3 Code's interface by repeatedly asking several models to review screenshots, making changes from their feedback, and comparing the result with other applications. The experiment produced changes he preferred, but also exposed unstable ratings: the same design scored differently in a fresh conversation, and unchanged reference screenshots received higher scores over time.

*Based on the video's English auto-generated captions. The results are Theo's first-party account, not an independent usability study. The video includes a Magic Patterns sponsorship segment, separate from the review-loop experiment.*

### Iterating on screenshots

- **Make review feedback drive the next implementation pass.** Theo asks an implementing agent to improve the UI until a "council" of reviewers agrees it deserves at least nine out of ten. The council delegates read-only reviews to models from different providers, gathers findings and disagreements, and records a new round after fixes. This is a subjective version of hill climbing: repeatedly change the implementation to improve an evaluator's score. Unlike a passing test or measured speedup, the same screenshot can receive different ratings on repeated review. [05:44–09:27](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=344s)
- **A high score did not mean the design met his expectations.** The first rounds improved typography, truncation of branch names, card radii, and inline-code styling. All reviewers eventually awarded nine out of ten, yet Theo still preferred competing apps when switching between them. He started a fresh thread and supplied screenshots of Claude Code and Codex as comparison targets. A design previously rated nine received 7.4 from Codex in the new context, illustrating how the comparison set and conversation can change the judgment. [11:18–15:47](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=678s)
- **Stage expensive reviewers rather than running every model each round.** As usage limits approached, Theo asked the agent to iterate with one reviewer first, then bring the others back once its score was high enough. Later passes improved consistency across labels, sidebar hierarchy, border radii, and light-mode contrast. This saved reviewer usage within his experiment; it was not a measured comparison of orchestration strategies. [16:51–18:29](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=1011s)

### Scores need human interpretation

- **Target scores can influence the reviewers.** Raising the goal to 9.5 led to another ten rounds. Theo notices categories landing exactly on the requested threshold, while scores for unchanged comparison screenshots also rise and their relative ranking flips. He suggests hiding the target from reviewing subagents in a future run. That is a proposed mitigation, not a tested solution to biased or inconsistent ratings. [18:29–21:19](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=1109s)
- **Explicit preferences still changed the outcome.** In a later run targeting ten out of ten, Theo added that the interface had become too grayscale and asked for color to return. He preferred the resulting button visibility, contrast, and light-mode syntax treatment. His reported cost of roughly $400 included that further refinement; he put the earlier work shown at roughly $250. These were usage estimates across subscriptions, including an assumed price for a model without published pricing, not a reproducible cash cost. [21:19–26:10](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=1279s)

### A more measurable loop for tool descriptions

- **Turn observed failures into an evaluation before optimizing context size.** In a separate experiment, Theo collected cases where agents misused T3 Code's Model Context Protocol (MCP) tools, such as creating a new thread when he wanted a subagent. He built an evaluation from those cases, first asked the agent to achieve a perfect score across the models he cared about, and then asked it to shorten tool descriptions while retaining that score. He reports reductions of 52% in one configuration and 78% with tool search enabled. Those results concern his evaluation and configurations; they do not prove correct behavior on unseen requests. [26:10–30:13](https://www.youtube.com/watch?v=xq0eB8vxeqk&t=1570s)

**Editorial takeaway:** Screenshot review can supply concrete UI changes to try, but agreement between models is not a usability test or a reliable stopping rule. This example is most useful as a workflow experiment with visible evaluation weaknesses, alongside the more constrained tool-description example where recorded failure cases provide an executable check.

Full video: <https://www.youtube.com/watch?v=xq0eB8vxeqk>
