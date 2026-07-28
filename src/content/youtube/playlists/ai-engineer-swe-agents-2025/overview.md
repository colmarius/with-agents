---
title: "SWE Agents: AI Engineer World's Fair 2025"
status: draft
coveredVideoIds:
  - tbDDYKRFjhk
  - Lue8K2jqfKk
  - Dc3qOA9WOnE
  - F_RyElT_gJk
  - o_hhkJtlbSs
---

## Coverage

The manifest contains 19 entries: 18 available and 1 unavailable private entry (`jBr-EERbXJw`). Of the available entries, 5 are captured, 5 are summarized, 5 are incorporated here, and 13 remain pending; 0 caption-unavailable outcomes have been recorded. Pending IDs: `MI83buT_23o`, `eOxOzcw70f0`, `x_1EumTaXeE`, `Dj0b_cEBHBI`, `JVuNPL5QO8Q`, `X4BwOu0GWb8`, `iheWKg2Tkrk`, `n991Yxo1aOI`, `TswQeKftnaw`, `Fzb1a24hF-o`, `6NIr_cYPglk`, `Zniw5c9_jx8`, and `tHJSZ1-ZqcA`.

AI Engineer is the curator and source channel for this multi-speaker playlist, not its author. Speakers and affiliations vary by video and must be established from each video's source title, description, or transcript.

## Current Thesis

- Yegor Denisov-Blanch (Stanford) argues that coding AI's productivity effect varies with task complexity, project maturity, language popularity, codebase size, and context length rather than producing a universal uplift. ([summary](../../videos/tbDDYKRFjhk/summary.md))
- Boris Cherny (Anthropic) argues that coding-model capability is improving faster than product teams can determine the right interface, and presents a deliberately simple agent that fits existing tools and workflows. ([summary](../../videos/Lue8K2jqfKk/summary.md))
- Chris Kelly (Augment Code) argues that code generation does not replace the architectural decisions, production safeguards, and maintenance responsibility of software engineering. ([summary](../../videos/Dc3qOA9WOnE/summary.md))
- Beyang Liu (Sourcegraph) argues that agentic models require different application and interaction patterns, and presents detailed prompts, explicit feedback loops, code review, subagents, and parallel sessions as parts of the emerging skill set. ([summary](../../videos/F_RyElT_gJk/summary.md))
- Robert Brennan (OpenHands) argues that coding will shrink without eliminating software engineering, and recommends small verifiable tasks, isolation, clear instructions, code review, and explicit human ownership. ([summary](../../videos/o_hhkJtlbSs/summary.md))
- Editorial: The five incorporated talks frame agent adoption as a combination of empirical measurement, adaptable tooling, feedback design, and production responsibility rather than a code-volume contest, but 5 of 18 available videos cannot establish a playlist-wide consensus.

## Stable Ideas

- Yegor Denisov-Blanch (Stanford) reports that gross AI-assisted coding output overstates net productivity when rework is excluded from the headline gain. ([summary](../../videos/tbDDYKRFjhk/summary.md))
- Chris Kelly (Augment Code) argues that generated code carries maintenance and debugging obligations and should not be conflated with production software engineering. ([summary](../../videos/Dc3qOA9WOnE/summary.md))
- Editorial: These two incorporated talks support treating raw generated-code volume as insufficient evidence of production value.
- Boris Cherny (Anthropic) recommends tests or another observable target so an agent can iterate against feedback. ([summary](../../videos/Lue8K2jqfKk/summary.md))
- Chris Kelly (Augment Code) recommends fast tests, reproducible environments, documented standards, and clearly bounded tasks for agent work. ([summary](../../videos/Dc3qOA9WOnE/summary.md))
- Beyang Liu (Sourcegraph) recommends directing agents toward project-specific context, build commands, tests, and fast visual feedback loops. ([summary](../../videos/F_RyElT_gJk/summary.md))
- Robert Brennan (OpenHands) recommends small tasks with a clear definition of done, detailed instructions, and results that a human can verify. ([summary](../../videos/o_hhkJtlbSs/summary.md))
- Editorial: All four workflow-focused talks support context and verification as recurring conditions for useful agent work, although the playlist does not yet establish which implementations are most effective.
- Beyang Liu (Sourcegraph) says humans remain responsible for shipped code even when several agents work in parallel. ([summary](../../videos/F_RyElT_gJk/summary.md))
- Robert Brennan (OpenHands) says a named human should own each agent-authored pull request and its eventual breakage. ([summary](../../videos/o_hhkJtlbSs/summary.md))
- Editorial: The incorporated workflow talks consistently move human work toward task framing, review, and accountability rather than removing responsibility for production changes.

## Emerging Ideas

- Yegor Denisov-Blanch (Stanford) reports that additional rework reduces gross AI-assisted coding gains and that complex brownfield tasks receive smaller gains than simpler greenfield work. ([summary](../../videos/tbDDYKRFjhk/summary.md))
- Boris Cherny (Anthropic) describes coding-agent UX as unresolved and favors a general, low-level interface spanning terminal, IDE, GitHub, and SDK use. ([summary](../../videos/Lue8K2jqfKk/summary.md))
- Chris Kelly (Augment Code) expects code review to become more important as agents produce more code and argues that current file-ordered review interfaces are inadequate. ([summary](../../videos/Dc3qOA9WOnE/summary.md))
- Beyang Liu (Sourcegraph) favors a simple, composable agent interface and describes subagents as a way to isolate context for longer work. ([summary](../../videos/F_RyElT_gJk/summary.md))
- Robert Brennan (OpenHands) treats generated code as cheap enough to discard and retry when an agent's approach is substantially wrong. ([summary](../../videos/o_hhkJtlbSs/summary.md))
- Editorial: Task segmentation, composable interfaces, disposable implementation attempts, context isolation, and change-oriented code review are candidates for comparison against later speakers' approaches.

## Revisions and Tensions

- Yegor Denisov-Blanch (Stanford) distinguishes reported increases in generated code from smaller net productivity gains after rework. ([summary](../../videos/tbDDYKRFjhk/summary.md))
- Boris Cherny (Anthropic) says improving model capability is outpacing product UX and argues for exposing a general model through minimal interfaces. ([summary](../../videos/Lue8K2jqfKk/summary.md))
- Chris Kelly (Augment Code) emphasizes that models generate patterns while production engineering still requires contextual judgment, safeguards, and responsibility. ([summary](../../videos/Dc3qOA9WOnE/summary.md))
- Beyang Liu (Sourcegraph) argues that agents should make edits without requesting approval at every step, while keeping humans responsible for the code they ship. ([summary](../../videos/F_RyElT_gJk/summary.md))
- Robert Brennan (OpenHands) warns that automatically merging agent output accumulates technical debt and requires a human review and ownership path. ([summary](../../videos/o_hhkJtlbSs/summary.md))
- Editorial: Cherny's and Liu's emphasis on flexible, low-level delegation is compatible with Kelly's and Brennan's production discipline only if teams add sufficient context, verification, review, access control, and accountability around the model.
- Editorial: Later summaries must test whether other speakers support, qualify, or conflict with the measurement and workflow claims here; playlist order is not evidence of chronological change.

## Practical Implications

- Editorial: Track delivered functionality and rework when evaluating coding agents, then segment outcomes by the characteristics of the task and codebase.
- Editorial: Give agents explicit project context, bounded tasks, isolated access, and tools, then require observable verification and named human review of production consequences.
- Editorial: Keep this overview provisional until more of the 13 pending available videos are summarized and incorporated.
