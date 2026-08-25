---
title: "Matt Pocock: Agent Skills and Engineering Workflows"
status: reviewed
coveredVideoIds:
  - UzMNBN6xLLA
  - mh5XZ-L5SFQ
  - M6mYodf0dJM
  - n0VhIVtviC0
  - F3lL98Pj90o
  - gaDdrDdczO4
  - zcLPGC-tvgk
---

## Coverage

- Manifest: 299 available entries representing 299 unique video IDs.
- Reviewed curation: 7 selected videos and 292 unselected videos.
- Captured: 6 selected source-language transcripts in the source library; 1 selected video reuses its reviewed standalone transcript.
- Summaries: 6 reviewed source summaries and 1 reviewed standalone public summary.
- Incorporated: all 7 selected summaries.
- Pending selected video IDs: none.

## Current Thesis

- Pocock presents agent skills as human-led procedures that route uncertainty into different modes: grilling for answerable decisions, prototypes for questions that need higher fidelity, Wayfinder for dependent work across sessions, and fresh review for structural challenge after implementation ([Grill summary](../../videos/UzMNBN6xLLA/summary.md), [Prototype summary](../../videos/n0VhIVtviC0/summary.md), [Wayfinder summary](../../videos/F3lL98Pj90o/summary.md), [workflow summary](../../videos/M6mYodf0dJM/summary.md), [review summary](../../videos/mh5XZ-L5SFQ/summary.md)).
- Pocock's complete workflow starts with repository-aware clarification, persists a specification and context-sized tickets only when work must cross sessions, then implements and reviews against the destination with fresh agents ([summary](../../videos/M6mYodf0dJM/summary.md)).
- In Pocock's hosted conversation, Uncle Bob Martin—not Pocock—adds a reliability-focused workflow that moves important expectations from prompts into deterministic checks, specialized fresh-context handoffs, and explicit architecture constraints ([summary](../../../summaries/coding-with-agents/uncle-bob-on-software-fundamentals-in-the-age-of-ai.md)).
- Editorial: The collection's strongest through-line is not that more skills improve an agent. It is that a small, often explicitly invoked procedure can preserve human judgment while matching each unresolved question to a bounded artifact and a more appropriate proof method.

## Stable Ideas

- Pocock distinguishes low-fidelity decisions that can be settled in conversation from high-fidelity decisions that need a prototype or working behavior ([summary](../../videos/UzMNBN6xLLA/summary.md)).
- Pocock treats context as a constrained engineering resource: narrow the task, preserve decisions, keep implementation tickets within an effective context, and link condensed artifacts back to fuller discussions ([Grill summary](../../videos/UzMNBN6xLLA/summary.md), [workflow summary](../../videos/M6mYodf0dJM/summary.md), [Wayfinder summary](../../videos/F3lL98Pj90o/summary.md)).
- Pocock keeps strategic control with the developer. The human scopes and steers grilling, chooses among prototypes, resolves map tickets, judges automated review findings, and decides which setup steps must remain human-only ([Grill summary](../../videos/UzMNBN6xLLA/summary.md), [Prototype summary](../../videos/n0VhIVtviC0/summary.md), [Wayfinder summary](../../videos/F3lL98Pj90o/summary.md), [review summary](../../videos/mh5XZ-L5SFQ/summary.md), [v1.2 summary](../../videos/gaDdrDdczO4/summary.md)).
- Pocock treats planning artifacts as purposeful but often temporary: preserve a decision while it guides work, retain provenance links when summaries are insufficient, then close artifacts once code or another durable destination carries the result ([workflow summary](../../videos/M6mYodf0dJM/summary.md), [Wayfinder summary](../../videos/F3lL98Pj90o/summary.md)).
- Uncle Bob's guest workflow likewise treats small contexts and mechanical feedback as controls on agent trajectory, but its reported productivity and quality gains remain first-person evidence without shared tasks or independent measurements ([summary](../../../summaries/coding-with-agents/uncle-bob-on-software-fundamentals-in-the-age-of-ai.md)).

## Emerging Ideas

- Pocock models large planning work as a dependency graph whose current frontier can be handled while blocked decisions remain in fog; the same dependency framing now lets Grill Me ask independent questions in rounds rather than strictly one at a time ([Wayfinder summary](../../videos/F3lL98Pj90o/summary.md), [v1.2 summary](../../videos/gaDdrDdczO4/summary.md)).
- Pocock extends skills beyond coding turns into collaboration and environment setup: To Questionnaire moves unresolved decisions through a shared document, while Wizard generates a deterministic script intended to keep sensitive actions and values outside an agent session ([summary](../../videos/gaDdrDdczO4/summary.md)).
- Pocock's ambitious review example invites structural proposals beyond a changed diff and accepts false positives as a trade-off for surfacing options that narrow review would miss ([summary](../../videos/mh5XZ-L5SFQ/summary.md)).
- Editorial: These extensions make the workflow more complete, but also create new review surfaces: generated scripts, issue maps, prototypes, questionnaires, and broad architectural findings all require ownership and synchronization outside the model response itself.

## Revisions and Tensions

- Pocock's 2026-05-25 guidance emphasizes active conversational steering and warns against runaway interviews; by 2026-08-05, version 1.2 changes Grill Me from strictly one-at-a-time questions to dependency-aware rounds intended to reduce waiting without mixing blocked decisions (`UzMNBN6xLLA` [00:05:08]-[00:07:07]; `gaDdrDdczO4` [00:03:58]-[00:06:44]; [Grill summary](../../videos/UzMNBN6xLLA/summary.md), [v1.2 summary](../../videos/gaDdrDdczO4/summary.md)).
- Pocock's complete workflow preserves optional specifications for multi-session work, while his prototype guidance warns against using prose when the decision depends on seeing behavior. Together they narrow the role of a spec rather than rejecting or requiring one universally ([workflow summary](../../videos/M6mYodf0dJM/summary.md), [Prototype summary](../../videos/n0VhIVtviC0/summary.md)).
- Uncle Bob's preference for short story-by-story feedback loops reinforces the collection's skepticism about exhaustive upfront plans, while his deterministic quality gates add proof layers that Pocock's skills demonstrations discuss less directly ([summary](../../../summaries/coding-with-agents/uncle-bob-on-software-fundamentals-in-the-age-of-ai.md)).
- Editorial: Broad review can reveal structural options, but its false positives, expanded scope, and lack of explicit test criteria can increase review work and still leave behavioral defects unexamined ([summary](../../videos/mh5XZ-L5SFQ/summary.md)).
- Editorial: The videos offer detailed demonstrations and practitioner heuristics, not controlled comparisons. Context thresholds, model selection, parallel-planning gains, prototype economics, workflow quality, and review effectiveness remain unmeasured across fixed tasks and teams.

## Practical Implications

- Editorial: Start with the smallest useful scope. Grill decisions that can be answered in prose, prototype questions that require experience or behavior, and use a dependency map only when uncertainty genuinely spans sessions ([Grill summary](../../videos/UzMNBN6xLLA/summary.md), [Prototype summary](../../videos/n0VhIVtviC0/summary.md), [Wayfinder summary](../../videos/F3lL98Pj90o/summary.md)).
- Editorial: Preserve each phase's useful result—a decision history, prototype, specification, ticket, or review report—but name who will validate it and when it can be discarded.
- Editorial: Review agent output against more than one proof layer. Structural critique, repository checks, specification comparison, and human acceptance answer different questions; none establishes correctness alone ([workflow summary](../../videos/M6mYodf0dJM/summary.md), [review summary](../../videos/mh5XZ-L5SFQ/summary.md)).
- Editorial: Keep sensitive or consequential setup deterministic and human-controlled, then review generated scripts and collaboration artifacts as code and shared state rather than trusting the skill label ([summary](../../videos/gaDdrDdczO4/summary.md)).
