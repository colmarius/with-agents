---
title: "Field Guide to Fable"
resourceId: 28
date: "2026-07-06"
---

Anthropic's Thariq Shihipar explains how to work with Fable, a Claude model whose capabilities he says are still being discovered. His advice is to give the model tools that help it solve problems, uncover missing requirements before long runs, and stay able to explain the software it produces.

### Key Points Covered

- **Stronger models open the map but demand new working habits**: Shihipar organizes the guide around unhobbling Claude, finding unknowns, dealing with the loss that accompanies a new way of programming, and becoming less constrained by old trade-offs [01:03–02:52](https://www.youtube.com/watch?v=9fubhllmsBU&t=63s).
- **Harnesses and prompts determine how much capability is visible**: Because models are "grown, not designed," their abilities emerge unevenly. The Pokémon example shows what Shihipar calls capability overhang: a chat model may fail at a recall task that Claude Code solves by fetching data and writing a filtering script [01:50–04:45](https://www.youtube.com/watch?v=9fubhllmsBU&t=110s).
- **Tools can matter more than giant context windows**: Rather than pasting an entire codebase into a model, Claude Code gives the model shell access and search tools so it can construct the context it needs [04:45–05:37](https://www.youtube.com/watch?v=9fubhllmsBU&t=285s).
- **More capable models may need less scaffolding**: Shihipar says Anthropic removed 80% of Claude Code's system prompt because newer models can be constrained by examples. He recommends providing context rather than accumulating prohibitions, while noting that interaction patterns such as interviews and HTML reports become possible as capabilities change [05:37–08:27](https://www.youtube.com/watch?v=9fubhllmsBU&t=337s).
- **Treat model behavior as empirical rather than fixed**: He compares understanding a model to biology more than physics: practitioners need to test what is possible and build intuition instead of assuming the old rules still apply [08:27–09:19](https://www.youtube.com/watch?v=9fubhllmsBU&t=507s).
- **Find decisions the prompt leaves open**: A codebase contains constraints that the initial prompt may omit. Shihipar separates questions you know are unanswered, preferences so familiar you forgot to state them, and problems you have not considered. Longer agent runs make these omissions more consequential because the agent reaches more decisions without your input [09:19–11:11](https://www.youtube.com/watch?v=9fubhllmsBU&t=559s).
- **Use the agent to expose blind spots before implementation**: A blind-spot pass can search the relevant code, diffs, and surrounding context for gotchas. Broad prototypes reveal preferences that are hard to put into words, while an interview can prioritize questions that would materially change the architecture [10:09–12:58](https://www.youtube.com/watch?v=9fubhllmsBU&t=609s).
- **References, implementation notes, and quizzes keep the human informed**: Existing code or a visual mock-up can provide a better map than prose alone. During execution, the agent can log deviations and unknowns, then quiz the developer so they can explain the result when opening or merging a pull request [12:58–14:57](https://www.youtube.com/watch?v=9fubhllmsBU&t=778s).
- **Increased leverage can still feel like a loss**: Shihipar contrasts work that once took weeks with similar changes completed in hours, while acknowledging the grief of moving away from the hands-on programming he enjoyed. His response is to stay involved and learn the new workflow rather than try to return to the old one [14:57–16:36](https://www.youtube.com/watch?v=9fubhllmsBU&t=897s).
- **Cheap building should increase ambition, not obscure value**: Fable changes some familiar good-fast-cheap trade-offs, but generating code is not the goal. The harder test is whether repeated experiments create real value while making people more productive without consuming more of their lives [16:36–18:43](https://www.youtube.com/watch?v=9fubhllmsBU&t=996s).

Full video: <https://www.youtube.com/watch?v=9fubhllmsBU>
