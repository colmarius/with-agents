---
addedDate: '2026-06-24'
title: "Live hacking + win $500 Amp credit"
resourceId: 3
series: "build-crew"
episode: 8
date: "2025-12-03"
---

## Build Crew Live: Episode 8 Highlights

Episode 8 of Build Crew Live covers model news and Amp company news, then has Thorsten Ball debug his Rust/GPU terminal emulator live. The debugging session shows how much faster an agent works when the application gives it a built-in way to check its own output.

### Key Points Covered

* **Opus 4.5 matches Gemini 3's best results with fewer failures**: The panel compares Opus 4.5 with Gemini 3 and Sonnet 4.5. Gemini 3 had amazing highs but, for some users, frustrating lows such as loops that kept producing costly output. Opus 4.5 costs more per token, but it can be cheaper in practice when it avoids off-the-rails work and long, low-value assistant messages [04:51–11:34](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=291s).

* **Anthropic acquires Oven, the company behind Bun**: The group explains Bun as a JavaScript runtime, discusses the pressure on venture-backed open source to make money, and speculates about why Anthropic might want Bun for Claude Code, sandboxing, remote agents, micro web apps, and future agent-first frameworks [12:27–18:23](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=747s).

* **Amp spins out of Sourcegraph**: The episode notes that Amp is becoming its own company with a founding team and sharper focus as a smaller independent organization [19:10–21:06](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=1150s).

* **Live demo: adding color support to a terminal emulator**: In the "Code the Impossible" segment, Thorsten demos a Rust/GPU terminal emulator that lacks 256-color and true-color support. Because the terminal has a built-in capture mode, Amp can inspect screenshots of terminal output, implement handling for SGR (Select Graphic Rendition) escape sequences and true color, and add debug output when visual feedback does not change [21:52–43:12](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=1312s).

* **A prompt that points the agent to its feedback tool does better**: In the "Prompt Shootout" segment, two prompts tackle the same `htop` rendering bug. The prompt that explicitly tells the agent to use capture feedback makes autonomous progress faster, while the shorter underspecified prompt needs more human steering [44:07–53:14](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=2647s).

* **Build ways for agents to inspect your application**: The core lesson is that feedback built into the application beats manual clicking. If an app can expose screenshots, logs, fixtures, or state snapshots through commands, agents can verify visual and behavioral changes without waiting for the human [54:08–59:06](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=3248s).

* **Try frontier models on harder tasks**: The closing advice is to revisit assumptions about what agents can handle. Newer models such as Opus 4.5 may go longer and further than workflows built around older models expect [59:06–1:00:11](https://www.youtube.com/watch?v=rCLvd_Csp-8&t=3546s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=rCLvd_Csp-8)

Build Crew: <https://buildcrew.team>
