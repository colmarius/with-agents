---
title: "Build a BigQuery AI agent with ADK & Cloud Run"
videoId: o3aE4tw3vrI
sourceUrl: "https://www.youtube.com/watch?v=o3aE4tw3vrI"
publishedAt: "2026-07-23T19:00:37Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Martin hosts a guest whom the auto-generated captions render as “Muslim Tossun” and introduce as head of data at “Group Bes” in Paris and a Google Cloud Developer Expert. Because those name and organization spellings are not independently established by this source record, the summary refers to him below as the guest. He demonstrates a BigQuery question-answering agent built with Google's Agent Development Kit (ADK) and a managed BigQuery MCP server.

This is a fast-moving July 2026 point-in-time demonstration: ADK, MCP servers, Agent Engine, model behavior, and product APIs may have changed. It is editorially separate from the playlist's historical serverless core; Cloud Run is one deployment option for the AI agent rather than the video's central subject.

## Key Ideas

- The guest says the demo uses ADK and the BigQuery MCP server to let users ask questions over organization data in plain English. [00:00:51]-[00:01:41]
- In the football demo, the guest says the agent inspects BigQuery tables and writes SQL rather than performing a keyword search; his stronger claim that this means it is not hallucinating is not established by the demonstration. [00:01:41]-[00:02:36]
- A system instruction documents tables, columns, query steps, and business rules; the guest compares this context to an operating procedure for the agent. [00:02:36]-[00:04:28]
- The guest presents the managed BigQuery MCP server as a reusable tool adapter and names Cloud SQL, Pub/Sub, and Cloud Storage as other managed MCP server examples available at that point. [00:04:28]-[00:05:16]
- The guest presents two deployment choices: Cloud Run for a container and service under the developer's control, or Agent Engine for managed sessions, app versions, and a test UI. He says the Agent Engine setup shown does not expose a REST API directly and therefore needs a client-facing proxy. [00:05:16]-[00:06:18]
- The guest says instructions should evolve with schema and business rules. [00:06:18]-[00:07:07] He then recommends separate Markdown files so non-developers can update them outside Python code. [00:07:07]

## Practical Implications

- Editorial: Teams should version and review agent instructions alongside schema and business-rule changes, while re-validating current ADK and MCP APIs.
- Editorial: Database access still needs least-privilege controls, query validation, evaluation, and monitoring; the demo does not establish those production safeguards.

## Questions and Tensions

- Editorial: Reading real tables can ground an answer, but it does not by itself guarantee correct SQL, interpretation, or output.
- Editorial: A general managed tool reduces custom adapters while increasing dependence on runtime tool discovery and evolving platform behavior.

## Source

- https://www.youtube.com/watch?v=o3aE4tw3vrI
- [transcript.md](./transcript.md)
