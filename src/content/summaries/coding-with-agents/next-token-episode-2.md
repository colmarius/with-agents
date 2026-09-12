---
title: "McKay Wrigley on Agent-Driven Development"
resourceId: 4
series: "next-token"
episode: 2
date: "2025-12-04"
---

As coding agents need less step-by-step guidance, developers spend more time choosing tasks, supplying context, and reviewing results. Ryan Carson and Thorsten Ball discuss that shift with Takeoff AI founder McKay Wrigley, using their experiences with Opus 4.5 and their hopes for better memory and visual feedback.

### Key Points Covered

* **Memory should retain useful context without intruding everywhere**: The group contrasts external memory—saved information retrieved into a conversation—with the possibility of memory integrated into the model. They speculate that Google's Titans research could reduce manual handoffs between coding sessions. Ball explicitly says he has not read the paper; this is a discussion of possible applications, not a demonstrated coding-agent capability. Wrigley and Ball also value a blank conversation when old personal details are irrelevant [03:10–11:46](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=190s).

* **Simple build tools give agents usable feedback**: Ball points to Go's straightforward build-and-test setup: an agent can run a command and see whether a change worked. He and Wrigley also favor familiar languages and libraries, including TypeScript, Python, React, and shadcn/ui. Their explanation that training-data volume and reinforcement-learning choices drive these preferences is informed speculation, not evidence about particular models' training [11:46–17:54](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=706s).

* **Learning fundamentals and choosing useful work still matter**: News of AWS Frontier Agents prompts a discussion about juniors. The group expects routine implementation to shrink, but argues that developers still need to understand migrations, deployment order, and design trade-offs to direct agents well. They leave open how newcomers will learn that judgment when agents do more of the implementation [17:54–29:05](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=1074s).

* **A KV cache saves computation but consumes memory**: Carson explains that a transformer stores previously computed keys and values for past tokens instead of recalculating them during generation. As the conversation grows, that cache takes more GPU memory. His hope that Titans could address the limitation remains a research expectation [30:07–32:14](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=1807s).

* **Fewer interventions let Wrigley delegate larger tasks**: He reports that Opus 4.5 finds relevant files and uses tools more consistently than his previous setup. He compares the feeling to a Waymo ride: specify the destination and intervene less. This describes his growing trust, not a reliability benchmark [32:14–38:59](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=1934s).

* **Review focuses on behavior and architecture**: Ball describes providing bug reports and relevant past threads, then testing and spot-checking the result rather than always reading every line. His account of allowing broad local access without an incident is personal experience, not evidence that isolation is unnecessary [35:04–40:37](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=2104s).

* **Let the agent inspect the result of its work**: Wrigley expects browser interaction to give agents a stronger UI-testing loop. For their current workflows, he recommends nested project instructions, while Ball favors commands that expose useful state without excessive output. They expect some of these aids to become less necessary as models improve [40:37–52:23](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=2437s).

* **Try a visual reference as an implementation prompt**: Wrigley recommends asking Opus 4.5 to implement a screenshot of a UI. He says he uses screenshots of his Figma designs this way and finds the model's visual input handling better than earlier models [52:23–53:14](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=3143s).

* **Generated volume and deleted code are ambiguous measures**: A closing quiz cites industry adoption and productivity claims, but Ball challenges what the numbers mean. Deleting a cheap experiment is different from discarding days of human work; counting the removed lines alone does not establish poor quality [53:14–1:00:03](https://www.youtube.com/watch?v=Q8F9N3ugSng&t=3194s).

You can watch the full episode here:

- YouTube: <https://www.youtube.com/watch?v=Q8F9N3ugSng>
