---
title: 'Your Coding-Agent Evals Need Change Control'
description: 'A practical method for changing models, prompts, harnesses, tools, environments, verifiers, and judges without losing valid comparisons.'
pubDate: 2026-08-03
tags: ['AI Agents', 'Evaluation', 'Workflows', 'Engineering Leadership']
draft: false
unlisted: false
order: 10
---

## Your eval suite is a ruler that keeps changing

> A score means little when the team changes the ruler and the system at the same time.

A team's shared coding-agent stack includes the model, prompt, harness, tools,
skills, policies, and execution environment. This article is about governing how
that stack is compared as it changes.

The sources describe a model-building company at Cursor, benchmark vendors at
Snorkel AI and Datacurve, an agent-product team at incident.io, and an evaluation
researcher at Comet who contributes to OpenClaw. Applying their practices to a
development team's shared coding-agent stack is editorial transfer, not a direct
operating account from such a team.

The transfer is useful because the attribution problem is the same. Suppose a
team changes its model and prompt, adds two easier tasks, upgrades the judge, and
reports a higher pass rate. The score moved, but it cannot say whether the stack
improved, the tasks became easier, or the judge became more permissive.

Lee Robinson reports that Cursor evaluates behaviors such as interpreting intent
across many skill files, deciding when to clarify, and investigating work across
logs, Slack, Notion, and code
([00:05:57–00:06:52](https://www.youtube.com/watch?v=q4Tr-DknG2M&t=357s)).
James Shi reports the other side of the boundary: one instruction in a benchmark
prompt could suppress whether models tested their own work
([00:07:13–00:08:17](https://www.youtube.com/watch?v=Yk87oUPVaxU&t=433s)).
The evaluated object is therefore the whole configured stack, not just the model
name.

The claim here is narrow: **when the system and evaluator change together, a
score difference attributes to neither**. Separating those changes keeps the
comparison interpretable. It does not prove that evaluation governance improves
productivity, reliability, or return on investment.

## When a plain test suite is enough

> If a requirement is cheap and exact to assert, write a deterministic test and stop.

A command that must reject an unauthorized path does not need a model judge. A
tool response with a fixed schema does not need repeated scoring. Neither does a
policy that can be checked with a boolean assertion, a parser contract, or a
known exit code.

Rustem Feyzkhanov distinguishes deterministic checks for outputs and tool calls
from model-based judgments and selective expert review for less mechanical
behavior
([00:10:14–00:11:14](https://www.youtube.com/watch?v=Ib5t2RLtxvM&t=614s)).
Prefer the exact check whenever it captures the real requirement. A probabilistic
evaluator is not an upgrade from a stable assertion.

Reach for versioned evaluation change control only when at least one source of
ambiguity remains:

- the same stack can produce materially different outcomes across runs;
- success depends on a rubric or model judge rather than an exact assertion;
- tasks, repository snapshots, dependencies, or tool access must evolve;
- held-out results repeatedly shape model, prompt, or harness decisions; or
- a team needs to distinguish a system improvement from an evaluator change.

Keep the process as small as the suite. A Markdown table in the same pull request
may be enough. This source review found no documented account of evaluation
governance failing because it became ceremony; that absence is not evidence that
the process is free. If a normal test answers the question, extra versioning is
only paperwork.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the proof required
for one code change. [Agent-Ready Interfaces](/posts/agent-ready-interfaces) owns
the CLI and feedback surfaces agents can operate. [Measure Outcomes, Not Agent
Activity](/posts/measure-outcomes-not-agent-activity) owns adoption and delivery
measurement. The narrower job here is deciding when the suite behind repeated
comparisons still measures the same thing.

## Separate the system, the contract, and the evaluator

> A valid comparison needs one measured system, one stable contract, and one named evaluator.

Write down three identities before comparing a candidate:

| Identity | What it contains | Why it matters |
| --- | --- | --- |
| **System under evaluation** | Model, prompt, harness, tool implementation, skills, and policies. | Any change here is a candidate system change. |
| **Acceptance contract** | The observable behavior the team intends to preserve or improve. | If this changes, the old and new scores answer different questions. |
| **Evaluator** | Task suite, repository snapshot, fixtures, tool access, dependencies, verifiers, judge model and prompt, rubric, thresholds, and run policy. | Any change here can move the score without changing the system. |

The distinction between tool implementation and tool access is deliberate.
Changing how the shared tool works changes the system. Giving the evaluated
agent different credentials, network access, fixtures, or repository history
changes the evaluation environment.

Shi argues that coding verifiers should reward observable behavior rather than
private helper names or one accepted implementation. Datacurve's later benchmark
version also separated verifier execution from the agent runtime and removed
extra Git references
([00:11:28–00:15:37](https://www.youtube.com/watch?v=Yk87oUPVaxU&t=688s)).
That is a benchmark vendor's design, not independent proof that its suite is
correct, but it shows why verifier and environment identity matter.

Feyzkhanov describes a task as instructions plus an environment, a hidden oracle
solution that establishes solvability, and verifiers over the resulting state,
trace, and artifacts
([00:06:24–00:11:14](https://www.youtube.com/watch?v=Ib5t2RLtxvM&t=384s)).
He later calls the benchmark software: dependencies and fixtures need checks,
the oracle must pass, broken work should fail, and tasks need approval before
entering the suite
([00:12:05–00:13:57](https://www.youtube.com/watch?v=Ib5t2RLtxvM&t=725s)).

Treat a judge as evaluator code. Its model version, prompt, rubric, threshold,
and aggregation policy all belong to evaluator identity. Changing only the judge
still requires a new baseline.

## Change one axis at a time

> Freeze the evaluator for system changes; freeze the promoted system for evaluator changes.

Use this classification before running a comparison. The table is synthesis
across the sources, not a process any presenter named.

| Change | Freeze | Required comparison | Version effect |
| --- | --- | --- | --- |
| Model, prompt, harness, tool, skill, or policy | Named evaluator and acceptance contract | Promoted system versus candidate on the same suite | Promote or reject the system; no suite bump. |
| Case, fixture, verifier, judge, rubric, threshold, or run policy | Current promoted system | Promoted system on the old and proposed evaluators | Bump the suite and establish a new baseline. |
| Repository snapshot, dependency, credential, network, or tool access | Current promoted system and acceptance contract | Promoted system in the old and proposed environments | Bump the suite and establish a new baseline. |
| Deactivate a leaked, saturated, unstable, invalid, or obsolete case | Current promoted system | Show results with and without the case; name replacement coverage | Bump the suite; archive the historical version. |
| System and evaluator must change together | Nothing remains comparable | Split the changes, or report only a new baseline | New system and suite baseline; no improvement claim. |

An evaluator change creates a two-axis check:

| | Old evaluator | Proposed evaluator |
| --- | --- | --- |
| **Promoted system** | Existing baseline | Mandatory re-baseline |
| **Candidate system** | Separate later promotion | Not part of the evaluator-change approval |

The record does not need to become a registry. Put this compact checklist in the
change that owns the decision:

- **Classification:** system, evaluator, environment, deactivation, or mixed.
- **Contract:** the observable behavior that remains stable.
- **System identity:** model, prompt revision, harness, tools, skills, and policy.
- **Evaluator identity:** suite and environment version; verifier; judge model,
  prompt, and rubric; threshold; run and aggregation policy.
- **Axes:** what changed, what stayed frozen, and which baseline applies.
- **Case populations:** development, held-out, and production-derived provenance;
  exposure and data-review status.
- **Results:** outcomes by task class plus observed run-to-run variation.
- **Decision:** promote, reject, re-baseline, deactivate, or roll back; named
  owner and trigger.
- **Case state:** active gate, archived, saturated, leaked, unstable, invalid, or
  obsolete.

Do not fill the record with borrowed constants. The sources do not establish a
universal run count, confidence level, held-out percentage, judge threshold, or
saturation point. Choose a run policy for the observed variance and preserve it
as part of the evaluator until that policy itself is reviewed.

## Protect the held-out edge

> Hidden describes access; held-out describes a history of non-exposure.

Robinson reports that models exploited Git history and public artifacts, leading
Cursor to remove history and restrict network access for some public
measurements. He also describes a private benchmark based on real Cursor work
that is held out from training
([00:06:52–00:08:51](https://www.youtube.com/watch?v=q4Tr-DknG2M&t=412s)).
Those controls reduce obvious reward hacking, but private does not automatically
mean independent.

[Cynthia Dwork and coauthors](https://arxiv.org/abs/1506.02629) show formally
that repeatedly reusing a holdout for adaptive decisions can overfit the holdout
itself. The limited transfer here is simple: record exposure. The paper does not
provide this workflow with a consultation budget, a held-out percentage, or a
coding-agent-specific mechanism.

For each held-out population, record who or what could see the tasks, per-case
results, judge feedback, or aggregate results. Include exposure through repeated
team consultation, repository visibility, published benchmark discussion, and
vendor or model familiarity where it is known. Do not infer zero exposure merely
because the task file is private.

When repeated feedback has shaped the stack around a case, move that case into
the development population. Replace its coverage before treating a later release
as independently evaluated. Exposure is a history, not a permanent label.

## Admit and retire cases deliberately

> The active gate should change, but it should not rewrite its own history.

Production failures can improve coverage. Feyzkhanov describes a loop that turns
traces into repeatable simulations, evaluates a changed stack, uses the suite as
a release gate, and adds later failures
([00:13:57–00:15:48](https://www.youtube.com/watch?v=Ib5t2RLtxvM&t=837s)).
Lawrence Jones describes incident.io's adjacent practice: its coding agents can
add and edit production-derived cases for an AI SRE product through a narrow CLI
and red-green runbook
([00:04:02–00:08:39](https://www.youtube.com/watch?v=L2r6vLlLgs8&t=242s)).
That is an agent-product workflow, not evidence that the coding-agent stack was
itself governed this way.

A production trace is also biased and sensitive. It overrepresents failures that
users reported or telemetry exposed, can contain customer data and secrets, and
may carry adversarial instructions. Before promotion, establish authorized
provenance, remove or protect sensitive data, review untrusted content, state the
behavioral contract, reproduce the environment, and verify that the oracle passes
while the intended broken behavior fails. That bounded review is editorial
synthesis; neither talk supplies a complete data-governance procedure. Keep
deliberately designed normal and edge coverage beside trace-derived regressions.

Retirement also needs a controlled path. Robinson says an evaluation should give
way when models cluster near the top, but his example is not a reusable threshold
([00:07:47–00:08:51](https://www.youtube.com/watch?v=q4Tr-DknG2M&t=467s)). A
case may instead become leaked, unstable, invalid, or obsolete. Deactivate it from
the active release gate, bump the suite version, establish the new baseline, and
retain the archived suite for historical comparison. Retirement is not deletion.

Vincent Koc proposes a mostly stable core with a changing edge derived from
traces, but says his intended demonstration was unfinished
([00:10:11–00:14:04](https://www.youtube.com/watch?v=4VhbYlfC7Gs&t=611s)). The
safe synthesis is not to let an agent curate its own ruler. Let traces propose
cases; require a named owner to admit, re-baseline, deactivate, and archive them.

For the next stack change, ask five questions:

1. Is an ordinary deterministic test enough?
2. What is the stable acceptance contract?
3. Is this a system change or an evaluator change?
4. Which axis is frozen, and what baseline remains comparable?
5. What exposure, variance, and case-state information changes the decision?

If both axes moved, split the change. If they cannot be split, publish a new
baseline without calling it an improvement.

## Sources used

- [Lee Robinson, “Recursive Model Improvement”](https://www.youtube.com/watch?v=q4Tr-DknG2M), a Cursor model-building account; especially [00:05:57–00:08:51] on behavioral coding evaluations, anti-reward-hacking controls, private held-out work, and example retirement pressure.
- [James Shi, “DeepSWE: A Contamination-Resistant Coding Benchmark”](https://www.youtube.com/watch?v=Yk87oUPVaxU), a Datacurve benchmark-vendor account; especially [00:07:13–00:08:17] and [00:11:28–00:15:37] on prompt effects, behavior-oriented verifiers, runtime separation, and remaining task-mix limits.
- [Rustem Feyzkhanov, “From Agent Traces to Agent Simulations”](https://www.youtube.com/watch?v=Ib5t2RLtxvM), a Snorkel AI benchmark-vendor account; especially [00:04:34–00:15:48] on full-stack comparison, task anatomy, verifier types, benchmark CI, baselines, release gates, and trace-derived expansion.
- [Lawrence Jones, “Fighting AI with AI”](https://www.youtube.com/watch?v=L2r6vLlLgs8), an incident.io agent-product account; especially [00:04:02–00:08:39] on production-derived fixtures and a coding-agent-operated eval interface.
- [Vincent Koc, “Malleable Evals”](https://www.youtube.com/watch?v=4VhbYlfC7Gs), an evaluation-research proposal rather than a completed operating result; especially [00:10:11–00:14:04] on trace-curated cases and the stable-core/adaptive-edge tension.
- [Cynthia Dwork et al., “Generalization in Adaptive Data Analysis and Holdout Reuse”](https://arxiv.org/abs/1506.02629), a theoretical adaptive-data-analysis result used here only to support the risk of overfitting through repeated holdout reuse.
