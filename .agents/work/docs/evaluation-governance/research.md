# Evaluation Governance Article Research

## Recommendation

Reframe before planning. The reader job is distinct, but an adversarial review
found an unresolved actor mismatch and an attribution flaw in the proposed
artifact. Do not create `plan.md` until the intended reader is chosen and the
additional research requirements below are satisfied.

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

The change-control framework is cross-source editorial synthesis. Rustem
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

## Actor and audience stress test

The original research described a coding-agent reader more directly than the
sources permit. The actual actors are:

| Source | Actor actually described |
| --- | --- |
| Feyzkhanov | A benchmark vendor proposing private production-like agent simulations. |
| Robinson | A model-building company evaluating and training its own coding models. |
| Shi | A benchmark and training-data company designing a coding benchmark. |
| Jones | An AI-product team using coding agents to maintain evals for its AI SRE product; the coding agent is the maintenance tool, not the evaluated system. |
| Koc | An evaluation researcher proposing adaptive evals; the intended demonstration was unfinished. |

The article therefore needs one explicit governed object:

1. **Shared coding-agent stack:** the models, prompts, harness, tools, skills,
   policies, environments, and verifiers a team maintains for its development
   workflow. This best matches the site's audience, but several sources become
   adjacent-practice transfers rather than direct operating accounts.
2. **Agent-backed product:** an agent system a team ships to users. This is
   better supported by Jones, Feyzkhanov, and Koc, but it is more MLOps-adjacent
   and less directly about coding-agent practice.

Recommended default: choose the shared coding-agent stack and state the transfer
honestly. Do not silently use Jones as evidence that a team governed its own
coding-agent harness. If the narrower evidence proves insufficient, hold the
article rather than switching audiences implicitly.

The article may make a **validity claim**: changing the ruler and the measured
system at the same time destroys attribution. It may not make a value claim that
the proposed governance improves productivity, reliability, or return on
investment. For a small suite, a versioned decision table may be enough; the
article must acknowledge that a registry or per-change record can become
unnecessary bureaucracy.

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

## Reframed artifact: evaluation change-control table

The original YAML record allowed the agent system and evaluator to change in one
record, making any score difference uninterpretable. The primary artifact should
instead classify the change and force only one axis to move:

| Change type | Freeze | Required comparison | Version effect |
| --- | --- | --- | --- |
| Model, prompt, harness, tool, skill, or policy | Named evaluation suite, environment, judge, thresholds, and run policy | Current promoted system versus candidate on the same `suite_version` | No suite bump. Promote or reject only the system candidate. |
| Case, fixture, rubric, judge, threshold, or verifier | Current promoted system | Run the promoted system on both old and proposed evaluators; explain changed results before admission | Bump `suite_version` and establish a new baseline. |
| Environment, repository snapshot, tool access, or dependency | Current promoted system and acceptance contract | Re-baseline the promoted system in old and new environments | Bump `suite_version`; environment is part of the evaluator. |
| Deactivate a leaked, saturated, unstable, invalid, or obsolete case | Current promoted system | Show the result with and without the case and name any replacement coverage | Bump `suite_version`; deactivate from the gate but retain an archival version for historical reruns. |
| System and evaluator must change together | Nothing is comparable | Split the changes. If that is impossible, report a new baseline without claiming improvement over the old result. | New suite and system baseline; no causal comparison. |

The evaluator-change path is a two-axis comparison:

```text
                      old evaluator    proposed evaluator
promoted system       old baseline     mandatory re-baseline
candidate system      separate later system-promotion change
```

Do not place a candidate-system change in the same approval record as an
evaluator change. A judge-model upgrade, threshold adjustment, case retirement,
fixture update, or environment change is an evaluator change.

Every row needs a compact record of:

- immutable system, `suite_version`, environment, judge, and run-policy versions
- stable acceptance contract
- case provenance mix: designed coverage versus trace-derived regression
- held-out exposure: who saw results and how many consultations occurred
- repeated-run policy and disclosed variance, without a universal run count
- data review for secrets, customer information, retention, and untrusted trace
  content before a production failure enters an agent-maintained suite
- accountable approval and rollback or deactivation trigger

The artifact must continue to separate three things:

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

### `agent-ready-interfaces.md`

Owns Jones's narrow eval CLI, case editing, and red-green coding-agent runbook.
This article may cite that workflow as adjacent context but must not claim those
mechanics as a new contribution. Its distinct concern is whether a case is valid
evidence, which suite version it enters, and what remains comparable after an
evaluator change. Jones does not supply approval roles, grader validation,
threshold policy, or evaluation retirement.

### Coding-agent boundary

If the shared coding-agent stack is selected, lead with Robinson's internal
coding benchmark and Shi's verifier design. Use Feyzkhanov to generalize the
lifecycle, Jones as an adjacent example of coding-agent-maintained evals, and Koc
only to expose the adaptive-eval tension. Do not turn the post into a generic
agent-product MLOps or benchmark-construction guide.

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
- No claim that a held-out set remains independent after repeated consultation;
  private does not mean unexposed or contamination-free.
- No claim that production traces represent missing or unobservable failures;
  trace-derived regressions need deliberately designed coverage beside them.
- No claim that a model judge or one stochastic run is a stable measurement;
  judge versions, run policy, and variance belong to the evaluator definition.
- No claim that retirement means deletion. A case can leave the active gate while
  its historical suite version remains available for audit and comparison.
- No claim that a production trace is safe to commit or give to an eval-editing
  agent without data and instruction review.

## Oracle reviews

Oracle ranked this as the strongest remaining AI Engineer article candidate with
high confidence. It found the reader job unowned and noted that Feyzkhanov's
benchmark CI, task approval, release gate, and continuing expansion supply a
closer precedent for the proposed record than the initial synthesis assumed.

Oracle also reinforced two safeguards:

- The work must stay anchored to coding-agent teams rather than generic MLOps.
- The article should not be drafted if its boundaries against per-change proof
  and outcome measurement cannot each be stated in one sentence.

An adversarial Oracle pass changed the recommendation from Go to Reframe. It
identified the actor mismatch, the mixed-change attribution flaw, the missed
overlap with `agent-ready-interfaces.md`, and the absent data boundary on
trace-derived cases. It recommended a decision table as the primary artifact and
demoting or removing the full YAML registry.

Before planning, the stress review also requires:

- one authoritative written source on held-out-set decay or repeated benchmark
  consultation
- a targeted search for counterexamples where eval governance became unused
  ceremony or a plain test suite was sufficient
- confirmation that the selected audience is stated as a deliberate transfer
  from the actual source actors rather than implied by them

## Stop conditions

Do not draft the article if any of these remains true after refinement:

1. After honest actor labeling, no source is within one transfer step of the
   selected reader; only vendors and an unfinished proposal carry the method.
2. System changes and evaluator changes cannot be separated in one concise table
   with a clear re-baseline rule.
3. The article cannot state its boundary against `make-the-agent-prove-it.md`,
   `measure-outcomes-not-agent-activity.md`, and `agent-ready-interfaces.md` in
   one sentence each.
4. The article would need numeric thresholds, causal improvement, or claims that
   governance is worth its cost rather than the narrower comparability claim.
5. Trace promotion cannot include a bounded data and instruction review without
   inventing an unsupported procedure; if so, cut trace promotion.
6. The artifact grows into a generic MLOps registry rather than a compact
   change-control table for the selected reader.

## Next planning action

Resolve the governed object and reader first. Recommended default: a team's
shared coding-agent stack, because it matches the site's audience, with the
adjacent-practice transfer made explicit. Then complete the written-source and
counterevidence checks before using `feature-planning` to create `plan.md` and a
paste-ready handoff.
