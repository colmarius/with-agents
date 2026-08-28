---
title: "Intelligence + Continual Learning = Expertise — Yu Su, NeoCognition"
resourceId: 89
date: "2026-08-12"
---

Yu Su, an Ohio State professor and NeoCognition CEO, distinguishes intelligence—the ability to reason through an unfamiliar problem from supplied context—from expertise—accumulated, situated competence that selects relevant context, narrows search, and applies domain judgment. He proposes continual learning as the bridge between them.

This is a conceptual taxonomy and research agenda, not a demonstration of an implemented continual-learning system. The talk presents no architecture, update run, retained memory, benchmark, learning curve, production result, or comparison. Its company examples, market figures, “unbounded expertise” hypothesis, private-data opportunity, and forecast of abundant expert support should therefore be read as framing and predictions rather than evidence.

### Mechanism, Memory, and Evidence Boundaries

- **No implemented continual-learning mechanism is presented**: Su defines continual learning as adaptive compression of experience into reusable structures for future behavior. The definition organizes the design space but does not specify or test an algorithm ([00:10:51–00:12:42](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=651s)).
- **The memory and update loop is a menu of possibilities**: Experience could include episodes, facts, procedures, or feedback; compression could use vectors, symbolic indexes, model parameters, or reinforcement learning; retained structures could be adapters, graphs, skills, or world models; and later use could support recall, prediction, planning, control, or value estimates. No one combination is implemented or evaluated ([00:11:06–00:12:22](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=666s)).
- **Evaluation remains an open problem**: Su asks how expertise should be defined and measured for each environment and how a learner should balance reliability against plasticity. He reports no metric, task suite, baseline, failure rate, or evidence that the proposed framing improves agent behavior ([00:15:25–00:16:27](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=925s)).

### Key Points Covered

- **Coding is presented as an unusually favorable environment**: Su argues that code is already symbolic and structured and supplies tests as rewards, whereas enterprise and personal work spans idiosyncratic “micro worlds” with different constraints and dynamics. This is his explanation for agent brittleness outside coding, not a comparative study ([00:03:21–00:06:12](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=201s)).
- **Expertise is more than additional facts**: In Su's account, experts recognize deep structure, understand when rules apply or can bend, judge quality, know when to stop, and build a world model of a specific environment. Intelligence solves from provided context; expertise helps choose the context and compress the search space ([00:06:12–00:10:28](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=372s)).
- **The “world's smartest novice” is a hypothesis**: Su plots raw intelligence and expertise as largely orthogonal and argues that stronger models without continual learning will keep brute-forcing independent problems instead of accumulating situated competence. The talk provides no measurements for the proposed axes or learning slopes ([00:12:48–00:14:07](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=768s)).
- **Parametric and nonparametric learning are proposed as complementary**: Su says both are probably needed and suggests that specialized agents could learn from private environments and send that learning back to a general model. He does not explain the data controls, aggregation method, update boundary, or evaluation needed to make that safe or effective ([00:16:26–00:17:30](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=986s)).
- **The closing claims are forecasts and company framing**: “Unbounded expertise from bounded intelligence,” institutional learning loops, personal expert support, private data as the next internet-scale opportunity, and new economically viable work are future possibilities, not demonstrated NeoCognition capabilities or measured outcomes ([00:14:06–00:15:14](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=846s), [00:17:30–00:19:19](https://www.youtube.com/watch?v=I6aiEf3aEFQ&t=1050s)).

Full video: <https://www.youtube.com/watch?v=I6aiEf3aEFQ>
