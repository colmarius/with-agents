---
title: 'Planning Before Coding: The Agent Workflow That Prevents Rewrites'
description: 'Why agents should plan first, code second—and how the .agents/plans structure turns complex tasks into systematic wins.'
pubDate: 2025-11-07
tags: ['AI Agents', 'Amp', 'Workflows', 'Planning']
difficulty: 'intermediate'
readingTime: '25-40 min'
draft: false
order: 5
---

**TL;DR:**

- Planning before coding prevents thrash, scope creep, and rewrites
- `.agents/plans/` structure (todo → in-progress → completed) creates accountability
- Oracle reviews catch over-engineering before you write a single line
- Keep plans minimal: core functionality first, nice-to-haves later

> **📖 Quick Start**
>
> - **Who it's for:** Developers tackling multi-file or complex features
> - **Time to complete:** 25-40 minutes to learn + practice
> - **Prerequisites:** Understanding of [power patterns](/posts/amp-power-patterns)
> - **Expected outcome:** Planning workflow that prevents rewrites
> - **Next step:** Apply to your next complex feature

## The Problem: Coding Without Planning

**You:** "Add user authentication to the app"

**Agent:** *Immediately starts editing files*

30 minutes later:

- JWT implementation half-done
- OAuth providers scattered across 5 files
- Database migrations broken
- Tests failing
- No clear path to completion

**What went wrong?** The agent jumped straight to implementation without:

- Understanding existing architecture
- Breaking down the task
- Identifying dependencies
- Defining success criteria

**The fix:** Plan first, code second.

## The Planning Workflow

```mermaid
flowchart TD
    Todo[📝 todo/new-feature.md]
    Review{Oracle Review}
    Progress[🚧 in-progress/new-feature.md]
    Code[Agent Implements]
    Update[Update Progress]
    Done{Success Criteria Met?}
    Complete[✅ completed/new-feature.md]

    Todo --> Review
    Review -->|Simplify| Todo
    Review -->|Approved| Progress
    Progress --> Code
    Code --> Update
    Update --> Done
    Done -->|No| Code
    Done -->|Yes| Complete
```

### Step 1: Create a Plan

Before any code changes, create a plan file:

```bash
.agents/plans/todo/add-user-auth.md
```

**What belongs in a plan:**

- **Goal:** What are we building and why?
- **Current State:** What exists today?
- **Scope:** What's in, what's explicitly out?
- **Steps:** Ordered list of concrete actions
- **Success Criteria:** How do we know we're done?
- **Implementation Notes:** Key principles, pitfalls, testing strategy

**Example plan structure:**

```markdown
# Add User Authentication

## Goal
Implement JWT-based authentication for API endpoints.

## Current State
- No auth system exists
- API endpoints are public
- User model exists in database

## Scope
**In scope:**
- JWT token generation/validation
- Login endpoint
- Protected route middleware
- Basic tests

**Out of scope (for now):**
- OAuth providers
- Password reset flow
- Email verification
- Rate limiting

## Steps
1. Research existing auth patterns in codebase
2. Add JWT library dependency
3. Create auth middleware
4. Implement login endpoint
5. Protect existing routes
6. Add tests
7. Update API documentation

## Success Criteria
- [ ] User can login with username/password
- [ ] Protected endpoints return 401 without token
- [ ] Protected endpoints work with valid token
- [ ] Tests pass
- [ ] Build succeeds

## Implementation Notes
- Use existing User model, don't create new tables
- Store JWT secret in environment variables
- Token expiry: 24 hours
- Test with curl before writing integration tests
```

### Step 2: Consult the Oracle

Before starting work, ask Oracle to review the plan:

> **🔨 Try It Now: Oracle Plan Review**
>
> **Task:** Get Oracle feedback before coding
>
> **Prompt:**
>
> ```text
> Oracle: review the plan in .agents/plans/todo/[your-feature].md
>
> Focus on:
> 1. Is the scope minimal or over-engineered?
> 2. Are there simpler approaches I'm missing?
> 3. What should be deferred to later?
> 4. Are the steps in the right order?
>
> Suggest a simplified version with core functionality only.
> ```
>
> **Verification:**
>
> - Oracle provides specific simplification suggestions
> - Identifies at least one thing to defer
> - Confirms dependencies and ordering
>
> **Expected outcome:** Plan is 30-50% simpler, focused on core value, ready to execute.

**Oracle catches:**

- Over-engineering
- Missing dependencies
- Scope creep
- Unclear success criteria
- Steps that should be broken down further

**Oracle suggests:**

- Simpler approaches
- Existing patterns to reuse
- What to defer
- Better ordering of steps

### Step 3: Move to In-Progress

Once plan is solid:

```bash
mv .agents/plans/todo/add-user-auth.md .agents/plans/in-progress/
```

This signals:

- Plan is approved
- Work is starting
- Agent should reference this plan

### Step 4: Execute with Plan Context

Start a fresh thread with plan attached:

> **🔨 Try It Now: Mission Repeat-Back**
>
> **Task:** Ensure agent understands the plan before coding
>
> **Prompt:**
>
> ```text
> Read the plan in @.agents/plans/in-progress/[feature].md
>
> Before writing any code, repeat back to me:
> 1. The core goal in one sentence
> 2. The first 3 steps you'll take
> 3. What success looks like
> 4. What's explicitly out of scope
>
> Then proceed with implementation.
> ```
>
> **Verification:**
>
> - Agent summarizes correctly before coding
> - Implementation follows the plan steps
> - Agent updates plan with ✅ after each step
>
> **Expected outcome:** No wasted work on wrong approach, plan stays in sync with reality.

**Agent behavior changes:**

- Follows defined steps
- Stays in scope
- Updates plan with progress
- Stops at success criteria

### Step 5: Keep Plan Updated

As work progresses, agent updates the plan:

```markdown
## Steps
1. ✅ Research existing auth patterns in codebase
   - Found SessionManager pattern in /auth
   - Can reuse token validation helpers
2. ✅ Add JWT library dependency
   - Added jsonwebtoken@9.0.2
3. 🚧 Create auth middleware
   - In progress, using existing pattern
4. ⏸️ Implement login endpoint
...
```

**Benefits:**

- Clear progress tracking
- Easy to resume after breaks
- Documents what worked/didn't work
- Shows remaining work at a glance

### Step 6: Move to Completed

When all success criteria are met:

```bash
mv .agents/plans/in-progress/add-user-auth.md .agents/plans/completed/
```

**Update plan with results:**

```markdown
## Results
- Completed in 2 hours
- All tests passing
- Zero TypeScript errors
- API endpoints protected
- Documentation updated

## Learnings
- Reusing SessionManager saved 1 hour
- Middleware pattern was clearer than decorators
- Testing with curl caught token expiry bug early

## Follow-up Tasks
- Add OAuth providers (new plan)
- Implement password reset (new plan)
- Add rate limiting (new plan)
```

## Why This Works

### 1. Prevents Thrash

**Without plan:**

```text
Agent tries approach A → fails
Agent tries approach B → fails
Agent tries approach C → partially works
Agent rewrites everything → breaks other things
```

**With plan:**

```text
Oracle reviews → suggests proven approach
Agent follows plan → works first time
```

### 2. Controls Scope

Plans make scope explicit. When agent suggests "while we're here, let's also add..."—the plan says "out of scope."

### 3. Creates Checkpoints

Each step is a checkpoint. If something breaks, you know exactly where:

```markdown
1. ✅ Add dependency
2. ✅ Create middleware
3. ❌ Implement login endpoint ← broke here
```

### 4. Enables Parallelization

Clear plans enable multiple agents:

```text
Agent 1: .agents/plans/in-progress/add-auth.md
Agent 2: .agents/plans/in-progress/add-logging.md
Agent 3: .agents/plans/in-progress/fix-tests.md
```

Independent plans = no conflicts.

### 5. Builds Institutional Memory

Completed plans document:

- What worked
- What didn't
- Why decisions were made
- How long things took

Future work references past plans.

## When to Skip Planning

**Skip the plan for:**

- One-file changes
- Obvious bug fixes
- Typo corrections
- Simple refactors

**Always plan for:**

- Multi-file features
- Architecture changes
- Database migrations
- API changes
- Anything touching 3+ layers

**Rule of thumb:** If you can't describe success in one sentence, write a plan.

## Common Planning Mistakes

### Mistake 1: Too Much Detail

**Bad:**

```markdown
Step 1: Import jwt library on line 3 of auth.ts
Step 2: Create function validateToken with parameters...
```

**Good:**

```markdown
Step 1: Create auth middleware using jwt library
Step 2: Add token validation helper
```

Plans guide direction, not dictate every keystroke.

### Mistake 2: No Success Criteria

**Bad:**

```markdown
## Steps
1. Add authentication
2. Add tests
```

**Good:**

```markdown
## Success Criteria
- [ ] User can login with username/password
- [ ] Invalid credentials return 401
- [ ] Protected endpoints require valid token
- [ ] npm test passes
- [ ] npm run build succeeds
```

Success criteria tell you when to stop.

### Mistake 3: Skipping Oracle Review

You write a plan, skip Oracle review, agent codes for an hour, then Oracle points out a 5-minute alternative.

**Always:** Oracle reviews plans before coding starts.

### Mistake 4: Not Updating Plans

Plan becomes stale, agent improvises, chaos returns.

**Fix:** Agent updates plan after each major step.

## Planning Templates

### Feature Template

```markdown
# [Feature Name]

## Goal
[What and why]

## Current State
[What exists]

## Scope
**In scope:**
- [Thing 1]
- [Thing 2]

**Out of scope:**
- [Thing 3]
- [Thing 4]

## Steps
1. [Step 1]
2. [Step 2]

## Success Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Implementation Notes
[Key principles, pitfalls, testing]
```

### Bug Fix Template

```markdown
# Fix: [Bug Description]

## Problem
[What's broken]

## Root Cause
[Why it's broken]

## Solution Approach
[How to fix]

## Steps
1. [Step 1]
2. [Step 2]

## Verification
- [ ] [Test case 1]
- [ ] [Test case 2]
- [ ] [Regression tests pass]
```

### Refactor Template

```markdown
# Refactor: [What]

## Current State
[How it works now]

## Problems
- [Problem 1]
- [Problem 2]

## Target State
[How it should work]

## Migration Strategy
[How to get there safely]

## Success Criteria
- [ ] [Functionality unchanged]
- [ ] [Tests pass]
- [ ] [Performance improved]
```

## The Planning Habit

**Your workflow becomes:**

1. User requests feature
2. Create plan in `.agents/plans/todo/`
3. Oracle reviews and simplifies
4. Move to `.agents/plans/in-progress/`
5. Agent implements with plan context
6. Agent updates plan with progress
7. Verify success criteria
8. Move to `.agents/plans/completed/`
9. Update plan with results

**Time investment:**

- Planning: 5-10 minutes
- Coding: 30-120 minutes
- **Total time saved:** 30-60% (fewer rewrites, less thrash)

**Quality improvement:**

- Clear scope → less scope creep
- Oracle review → better architecture
- Progress tracking → easier debugging
- Success criteria → knowing when to stop

## Real Example: This Blog

**Without planning:**

- Added 4 blog posts
- Broke build twice
- Forgot to set draft: false
- Posts didn't appear in production
- Spent 30 minutes debugging

**With planning:**

```markdown
# Add Blog Posts About Agent Workflows

## Goal
Publish 4 posts about agent best practices

## Steps
1. Create post files with frontmatter
2. Set draft: false
3. Test build locally
4. Verify posts appear on /posts page
5. Commit and push

## Success Criteria
- [ ] npm run build succeeds
- [ ] All 4 posts visible at http://localhost:4321/posts
- [ ] Frontmatter valid
- [ ] Published to production
```

Result: Done in 15 minutes, zero issues.

## Key Takeaways

- **Plan first, code second** — 10 minutes of planning saves hours of rewrites
- **Use `.agents/plans/` structure** — todo → in-progress → completed
- **Oracle reviews plans** — catches over-engineering before coding starts
- **Keep scope minimal** — core functionality first, nice-to-haves later
- **Update plans during work** — living documents, not static artifacts
- **Document results** — completed plans build institutional memory

## What's Next

You've completed the practice path! Now apply these patterns to your daily work.

**Practice Path:**

1. [What is an Agent](/posts/what-is-an-agent)
2. [First Win in 15 Minutes](/posts/amp-first-win-15-minutes)
3. [Workflows That Stick](/posts/agent-workflows-that-stick)
4. [Power Patterns](/posts/amp-power-patterns)
5. **You are here**: Planning Workflow

**Related:**

- [Coding with Agents in 2025](/posts/coding-with-agents-2025) — The complete overview

---

**Challenge:** Try it on your next feature. Create a plan, get Oracle review, then code. You'll never go back.
