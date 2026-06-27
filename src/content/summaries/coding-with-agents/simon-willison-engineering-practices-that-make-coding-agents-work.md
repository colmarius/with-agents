---
title: "Engineering practices that make coding agents work"
resourceId: 14
date: "2026-03-19"
---

Simon Willison's Pragmatic Summit conversation is a compact field guide to using coding agents responsibly: start with tests, make agents prove their work, use sandboxing for risky execution, and keep human judgment focused on the parts of the system that will last.

### Key Points Covered

- **Agent trust now depends on proof, not faith**: Willison describes moving from chat-based help to agents writing most of his code, including work kicked off from his phone. He is increasingly comfortable delegating familiar tasks, but frames the central challenge as making agents prove that their output works rather than simply trusting generated code [00:00:55]-[00:04:41].
- **Red-green TDD is the first default**: Every agent session starts with how to run the tests and a short instruction to use red-green TDD. Tests are no longer optional because agents can write them cheaply, and test-first work limits how much unnecessary code the agent produces [00:04:41]-[00:06:44].
- **Manual verification still matters**: Passing unit tests do not prove a server boots or an API behaves correctly. Willison asks agents to start the service, exercise it with `curl`, and document those checks with tools like Showboat so the human reviewer can inspect the evidence [00:06:44]-[00:07:33].
- **Conformance-driven development turns standards into specs**: For problems such as WebAssembly or multipart file uploads, he describes giving agents a language-agnostic test suite or asking them to derive one from several framework implementations, then implementing until the suite passes [00:07:33]-[00:09:36].
- **Code quality remains a choice**: Throwaway single-page tools can tolerate messy code, but maintained systems still need review and refactoring. Willison argues that bad agent code is not inevitable: if you ask the agent to refactor after review, you can end up with code better than what you would have had time to write manually [00:09:36]-[00:10:39].
- **Examples and scaffolds shape agent output**: Cookiecutter templates, existing tests, READMEs, CI setup, and high-quality patterns in the codebase guide agents just as they guide humans. If the first Redis integration or plugin scaffold is clean, later agent work is more likely to copy that quality [00:10:39]-[00:12:35].
- **Prompt injection is a real agent risk**: Willison revisits prompt injection and the "lethal trifecta": private data access, malicious instructions, and an exfiltration path. The safest systems cut off at least one leg rather than relying on the model to distinguish instructions from data [00:12:35]-[00:15:36].
- **Sandboxing and mock data reduce blast radius**: He prefers running agents in constrained environments such as hosted containers or VMs, especially when using permissive execution modes. For sensitive user data, he recommends investing in realistic fake data and edge-case fixtures rather than copying production databases into agent workflows [00:15:36]-[00:18:35].
- **The useful frontier is what today's models can do now**: Willison resists long-range predictions and instead recommends retrying formerly impossible tasks after model upgrades. He points to spell-checking and recent code-model reliability jumps as examples of capabilities that quietly crossed into practical use [00:19:29]-[00:22:59].
- **Agent work expands ambition but is exhausting**: Running several agents in parallel can be mentally draining, not lazy. The payoff is that engineers can attempt more experiments, write in unfamiliar languages, and build one-off tools that were previously not worth the setup cost [00:22:59]-[00:25:02].
- **Open source is both foundation and pressure point**: Agents make bespoke components easier to generate, which may reduce demand for some libraries, but their success still rests on open-source ecosystems. At the same time, maintainers are being hit by junk AI-generated contributions and pull requests [00:25:50]-[00:27:51].

Full video: <https://www.youtube.com/watch?v=owmJyKVu5f8>
