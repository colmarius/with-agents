---
title: "Think Harder: How I Prompt"
resourceId: 38
date: "2026-07-30"
---

At Laracon US 2026, Thorsten Ball presents prompting as an information-design problem rather than a collection of magic phrases. A coding agent can interpret a request only through its training data and current context, so good prompting makes the necessary code, constraints, examples, conversations, screenshots, diagnostics, and repository instructions discoverable.

### Key Points Covered

- **The workflow is deliberately ordinary**: Ball says Amp is a complex distributed product whose code is almost entirely AI-written, yet his own prompts rely on little special machinery: no MCP servers, one or two skills, no framework, and no elaborate slash-command setup [04:20:26]-[04:24:22].
- **Ask where the information is supposed to come from**: His central question is how the model could know what the developer means. Training data supplies general knowledge; the context window supplies system instructions, tools, conversation history, tool results, repository content, and the prompt itself [04:24:22]-[04:25:25].
- **Treat the model like an expert dropped into an unfamiliar room**: An agent may confidently act on “fix the bug with the upload” instead of asking which bug or upload. Ball’s reader-oriented mental model asks what the agent already knows, what it is missing, and where that missing information can be found [04:26:16]-[04:28:17].
- **Large prompts should externalize hidden context, not prescribe every edit**: For Amp’s daemon mode, Ball pointed the agent to relevant directories, files, provider documentation, architectural constraints, lifecycle requirements, and his rough intended design. A later redesign also included the files that described current behavior and a screenshot of the team’s Slack discussion [04:28:17]-[04:32:16].
- **Use an investigation prompt before the implementation prompt**: In what he calls the “one-two punch,” Ball first asks the agent to locate an asset or understand an existing mechanism. That search puts the relevant files and behavior into context; only then does he ask for variations or a change [04:32:16]-[04:34:16].
- **Point to a gold standard when “broken” is underspecified**: To repair message queuing in Amp’s web interface, Ball first identified the CLI implementation as the reference and named the queue, steer, unsteer, and dequeue behaviors that mattered. The agent then had both the desired mechanism and the failing counterpart to compare [04:34:16]-[04:35:04].
- **Generate context instead of typing it repeatedly**: Amp’s debug prompts collect IDs, documentation, data dumps, scripts, URLs, and production diagnostics. Report IDs let an agent retrieve logs and debug state through a tool, turning a short request into an investigation backed by detailed evidence [04:35:04]-[04:39:07].
- **Screenshots are compact context carriers**: Ball says most of his prompts include screenshots. They can preserve a customer question, GitHub reference, visual target, or component state, often giving the agent enough evidence to locate the relevant code before the textual request arrives [04:37:11]-[04:40:11].
- **The shortest useful prompt is enabled by an informative codebase**: Ball’s preferred end state moves repeatable “how” instructions into nearby `AGENTS.md` files—commands, browser-automation guidance, Storybook conventions, ports, and checks. In his example, the prompt asks the agent to make a UI change and return a screenshot of the updated Storybook story as verification; the repository instructions explain how to run Storybook and capture that evidence [04:40:11]-[04:42:11].
- **Keep a sharper mental model of load-bearing code**: In the Q&A, Ball distinguishes core protocols, runtime behavior, domain logic, and business constraints from less consequential edge code. The team documents and closely reviews those foundations, then experiments with giving agents a longer leash to learn where more documentation or scrutiny is needed [04:42:11]-[04:44:16].

Talk excerpt: [04:20:26–04:44:37](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15626s) from the Laracon US 2026 Day 2 livestream.
