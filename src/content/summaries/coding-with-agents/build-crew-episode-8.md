---
title: "Live hacking + win $500 Amp credit"
resourceId: 3
series: "build-crew"
episode: 8
date: "2025-12-03"
---

## Build Crew Live: Episode 8 Highlights

Episode 8 combines model news, Amp company news, and a live debugging session in Thorsten's Rust/GPU terminal emulator to show why built-in feedback loops matter for agent-driven development.

### Key Points Covered

* **Opus 4.5 changes the model conversation**: The panel compares Opus 4.5 with Gemini 3 and Sonnet 4.5. The takeaway is not just peak intelligence, but fewer lows: Opus can be cheaper in practice when it avoids off-the-rails work and long, low-value assistant messages [04:51]-[11:34].

* **Bun/Oven joining Anthropic points to agent-native infrastructure**: The group discusses Bun as a JavaScript runtime, the monetization pressure around venture-backed open source, and why Anthropic might want Bun for Claude Code, sandboxing, remote agents, micro web apps, and future agent-first frameworks [12:27]-[18:23].

* **Amp spins out of Sourcegraph/Sourcecraft**: The episode notes that Amp is becoming its own company with a founding team and sharper focus as a smaller independent organization [19:10]-[21:06].

* **Code the Impossible: terminal color support**: Thorsten demos a Rust/GPU terminal emulator that lacks 256-color and true-color support. Because the terminal has a built-in capture mode, Amp can inspect screenshots of terminal output, implement SGR/true-color handling, and add debug output when visual feedback does not change [21:52]-[43:12].

* **Prompt Shootout shows the value of feedback loops**: Two prompts tackle the same `htop` rendering bug. The prompt that explicitly tells the agent to use capture feedback makes autonomous progress faster, while the shorter underspecified prompt needs more human steering [44:07]-[53:14].

* **Codebases should expose inspectable modes for agents**: The core lesson is that application-native feedback loops beat manual clicking. If an app can expose screenshots, logs, fixtures, or state snapshots through commands, agents can verify visual and behavioral changes without waiting for the human [54:08]-[59:06].

* **Try frontier models on harder tasks**: The closing advice is to revisit assumptions about what agents can handle. Newer models such as Opus 4.5 may go longer and further than workflows built around older models expect [59:06]-[01:00:11].

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=rCLvd_Csp-8)

Build Crew: <https://buildcrew.team>
