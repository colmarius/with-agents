---
addedDate: '2026-10-30'
title: "Culture Stops Slop"
resourceId: 20
series: "raising-an-agent-season-2"
episode: 7
date: "2026-10-30"
---

Amp's hosts argue that quality without mandatory pull-request review depends on engineers talking to customers, maintaining what they ship, and receiving candid feedback from colleagues. Quinn Slack and Thorsten Ball explain how their 21-person coding-agent team uses rapid experiments and checks of working software to support that approach. They also describe production errors and difficulty protecting focused work. This is a first-party account, not comparative evidence that removing review improves safety or productivity.

Source basis: This summary uses the video's English auto-generated YouTube captions. No translation or original-audio check was performed.

### Why the hosts think this works

- **Responsibility and feedback give people reasons to maintain quality.** Engineers speak directly with customers and maintain the features they ship. Colleagues praise good work and call out poor results in shared channels. The hosts argue that these relationships establish a shared quality bar. Customer contact alone is not enough: engineers must also be able to fix the problems they hear about, rather than pass them to another queue. [29:39–36:44](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=1779s)
- **Fewer approval stages still require shared decisions.** Amp calls its isolated coding-agent environments "orbs." An early design for running them on customer infrastructure conflicted with a customer's ban on inbound connections. Engineers revised the design through discussion, diagrams, and customer trials. A draft announcement with an API example became their shared design document. The team still disagreed and needed to communicate; removing formal approval stages did not remove that work. [03:44–09:01](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=224s)

### What agents change in practice

- **Experiments can reach customers sooner.** Quinn released an experimental Android app through a hidden download link, then used customer reports to improve it before testing it on his own tablet. Thorsten argues that agents also reduce the effort of limiting a release to selected users and iterating on their feedback. For teams handling sensitive data or unable to deploy safely at that pace, he suggests better release tooling or realistic prototypes that customers can try. Those are ways to seek earlier feedback, not evidence that every team can safely copy Amp's release policy. [18:09–20:59](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=1089s), [24:56–29:39](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=1496s), [44:19–47:20](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=2659s)
- **People inspect results rather than every test.** For a GitLab integration, Thorsten reviewed agent-produced recordings and screenshots, logged into the test instance to check the actual merge requests and commits, and inspected which files had changed. He says he rarely reads unit tests for Amp's product work, although a compiler could warrant closer scrutiny. The distinction is between leaving test implementation to agents and checking whether the feature works, not between running tests and abandoning them. [48:23–52:32](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=2903s)

Two architecture examples show how the team applies this approach:

- **Let customers adapt a small interface.** The self-hosted-orb interface asks a customer-written program to start or resume, pause, and delete environments. Customers can use agents to connect those operations to their own infrastructure instead of waiting for Amp to supply every provider integration. Thorsten recounts one adapter working on its first attempt from the documentation. [09:01–13:08](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=541s)
- **Use a Mac only for the work that needs it.** Rather than run an entire agent session on a cloud Mac, the team kept the main environment on Linux and let the agent use a separate Mac when needed. The hosts report that early Apple-platform testers needed a Mac for only 35–40% of agent time. Internal trials and customer feedback helped refine this design, called macOS satellites. [20:08–24:56](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=1208s)

### What this approach does not solve

- **Small fixes can displace important work.** Quinn admits the Android app might have been useful procrastination rather than the most valuable task. The team sometimes clears someone's other responsibilities so they can focus on a larger project. Hiring does not automatically solve a failure to prioritize. The hosts have not resolved the broader problem: juggling many agent tasks can feel more productive than sustained work on one difficult problem. [36:44–43:25](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=2204s)
- **Production failures still happen.** Thorsten dropped a database column while older application instances were still writing to it, causing HTTP 500 errors during rollout. He also describes unnecessary requests that needed repair. Quinn recounts a safeguard the team had used: a linter required annotations recording checks for costly production effects of table changes or human review. The hosts still favor faster iteration, but their estimate of whether mandatory review would have prevented these incidents is speculative. Production migrations continue to require human judgment. [52:32–57:38](https://www.youtube.com/watch?v=tEse6n4hEJQ&t=3152s)

Full video: <https://www.youtube.com/watch?v=tEse6n4hEJQ>
