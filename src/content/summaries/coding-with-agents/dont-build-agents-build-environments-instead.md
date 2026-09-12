---
title: "Don't Build Agents, Build Environments Instead"
resourceId: 77
date: "2026-08-25"
---

Modal's Adam Azzam argues that background coding-agent systems are converging on similar harnesses and that the harder engineering work now sits in the environments where agents build and run software. His proposed architecture treats those environments as resumable, task-ready dev boxes and keeps the agent's durable state separate from risky execution.

### Key Points Covered

- **A dev box is more than a bare sandbox**: An agent working on a web application may need exposed ports, browser and screenshot tools, while data or machine-learning tasks may require specialized hardware. Giving it only an isolated Linux machine can prevent it from evaluating its own work ([05:58–08:02](https://www.youtube.com/watch?v=JolFqvXj3BE&t=358s)).
- **Agent work is a resumable session, not a disposable CI job**: A background agent may pause for human feedback after changing files or while a process is still running. Azzam argues that the platform therefore needs to preserve filesystem or process state and restore it without restarting the task from scratch ([08:02–10:55](https://www.youtube.com/watch?v=JolFqvXj3BE&t=482s)).
- **Living environments must stay synchronized**: Repository state and dependencies can change while an agent waits. The environment needs a way to update or restart from a prepared image without discarding useful progress ([10:55–11:59](https://www.youtube.com/watch?v=JolFqvXj3BE&t=655s)).
- **Agents create a different secret boundary**: Even without malicious intent, a model-driven process can read an environment variable and accidentally place a credential in a URL or log. Azzam recommends keeping secrets outside the agent environment and attaching them through deterministic proxies or sidecars ([11:59–13:01](https://www.youtube.com/watch?v=JolFqvXj3BE&t=719s), [16:03–17:05](https://www.youtube.com/watch?v=JolFqvXj3BE&t=963s)).
- **CI-style setup scripts impose cold starts and drift**: Reinstalling tools and dependencies for every hosted-agent task adds minutes before useful work begins, while remotely configured setup scripts can diverge from the repository they are meant to support ([13:01–15:05](https://www.youtube.com/watch?v=JolFqvXj3BE&t=781s)).
- **Version task-ready images with each repository**: Azzam describes teams maintaining per-repository images in code, rebuilding them asynchronously, and performing a small Git synchronization when a new dev box starts. He says this gives each repository its own dependencies, ports, and permissions without putting the rebuild delay in the interactive path ([15:05–18:10](https://www.youtube.com/watch?v=JolFqvXj3BE&t=905s)).
- **Separate durable planning from fallible execution**: If an agent and its tools share one process, an out-of-memory tool call can destroy the conversation state too. The proposed control plane retains the agent's plan while remote calls execute in disposable data-plane dev boxes ([19:06–22:17](https://www.youtube.com/watch?v=JolFqvXj3BE&t=1146s)).
- **Agent-friendly infrastructure looks like good developer infrastructure**: In the Modal demonstration, sandboxes expose remote execution and streaming output. Azzam and Husain argue that clear documentation, types, hints, and actionable errors help agents for the same reasons they help people ([23:20–25:28](https://www.youtube.com/watch?v=JolFqvXj3BE&t=1400s)).
- **Fleet-level observability remains underdeveloped**: Azzam distinguishes traces for one agent from understanding the aggregate effect of hundreds of agents producing changes, which he describes as an open problem still served mostly by limited repository statistics ([25:28–26:31](https://www.youtube.com/watch?v=JolFqvXj3BE&t=1528s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=JolFqvXj3BE).
