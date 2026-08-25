---
title: "Bring your AI agents to Basecamp – REWORK"
videoId: oE1Y_6W4Mj8
sourceUrl: "https://www.youtube.com/watch?v=oE1Y_6W4Mj8"
publishedAt: "2026-03-25T09:01:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

REWORK host Kimberly Rhodes speaks with 37signals co-founder and CTO David Heinemeier Hansson about making Basecamp accessible to external AI agents. Hansson presents a command-line interface and agent skills as an accessibility layer that favors fast, inspectable tool calls over browser automation or indiscriminate native AI features.

## Key Ideas

- Hansson says contemporary agents could navigate Basecamp through a browser but were too slow for routine work, motivating a command-line interface that exposes the same product actions more directly. [00:02:09]-[00:05:56]
- In his demonstration, an agent turns a launch request into Basecamp to-dos, comments, messages, and schedule items, making generated analysis actionable inside a shared project. [00:05:56]-[00:07:37]
- He connects this workflow to coding agents: terminal tools let an agent act, inspect feedback, correct a failed call, and continue rather than only returning prose. [00:08:25]-[00:09:28]
- Hansson contrasts agent accessibility with tacked-on native AI features, arguing that products can first make existing capabilities available through CLIs and skills while they search for genuinely useful embedded features. [00:10:23]-[00:14:05]
- He reports that agents produced much of the Basecamp CLI itself and says 37signals intends to apply the same accessibility approach to HEY and Fizzy. [00:15:04]-[00:17:02]

## Practical Implications

- Give agents narrow, documented, feedback-producing interfaces instead of relying exclusively on visual browser control.
- Keep authorization and collaboration visible in the host product so agent actions remain part of the team's normal work surface.
- Prefer useful access to existing capabilities over adding AI features solely for product positioning.

## Questions and Tensions

- The episode demonstrates convenience but does not detail authentication, permission scoping, auditability, failure recovery, or evaluation results.
- Faster cross-product actions can weaken integration moats while increasing the importance of consistent access controls across every connected system.
- The workflow is aimed at technically sophisticated early adopters; Hansson acknowledges that another usability step is needed for broad adoption.

## Source

- <https://www.youtube.com/watch?v=oE1Y_6W4Mj8>
- [transcript.md](./transcript.md)
