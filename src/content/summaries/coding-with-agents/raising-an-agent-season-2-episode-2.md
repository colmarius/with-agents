---
title: "Orbs and Jellyware"
resourceId: 20
series: "raising-an-agent-season-2"
episode: 2
date: "2026-08-11"
---

Quinn Slack and Thorsten Ball describe Amp's adoption of isolated remote environments. They discuss agent verification, narrowly scoped production feedback, and rapid changes that retain quality.

### Key Points Covered

- **Orb adoption depended on a complete workflow, not remote compute alone**: Amp's team moved more work off local machines after several changes reduced the remaining friction. These included Portals, OIDC, multiplayer, agent communication, and improved reliability. The hosts present the shift as a recent team experience rather than a universal result [01:00]-[06:50].
- **Isolation can make agent permissions narrower and execution freer**: The episode contrasts read-only cloud access in an orb with broad credentials on a developer laptop. Inside an ephemeral environment, agents can also install tools and run version matrices. They do so without polluting or contending with a personal workstation [06:50]-[10:30].
- **Removing the last startup friction changes which work gets attempted**: The hosts say local worktrees already allowed parallelism. But independent environments start quickly, consume no laptop resources, and pause when idle. That made exhaustive or exploratory work easier to launch without leaving checkout state to clean up [10:30]-[13:17].
- **Long agent runs should buy stronger evidence**: Their verification pattern asks agents to exercise old and current CLI versions, platforms, web surfaces, SDK paths, runners, and account types. Agents also produce demo videos and rerun end-to-end checks after small changes. The reviewer can then inspect a short artifact backed by much longer execution [13:17]-[18:54].
- **Production feedback requires staged authority**: In one attachment-authentication migration, Quinn describes starting with warning-only logs and monitoring categories of failures. He also describes incrementally enabling enforcement, using read-only OIDC access, and enabling multiplayer so teammates could intervene. The process retained rollback. The example is explicitly described as bounded but still dangerous [18:54]-[22:40].
- **Shared threads turn agent work into a team surface**: Multiplayer, thread-to-thread messaging, and shared artifacts let teammates inspect, redirect, or build on remote work. They no longer have to treat each agent as a private single-player tool [21:43]-[23:42].
- **Design work can use the same evidence loop**: The team asks agents for multiple UI variants in an interactive Portal. It records high-frame-rate videos so an agent can inspect motion frame by frame. The point is not that a video proves every property; it makes visual behavior cheap to inspect and iterate [23:42]-[26:38].
- **Human review moves toward risk, invariants, and architecture**: The hosts still inspect diffs or changed-file boundaries for red flags and wrong abstractions. They argue that solid foundations and documented invariants let agents move faster at the edges without removing human judgment from consequential design choices [26:38]-[35:48].
- **Clear intent remains the scarce input**: Dictation reduces the cost of giving an agent a fuller brief. But the hosts reject vague prompts such as “fix the database.” Faster input does not remove the need to explain the desired outcome and where the agent should find ground truth [35:48]-[38:47].
- **“Jellyware” means malleability without abandoning the quality bar**: Thorsten uses the term for software cheap enough to reshape or repair. This malleability lets teams reconsider admin interfaces, backlogs, and release processes. The hosts also acknowledge that fast generation still depends on product taste, maintained foundations, and rapid feedback. It also depends on a culture that fixes defects rather than merely shipping more output [38:47]-[49:28].
- **Simple primitives can support durable operations**: The episode closes with examples of schedules that poll logs or queues and webhooks that receive external callbacks. Other examples include Portals that expose running services and runners that connect remote threads to platform-specific machines [49:28]-[54:59].

Full video: <https://www.youtube.com/watch?v=FfCCEZ00RFw>

Episode page: <https://ampcode.com/podcast/season-02/episode-02>
