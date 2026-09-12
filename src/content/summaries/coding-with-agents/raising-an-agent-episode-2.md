---
title: "No Token Limits"
resourceId: 1
series: "raising-an-agent"
episode: 2
date: "2025-03-13"
---

Quinn Slack and Thorsten Ball discuss a trade-off in their early coding-agent prototype: letting the model keep trying after errors costs more tokens, but can spare the developer from taking over. Their examples also show where autonomy needs human intervention—especially architecture and tests that pass without checking the intended behavior.

### The Power and Pitfalls of the Agent

- **A first draft lowers the barrier to starting**: Thorsten prefers correcting an agent's draft to facing a blank page. Writing a wish list lets him start a feature without first preparing to write every line himself [00:47–02:44](https://www.youtube.com/watch?v=4N814ziAn4o&t=47s).

- **Local edits and architectural changes need different supervision**: Thorsten reports good results when a Svelte component keeps styling, logic, and markup together. A VS Code command crossing editor, extension, and webview boundaries went wrong when the agent tried to locate the editor through a DOM query rather than an appropriate API [02:44–04:50](https://www.youtube.com/watch?v=4N814ziAn4o&t=164s).

- **A reviewed handoff can restart a failing approach**: Thorsten asked the agent to record its findings and mistakes in `task.md`, then gave a fresh agent that file and the branch diff. It proposed seven changes and implemented them. He reports that the result worked, but says he had not yet reviewed the code; simplification was still the agent's reported result [04:50–06:57](https://www.youtube.com/watch?v=4N814ziAn4o&t=290s).

- **Check that tests can detect the failure they target**: Quinn describes a test that mocked the very behavior it was meant to test. Thorsten recounts commenting out relevant implementation code and finding that the generated tests still passed; that failure prompted a simpler testing approach [07:44–09:50](https://www.youtube.com/watch?v=4N814ziAn4o&t=464s).

### No Token Limit and Cost

- **Retries are part of the product**: Instead of handing a failed file edit back to the user, the prototype sends the error to the model so it can choose another approach. The hosts argue that tightly limiting requests or tokens would interrupt this self-correcting loop [11:49–13:42](https://www.youtube.com/watch?v=4N814ziAn4o&t=709s).

- **Judge cost against developer time**: The hosts argue that a few dollars of inference can be worthwhile if it saves expensive engineering time. They predict usage-based pricing will suit this workflow better than flat-rate subscriptions; this is their commercial argument, not a measured return on investment [09:50–12:54](https://www.youtube.com/watch?v=4N814ziAn4o&t=590s).

### Parallel Agents and Future Trajectory

- **Parallel conversations still share filesystem hazards**: The prototype can run several agents in separate tabs, and Quinn scopes them to different directories through prompts. Thorsten wants separate Git worktrees because one agent's edits can break another agent's build. Concurrent threads are already implemented; isolated checkouts are the proposed next step [16:35–18:23](https://www.youtube.com/watch?v=4N814ziAn4o&t=995s), [20:15–21:18](https://www.youtube.com/watch?v=4N814ziAn4o&t=1215s).

- **A small working example suggests a larger workflow**: Thorsten gave the agent an email pointing out outdated employment information on his website, and it found and changed the relevant content. He then proposes an email-to-website bot that opens a PR, sends a screenshot, and merges after human approval. The bot is a proposed extension of that example, not a demonstrated end-to-end service [21:18–23:52](https://www.youtube.com/watch?v=4N814ziAn4o&t=1278s).

Their closing goal is shared company setup: configure repository navigation, tests, and browser feedback once so every developer benefits, with a review agent as an additional safety net. Their “AI intern” analogy describes that shared preparation, not a specified model-training method [26:52–28:50](https://www.youtube.com/watch?v=4N814ziAn4o&t=1612s).

Full video: <https://www.youtube.com/watch?v=4N814ziAn4o>

Episode page: <https://ampcode.com/podcast/episode-2>
