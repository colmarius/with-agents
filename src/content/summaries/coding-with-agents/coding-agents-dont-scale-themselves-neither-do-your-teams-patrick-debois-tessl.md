---
title: "Coding Agents Don't Scale Themselves. Neither Do Your Teams."
resourceId: 54
date: "2026-08-22"
---

Patrick Debois of Tessl argues that coding-agent advantage will come less from a single developer’s prompting skill than from the shared systems an organization builds around agents. He moves from developer identity and team rituals through platform ownership, hiring, cost control, and risk-based autonomy.

This is a practitioner talk about an emerging operating model, not an organizational study. Debois does not provide comparative delivery data, quality measures, adoption samples, or evidence that his proposed “human touches” and reuse metrics predict business outcomes. His dark-factory direction is a forecast; even his closing version is a risk-dependent “dim factory,” not full autonomy for every change.

### Improve the System Around the Agent

- **Give skeptical engineers a technical path into adoption**: Debois says developers who resist a role centered on prompts and specifications can apply their criticism to reusable context, tools, harnesses, and loops. Rather than dismissing quality concerns, teams can turn them into improvements to the system that produces the code ([00:02:42–00:05:36](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=162s)).
- **Move attention from generated code to the generator**: His central shift is to stop repeatedly repairing an agent’s output and improve the context, harness, tests, documentation expectations, and engineering constraints that shape later runs. This does not remove engineering practice; it relocates it to a higher-leverage layer ([00:04:37–00:07:15](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=277s)).
- **Change planning and retrospectives with the workflow**: Debois describes advanced teams sending sufficiently scoped work directly to agents, keeping ambiguous decisions conversational, and using retrospectives to ask why the agent system repeatedly failed. Team leads should deliberately move the group from prompting to reusable context and harnesses rather than telling each developer to experiment alone ([00:07:15–00:09:09](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=435s)).

### Build Shared Agent Infrastructure

- **Measure intervention and reuse, not token volume alone**: Debois proposes tracking how many human touches an agent still needs and how widely one shared-system improvement benefits the team. Both are plausible operational signals, but the talk gives no definition, baseline, or validation method for either metric ([00:09:09–00:10:12](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=549s)).
- **Shared agent infrastructure needs an explicit owner**: Shared skill registries, context, evals, guardrails, identities, linters, and security tools cross repository and team boundaries. Debois argues for a named owner spanning platform and developer-experience concerns instead of leaving every team to build incompatible copies ([00:10:12–00:12:05](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=612s)).
- **A small catalog is more realistic than one universal harness**: Central artifacts need maintainers, modularity, testing, and security review, but forcing every team onto one workflow creates a difficult consensus problem. Debois expects a few supported paved roads, with custom alternatives charged to the teams that choose them ([00:12:05–00:13:43](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=725s)).
- **Make iteration cost visible so teams can optimize it**: Platform owners should expose the cost of agent runs and help teams reduce unnecessary turns through model choice, better context, and better harnesses. Debois opposes blanket spend limits, but does not address when expensive exploration is justified or how cost should be balanced against quality and review risk ([00:13:43–00:14:46](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=823s), [00:18:24–00:19:15](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=1104s)).

### Enable the Organization, Not Only Individuals

- **Generic transformation rituals are not ownership**: Hackathons, lunch-and-learns, Slack channels, and champion programs may spread awareness, but Debois argues that leaders must give team leads and platform groups an explicit mandate and resources to change how work is done ([00:13:43–00:15:40](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=823s)).
- **Hiring should test leverage, judgment, and collaboration separately**: His suggested sequence lets candidates use AI freely on an exercise, asks them to explain the result and tradeoffs, then evaluates whether they share and collaborate. He treats these as distinct capabilities rather than collapsing them into a generic AI job title or seniority label ([00:15:40–00:17:27](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=940s)).
- **Autonomy should vary with risk**: Debois expects a “dim factory” in which teams choose different approval levels by feature risk, add auditing and verification, and capture organizational knowledge in context, skills, and harnesses. His end state is continuous learning: changing more of the system without losing reliability ([00:19:15–00:21:16](https://www.youtube.com/watch?v=zCJtYuqwm7E&t=1155s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=zCJtYuqwm7E).
