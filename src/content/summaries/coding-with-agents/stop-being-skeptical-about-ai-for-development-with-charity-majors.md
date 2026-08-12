---
title: "Stop being skeptical about AI for development with Charity Majors"
resourceId: 35
date: "2026-08-12"
collection: "pragmatic-engineer-selected-conversations"
order: 14
videoId: "HC8T1OlgYi0"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Charity Majors, Honeycomb co-founder and co-author of Observability Engineering, about evaluating coding agents through team and production outcomes rather than generated-code volume ([00:06:49]-[00:09:32]). Majors argues that trust removed by unread, non-deterministically generated code must be rebuilt through tests, evals, conformance checks, production observability, and explicit human ownership ([00:26:55]-[00:33:02], [00:53:01]-[00:57:02]). Her prediction that unread code will become normal and her industry reliability examples remain forecasts and practitioner observations rather than controlled findings ([00:11:21]-[00:13:25], [00:37:54]-[00:44:09]).

### Key Points Covered

- **Team outcomes outrank individual activity**: Majors says teams remain the meaningful unit and calls speed an immature definition of improvement; Orosz's Spotify example illustrates that change volume alone says nothing about quality or customer value ([00:06:49]-[00:09:32]).
- **Replace blanket skepticism with an acceptance question**: Majors predicts that teams will eventually ship generated code they have not read and argues that the useful question is what evidence and repeated comparison would make that safe, not whether it should ever happen ([00:11:21]-[00:13:25]).
- **Operations and QA offer a model for production assurance**: Majors argues that code contains only part of the system's truth, while operations and QA have long focused on validating actual behavior. Production should be treated as a development stage rather than what happens after development ([00:19:20]-[00:21:11]).
- **Cheap generation shifts trust into validation**: Non-deterministic generation requires more engineering discipline, not less. If unread code debits trust during creation, tests, evals, conformance checks, and bounded deterministic pathways must rebuild it elsewhere ([00:26:55]-[00:30:00]).
- **Some AI applications should fail the suitability test**: After Orosz describes a resume scorer returning materially different scores for the same input, Majors says AI is not appropriate for every use case. She frames Honeycomb's bar as better outcomes and says the person invoking an agent loop owns its result ([00:28:57]-[00:33:02]).
- **Generated communication can transfer cost to colleagues**: Majors proposes not sending material the sender has not read, especially when reviewing it would take the recipient longer than generating it took. AI can deepen thought or bypass it; core work should favor the former ([00:34:55]-[00:37:54]).
- **Enthusiasts and operators may be observing different real effects**: Majors says enthusiasts see useful rewrites and toil reduction while on-call engineers see incidents, weaker mental models, and cleanup. The episode's company stories and reliability claims are reported examples, not evidence of a general causal effect ([00:37:54]-[00:44:09]).
- **Observability closes the intent-to-production loop**: Majors argues that telemetry for first-party code should be a product decision and that instrumentation should let engineers compare intended behavior with production behavior as part of normal development ([00:53:01]-[00:57:02]).
- **Managers still own sense-making and teams can run bounded experiments**: Majors expects engineering leaders to regain enough hands-on experience to understand agent-mediated delivery while preserving management's context-giving role. For AI fatigue and uncertain norms, she recommends bottom-up experiments that report what worked, failed, and was learned ([01:10:23]-[01:13:22], [01:19:02]-[01:21:09]).

Full video: <https://www.youtube.com/watch?v=HC8T1OlgYi0>
