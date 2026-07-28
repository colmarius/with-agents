---
title: "To the moon! Navigating deep context in legacy code with Augment Agent — Forrest Brazeal, Matt Ball"
videoId: 6NIr_cYPglk
sourceUrl: "https://www.youtube.com/watch?v=6NIr_cYPglk"
publishedAt: "2025-06-27T10:46:59Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Forrest Brazeal, a friend and partner of Augment Code who says he does not work for the company, and Matt Ball, an Augment Code solutions architect, demonstrate using Augment Agent to investigate and modernize Apollo Guidance Computer code. [00:00:00]-[00:00:55] Their legacy-code workflow combines indexed repository context, question answering, bounded implementation, tests, and human interpretation. [00:01:59]-[00:02:56] [00:11:54]-[00:14:25]

## Key Ideas

- Ball says Augment's context engine retrieves repository knowledge for models, integrates with existing IDEs, and is designed around enterprise security requirements. [00:00:55]-[00:02:56]
- Brazeal uses chat mode to trace Apollo 11's 1201 and 1202 program alarms through unfamiliar assembly code and supplement the repository result with external historical context. [00:04:00]-[00:07:08]
- Brazeal contrasts controlled chat with an agent mode that can run commands and edit without step-by-step approval, then prompts the agent to run a prepared simulator until it succeeds without changing the simulator. [00:08:04]-[00:10:00]
- Ball says the agent begins with indexed codebase knowledge, chooses tools and commands, reads files, and forms a plan before implementation. [00:10:00]
- Brazeal demonstrates the agent creating a missing Python implementation of Apollo's P65 guidance routine and passing the prepared simulation. [00:11:03]-[00:11:54]
- Brazeal recommends using chat to understand legacy behavior, tests to make expectations executable, human review for ambiguous semantics, and small modular conversions rather than a broad rewrite. [00:11:54]-[00:14:25]

## Practical Implications

- Editorial: Start legacy modernization with repository mapping and behavior questions before asking an agent to edit code.
- Editorial: Encode preserved behavior in tests, prohibit changes to the test oracle when appropriate, and modernize in reviewable modules.
- Editorial: Surface ambiguity to a human when repository conventions permit competing interpretations, especially in unfamiliar languages or safety-critical domains.

## Questions and Tensions

- Brazeal demonstrates against a modified Apollo repository containing a custom simulator and tests, and the agent derives the expected class structure from those test files. [00:05:03]-[00:06:07] [00:09:06]-[00:11:54]
- Editorial: Passing the prepared simulator establishes consistency with that local oracle, not historical fidelity to the flight software or safety of an autonomous lunar landing.
- Brazeal says the agent can be convinced that scheduler priority zero is either highest or lowest and calls for human reading before modernization. [00:12:45]
- Editorial: This failure mode undercuts any assumption that retrieved context alone resolves ambiguous domain semantics; independent references and domain review remain necessary.
- Ball makes product capability and security claims about Augment's context engine and enterprise controls. [00:00:55]-[00:01:59]
- Editorial: The talk does not provide comparative retrieval accuracy, security audit evidence, or modernization success rates.

## Source

- [YouTube video](https://www.youtube.com/watch?v=6NIr_cYPglk)
- [transcript.md](./transcript.md)
