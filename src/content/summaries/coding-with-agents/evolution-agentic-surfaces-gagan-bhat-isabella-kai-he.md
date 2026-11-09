---
title: "Evolution of Agentic Surfaces"
resourceId: 42
date: "2026-08-11"
---

Long-running agents need to survive tool failures and resume without losing their work. Anthropic Applied AI engineers Gagan Bhat and Isabella Kai He explain how Claude Managed Agents separates model reasoning, tool execution, and session history. They also argue that a harness (the software around a model that manages its tools and context) must change when its model-specific workarounds stop helping.

### Key Points Covered

- **Production agents require more than an agent loop**: Bhat lists hosting, session state, file access, execution isolation, credentials, and observability as infrastructure that teams otherwise build around model calls and tools [01:54–05:45](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=114s).
- **The developer keeps the product and the service runs the infrastructure**: Anthropic's proposed split leaves the product, task, context, and domain knowledge with the developer, while the service owns the model loop, sandbox, session management, credentials, observability, and hosting [05:45–06:43](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=345s).
- **Harness assumptions expire as models change**: Kai He describes context resets added for Sonnet 4.5's early stopping near its context limit. When Opus 4.5 no longer showed that behavior, the workaround added latency and cache problems instead [07:31–09:19](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=451s).
- **Replaceable components make it faster to adopt new models**: Kai He warns that harnesses built around older models can take weeks or months to migrate. She argues for harness components that can be swapped independently, so model-specific behavior can change without replacing the overall architecture [09:19–10:13](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=559s).
- **Long-running agents need context, isolation, recovery, and parallelism**: The speakers frame secure sandboxes, context engineering, reliable hours-long execution, and concurrent work as baseline harness requirements rather than application features [10:13–11:07](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=613s).
- **Separate the brain from the hands**: Moving the model loop out of the tool-execution container lets reasoning begin before a sandbox is ready, limits shared failure modes, and allows a failed sandbox to be replaced without losing the agent's state [11:07–12:55](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=667s).
- **Make the session a durable resource**: Managed Agents is built on three primitives: the agent definition, the environment it runs in, and a session that combines them. The session is a persisted log of every interaction, kept outside the active context window. A restarted loop can resume from the log, and discarded context can be read back into a later window [12:55–16:13](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=775s).
- **Keep credentials outside model-visible context**: The product's vault design decrypts credentials only during tool execution. Self-hosted sandboxes let customers run tool execution in their own private cloud. MCP tunnels let MCP servers stay on a private network, making only outbound calls to the agent loop [21:26–22:18](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1286s), [25:07–26:45](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1507s).
- **Decoupling can improve startup latency**: Anthropic reports 60% faster P50 and more than 90% faster P95 time to first token by starting model reasoning and sandbox setup in parallel. The talk does not provide the workload distribution or experimental details needed to transfer those figures [22:18–24:17](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1338s).
- **Logs can support observability, memory, and evaluation**: The speakers propose using session traces both for inspection and for periodic memory updates, while a separate outcome grader checks a user-defined rubric and triggers retries. These mechanisms still depend on the quality of the extracted memory, rubric, and grader [24:17–25:07](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1457s), [27:34–30:22](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1654s).

Full video: <https://www.youtube.com/watch?v=K0X9QDRkIdg>
