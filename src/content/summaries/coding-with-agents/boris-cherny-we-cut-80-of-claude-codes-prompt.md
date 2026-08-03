---
title: "Boris Cherny: We Cut 80% of Claude Code’s Prompt"
resourceId: 29
date: "2026-07-27"
---

Boris Cherny explains why Claude Code's harness is rebuilt around each model generation: remove old scaffolding, observe what the new model can do, add back only what repeated failures justify, and give difficult agent tasks strong ways to verify their own work.

### Key Points Covered

- **Anthropic reports progress against prompt injection, but as a layered result**: Cherny says Opus 5, an alignment-trained model, a prompt-injection classifier, and an auto-mode classifier together resisted the attacks Anthropic tried. This is his report about their testing, not a claim that prompt injection is universally solved [00:01:44]-[00:03:21].
- **Claude Code removed 80% of its system prompt for Opus 5**: Instructions that corrected older models became unnecessary, and an internal simple-mode ablation suggested that removing prompts could improve model performance. Cherny still distinguishes raw capability from the prompts needed for useful product behavior, safety, and usability [00:03:21]-[00:05:10].
- **Rebuild instructions from observed failures, not old assumptions**: Cherny recommends deleting existing guidance, using the new model, and restoring an instruction only after the model repeatedly stumbles on the same issue. Every retained line consumes attention on every run [00:05:10]-[00:08:54].
- **Harnesses and evaluations both expire**: Anthropic ablates prompts, tools, and harness code for each model generation. Evaluations usually outlive the harness, but Cherny says rapidly improving models may saturate them within one to three generations, forcing teams to derive harder evals from current failures [00:08:54]-[00:10:30].
- **Product design can hide or obstruct model capability**: Cherny calls the unexposed capability "product overhang" and the product getting in the way "hobbling." He presents the original Claude Code as a minimal terminal harness that let Sonnet 3.5 write larger units of code when contemporary tools emphasized autocomplete or read-only chat [00:10:30]-[00:14:31].
- **Give modern models goals, guardrails, and exit criteria**: Rather than prescribe every intermediate step, Cherny suggests trying tasks that seem slightly too hard and letting the model choose the route. He frames this as an empirical capability-discovery practice, not a prompt trick [00:14:31]-[00:15:19].
- **Executable specifications made a large migration tractable**: The Bun and Node.js test suites gave agents a strong oracle for a steered, 11-day dynamic workflow that Cherny says rewrote Bun code from Zig to Rust and reached production. His account explicitly rejects the simpler "one-shot rewrite" framing [00:15:19]-[00:18:35].
- **Verification matters more than elaborate prompting**: For an Electron-to-Swift experiment, Cherny provided a macOS runner and asked Claude to run both applications, compare screenshots pixel by pixel, and continue iterating. The task was still running after more than two weeks, so the example demonstrates sustained work and feedback rather than completed success [00:19:32]-[00:22:57].
- **There is no universal one weird trick**: His recommended loop is to attempt a hard task, give the model tools to check its work, observe where it fails, then supply a better prompt, a skill, or missing context through MCP. Over-specifying the procedure can prevent the model from finding a better route [00:22:57]-[00:24:48].
- **Dynamic workflows orchestrate one complex task**: Claude can compose sequential and parallel agent stages inside a sandbox, fanning out for implementation, verification, and synthesis. Cherny describes this as a way to orchestrate test-time compute rather than merely launching a fixed batch of parallel agents [00:24:48]-[00:27:21].
- **Loops and routines repeat independent maintenance work**: Cherny describes recurring routines for dead-code cleanup, experiment removal, test coverage, unnecessary-test deletion, and duplicate-abstraction consolidation across Anthropic's applications. He says full automation is still a direction rather than a finished system [00:27:21]-[00:30:06].
- **"Coding is solved" has important limits**: Cherny restricts the phrase to the kinds of coding he does and names deep systems work, distributed systems, and pixel-level UI verification as remaining weaknesses. He argues that durable judgment comes from empirical model use combined with practical product, design, business, data, and user-research skills [00:30:06]-[00:34:36].

Full video: <https://www.youtube.com/watch?v=qyPCVqFUyDo>
