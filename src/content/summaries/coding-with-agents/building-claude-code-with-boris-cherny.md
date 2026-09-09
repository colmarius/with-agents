---
title: "Building Claude Code with Boris Cherny"
resourceId: 35
date: "2026-03-04"
collection: "pragmatic-engineer-selected-conversations"
order: 3
videoId: "julbw1JuAz0"
---

Gergely Orosz interviews Boris Cherny, introduced as Claude Code's creator and engineering lead at Anthropic. Cherny describes Claude Code as an experiment that grew into a widely used development tool, and argues that stronger models are shifting software work from writing code toward planning, verification, rapid prototyping, and coordination across disciplines ([00:58–01:48](https://www.youtube.com/watch?v=julbw1JuAz0&t=58s), [23:40–30:08](https://www.youtube.com/watch?v=julbw1JuAz0&t=1420s), [37:11–45:59](https://www.youtube.com/watch?v=julbw1JuAz0&t=2231s)).

### Key Points Covered

- **Claude Code became agentic through simple tools**: Cherny says the original terminal chatbot changed after he gave the model Bash and file-editing tools. His design lesson is to give the model room to act rather than constrain it as one fixed program component ([23:40–27:12](https://www.youtube.com/watch?v=julbw1JuAz0&t=1420s)).
- **Public release was also a safety experiment**: He says Anthropic debated keeping Claude Code internal, then released it partly to study real-world use. The reported near-universal internal adoption and estimate that it writes about 80% of Anthropic's code are internal observations, not independent measurements ([27:12–30:08](https://www.youtube.com/watch?v=julbw1JuAz0&t=1632s)).
- **High personal throughput remains anecdotal evidence**: Cherny reports that with Opus 4.5 he stopped editing code manually and produced roughly 10–20 pull requests per day during one month, with about two bugs by his count ([31:11–33:13](https://www.youtube.com/watch?v=julbw1JuAz0&t=1871s)).
- **Plan first and isolate parallel attempts**: His workflow starts several isolated Claude Code sessions in plan mode, refines each plan, and then lets the model implement. He recommends explanatory mode for unfamiliar codebases and warns that no one workflow fits every engineer ([33:13–38:12](https://www.youtube.com/watch?v=julbw1JuAz0&t=1993s)).
- **Review combines probabilistic and deterministic layers**: Cherny describes model-written tests, end-to-end checks, Claude Code review in CI, types, linting, builds, best-of-N review, and final human approval. His estimated review catch rate is not substantiated with evaluation details in the interview ([40:18–45:59](https://www.youtube.com/watch?v=julbw1JuAz0&t=2418s)).
- **Security is layered risk reduction**: He describes model alignment, runtime classifiers, sub-agent summarization for fetched web content, static analysis, allowlists, sandboxing, and permission prompts without claiming that the stack eliminates prompt injection or unsafe actions ([47:02–54:21](https://www.youtube.com/watch?v=julbw1JuAz0&t=2822s)).
- **Cheap implementation favors working prototypes**: Cherny says the team uses prototypes, dogfooding, and user feedback rather than relying on static mockups or PRDs. The prototype counts and short timelines discussed are team recollections, not comparative studies ([59:17–1:04:37](https://www.youtube.com/watch?v=julbw1JuAz0&t=3557s)).
- **Fresh contexts may help agent teams**: He attributes improved internal results to multiple “uncorrelated” context windows and Opus 4.6, while noting that the research preview uses many tokens and fits complex tasks rather than every task ([1:14:24–1:18:20](https://www.youtube.com/watch?v=julbw1JuAz0&t=4464s)).

Full video: <https://www.youtube.com/watch?v=julbw1JuAz0>
