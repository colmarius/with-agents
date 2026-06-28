# Research: Amp Official Sources for Task 7

**Date:** 2026-06-28
**Status:** complete for Task 7 prep; re-check before publication
**Question:** Which current public Amp sources should anchor a future `amp-power-patterns` rewrite, and which older Amp claims are stale or risky?

## Recommendation

Use the current [Amp Manual](https://ampcode.com/manual), [Plugin API](https://ampcode.com/manual/plugin-api), [Models](https://ampcode.com/models), and a fresh [Chronicle](https://ampcode.com/chronicle) sweep as the canonical product-source bundle for Task 7. Treat dated Chronicle/news/notes pages as evidence of product direction or workflow examples, not timeless feature documentation. For any public article, mark product details as “verified as of 2026-06-28” or avoid exact product claims entirely.

The future Task 7 article should be an Amp case study for factory-era coding-agent workflows: task sizing, delegation, context, review, feedback loops, and extensibility. It should not preserve the old draft’s stale feature catalog, Oracle-as-mode framing, Handoff section, fixed token thresholds, old model names, old speed/cost claims, or draft-only practice-path links.

## Source Hierarchy for Task 7

1. **Current canonical product docs:** Manual, Plugin API, Models, and current homepage/install/manual sections.
2. **Recent first-party product changes:** Chronicle items from May-June 2026, especially Amp Rebuilt, Agents Everywhere, Custom Agents, Diffs, Rush 2.0, Faster Deep & Rush, Opus 4.8, End of Public Threads, npm Package Changes, and Plugins Everywhere.
3. **Recent first-party workflow notes:** Feedback Loopable, Mainframe Magic, How to Pair With an Agent, and Liberating Code Review.
4. **Archived guidance:** Context Management in Amp and 200k Tokens Is Plenty only for durable principles; do not use them for current Handoff/token-threshold guidance.
5. **Old local draft material:** `src/content/posts/amp-power-patterns.md` only as raw material to replace, not as an authority.

## Current Product Facts Safe to Use Carefully

- Amp currently presents three built-in modes: `deep`, `smart`, and `rush`. `deep` is for deep reasoning/complex work, `smart` is the state-of-the-art general mode, and `rush` is for fast, bounded tasks.
- Oracle is **not** a mode. It is a second-opinion tool/subagent for complex reasoning, planning, debugging, or review.
- Current model assignments are on `/models` and age quickly. As of this research pass: `deep` uses GPT-5.5, `smart` uses Claude Opus 4.8, `rush` uses GPT-5.5, Oracle uses GPT-5.5, Librarian uses GPT-5.5, search uses Gemini 3 Flash, and Painter uses GPT Image 2.
- Amp now supports web/mobile/CLI surfaces for watching and driving active agent threads. Use this as a current product-direction point, not as a generic coding-agent requirement.
- Plugins are the current extensibility surface: events, tools, commands, UI, AI classification, configuration, thread APIs, custom agents, custom modes, and custom subagents.
- Project/user/system `AGENTS.md`, skills, checks, MCP configuration, thread references, review, and thread sharing are all current manual concepts.
- Librarian can search public GitHub and connected private GitHub repositories, but the manual says it reads only the default branch.
- Amp does not ask for approval before running tools by default. Permissions can still be implemented via plugins or legacy settings. Frame this as a configurable security boundary, not a blanket recommendation.
- Manual thread sharing currently supports private, workspace-shared, group-shared, and unlisted visibility. Chronicle says public discoverable thread sharing was removed on 2026-06-02.

## Stale or High-Risk Claims to Remove from the Old Draft

- “Oracle mode” and any mode decision tree that omits `deep`.
- Old model claims such as Rush using Claude Haiku 4.5, Smart using Claude Sonnet 4.5, or Oracle using GPT-5.
- Exact old speed/cost claims such as “Rush is 67% cheaper, 50% faster.” If performance is discussed, use recent dated sources and prefer qualitative framing.
- Fixed token thresholds such as “start new threads around 50-100k” or “quality degrades beyond 100k.” The current 200k note is archived and explicitly says auto-compaction makes longer threads fine/productive.
- Handoff as current product guidance. Amp Rebuilt says Handoff is gone; current guidance should use auto-compaction, thread references, and durable repo/work-item state instead.
- Old VS Code extension/sidebar assumptions. The February 2026 “Coding Agent Is Dead” post announced killing the editor extensions; May/June 2026 sources describe rebuilt web/mobile/CLI surfaces and a new sidebar. Verify UI details immediately before publishing.
- Setup/install claims using `@sourcegraph/amp`; npm Package Changes says the CLI package is now `@ampcode/cli`, with direct installation recommended.
- Pricing/free-tier claims unless reverified from current pricing/manual pages at publication time.
- Draft-only route links: `/posts/amp-first-win-15-minutes`, `/posts/what-is-an-agent`, `/posts/agent-workflows-that-stick`, `/posts/agent-planning-workflow`, `/posts/amp-power-patterns`, and `/posts/coding-with-agents-2025`.
- Generic “use N subagents for N files” advice without independence, conflict, and review caveats.

## Per-Resource Notes

### Amp Manual — <https://ampcode.com/manual>

**Recency/status:** current canonical manual; force-refetched 2026-06-28.
**Best use:** primary source for current product terminology and feature existence.

Key points:

- Amp is described as a frontier coding agent for terminal and editor, with three modes: `deep`, `smart`, and `rush`.
- Prompting guidance emphasizes explicit outcomes, one thread per task, naming known files/commands, using `AGENTS.md`, and telling the agent how to verify its work.
- `AGENTS.md` files are included from cwd/parents, subtree guidance when files are read, and user/system locations. Mentioned files and glob-scoped guidance are supported.
- Thread references are current: users can reference Amp thread URLs/IDs; Amp extracts relevant information from the referenced thread.
- Subagents are useful for independent multi-step work, large-output operations, or parallel work, but they are isolated, cannot be guided mid-task, and only return final summaries.
- Oracle is a read-only second-opinion model/tool for complex reasoning/review/debugging, not a mode.
- Librarian searches external codebases on GitHub, including connected private repos, and only default branches.
- Plugins, skills, MCP, code review/checks, permissions, CLI execute/stream JSON, thread sharing, and remote control are current product areas.

Task 7 use:

- Anchor current terminology, limitations, and safe feature descriptions here.
- Use the manual to correct the old draft’s Oracle/mode/subagent/Librarian sections.
- Avoid copying install/pricing details unless the article truly needs them; reverify close to publication.

### Manual Plugins Section — <https://ampcode.com/manual#plugins>

**Recency/status:** current manual section; force-refetched 2026-06-28 as part of the manual.
**Best use:** concise overview of when plugins are appropriate.

Key points:

- Plugins are TypeScript files that extend Amp.
- Plugins can handle events, add tools, add commands, show UI, and classify with AI.
- The manual positions extension mechanisms distinctly: `AGENTS.md` for durable instructions, skills for task-specific guidance, plugins for custom tools/event-driven behavior, and MCP when integrating MCP servers.
- Legacy toolboxes are no longer supported; migrate old toolbox scripts to plugins.
- Plugins execute code, so only use trusted plugins.
- Project plugins live in `.amp/plugins/*.ts`; system plugins live under user config; global plugins are experimental/limited.

Task 7 use:

- Good source for “Amp as an extensibility case study.”
- Do not turn the article into a plugin tutorial; link to docs if examples are needed.

### Plugin API Reference — <https://ampcode.com/manual/plugin-api>

**Recency/status:** current generated/reference documentation; force-refetched 2026-06-28.
**Best use:** precise API capabilities when discussing custom agents/orchestration.

Key points:

- Example plugin covers `session.start`, `tool.call`, `tool.result`, `agent.start`, `agent.end`, commands, UI, tools, thread append, runtime/config, and `amp.ai.ask`.
- Current API includes `createAgent`, `getBuiltinAgent`, `registerAgentMode`, thread handles, thread append/wait/cancel/messages, command availability, plugin tools, and helpers for tool calls/files.
- Built-in agent handles support `smart`, `deep`, and `rush`.
- Custom agents can run one-shot or create background threads; `parentThreadID` connects spawned work to a parent thread.
- Some APIs are marked experimental or compatibility aliases; plugin/custom-agent details can churn.

Task 7 use:

- Use for “factory/orchestration surface” claims.
- Keep code examples small or avoid them; plugin details are too dense for a broad article.

### Amp Chronicle — <https://ampcode.com/chronicle>

**Recency/status:** current release/news index; force-refetched 2026-06-28.
**Best use:** latest-product-change sweep before editing/publishing.

Important recent items:

- 2026-06-19 Custom Agents: plugins can create agents, run them once, and keep talking to their threads.
- 2026-06-18 A Faster Librarian: current performance/model note for Librarian; exact numbers are date-sensitive.
- 2026-06-16 Diffs: review and stage changes directly in Amp.
- 2026-06-05 Faster Deep & Rush: deep/rush speed improvements; exact numbers are date-sensitive.
- 2026-06-04 Agents Everywhere: watch/drive agents from web, CLI, and mobile; active-thread sidebar.
- 2026-06-04 Opus 4.8: current smart-mode model card; exact eval/model claims are date-sensitive.
- 2026-06-02 End of Public Threads: public discoverable thread sharing removed; unlisted/workspace sharing remains.
- 2026-05-28 Plugins Everywhere: plugin UI on web.
- 2026-05-27 Drop the Neo: rebuilt Amp became Amp for everyone.
- 2026-05-21 Rush 2.0: rush retuned for small, bounded tasks on GPT-5.5/no reasoning.
- 2026-05-14 npm Package Changes: direct install recommended; CLI npm package is `@ampcode/cli`, not `@sourcegraph/amp`.
- 2026-05-06 Amp Rebuilt: remote-controllable, compaction-first, plugin-powered CLI; Handoff removed.
- 2026-02-19 The Coding Agent Is Dead: Amp shifted away from editor-extension/sidebar assumptions toward CLI/longer-leash agents.
- 2026-02-04 Liberating Code Review: review agent became composable via `amp review` and thread requests; checks live in `.agents/checks/`.

Task 7 use:

- Re-run Chronicle before publication; this is the source most likely to reveal stale product claims.
- Use dated announcements for direction and examples, not timeless claims.

### Models — <https://ampcode.com/models>

**Recency/status:** current model matrix; force-refetched 2026-06-28.
**Best use:** current mode/subagent/system model assignments if model names must appear.

Key points:

- Modes are framed as a combination of system prompt, tools, and model.
- Current mode assignments: Deep = GPT-5.5, Smart = Claude Opus 4.8, Rush = GPT-5.5.
- Current subagent assignments: Review = GPT-5.5, Search = Gemini 3 Flash, Oracle = GPT-5.5, Librarian = GPT-5.5, Read Thread = GLM 5.2.
- System models include View Media = Gemini 3 Flash, Painter = GPT Image 2, Titling = Claude Haiku 4.5.

Task 7 use:

- Prefer role-based descriptions (`rush` for bounded tasks, `deep` for hard tasks) over model names.
- If model names survive, mark them verified as of 2026-06-28 and expect churn.

### Amp Rebuilt — <https://ampcode.com/news/neo>

**Recency/status:** 2026-05-06 product architecture announcement; still relevant because Drop the Neo made rebuilt Amp generally available on 2026-05-27.
**Best use:** transition source for obsolete Handoff/manual-context claims.

Key points:

- Amp CLI was rebuilt as remote-controllable, compaction-first, plugin-powered, and faster.
- Auto-compaction replaced manual context pressure: when context fills, Amp summarizes and starts a fresh window.
- Handoff is explicitly described as gone; thread references remain.
- Plugins became the policy/customization surface, including permissions.
- Tool approvals are no longer default unless legacy permission settings activate the built-in permissions plugin.
- User-invokable skills and old skill-management commands were removed in this rebuild.

Task 7 use:

- Strong source for removing the old draft’s Handoff and token-management sections.
- Strong source for “Amp is moving toward longer-leash, remote-controllable, plugin-powered agent work.”

### Agents Everywhere — <https://ampcode.com/news/agents-everywhere>

**Recency/status:** 2026-06-04 product announcement.
**Best use:** current multi-agent UI/orchestration direction.

Key points:

- Amp has a new UI/sidebar for watching and driving agents across web, mobile, and CLI.
- The rebuilt foundation is described as a distributed system with durable execution for the agent loop and plugin API.
- Users can remote-control all active threads in one place.
- CLI sidebar access is described with `Opt+S` / `Alt+S`; keybindings are high-churn and should be reverified if published.

Task 7 use:

- Good source for factory-era UI/orchestration framing.
- Avoid over-indexing on exact keybindings/screens/UI unless reverified immediately before publish.

### Custom Agents — <https://ampcode.com/news/custom-agents>

**Recency/status:** 2026-06-19 product announcement.
**Best use:** freshest source for plugin-created agents/background threads.

Key points:

- Plugins can create custom agents for main-agent modes or subagents.
- Agents can run once, create threads, append user messages, wait for responses, and run background reviews connected to a parent thread.
- The announcement uses examples like a focused-reviewer agent and async review thread.

Task 7 use:

- Good source for “Amp as factory/orchestration case study.”
- Caveat as an advanced/extensible product surface, not beginner guidance.

### Diffs — <https://ampcode.com/news/diffs>

**Recency/status:** 2026-06-16 product announcement.
**Best use:** current human-review/control source.

Key points:

- Users can review and stage changes directly in Amp on desktop or mobile while a thread has an active environment.
- Amp emphasizes human comprehension: “Outsource your coding, but not your understanding of the code.”
- Diff algorithm includes duplicate block detection to reduce cognitive load.
- CLI users can open current thread diffs in the browser from the command palette.

Task 7 use:

- Good source for review/proof loop examples.
- Pair with `make-the-agent-prove-it` instead of duplicating proof-stack mechanics.

### Rush 2.0 — <https://ampcode.com/news/rush-2.0>

**Recency/status:** 2026-05-21 product announcement.
**Best use:** current qualitative guidance for `rush`.

Key points:

- `rush` is tuned for small coding tasks that do not require contemplating the whole repo.
- Good `rush` tasks have known scope and done-ness: fix a failing test, match styling in a specific component, rename a flag.
- Do not use `rush` for transient bugs, architecture changes, migrations, complex features, or tasks where “done” is unclear.
- Suggested pattern: let `rush` build; ask Oracle to plan, criticize, or review for bounded-but-not-trivial work.
- The announcement includes eval, speed, cost, and model details; treat those as dated and optional.

Task 7 use:

- Use qualitative task-shaping and `rush`+Oracle pattern.
- Do not center exact cost/speed/eval numbers.

### Faster Deep & Rush — <https://ampcode.com/news/faster-deep-rush>

**Recency/status:** 2026-06-05 product announcement.
**Best use:** dated performance context only.

Key points:

- Amp reported first token 87% faster and full responses 32% faster, p50, in `deep` and `rush`.
- Gains were attributed mostly to OpenAI websockets and partly to the rebuilt Amp foundation.

Task 7 use:

- Avoid exact speed numbers in a durable article unless there is a clear reason and date stamp.
- Use only to support “performance is an active product area.”

### Opus 4.8 — <https://ampcode.com/news/opus-4.8>

**Recency/status:** 2026-06-04 model card/news item.
**Best use:** dated support for `smart` behavior and current model assignment.

Key points:

- Opus 4.8 powers `smart` mode as of the article.
- The note emphasizes tighter changes, better self-checking, more appropriate tool/subagent use, and use of `librarian` when outside context is needed.

Task 7 use:

- Avoid making model names the article’s thesis.
- Use the pattern (“say how far to go; give verification”) rather than exact model-eval details.

### A Faster Librarian — <https://ampcode.com/news/a-faster-librarian>

**Recency/status:** 2026-06-18 performance announcement.
**Best use:** dated current note for Librarian performance/model.

Key points:

- Librarian is described as faster/cheaper while maintaining quality, now using GPT-5.5/no reasoning with websocket mode and more parallel exploration.
- The article includes exact latency/cost/quality numbers; these are high-churn.

Task 7 use:

- If discussing Librarian, use manual for capability/limitations and this page only for current dated product movement.

### Liberating Code Review — <https://ampcode.com/news/liberating-code-review>

**Recency/status:** 2026-02-04 product announcement; more current than the 2025 Review/Agentic Review extension-only posts.
**Best use:** current-ish review/checks source, backed by current manual.

Key points:

- Review agent can be invoked via `amp review` or requested in a thread with natural language.
- Review comments can feed back into the main agent or another command.
- Checks are defined under `.agents/checks/`; the `code_review` tool runs separate agents for checks.
- Checks can encode stack-specific performance/security/style/migration/compliance invariants.

Task 7 use:

- Strong source for the “review is part of the factory” section.
- Use current manual’s Code Review section to confirm details before publish.

### Agentic Review — <https://ampcode.com/news/agentic-code-review>

**Recency/status:** 2025-12-18; partially superseded by February 2026 Liberating Code Review and June 2026 Diffs.
**Best use:** historical evolution only.

Key points:

- Introduced a review agent in the VS Code extension review panel.
- Mentions Gemini 3 Pro and editor keybindings; likely stale after rebuilt Amp and current models.

Task 7 use:

- Avoid as primary source. Prefer Liberating Code Review, Diffs, Manual, and Models.

### The Coding Agent Is Dead — <https://ampcode.com/news/the-coding-agent-is-dead>

**Recency/status:** 2026-02-19 product-direction essay.
**Best use:** why old editor/sidebar framing is stale.

Key points:

- Amp argued the frontier shifted away from local editor-sidebar agents toward longer-leash agents.
- The post announced killing VS Code/Cursor editor extensions and switching to CLI-first work.
- It says bottlenecks moved from agent wrappers toward codebase organization and organizational usage.

Task 7 use:

- Useful framing source for why an old “sidebar power patterns” draft is stale.
- Do not quote dramatic claims as neutral industry fact; use as Amp’s stated product direction.

### End of Public Threads — <https://ampcode.com/news/end-of-public-threads>

**Recency/status:** 2026-06-02 product/security announcement.
**Best use:** current thread-sharing caution.

Key points:

- Public, discoverable thread sharing was removed.
- Workspace and unlisted sharing remain.
- Existing public-discoverable threads were converted to unlisted.
- Reason: agents read more files as models improve, increasing risk of sensitive snippets in shared threads.

Task 7 use:

- If using thread links as examples, distinguish unlisted/workspace sharing from public-discoverable sharing.

### npm Package Changes — <https://ampcode.com/news/npm-package-changes>

**Recency/status:** 2026-05-14 product/install announcement.
**Best use:** avoid stale install/package claims.

Key points:

- Direct installation remains recommended.
- CLI npm package became `@ampcode/cli`; old `@sourcegraph/amp` name was an alias to be removed.
- TypeScript SDK became `@ampcode/sdk`.

Task 7 use:

- Do not include setup unless required. If included, verify from manual/install immediately before publish.

### Plugins Everywhere — <https://ampcode.com/news/plugins-everywhere>

**Recency/status:** 2026-05-28 product announcement.
**Best use:** plugin UI scope.

Key points:

- Plugin UI is available on the web.
- Supported UI: notifications, confirmation dialogs, input fields, and select elements.

Task 7 use:

- Supports plugin UI claims when paired with manual/plugin API.

### Agent Skills — <https://ampcode.com/news/agent-skills>

**Recency/status:** 2025-12-10; mostly superseded/confirmed by current manual.
**Best use:** historical/supporting source for skills; manual is primary.

Key points:

- Skills lazily load specific instructions/tools and can live in `.agents/skills/` or user-level skill directories.
- The article mentions compatibility with Claude skills.

Task 7 use:

- Use manual for current details; note that user-invokable skills were later removed in Amp Rebuilt.

### Efficient MCP Tool Loading — <https://ampcode.com/news/lazy-load-mcp-with-skills>

**Recency/status:** 2026-01-08; still conceptually relevant and echoed by current manual.
**Best use:** why skills + MCP matter for context/tool hygiene.

Key points:

- MCP tool definitions can consume substantial context.
- Amp can bundle MCP server configs in skills so tool definitions load only when a skill is invoked.
- `includeTools` can restrict exposed MCP tools.

Task 7 use:

- Good source for context/tool-surface hygiene.
- Exact token comparisons are dated; use qualitatively unless date-stamped.

### Slashing Custom Commands — <https://ampcode.com/news/slashing-custom-commands>

**Recency/status:** 2026-01-29; partly superseded by Amp Rebuilt’s removal of user-invokable skills, but still useful for custom-command migration history.
**Best use:** do not recommend old custom commands.

Key points:

- Custom commands were removed in favor of skills.
- Markdown/executable commands can be migrated into skill directories.

Task 7 use:

- Avoid old custom-command guidance; use skills/plugins/manual instead.

### Handoff and Handoff, Please — <https://ampcode.com/news/handoff>, <https://ampcode.com/news/ask-to-handoff>

**Recency/status:** October 2025 and January 2026; superseded by Amp Rebuilt in May 2026.
**Best use:** historical only.

Key points:

- Older posts positioned Handoff as context transfer between threads.
- Amp Rebuilt later says Handoff is gone and auto-compaction is in.

Task 7 use:

- Remove Handoff section from future public Amp article.
- If discussing old workflows, explicitly say this is no longer current Amp product guidance.

### Context Management in Amp — <https://ampcode.com/guides/context-management>

**Recency/status:** archived; written November 2025 for an earlier model/context era.
**Best use:** durable context-window fundamentals only.

Key points:

- Page is explicitly archived and says models have become more forgiving, while clarity about what you want remains important.
- Durable principles still useful: context affects output; keep tasks clear; provide relevant files; thread references can extract relevant information.
- Current-stale parts: Handoff, manual context-pressure advice, file-truncation specifics, and old UI details.

Task 7 use:

- Do not use this as a current product source.
- Use only as historical support for “context still matters, but old manual management advice aged.”

### 200k Tokens Is Plenty — <https://ampcode.com/notes/200k-tokens-is-plenty>

**Recency/status:** archived; written December 2025 for an older model/context-window era.
**Best use:** historical short-thread principle, with caveat.

Key points:

- The archive notice says auto-compaction now makes longer threads work well, and it is fine/productive to go beyond 200k tokens.
- Durable principle: small focused tasks/threads are easier to reason about and review.
- Stale as product guidance: any fixed “200k is enough” or 50-100k threshold advice.

Task 7 use:

- If used, pair with current Amp Rebuilt and public `small-threads-durable-state` article.
- Avoid token thresholds.

### Feedback Loopable — <https://ampcode.com/notes/feedback-loopable>

**Recency/status:** 2026-02-05 workflow note; not product reference.
**Best use:** feedback-loop design patterns.

Key points:

- Agents are strongest when they can validate against reality.
- Make problems feedback-loopable by building playgrounds, experiments, and fast inner loops.
- Use URL state, static/reproducible cases, logs, CLI/headless tools, and visual confirmation when needed.
- Human role shifts toward high-level validation and guidance.

Task 7 use:

- Strong source for the Amp case study’s proof/feedback-loop section.
- Avoid unverified claims that “Amp takes screenshots” unless sourced to current manual/tool availability.

### Mainframe Magic — <https://ampcode.com/notes/mainframe-magic>

**Recency/status:** 2026-02-24 workflow/case-study note.
**Best use:** example of agent factory with deterministic checks and manifests.

Key points:

- COBOL migration example used custom skills/tools to parse, map dependencies, create manifests, compile programs, run smoke tests, and hand off ready tasks.
- The useful reusable pattern is source maps/manifests/task queues plus deterministic compile/smoke-test gates.
- The note includes broad claims such as “agents write 90%+- of code” and “100% of code with agents”; use only as author/case-study claim, not general fact.

Task 7 use:

- Good example for “factory/orchestration” and “feedback loops over faith.”
- Caveat broad productivity/code-authorship claims or omit them.

### How to Pair With an Agent — <https://ampcode.com/notes/how-to-pair-with-an-agent>

**Recency/status:** 2026-01-14 workflow note.
**Best use:** task specification and verification habits.

Key points:

- Failure mode is under-specification; give direction, traps, references, and definition of done.
- Agents move faster than human verification, so prompts should engineer feedback loops.
- “Trust isn’t a feeling, it’s a passing test suite.”

Task 7 use:

- Supports the broad article theme: Amp examples should teach task shaping and proof, not just feature selection.

## Oracle Feedback Incorporated

Consulted Oracle on 2026-06-28 after the first evidence pass. High-confidence feedback incorporated here:

- Do not frame Oracle as a mode; current modes are `rush`, `smart`, and `deep`.
- Include `deep` as the hard-work mode and make Oracle the second-opinion planning/review/debugging tool.
- Remove old model names and Rush numbers rather than refreshing them into the main copy.
- Treat Handoff as obsolete for current Amp product guidance.
- Use archived context pages only for durable principles.
- Add explicit source-hierarchy and stale-risk warnings.
- Record Librarian’s default-branch limitation.
- Treat plugin/custom-agent APIs as current but high-churn advanced surfaces.
- Frame permissions as a configurable security boundary, not a blanket recommendation.

## Recommended Task 7 Article Frame

Working title: **Amp Power Patterns in the Factory Era** or **Amp as a Factory-Era Coding-Agent Case Study**.

Suggested structure:

1. **Tools change; patterns persist.** Amp is the example, while the reusable lessons are task sizing, feedback loops, review, context hygiene, and delegation.
2. **Match mode to uncertainty.** `rush` for bounded known-done tasks; `smart` for general strong work; `deep` for hard/complex tasks; Oracle for second-opinion planning/review/debugging.
3. **Delegate with contracts.** Subagents for independent work, Oracle for critique, Librarian for external/default-branch code research, review/check agents for codified review criteria.
4. **Context is product plus repo state.** Use auto-compaction, thread references, `AGENTS.md`, skills, and lazy-loaded MCP; link to public context articles for durable state instead of recreating them.
5. **Make the factory prove its work.** Use Diffs, `amp review`, Checks, Feedback Loopable, and Mainframe Magic as Amp-specific proof-loop examples; link to `make-the-agent-prove-it` for mechanics.
6. **Orchestration is the frontier.** Use Agents Everywhere, Custom Agents, and Plugin API to show current direction without overpromising stability.
7. **What not to copy forward.** Explicitly remove Oracle-as-mode, Handoff, token thresholds, old models, old speed/cost, old VS Code/sidebar assumptions, stale install claims, and draft-only links.

## Follow-Up Before Editing or Publishing Task 7

- [ ] Re-run the Chronicle/manual/models/plugin API sweep on the publish date.
- [ ] Decide whether the article needs exact model names; if not, omit them.
- [ ] Decide whether install/setup/pricing appears; if yes, verify from current official pages right before publish.
- [ ] Check whether current manual still says Handoff is absent and auto-compaction/thread references are the right framing.
- [ ] Verify current UI/keybinding/sidebar details only if screenshots or instructions survive.
- [ ] Compare rewritten article against `agentic-coding-2026`, `make-the-agent-prove-it`, and `small-threads-durable-state` to avoid overlap.
- [ ] Run normal site checks only after public content/frontmatter/navigation changes; for prep-only research, `git diff --check` is sufficient.
