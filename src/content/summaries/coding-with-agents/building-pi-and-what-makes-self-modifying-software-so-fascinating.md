---
title: "Building Pi, and what makes self-modifying software so fascinating"
resourceId: 11
date: "2026-04-29"
---

This Pragmatic Engineer episode brings together Mario Zechner and Armin Ronacher to unpack Pi, self-modifying coding-agent harnesses, and the engineering practices needed when agents make code cheap but judgment, review, and responsibility still do not scale.

### Key Points Covered

- **Agent adoption takes real immersion**: Ronacher's interviews with roughly 30 engineering teams suggest agents usually click after people spend a couple of weeks with them, often during holidays or downtime, but wider adoption also brings bigger PRs, more review load, and early signs of "vibe slop" creeping into production code [00:15:14]-[00:18:03].
- **Automation bias hides complexity until humans feel pain**: Zechner and Ronacher contrast agents with humans: agents can alternate between good and terrible output, do not learn from codebase pain, and make it easier for teams to say yes to features instead of using senior engineering judgment to say no [00:19:58]-[00:23:34].
- **Non-engineers can now create software, but integration still needs guardrails**: The discussion treats PM-, sales-, and marketing-generated code as empowering for prototypes, while warning that "prompt requests" or rough implementations should clarify intent rather than bypass engineering ownership [00:24:21]-[00:27:20].
- **Pi came from wanting a stable, controllable harness**: Zechner says Claude Code's hidden context changes and shifting prompts broke his workflows, while OpenCode's context pruning and eager LSP diagnostics pushed him toward a simpler tool he could understand and adapt without forking [00:32:06]-[00:37:26].
- **Pi's product surface is malleability**: Its core is a provider abstraction, agent loop, TUI, and minimal tools such as read, write, edit, and bash; the important feature is that hook points let users ask Pi to add MCP support, plan modes, UI changes, or custom tools itself [00:37:26]-[00:40:02].
- **Specialized harnesses keep humans and agents in the loop**: Ronacher describes making Pi build game-specific debugging, screenshots, simulation dumps, and branching workflows so both the agent and human could validate progress in the least confusing way for that project [00:40:53]-[00:42:49].
- **Self-modifying software points beyond terminals**: Zechner argues the broader pattern is software that modifies itself around a user's task, with Pi as a coding-agent example and future web interfaces opening more room than line-based TUIs [00:45:37]-[00:47:17].
- **Open source needs bottlenecks against agent spam**: OpenClaw's use of Pi exposed Zechner's repo to autonomous issues and PRs, leading him to auto-close PRs from unrecognized accounts and ask for a short, human-voiced issue before allowlisting contributors [00:48:06]-[00:53:34].
- **Complexity is still the agent's enemy**: The speakers argue that agents can only operate on the context they find and fit; as they add interconnected code, they make their own future tasks harder, especially because model defaults tend toward internet-average patterns rather than the best-engineered projects [01:00:15]-[01:02:20].
- **"Slow down" means using agents where review scales**: Zechner warns that more generated code means more errors to review, not less responsibility, and argues teams should automate annoying work, preserve time for product judgment, and keep important code under human refactoring discipline [01:10:38]-[01:16:19].
- **MCP and CLIs solve different problems**: Ronacher and Zechner see MCP as useful for auth and enterprise integration, but criticize context-heavy, non-composable tool APIs; CLIs and code execution let agents combine data through pipes or scripts while exposing only the relevant result [01:16:19]-[01:24:39].

Full video: <https://www.youtube.com/watch?v=n5f51gtuGHE>
