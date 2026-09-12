---
title: "Sub-Agents & Sonnet"
resourceId: 1
series: "raising-an-agent"
episode: 6
date: "2025-05-29"
---

Episode 6 of the "Raising an Agent" series explains how Claude Sonnet 4 changed the size of tasks Amp could take on, why sub-agents became more useful, and how the team thinks about background agents and practical feedback loops.

### Key Points Covered

- **Amp opens up with an opinionated product philosophy**: The episode starts with the waitlist opening and a reminder that Amp is intentionally simple: no model selector, no artificial token ceilings, and a focus on quality over configurability [03:31–06:25](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=211s).

- **Sonnet 4 raises the task-size ceiling**: The hosts report attempting larger end-to-end features in the Amp repo. Thorsten's subagent-progress UI mostly worked, but he still had to correct a missing frontend connection [07:28–11:43](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=448s). He also describes letting the agent draft an implementation, then exploring and hand-editing the code to understand its constraints before delegating more work [00:58–02:42](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=58s).

- **Subagents keep repeated work out of the main context**: Sonnet 4 is more eager to use task tools. In Thorsten's example, it divides frontmatter edits across four agents. Each has its own context window, so failed edits and retries do not fill the parent conversation [11:43–14:44](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=703s).

- **Model providers are aiming at different agent philosophies**: The hosts compare Anthropic's practical coding-agent behavior with models that feel more optimized for one-shot app generation. The useful agent is not just the smartest model, but the model whose habits fit the workflow [16:36–22:16](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=996s).

- **Background agents may work best through CI**: The team is skeptical that every background agent needs a full cloud IDE or VM. Their counter-hypothesis is that many background agents should run against CI-style feedback loops: submit work, let deterministic checks fail, and feed the results back [22:16–30:52](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=1336s).

- **Summaries and citations become interface details**: Sonnet 4's more verbose summaries are sometimes noisy, but they also make clickable citations and end-of-thread summaries more useful for understanding what happened [30:52–32:55](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=1852s).

- **Practical tips make apps easier for agents to verify**: The episode closes with concrete workflow advice: use Playwright MCP and screenshots, create Storybook-style component pages, add local auth bypasses, and let agents generate seed data for UI states [32:55–34:57](https://www.youtube.com/watch?v=HVihMH5j8KQ&t=1975s).

Full video: <https://www.youtube.com/watch?v=HVihMH5j8KQ>

Episode page: <https://ampcode.com/podcast/episode-6>
