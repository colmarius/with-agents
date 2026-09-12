---
title: "Building ambitious software — Jonathan Kelley, Dioxus Labs & Cognition"
resourceId: 124
date: "2026-09-11"
---

Jonathan Kelley describes adopting coding agents on Dioxus, a cross-platform Rust app framework. The team initially generated large amounts of code that did not meet its merge standards. Its more useful applications combined agents' patience with maintainers' judgment: researching unfamiliar platforms, checking releases, and building testing infrastructure while people continued to own architecture and review.

Based on the saved English auto-generated YouTube transcript, without translation or audio verification. The captions contain transcription errors; names in this summary use the video's title and description where applicable. Timelines, capability claims, and quality judgments are Kelley's account, not independently validated results.

### Main takeaways

- **More generated code did not immediately mean more shippable features.** [05:28–07:22](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=328s): after seeing agents improve at Rust, the team produced tens of thousands of lines covering long-desired features. Kelley says very little cleared its quality bar and much remained in draft. The failure was not an inability to generate implementations, but an inability to turn that output into acceptable changes.
- **For a framework, maintainability is part of what users buy into.** [08:14–09:56](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=494s): Kelley distinguishes prototypes and research code from software that other people build businesses on. Dioxus must remain fixable as it evolves, avoid breaking APIs in patch releases, and keep documentation, examples, tests, and benchmarks consistent. Shipping a feature is only one part of that obligation.
- **Agents helped with knowledge-intensive work, but validation still took time.** [09:56–11:49](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=596s): agents could explore unfamiliar build systems, runtimes, APIs, and CSS behavior more patiently than a small team. Kelley reports that Kotlin and Swift integrations took roughly two to three weeks, with implementation around the first day and about two weeks spent building test cases and testing on real devices. He also describes faster investigation of CSS layout and painting problems in Blitz, Dioxus's rendering engine. These are project anecdotes, not controlled comparisons.
- **Release chores are valuable agent work.** [11:49–14:44](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=709s): checking archive layouts, verifying release checklists, backporting fixes, and checking documentation accuracy consume time a three-engineer team could spend on design. Kelley says agents helped sustain more frequent patch releases. Documentation checks matter because code changes can leave comments and examples describing behavior that no longer exists.
- **Writing tests and choosing the right tests are different tasks.** [13:41–15:46](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=821s): Kelley finds agents capable of producing tests for an API but prone to shallow checks, such as merely testing a constructor. Real end-to-end behavior—his example is installing and using an editor extension—is harder to verify. The team still enumerates test conditions and designs test APIs and runners, using agents as a sounding board for coverage and edge cases.
- **Fuzzing harnesses were a stronger fit than blindly generated tests.** [14:44–16:50](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=884s): Kelley describes fuzzing as exercising software with millions of inputs, including malformed inputs and unintended usage. He says agents are good at building the harnesses that drive this process. That is a claim about constructing test infrastructure, not a guarantee that the resulting tests establish correctness.
- **Architecture and intent remain the maintainer's responsibility.** [15:46–17:52](https://www.youtube.com/watch?v=H7vFrcNWXzs&t=946s): a poor underlying design gives agents a poor foundation for their changes. Kelley says the team now spends much of its time thinking about future features and how the system should evolve. Dioxus still reviews every pull request line by line, using AI review to spot bugs beforehand. Outside contributors may describe a local fix without communicating the project's longer-term design needs, so a plausible implementation can still fit badly.

### Practical interpretation

Give agents bounded research, maintenance, and harness-building tasks, then evaluate the resulting behavior rather than the volume of code. Reserve explicit human attention for architecture, consequential test conditions, and whether a change belongs in the project. This is editorial synthesis of Kelley's experience, not a workflow benchmarked in the talk.

### Source

[AI Engineer — Building ambitious software — Jonathan Kelley, Dioxus Labs & Cognition](https://www.youtube.com/watch?v=H7vFrcNWXzs), published September 11, 2026. Timestamp links use the original recording's absolute timeline.
