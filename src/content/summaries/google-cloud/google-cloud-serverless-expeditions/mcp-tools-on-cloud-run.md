---
title: "Power your AI agents with MCP tools on Google Cloud Run"
resourceId: 59
date: "2025-11-06"
collection: "google-cloud-serverless-expeditions"
order: 13
videoId: "04Gap8vWV28"
---

Model Context Protocol (MCP) gives agents a common interface for discovering and calling tools. In this November 2025 demonstration, Jack, a Python developer advocate at Google Cloud, connects a lawn-care chatbot to a sprinkler company's price-quote tool hosted on Cloud Run.

### Key points

- **The tool supplies a calculation the chatbot can call:** A customer asks what a sprinkler installation would cost. The quote tool calculates the price from the country and lawn area, letting the chatbot use the supplier's business logic rather than invent a price [01:56–04:49](https://www.youtube.com/watch?v=04Gap8vWV28&t=116s).
- **The server publishes the tool's interface:** A FastMCP annotation exposes the Python calculation function. The chatbot, built with Google's Agent Development Kit (ADK), receives the server URL as a toolset and discovers the tool's description and parameters. Both the chatbot and MCP server run on Cloud Run in the demo [03:54–05:40](https://www.youtube.com/watch?v=04Gap8vWV28&t=234s).
- **Authentication is explicitly evolving:** The presenter says the MCP support shown includes OAuth for user authentication and can use Cloud Run bearer authentication for service-to-service access [06:44–07:38](https://www.youtube.com/watch?v=04Gap8vWV28&t=404s). The episode does not establish a complete authorization design.
- **An existing API need not be rewritten:** Jack describes generating an MCP server from an OpenAPI specification, a description of an HTTP API, or writing a small FastMCP proxy that forwards calls to the existing API. These are ways to expose existing business logic through the common tool interface [07:38–08:30](https://www.youtube.com/watch?v=04Gap8vWV28&t=458s).

Full video: <https://www.youtube.com/watch?v=04Gap8vWV28>
