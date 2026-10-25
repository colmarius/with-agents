---
title: 'Thorsten Ball (Amp): All the Models Want is Tokens and Tools'
resourceId: 188
date: '2026-10-15'
---

Amp co-founder Thorsten Ball joins Namespace founder Hugo Santos to discuss how improving models change agent design, engineering judgment, and infrastructure. Ball's design principle is to keep the harness, the software around the model, easy to change so that yesterday's workarounds do not hide tomorrow's model capabilities. His account of moving Amp from local execution to a distributed system shows the operational work that remains even when agents write much of the code.

This summary is based on the English auto-generated captions. Product decisions, migration incidents, and productivity observations are first-party accounts, not independent evaluations or current documentation of Amp or its infrastructure providers.

### Keep engineering judgment while revisiting old assumptions

- **Experience can help steer agents toward simpler solutions, but its value is changing.** Santos argues that understanding how software works helps engineers guide models and anticipate later changes. Ball questions whether familiar code-cleanup instincts, such as replacing three booleans with one enum, will matter equally to future models. He still finds value in asking why a feature needs to exist at all: avoiding unnecessary work is a different judgment from improving its implementation. Neither speaker establishes a settled method for teaching these skills in an agent-heavy workflow. [02:47–11:55](https://www.youtube.com/watch?v=7QkzdzwQp20&t=167s)

### Separate a small agent loop from a growing product

- **A general tool can let the model compose operations the harness did not explicitly provide.** Ball describes an early prototype with only a Bash tool. Asked to edit a file, the model constructed a shell command to read, transform, and rewrite it without a dedicated editing tool. This helped motivate Amp's tokens-and-tools approach. It is an origin story about model capability, not evidence that a single tool is sufficient for every agent or safe without execution boundaries. [15:51–17:58](https://www.youtube.com/watch?v=7QkzdzwQp20&t=951s)
- **Keep the harness adaptable as the model changes.** Ball says layers built around an older model can conceal what a newer model can do. He describes removing features, including tab completion and the VS Code extension, as the team moved away from typing code and supervising one local session. The subsequent goal was to run agents in different places and control them from multiple devices. These are Amp's product choices and forecasts, not requirements for all development teams. [20:03–24:11](https://www.youtube.com/watch?v=7QkzdzwQp20&t=1203s)
- **Team autonomy and a settled architecture contribute alongside stronger models.** Ball attributes faster shipping to self-directed engineers, a shared architecture that makes related features cheaper to add, and the team's willingness to delegate implementation to agents. He describes agents helping with the inventory and structure of a documentation migration, leaving room for details such as animations and a chaptered video player. The account does not isolate how much improvement comes from models, architecture, or organization. [26:16–31:13](https://www.youtube.com/watch?v=7QkzdzwQp20&t=1576s)

### Design infrastructure for long-running, inspectable agents

- **Separate inference, user interfaces, and tool execution.** Ball describes splitting the former local client into an inference loop, multiple clients, and the execution environment that touches files and runs commands. He reports that deploying the initial Cloudflare-based implementation would terminate ongoing requests after 30 seconds, interrupting long inference streams. The team then rebuilt on Rivet. The reported limit concerns that implementation and migration; it is not a verified statement about every Cloudflare service or its current behavior. [34:13–37:59](https://www.youtube.com/watch?v=7QkzdzwQp20&t=2053s)
- **Workload extremes can expose limits that ordinary sessions miss.** Ball contrasts small threads with users keeping a single thread active for weeks and accumulating tens or hundreds of megabytes of data. Rolling out the new system exposed size and transaction limits. He also recounts a storage-node incident that caused FoundationDB to enter recovery and stop accepting writes. His lesson is that moving formerly local responsibilities into shared infrastructure introduced scale and operational problems beyond application-code bugs. [37:59–41:00](https://www.youtube.com/watch?v=7QkzdzwQp20&t=2279s)
- **Evaluate whether agents can inspect a platform before granting them more control.** Ball would now ask whether an agent can retrieve logs, inspect health, and diagnose failures before considering write access. He describes an Amp plugin that gathers operational data for incident diagnosis. Santos gives Namespace's corresponding principle: capabilities exposed in the UI should also have an API, with some newer capabilities available only through APIs or the CLI. The practical criterion is access to useful evidence, not merely an "agent-first" label. [41:00–43:44](https://www.youtube.com/watch?v=7QkzdzwQp20&t=2460s)

Full video: <https://www.youtube.com/watch?v=7QkzdzwQp20>
