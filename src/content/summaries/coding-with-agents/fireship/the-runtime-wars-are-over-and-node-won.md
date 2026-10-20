---
addedDate: '2026-10-20'
title: "The runtime wars are over... and Node won"
resourceId: 185
date: '2026-10-15'
collection: fireship
order: 2
videoId: l3L_lETiSzc
---

Fireship frames Cloudflare's reported acquisition of Deno as a shift from competing JavaScript runtimes toward portable, stateful infrastructure. This October 2026 news commentary is summarized from English auto-generated captions, not an inspection of the video's visuals; acquisition details and product deadlines below are Fireship's account.

## Key ideas

- Deno originally differentiated itself with built-in development tools, TypeScript support, default security restrictions, and different package management. Fireship argues that Node's later additions, including fetch, permissions, and direct TypeScript execution, narrowed that distinction while Deno's commercial services struggled. [01:01–02:55](https://www.youtube.com/watch?v=l3L_lETiSzc&t=61s)
- Fireship describes Durable Objects as single-threaded servers with private SQLite storage and WebSocket connections. These combine computation, persistent state, and live connections, but their dependence on Cloudflare creates a deployment constraint. [02:55–03:58](https://www.youtube.com/watch?v=l3L_lETiSzc&t=175s)
- In Fireship's account, Deno's Cell D project made this model self-hostable. Cloudflare's acquisition aims to merge it into the open-source Workers runtime so developers can run Workers and Durable Objects on their own infrastructure with official support. The claimed cost advantage is not independently measured here. [02:55–05:01](https://www.youtube.com/watch?v=l3L_lETiSzc&t=175s)
- Fireship reports one year of Deno bug and security fixes before development stops, and roughly six months for Deno Deploy users to migrate. The conclusion that Node has "won" is the video's interpretation of runtime ownership and Deno's retreat, not a comparative performance result. [03:58–05:01](https://www.youtube.com/watch?v=l3L_lETiSzc&t=238s)

## Practical implications

Editorial: Existing Deno users should verify current support and migration deadlines against official documentation before planning a move. The stateful-infrastructure discussion suggests evaluating storage, connections, and hosting portability separately from runtime syntax or tooling.

## Questions and limits

Editorial: A self-hostable runtime may reduce deployment dependence, but this report does not establish operational parity or total running costs. The closing JetBrains segment is sponsored promotion, including a personal coding-agent anecdote and dated free-model claims, rather than evidence for the runtime argument. [03:58–05:40](https://www.youtube.com/watch?v=l3L_lETiSzc&t=238s)

Full video: <https://www.youtube.com/watch?v=l3L_lETiSzc>
