# Evaluation Governance Article Handoff

You are continuing the work item at:

`.agents/work/docs/evaluation-governance/`

Read first:

1. `.agents/work/docs/evaluation-governance/index.md`
2. `.agents/work/docs/evaluation-governance/plan.md`
3. `.agents/work/docs/evaluation-governance/research.md`
4. `src/content/posts/agent-ready-interfaces.md`
5. `src/content/posts/make-the-agent-prove-it.md`
6. `src/content/posts/durable-context-coding-agents.md`

Goal:

Publish “Your Coding-Agent Evals Need Change Control,” a source-backed article
for teams maintaining a shared coding-agent stack. Its contribution is a compact
frozen-axis method for preserving valid comparisons as the system and its
evaluator evolve.

Current state:

The user selected the shared coding-agent stack as the governed object. Research
and adversarial review are complete. Oracle gave a high-confidence Go after the
article was bounded to comparative validity and ordinary tests were established
as the default for deterministic behavior.

Implement all tasks in `plan.md`:

- Draft the article with `draft: true` and `order: 10`.
- Add the frozen-axis table and compact per-change checklist.
- Add only contextual inbound links from the three planned related posts.
- Ask Oracle to review the complete draft and link diff, address required
  feedback, then publish with `draft: false`.
- Validate the site and complete the work item.

Scope limits:

- Do not modify `src/content/youtube/`.
- Do not broaden into generic MLOps, adoption measurement, per-change proof, or
  agent-interface design.
- Do not invent numeric policy defaults or claim operational benefit.
- If the plan is stale, update it and explain why before implementation.

Progress contract:

- Update completed task checkboxes in `plan.md`.
- Create or update `progress.md` with changes, Oracle feedback, verification,
  blockers, and next action.
- Update `index.md` status, artifacts, and next action when they change.

Verification:

- Run every command and generated-output check listed in `plan.md`.
- If verification cannot run, record why and what remains unverified.

Stop conditions:

- Hold publication if the lead cannot state the governed object and source
  transfer concisely, the table permits mixed-change attribution, the article
  requires invented thresholds, or Oracle finds a source-fidelity blocker.

Expected final response:

- Short summary of the article and related-post updates.
- Oracle review disposition.
- Verification results.
- Commit hash and remaining next action.
