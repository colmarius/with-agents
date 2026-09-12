---
title: "Stop being skeptical about AI for development with Charity Majors"
resourceId: 35
date: "2026-08-12"
collection: "pragmatic-engineer-selected-conversations"
order: 14
videoId: "HC8T1OlgYi0"
---

Charity Majors argues that teams should judge coding agents by better production outcomes, not more generated code. In conversation with Gergely Orosz, the Honeycomb co-founder asks what evidence would make unread code safe to ship. Her answer combines stronger behavioral checks, visibility into the running system, and a person who owns the result ([06:49–09:32](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=409s), [26:55–33:02](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1615s), [53:01–57:02](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=3181s)).

### Key Points Covered

- **Team outcomes outrank individual activity**: Majors says teams remain the meaningful unit and calls speed an immature definition of improvement; Orosz's Spotify example illustrates that change volume alone says nothing about quality or customer value ([06:49–09:32](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=409s)).
- **Replace blanket skepticism with an acceptance question**: Majors predicts that teams will eventually ship generated code they have not read and argues that the useful question is what evidence and repeated comparison would make that safe, not whether it should ever happen ([11:21–13:25](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s)).
- **Operations and QA offer a model for production assurance**: Majors argues that code contains only part of the system's truth, while operations and QA have long focused on validating actual behavior. Production should be treated as a development stage rather than what happens after development ([19:20–21:11](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1160s)).
- **Unread generated code needs stronger checks**: Majors says that if nobody reads the code, the team must rebuild that confidence elsewhere. She highlights conformance testing: checking that newly generated code still behaves within the boundaries of the previous version. Because model output can vary, she argues for constraining where and how AI operates rather than abandoning predictable behavior ([26:55–30:00](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1615s)).
- **Some AI applications should fail the suitability test**: After Orosz describes a resume scorer returning materially different scores for the same input, Majors says AI is not appropriate for every use case. She frames Honeycomb's bar as better outcomes and says the person invoking an agent loop owns its result ([28:57–33:02](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1737s)).
- **Generated communication can transfer cost to colleagues**: Majors proposes not sending material the sender has not read, especially when reviewing it would take the recipient longer than generating it took. AI can deepen thought or bypass it; core work should favor the former ([34:55–37:54](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s)).
- **Enthusiasts and operators may be observing different real effects**: Majors says enthusiasts see useful rewrites and toil reduction while on-call engineers see incidents, weaker mental models, and cleanup. The episode's company stories and reliability claims are reported examples, not evidence of a general causal effect ([37:54–44:09](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2274s)).
- **Observability closes the intent-to-production loop**: Majors argues that telemetry for first-party code should be a product decision and that instrumentation should let engineers compare intended behavior with production behavior as part of normal development ([53:01–57:02](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=3181s)).
- **Managers still own sense-making and teams can run bounded experiments**: Majors expects engineering leaders to regain enough hands-on experience to understand agent-mediated delivery while preserving management's context-giving role. For AI fatigue and uncertain norms, she recommends bottom-up experiments that report what worked, failed, and was learned ([1:10:23–1:13:22](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=4223s), [1:19:02–1:21:09](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=4742s)).

Full video: <https://www.youtube.com/watch?v=HC8T1OlgYi0>
