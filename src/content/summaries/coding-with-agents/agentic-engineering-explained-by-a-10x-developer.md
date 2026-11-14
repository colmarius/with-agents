---
addedDate: '2026-07-31'
title: "Agentic Engineering, explained by a 10x developer"
resourceId: 32
date: "2026-07-27"
collection: "david-ondrej-agentic-engineering"
order: 4
videoId: "FU5_kpTAVDo"
---

David Ondrej interviews Thorsten Ball, a founding engineer at Amp, about what changes when coding agents make implementation cheap. Ball argues that engineering shifts toward deciding what to build, giving agents the right context, letting them work in the background, and reviewing evidence instead of driving every edit.

### Key Points Covered

- **Amp drops features when it thinks the frontier has moved on**: Ball says Amp optimizes its company, product, and codebase to move quickly as models improve, even when that means killing established features such as its VS Code extension. He argues that users should spend less time choosing models and more time on where information lives, how easily agents can work in their codebase, and getting useful work done [00:49–03:43](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=49s).
- **“The models are dead” means close supervision now pays off less**: Ball does not mean models are irrelevant. He means frontier models are now capable enough that watching each step has diminishing returns. The information you give the agent matters more than micromanaging edits, naming conventions, or model selection [05:38–07:21](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=338s).
- **Start agents on bugs instead of parking them in a backlog**: Ball suggests starting agents as soon as a bug is reported, letting them implement and test fixes in isolated sandboxes, then reviewing the results later. If the work runs in the background, he says, nobody needs to estimate whether a fix is worth doing. He also questions working synchronously and rerunning in CI the tests the agent has already run [07:21–08:24](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=441s).
- **AI writes most of Amp's code, but people supply the taste**: Ball estimates that nearly all visible Amp code is AI-written, while people still choose the icons, interactions, animation, copy, and generated variations that make the product coherent. In his framing, “AI slop” comes from weak ideas and product judgment, not from generated code by itself [08:24–11:19](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=504s).
- **Value moves from implementation toward product and business judgment**: For a new company, Ball recommends starting with the market, customer, value, and sales rather than treating software construction as the main problem. As models reproduce more hard-won implementation knowledge, the differentiating question becomes what should exist and why [11:19–13:26](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=679s).
- **Asking an agent to change the code may replace forms and admin panels**: A festival-ordering app built from menu photos leads Ball to question interfaces designed to avoid code changes. If an agent can update prices from a new photo or publish a post from a draft, changing the code may be simpler than maintaining a general-purpose administration interface [13:26–17:37](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=806s).
- **Agents make it cheap to remix software for yourself and build small internal tools**: Ball describes forking and customizing a diff viewer without generalizing the changes for upstream use, then extends the idea to software for workflows that previously lived in spreadsheets, wiki pages, or paper processes [17:37–20:47](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=1057s).
- **Understanding the real workflow becomes a core engineering skill**: In Ball's kitchen example, a local club asks for an app that prints orders on paper. After looking at the actual process, he proposes a second tablet instead of a printer. He says the most important skill will be first-principles thinking about what a process does and which problems it solves, rather than technical detail [20:47–23:43](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=1247s).
- **Remote agents let work run in the background and be shared by URL**: In the Amp demo, each Orb is a remote sandbox tied to one conversation. One URL holds the repository checkout, the conversation, the agent's computation, and the resulting change. Ball argues that old objections to cloud IDEs, such as latency and missing key bindings, matter less when engineers delegate work, switch tasks, and return later to tests, screenshots, and a reviewable diff [23:43–32:22](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=1423s).
- **Good prompts supply context the agent cannot find and ask for proof**: Ball treats the model like an experienced engineer dropped in front of an unfamiliar repository: it cannot recover information that exists only in the developer's head. He points agents to reference implementations, explains intended behavior, asks them to research and plan, then reviews architecture, end-to-end tests, screenshots, and spot checks rather than every line [32:22–41:06](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=1942s).

Full video: <https://www.youtube.com/watch?v=FU5_kpTAVDo>
