---
title: "Agentic Engineering, explained by a 10x developer"
resourceId: 25
date: "2026-07-27"
---

David Ondrej interviews Thorsten Ball, a founding engineer at Amp, about what changes when coding agents make implementation cheap: engineering shifts toward deciding what to build, supplying the right context, delegating asynchronously, and reviewing evidence instead of driving every edit.

### Key Points Covered

- **Staying at the frontier means shedding old workflows**: Ball says Amp optimizes its company, product, and codebase to move quickly as models improve, even when that means killing established features such as its VS Code extension. He argues that users should spend less time choosing models and more time making their codebases agent-friendly and completing useful work [00:00:49]-[00:03:43].
- **“The models are dead” is an argument about diminishing differences**: Ball does not mean models are irrelevant. He means sufficiently capable frontier models need less close supervision, so task information matters more than micromanaging edits, naming conventions, or model selection [00:05:38]-[00:07:21].
- **Cheap agents make optimistic delegation practical**: Instead of parking bugs in a backlog, teams can start agents immediately, let them implement and test fixes in isolated environments, then review the results later. Ball uses this to question inherited assumptions about estimation, synchronous work, and rerunning the same checks in CI [00:07:21]-[00:08:24].
- **AI accelerates taste but does not provide it**: Ball estimates that nearly all visible Amp code is AI-written, while people still choose the icons, interactions, animation, copy, and generated variations that make the product coherent. In his framing, “AI slop” comes from weak ideas and product judgment, not from generated code by itself [00:08:24]-[00:11:19].
- **Value moves from implementation toward product and business judgment**: For a new company, Ball recommends starting with the market, customer, value, and sales rather than treating software construction as the main problem. As models reproduce more hard-won implementation knowledge, the differentiating question becomes what should exist and why [00:11:19]-[00:13:26].
- **Agent-native products may replace forms and admin panels**: A festival-ordering app built from menu photos leads Ball to question interfaces designed to avoid code changes. If an agent can update prices from a new photo or publish a post from a draft, changing the code may be simpler than maintaining a general-purpose administration interface [00:13:26]-[00:17:37].
- **Generative software makes personal remixes and small internal tools economical**: Ball describes forking and customizing a diff viewer without generalizing the changes for upstream use, then extends the idea to software for workflows that previously lived in spreadsheets, wiki pages, or paper processes [00:17:37]-[00:20:47].
- **First-principles workflow design becomes a core engineering skill**: His kitchen example replaces a requested printer with a second tablet after examining the underlying process. The durable skill is not merely technical implementation, but understanding the actual problem and choosing a simpler system [00:20:47]-[00:23:43].
- **Remote agents make development asynchronous and shareable**: In the Amp demo, each Orb combines a sandbox, repository checkout, conversation, computation, and resulting change behind one URL. Ball argues that many old objections to cloud development matter less when engineers delegate work, switch tasks, and return later to tests, screenshots, and a reviewable diff [00:23:43]-[00:32:22].
- **Good prompting supplies discoverable context and asks for proof**: Ball treats the model like an experienced engineer dropped in front of an unfamiliar repository: it cannot recover information that exists only in the developer's head. He points agents to reference implementations, explains intended behavior, asks them to research and plan, then reviews architecture, end-to-end tests, screenshots, and spot checks rather than every line [00:32:22]-[00:41:06].

Full video: <https://www.youtube.com/watch?v=FU5_kpTAVDo>
