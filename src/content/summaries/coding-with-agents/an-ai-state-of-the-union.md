---
title: "An AI state of the union"
resourceId: 27
date: "2026-04-02"
---

Lenny Rachitsky and Simon Willison examine how capable coding agents are changing professional software development, from cheap prototypes and test-driven workflows to experimental “dark factories” where humans may not inspect generated code. Willison argues that the shift increases rather than removes the need for engineering experience, human judgment, verification, and security boundaries.

### Key Points Covered

- **Agentic engineering is not vibe coding**: Willison distinguishes disposable, unreviewed prototypes from professional agent-assisted development, where engineers remain responsible for quality and consequences. His goal is not merely faster output but software with fewer bugs and better long-term quality [00:08:38]-[00:12:38].
- **Dark factories replace code review with external evidence**: Willison presents dark factories as an emerging experiment, not an established best practice: people neither write nor read the generated code, so quality must be demonstrated through other mechanisms. StrongDM reportedly used persistent simulated users and replicas of external services, but successful QA simulations still do not prove security [00:12:38]-[00:19:27].
- **Human judgment moves toward product decisions**: Faster implementation shifts the bottleneck toward deciding what to build and determining whether it works for real users. Agents can cheaply generate several prototypes, but Willison does not consider simulated AI users a credible replacement for human usability testing [00:21:17]-[00:24:00].
- **Experience is amplified, not made obsolete**: Willison reports that effective agent use draws on his 25 years of engineering knowledge, including knowing which tasks need one sentence and which hide substantial complexity. Running several agents in parallel is cognitively demanding, and he describes being exhausted after only a morning of supervising them [00:25:52]-[00:28:50].
- **Cheap code weakens old quality signals**: Willison has generated projects with polished documentation and tests before using them enough to trust them. He labels such work as alpha and suggests that proof of real usage now matters more because a professional-looking repository no longer demonstrates sustained engineering effort [00:37:34]-[00:38:23].
- **Build a reusable library of proven work**: Willison stores small tools and coding-agent research projects so future agents can search, reuse, and combine them. He emphasizes executable research—code that was written and run—over unverified generated reports [01:01:00]-[01:08:01].
- **Make agents prove changes with tests**: Willison calls automated testing essential because it shows that the agent ran the code and helps protect existing behavior. He recommends red-green TDD: first observe the new test fail, then implement the change and observe it pass, while retaining the nuance that tests protect only what they cover [01:08:01]-[01:12:54].
- **Templates teach more efficiently than long instructions**: Agents readily imitate patterns already present in a repository, including tests, formatting, and structure. Willison reports starting projects from thin templates with representative boilerplate and a minimal test rather than relying primarily on lengthy instruction files [01:14:44]-[01:15:45].
- **Prompt injection requires structural containment**: Willison defines the lethal trifecta as private-data access, exposure to malicious instructions, and a path for exfiltration. Because model-level filters remain probabilistic, he recommends cutting off at least one leg and limiting what an attacker could make the agent do [01:16:33]-[01:22:59].
- **Repeated success can normalize unsafe deployment**: Willison compares increasingly risky agent deployments to the “normalization of deviance”: incidents that do not immediately cause disaster can create unjustified confidence. His “Challenger disaster” is explicitly a prediction that has not yet occurred; he points to quarantined and privileged-agent designs with targeted human approval as a possible but complicated path forward [01:23:48]-[01:27:59].

Full video: <https://www.youtube.com/watch?v=wc8FBhQtdsA>
