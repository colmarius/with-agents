---
title: "Slowing Down at Inference Speed"
resourceId: 21
series: "state-of-agentic-coding"
episode: 5
date: "2026-04-10"
---

Armin Ronacher and Ben Vinegar examine what happens when agentic coding raises output faster than teams can review, secure, and understand it: more contributors and code, but also more pressure to restore deliberate engineering discipline.

### Key Points Covered

- **Diff review is becoming the center of the developer interface**: Both hosts still rely on editors or new terminal tools to inspect changes because an agent can describe its mechanical work without reliably explaining the architecture or trade-offs [00:02:51]-[00:08:50].
- **Agents make alternative runtimes and compatibility rewrites cheaper to attempt**: Cloudflare's constraints provide a concrete reason to port existing software, and the hosts expect lower rewrite costs to encourage more runtime variants and platform-specific implementations [00:09:43]-[00:15:35].
- **Shipping capacity has outrun team recovery time**: Armin's interviews with engineers found recurring concern about shipping too fast, while managers and non-engineers are also submitting code and increasing the volume that engineering systems must absorb [00:18:12]-[00:22:50].
- **Security work scales on both sides**: Current agents can find real vulnerabilities in unfamiliar code and help automate targeted attacks, but agent-written code can also create more vulnerabilities; the hosts argue this makes deliberate review more important, not less [00:23:53]-[00:31:50].
- **Lines of code are a poor measure of agentic progress**: Large multi-agent demos and generated workflow repositories can look productive while producing expensive systems that remain difficult to understand, operate, or maintain [00:32:37]-[00:37:38].
- **Well-designed libraries give agents a better substrate than tangled products**: Armin reports that agents work smoothly in mature Rust libraries with clear abstractions, while cross-cutting product state and feature flags invite drift and entropy [00:55:05]-[00:58:50].
- **Humans must own agent-generated changes**: The hosts reject blaming a model for merged code; engineers still need to refactor intentionally, decide which states should be valid, and remain accountable for what reaches production [01:06:31]-[01:14:06].
- **Agent access may become a governed company standard**: They predict tension between engineers choosing models freely and organizations standardizing harnesses, reviews, and security controls as agents gain more authority [01:20:26]-[01:27:20].

Full video: <https://www.youtube.com/watch?v=qCpY4K9jtOg>
