---
title: "Build a BigQuery AI agent with ADK & Cloud Run"
videoId: o3aE4tw3vrI
sourceUrl: "https://www.youtube.com/watch?v=o3aE4tw3vrI"
publishedAt: "2026-07-23T19:00:37Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin hosts Muslim Tossun, introduced in the transcript as head of data at Group Bes in Paris and a Google Cloud Developer Expert. Muslim demonstrates a BigQuery question-answering agent built with Google's Agent Development Kit (ADK) and a managed BigQuery MCP server.

This is a fast-moving July 2026 point-in-time demonstration: ADK, MCP servers, Agent Engine, model behavior, and product APIs may have changed. It is editorially separate from the playlist's historical serverless core; Cloud Run is one deployment option for the AI agent rather than the video's central subject.

## Key Ideas

- The demo uses ADK and the BigQuery MCP server to let users ask questions over organization data in plain English. [00:00:51]-[00:01:41]
- In the football example, the agent inspects BigQuery data, writes SQL, and returns an answer rather than performing a keyword search. [00:01:41]-[00:02:36]
- A system instruction documents tables, columns, query steps, and business rules; Muslim compares this context to an operating procedure for the agent. [00:02:36]-[00:04:28]
- Muslim presents managed MCP servers as reusable tool adapters and names Cloud SQL, Pub/Sub, and Cloud Storage examples available at that point. [00:04:28]-[00:05:16]
- The demonstrated deployment choices are Cloud Run for container-level control or Agent Engine for managed sessions, app versions, and a test UI, with a proxy needed for the described Agent Engine client access. [00:05:16]-[00:06:18]
- Instructions should evolve with schema and business rules; keeping them in separate Markdown files can make updates accessible outside Python code. [00:06:18]-[00:07:07]

## Practical Implications

- As an implication, teams should version and review agent instructions alongside schema and business-rule changes, while re-validating current ADK and MCP APIs.
- Database access still needs least-privilege controls, query validation, evaluation, and monitoring; the demo does not establish those production safeguards.

## Questions and Tensions

- Reading real tables can ground an answer, but it does not by itself guarantee correct SQL, interpretation, or output.
- A general managed tool reduces custom adapters while increasing dependence on runtime tool discovery and evolving platform behavior.

## Source

- https://www.youtube.com/watch?v=o3aE4tw3vrI
- [transcript.md](./transcript.md)
