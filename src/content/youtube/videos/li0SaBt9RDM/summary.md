---
title: "The AI Skill I Rely On Daily — Priscila Andre de Oliveira, Sentry"
videoId: li0SaBt9RDM
sourceUrl: "https://www.youtube.com/watch?v=li0SaBt9RDM"
publishedAt: "2026-05-27T17:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Priscila Andre de Oliveira, a senior software engineer at Sentry, describes using coding agents in a large, frequently changing codebase where quality and comprehension still matter. Her review of 116 agent sessions classified 67% of her usage as comprehension and 2% as code generation, leading her to encode recurring investigation prompts in a local skill called “catch me up” ([00:00:07]-[00:02:36], [00:09:36]-[00:10:27]).

The skill offers six exploration modes and returns visual structures intended to align her mental model before planning or implementation. Andre de Oliveira demonstrates it on an unfamiliar testing repository and says she also uses it to gain enough context for pull-request review; her broader argument is that an agent's research must itself be understood and steered ([00:10:27]-[00:15:26]).

## Key Ideas

- Andre de Oliveira frames her work as managing several agents and says her agent-assisted contributions include bug fixes, features, refactors, and changes across repositories ([00:00:54]-[00:02:36]).
- She describes Sentry as a 15-year-old observability codebase serving about 100,000 organizations, with roughly 100 pull requests merged daily and components, feature flags, and lint rules changing continuously ([00:02:36]-[00:03:40], [00:05:37]-[00:06:33]).
- Sentry's internal agent projects include usage tracking, code review, Slack-thread-to-PR automation, and an AI SDK testing repository in which Andre de Oliveira was asked to prompt rather than write code directly ([00:03:40]-[00:05:37]).
- She says agents make investigation faster by tracing regressions and product decisions that previously required manual Git history work or waiting for colleagues in other time zones ([00:08:32]-[00:09:36]).
- Her analysis of 116 sessions grouped prompts into comprehension, modification, process, review, generation, and other; 67% were comprehension and 2% were generation ([00:09:36]).
- The local “catch me up” Markdown skill structures repeated comprehension requests into architecture, convention, feature-trace, syntax, testing, and history modes, with visual summaries of repository structure and flow ([00:10:27]-[00:11:25]).
- In the demonstration, the skill investigates an unfamiliar integration-test repository and distinguishes intercepting real Sentry envelopes from simulating them; Andre de Oliveira also uses the skill to build context before reviewing colleagues' pull requests ([00:11:25]-[00:13:23]).
- She adds an explicit understanding step between agent research and planning so a developer can detect a wrong direction, request more exploration, and avoid shipping code they do not understand ([00:13:23]-[00:15:26]).

## Practical Implications

- Sample and classify actual agent sessions before deciding where an AI workflow saves time; repeated comprehension requests may justify a reusable repository-investigation skill ([00:09:36]-[00:10:27]).
- Give comprehension skills named exploration modes and reviewable visual outputs so users can choose the question they are asking instead of requesting an undifferentiated repository summary ([00:10:27]-[00:12:29]).
- Require the developer to understand and steer agent research before accepting a plan or implementation, especially in a production codebase with frequent cross-team changes ([00:13:23]-[00:15:26]).

## Questions and Tensions

- The 67% comprehension and 2% generation figures describe Andre de Oliveira's own 116-session sample; the talk does not provide the classification procedure, sampling window, or comparison with other engineers ([00:09:36]).
- The demonstration was run in advance to avoid live issues, and the talk shows one useful repository explanation rather than an independent check of the skill's accuracy across its six modes ([00:11:25]-[00:13:23]).
- Andre de Oliveira presents agents as both a way to accelerate understanding and a source that must be understood and steered, leaving human validation central even when most direct coding is delegated ([00:07:35]-[00:09:36], [00:13:23]-[00:15:26]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=li0SaBt9RDM)
- [transcript.md](./transcript.md)
