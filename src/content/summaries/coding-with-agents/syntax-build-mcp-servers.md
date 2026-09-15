---
title: "How to Build MCP Servers"
resourceId: 94
collection: syntax-agent-workflows
order: 5
videoId: "CCaUnet8SB4"
date: "2025-07-16"
---

Wes walks Scott through a currency-conversion MCP server, using it to explain tool discovery, schemas, transports, and reusable server capabilities. The practical goal is to let an AI application delegate calculations and rate lookups rather than invent their results.

Based on the saved English auto-generated captions; no original-audio verification was performed. SDK, hosting, and client-support observations describe July 2025, not a current compatibility guide. The application examples are the hosts' demonstrations and experience, not independently measured reliability results.

### Key points

- **Separate language interpretation from calculation and data retrieval.** Wes's scratchpad app interpreted natural-language math requests but sometimes produced wrong totals. He added a math.js tool so software evaluated the calculation and returned its answer to the model. A separate MCP server supplied currency rates, conversions, and historical rates that the model could request when needed [02:06–05:50](https://www.youtube.com/watch?v=CCaUnet8SB4&t=126s).
- **Tool names, descriptions, and schemas tell the model what it can request.** Wes explains that names and descriptions guide tool selection, while warning that too many tools can make selection harder. In his implementation, Zod schemas describe inputs such as source currency, destination currency, and amount, and validate them before the handler uses them. He distinguishes this from output schemas, which he had defined but had not found supported in the clients he tried [05:50–07:55](https://www.youtube.com/watch?v=CCaUnet8SB4&t=350s), [16:05–18:56](https://www.youtube.com/watch?v=CCaUnet8SB4&t=965s).
- **Transport and authentication determine how clients reach a server.** The walkthrough contrasts a local process communicating over standard input/output with an HTTP endpoint. Wes shows listing and calling currency tools, explains JSON responses versus server-sent-event streams, and describes OAuth consent for account-connected services. He flags the hosting implications of keeping streams open; his Cloudflare and Vercel references are video-date implementation examples [06:53–10:59](https://www.youtube.com/watch?v=CCaUnet8SB4&t=413s).
- **Inspect tools, resources, and prompts separately.** MCP Inspector and MCP Jam expose what a server offers. Wes contrasts his earlier SVG workaround with returning a resource, then loads a Cloudflare prompt containing coding guidance and examples. A server can thus supply both operations and supporting context; the episode's expectations about automatically fetching prompts are not a guarantee of every client's behavior [10:59–12:59](https://www.youtube.com/watch?v=CCaUnet8SB4&t=659s), [13:57–16:05](https://www.youtube.com/watch?v=CCaUnet8SB4&t=837s).
- **Choose MCP for a reusable integration, not merely because a function exists.** Wes uses a local math function for a simple calculation and MCP for separately exposed services such as currency data, Cloudflare, and Sentry. He presents the distinction as his working mental model, emphasizing overlap, remote access, authentication, and the shared specification. This is an architectural preference, not a universal rule that ordinary tool calling must execute locally [18:56–21:49](https://www.youtube.com/watch?v=CCaUnet8SB4&t=1136s).
- **Client compatibility and documentation access are practical concerns.** Wes describes using `mcp-remote` as a local proxy when a client lacks remote-server support. He also explains why a documentation tool helps: it can retrieve relevant examples and types without manual copying, providing context for libraries that a model's training may not cover well. The stated compatibility gaps and model limitations belong to the recording date [24:48–28:51](https://www.youtube.com/watch?v=CCaUnet8SB4&t=1488s).
- **Expose useful operations rather than blindly mirroring an API.** The hosts consider MCP an interaction layer: one tool may coordinate several API requests in a required order, much as a UI action does. They see particular value in changing state, avoiding repetitive UI clicks, and connecting tools. Automatically generating a UI from tool definitions is an idea they discuss, not a demonstrated result [23:45–25:51](https://www.youtube.com/watch?v=CCaUnet8SB4&t=1425s), [28:51–32:55](https://www.youtube.com/watch?v=CCaUnet8SB4&t=1731s).

Full video: <https://www.youtube.com/watch?v=CCaUnet8SB4>
