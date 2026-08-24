---
title: "Serverless Expeditions"
status: reviewed
coveredVideoIds:
  - zRjOSxTpC3A
  - HbsHC8gq_NQ
  - e07TvWMmVI8
  - 8YtsV8BNTqY
  - S2evHtbl4F8
  - IqAe1WRPjfU
  - yqMKr37mGJw
  - JIE89dneaGo
  - bIL8Gb3D8Yg
  - Ce93fpQrKCk
  - r3oZVYVSbqg
  - ArDuQDjW-DQ
  - 04Gap8vWV28
  - o3aE4tw3vrI
---

## Coverage

- Manifest: 182 entries, all currently available according to the committed manifest.
- Selected: 14 reviewed sources; all 14 are captured.
- Summaries: 14, all `reviewed`.
- Incorporated: 14.
- Pending selected video IDs: none.
- Unavailable selected video IDs: none.
- Editorial: This is exact 14/14 captured, summarized, and incorporated coverage of the reviewed selection. The other 168 manifest entries remain tracked but are outside this curation.

## Current Thesis

- Editorial: Across the historical serverless core, architecture starts with workload shape and explicit boundaries: trigger, execution duration, packaging, state, authorization, retry, scaling, release, and response to failure. Managed services reduce infrastructure work, but they do not remove application-level responsibility ([Functions versus Run](../../videos/zRjOSxTpC3A/summary.md), [Cloud Run Jobs](../../videos/e07TvWMmVI8/summary.md), [serverless app design](../../videos/HbsHC8gq_NQ/summary.md), [Workflows](../../videos/yqMKr37mGJw/summary.md)).
- Editorial: The collection is strongest when its demonstrations are treated as dated design evidence rather than current setup instructions. Product boundaries, commands, IAM roles, console paths, service limits, pricing, and managed behavior all require present-day verification ([Functions versus Run](../../videos/zRjOSxTpC3A/summary.md), [Spanner](../../videos/IqAe1WRPjfU/summary.md), [Secret Manager](../../videos/JIE89dneaGo/summary.md), [Terraform](../../videos/Ce93fpQrKCk/summary.md)).
- Editorial: The two selected AI-agent videos form a deliberately separate 2025–26 appendix. They use Cloud Run as a hosting or deployment option, but their central subject is fast-moving MCP, ADK, tool, and agent behavior rather than an extension of the historical serverless model (2025-11-06, `04Gap8vWV28` [00:00:00]-[00:08:30]; 2026-07-23, `o3aE4tw3vrI` [00:00:51]-[00:07:07]).

## Stable Ideas

- Editorial: **Foundations:** Match the execution model to the work. Event handlers, request-serving containers, unattended batch jobs, and scheduled or orchestrated processes expose different trigger, duration, packaging, and rollout requirements ([Functions versus Run](../../videos/zRjOSxTpC3A/summary.md), [Cloud Run Jobs](../../videos/e07TvWMmVI8/summary.md), [serverless app design](../../videos/HbsHC8gq_NQ/summary.md)).
- Editorial: **Eventing:** Keep producers, orchestrators, and consumers decoupled, but make acknowledgement, ordering keys, retry policy, compensation, and recovery paths explicit. Pub/Sub fan-out narrows retry scope; Workflows separates transient retries from Saga compensation ([serverless app design](../../videos/HbsHC8gq_NQ/summary.md), [Pub/Sub ordering](../../videos/S2evHtbl4F8/summary.md), [Workflows retries and Saga](../../videos/yqMKr37mGJw/summary.md)).
- Editorial: **Data:** Choose stores from access patterns and consistency needs, then plan for the operational duties the managed service retains. The examples distinguish document state and audit reporting from relational transactions, aggregation, schema migration, backup policy, access control, and capacity planning ([serverless app design](../../videos/HbsHC8gq_NQ/summary.md), [Spanner](../../videos/IqAe1WRPjfU/summary.md)).
- Editorial: **Security:** Give each runtime a dedicated identity and only the permissions and secrets it needs. Secret storage, access auditing, custom IAM roles, and repeatable policy modules reduce exposure but require rotation and role lifecycle work ([Secret Manager](../../videos/JIE89dneaGo/summary.md), [least privilege](../../videos/bIL8Gb3D8Yg/summary.md)).
- Editorial: **Delivery:** Store infrastructure intent in version control, automate build and test steps, rehearse rollback, and separate deployment from exposure through traffic splitting or feature controls ([Terraform](../../videos/Ce93fpQrKCk/summary.md), [safe deployments](../../videos/ArDuQDjW-DQ/summary.md), [Functions versus Run](../../videos/zRjOSxTpC3A/summary.md)).
- Editorial: **Reliability:** Test the whole dependency chain against user-facing objectives. Request-tier scaling does not prove database capacity or acceptable latency, and useful alerts focus on user symptoms, actionable urgency, and non-automated response ([Cloud Run scalability](../../videos/8YtsV8BNTqY/summary.md), [alerting](../../videos/r3oZVYVSbqg/summary.md), [safe deployments](../../videos/ArDuQDjW-DQ/summary.md)).

## Emerging Ideas

- Editorial: **Separate 2025–26 AI-agent appendix — MCP tools:** The November 2025 demonstration presents MCP as a common tool-discovery and invocation layer, with Cloud Run hosting an MCP server and an ADK agent. Authentication was explicitly described as evolving, so the protocol, FastMCP behavior, ADK integration, and Cloud Run authentication pattern are point-in-time evidence, not current guarantees ([MCP tools summary](../../videos/04Gap8vWV28/summary.md); 2025-11-06, `04Gap8vWV28` [00:00:00]-[00:08:30]).
- Editorial: **Separate 2025–26 AI-agent appendix — data agents:** The July 2026 demonstration uses ADK and a managed BigQuery MCP server, treats instructions as versioned operational context, and compares Cloud Run with Agent Engine deployment. Managed MCP availability, Agent Engine interfaces, model behavior, and the guest's stronger claim that reading actual tables means the agent is not hallucinating are all fast-moving and require independent evaluation ([BigQuery agent summary](../../videos/o3aE4tw3vrI/summary.md); 2026-07-23, `o3aE4tw3vrI` [00:00:51]-[00:07:07]).
- Editorial: These two videos are useful as an appendix about tools, instructions, authorization, evaluation, and deployment choices. They should not be read as evidence that AI-agent frameworks replace the collection’s stable eventing, data, security, delivery, or reliability responsibilities.

## Revisions and Tensions

- Editorial: The October 2020 Functions-versus-Run comparison predates Cloud Run functions convergence. Its runtime list, registry, deployment commands, custom-domain path, and feature matrix document that episode’s moment rather than a current selection boundary (2020-10-15, `zRjOSxTpC3A` [00:00:00]-[00:19:05]; [summary](../../videos/zRjOSxTpC3A/summary.md)).
- Editorial: The 2021 architecture, Pub/Sub, Secret Manager, and Terraform episodes show then-current commands, IAM permissions, APIs, console controls, and integrations. Their design concerns remain useful, but implementation details need current documentation (2021-04-08, `Ce93fpQrKCk` [00:01:03]-[00:04:16]; 2021-05-13, `JIE89dneaGo` [00:01:03]-[00:05:14]; 2021-06-03, `HbsHC8gq_NQ` [00:01:03]-[00:12:38]; 2021-08-12, `S2evHtbl4F8` [00:01:05]-[00:06:18]).
- Editorial: The December 2023 Cloud Run load test reports success for one short synthetic setup, but omits request rate, latency distribution, instance count, configuration, region, concurrency, and duration. It is not a capacity guarantee for another workload (2023-12-01, `8YtsV8BNTqY` [00:00:00]-[00:06:26]; [summary](../../videos/8YtsV8BNTqY/summary.md)).
- Editorial: The April 2022 Spanner episode’s unqualified product-wide request-rate figure, consistency, availability, processing-unit, CPU-threshold, and price statements are point-in-time claims, not demonstrated per-application results or current commercial terms (2022-04-14, `IqAe1WRPjfU` [00:01:03]-[00:07:21]; [summary](../../videos/IqAe1WRPjfU/summary.md)).
- Editorial: The 2024 delivery episode presents canary and experiment heuristics rather than universal rollout formulas. Cohort assignment, observation windows, session affinity, feature controls, metrics, and capacity must fit the application ([safe deployments](../../videos/ArDuQDjW-DQ/summary.md)).

## Practical Implications

- Editorial: Start an architecture review by naming each workload’s trigger, completion condition, state transition, retry and compensation policy, identity, dependency limits, rollout path, rollback path, and user-facing objective; choose current services only after those constraints are explicit.
- Editorial: Treat least privilege, secret rotation, idempotency, dead-letter or recovery paths, database capacity, infrastructure state, and alert ownership as application design work even when the execution platform is managed ([least privilege](../../videos/bIL8Gb3D8Yg/summary.md), [Workflows](../../videos/yqMKr37mGJw/summary.md), [alerting](../../videos/r3oZVYVSbqg/summary.md)).
- Editorial: Reproduce scaling and release tests with representative traffic, downstream systems, latency objectives, failure conditions, and observation windows rather than adopting the demonstrations’ headline results ([Cloud Run scalability](../../videos/8YtsV8BNTqY/summary.md), [safe deployments](../../videos/ArDuQDjW-DQ/summary.md)).
- Editorial: For the AI-agent appendix, independently validate current MCP and ADK interfaces, authenticate and authorize every tool boundary, constrain data access, evaluate generated queries and answers, version instructions, and add observability before production use ([MCP tools](../../videos/04Gap8vWV28/summary.md), [BigQuery agent](../../videos/o3aE4tw3vrI/summary.md)).
