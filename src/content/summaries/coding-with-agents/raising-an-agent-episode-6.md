---
title: "Sub-Agents & Sonnet"
resourceId: 1
series: "raising-an-agent"
episode: 6
date: "2025-05-29"
---

Episode 6 of the "Raising an Agent" series explains how Claude Sonnet 4 changed the size of tasks Amp could take on, why sub-agents became more useful, and how the team thinks about background agents and practical feedback loops.

### Key Points Covered

- **Amp opens up with an opinionated product philosophy**: The episode starts with the waitlist opening and a reminder that Amp is intentionally simple: no model selector, no artificial token ceilings, and a focus on quality over configurability [03:31]-[06:25].

- **Sonnet 4 raises the task-size ceiling**: Sonnet 4 lets the team attempt larger end-to-end features in the Amp repo, though Thorsten still describes a hybrid workflow of reviewing, hand-editing, and moving guardrails as the agent works [07:28]-[10:39].

- **Sub-agents preserve context and isolate risk**: Sonnet 4 is more eager to use task tools. Sub-agents help with repeated or self-contained work because each one gets a separate context window; if one gets lost, it does not pollute the parent thread [11:43]-[14:44].

- **Model providers are aiming at different agent philosophies**: The hosts compare Anthropic's practical coding-agent behavior with models that feel more optimized for one-shot app generation. The useful agent is not just the smartest model, but the model whose habits fit the workflow [16:36]-[22:16].

- **Background agents may work best through CI**: The team is skeptical that every background agent needs a full cloud IDE or VM. Their counter-hypothesis is that many background agents should run against CI-style feedback loops: submit work, let deterministic checks fail, and feed the results back [22:16]-[30:52].

- **Summaries and citations become interface details**: Sonnet 4's more verbose summaries are sometimes noisy, but they also make clickable citations and end-of-thread summaries more useful for understanding what happened [30:52]-[32:55].

- **Practical tips make apps easier for agents to verify**: The episode closes with concrete workflow advice: use Playwright MCP and screenshots, create Storybook-style component pages, add local auth bypasses, and let agents generate seed data for UI states [32:55]-[34:57].

Full video: <https://www.youtube.com/watch?v=HVihMH5j8KQ>

Episode page: <https://ampcode.com/podcast/episode-6>
