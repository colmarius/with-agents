---
title: "Full Walkthrough: Workflow for AI Coding — Matt Pocock"
videoId: -QFHIoCo-Ko
sourceUrl: "https://www.youtube.com/watch?v=-QFHIoCo-Ko"
publishedAt: "2026-04-24T15:15:38Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Matt Pocock, named in the source title, introduces himself as a teacher and later references his AI Hero website and Course Video Manager repository; the source supplies no employer affiliation. In this workshop he develops an AI-coding workflow from idea alignment through a PRD, traceable Kanban issues, AFK implementation, automated feedback, manual QA, code review, and parallel branch integration. Anonymous attendees supply questions and exercise feedback ([00:00:07]-[00:01:07], [00:09:06], [00:33:20]-[00:34:15]).

Pocock's central position is that coding agents still benefit from established software-engineering practices: bounded tasks, vertical slices, testable architecture, rapid feedback, explicit human decisions, and deliberate review. He rejects treating specifications as a substitute for understanding and shaping the codebase ([00:04:02]-[00:06:38], [00:12:37]-[00:16:58], [01:34:04]-[01:35:54]).

## Key Ideas

- Pocock describes a model's early context as a smart zone and later context as a dumb zone, recommends sizing tasks to fit the former, and prefers clearing to a repeatable base context over repeatedly compacting a long session ([00:03:00]-[00:10:56]).
- His Grill Me skill asks one recommended-answer question at a time so the human and agent can build a shared design concept before producing a planning artifact; isolated sub-agents can explore without filling the parent context ([00:11:45]-[00:20:39]).
- He turns the resulting conversation into a PRD as a destination document, then reviews proposed module boundaries before using the document to derive implementation work ([00:28:53]-[00:35:09]).
- Instead of a sequential multi-phase plan, he prefers a Kanban graph of independently grabbable issues whose blocking relationships expose parallel work ([00:39:38]-[00:41:37], [00:49:51]-[00:52:28]).
- Tracer-bullet vertical slices cross database, service, and interface layers so each early increment can receive integrated feedback; he rejects an initial service-only issue as too horizontal ([00:41:37]-[00:46:58]).
- The AFK implementation loop receives local issue files and recent commits, selects one eligible task, uses TDD, runs feedback loops, and commits a reviewable increment; Pocock recommends running it interactively before repeating it unattended ([00:53:32]-[00:57:48]).
- He says implementation can move out of the human loop, but idea alignment, team decisions, manual QA, and code review remain human responsibilities; implementation speed may increase rather than remove review work ([00:58:47]-[01:03:27], [01:12:21]-[01:13:21]).
- A fresh-context automated reviewer can inspect an implementation before manual QA, while red-green-refactor TDD and repository tests provide feedback during implementation ([01:04:23]-[01:10:32]).
- Pocock uses John Ousterhout's deep-module framing to argue for small interfaces around substantial behavior, with tests at those boundaries and humans retaining the module map while delegating internals ([01:14:10]-[01:22:13]).
- He distinguishes pull-based guidance for implementers from pushed coding standards for reviewers, then shows a Sandcastle flow that plans parallel issues, creates sandboxed worktrees, runs implementers and reviewers, and passes branches to a merger agent ([01:28:02]-[01:32:23]).

## Practical Implications

- Use human questioning to resolve product and implementation decisions before asking an agent to summarize them into a destination document ([00:14:14]-[00:20:39], [00:28:53]-[00:31:19]).
- Break delivery into dependency-aware vertical slices that produce end-to-end feedback, rather than completing every layer before testing integration ([00:39:38]-[00:46:58]).
- Start an autonomous loop as a visible single-task run, include explicit completion behavior and verification, and preserve issue and commit state across fresh contexts ([00:53:32]-[00:57:48]).
- Give automated review a fresh context, but still inspect tests, code, and running behavior manually; the workshop's first generated increment passed automated checks before exposing a missing-table failure in QA ([01:05:22]-[01:12:21]).
- Design testable module interfaces and keep their architectural relationships in human view even when agents implement internal details ([01:14:10]-[01:22:13]).
- Treat implementation, review, merge, and team acceptance as separate gates when parallel agents work in isolated branches ([01:29:42]-[01:35:54]).

## Questions and Tensions

- The smart-zone threshold and claims about context degradation are workshop heuristics without model comparisons, task definitions, measurements, or cited evaluation results in the source ([00:03:00]-[00:10:56]).
- Pocock says he does not read the generated PRD because he trusts model summarization, but later describes the pre-implementation artifacts as human reviewed; the exact review boundary is therefore inconsistent ([00:35:09], [00:52:28]).
- The demonstration's generated increment passes tests and type checks before manual QA finds a missing database table, illustrating that its automated feedback suite did not cover the shown end-to-end path ([01:08:57]-[01:12:21]).
- Pocock recommends TDD and deep modules from his experience, but the workshop does not compare them with alternative test structures or report defect, maintenance, speed, or review outcomes across projects ([01:06:13]-[01:10:32], [01:14:10]-[01:22:13]).
- Sandcastle's parallel planner, implementers, reviewers, and merger are narrated rather than evaluated; merge correctness, branch conflicts, sandbox isolation, costs, and reviewer reliability remain open ([01:29:42]-[01:32:23]).
- Several auto-caption fragments remain unresolved, including the remote-room name, an audience question about TypeScript, and parts of the live UI narration; no summary claim depends on those fragments ([00:02:01], [00:10:56], [00:36:00]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=-QFHIoCo-Ko)
- [transcript.md](./transcript.md)
