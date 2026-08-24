---
title: "Power your AI agents with MCP tools on Google Cloud Run"
resourceId: 59
date: "2025-11-06"
collection: "google-cloud-serverless-expeditions"
order: 13
videoId: "04Gap8vWV28"
---

**Fast-moving 2025–2026 appendix:** This AI-agent demonstration is separate from the collection's stable serverless core. Cloud Run is the hosting substrate; MCP tool discovery, ADK integration, and authentication are the subject, and they should not be used as support for stable serverless-core claims.

### Key points

- **MCP is presented as a common tool interface:** A Python developer advocate at Google Cloud describes the Anthropic-developed protocol as a way for agents to discover and call APIs, query databases, or run custom code [00:00:00]-[00:01:56]. This is the presenter's framing, not an evaluation of agent correctness.
- **The demo connects two hosted components:** A quote-calculation MCP server runs on Cloud Run, and an ADK chatbot calls it as a tool [00:01:56]-[00:05:40]. In the versions shown, a FastMCP decorator exposes the Python function and the ADK agent receives the server address as an MCP toolset.
- **Authentication is explicitly evolving:** The presenter says the MCP support shown includes OAuth for user authentication and can use Cloud Run bearer authentication for service-to-service access [00:06:44]-[00:07:38]. The episode does not establish a complete authorization design.
- **Existing APIs can be adapted:** The presenter says the demonstrated FastMCP version can generate an MCP server from an OpenAPI specification or proxy an existing API [00:07:38]-[00:08:30].

Treat this as November 2025 point-in-time evidence. Revalidate the MCP specification, FastMCP and ADK behavior, Cloud Run deployment and authentication, tool authorization, validation, observability, and failure handling before current use.

Full video: <https://www.youtube.com/watch?v=04Gap8vWV28>
