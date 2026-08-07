---
title: "Building Claude Code with Boris Cherny"
resourceId: 35
date: "2026-03-04"
collection: "pragmatic-engineer-selected-conversations"
order: 3
videoId: "julbw1JuAz0"
---

Gergely Orosz interviews Boris Cherny, introduced as Claude Code's creator and engineering lead at Anthropic. Cherny describes Claude Code as an experiment that grew into a widely used development tool, and argues that stronger models are shifting software work from writing code toward planning, verification, rapid prototyping, and coordination across disciplines ([00:00:58]-[00:01:48], [00:23:40]-[00:30:08], [00:37:11]-[00:45:59]).

### Key Points Covered

- **Claude Code became agentic through simple tools**: Cherny says the original terminal chatbot changed after he gave the model Bash and file-editing tools. His design lesson is to give the model room to act rather than constrain it as one fixed program component ([00:23:40]-[00:27:12]).
- **Public release was also a safety experiment**: He says Anthropic debated keeping Claude Code internal, then released it partly to study real-world use. The reported near-universal internal adoption and estimate that it writes about 80% of Anthropic's code are internal observations, not independent measurements ([00:27:12]-[00:30:08]).
- **High personal throughput remains anecdotal evidence**: Cherny reports that with Opus 4.5 he stopped editing code manually and produced roughly 10–20 pull requests per day during one month, with about two bugs by his count ([00:31:11]-[00:33:13]).
- **Plan first and isolate parallel attempts**: His workflow starts several isolated Claude Code sessions in plan mode, refines each plan, and then lets the model implement. He recommends explanatory mode for unfamiliar codebases and warns that no one workflow fits every engineer ([00:33:13]-[00:38:12]).
- **Review combines probabilistic and deterministic layers**: Cherny describes model-written tests, end-to-end checks, Claude Code review in CI, types, linting, builds, best-of-N review, and final human approval. His estimated review catch rate is not substantiated with evaluation details in the interview ([00:40:18]-[00:45:59]).
- **Security is layered risk reduction**: He describes model alignment, runtime classifiers, sub-agent summarization for fetched web content, static analysis, allowlists, sandboxing, and permission prompts without claiming that the stack eliminates prompt injection or unsafe actions ([00:47:02]-[00:54:21]).
- **Cheap implementation favors working prototypes**: Cherny says the team uses prototypes, dogfooding, and user feedback rather than relying on static mockups or PRDs. The prototype counts and short timelines discussed are team recollections, not comparative studies ([00:59:17]-[01:04:37]).
- **Fresh contexts may help agent teams**: He attributes improved internal results to multiple “uncorrelated” context windows and Opus 4.6, while noting that the research preview uses many tokens and fits complex tasks rather than every task ([01:14:24]-[01:18:20]).

Full video: <https://www.youtube.com/watch?v=julbw1JuAz0>
