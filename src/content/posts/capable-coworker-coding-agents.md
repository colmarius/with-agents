---
title: 'Brief the Agent Like a Capable Co-Worker'
description: 'A practical assignment model for giving coding agents purpose, context, acceptance criteria, authority boundaries, and human ownership.'
pubDate: 2026-08-14
updatedDate: 2026-08-23
tags: ['AI Agents', 'Workflows', 'Prompting', 'Review']
draft: false
unlisted: false
order: 11
---

## Start with the missing context

> Capability is not project context.

A coding agent can inspect a repository, edit files, run the software, observe
the result, and adjust. That makes it possible to assign an outcome instead of
prescribing every edit.

It still lacks what a colleague learns by working on the product: who needs the
change, why a constraint exists, which trade-off the team rejected, where the
best example lives, and what proof would make the result safe to accept.

Thorsten Ball asks us to imagine an expert engineer dropped into a room with a
repository, terminal, browser, and a note that says only “fix the bug with the
upload.” The engineer is capable; the missing information is local. A model may
also fill gaps confidently where a person might challenge the request
([00:05:02–00:08:50](https://www.youtube.com/watch?v=HegqGzD-kvc&t=302s)).

The useful question is therefore: **what does this agent need to know to carry
this assignment?** “Co-worker” is an assignment metaphor, not a transfer of
authority or responsibility.

## Use a five-part assignment

> State the purpose, context, acceptance criteria, authority boundary, and human owner.

Use these parts as a thinking checklist, not a form for every typo. A small,
reversible task in a clear repository may need one sentence. A cross-cutting or
consequential task needs more. Brief the job, then leave the agent room to
investigate how to do it.

```txt
Purpose, task, and outcome:
  Who needs this, and why now?
  What work is in scope, and what should change?

Context:
  Which constraints, non-goals, and decisions matter?
  Where should the investigation start, and why?
  Which hypotheses are worth testing?

Acceptance criteria:
  Which observable behavior must hold?
  Which checks or artifacts should prove it?

Authority boundary:
  What may the agent change or execute?
  Which actions need approval?
  When should it stop?

Human owner:
  Who makes product, design, risk, and acceptance decisions?

Return:
  What changed?
  What did the checks show?
  What differed from the brief?
  What remains uncertain?
```

Quinn Slack describes the bottleneck as getting what the human wants and knows
into the agent's context, then pairing it with ground truth
([00:34:55–00:38:47](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=2095s)).
General knowledge of a language or framework cannot supply an unstated product
decision.

When responsibility moves between threads or environments, [Right-Sized
Threads, Durable State](/posts/right-sized-threads-durable-state) extends this
model with a baseline, accepted decisions, and handoff state.

## Guide the investigation without scripting it

> Direction improves the investigation; premature certainty can trap it.

For each starting point, say what it should establish: navigation, expected
behavior, a constraint, or an implementation pattern. Existing code is not
automatically authoritative.

Ball's “one-two punch” first asks the agent to understand a mechanism, then asks
for the change. In one example, he identifies the CLI queue as the gold standard
and names the behaviors that matter before asking the agent to repair the web
version
([00:13:19–00:16:22](https://www.youtube.com/watch?v=HegqGzD-kvc&t=799s)).

Salvatore Sanfilippo reports giving previous implementations distinct roles as
references for interface, internal design, kernels, and data movement
([00:12:03–00:16:17](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=723s)).
That is a first-person project account, not an independent quality assessment.

Present likely failure modes and suspected causes as **hypotheses**, not
conclusions. Ask what evidence would disprove them.

Recurring context belongs in the repository, not in a longer prompt each time.
[Your Repo Is the Memory](/posts/durable-context-coding-agents) covers stable
commands, conventions, boundaries, and known-good examples. The brief should
point to that truth, not repeat the whole project.

## Put acceptance criteria in the brief

> Define both the behavior you want and the evidence that could prove the result wrong.

Acceptance criteria describe the required result. Verification produces evidence
about that result. “The upload completes and remains visible after refresh” is a
criterion; a focused test plus a browser run is evidence.

Give the agent the test command, reproducer, running application, logs,
screenshots, trace, reference output, or conformance suite that matches the
task. Ask it to return what it observed, not merely say that the work is done.
Slack describes using demo videos and test matrices across versions, clients,
platforms, and account states; a reviewer may spot a defect seconds into an
artifact that took the agent much longer to produce
([00:13:17–00:17:03](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=797s)).

Simon Willison makes the progression concrete: start with a failing test, make
it pass, then boot and exercise the real service because a green suite does not
prove that the application works
([00:04:41–00:07:33](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s)).

The agent's code, explanation, and generated test can share the same mistake.
Ask what result would count against its approach, and keep human judgment for
product need, architecture, maintainability, and acceptable risk. [Make the
Agent Prove It](/posts/make-the-agent-prove-it) contains the full evidence ladder.

## Bound authority and keep accountability human
<!-- slide:
class: compact
message: small
-->

> Let the agent choose steps inside the assignment; keep consequential decisions with a named human.

- **Capability:** the agent can choose steps, use tools, observe results, and adapt.
- **Authority:** it may act only within the limits people set.
- **Accountability:** a person decides whether to accept the work and answers for the outcome.
<!-- notes -->

Access is not permission. An available credential or tool does not authorize a
push, publication, release, production write, migration, purchase, or change to
the acceptance criteria. Name actions that need approval and conditions that
must stop the work.

Scale autonomy and review with consequence, reversibility, inspectability, and
expected lifetime. Mario Zechner describes keeping close oversight of
mission-critical, security-sensitive, and architectural work while allowing
more freedom for lower-consequence internal tools. He still treats the engineer
as accountable for system boundaries and output
([00:07:33–00:11:14](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=453s)).

A named human owner decides whether the work should exist, whether the evidence
is sufficient, and whether the maintenance cost is acceptable. The agent can
recommend; it cannot absorb the team's product, operational, or professional
accountability.

Before sending the assignment, check five lines:

1. **Purpose:** Why are we doing this, and what outcome matters?
2. **Context:** What can the agent not infer, and where is the relevant truth?
3. **Acceptance:** What behavior and evidence would make the result acceptable?
4. **Authority:** What may it do, what needs approval, and when must it stop?
5. **Owner:** Which person makes the final product, risk, and acceptance decisions?

Then let the agent work inside that contract and judge the returned evidence.

## Sources used

- [Thorsten Ball, “Think Harder: How I Prompt”](https://www.youtube.com/watch?v=HegqGzD-kvc&t=302s), especially [00:05:02–00:16:22] on missing context, information routing, investigation prompts, and reference implementations.
- [Quinn Slack and Thorsten Ball, “Raising an Agent, Season 2 Episode 2”](https://www.youtube.com/watch?v=FfCCEZ00RFw&t=797s), especially [00:13:17–00:17:03] and [00:34:55–00:38:47] on inspectable evidence and transferring human intent and knowledge.
- [Salvatore Sanfilippo, “AI FOMO, Part 1: What Actually Compounds”](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=723s), especially [00:12:03–00:16:17] on prior implementations as context. English descriptions here are editorial paraphrases of Italian captions.
- [Mario Zechner, “Pi Building Pi, OpenClaw's Minimalist Coding Agent”](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=453s), especially [00:07:33–00:11:14] on consequence-based delegation, module boundaries, and human accountability.
- [Simon Willison, “Engineering Practices That Make Coding Agents Work”](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s), especially [00:04:41–00:07:33] on tests and real-system execution.
- The five-part assignment model is author synthesis of the sources above, not a framework quoted from one source.
