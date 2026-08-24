---
title: "Build a BigQuery AI agent with ADK & Cloud Run"
resourceId: 59
date: "2026-07-23"
collection: "google-cloud-serverless-expeditions"
order: 14
videoId: "o3aE4tw3vrI"
---

**Fast-moving 2025–2026 appendix:** This July 2026 demonstration uses ADK and a managed BigQuery MCP server, with Cloud Run as one deployment choice. It is separate from the stable serverless core.

The auto-generated captions render the guest's name and organization as “Muslim Tossun” and “Group Bes,” but those spellings are not independently established by this source record. This summary therefore refers to him as the guest rather than inventing proper nouns or affiliations.

### Key points

- **The agent turns questions into database operations:** In a football demo, the guest says the agent inspects BigQuery tables and writes SQL rather than searching keywords [00:00:51]-[00:02:36]. Reading actual tables can ground an answer, but it does not prove the SQL, interpretation, or output is free from hallucination or other error.
- **Instructions supply operational context:** A system instruction documents tables, columns, query steps, and business rules [00:02:36]-[00:04:28]. The guest later recommends evolving those instructions with schemas and rules and storing them in separate Markdown files [00:06:18]-[00:07:07].
- **Managed tool availability is point-in-time:** The guest presents the managed BigQuery MCP server as a reusable adapter and names Cloud SQL, Pub/Sub, and Cloud Storage servers available at that time [00:04:28]-[00:05:16].
- **The deployment choices have bounded behavior:** The guest presents Cloud Run as a container and service under developer control, and Agent Engine as managing sessions, application versions, and a test UI. He says the Agent Engine setup shown does not expose a REST API directly and needs a client-facing proxy [00:05:16]-[00:06:18].

Revalidate current ADK, managed MCP servers, Agent Engine, Cloud Run, model, and authentication behavior. Production use also needs least-privilege data access, query validation, answer evaluation, versioned instructions, observability, and failure handling.

Full video: <https://www.youtube.com/watch?v=o3aE4tw3vrI>
