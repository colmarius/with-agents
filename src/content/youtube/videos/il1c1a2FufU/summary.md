---
title: "Full Workshop: Setting Yourself Up for Success —Jason Liu, OpenAI Codex"
videoId: il1c1a2FufU
sourceUrl: "https://www.youtube.com/watch?v=il1c1a2FufU"
publishedAt: "2026-07-24T15:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Jason Liu, who identifies himself as working at OpenAI, leads a Codex workshop on bringing context into agents, organizing long-running work, and letting agents act through plugins, browser and computer use, and coordinated threads. He presents pinned threads, memory, skills, and recurring wake-ups as parts of one evolving operating model rather than isolated prompting tricks ([00:00:01]-[00:07:11], [00:33:52]-[00:41:08]).

Audience members contribute questions throughout the workshop. A participant whom Liu identifies only as Charlie gives a brief answer about model fallibility and evolving sandbox boundaries; the captured source does not establish Charlie's full name or affiliation ([00:21:51]-[00:33:52]).

## Key Ideas

- Liu argues that improved compaction makes long-lived, pinned project threads practical and allows them to delegate to subagents instead of requiring a fresh session for each feature or review ([00:03:02]-[00:07:11]).
- He recommends combining high-bandwidth voice input with skills, plugins, memory, browser access, and computer use so an agent can recover context and take actions across work systems ([00:08:04]-[00:17:05]).
- Liu treats personal skills as artifacts that can improve through correction and later become team plugins, while acknowledging that workflows spanning live connectors can be difficult to evaluate reproducibly ([00:14:11]-[00:14:59], [00:23:42]-[00:24:44]).
- He describes heartbeats as scheduled messages that wake an existing thread, loops as recurring monitored work, and goals as verification conditions that let an agent continue until an observable result is reached ([00:34:49]-[00:41:08]).
- Liu presents monitor threads that create and coordinate visible downstream threads as a step beyond isolated background subagents, because people can inspect changing workstreams in the sidebar ([00:55:53]-[00:58:43], [01:06:57]-[01:08:54]).
- He advises using lower or medium reasoning for routine work rather than assuming maximum reasoning always produces the best result, and pairing recurring jobs with explicit cadence and stopping criteria ([01:11:47]-[01:13:46]).

## Practical Implications

- Give each durable workstream a named, pinned thread and persistent project context, then let that thread delegate narrower tasks rather than manually restarting the whole context for every operation ([00:06:08]-[00:07:11], [00:57:39]-[00:58:43]).
- Keep agent-maintained memory in a reviewable Git repository when possible; Liu uses `git diff` to inspect what the model changed before relying on those updates ([00:21:51]-[00:22:41]).
- Encode repeatable organizational workflows as skills, but promote them to shared plugins only after repeated use has exposed and corrected routing or context mistakes ([00:14:11]-[00:14:59], [00:23:42]-[00:24:44]).
- For autonomous loops, define a verifier, a wake-up cadence, and a stopping condition; reduce reasoning effort for simple actions instead of spending maximum compute by default ([00:40:06]-[00:41:08], [01:11:47]-[01:13:46]).

## Questions and Tensions

- Liu's personal workflows benefit from effectively unlimited tokens, and he says he often cannot snapshot connected systems such as Slack for evaluation, limiting how directly the examples generalize to constrained or reproducible environments ([00:23:42]-[00:26:53]).
- Broad computer access makes agents useful but also lets a determined model route around connector restrictions through the GUI; Liu recommends permissions and project instructions, while Charlie emphasizes that fallible models still require evolving computer- and organization-level sandbox boundaries ([00:29:54]-[00:33:52], [00:52:40]-[00:54:49]).
- Liu reports good results from compaction and memory but does not establish how project-memory leakage should be measured or prevented beyond project-local instructions ([01:01:36]-[01:04:29]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=il1c1a2FufU)
- [transcript.md](./transcript.md)
