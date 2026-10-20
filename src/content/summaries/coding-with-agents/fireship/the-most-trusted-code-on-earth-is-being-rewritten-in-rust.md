---
addedDate: '2026-10-20'
title: "The most trusted code on Earth is being rewritten in Rust"
resourceId: 185
date: '2026-06-19'
collection: fireship
order: 38
videoId: Sntj4HmuykI
---

Fireship presents Turso's Rust database engine as an attempt to preserve SQLite's embedded simplicity while adding capabilities and a different contribution model. This summary uses English auto-generated captions, not compatibility tests or project documentation. Feature availability, performance, and compatibility claims are attributed to Fireship's dated report.

## Key ideas

- SQLite embeds a SQL engine inside an application rather than requiring a separate database server. Fireship links this small operational footprint to widespread adoption and contrasts its tightly controlled maintenance process with Turso's acceptance of outside contributions. "Not truly open source" is his governance criticism, not a claim that SQLite's code is unavailable. [00:00–02:06](https://www.youtube.com/watch?v=Sntj4HmuykI&t=0s), [03:59–05:02](https://www.youtube.com/watch?v=Sntj4HmuykI&t=239s)
- The reported concurrency change allows multiple writers with conflicts at overlapping rows, while asynchronous I/O yields control during disk operations instead of blocking the application thread. These are separate capabilities, not a claim that SQLite supports no concurrent access of any kind. [02:06–02:56](https://www.youtube.com/watch?v=Sntj4HmuykI&t=126s)
- Native vectors and indexing put embeddings alongside relational data, allowing similarity queries without operating a separate vector database. The operational simplification is co-location in an embedded engine; the transcript does not establish parity with every specialized vector service. [02:06–03:59](https://www.youtube.com/watch?v=Sntj4HmuykI&t=126s)
- Deterministic simulation tests storage behavior under controlled failures such as interrupted writes and corrupted pages. Replaying the same random seed makes a failure reproducible, helping investigate durability rather than merely measuring normal query behavior. [02:56–05:02](https://www.youtube.com/watch?v=Sntj4HmuykI&t=176s)

## Practical implications

Editorial: Evaluate migration compatibility and durability on the application's actual workload before replacing a trusted storage engine. Added features and a memory-safe implementation do not independently establish that data cannot be lost.

## Questions and limits

Editorial: Fireship's assertion of complete drop-in compatibility is not backed by an inspected test matrix here. The central tension is broader capability versus accumulated trust. JetBrains' closing model-selection, planning, benchmark, and credit claims are sponsored promotion. [02:56–05:19](https://www.youtube.com/watch?v=Sntj4HmuykI&t=176s)

Full video: <https://www.youtube.com/watch?v=Sntj4HmuykI>
