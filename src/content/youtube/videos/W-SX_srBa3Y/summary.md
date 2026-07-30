---
title: "Let's Talk About FOMAT: Fear of Missing Agent Time — Michael Richman, Cmd+Ctrl"
videoId: W-SX_srBa3Y
sourceUrl: "https://www.youtube.com/watch?v=W-SX_srBa3Y"
publishedAt: "2026-05-24T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Michael Richman, who says he leads engineering teams and co-leads AI coding-tools strategy at Bitly, presents Command and Control, identified as Cmd+Ctrl in the source title. He defines “fear of missing agent time” as the delay created when an agent needs input or finishes while its operator is away from the development machine ([00:00:07]-[00:02:57]).

Command and Control brings sessions from multiple coding tools and machines into mobile, web, and watch interfaces for notification, interaction, launch, and organization. Richman frames this as a response to agents that still need unpredictable supervision, while also arguing that remote reachability should make room for breaks rather than require constant attention ([00:03:47]-[00:15:00]).

## Key Ideas

- Richman says current coding agents are neither consistently low-touch nor highly autonomous: a task may stop after two minutes for input even when the operator expects it to run much longer ([00:00:07]-[00:02:05]).
- He built Command and Control because his work spans multiple agent sessions in terminals and IDEs, and he says he loses track of state and required attention beyond two or three concurrent sessions ([00:02:57]-[00:04:41]).
- The first demonstration subscribes a Claude Code session to push notifications, receives completion on a phone, sends a response there, and resumes the same conversation in the terminal ([00:04:41]-[00:06:48]).
- A second demonstration starts a configured agent from the mobile interface and later resumes that same session in the CLI; Richman says he sometimes starts sessions from bed before continuing them elsewhere ([00:07:39]-[00:08:35]).
- Sessions can be grouped by notification subscription, “on my radar,” recent activity, and the remainder, while an overview dashboard summarizes recent messages ([00:09:38]-[00:10:27]).
- Richman describes a per-agent daemon that reports lifecycle changes to a control plane, which aggregates sessions across tools and machines for the user interface; he says the daemon layer is open source ([00:11:21]-[00:12:14]).
- He presents “agent choreography”—moving among parallel sessions to unblock or redirect them—as a new form of development flow ([00:13:01]-[00:14:01]).
- Richman also warns that supervising many sessions creates high cognitive load and argues that time away remains valuable because breaks can produce useful ideas ([00:14:01]-[00:15:00]).

## Practical Implications

- Notify operators when a session blocks or completes instead of relying on periodic manual checks, especially as task duration becomes less predictable ([00:00:07]-[00:02:05], [00:05:44]-[00:06:48]).
- Give each session a visible attention state and recent-message summary so operators can distinguish work that needs intervention from work that is merely active or historical ([00:09:38]-[00:10:27]).
- Use an adapter or daemon boundary to normalize lifecycle events across agent tools while keeping sessions on their original development machines or cloud VMs ([00:11:21]-[00:12:14]).
- Treat remote access as a way to respond at intentional checkpoints, not as a requirement to monitor every session continuously ([00:13:01]-[00:15:00]).

## Questions and Tensions

- The demonstrations establish cross-device interaction for simple prompts, but the talk does not measure notification reliability, session-recovery behavior, or performance on long coding tasks ([00:04:41]-[00:10:27]).
- A control plane that can aggregate and interact with sessions across local and cloud machines creates authentication, authorization, and data-handling questions that the architecture segment does not address ([00:11:21]-[00:12:14]).
- Richman wants agents to remain reachable during breaks while also emphasizing the exhaustion of multi-agent supervision, leaving the boundary between useful interruption and restored attention to the operator ([00:13:01]-[00:15:00]).
- The talk presents Command and Control as one solution in an evolving category rather than comparing it systematically with the remote-agent tools Richman mentions ([00:02:57]-[00:04:41]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=W-SX_srBa3Y)
- [transcript.md](./transcript.md)
