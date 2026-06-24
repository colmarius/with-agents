---
title: 'How I Use Amp: From Clean Repo to First Win in 15 Minutes'
description: 'A step-by-step guide to getting your first real success with a coding agent—from setup to verified results.'
pubDate: 2025-11-07
tags: ['AI Agents', 'Amp', 'Workflows', 'Getting Started']
difficulty: 'beginner'
readingTime: '15-20 min'
draft: false
order: 3
---

**TL;DR:**

- One small, real win beats a dozen half-finished experiments
- Feedback loops (tests, builds, screenshots) turn chaos into confidence
- Git staging is your safety net—stage good, discard bad, iterate fast

> **📖 Quick Start**
>
> - **Who it's for:** Developers ready to try their first agent task
> - **Time to complete:** 15-20 minutes end-to-end
> - **Prerequisites:** Amp installed ([ampcode.com/install](https://ampcode.com/install))
> - **Expected outcome:** One verified win (passing test, working UI, or clean build)
> - **Next step:** [Learn workflows that stick](/posts/agent-workflows-that-stick)

## The Goal: One Small Win, End-to-End

Don't aim for perfection. Aim for:

- A failing test that passes
- A small UI change that renders correctly
- TypeScript errors that vanish
- Debug statements that disappear from 15 files

Pick something you can verify in 30 seconds.

## Setup: 5 Minutes

**Install Amp:**

1. Visit [ampcode.com/install](https://ampcode.com/install) and sign in
2. Install CLI: `npm install -g @sourcegraph/amp` (or curl/pnpm/yarn)
3. Install VS Code extension: search "Amp" in extensions

**Learn two shortcuts:**

- `⌘I` (Cmd+I): Inline chat in editor
- `⌘L` (Cmd+L): Open Amp sidebar

**Pro tip:** Keep the sidebar open. You'll live there.

> **⚠️ Common Issues**
>
> **"Tests not found":** Prompt: "Find all test files in this project and show me how to run them"
>
> **"Build command unknown":** Check package.json scripts or AGENTS.md
>
> **"Agent changed wrong files":** Be specific: "Only modify @tests/user-auth.test.ts"
>
> **"Environment variables missing":** Prompt: "Check .env.example for required vars and create .env"

## Pick Your Target

Choose a track based on what's easiest to verify in your project:

### Track 1: Tests (Most Reliable)

Best for projects with test suites. Clear pass/fail feedback.

**Good first tasks:**

- Fix a failing test
- Add tests for an existing function
- Increase coverage for a specific module

**Verification:**

```bash
npm test              # or: pnpm test, yarn test
npm test -- path/to/test.spec.ts
```

### Track 2: UI Changes (Most Visual)

Best when you don't have tests but have UI components.

**Good first tasks:**

- Add a button or toggle
- Change styling or layout
- Add icons or visual elements

**Verification:**

```bash
npm run dev           # or: pnpm dev, yarn dev
npm run storybook     # or: pnpm storybook, yarn storybook
```

Then check localhost in browser or let Amp take screenshots.

### Track 3: Debug & Cleanup (Most Practical)

Best for cleaning up existing code.

**Good first tasks:**

- Remove all console.log/debug statements
- Fix TypeScript errors in one file
- Clean up unused imports

**Verification:**

```bash
npm run build         # or: pnpm build, yarn build
npm run check         # or: pnpm check, yarn check
```

### Tasks to Avoid (For Now)

- "Refactor the entire auth system"
- "Add real-time collaboration"
- Anything without a clear "done" signal

> **🔨 Try It Now: Three Tracks to Your First Win**
>
> Pick the track that matches your codebase:
>
> **Track 1: Fix with Test Confirmation**
>
> ```text
> Run tests in @tests/, identify one failing test, fix it,
> and re-run until it passes. Show me the before/after test output.
> ```
>
> **Verification:** Test goes from red to green
>
> **Track 2: UI Change with Screenshot**
>
> ```text
> Add a dark mode toggle to @components/Header.tsx.
> Look at localhost:3000, take a screenshot, and verify it renders.
> ```
>
> **Verification:** Screenshot shows working toggle
>
> **Track 3: Debug with Temporary Logs**
>
> ```text
> Add temporary console.log statements to trace the auth flow
> in @utils/auth.ts. Run the app, capture the logs, then remove
> the debug statements and verify build succeeds.
> ```
>
> **Verification:** You understand the flow, logs are gone, build clean
>
> **Expected outcome:** One verified win in 10-15 minutes.

## Build a Feedback Loop

The magic isn't the AI—it's the loop:

```text
Agent makes changes
  → You verify (tests/build/screenshot)
    → Agent sees results
      → Agent adjusts
        → Repeat until done
```

**Example loops:**

**For tests:**

```bash
npm test -- @tests/failing-test.spec.ts  # or: pnpm test, yarn test
```

**For UI:**

```bash
npm run storybook  # or: pnpm storybook, yarn storybook
# Then tell Amp to look at localhost:6006
```

**For types:**

```bash
npm run build  # or: pnpm build, yarn build
```

## Prompt Pattern: Goal → Phases → Confirm Mission

**Bad prompt:**

```text
Fix the tests
```

**Good prompt:**

```text
Run the tests in @tests/, list failures, fix one file at a time, re-run.
Stop after green.
```

**Anatomy of a good prompt:**

1. **Goal:** "Fix failing tests"
2. **Phases:** "List failures, fix one file at a time, re-run"
3. **Success criteria:** "Stop after green"

## Example: Fixing Failing Tests

**Context:** You have 3 failing tests in `user-auth.test.ts`.

**Prompt:**

```text
Run the tests in @tests/user-auth.test.ts, identify failures,
fix them one at a time, and re-run after each fix.
Stop when all tests pass.
```

**What Amp does:**

1. Runs `npm test -- @tests/user-auth.test.ts` (uses your package manager)
2. Sees 3 failures
3. Fixes first failure
4. Re-runs tests
5. Sees 2 failures remaining
6. Fixes second failure
7. Re-runs tests
8. Continues until green

**Your job:** Review the diffs, stage the good changes.

## Diff Review Flow: Your Safety Net

**The pattern:**

1. Amp makes changes (files show as modified)
2. You review in git diff or VS Code
3. Stage good changes: `git add <file>` or click "+" in VS Code
4. Discard bad changes: `git restore <file>` or click "-"
5. Commit the good stuff: `git commit -m "Fix user auth tests"`

**Why this works:**

- No fear of bad code sticking around
- Tight feedback loop
- Easy to try multiple approaches
- Version control is your undo button

## Verification: What "Done" Means

**For tests:**

```bash
npm test  # or: pnpm test, yarn test
# All green
```

**For builds:**

```bash
npm run build  # or: pnpm build, yarn build
npm run check  # or: pnpm check, yarn check
# No errors, types pass
```

**For UI:**

- Visual check in browser/Storybook
- Screenshot comparison
- Let Amp take screenshots and verify

**For features:**

```bash
npm test  # or: pnpm test, yarn test
# Existing tests still pass, manual verification in browser
```

## Common Snags and Fixes

> **🔨 Try It Now: Troubleshooting Practice**
>
> **Task:** Use these fix prompts when you hit issues
>
> **For "Agent changed unrelated files":**
>
> ```text
> Discard changes to all files except @[specific-file].
> Only modify the files I specified.
> ```
>
> **For "Agent stuck in retry loop":**
>
> ```text
> Start a new thread with: "The previous approach failed because [reason].
> Try [alternative approach] instead."
> ```
>
> **For "No clear verification":**
>
> ```text
> After making changes, run [specific command] and show me the output
> to prove it worked.
> ```
>
> **Expected outcome:** Recover from common issues quickly instead of abandoning the task.

### Environment & Output Issues

**"Environment variables not found"**

- Add to prompt: "Check .env.example for required vars"
- Or: Create `.env` before starting

**"Tests are flaky"**

- Prompt: "Run tests 3 times; only fix if all 3 fail"

**"Output is too long"**

- Prompt: "Summarize errors, don't paste full logs"

### Scope & Iteration Issues

**"Agent changed unrelated files"**

- Review diffs carefully
- Discard unrelated changes
- Refine prompt: "Only modify @tests/user-auth.test.ts"

**"Agent keeps retrying the same fix"**

- Start a new thread
- Provide more context: "The API returns 401, check the token format"

## Real Example: Dark Mode Toggle

**Goal:** Add dark mode toggle to header component.

**Prompt:**

```text
Add a dark mode toggle to @components/Header.tsx.
Use the existing theme context.
Look at localhost:3000/header in Storybook,
take a screenshot to verify it renders correctly.
```

**What happens:**

1. Amp reads `Header.tsx` and theme context files
2. Adds toggle button with moon/sun icons
3. Connects to theme context
4. Opens Storybook in browser
5. Takes screenshot
6. Shows you the result

**Your review:**

- Check the diff
- Verify screenshot looks good
- Stage the changes
- Commit

**Time elapsed:** 5-7 minutes, including your review.

## Takeaways

**What works:**

- Clear, specific goals with verification steps
- Feedback loops (tests, builds, screenshots)
- Git staging for safe iteration
- Starting new threads often

**What doesn't:**

- Vague goals without success criteria
- No way for agent to verify its work
- Reusing threads until context sprawls
- Micromanaging every step

## Try This Next

**Level 1 (5-10 min):**

- "Fix all TypeScript errors in this file and re-run build"
- "Remove all console.log statements from src/ directory"

**Level 2 (10-20 min):**

- "Add loading states to all API calls in UserService.ts"
- "Write tests for the authentication utility functions"

**Level 3 (20-30 min):**

- "Refactor this component to use hooks instead of class syntax, verify tests still pass"
- "Add error boundaries around async components, add tests"

---

**Next:** [Agent Workflows That Stick](/posts/agent-workflows-that-stick) — Make this success repeatable with patterns that avoid context rot.

**Practice Path:**

1. [What is an Agent](/posts/what-is-an-agent)
2. **You are here**: First Win in 15 Minutes
3. [Workflows That Stick](/posts/agent-workflows-that-stick)
4. [Power Patterns](/posts/amp-power-patterns)
5. [Planning Workflow](/posts/agent-planning-workflow)

**Related:**

- [Coding with Agents in 2025](/posts/coding-with-agents-2025) — The big-picture overview and mindset
