---
title: "Real World Development with GitHub Copilot and VS Code — Harald Kirschner, Christopher Harrison"
videoId: eOxOzcw70f0
sourceUrl: "https://www.youtube.com/watch?v=eOxOzcw70f0"
publishedAt: "2025-08-03T04:30:57Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

The source title credits Harald Kirschner and Christopher Harrison as speakers. ([source title](https://www.youtube.com/watch?v=eOxOzcw70f0)) In the captured workshop, Kirschner identifies himself as working on VS Code; the captions do not separately identify Harrison or state his affiliation, so this summary does not assign individual claims to Harrison. [00:25:01] Kirschner presents AI-assisted development as a progression from exploratory "YOLO" vibe coding through structured guardrails to spec-driven workflows with reusable instructions, prompts, tools, and tests. [00:00:01]-[00:04:59] [00:31:40]-[01:18:23]

## Key Ideas

- Kirschner describes YOLO vibe coding as an output-first mode for prototypes, mockups, learning, and personal projects rather than production delivery. [00:00:01]-[00:04:59]
- Kirschner demonstrates rapid alternatives with popular frameworks, auto-approval, visual context, voice input, and checkpoints, using the results to explore design space without becoming attached to one implementation. [00:04:59]-[00:31:40]
- Kirschner describes structured vibe coding as starting from a consistent technology stack, team instructions, internal design systems, and domain tools so broad requests produce more maintainable and repeatable results. [00:31:40]-[00:41:15]
- Kirschner presents repository instructions, reusable prompts, and custom modes as different control surfaces; a live TDD-mode attempt exposes that generated tool configuration can be wrong and must be corrected before the agent can act. [00:42:05]-[00:55:18]
- Kirschner demonstrates MCP setup, workspace and user configuration, secret inputs, tool sets, model selection, and explicit tool references, while noting that a model may still decline to call a suggested tool. [00:56:21]-[01:12:24]
- Kirschner recommends refining instructions when the agent fails, committing working states, pausing to review unexpected behavior, and separating specification, planning, and implementation for more consequential work. [01:13:20]-[01:18:23]

## Practical Implications

- Editorial: Use unconstrained generation for disposable exploration, then add approved stacks, reusable instructions, and review gates before the result becomes shared or durable software.
- Editorial: Scope an agent's tools to the task, keep secrets in supported credential storage, and verify generated modes or tool names instead of assuming configuration prose is executable.
- Editorial: Turn recurring team practices into versioned instructions, prompts, and modes, but keep them current as the product and codebase change.

## Questions and Tensions

- Kirschner frames YOLO vibe coding as useful for learning and prototypes, not shipping products, then adds structure and specifications as durability requirements increase. [00:01:04]-[00:04:59] [00:31:40]-[00:33:34]
- Editorial: What explicit evidence should trigger the move from exploratory output to reviewed, maintainable implementation?
- Kirschner demonstrates auto-approval while also discussing the difficulty of safely allow-listing chained terminal commands. [00:11:02]-[00:19:28]
- Editorial: Faster interaction can expand the blast radius of a mistaken command, so approval policy needs to follow capability and environment risk rather than demo convenience.
- Editorial: The source title credits two speakers, but the captions do not identify Harrison's contributions or affiliation; a diarized or independently reviewed source would be needed to attribute any substantive claim to him.

## Source

- [YouTube video](https://www.youtube.com/watch?v=eOxOzcw70f0)
- [transcript.md](./transcript.md)
