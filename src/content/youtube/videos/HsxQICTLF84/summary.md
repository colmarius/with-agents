---
title: "Building an ACP-Compatible Agent Live — Bennet Fenner, Zed"
videoId: HsxQICTLF84
sourceUrl: "https://www.youtube.com/watch?v=HsxQICTLF84"
publishedAt: "2026-07-08T12:00:07Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Bennet Fenner of Zed demonstrates how to adapt a minimal TypeScript coding agent to the Agent Client Protocol (ACP), a JSON-RPC-based interface intended to let agents and editor clients interoperate. His starting agent has only read and edit tools plus a stateless model loop; the live changes add sessions, prompts, cancellation, streamed model text, and tool-call updates ([00:00:14]-[00:06:46], [00:07:35]-[00:13:04]).

Fenner then uses ACP client capabilities for file access and terminal management, including letting the agent add a terminal tool to itself. The demo shows the protocol boundary working through Zed while also surfacing duplicated events, production-readiness limits, and the current standard-I/O transport constraint ([00:12:15]-[00:17:38]).

## Key Ideas

- Fenner presents ACP as an open-source, JSON-RPC-based protocol analogous to MCP or LSP, designed to give different coding agents and clients one communication interface ([00:00:14]-[00:01:06]).
- He says the ecosystem includes adapters for agents with native interfaces, built-in ACP modes in some CLI agents, and as many as 40 clients, with capabilities advertised by both client and agent ([00:01:06], [00:03:51]-[00:04:54]).
- The starting coding agent repeatedly sends accumulated conversation state to a stateless model API, executes a requested read or edit tool locally, appends the result, and calls the model again ([00:02:01]-[00:03:51]).
- A minimal ACP adapter initializes a protocol version, creates per-thread sessions, routes text prompts to the matching agent instance, and supports cancellation ([00:03:51]-[00:06:46]).
- ACP session updates carry streamed model text and structured tool-call state; initial and later tool updates let a client render progress, locations, results, and file content ([00:07:35]-[00:13:04]).
- Client-provided file-system access can expose unsaved editor buffers to the agent, while terminal capabilities let the agent request and display interactive command execution through the client ([00:12:15]-[00:16:42]).

## Practical Implications

- Keep the core model/tool loop independent from the editor integration, then implement the protocol boundary around session lifecycle, prompt routing, cancellation, and incremental updates ([00:02:01]-[00:06:46]).
- Prefer client-provided file and terminal capabilities when the client owns state the local process cannot see, such as unsaved buffers or interactive terminal presentation ([00:12:15]-[00:16:42]).
- Emit tool calls as structured lifecycle events instead of plain model text so clients can display progress, associate locations, and update results without understanding each agent's native API ([00:10:23]-[00:13:04]).

## Questions and Tensions

- The live read/edit integration produced duplicated output and an unsuccessful edit demonstration, which Fenner did not debug during the talk ([00:13:04]-[00:14:52]).
- Fenner warns that the agent-generated demo code should not be used in production; the talk does not cover persistence, authentication beyond a local environment variable, recovery, or hostile-client boundaries ([00:04:54]-[00:05:57], [00:16:42]).
- ACP worked over standard I/O in the demonstrated setup, while Fenner described remote transport as future work rather than an available capability ([00:17:38]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=HsxQICTLF84)
- [transcript.md](./transcript.md)
