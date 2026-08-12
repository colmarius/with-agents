---
title: "Orbs and Jellyware"
resourceId: 20
series: "raising-an-agent-season-2"
episode: 2
date: "2026-08-11"
---

Quinn Slack and Thorsten Ball describe what changed after Amp's team adopted isolated remote environments for daily work: agents can spend more time proving behavior, use narrowly scoped production feedback, and change software quickly without treating quality as optional.

### Key Points Covered

- **Orb adoption depended on a complete workflow, not remote compute alone**: Amp's team moved more work off local machines after Portals, OIDC, multiplayer, agent communication, and improved reliability reduced the remaining friction. The hosts present the shift as a recent team experience rather than a universal result [01:00]-[06:50].
- **Isolation can make agent permissions narrower and execution freer**: The episode contrasts read-only cloud access in an orb with broad credentials on a developer laptop. Inside an ephemeral environment, agents can also install tools and run version matrices without polluting or contending with a personal workstation [06:50]-[10:30].
- **Removing the last startup friction changes which work gets attempted**: The hosts say local worktrees already allowed parallelism, but independent environments that start quickly, consume no laptop resources, and pause when idle made it easier to launch exhaustive or exploratory work without leaving checkout state to clean up [10:30]-[13:17].
- **Long agent runs should buy stronger evidence**: Their verification pattern asks agents to exercise old and current CLI versions, platforms, web surfaces, SDK paths, runners, and account types; produce demo videos; and rerun end-to-end checks after small changes. The reviewer can then inspect a short artifact backed by much longer execution [13:17]-[18:54].
- **Production feedback requires staged authority**: In one attachment-authentication migration, Quinn describes starting with warning-only logs, monitoring categories of failures, incrementally enabling enforcement, using read-only OIDC access, enabling multiplayer so teammates could intervene, and retaining rollback. The example is explicitly described as bounded but still dangerous [18:54]-[22:40].
- **Shared threads turn agent work into a team surface**: Multiplayer, thread-to-thread messaging, and shared artifacts let teammates inspect, redirect, or build on remote work instead of treating each agent as a private single-player tool [21:43]-[23:42].
- **Design work can use the same evidence loop**: The team asks agents for multiple UI variants in an interactive Portal and records high-frame-rate videos so an agent can inspect motion frame by frame. The point is not that a video proves every property; it makes visual behavior cheap to inspect and iterate [23:42]-[26:38].
- **Human review moves toward risk, invariants, and architecture**: The hosts still inspect diffs or changed-file boundaries for red flags and wrong abstractions. They argue that solid foundations and documented invariants let agents move faster at the edges without removing human judgment from consequential design choices [26:38]-[35:48].
- **Clear intent remains the scarce input**: Dictation reduces the cost of giving an agent a fuller brief, but the hosts reject vague prompts such as “fix the database.” Faster input does not remove the need to explain the desired outcome and where the agent should find ground truth [35:48]-[38:47].
- **“Jellyware” means malleability without abandoning the quality bar**: Thorsten uses the term for software that is cheap enough to reshape or repair that teams can reconsider admin interfaces, backlogs, and release processes. The hosts also acknowledge that fast generation still depends on product taste, maintained foundations, rapid feedback, and a culture that fixes defects rather than merely shipping more output [38:47]-[49:28].
- **Simple primitives can support durable operations**: The episode closes with examples of schedules that poll logs or queues, webhooks that receive external callbacks, Portals that expose running services, and runners that connect remote threads to platform-specific machines [49:28]-[54:59].

Full video: <https://www.youtube.com/watch?v=FfCCEZ00RFw>

Episode page: <https://ampcode.com/podcast/season-02/episode-02>
