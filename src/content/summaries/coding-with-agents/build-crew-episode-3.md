---
title: "Future of Agentic Workflows"
resourceId: 3
series: "build-crew"
episode: 3
date: "2025-10-08"
---

Agents can do more than call a fixed menu of tools: they can write small programs to gather evidence, combine actions, and check their own changes. Graham McBain, Thorsten Ball, Camden, and community guest Mike explore that approach, then discuss what changes when work moves from an interactive coding session to a background agent.

### Small programs can close the feedback loop

* **Keep useful scripts independent of the agent.** Ball shows a JavaScript script that creates coupon codes through Lemon Squeezy's API. A thin Amp toolbox wrapper describes the script and exposes it as a tool; the underlying script remains ordinary, shareable code that can run without Amp [07:28–11:31](https://www.youtube.com/watch?v=VoZvTi27_Io&t=448s).
* **Let code combine actions.** The panel explores giving an agent a JavaScript or Lua execution tool instead of requiring a separate tool call for every operation. A script could loop over files and preserve variables across calls. Camden identifies a practical obstacle: resuming the conversation would also require restoring the execution environment's state. This is an experiment, not a finished design [15:32–20:30](https://www.youtube.com/watch?v=VoZvTi27_Io&t=932s).
* **Make debugging repeatable.** Camden shows an agent constructing a script to configure Amp, capture logs, clear them between attempts, and search the results. The panel values this iterative correction more than a model producing a plausible answer on its first attempt [22:38–26:34](https://www.youtube.com/watch?v=VoZvTi27_Io&t=1358s).
* **Choose checks that exercise the real behavior.** Mike describes testing an Elixir client against live model APIs during local development. In a separate Fly.io client experiment, integration tests started machines, inspected them, found bugs, and tore the machines down. His point is to give the agent direct feedback beyond unit tests; the example involved real infrastructure and credentials [01:05–02:02](https://www.youtube.com/watch?v=VoZvTi27_Io&t=65s), [44:14–53:52](https://www.youtube.com/watch?v=VoZvTi27_Io&t=2654s).

### Delegation changes the human's job

* **A background request needs a clearer intended result.** Mike contrasts interactive pair programming, where he discovers the solution alongside the agent, with asynchronous work that needs a well-defined output before dispatch. Ball similarly describes receiving drafts from a phone-triggered task and still having to check whether they work [27:36–34:29](https://www.youtube.com/watch?v=VoZvTi27_Io&t=1656s).
* **Use subagents with a specific purpose.** Mike prefers sequential implementation: each bounded assignment builds on the previous output. He reports context mix-ups with parallel work. Camden's contrasting “Swiss cheese” idea is a proposal that agents with different blind spots might correct one another, not a demonstrated guarantee of better answers [35:35–37:41](https://www.youtube.com/watch?v=VoZvTi27_Io&t=2135s), [44:14–46:02](https://www.youtube.com/watch?v=VoZvTi27_Io&t=2654s).
* **Memory needs selection, not just storage.** The panel says `AGENTS.md` helps but does not provide coworker-like continuity. The unresolved problem is deciding which facts should survive into future tasks without carrying irrelevant or misleading information along [19:36–22:38](https://www.youtube.com/watch?v=VoZvTi27_Io&t=1176s).

Mike closes by treating delegation as a leadership skill, drawing on the same experience he uses to guide human colleagues [57:50–59:40](https://www.youtube.com/watch?v=VoZvTi27_Io&t=3470s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=VoZvTi27_Io)

Build Crew: <https://buildcrew.team>
