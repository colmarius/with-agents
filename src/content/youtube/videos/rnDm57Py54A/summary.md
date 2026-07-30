---
title: "Building your own software factory — Eric Zakariasson, Cursor"
videoId: rnDm57Py54A
sourceUrl: "https://www.youtube.com/watch?v=rnDm57Py54A"
publishedAt: "2026-04-28T18:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Eric Zakariasson, identified with Cursor in the source title, introduces himself as a Cursor engineer working across developer experience and product. He presents lessons from dogfooding Cursor while stressing that neither the product nor the company is yet a complete autonomous software factory; unnamed audience participants supply the extended Q&A ([00:00:14], [00:20:33]-[01:22:51]).

Zakariasson frames a software factory as a system of codebase patterns, guardrails, enabling tools, reproducible environments, verification, and feedback loops rather than a larger collection of prompts. As agents take longer asynchronous assignments, he shifts the human role toward specifying intent, scoping independent work, reviewing outcomes, preserving system knowledge, and retaining important security and product decisions ([00:04:51]-[00:10:32], [00:16:25]-[00:23:43], [00:30:43]-[00:32:41]).

## Key Ideas

- Using Dan Shapiro's autonomy stages, Zakariasson places pair programming, AI-generated implementation, managerial delegation, and a dark software factory on a progression in which humans provide progressively higher-level intent ([00:01:18]-[00:03:11]).
- He says repository locality, familiar startup and test conventions, and reusable implementation references make a codebase easier for agents to discover and extend consistently ([00:04:51]-[00:05:50]).
- His factory checklist combines restrictions—rules, hooks, tests, and sensitive-code boundaries—with enablers such as skills, MCP access, feature flags, runnable development environments, and external context ([00:05:50]-[00:09:39]).
- In a music-application example, Zakariasson uses `AGENTS.md`, startup scripts, Playwright tests, automated review, and computer-use recordings to give an agent both instructions and evidence-producing checks ([00:10:32]-[00:16:25]).
- He says asynchronous delegation requires front-loading context, learning model strengths through repeated use, isolating concurrent environments, and separating tasks that would otherwise create shared-state or merge conflicts ([00:16:25]-[00:21:37]).
- He treats observed failures as inputs to the factory: a schema mistake can become a rule, repeated design problems can motivate a design system, merged review comments can become learning material, and corrected transcripts can yield reusable memories or rules ([00:21:37]-[00:30:43]).
- Zakariasson's closing guidance is to state intent clearly, keep humans responsible for security, databases, payments, and authentication, preserve useful transcripts and artifacts, and improve the tools and guardrails available to agents ([00:30:43]-[00:32:41]).
- In Q&A, he expects more human architectural and system-design review; recommends trusted tests, invariant-focused security automation, and red-teaming for critical systems; and says team-level rules need collective governance rather than isolated personal factories ([00:33:39]-[00:40:24]).
- He describes Cursor practices in which Linear issues and Slack reports can trigger cloud agents, while warning that spawning an agent for every issue is expensive and that some critical areas may still require human-written or multiply reviewed code ([00:58:13]-[00:59:16], [01:08:56]-[01:10:55]).

## Practical Implications

- Make the development environment startable and the acceptance criteria executable before increasing task duration or agent count ([00:07:46]-[00:10:32]).
- Encode repeated failures and repository-specific departures from model defaults as reviewable rules, hooks, skills, tests, or reference implementations rather than repeatedly correcting them in chat ([00:05:50]-[00:07:46], [00:42:26]-[00:45:12]).
- Isolate concurrent work when databases, caches, or services can leak state across tasks, and account for the setup and compute cost of reproducible environments ([00:20:33]-[00:21:37]).
- Scope parallel work around mutation boundaries, preserve enough system knowledge to set intent, and aggregate outcomes before adding nested managers or larger fleets ([00:16:25]-[00:19:36], [00:23:43]-[00:24:47]).
- Keep high-consequence decisions and critical-system accountability with humans even when automated tests, specialist review agents, and observability reduce line-by-line inspection ([00:30:43]-[00:31:40], [00:38:24]-[00:40:24], [00:58:13]-[00:59:16]).

## Questions and Tensions

- Zakariasson says the complete factory does not yet exist, so the talk's throughput, consistency, and scaling claims are design guidance and Cursor experience rather than a demonstrated end-to-end autonomous production system ([00:00:14]-[00:04:03]).
- The dark-factory endpoint minimizes human visibility, while the operational guidance repeatedly depends on human intent, architecture, accountability, exception handling, and outcome review; the boundary between autonomy and oversight remains unsettled ([00:03:11], [00:16:25]-[00:23:43], [00:30:43]-[00:31:40]).
- Cursor's music app, cloud-agent videos, feature-flag automation, and code-owner examples illustrate workflows but do not establish comparative defect rates, security outcomes, total cost, or reliability at the claimed hundreds or thousands of agents ([00:10:32]-[00:16:25], [00:20:33]-[00:21:37], [00:27:42]-[00:29:38]).
- Zakariasson acknowledges that supervising agents creates context switching and that the factory's Markdown artifacts and aggregate control plane remain partly unsolved ([01:00:19]-[01:04:10]).
- Several live-demo and audience-caption fragments remain unresolved, including `produ direction`, `team whole`, `cdvoom`, and `selfages`; no summary claim depends on those readings ([00:24:47], [01:03:07], [01:13:03], [01:17:45]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=rnDm57Py54A)
- [transcript.md](./transcript.md)
