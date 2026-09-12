---
title: "Build a BigQuery AI agent with ADK & Cloud Run"
resourceId: 59
date: "2026-07-23"
collection: "google-cloud-serverless-expeditions"
order: 14
videoId: "o3aE4tw3vrI"
---

An AI agent can let people ask questions of a database without writing SQL themselves. In this July 2026 demonstration, Martin and his guest build one with Google's Agent Development Kit (ADK) and a managed BigQuery server using Model Context Protocol (MCP), a shared interface for agent tools.

### Key points

- **The agent queries data rather than searching keywords:** Asked for France's top scorers in the 2022 World Cup, the agent uses a goals-scored column and writes SQL to return players from the BigQuery database. The guest argues that reading real tables prevents hallucination; the demo grounds the answer in data, but does not prove the SQL or interpretation cannot be wrong [00:51–02:36](https://www.youtube.com/watch?v=o3aE4tw3vrI&t=51s).
- **Instructions explain how to use this database:** The system instruction describes tables, columns, query steps, and business rules such as calculating a team's performance rating. The guest compares it to an operating procedure: access to a database does not tell the agent how the business organizes or interprets its data [02:36–04:28](https://www.youtube.com/watch?v=o3aE4tw3vrI&t=156s).
- **MCP reduces custom connection code:** A hand-written Python tool could also compose and send SQL. The guest favors a managed MCP server because agents can discover its tools at runtime and different agent clients can reuse the same interface, rather than each project building its own adapter [03:23–05:16](https://www.youtube.com/watch?v=o3aE4tw3vrI&t=203s).
- **The deployment choices have bounded behavior:** The guest presents Cloud Run as a container and service under developer control, and Agent Engine as managing sessions, application versions, and a test UI. He says the Agent Engine setup shown does not expose a REST API directly and needs a client-facing proxy [05:16–06:18](https://www.youtube.com/watch?v=o3aE4tw3vrI&t=316s).

The guest recommends updating instructions as tables and business rules change, and keeping them in separate Markdown files so non-developers can edit them without changing Python code [06:18–08:10](https://www.youtube.com/watch?v=o3aE4tw3vrI&t=378s).

Full video: <https://www.youtube.com/watch?v=o3aE4tw3vrI>
