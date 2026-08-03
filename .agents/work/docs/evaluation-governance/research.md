# Evaluation Governance Article Research

## Recommendation

Proceed to planning. The source-verification pass clears the kill criteria for a
distinct coding-agent article about the evaluation system itself.

The proposed reader job is:

> Models, prompts, harnesses, tools, tasks, environments, and evaluators all
> change. How does a team decide what still counts as valid evidence, and how do
> evaluation cases enter, get validated, drift, and retire?

Working thesis:

> Keep a stable acceptance contract while changing the system and the adaptive
> edge of its evaluation suite deliberately. Version evaluator changes
> separately, protect held-out work, promote production failures through a
> reviewable path, and retire checks that are leaked, unstable, or no longer
> discriminating.

The evaluation-promotion record is cross-source editorial synthesis. Rustem
Feyzkhanov's benchmark CI and release-gate workflow provides a close operational
precedent, but no speaker presents the complete artifact below.

## Corpus and freshness boundary

This pass rechecked the reviewed summaries and full adjacent transcript context
for five load-bearing sources from the committed AI Engineer library:

- `Ib5t2RLtxvM` — Rustem Feyzkhanov, Snorkel AI
- `q4Tr-DknG2M` — Lee Robinson, Cursor
- `Yk87oUPVaxU` — James Shi, Datacurve
- `L2r6vLlLgs8` — Lawrence Jones, incident.io
- `4VhbYlfC7Gs` — Vincent Koc, Comet evaluation research and OpenClaw

All five summaries remain `status: reviewed`. No playlist sync, transcript
capture, or source-library mutation belongs in this work item. The article may
use the committed reviewed sources without claiming current playlist
completeness.

## Verified source anchors

| Source | Usable transcript span | Verified contribution | Attribution and limitation |
| --- | --- | --- | --- |
| Rustem Feyzkhanov, Snorkel AI | [00:00:01–00:05:24] | A company-specific benchmark should compare the complete agent system against the same environment and evaluators, measure operational properties as well as success, and act as an integration and release gate. | Feyzkhanov says Snorkel sells benchmarks and runs simulations at scale. Treat the workflow as vendor-reported practice, not independent outcome evidence. |
| Rustem Feyzkhanov, Snorkel AI | [00:06:24–00:07:26], [00:10:14–00:11:14] | A task includes an environment, hidden oracle solution, and verifiers over final state, traces, and artifacts; deterministic, model-based, and selective expert review can play different roles. | Hidden verifiers and oracle runs establish task mechanics, not that the intended requirement or judge is correct. |
| Rustem Feyzkhanov, Snorkel AI | [00:12:05–00:15:48] | "Benchmark is software": pin dependencies and fixtures, run the oracle, confirm verifiers fail without it, run agents repeatedly, tag difficulty, approve tasks into the suite, establish a baseline, change one thing, rerun the suite, then release through a gate. Production traces supply later failure cases. | This is the strongest lifecycle anchor. The talk does not define benchmark ownership, semantic versioning, approval roles, rollback, or evaluator-change review. Arize is mentioned only as an example experiment or observability tool. |
| Rustem Feyzkhanov, Snorkel AI | [00:16:40–00:19:15] | Keep a standalone set unseen during experimentation, cover normal and edge cases, and escalate disagreement among the agent and verifiers to subject-matter experts. | The suggested 80/20 split is a Q&A convention and explicitly use-case dependent, not a universal rule. |
| Lee Robinson, Cursor | [00:04:55–00:06:52] | Cursor uses product feedback, internal dogfooding, and difficult evaluations to shape model behavior, including ambiguous software-engineering tasks spanning logs, Slack, Notion, and code. | Cursor's data and evaluation process is presenter-reported; representativeness, privacy, preference conflicts, and methodology are not disclosed. |
| Lee Robinson, Cursor | [00:06:52–00:08:51] | Models can exploit Git history and public artifacts. Robinson describes deleting history and restricting network access for public measurements, keeping a private held-out benchmark of real Cursor work, and retiring evaluations once models cluster near the top. | Anti-cheating restrictions differ from real tool-enabled engineering. The roughly 90% saturation point is an example, not a reusable retirement threshold. Attribute Robinson to Cursor; SpaceX is described as a compute partner elsewhere in the talk. |
| James Shi, Datacurve | [00:02:05–00:03:08] | Public pull-request tasks can leak solutions and encourage brittle, implementation-specific verifiers tied to private helpers or one accepted patch. | Datacurve sells training data and benchmarks. DeepSWE's reported comparisons are not independently reproduced here. |
| James Shi, Datacurve | [00:07:13–00:08:17] | Prompt instructions can suppress an otherwise stronger model's tendency to test its own work, so prompt and harness behavior belong inside the evaluation boundary. | The observation comes from Datacurve's rollout analysis and does not establish a general causal effect beyond the shown template. |
| James Shi, Datacurve | [00:11:28–00:15:37] | Verifiers should emphasize observable behavior rather than one implementation; DeepSWE 1.1 separates verifier and agent runtimes and removes extra Git references to reduce reward hacking. | The current suite underrepresents bug localization and refactoring, and hybrid or model-based verification remains future work. |
| Lawrence Jones, incident.io | [00:04:02–00:08:39] | incident.io stores evaluation cases beside prompts, gives agents a narrow CLI to add and edit cases, and uses a red-green workflow that reproduces a failure, changes the prompt, reruns the wider suite, and consolidates accumulated prompt instructions before merge. | This is a production operating account, but grader validity, repeated-run thresholds, and the suite's missed failure classes are not specified. |
| Lawrence Jones, incident.io | [00:12:28–00:16:09] | An aggregate backtest score does not explain cohort regressions. Jones describes repeated per-case analysis, clustering failure modes, connecting findings to code, proving changes through the eval loop, and observing the result after deployment. | The multi-agent analysis has no comparative cost or quality evidence; human review and rollback requirements remain unspecified. |
| Vincent Koc, Comet / OpenClaw | [00:08:27–00:14:04] | Adaptive harnesses and changing users make fixed suites less representative. Koc proposes trace-curated rubrics, always-on evaluation, telemetry feedback, a mostly stable core, and an adaptive edge. | Directional evidence only. Koc says the intended Comet demonstration was unfinished, and the 80/20 stable/adaptive split was an idea he was still considering. Do not present self-curating evals as validated. |

## Source-fidelity corrections

- Attribute `Ib5t2RLtxvM` to Rustem Feyzkhanov of Snorkel AI. Arize appears only
  as an example experiment-recording or observability tool.
- Attribute `q4Tr-DknG2M` to Lee Robinson of Cursor. The source title's
  `SpaceXAI` wording is not his affiliation; the transcript describes SpaceX as
  a compute partner.
- Attribute `4VhbYlfC7Gs` carefully: the source title identifies OpenClaw, while
  Koc says he works on evaluation research at Comet and contributes to OpenClaw.
- Label Shi and Feyzkhanov as benchmark vendors and Robinson as reporting
  Cursor's internal practice.
- Treat Feyzkhanov's and Koc's 80/20 splits as illustrative, not measured or
  universal.

## Proposed evaluation-promotion record

The article's standalone artifact should stay small enough to use during one
evaluation change:

```yaml
candidate:
  system: model | prompt | harness | tool | skill | policy
  version: <immutable reference>
acceptance_contract:
  stable_outcomes: <observable behavior that must not move in this comparison>
evaluation_population:
  development: <cases visible during iteration>
  held_out: <cases protected from routine tuning>
  regressions: <reviewed production-derived failures>
environment:
  version: <repository, dependencies, fixtures, tools, and access>
verifier_boundary:
  worker_visible: <what the candidate may inspect>
  independent_checks: <what runs outside the candidate runtime>
baseline: <currently promoted system and segmented results>
evaluator_change:
  cases_or_rubrics_changed: <what changed and why>
  provenance: <incident, trace, decision, or coverage gap>
promotion:
  required_results: <segmented pass and operational criteria>
  approver: <accountable person or team>
  rollback_trigger: <regression or production signal>
retirement:
  trigger: leaked | saturated | unstable | obsolete | invalid
  replacement_or_archive: <new case, preserved record, or removal>
```

The artifact must separate three things:

1. **System under evaluation:** model, prompt, harness, tools, skills, or policy.
2. **Acceptance contract:** observable behavior the comparison is meant to
   preserve or improve.
3. **Evaluator implementation:** tasks, environments, fixtures, simulators,
   verifiers, judges, and thresholds used to measure that contract.

## Distinct scope and overlap boundaries

### `make-the-agent-prove-it.md`

Owns the proof stack for one agent-produced code change. This article must not
restate red-green TDD, real-system checks, conformance, screenshots, sandboxing,
or the human-comprehension ladder. It owns how the suite behind repeated proof
is admitted, changed, protected, and retired.

### `measure-outcomes-not-agent-activity.md`

Owns organization-level delivery and adoption measurement, including rework and
review cost. This article must not claim productivity or rollout value from pass
rates. It owns behavioral acceptance and regression governance for the agent
system itself.

### `durable-context-coding-agents.md`

Owns what project knowledge survives and how task learning is promoted into
maps, skills, work items, or checks. This article may store evaluation records in
the repository but must focus on evaluation authority, comparability, held-out
protection, and retirement rather than repeating the repo-memory stack.

### `behavior-over-explanation.md`

Owns the methodological principle that observed behavior outranks a plausible
story. This article operationalizes that principle for changing evaluation
systems without repeating the conceptual argument.

### Coding-agent boundary

Lead with Jones's coding-agent-managed eval workflow, Robinson's internal coding
benchmark, and Shi's coding verifier design. Use Feyzkhanov to generalize the
lifecycle and Koc to expose the adaptive-eval tension. Do not turn the post into
a generic agent-product MLOps or benchmark-construction guide.

## Claims the sources do not support

- No universal held-out percentage, saturation threshold, run count, confidence
  level, or release threshold.
- No claim that a private or hidden evaluator is automatically independent or
  correct.
- No claim that trace-derived cases represent the full task distribution.
- No claim that model-based judges are stable, unbiased, or interchangeable.
- No claim that automatically generated tasks or rubrics may approve themselves.
- No claim that the proposed governance process improves production outcomes.
- No claim that static evaluations should disappear; the stronger synthesis is
  a stable comparison core plus a deliberately changed edge.

## Oracle review

Oracle ranked this as the strongest remaining AI Engineer article candidate with
high confidence. It found the reader job unowned and noted that Feyzkhanov's
benchmark CI, task approval, release gate, and continuing expansion supply a
closer precedent for the proposed record than the initial synthesis assumed.

Oracle also reinforced two safeguards:

- The work must stay anchored to coding-agent teams rather than generic MLOps.
- The article should not be drafted if its boundaries against per-change proof
  and outcome measurement cannot each be stated in one sentence.

## Stop conditions

Do not draft the article if any of these becomes true during planning or source
verification:

1. Evaluation CI, promotion, held-out protection, and retirement can be
   supported only by benchmark vendors plus Koc's unfinished proposal.
2. Jones's production red-green loop and Robinson's held-out and retirement
   practice prove peripheral rather than load-bearing in full context.
3. The article cannot state its boundary against `make-the-agent-prove-it.md` and
   `measure-outcomes-not-agent-activity.md` in one sentence each.
4. The practical artifact grows into a general MLOps registry rather than a
   compact evaluation-change record for coding-agent teams.
5. The draft would need to claim numeric thresholds or validated production
   improvement unsupported by the sources.

The first three source conditions passed this research round. The scope and
artifact-size conditions must remain explicit during planning and drafting.

## Next planning action

Use the `feature-planning` skill to create an implementation-ready article plan
and paste-ready handoff. The plan should begin with another targeted check that
Jones, Robinson, Feyzkhanov, and Shi can each support a distinct section of the
article without Koc carrying any operational claim.
