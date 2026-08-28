---
title: "The AI coding paradigm shift with Simon Willison"
resourceId: 85
date: "2026-05-05"
---

High Leverage host Joe Ruscio interviews Simon Willison about adapting software practice when coding agents make implementation cheap. The episode's most distinctive proposal is architectural: invest heavily in a stable data model and robust API, then allow vibe-coded or user-generated interfaces above that boundary. Willison's speed, reliability, adoption, pricing, model-quality, and market observations are practitioner reports and forecasts rather than controlled comparisons.

### Key Points Covered

- **Review depth should follow consequence**: Willison describes treating straightforward generated components as semi-black boxes, but says security-adjacent and load-bearing code still requires experienced human scrutiny. The episode does not establish a general threshold for deciding which code qualifies ([00:12:09–00:17:05](https://www.youtube.com/watch?v=D76X-96tpTY&t=729s)).
- **Real use is stronger evidence than repository polish**: Generated projects can acquire commits, tests, and documentation before anyone has exercised them enough to trust them. Willison therefore values sustained use and proven operation over presentation signals that agents can cheaply reproduce ([00:14:01–00:16:04](https://www.youtube.com/watch?v=D76X-96tpTY&t=841s), [00:33:43–00:34:32](https://www.youtube.com/watch?v=D76X-96tpTY&t=2023s)).
- **Cheap spikes change discovery but not review capacity**: Faster implementation can shorten product and design experiments, while parallel agents can explore several prototypes at once. Willison also reports substantial cognitive load when reviewing those branches, so generation throughput does not imply equal decision throughput ([00:17:05–00:22:18](https://www.youtube.com/watch?v=D76X-96tpTY&t=1025s)).
- **Keep a deterministic core beneath generated interfaces**: For a hypothetical issue tracker, Willison would put the design effort into a well-defined, well-backed-up database schema and API, then let users generate specialized interfaces against that stable boundary. This is a design heuristic, not a demonstrated production comparison ([00:30:36–00:33:43](https://www.youtube.com/watch?v=D76X-96tpTY&t=1836s)).
- **A learner could remain the keyboard driver**: Ruscio proposes an agent-assisted pair-programming mode in which the model explains and looks things up while the learner types. Willison finds the idea promising, but the episode presents no implementation or learning-outcome evidence ([00:27:55–00:29:33](https://www.youtube.com/watch?v=D76X-96tpTY&t=1675s)).
- **Model choice can follow workload and confidentiality**: Willison favors an abstraction layer across providers and says local models can be justified when journalists must protect sources from third-party disclosure. His vendor-capability, privacy-contract, and local-model assessments are contextual and version-sensitive ([00:42:21–00:46:59](https://www.youtube.com/watch?v=D76X-96tpTY&t=2541s)).
- **Measure outcomes against cost, not token volume**: The closing pricing discussion warns that token-use leaderboards are gameable and can reward waste. The specific prices, relative model costs, and usage multipliers are a recording-time snapshot and are not independently validated in the episode ([00:48:02–00:51:46](https://www.youtube.com/watch?v=D76X-96tpTY&t=2882s)).

Full video: <https://www.youtube.com/watch?v=D76X-96tpTY>
