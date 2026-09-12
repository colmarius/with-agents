---
title: "A Year of Agents — Armin Ronacher, CodeCrafts 2026"
resourceId: 46
date: "2026-07-16"
---

Agent output can grow faster than people can understand or review it. Armin Ronacher argues that developers must keep responsibility for the result and build tools that bring consequential decisions back to a human. He draws on his work at Earendil and experiences with other engineering teams.

### Agency, Understanding, and Review

- **The human should retain agency and responsibility**: A harness runs the tools the model requests, returns their results, and lets the model choose its next action. Although that loop lets an agent act without constant instruction, Ronacher argues that the person remains responsible for deciding what should happen and for the result ([04:27–06:44](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=267s)).
- **Cheap generation can shift review costs to maintainers**: Ronacher describes his own intense early use and an unsolicited 664,000-line rewrite of Pi to show how inexpensive generation can create expensive triage and review work for maintainers ([06:44–11:14](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=404s)).
- **Output is not understanding**: Prototypes can be useful, but Ronacher is concerned when people use agents to create core infrastructure they cannot explain or maintain without further model access ([11:14–12:23](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=674s)).
- **Broader access to code generation can outrun review practices**: Ronacher recounts a demo of an unimplemented feature, a junior engineer using model output to press for a change, and an engineer who had to ask the model how a system they built behaved. These anecdotes illustrate his concern about lost understanding, not how common it is across organizations ([12:23–16:59](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=743s)).

### Let code handle repeatable work

- **Programming gives agents executable actions and clearer feedback**: Ronacher contrasts commit-or-discard outcomes with subjective text evaluation. His claim that coding-session traces feed later model training is not supported with provider documentation in the talk ([18:12–20:38](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1092s)).
- **Use models to interpret input and code to calculate**: An invoice workflow may need optical character recognition to extract text from scans. Once the numbers are available, a program can add them repeatably instead of asking the model to generate a plausible total. Ronacher uses this example to explain why even non-coding agents benefit from executing code ([20:38–23:00](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1238s)).
- **Constrain execution rather than trusting behavior**: Gondolin runs agent code in a microVM and handles networking outside the guest, allowing credentials to be injected without exposing tokens inside the VM. Ronacher presents this sandbox model as experimental, not settled ([23:00–24:09](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1380s)).

### Keep the Right Friction

- **Design agent-edited codebases for human comprehension**: Ronacher says modern models can already work in ordinary repositories. The harder problem is helping reviewers regain enough context to understand changes produced at inference speed and stay in the loop ([24:09–26:32](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1449s)).
- **Encode mechanical expectations, then call out consequential decisions**: Earendil uses lint rules for constraints such as centralized database access and unique function names. Its Pi review extension can route mechanical fixes back to the model while highlighting dependencies and SQL migrations for human attention ([26:32–29:51](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1592s)).
- **Automate reproduction work; retain operational judgment**: Let the model turn a vague bug report into a reproducible failure, then let a person decide whether and how to fix it. For production systems, Ronacher points to service-level objectives: explicit availability requirements that help determine whether an outage needs a 2 a.m. response or can wait until morning. Those decisions and restrictions on destructive access are checks he wants to retain ([29:51–34:39](https://www.youtube.com/watch?v=u_k9cwDNPcM&t=1791s)).

[Watch the full CodeCrafts talk on YouTube](https://www.youtube.com/watch?v=u_k9cwDNPcM).
