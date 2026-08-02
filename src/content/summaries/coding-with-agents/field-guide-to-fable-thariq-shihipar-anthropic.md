---
title: "Field Guide to Fable"
resourceId: 28
date: "2026-07-06"
---

Thariq Shihipar presents a practical field guide to Fable: expose the model's uneven capabilities through the right tools, surface unknowns before long runs, keep yourself in the loop, and judge agent work by the value it creates rather than the volume of code it generates.

### Key Points Covered

- **Stronger models open the map but demand new working habits**: Shihipar organizes the guide around unhobbling Claude, finding unknowns, dealing with the loss that accompanies a new way of programming, and becoming less constrained by old trade-offs [00:01:03]-[00:02:52].
- **Harnesses and prompts determine how much capability is visible**: Because models are "grown, not designed," their abilities emerge unevenly. The Pokémon example shows what Shihipar calls capability overhang: a chat model may fail at a recall task that Claude Code solves by fetching data and writing a filtering script [00:01:50]-[00:04:45].
- **Tools can matter more than giant context windows**: Rather than pasting an entire codebase into a model, Claude Code gives the model shell access and search tools so it can construct the context it needs [00:04:45]-[00:05:37].
- **More capable models may need less scaffolding**: Shihipar says Anthropic removed 80% of Claude Code's system prompt because newer models can be constrained by examples. He recommends providing context rather than accumulating prohibitions, while noting that interaction patterns such as interviews and HTML reports become possible as capabilities change [00:05:37]-[00:08:27].
- **Treat model behavior as empirical rather than fixed**: He compares understanding a model to biology more than physics: practitioners need to test what is possible and build intuition instead of assuming the old rules still apply [00:08:27]-[00:09:19].
- **The prompt is a map, not the territory**: The real codebase and its constraints contain decision points the prompt did not specify. As agents traverse more of that territory, finding known unknowns, unknown knowns, and unknown unknowns becomes a human bottleneck [00:09:19]-[00:10:09].
- **Use the agent to expose blind spots before implementation**: A blind-spot pass can search the relevant code, diffs, and surrounding context for gotchas. Broad prototypes reveal preferences that are hard to put into words, while an interview can prioritize questions that would materially change the architecture [00:10:09]-[00:12:58].
- **References, implementation notes, and quizzes keep the human informed**: Existing code or a visual mock-up can provide a better map than prose alone. During execution, the agent can log deviations and unknowns, then quiz the developer so they can explain the result when opening or merging a pull request [00:12:58]-[00:14:57].
- **Increased leverage can still feel like a loss**: Shihipar contrasts work that once took weeks with similar changes completed in hours, while acknowledging the grief of moving away from the hands-on programming he enjoyed. His response is to stay involved and learn the new workflow rather than try to return to the old one [00:14:57]-[00:16:36].
- **Cheap building should increase ambition, not obscure value**: Fable changes some familiar good-fast-cheap trade-offs, but generating code is not the goal. The harder test is whether repeated experiments create real value while making people more productive without consuming more of their lives [00:16:36]-[00:18:43].

Full video: <https://www.youtube.com/watch?v=9fubhllmsBU>
