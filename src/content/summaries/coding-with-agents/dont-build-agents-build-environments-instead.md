---
title: "Don't Build Agents, Build Environments Instead"
resourceId: 77
date: "2026-08-25"
---

Modal's Adam Azzam argues that background coding-agent systems are converging on similar harnesses and that the harder engineering work now sits in the environments where agents build and run software. His proposed architecture treats those environments as resumable, task-ready dev boxes and keeps the agent's durable state separate from risky execution.

This is a practitioner and product talk. Its claims about Modal, Ramp, scale, startup time, and pull-request share are first-party reports without comparative measurements in the presentation.

### Key Points Covered

- **A dev box is more than a bare sandbox**: An agent working on a web application may need exposed ports, browser and screenshot tools, while data or machine-learning tasks may require specialized hardware. Giving it only an isolated Linux machine can prevent it from evaluating its own work ([00:05:58]-[00:08:02]).
- **Agent work is a resumable session, not a disposable CI job**: A background agent may pause for human feedback after changing files or while a process is still running. Azzam argues that the platform therefore needs to preserve filesystem or process state and restore it without restarting the task from scratch ([00:08:02]-[00:10:55]).
- **Living environments must stay synchronized**: Repository state and dependencies can change while an agent waits. The environment needs a way to update or restart from a prepared image without discarding useful progress ([00:10:55]-[00:11:59]).
- **Agents create a different secret boundary**: Even without malicious intent, a model-driven process can read an environment variable and accidentally place a credential in a URL or log. Azzam recommends keeping secrets outside the agent environment and attaching them through deterministic proxies or sidecars ([00:11:59]-[00:13:01], [00:16:03]-[00:17:05]).
- **CI-style setup scripts impose cold starts and drift**: Reinstalling tools and dependencies for every hosted-agent task adds minutes before useful work begins, while remotely configured setup scripts can diverge from the repository they are meant to support ([00:13:01]-[00:15:05]).
- **Version task-ready images with each repository**: Azzam describes teams maintaining per-repository images in code, rebuilding them asynchronously, and performing a small Git synchronization when a new dev box starts. He says this gives each repository its own dependencies, ports, and permissions without putting the rebuild delay in the interactive path ([00:15:05]-[00:18:10]).
- **Separate durable planning from fallible execution**: If an agent and its tools share one process, an out-of-memory tool call can destroy the conversation state too. The proposed control plane retains the agent's plan while remote calls execute in disposable data-plane dev boxes ([00:19:06]-[00:22:17]).
- **Agent-friendly infrastructure looks like good developer infrastructure**: In the Modal demonstration, sandboxes expose remote execution and streaming output. Azzam and Husain argue that clear documentation, types, hints, and actionable errors help agents for the same reasons they help people ([00:23:20]-[00:25:28]).
- **Fleet-level observability remains underdeveloped**: Azzam distinguishes traces for one agent from understanding the aggregate effect of hundreds of agents producing changes, which he describes as an open problem still served mostly by limited repository statistics ([00:25:28]-[00:26:31]).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=JolFqvXj3BE).
