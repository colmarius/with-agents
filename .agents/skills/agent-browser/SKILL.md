---
name: agent-browser
description: "Automates browsers with agent-browser. Use for web app navigation, testing, screenshots, data extraction, Electron/Slack/CDP, and loading CLI-served skills. Triggers on: agent-browser, browser automation, dogfood testing."
---

# agent-browser Skill

Use `agent-browser` for browser automation work that needs a real browser,
repeatable browser checks, screenshots, exploratory testing, data extraction,
or app-specific automation.

This local skill is a discovery stub. Keep it small and ask the `agent-browser`
CLI for current workflow details so instructions match the installed CLI version.

Source: <https://agent-browser.dev/skills>

## When To Use

Use this skill when the task asks for or benefits from:

- browser navigation, form filling, snapshots, screenshots, or data extraction;
- verifying a web app flow beyond static HTML inspection;
- systematic exploratory testing or dogfooding;
- automating an Electron app through Chrome DevTools Protocol;
- browser-based Slack automation;
- running browser automation in Vercel Sandbox or AWS Bedrock AgentCore;
- loading current `agent-browser` skill instructions from the CLI.

## Core Workflow

1. **Check whether the CLI is available.**

   ```sh
   agent-browser --help
   ```

   If it is not installed and the task really needs it, prefer a one-off CLI
   invocation or ask before adding any dependency to the project.

2. **List current runtime skills.**

   ```sh
   agent-browser skills list
   ```

3. **Load the current skill for the job.**

   ```sh
   agent-browser skills get core --full
   ```

   Use `core --full` as the default starting point for most browser tasks. Use a
   specialized skill when the task clearly matches one.

4. **Run the browser workflow from the CLI-served instructions.**

   Record commands, artifacts, screenshots, videos, traces, and known gaps in the
   active work item or final response.

## Useful CLI Skill Commands

```sh
agent-browser skills
agent-browser skills list
agent-browser skills get <name>
agent-browser skills get <name> --full
agent-browser skills get --all
agent-browser skills path [name]
```

All of those commands support `--json` for structured output. Set
`AGENT_BROWSER_SKILLS_DIR` only when you intentionally need a custom skills
directory.

## Available Runtime Skills

Use `agent-browser skills list` for the authoritative list. The docs currently
describe these runtime skills:

- `core` — browser automation: navigation, snapshots, forms, screenshots, data
  extraction, sessions, authentication, diffing, and command reference.
- `dogfood` — systematic exploratory testing with structured reports,
  screenshots, and repro videos.
- `electron` — automate Electron apps such as VS Code, Slack, Discord, or Figma
  through their Chrome DevTools Protocol port.
- `slack` — browser-based Slack automation for unreads, channels, search,
  messages, and data extraction.
- `vercel-sandbox` — run `agent-browser` and headless Chrome inside ephemeral
  Vercel Sandbox microVMs.
- `agentcore` — run `agent-browser` on AWS Bedrock AgentCore cloud browsers.

## Installation Note

The upstream docs install a thin discovery skill with:

```sh
npx skills add vercel-labs/agent-browser
```

For this repository, this checked-in local skill plays that discovery role. Do
not vendor `agent-browser` runtime skill data into this repo by default; ask the
CLI for current instructions instead.
