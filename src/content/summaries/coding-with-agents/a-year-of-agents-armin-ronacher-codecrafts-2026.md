---
title: "A Year of Agents — Armin Ronacher, CodeCrafts 2026"
resourceId: 46
date: "2026-07-16"
---

Agent output can scale faster than people can understand or review it. Ronacher's response is to keep agency and responsibility with humans, then design harnesses, codebases, and review processes around that constraint.

The talk draws on his experience, open-source incidents, company interviews, and Earendil's tools. It is a practitioner account, not evidence of how common the reported organizational failures are.

### Agency, Understanding, and Review

- **The human should retain agency and responsibility**: Ronacher distinguishes the model from the harness that runs its tool loop. Although the machine can act in a defined world, he argues that the person remains responsible for deciding what should happen and for the result ([00:04:27–00:06:44](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=267s)).
- **Cheap generation can shift review costs to maintainers**: Ronacher describes his own intense early use and an unsolicited 664,000-line rewrite of Pi to show how inexpensive generation can create expensive triage and review work for maintainers ([00:06:44–00:11:14](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=404s)).
- **Output is not understanding**: Prototypes can be useful, but Ronacher is concerned when people use agents to create core infrastructure they cannot explain or maintain without further model access ([00:11:14–00:12:23](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=674s)).
- **Broader access to code generation can outrun review practices**: Ronacher recounts a demo of an unimplemented feature, a junior engineer using model output to press for a change, and an engineer who had to ask the model how a system they built behaved. He presents these as signs that implementation leverage is growing faster than review and shared understanding ([00:12:23–00:16:59](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=743s)).

### Code as the Agent Substrate

- **Programming gives agents executable actions and clearer feedback**: Ronacher contrasts commit-or-discard outcomes with subjective text evaluation. His claim that coding-session traces feed later model training is not supported with provider documentation in the talk ([00:18:12–00:20:38](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1092s)).
- **Build small programmable environments around the model**: An invoice workflow may need OCR for ambiguous input, but code can perform calculations cheaply, repeatably, and verifiably. Ronacher uses this example to argue that many non-coding tasks can be decomposed into executable steps ([00:20:38–00:23:00](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1238s)).
- **Constrain execution rather than trusting behavior**: Gondolin runs agent code in a microVM and handles networking outside the guest, allowing credentials to be injected without exposing tokens inside the VM. Ronacher presents this sandbox model as experimental, not settled ([00:23:00–00:24:09](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1380s)).

### Keep the Right Friction

- **Design agent-edited codebases for human comprehension**: Ronacher says modern models can already work in ordinary repositories. The harder problem is helping reviewers regain enough context to understand changes produced at inference speed and stay in the loop ([00:24:09–00:26:32](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1449s)).
- **Encode mechanical expectations, then call out consequential decisions**: Earendil uses lint rules for constraints such as centralized database access and unique function names. Its Pi review extension can route mechanical fixes back to the model while highlighting dependencies and SQL migrations for human attention ([00:26:32–00:29:51](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1592s)).
- **Automate reproduction work; retain operational judgment**: Ronacher uses bug reproduction as disposable agent work: let the model produce the repro, then let a person decide whether and how to fix the bug. For production systems, he points to SLO checklists and restrictions on destructive access as useful friction ([00:29:51–00:34:39](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1791s)).

[Watch the full CodeCrafts talk on YouTube](https://www.youtube.com/watch?v=u_k9cwDNPcM).
