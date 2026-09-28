---
title: "Software Engineering Is Becoming Factory Engineering — Zach Lloyd, Warp"
resourceId: 160
date: "2026-09-27"
---

Warp founder Zach Lloyd proposes a shift from directing individual coding agents to engineering the system that coordinates them across the software development lifecycle. His “software factory” keeps human checkpoints for specifications, code, and product behavior, then uses production feedback to create more work and improve the process.

Based on the video's English auto-generated captions, not an independent review of the audio or slides. Warp's experience is speaker-reported; the broader adoption and career claims are forecasts, and the proposed feedback loops are not evidence of measured productivity or reliability gains.

### Key points

- **A factory automates the familiar development lifecycle.** Rather than sitting at a computer directing each agent interactively, Lloyd envisages work flowing through triage, specifications, implementation, review, verification, shipping, and monitoring. Humans review specs, participate in code review, and inspect the product. The change is how those stages are coordinated, not the invention of a new lifecycle or the removal of people. [01:05–04:16](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=65s)

- **Open-source maintenance is Warp's motivating example.** Lloyd describes a public view of issues, their states, and the agents and contributors working on them. He explicitly says this early factory is working imperfectly. He argues that building openly can help a startup develop community, brand, and an ecosystem when implementation becomes cheaper; automating noisy-issue triage, review, and verification helped Warp make that transition. These are his business arguments and company experience, not proof that software is trivial to copy or that openness guarantees success. [04:16–08:16](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=256s)

- **Triage should decide how much preparation a task needs.** Work can enter from issue trackers, team communication, developer tools, or monitoring. Lloyd recommends sending easy, unambiguous issues straight to implementation. For harder work, Warp uses a product spec describing the properties the product must preserve or satisfy, and a technical spec describing architecture and code structure. Not every issue needs both documents. [09:03–10:54](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=543s)

- **Keep review, verification, and monitoring as distinct steps.** An implementation agent produces a diff; Lloyd recommends agent review first, with human code review treated as a risk-based decision rather than eliminated. For UI work, verification includes actually using the generated software and producing screenshots or videos, alongside existing CI/CD. Monitoring then checks whether shipped software crashes or gets used, feeding that information back into the work queue. [10:54–11:58](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=654s), [11:58–13:02](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=718s)

- **Separate shared infrastructure from product-specific tuning.** His architecture has inputs, a control plane that distributes work, cloud sandboxes running chosen agent harnesses and models, and a data layer that retains what agents have done. He says a simple version is easy to build, but cautions that scalable infrastructure can distract most organizations from their own product. In the Q&A, he distinguishes adopting that infrastructure from engineering the skills and workflow that fit a particular domain. [11:58–13:57](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=718s), [16:56–17:53](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=1016s)

- **“Self-improvement” means observing failures and revising skills.** Lloyd proposes observer agents that watch how other agents apply skills, identify problems, and improve those skills. His example is a code-review agent whose comments are corrected by a senior engineer: an observer should use those corrections to improve the next review. This describes workflow feedback, not a demonstrated model-training method. He also recommends measuring software shipped against human time and token cost so the process can be improved deliberately. [13:02–14:48](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=782s)

- **Engineering judgment and product taste still determine what is worth building.** Lloyd predicts engineers will write less code and spend more effort improving the system that builds the product. His advice to graduates is to develop adaptability, critical thinking, and an understanding of systems and architecture so they can reason about generated code and specs. He closes with a limit on the factory metaphor: producing software nobody wants is pointless, so human product sense and guidance remain essential. [14:48–15:54](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=888s), [17:53–20:01](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=1073s), [20:01–20:36](https://www.youtube.com/watch?v=tUPPVhBBcoM&t=1201s)

Full video: <https://www.youtube.com/watch?v=tUPPVhBBcoM>
