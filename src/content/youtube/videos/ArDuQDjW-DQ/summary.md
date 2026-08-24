---
title: "Safe serverless deployments with Cloud Run"
videoId: ArDuQDjW-DQ
sourceUrl: "https://www.youtube.com/watch?v=ArDuQDjW-DQ"
publishedAt: "2024-02-20T20:30:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Martin hosts Steve, who says he spent more than a decade as a Google site reliability engineer across Search, Android, YouTube, and Cloud. They present four progressively more advanced practices for safer serverless deployments.

## Key Ideas

- Automate builds, tests, and releases with CI/CD; production promotion can remain operator-controlled even when the pipeline is automated. [00:01:03]-[00:04:14]
- Prefer a fast, reliable rollback to debugging under incident pressure, then diagnose and fix after service is restored. [00:04:14]-[00:06:21]
- Canary releases limit initial exposure and ramp traffic only after observation; Cloud Run traffic splitting and session affinity support the demonstrated approach. [00:06:21]-[00:10:35]
- Hidden feature rollouts separate deploying code from exposing behavior, allowing small cohorts and rapid disabling without a code rollback. [00:10:35]-[00:14:46]
- The practices are prioritized: begin with CI/CD, then reliable rollback, canaries, and experiments as needs justify the investment. [00:14:46]-[00:16:51]

## Practical Implications

- A team can first remove manual deployment steps and rehearse rollback before adopting cohort infrastructure.
- Release automation should preserve production checks and product-launch timing rather than treating maximum frequency as the only goal.

## Questions and Tensions

- Smaller, frequent releases reduce change size, but simultaneous component changes can complicate diagnosis.
- Experiments offer precise exposure control but require management tooling, code integration, metrics, and capacity planning.

## Source

- https://www.youtube.com/watch?v=ArDuQDjW-DQ
- [transcript.md](./transcript.md)
