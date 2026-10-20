---
addedDate: '2026-10-20'
title: "Uber’s AI infra, from the inside"
resourceId: 35
date: "2026-10-14"
collection: "pragmatic-engineer-selected-conversations"
order: 1
videoId: "MDUYSMJmi8A"
---

Uber distinguished engineer Uday Kiran Medisetty talks with Gergely Orosz about the infrastructure behind coding agents at Uber. His main lesson is that agents benefit from the same standardized environments, service contracts, testing systems, and ownership records that already helped engineers work across a large codebase.

This summary uses the publisher's English transcript, not YouTube captions or an independent audio or demonstration review. The publisher's media timeline differs from YouTube's, so the citations link to the episode page without unverified seek timestamps. Adoption figures and effectiveness claims are Medisetty's reports, not controlled findings.

### Key points

- **Standardized development environments gave agents a usable starting point.** Uber moved services into language-specific monorepos and built DevPods, cloud workspaces with repositories, tools, and build caches already configured. A newer workspace includes all repositories so agents can make cross-repository changes. Shared Bazel build and test commands also let top-level agent instructions work across teams, reducing per-project setup. [Source: DevPods and build tooling](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Separate shared infrastructure from the model and coding tool.** The model gateway exposes OpenAI- and Anthropic-compatible APIs, centralizes policy checks and logging, and attributes usage to projects and callers. AIFX, Uber's AI Foundations wrapper, distributes settings, plugins, and skills across coding tools and environments. Engineers can request higher spending tiers with manager approval; the aim is visibility and responsible use rather than preventing valuable work. [Source: AI foundations and spending](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Existing API contracts made internal tools accessible to agents.** Uber generates Model Context Protocol (MCP) tool definitions from its registry of Thrift and Protocol Buffers service contracts. Its MCP gateway also fronts custom and vendor tools, with CLI access as an alternative interface. Medisetty says moving shared skills to the CLI pattern reduced the context cost of keeping multiple MCP tool definitions loaded. This describes Uber's configuration, not a universal advantage of CLI over MCP. [Source: MCP gateway and skills repository](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Connect organizational context before searching deeply.** Uber's context graph links people, services, pull requests, design documents, incidents, and other records. Cortana, its internal assistant, uses those relationships to identify the relevant domain before retrieving detailed evidence. For a question about cash-paid trips, that can mean finding the right tables and prior queries rather than searching unrelated documents. Medisetty says the assistant preserves users' existing permissions and reports fewer turns and lower costs for some question categories. The interview provides no benchmark methodology. [Source: context graph and Cortana](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Background coding needs a specification and a way to check its work.** Minion can take a task or Slack conversation, work in a multi-repository DevPod, and produce one or more pull requests. Medisetty reports that about 15% of production PRs go through it. Early use focused on maintenance; expanding the tasks it can handle depends on giving it tools to validate web, mobile, and backend behavior. The percentage is a usage report, not a measure of autonomous success. [Source: Minion](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Move cheap checks into the agent's work loop, but retain human review.** Uber groups lint, build, coverage, and other checks behind a validation command so agents can fix problems before opening a PR. Code Inbox brings review signals together, while risk scoring and blast-radius information are being developed to help engineers allocate attention. Medisetty says every PR still requires an engineer's review; automatic landing for some low-risk changes is a possibility contingent on stronger evidence, not the current general policy. [Source: validation and Code Inbox](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Slate makes a branch testable within a larger service system.** Engineers deploy the services under test into a separate environment and pin a test account to those versions. Tracing metadata travels through the service mesh so requests reach the branch versions where needed and existing staging services elsewhere. Agents can use the same mechanism, run browser or API checks, and produce before-and-after reports. The enabling work was years of consistent tracing and routing across services. [Source: Slate testing](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Capture and replay provide concrete regression feedback.** Capri records incoming requests and responses as well as downstream API exchanges. Teams tag captured sessions with dimensions such as product and location, then replay relevant cases against a Slate environment and inspect differences. That can expose a change affecting a particular combination, such as a payment method in one country. It tests captured cases; the account does not establish that replay proves correctness for every possible input. [Source: Capri](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Automate maintenance and bug investigation around existing ownership.** Shepherd coordinates migration campaigns across team-owned modules. Fox lets services opt into recurring maintenance skills that propose PRs during periods of lower CI load. Separately, Wisdom collects employee-reported bugs and telemetry; DebugAssist proposes a root cause that an engineer can assess before handing it to Minion for a fix. These workflows generate evidence and proposed changes rather than removing review responsibility. [Source: Shepherd, Fox, and Wisdom](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

- **Measure feature delivery, not just the growing volume of changes.** Uber is classifying PRs by purpose and improving links between product plans, engineering plans, tasks, and code so it can measure feature cycle time and locate bottlenecks. Medisetty reports a rising share of feature PRs, but describes end-to-end measurement as ongoing work. He sees engineering effort shifting toward specifying constraints, supplying context, coordinating parallel tasks, and verifying results. [Source: productivity and the engineer's role](https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside).

### Practical implication

Editorial: Before adding more autonomous workers, check whether they can build the relevant code, access authorized context, reproduce a failure, and distinguish a fix from a regression. Uber's experience illustrates how an existing developer platform can support those steps; it does not imply that every team needs Uber's collection of custom services.

Full episode and publisher transcript: <https://newsletter.pragmaticengineer.com/p/ubers-ai-infra-from-the-inside>

YouTube video: <https://www.youtube.com/watch?v=MDUYSMJmi8A>
