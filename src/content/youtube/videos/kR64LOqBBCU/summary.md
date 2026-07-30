---
title: "AgentCraft: Putting the Orc in Orchestration — Ido Salomon"
videoId: kR64LOqBBCU
sourceUrl: "https://www.youtube.com/watch?v=kR64LOqBBCU"
publishedAt: "2026-04-25T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Ido Salomon, named in the source title, introduces himself as the creator of AgentCraft and demonstrates that experimental product. He presents game-inspired controls for supervising coding-agent sessions, then extends the interface from individual visibility and intervention to autonomous campaigns and shared human-agent workspaces ([00:00:07]-[00:01:54], [00:04:31]-[00:10:01]).

Salomon's premise is that starting many agents is easier than directing them. AgentCraft therefore maps sessions and repository activity into a real-time-strategy-style environment intended to expose work, collisions, lineage, requests for attention, review evidence, and collaboration state ([00:00:54]-[00:04:31], [00:07:10]-[00:08:59]).

## Key Ideas

- Salomon frames human orchestration—not agent startup—as the bottleneck when one operator tries to manage many concurrent coding sessions, and he borrows unit-management ideas from games for the interface ([00:00:54]).
- Each displayed unit represents a detected or newly spawned live session from coding agents such as Cursor, Claude Code, Codex, or OpenClaw, with prompting available through the same surface ([00:01:54]).
- Buildings expose functions such as skills, plugins, a terminal, and Git, while the map projects directories and files into rooms so an operator can inspect current work and attribute changes to agents ([00:02:44]-[00:03:33]).
- A heat map is intended to reveal or prevent file collisions, and real-time-strategy controls let the operator cycle through sessions that need plan approval or answers ([00:04:31]).
- Agent-proposed quests reduce the need for the human to invent every task, while campaigns place decomposed work in a container under another orchestrator and return bundles for review ([00:05:25]-[00:07:10]).
- Review bundles include tasks, rationale, diffs, screenshots, and videos; Salomon suggests generating several candidate implementations and selecting the preferred result ([00:07:10]).
- Shared workspaces expose teammates' sessions, support handing work from one person's agent to another, and add chat and file-activity awareness among people and agents ([00:08:10]-[00:08:59]).
- Salomon closes by labeling AgentCraft new and experimental and asks users to test it and provide feedback ([00:10:01]-[00:10:55]).

## Practical Implications

- Treat attention requests, file ownership, collision risk, lineage, and review evidence as explicit interface state when one person supervises several coding agents ([00:03:33]-[00:04:31]).
- Separate interactive sessions from containerized campaigns, and return autonomous work through a reviewable bundle rather than only a final code state ([00:06:13]-[00:07:10]).
- Preserve human-to-human context alongside agent activity when work passes between teammates or their agents ([00:08:10]-[00:08:59]).

## Questions and Tensions

- The talk demonstrates a product interface but provides no controlled evidence that the game metaphor raises throughput, reduces cognitive load, prevents collisions, or improves review quality ([00:00:54]-[00:04:31]).
- Campaigns are described as safe to leave alone because they run in a container, but the source does not detail isolation, credentials, network access, permissions, failure recovery, or merge boundaries ([00:06:13]).
- Generating ten implementations and choosing one from visual evidence may move effort from planning to review, but the talk does not measure cost, duplicate work, hidden defects, or how reviewers compare behavior beyond screenshots and videos ([00:07:10]).
- Shared visibility and cross-user prompting introduce access-control, privacy, conflicting-instruction, and repository-concurrency questions that the demonstration does not evaluate ([00:08:10]-[00:08:59]).
- The opening auto-captions render two additional project names as `MC I` and `MC apps`; the source artifacts do not resolve those spellings, so this summary does not normalize or attribute them ([00:00:07]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=kR64LOqBBCU)
- [transcript.md](./transcript.md)
