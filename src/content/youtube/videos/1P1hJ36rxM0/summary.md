---
title: "\"Software engineering is not about writing code\" — Benoit Schillings, Google DeepMind VP of Research"
videoId: 1P1hJ36rxM0
sourceUrl: "https://www.youtube.com/watch?v=1P1hJ36rxM0"
publishedAt: "2026-07-17T15:24:44Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Benoit Schillings, introduced as vice president of research at Google DeepMind, argues that generating syntax is no longer the central software-engineering bottleneck. He distinguishes writing a function from changing and architecting large systems, where specification, decomposition, security, and long-term consequences still matter ([00:00:01]-[00:01:06], [00:06:19]-[00:08:11]).

Schillings presents self-play, harder evaluations, multimodal reasoning, and model-oriented programming languages as routes toward stronger engineering systems. His broader claim is that cheaper code generation increases the importance of deciding what to build and verifying that the result is adequate and safe ([00:09:00]-[00:10:52], [00:12:57]-[00:16:54]).

## Key Ideas

- Schillings uses his progression from assembly language through managed languages and vibe coding to argue that software practice repeatedly shifts when an old constraint becomes cheap ([00:03:06]-[00:05:14]).
- He says models have surpassed the routine syntax-generation work he once did manually, while multi-step changes in very large codebases and system architecture remain an active frontier ([00:07:08]-[00:08:11]).
- Code offers abundant training data and executable verification, but Schillings says human-authored data is becoming less useful as machine-generated code grows; he proposes verifiable self-play as the next scaling path ([00:09:00]-[00:10:52]).
- If code becomes nearly free, he expects output volume to rise and argues that active guardrails, security analysis, and training models to avoid vulnerabilities at generation time become more important ([00:10:52]-[00:12:57]).
- Schillings calls for evaluations that reward planning and open-ended improvement rather than only checking one expected output, using lossless compression as an example with a continuously improvable objective ([00:12:57]-[00:15:04]).
- He suggests that multimodal reasoning and strongly typed or proof-oriented languages designed for models could shift more of the correctness burden into representations and tools ([00:15:04]-[00:16:54]).

## Practical Implications

- Evaluate coding systems on repository-scale decomposition, architecture, security, and maintenance—not only whether they can generate a correct isolated function ([00:07:08]-[00:08:11], [00:12:57]-[00:15:04]).
- As generated-code volume rises, move review effort toward requirements, system behavior, threat boundaries, and automated checks that can detect or prevent classes of defects ([00:10:52]-[00:12:57]).
- Training tasks need verifiable goals without collapsing every problem to one implementation; open-ended optimization tasks can preserve room for models to discover alternatives ([00:12:57]-[00:15:04]).

## Questions and Tensions

- Schillings predicts that people may soon stop reading generated code, but the talk does not establish which assurance mechanisms can replace code review across high-risk systems ([00:11:56]-[00:12:57]).
- Self-play depends on challenges and judgments that are reliable enough to reward real engineering progress, including architecture—not just outputs a model can learn to game ([00:09:00]-[00:10:52], [00:12:57]-[00:15:04]).
- A model-oriented language could improve safety while becoming less human-readable, creating a tension between machine-verifiable correctness and human oversight ([00:16:54]-[00:17:51]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=1P1hJ36rxM0)
- [transcript.md](./transcript.md)
