---
title: "Hacking pi, the little coding agent that could, using pi"
resourceId: 83
date: "2025-11-14"
---

Mario Zechner live-builds Pi with Pi, moving from a terminal-editor shortcut bug to a branch-from-message feature. The useful material is the maintenance loop: reproduce behavior outside the agent, inspect generated changes, switch models without treating either as authoritative, and keep the workflow no larger than the need that motivated it.

This is an informal livestream demonstration, not a benchmark or controlled comparison. Zechner's comments about model speed, quality, cost, and context use describe this run and his setup. The 2h13m recording has no captured audio before 00:25:05, so its opening codebase walkthrough is visible but unsupported by the canonical English transcript.

### Debugging Pi with Pi

- **Turn ambiguous terminal behavior into a small observable test**: For an editor-shortcut issue, Zechner has Pi create a focused TUI key-code program, then compares emitted sequences and deletion behavior across terminal applications. The demonstration shows why the agent's first interpretation is insufficient; the expected behavior must be checked against real inputs and platform differences ([00:25:59–00:52:42](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=1559s)).
- **Run the agent against rebuilt source during development**: He keeps `npm run dev` running in another session, restarts Pi to pick up rebuilt code, and later invokes the source CLI directly. This shortens the edit-test loop in this repository; the stream does not compare it with other development setups ([00:37:34–00:54:34](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=2254s)).
- **Intervene before selective context misses relevant code**: When Claude starts by reading only slices of a large editor component, Zechner proactively asks it to read the whole file because he says selective reads usually miss important parts. He then switches to GPT-5.1 after a broken attempt, but both models initially produce incorrect behavior, so he supplies concrete failing cursor and deletion cases instead of accepting either answer ([00:52:42–01:11:46](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=3162s)).
- **Keep model preferences local to the workflow**: Pi's base system prompt is deliberately small. When GPT-5.1 responds too verbosely for this session, Zechner adds concise-response guidance to the project's agent instructions rather than changing the shared prompt for every user. This is a personal configuration choice, not evidence that the same instruction improves other tasks ([01:03:11–01:08:54](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=3791s)).
- **Close the loop with behavior, diffs, documentation, and packaging**: Zechner manually exercises the new key bindings, reviews the diff, retains the key tester, asks for README and changelog updates, runs checks, and tests the installed package after release. The stream demonstrates the sequence but does not measure defects caught by each step ([01:02:18–01:44:17](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=3738s)).

### Malleability and Session Branching

- **Prefer a documented CLI contract when a built-in protocol is unnecessary**: Zechner says Pi will not ship built-in MCP support for his workflow. His alternative is a tool in any language with a README the agent can follow, with `mcporter` available when MCP access is actually needed. This is the maintainer's product choice, not a general finding that CLIs replace MCP in every environment ([01:19:38–01:20:29](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=4778s)).
- **Branch by replaying earlier intent**: A viewer request leads to a selector over prior user messages that creates a new session from the selected point. Zechner corrects the first interaction so the chosen message returns to the editor, then rejects branch-naming complexity because his need is simply to rewind and continue. The code is implemented and manually inspected on stream, without longer-term usability evidence ([01:22:33–01:23:36](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=4953s), [01:52:19–02:08:20](https://www.youtube.com/watch?v=dWlhu0aWCb8&t=6739s)).

[Watch the full livestream on YouTube](https://www.youtube.com/watch?v=dWlhu0aWCb8).
