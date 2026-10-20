---
addedDate: '2026-10-20'
title: "The most controversial rewrite in history just shipped..."
resourceId: 185
date: '2026-07-15'
collection: fireship
order: 33
videoId: CXSvKcLovAk
---

Fireship recounts Bun's reported agent-assisted Zig-to-Rust port and the dispute over its technical benefits. This summary uses English auto-generated captions, not source diffs, test results, or the participants' posts. Counts, performance figures, and personal allegations remain attributed claims rather than independently verified findings.

## Key ideas

- Fireship describes a difficult boundary between JavaScriptCore's garbage-collected objects and manually managed Zig objects. Cross-boundary ownership allegedly contributed to freed-memory access, double frees, and leaks; Rust's borrow checker is presented as moving many ownership checks into compilation, not automatically proving every runtime interaction safe. [01:02–03:56](https://www.youtube.com/watch?v=CXSvKcLovAk&t=62s)
- He reports a second motivation: future agent-written code was easier to generate in a more established language than a changing pre-1.0 Zig ecosystem. His characterization of Zig's AI policy and model proficiency is part of the report, not a controlled language comparison. [01:49–03:56](https://www.youtube.com/watch?v=CXSvKcLovAk&t=109s)
- The described workflow first produced a porting guide and field-lifetime inventory, then divided translation among 64 agents across worktrees. Separate reviewer contexts were instructed to find errors, making explicit ownership documentation and adversarial review part of the claimed process rather than treating translation as a single prompt. [02:52–03:56](https://www.youtube.com/watch?v=CXSvKcLovAk&t=172s)
- Fireship reports passing tests, old bug fixes, smaller binaries, and modest speed gains, but also recounts Andrew Kelley's objection that optimization choices, not Rust itself, explain some benefits. Compile times and independently controlled comparisons are missing, so the report does not isolate a language effect. [02:52–04:58](https://www.youtube.com/watch?v=CXSvKcLovAk&t=172s)

## Practical implications

Editorial: Before a migration, document ownership boundaries and preserve behavioral tests. Separate the benefit of redesign, optimization settings, and bug repair from the effect of changing languages; agent throughput alone does not establish migration quality.

## Questions and limits

Editorial: The quoted $165,000 is described as an equivalent token spend rather than necessarily money paid by the team. Personal criticism is not technical evidence. CodeRabbit's closing guided-review features and adoption claims are sponsored promotion, not independent validation of the rewrite. [02:52–05:52](https://www.youtube.com/watch?v=CXSvKcLovAk&t=172s)

Full video: <https://www.youtube.com/watch?v=CXSvKcLovAk>
