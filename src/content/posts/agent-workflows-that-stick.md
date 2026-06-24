---
title: 'Agent Workflows That Stick: Short Threads, External Memory, Staged Diffs'
description: 'Patterns that make agent success repeatable and robust—avoid context rot, maintain quality, and ship with confidence.'
pubDate: 2025-11-07
tags: ['AI Agents', 'Amp', 'Workflows', 'Best Practices']
difficulty: 'intermediate'
readingTime: '20 min'
draft: false
order: 4
---

**TL;DR:**

- Start new threads around 50–100k tokens; beyond ~100k quality degrades
- External memory (context.md) beats long threads every time
- Git staging area + tight feedback loops = quality at speed

> **📖 Quick Start**
>
> - **Who it's for:** Developers with first wins ready to level up
> - **Time to complete:** 20 minutes reading + practice
> - **Prerequisites:** [First win completed](/posts/amp-first-win-15-minutes)
> - **Expected outcome:** Repeatable workflow patterns that avoid context rot
> - **Next step:** [Master power patterns](/posts/amp-power-patterns)

> **📋 Workflow Checklist**
>
> - [ ] Start new threads for each distinct task
> - [ ] Write decisions to .agents/context/ files
> - [ ] Use feedback loops (tests, builds, screenshots)
> - [ ] Stage good changes, discard bad ones
> - [ ] Fork threads to explore alternatives
> - [ ] Add tests to verify fixes/features
> - [ ] Monitor token usage, start fresh around 50-100k

## The Problem with Long Threads

**You:** "Fix the authentication bug"
**Agent:** ✅ Done

**You:** "Now add logging"
**Agent:** ✅ Done

**You:** "Refactor the API client"
**Agent:** ✅ Done

**You:** "Add tests"
**Agent:** 🤔 *Forgets the auth fix, breaks the logger, introduces new bugs*

**What happened?** Context sprawl. Beyond ~100k tokens, quality degrades—the model:

- Forgets early instructions
- Loses track of file state
- Enters "doom loops" (tries the same failed fix repeatedly)
- Produces lower-quality code

## The Desk Analogy

Think of your thread as a desk:

- **Clean desk:** One task, relevant files, clear goal—productive
- **Messy desk:** 10 tasks, 50 files, vague goals—chaos

**The fix:** Clear your desk often. Start new threads.

## Start New Threads Often

**When to start a new thread:**

- Every distinct task (bug fix, feature, refactor)
- After 5-10 agent turns in a complex conversation
- When switching to a different part of the codebase
- When the agent starts "forgetting" earlier context
- When you want to try a different approach

**How to carry context forward:**

- Use Handoff to extract only relevant context into a fresh thread
- Reference external memory (context.md files)
- Link to previous threads if needed

**Example:**

```text
Thread 1: Fix authentication bug → Commit
Thread 2: Add logging to auth flow → Commit
Thread 3: Refactor API client → Commit
Thread 4: Add tests for all of the above → Commit
```

Each thread: focused, verifiable, committable.

## External Memory: The context.md Pattern

**Instead of:** Keeping everything in thread context
**Do this:** Write it down, reference it later

**Pattern:**

```text
You: "Summarize the key decisions and constraints from this
      conversation to .agents/context/auth-refactor.md"

[Agent writes context.md]

[Start new thread]

You: "Read @.agents/context/auth-refactor.md and continue
     adding the JWT middleware"
```

**What to store:**

- Architectural decisions
- Constraints and requirements
- API contracts and schemas
- Command sequences that work
- Known pitfalls and workarounds

**Naming convention:**
Name files predictably: `.agents/context/<topic>.md` (e.g., `auth-refactor.md`, `api-migration.md`)

**Benefits:**

- Fresh context per thread
- Searchable, version-controlled knowledge
- Faster onboarding for future threads
- Clear separation between tasks

## Feedback Loops: Reproducible Scripts

**The pattern:**

```text
goal → action → verify → adjust → repeat
```

**Make verification automatic:**

**For tests:**

```bash
npm test -- @tests/auth.test.ts
```

**For builds:**

```bash
npm run build && npm run check
```

**For UI:**

```bash
npm run storybook
# Agent looks at localhost:6006 and screenshots
```

**For databases:**

```bash
psql -d mydb -c "SELECT * FROM users LIMIT 5;"
# Agent verifies schema changes
```

**Why this matters:**

- Agent can self-correct
- You get high confidence in results
- No "looks good, ship it" only to find it broken

## Git Discipline: Your Quality Gate

**The workflow:**

1. Agent makes changes
2. Review diff (git diff or VS Code)
3. Stage good changes: `git add <file>`
4. Discard bad changes: `git restore <file>`
5. Repeat until satisfied
6. Commit staged changes

**Why this is powerful:**

- No fear of bad code surviving
- Easy to cherry-pick good changes
- Version control is your undo/redo
- Forces you to review carefully

**Pro tip:** Use git staging interactively:

```bash
git add -p  # Review changes chunk by chunk
```

## Forking Threads: Try Different Approaches

**Scenario:** Agent suggests approach A, but you want to try B.

**Don't:** Keep arguing in the same thread
**Do:** Fork the thread

**How to fork:**
Use the Fork action in VS Code (right-click message → "Fork from here") or CLI

**Benefits:**

- Explore alternatives without losing context
- Compare approaches side by side
- Easy to discard the one that doesn't work

## Confirm the Fix: Add/Modify Tests

**Pattern:**

```text
You: "Fix the authentication bug AND add a test that
verifies the fix. Show me the test passing."
```

**Why:**

- Proves the fix works
- Prevents regressions
- Forces the agent to understand the problem deeply
- Gives you confidence to ship

**For bug fixes:**

```text
"Write a test that reproduces the bug, verify it fails,
then fix the bug and verify the test passes."
```

**For features:**

```text
"Implement the feature and add tests that cover the
happy path and two error cases."
```

> **💡 Token Management:** Token sprawl degrades quality beyond ~100k tokens. Cap exploration, focus reads, prune logs, and start new threads often. For comprehensive token hygiene strategies and mode selection, see [Power Patterns](/posts/amp-power-patterns)

## Real Example: Refactoring a Component

**Bad approach (one long thread):**

```text
You: Refactor UserProfile to use hooks
Agent: [makes changes]
You: Add loading states
Agent: [makes changes]
You: Add error boundaries
Agent: [makes changes, context at 120k tokens]
You: Add tests
Agent: [breaks the refactor, forgets loading states]
```

**Good approach (multiple focused threads):**

**Thread 1:**

```text
You: Refactor @components/UserProfile.tsx to use hooks instead of class
     syntax. Verify existing tests still pass.
Agent: [refactor + verify]
You: [Review, stage, commit]
```

**Thread 2:**

```text
You: Add loading and error states to @components/UserProfile.tsx.
     Write tests for both states.
Agent: [implement + test]
You: [Review, stage, commit]
```

**Thread 3:**

```text
You: Add error boundary around @components/UserProfile.tsx.
     Add a test that verifies it catches render errors.
Agent: [implement + test]
You: [Review, stage, commit]
```

**Result:** Three clean commits, each verifiable, no context rot.

## Takeaways

**Patterns that work:**

- Start new threads for each distinct task
- Write decisions to context.md files
- Use feedback loops (tests, builds, screenshots)
- Stage good changes, discard bad ones
- Fork threads to explore alternatives
- Always add tests to verify fixes/features

**Patterns that fail:**

- Reusing threads until context sprawls
- Relying on thread memory for critical decisions
- No verification step in prompts
- Committing without reviewing diffs
- Letting token count climb unchecked

## This Week: Practice These 3 Workflows

> **🔨 Try It Now: Three Workflow Exercises**
>
> **Exercise 1: External Memory Extraction**
>
> **Prompt:**
>
> ```text
> Extract the key architectural decisions from this conversation
> to .agents/context/architecture.md. Include constraints,
> patterns we're using, and what to avoid.
> ```
>
> **Verification:** File exists, readable by a fresh thread
> **Success criteria:** Start a new thread, reference the file, agent understands context
>
> **Exercise 2: Fork and Compare**
>
> **Prompt in Thread A:**
>
> ```text
> Refactor this component using approach A (hooks)
> ```
>
> **Then fork thread and prompt in Thread B:**
>
> ```text
> Refactor this component using approach B (composition)
> ```
>
> **Verification:** Compare diffs side by side
> **Success criteria:** Pick the better approach, discard the other
>
> **Exercise 3: Test-First Fix**
>
> **Prompt:**
>
> ```text
> Write a test that reproduces the bug in [component].
> Verify it fails. Then fix the bug and verify the test passes.
> ```
>
> **Verification:** See test fail, then pass
> **Success criteria:** Bug fixed with proof via passing test
>
> **Expected outcome:** These patterns become muscle memory for your daily workflow.

### Exercise 1: Short Thread Discipline

**Task:** Fix a bug or implement a small feature in a new thread, commit, close

**Prompt:**

```text
"Fix [specific bug] in a fresh thread. Run tests to verify the fix, then show me the diff."
```

**Success criteria:**

- Thread stays under 50k tokens
- Clean, focused commit
- No leftover uncommitted changes
- Tests pass

### Exercise 2: External Memory

**Task:** Create `.agents/context/decisions.md` for your main project

**Prompt:**

```text
"Review the architecture of [your project] and create .agents/context/decisions.md
documenting 3-5 key architectural decisions with rationale. Include: tech choices,
API patterns, and known constraints."
```

**Success criteria:**

- File contains 3-5 documented decisions
- Each decision includes rationale
- File is committed and version-controlled
- You can reference it in future threads

### Exercise 3: Test-Driven Fix

**Task:** Fix a bug AND verify it with a test

**Prompt:**

```text
"Fix [specific bug]. First write a test that reproduces the bug and verify it fails.
Then fix the bug and verify the test passes. Commit both together."
```

**Success criteria:**

- Test fails before fix
- Test passes after fix
- Both test and fix committed together
- No other changes in the commit

---

**Next:** [Amp Power Patterns](/posts/amp-power-patterns) — When to use subagents, Oracle, Librarian, and Rush mode for maximum leverage.

**Practice Path:**

1. [What is an Agent](/posts/what-is-an-agent)
2. [First Win in 15 Minutes](/posts/amp-first-win-15-minutes)
3. **You are here**: Workflows That Stick
4. [Power Patterns](/posts/amp-power-patterns)
5. [Planning Workflow](/posts/agent-planning-workflow)

**Related:**

- [Coding with Agents in 2025](/posts/coding-with-agents-2025) — The complete overview
