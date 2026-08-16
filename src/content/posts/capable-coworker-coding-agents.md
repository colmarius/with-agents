---
title: 'Brief the Agent Like a Capable Co-Worker'
description: 'A coding agent is capable but lacks project context. Give it a clear brief, useful starting points, verification, and authority limits.'
pubDate: 2026-08-14
updatedDate: 2026-08-15
tags: ['AI Agents', 'Workflows', 'Prompting', 'Review']
draft: false
unlisted: false
order: 11
---

## A capable co-worker without your context

> Capability is not project context.

**Co-worker** here is an assignment metaphor, not a job description. A coding
agent pairs a model with tools that let it work in a repository: form a
hypothesis, edit files, run the software, observe the result, try again. That
means I can assign an outcome instead of prescribing every edit.

But a capable agent still lacks the local context a colleague gains by working
on the product: what the user needs, why a constraint exists, which trade-off
the team rejected, where the best example lives, and what proof would make the
change safe to accept.

Thorsten Ball, a co-creator of the Amp coding agent, asks us to imagine a
senior engineer dropped into an unfamiliar room with a repository, terminal,
browser, and note. The engineer is capable;
the missing information is local. A model may also fill in the gaps confidently
where a person might challenge the request
([04:24:22–04:28:17](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15862s)).

So the useful question is not “What magic prompt makes the model smarter?” It is
**“What would a capable co-worker need to know to carry this task?”**

I use **operational agency** for one narrow capability: the agent can choose
intermediate steps, observe feedback, and adjust. Given a bug, it can find the
code, reproduce the failure, try an edit, run a check, and revise. That is
capability within tools and boundaries people supply. It says nothing about
consciousness, employment, authority, or responsibility.

Salvatore Sanfilippo, the creator of Redis, similarly treats colleague,
employee, collaborator, or mentor as whichever interaction frame helps,
grounded in domain expertise and clear direction
([00:02:08–00:06:24](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=128s)).
The metaphor is useful when it improves the assignment, not when it substitutes
for evidence.

One caveat on scope: the evidence in this post comes from experienced
developers using current coding agents. It does not show that every task, team,
or novice can use the same delegation boundary.

## Brief the job, not every edit

> Give the co-worker the missing assignment context, then leave room to work.

```text
Outcome:
  What should be observably different?

Task and scope:
  What work is assigned?
  Which surfaces are in scope?

Relevant context:
  Which user need, product rule,
  or recent decision matters?

Constraints and non-goals:
  What must stay true?
  What should not be built?

Starting points:
  Which code, docs, or examples help?
  What should each establish?

Hypotheses to investigate:
  Which suspected causes or
  alternatives are worth testing?

Verification:
  What evidence shows the result
  or exposes a wrong approach?

Authority and stop conditions:
  Which actions need approval?
  When should the agent ask?

Return evidence:
  What changed? What did checks show?
  What differed from the brief?
  What is uncertain?
```

This is a thinking checklist, not a form for every typo. Match the brief to the
missing information. A small, reversible task in a clear repository may need one
sentence. A cross-cutting or consequential task needs more.

Two parts deserve extra care. For each starting point, say what it should
establish—navigation, expected behavior, or an implementation pattern—because
existing code is not automatically authoritative. And hypotheses should give
the investigation direction without dictating its answer.

Quinn Slack, an Amp co-founder, describes the same bottleneck as getting what
the human wants and knows into the agent's context, then pairing that
information with ground truth
([00:34:55–00:38:47](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=2095s)).
An agent may know the language, framework, and common architecture. It cannot
infer an unstated product decision.

This template assigns new work. When responsibility moves between threads or
environments, [Right-Sized Threads, Durable
State](/posts/right-sized-threads-durable-state) covers the accepted baseline,
prior decisions, and handoff state.

Recurring context belongs in the repository, not in a longer prompt each time.
Put stable commands, conventions, boundaries, and known-good examples where the
next person or agent can find them. [Your Repo Is the
Memory](/posts/durable-context-coding-agents) covers that practice. The brief should
point to the truth, not repeat the whole project.

## Offer starting points and hypotheses, not a script

> Direction improves the investigation; premature certainty can trap it.

Ball's “one-two punch” first asks the agent to find an asset or understand a
mechanism. After that evidence enters the context, he asks for the change. In one
example, he tells the agent the CLI queuing implementation is “the gold
standard for how it should work”—a clearer target than only saying the web
version is broken
([04:32:16–04:35:04](https://www.youtube.com/watch?v=vii6P0vJhTw&t=16336s)).

Sanfilippo also uses existing implementations to carry design choices that a
new specification may omit. In one project, he gave previous implementations
distinct reference roles—interface, internals, kernels, data movement—and added
his own architectural ideas as the work developed
([00:12:03–00:16:17](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=723s)).
That is his own report of the project, not an independent quality assessment.

I also share likely failure modes, suspicious sequences, alternative designs, or
questions worth answering. I label them as hypotheses. A co-worker should be
able to disprove the starting idea rather than optimize for agreement.

In one of my browser investigations, the initial framing treated the bug as a
failed delete action. Reproduction showed the delete worked; the visible problem
appeared afterward, when listeners observed a transitional state. The agent's
useful contribution was replacing that diagnosis with a better one. That is one
sanitized example, not a measured reliability claim.

## Make verification part of the assignment

> The co-worker needs access to evidence that can prove its approach wrong.

A capable agent becomes more useful when it can observe the consequences of its
work. Give it the test command, reproducer, running application, logs,
screenshots, trace, reference output, or conformance suite that matches the
task. Ask it to return what it observed, not merely say that the work is done.

Slack describes asking agents for demo videos and full test matrices across
versions, clients, platforms, and account states. The agent can spend hours on
the checks; a human may spot the important defect seconds into the video
([00:13:17–00:17:03](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=797s)).
This moves some review from supervising edits to inspecting outcomes.

Evidence must distinguish working behavior from plausible but wrong behavior.
In one of my threads, a large mock-heavy test passed while modelling the
external system poorly. Removing it was better than keeping a green check that
could not settle the disputed behavior.

The agent's explanation, implementation, and generated test can all share the
same mistake. Ask what result would prove the approach wrong. Run the real system
when the route, API, UI, or integration must work. Keep human judgment for what a
focused check cannot settle: product need, architecture, maintainability, and
acceptable risk.

Simon Willison, a co-creator of Django, makes this progression concrete: start
with a failing test, make it pass, then boot and exercise the real service
because a green suite does not
prove that the application actually works
([00:04:41–00:07:33](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s)).

[Make the Agent Prove It](/posts/make-the-agent-prove-it) contains the full
risk-scaled evidence ladder. The rule here is shorter: **put proof in the
assignment, not in cleanup after the agent says it is done.**

## Three boundaries for delegation
<!-- slide:
class: compact
message: small
-->

> Capability, authority, and accountability are different.

- **Operational agency — can it choose and act?** Within the assignment, it
  can choose steps, use tools, observe results, and adapt. This is freedom over
  how to do the work, not permission to decide whether the work should happen.
- **Authority — may it act?** Only within limits people set.
- **Accountability — who answers for the outcome?** People decide whether to
  accept the work and remain answerable for it.
<!-- notes -->

Calling an agent a co-worker must not hide those differences. The agent does
not share the team's history, reputational stake, or maintenance pain. It has
no default authority to push, publish, release, migrate data, or redefine
success. Access is not permission: available tools or credentials do not
authorize their use.

Scale delegation and review with consequence, reversibility, inspectability, and
expected lifetime. Slack reports scrutinizing core APIs and storage while giving
low-risk internal tools a longer leash
([00:25:47–00:30:37](https://www.youtube.com/watch?v=_L8xxUXOTk0&t=1547s)).

Gergely Orosz, who writes The Pragmatic Engineer newsletter, reports a
conservative approach in his own experiments: small, described tasks; tests;
periodic refactoring; active tracking; and manual edits
that preserve his codebase awareness ([first-party
account](https://blog.pragmaticengineer.com/new-trend-programming-by-kicking-off-parallel-ai-agents/)).
Mario Zechner, the creator of the Pi coding agent, draws a similar risk
boundary: low-consequence work can get a
longer leash, while he closely shapes APIs and foundations, with deterministic
checks enforcing invariants that prose cannot guarantee
([00:07:33–00:12:00](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=453s),
[00:37:11–00:42:44](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2231s)).

One result from my thread review keeps this boundary concrete. An agent
implemented a feature and the tests passed. A separate agent reviewer found the
implementation technically sound, but I chose not to merge it: the feature had
not earned its permanent complexity. Correct implementation did not answer
whether the product needed it.

Treating the agent as a capable co-worker does not mean hovering over every
tool call. It means assigning coherent work, supplying context the agent cannot
infer, letting it investigate, and judging its evidence against the
consequences. As the repository carries more recurring context, each brief can
carry less. And trust stays specific: it attaches to a bounded class of tasks
under a particular model, harness, repository, and check setup—not to “the
agent” in general.

This model assumes someone can supply sound domain context and judge the
result. The sources do not say how developers will build that judgment if they
delegate the very work through which earlier practitioners learned it. That
remains a real boundary.

Before starting the next task, ask:

1. What outcome and bounded task am I assigning?
2. What relevant context, constraints, and non-goals are missing?
3. Which code, references, and hypotheses should guide the investigation?
4. What evidence could establish the outcome or prove the approach wrong?
5. What may the agent do without approval, and when must it stop?
6. Which results, deviations, and uncertainties must it return?

That is how a capable agent becomes a useful co-worker while people retain
authority and accountability.

## Sources used

- [Thorsten Ball, “Think Harder: How I Prompt”](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15862s), especially [04:24:22–04:42:11] on the context-starved senior-engineer model, information routing, reference implementations, and discoverable repository instructions.
- [Quinn Slack and Thorsten Ball, “Raising an Agent, Season 2 Episode 2”](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=797s), especially [00:13:17–00:17:03] and [00:34:55–00:38:47] on inspectable evidence and transferring human intent and knowledge.
- [Quinn Slack, “Amp Code Founder on the Future of Coding Agents”](https://www.youtube.com/watch?v=_L8xxUXOTk0&t=1547s), especially [00:25:47–00:30:37] on engineering expertise and risk-scaled review.
- [Salvatore Sanfilippo, “AI FOMO, Part 1: What Actually Compounds”](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=723s), especially [00:02:08–00:06:24] and [00:12:03–00:16:17] on colleague-like interaction, domain expertise, simple orchestration, and prior implementations as context. English descriptions here are editorial paraphrases of Italian captions.
- [Gergely Orosz, “New trend: programming by kicking off parallel AI agents”](https://blog.pragmaticengineer.com/new-trend-programming-by-kicking-off-parallel-ai-agents/) on small tasks, tests, refactoring, tracking, retained code awareness, and uncertainty about parallel-agent productivity.
- [Mario Zechner, “Pi Building Pi, OpenClaw's Minimalist Coding Agent”](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=453s), especially [00:07:33–00:12:00] and [00:37:11–00:42:44] on consequence-based delegation, module boundaries, and deterministic enforcement.
- [Simon Willison, “Engineering Practices That Make Coding Agents Work”](https://www.youtube.com/watch?v=owmJyKVu5f8&t=155s), especially [00:02:35–00:12:35] on locally earned trust, tests, real-system execution, and maintained-code quality.
- Author synthesis from a private, purposive review of the author's Amp threads across several projects. The sample supplies sanitized examples and failure modes, not productivity estimates or population evidence; no private prompts, project details, or thread identifiers are reproduced.
