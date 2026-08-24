---
title: "Power your AI agents with MCP tools on Google Cloud Run"
videoId: 04Gap8vWV28
sourceUrl: "https://www.youtube.com/watch?v=04Gap8vWV28"
publishedAt: "2025-11-06T17:00:02Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin hosts Jack, a Python developer advocate at Google Cloud with a background in open source database client libraries. Jack demonstrates a 2025 point-in-time MCP tool setup; MCP, ADK, authentication support, libraries, and deployment APIs are fast-moving and may differ from the versions shown.

This AI-agent demonstration is editorially separate from the playlist's historical serverless core: Cloud Run is the hosting substrate here, while MCP tool discovery and invocation are the focus.

## Key Ideas

- MCP provides a common protocol through which agents can discover and call tools backed by APIs, databases, or custom code. [00:00:00]-[00:01:56]
- The example hosts a quote-calculation MCP server on Cloud Run and connects an AI chatbot to it. [00:01:56]-[00:03:54]
- FastMCP exposes a Python function as a tool, while an ADK agent receives the MCP server address as an MCP toolset. [00:03:54]-[00:05:40]
- The demonstration distinguishes user-oriented OAuth from Cloud Run bearer authentication for service-to-service access, while explicitly noting that MCP authentication was still evolving. [00:06:44]-[00:07:38]
- FastMCP can generate an MCP server from an OpenAPI specification or proxy an existing API. [00:07:38]-[00:08:30]

## Practical Implications

- As an implication, API owners can evaluate MCP as an adapter rather than replacing existing business logic, but should re-check current protocol and authentication guidance.
- Remote tools need deliberate authorization and service boundaries; deploying them serverlessly does not remove that design work.

## Questions and Tensions

- Runtime discovery reduces framework-specific glue, but shifts trust toward tool metadata, agent behavior, and a still-evolving protocol.
- The demo does not cover production authorization policy, tool-call validation, observability, or failure handling.

## Source

- https://www.youtube.com/watch?v=04Gap8vWV28
- [transcript.md](./transcript.md)
