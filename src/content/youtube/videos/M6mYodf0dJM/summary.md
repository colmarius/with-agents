---
title: "mattpocock/skills: A complete AI Coding workflow, end-to-end"
videoId: M6mYodf0dJM
sourceUrl: "https://www.youtube.com/watch?v=M6mYodf0dJM"
publishedAt: "2026-07-16T09:32:49Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock presents the main workflow for his skills repository by configuring it in an existing AI Hero CLI codebase. The walkthrough covers installation, repository setup, idea clarification, optional specification and ticket artifacts, implementation, and fresh-context review; it explicitly leaves advanced and experimental skills out of scope.

## Key Ideas

- Pocock installs the repository's official skills through the Vercel skills CLI, distinguishes them from experimental skills, and selects an agent, installation scope, and symlink setup. [00:00:00]-[00:04:03]
- He recommends project-scoped skills for teams so collaborators share and evolve the same set, while using global installation for his solo demonstration. [00:02:06]-[00:04:03]
- The setup skill records links to issue-tracker conventions, triage labels, and domain documentation; he chooses local Markdown and a single context for this repository. [00:04:03]-[00:06:58]
- His default flow begins with a repository-aware interview that explores the code and asks follow-up questions until the human and agent reach a shared plan. [00:06:58]-[00:09:36]
- For work that fits one context window, he says the plan can go directly to implementation; for larger work, `to spec` compresses the discussion into a destination document and `to tickets` divides the route into context-sized slices. [00:09:36]-[00:13:44]
- After clearing context, an implementation session can use the saved spec and tickets, tackle one ticket at a time, and preserve the larger destination across sessions. [00:13:44]-[00:14:48]
- The demonstrated implement skill runs checks and delegates specification and standards review to fresh sub-agents before committing the branch. [00:14:48]-[00:16:52]

## Practical Implications

- Keep shared workflow configuration in the repository when a team needs consistent skills, issue storage, and domain-documentation conventions.
- Clarify an idea against the existing codebase before turning the discussion into durable planning artifacts.
- Skip specification and ticket ceremony for bounded work; use it when implementation must survive multiple fresh contexts.
- Size each ticket for one effective context window, clear between tickets when needed, and retain the spec as the final comparison point.
- Separate implementation from fresh-context review, and run repository checks before treating the work as complete.

## Questions and Tensions

- The walkthrough uses one repository, agent harness, model configuration, and small deletion task; it does not compare outcomes across the other supported environments.
- Pocock describes a roughly 140,000-token smart-zone threshold as his working model of attention degradation, not as a measured or generally established cutoff. [00:09:36]-[00:11:41]
- The chosen task is small enough for one implementation session, so the spec-and-ticket path is demonstrated partly as a teaching example rather than because the work requires multiple sessions. [00:09:36]-[00:13:44]
- The final review reports successful checks and a commit, but the video does not show independent manual QA or evidence that the workflow improves defect rates, maintainability, or delivery speed. [00:14:48]-[00:16:52]
- Tool behavior, skill counts, download figures, and installation details are presented as they existed at recording time and may change.

## Source

- https://www.youtube.com/watch?v=M6mYodf0dJM
- [transcript.md](./transcript.md)
