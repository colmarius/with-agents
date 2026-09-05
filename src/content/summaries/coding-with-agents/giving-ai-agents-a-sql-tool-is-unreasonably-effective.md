---
title: "Giving AI agents a SQL tool is unreasonably effective"
resourceId: 109
date: "2026-09-04"
---

Lewis Ellis of Conductor describes SQL as a compact tool interface for agents, drawing on work with YC's database and Conductor's conversation transcripts. His central idea: database schemas and views can supply both query capabilities and useful context without a separate tool for every data source.

### Main takeaways

- **Constrain execution before handing over SQL.** [06:02](https://www.youtube.com/watch?v=uMudSbZ79-A&t=362s)–[07:05](https://www.youtube.com/watch?v=uMudSbZ79-A&t=425s): Ellis recommends read replicas, read-only roles, statement and connection timeouts, row and result-size limits, and audit logs. He describes Conductor's tenant-scoped views using PostgreSQL configuration inside a transaction that is rolled back. This is an implementation sketch, not a demonstrated isolation guarantee.
- **Supply schema semantics, not just table names.** [07:05](https://www.youtube.com/watch?v=uMudSbZ79-A&t=425s)–[10:05](https://www.youtube.com/watch?v=uMudSbZ79-A&t=605s): include model code or other context explaining columns. Agents can try keyword combinations, inspect rows, and follow foreign keys repeatedly. Ellis reports that removing a vector-search tool improved results in one YC setup; he does not present a controlled SQL-versus-vector-search comparison.
- **Treat schema and views as tool design.** [10:05](https://www.youtube.com/watch?v=uMudSbZ79-A&t=605s)–[11:47](https://www.youtube.com/watch?v=uMudSbZ79-A&t=707s): return compact results, consider CSV instead of JSON, and turn recurring joins into views referenced by the prompt. Return query errors to the agent for correction; repeated failures can reveal missing schema explanations or useful views. Token and tool-call savings are presenter claims, not measured benchmarks in the recording.
- **Make more context queryable.** [11:47](https://www.youtube.com/watch?v=uMudSbZ79-A&t=707s)–[13:41](https://www.youtube.com/watch?v=uMudSbZ79-A&t=821s): Ellis proposes mirroring third-party data into a database or presenting it through DuckDB. Audit the resulting queries and use failures to refine views and known-good query examples. Editorial caveat: mirroring does not remove upstream access rules, retention obligations, or ingestion limits.
- **Keep access and context boundaries explicit.** [14:39](https://www.youtube.com/watch?v=uMudSbZ79-A&t=879s)–[17:47](https://www.youtube.com/watch?v=uMudSbZ79-A&t=1067s): in Q&A, Ellis points to role-restricted views and omitting PII, without establishing a complete sensitive-data policy. For oversized schemas, select relevant tables and curated views, limit result sizes, or split querying across agents with different initial context.

### Practical interpretation

Start with a narrow, read-only dataset and inspect real query traces before adding specialized retrieval tools. Improve the schema context and common views where those traces show repeated work. This is an editorial synthesis of the talk, not evidence that arbitrary SQL access is safe: validate tenant boundaries, data exposure, and query correctness separately from operational timeouts.

Full video: [The SF Database Meetup — Giving AI agents a SQL tool is unreasonably effective](https://www.youtube.com/watch?v=uMudSbZ79-A).
