---
addedDate: '2026-07-17'
title: "Slowing Down at Inference Speed"
resourceId: 21
series: "state-of-agentic-coding"
episode: 5
date: "2026-04-10"
---

Armin Ronacher and Ben Vinegar discuss agentic coding that raises output faster than teams can review, secure, and understand it. They describe more people contributing more code and argue that teams need to return to deliberate review and engineering discipline.

### Key Points Covered

- **Diff review is becoming the center of the developer interface**: Both hosts still rely on editors or new terminal tools to inspect changes because an agent can describe its mechanical work without reliably explaining the architecture or trade-offs [02:51–08:50](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=171s).
- **Agents make alternative runtimes and compatibility rewrites cheaper to attempt**: Cloudflare Workers run on V8 isolates rather than full Node.js, so much existing software does not run there unchanged. Armin says agents now work around those limits well, which gives Cloudflare a reason to port existing software. The hosts expect lower rewrite costs to encourage more runtime variants and platform-specific implementations [09:43–15:35](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=583s).
- **Teams feel pressure to ship faster than they can manage**: In Armin's interviews with about 12 engineers, people repeatedly said they were shipping too fast. Managers and non-engineers are also submitting code, which increases the volume that engineering processes must absorb [18:12–22:50](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=1092s).
- **Agents help both find and create vulnerabilities**: Current agents can find real vulnerabilities in unfamiliar code and help automate targeted attacks. Agent-written code can also create more vulnerabilities. The hosts argue this makes deliberate review more important, not less [23:53–31:50](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=1433s).
- **Lines of code are a poor measure of agentic progress**: Large multi-agent demos and generated workflow repositories can look productive while producing expensive systems that remain difficult to understand, operate, or maintain [32:37–37:38](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=1957s).
- **Agents work better in well-designed libraries than in tangled product code**: Armin reports that agents work smoothly in his mature Rust libraries, which have clear abstractions. In his company's product code, where feature flags and other state affect many places, agents make a mess that they then struggle to refactor [55:05–58:50](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=3305s).
- **Humans must own agent-generated changes**: The hosts reject blaming a model for merged code; engineers still need to refactor intentionally, decide which states should be valid, and remain accountable for what reaches production [1:06:31–1:14:06](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=3991s).
- **Agent access may become a governed company standard**: They predict tension between engineers choosing models freely and organizations standardizing harnesses, reviews, and security controls as agents gain more authority [1:20:26–1:27:20](https://www.youtube.com/watch?v=qCpY4K9jtOg&t=4826s).

Full video: <https://www.youtube.com/watch?v=qCpY4K9jtOg>
