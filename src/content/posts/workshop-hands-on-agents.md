---
title: 'Workshop: Hands-on Agents'
description: 'A 30-minute workshop guide to setting up dot-agents on your personal projects—from first install to verified setup.'
pubDate: 2025-01-31
tags: ['AI Agents', 'Amp', 'Workshop', 'Getting Started']
difficulty: 'beginner'
readingTime: '30 min workshop'
draft: true
order: 99
---

**Workshop Duration:** 30 minutes

> **📖 Workshop Overview**
>
> - **Who it's for:** Developers wanting to supercharge their projects with AI agents
> - **What you'll do:** Set up [dot-agents](https://github.com/colmarius/dot-agents) on your own project
> - **Prerequisites:** A personal project ready, basic terminal knowledge
> - **Outcome:** Your project configured with agent workflows

---

## Part 1: Introduction to Amp (~6 min)

### What is Amp?

Amp is a **coding agent**—not just autocomplete, not just chat. It's an AI that can:

- Read and understand your entire codebase
- Execute terminal commands
- Make multi-file changes
- Verify its own work through tests and builds

### How Amp Differs from Other Tools

| Tool | What it does | Amp's difference |
|------|--------------|------------------|
| GitHub Copilot | Line-by-line autocomplete | Amp understands full context, executes tasks end-to-end |
| Cursor | AI-powered editor | Amp is agent-first: it runs commands, verifies, iterates |
| ChatGPT | Conversational AI | Amp has direct access to your codebase and terminal |

**The key insight:** Amp doesn't just suggest code—it *does* the work and confirms it's done.

### Get Started with Amp

**Sign up:** [ampcode.com](https://ampcode.com)

**Pricing:**

- Free tier available (with ads, $10/day credit)
- **Workshop special:** Get $100 off at [buildcrew.team](https://www.buildcrew.team/)

**Resources:**

- [Amp Manual](https://ampcode.com/manual) — Complete documentation
- [Install Guide](https://ampcode.com/install) — Get set up in 5 minutes

---

## Part 2: Setting Up dot-agents (~12 min)

This is the hands-on portion. Follow along step by step.

### Prerequisites

Before we start, make sure you have:

- [ ] Amp installed ([ampcode.com/install](https://ampcode.com/install))
- [ ] A personal project open in VS Code
- [ ] Terminal access

### Step 1: Clone dot-agents

Open your terminal and clone the dot-agents repository:

```bash
git clone https://github.com/colmarius/dot-agents.git
```

This repo contains reusable agent configurations and skills.

### Step 2: Copy the .agents folder

Copy the `.agents` folder to your project root:

```bash
cp -r dot-agents/.agents /path/to/your/project/
```

Your project should now have:

```text
your-project/
├── .agents/
│   ├── skills/
│   ├── plans/
│   └── ...
├── src/
└── ...
```

### Step 3: Run the Adapt Skill

Now the magic happens. Open Amp in your project and run:

```text
Load the adapt skill and analyze this project
```

The adapt skill will:

1. Scan your project structure
2. Detect your tech stack (languages, frameworks, build tools)
3. Create a customized `AGENTS.md` file
4. Set up project-specific workflows

> **💡 What's AGENTS.md?**
>
> This file tells Amp about your project: build commands, conventions, testing approach.
> It's like onboarding documentation—but for your AI agent.

### Step 4: Verify the Setup

Check that everything works:

```text
Read AGENTS.md and summarize what you know about this project
```

Amp should respond with accurate information about:

- Your build commands
- Your test setup
- Your code conventions

**Success criteria:** Amp knows how to build and test your project.

### Step 5: Try a Simple Task

Give Amp a small task to verify the setup:

```text
Find all TODO comments in this project and list them
```

Or for projects with tests:

```text
Run the tests and report the results
```

> **🔨 Checkpoint**
>
> By now you should have:
>
> - [ ] `.agents/` folder in your project
> - [ ] `AGENTS.md` created by the adapt skill
> - [ ] Amp successfully responding with project knowledge
>
> If something's not working, raise your hand!

---

## Part 3: Live Demo (~6 min)

*This section is for live demonstration during the workshop.*

**What we'll cover:**

- Real-world example of agents on a production codebase
- How agent workflows look in practice
- Common patterns and gotchas

> **📺 Live Demo Notes**
>
> During the workshop, we'll walk through:
>
> - An actual project using dot-agents
> - Running tasks with feedback loops
> - How to recover when things go wrong

---

## Part 4: Resources & Next Steps (~6 min)

### Dive Deeper

**Practice Path** — Level up your agent skills:

1. [What is an Agent?](/posts/what-is-an-agent) — Core concepts explained
2. [First Win in 15 Minutes](/posts/amp-first-win-15-minutes) — Your first successful task
3. [Workflows That Stick](/posts/agent-workflows-that-stick) — Build repeatable patterns
4. [Power Patterns](/posts/amp-power-patterns) — Advanced techniques

**Essential Links:**

- [dot-agents Repository](https://github.com/colmarius/dot-agents) — The starter kit we used today
- [Amp Manual](https://ampcode.com/manual) — Complete documentation
- [Amp Install](https://ampcode.com/install) — Setup guide
- [BuildCrew](https://www.buildcrew.team/) — $100 discount for workshop participants

### Discussion Prompts

Questions to explore:

- What tasks in your daily work would benefit from agent automation?
- How do you see agents fitting into your existing workflow?
- What concerns do you have about AI-assisted coding?

### Q&A

*Open floor for questions and discussion.*

---

## Quick Reference Card

**Commands to remember:**

```text
# Load a skill
Load the [skill-name] skill and [task]

# Run tests with feedback
Run tests, fix any failures, repeat until green

# Explore codebase
Walk me through how [feature] works
```

**Key files:**

| File | Purpose |
|------|---------|
| `AGENTS.md` | Project instructions for Amp |
| `.agents/skills/` | Reusable agent workflows |
| `.agents/plans/` | Task tracking for complex work |

---

**Thank you for attending!**

Questions after the workshop? Reach out or explore the resources above.
