---
title: "Evolution of Agentic Surfaces"
resourceId: 42
date: "2026-08-11"
---

Anthropic Applied AI engineers Gagan Bhat and Isabella Kai He trace agent infrastructure from a hand-built loop to a managed runtime, then explain the architecture behind Claude Managed Agents. The durable lesson is broader than the product: harnesses encode assumptions about model limitations, long-running work needs recoverable state, and model reasoning should not share a failure boundary with tool execution.

This is an Anthropic product presentation, not a vendor-neutral comparison. Its architecture and operational lessons are useful, but its latency figures are vendor-reported, and proposed features such as memory “dreaming” and outcome graders should not be treated as independent proof of reliability.

### Key Points Covered

- **Production agents require more than an agent loop**: Bhat lists hosting, session state, file access, execution isolation, credentials, and observability as infrastructure that teams otherwise build around model calls and tools [01:54–05:45](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=114s).
- **Managed infrastructure changes the ownership boundary**: Anthropic's proposed split leaves the product, task, context, and domain knowledge with the developer while the service owns the model loop, sandbox, session management, credentials, observability, and hosting [05:45–06:43](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=345s).
- **Harness assumptions expire as models change**: He describes context resets added for Sonnet 4.5's early stopping near its context limit. When Opus 4.5 no longer showed that behavior, the workaround added latency and cache problems instead [07:31–09:19](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=451s).
- **Small replaceable primitives reduce migration drag**: Kai He argues for independently changeable harness components so model-specific behavior can evolve without replacing the overall architecture [09:19–10:13](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=559s).
- **Long-running agents need context, isolation, recovery, and parallelism**: The speakers frame secure sandboxes, context engineering, reliable hours-long execution, and concurrent work as baseline harness requirements rather than application features [10:13–11:07](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=613s).
- **Separate the brain from the hands**: Moving the model loop out of the tool-execution container lets reasoning begin before a sandbox is ready, limits shared failure modes, and allows a failed sandbox to be replaced without losing the agent's state [11:07–12:55](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=667s).
- **Make the session a durable resource**: Their agent, environment, and session primitives store interactions outside the active context window. A restarted loop can resume from the log, and discarded context can be read back into a later window [12:55–16:13](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=775s).
- **Keep credentials outside model-visible context**: The product's vault design decrypts credentials only during tool execution. Self-hosted sandboxes and MCP tunnels aim to keep execution and private services within customer-controlled boundaries [21:26–22:18](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1286s), [25:07–26:45](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1507s).
- **Decoupling can improve startup latency**: Anthropic reports 60% faster P50 and more than 90% faster P95 time to first token by starting model reasoning and sandbox setup in parallel. The talk does not provide the workload distribution or experimental details needed to transfer those figures [22:18–24:17](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1338s).
- **Logs can support observability, memory, and evaluation**: The speakers propose using session traces both for inspection and for periodic memory updates, while a separate outcome grader checks a user-defined rubric and triggers retries. These mechanisms still depend on the quality of the extracted memory, rubric, and grader [24:17–25:07](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1457s), [27:34–30:22](https://www.youtube.com/watch?v=K0X9QDRkIdg&t=1654s).

Full video: <https://www.youtube.com/watch?v=K0X9QDRkIdg>
