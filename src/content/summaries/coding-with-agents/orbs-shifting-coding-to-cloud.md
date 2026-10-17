---
title: 'Orbs: Shifting Coding to Cloud — Quinn Slack, Amp Code'
resourceId: 180
date: '2026-09-07'
---

Quinn Slack discusses how Amp's team uses cloud sandboxes, called orbs, to run agents independently of developers' laptops. The practical examples extend beyond writing code: agents monitor staged migrations, use limited production credentials, and modify internal apps. The conversation also debates mandatory code review, CI, and small-team organization. These are first-party experiences and opinions, not evidence that cloud execution or removing review makes every team safer or faster.

Based on English auto-generated captions. Product descriptions and forecasts reflect the September 2026 conversation; the transcript does not independently verify the demonstrations or company claims.

## Cloud execution changes the unit of work

- **A remote agent needs a usable development environment, not just a remote process.** Slack describes orbs combining agent execution with development-server previews, desktop access, and parallel environments. The aim is to let work continue with the laptop closed without giving up access to the running application. He acknowledges that teams still need to invest in cloud setup. [00:54–04:52](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=54s)
- **More parallel work helps only if the rest of the process can absorb it.** Slack connects cloud adoption to agents becoming more reliable on longer tasks. But a team that must review every change can simply accumulate twenty items waiting for review. He attributes Amp's ability to benefit from parallelism partly to its small, like-minded team and lack of mandatory pre-merge review, rather than cloud infrastructure alone. [04:52–07:01](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=292s)
- **Amp's review policy depends on trust and recovery speed.** Slack describes accountable engineers with end-to-end ownership and the ability to ship a fix quickly. He explicitly says this approach is not for all software and frames it around rapidly changing end-user products. The discussion supplies no comparative incident or defect data. [07:01–08:55](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=421s)

## Keep agents involved in production rollouts

- **A staged migration can include monitoring between phases.** Slack describes changing Amp's data model from one workspace per user to multiple workspaces. The agent worked through backward-compatible phases, checked logs and database invariants after deployment, and was instructed to proceed when checks passed or roll back otherwise. He says he delegated several relatively safe stages during a flight; the account does not establish that every stage succeeded or that rollback was exercised. [14:16–17:18](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=856s)
- **Compare explicit cloud permissions with the credentials a laptop already holds.** Slack gives an example of using OIDC, an identity protocol, to obtain a token granting thirty minutes of read-only access to production logs or a database. He contrasts this with local agents discovering other authenticated scripts or production access on a developer's machine. This is an argument for deliberately scoped access, not proof that cloud agents are inherently secure. The host raises the competing usability cost: restricted agents may lack access needed for unexpected tasks. [16:15–20:13](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=975s)

## Internal apps can be customized through the agent

- **An agent can modify an app instead of navigating a settings system.** Slack shows an internal dashboard running as an HTTP process in an orb, with an agent available to change it. He contrasts this with buying a dashboard product, adding queries, and maintaining integrations. The host describes a related pattern of forkable apps whose interfaces can change while backend contracts, security, and privacy remain stable. These are proposed software-distribution patterns, not a demonstration that all packaged software is replaceable. [08:55–13:12](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=535s)
- **Custom software for one organization has different requirements from a shared product.** The speakers distinguish solving one user's problem from supporting multiple customers, configuration, and service guarantees. Slack later proposes releasing reusable internal apps that other people could adapt with their agents, using the term "jellyware." He presents this as a plan; a marketing-automation app is still something the team wants to build. [22:16–23:20](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=1336s), [31:24–33:23](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=1884s)

## Agent-run verification and CI are not the same claim

Slack asks why a separate CI run is necessary if an agent has already run tests in a reproducible sandbox shared by the team. The host counters that CI provides a deterministic test stage: an agent may run only tests suggested by its current context and miss effects elsewhere in a large project. Slack replies that agents can be instructed to run everything, while selective CI also relies on heuristics. [23:20–26:23](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=1400s)

The exchange does not resolve whether agent-run checks provide equivalent coverage or enforcement. Slack distinguishes packaging and deployment from CI testing, and predicts that traditional CI will decline even as reproducible sandboxes become more common. Treat that as a forecast, not a validated recommendation to remove an independent test gate. [24:23–26:23](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=1463s)

## Small-team organization remains an experiment

Slack describes a twenty-person Amp team formed through a spin-off from Sourcegraph, with broad trust and responsibility across customer conversations, bug fixes, and product work. He says agents reduce the need for specialized hires and reports that Amp is profitable. Those circumstances matter when interpreting his organizational advice; they are not a controlled comparison with larger teams. The conversation ends with both speakers treating the future shape of companies as an open question. [28:13–32:27](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=1693s), [37:25–40:06](https://www.youtube.com/watch?v=hvwtHZ5E27c&t=2245s)
