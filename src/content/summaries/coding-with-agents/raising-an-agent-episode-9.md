---
title: "The Assistant Is Dead, Long Live the Factory"
resourceId: 1
series: "raising-an-agent"
episode: 9
date: "2026-01-22"
---

Episode 9 of "Raising an Agent" returns after a four-month break with a thesis: coding agents are moving from interactive assistants into an agent-native "factory" for software work.

### Key Points Covered

- **Frontier models changed the baseline**: Gemini 3 and Opus 4.5 reset the hosts' expectations for agentic coding. The episode argues that a smarter model can be faster and cheaper in practice when measured by completed work, not raw response time [01:08]-[03:06].
- **Agents writing code is becoming assumed**: The hosts push back on claims that agents "cannot" write real code, arguing that skepticism often lags the frontier by months and that most code will likely be agent-written even if humans still intervene for important exceptions [03:40]-[05:55].
- **The leash can be longer**: Instead of treating an agent as a one-on-one assistant that needs constant steering, the episode frames newer models as workers that can fetch context, test their own output, and keep going when the task is well-scoped [07:30]-[09:45].
- **Codebases need to become agent-native**: The central practical question is whether the agent knows how to use the codebase: how to run it, verify changes, authenticate, click around, inspect output, and recover when feedback is missing [10:18]-[13:03].
- **Feedback loops are product surface area**: Thorsten describes adding screenshot capture to a terminal emulator and a CLI subcommand for Amp TUI data so an agent could verify visual or UI work without relying on slow human screenshots or brittle tmux control [15:10]-[17:24].
- **The development factory changes team process**: If agents are cheap to launch, the old flow of writing tickets, waiting for sprint planning, and reviewing expensive human-authored pull requests starts to look like a bottleneck. The hosts expect more immediate investigation, more parallel variants, and more trust in senior engineers reviewing agent-produced work [25:29]-[31:43].
- **Amp is optimizing for frontier users**: The team explains why model selectors, cheap-model optimization, and subscription-style token bundles would slow Amp down or select for the wrong users when the product needs to keep changing with the frontier [20:36]-[24:56], [32:18]-[37:40].
- **Deep mode is teased as the next factory primitive**: The episode closes by hinting at a mode for longer-running work where the agent goes off, researches, and returns with a result instead of asking the human for each next step [38:43]-[40:38].

Full video: <https://www.youtube.com/watch?v=2wjnV6F2arc>

Episode page: <https://ampcode.com/podcast/episode-9>
