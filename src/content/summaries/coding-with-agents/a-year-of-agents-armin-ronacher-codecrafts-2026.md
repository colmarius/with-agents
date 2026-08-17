---
title: "A Year of Agents — Armin Ronacher, CodeCrafts 2026"
resourceId: 46
date: "2026-07-16"
---

Armin Ronacher reflects on a year of building agents and building software with them. His central warning is that agent output can scale faster than human understanding and review. The answer is not to discard the tools, but to keep agency and responsibility with people while shaping harnesses, codebases, and engineering processes around that constraint.

The talk combines first-person experience, open-source incidents, company interviews, and product examples. Its productivity estimate, token-cost calculation, model-training account, and organizational patterns are not independently measured or documented in the recording.

### Agency, Understanding, and Review

- **The human should retain agency and responsibility**: Ronacher distinguishes the model from the harness that runs its tool loop. Although the machine can act in a defined world, he argues that the person remains responsible for deciding what should happen and for the result ([00:04:27–00:06:44](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=267s)).
- **Agent leverage can become an unhealthy feedback loop**: He describes his own intense early use, then shows how inexpensive agent work can shift effort onto open-source maintainers through enormous, low-understanding pull requests. The examples establish concrete failure modes, not their prevalence across projects ([00:06:44–00:11:14](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=404s)).
- **Output is not understanding**: Prototypes can be useful, but Ronacher is concerned when people use agents to create core infrastructure they cannot explain or maintain without further model access. His evidence is anecdotal interviews and personal observation rather than a comparative study ([00:11:14–00:12:23](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=674s)).
- **Organization-wide adoption changes who can generate code, not who carries responsibility**: He recounts nonexistent features appearing in sales demos, juniors using model arguments to challenge reviewers, and senior engineers asking agents to explain systems they nominally created. These stories illustrate how leverage can outrun an organization's review capacity ([00:12:23–00:16:59](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=743s)).

### Code as the Agent Substrate

- **Code gives agents a measurable tool loop**: Ronacher argues that programming provides executable actions and clearer reward signals than subjective text generation. His broader account of how user traces feed model training is presented without provider documentation or training evidence ([00:18:12–00:20:38](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1092s)).
- **Use models to construct small, programmable worlds**: For document and invoice tasks, code can supply deterministic calculation, OCR plumbing, and repeatable execution instead of asking an LLM to perform every operation probabilistically. This is the architectural argument behind his claim that many non-coding agents still rely on code execution ([00:20:38–00:23:00](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1238s)).
- **Constrain powerful execution rather than assuming correct behavior**: Gondolin is his example: run agent code in a microVM, mediate network access on the host, and inject credentials into approved requests without exposing the real token to the guest. Ronacher explicitly treats sandbox design as experimental rather than settled ([00:23:00–00:24:09](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1380s)).

### Keep the Right Friction

- **Make agent-written code understandable to humans**: The immediate need for an agent-friendly codebase, he says, is not that modern models cannot edit it. It is that people need to recover enough structure and context to understand changes produced at inference speed ([00:24:09–00:26:32](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1449s)).
- **Encode mechanical expectations, then call out consequential decisions**: Earendil uses lint rules for constraints such as centralized database access and unique function names. Its Pi review extension can route mechanical fixes back to the model while highlighting dependencies and SQL migrations for human attention ([00:26:32–00:29:51](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1592s)).
- **Remove toil, not judgment**: Reproducing a poor bug report is a good candidate for disposable agent work. Architecture, production access, and service reliability need deliberate friction. Ronacher uses service-level objectives as an example of a checklist that forces people to confront operational consequences before an agent can cause them ([00:29:51–00:34:39](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1791s)).

[Watch the full CodeCrafts talk on YouTube](https://www.youtube.com/watch?v=u_k9cwDNPcM).
