---
title: "Coding Agents @ AI Engineer"
status: draft
coveredVideoIds:
  - Yk87oUPVaxU
  - il1c1a2FufU
  - Cz4v1WHVyZc
---

## Coverage

This draft covers 38 manifest entries: 37 available, 3 captured, 3 summarized, 3 incorporated, 34 available pending, 1 manifest-private, and 0 caption-unavailable. AI Engineer is the curator and source channel, not the author; speakers and affiliations vary by video.

The incorporated video IDs are `Yk87oUPVaxU`, `il1c1a2FufU`, and `Cz4v1WHVyZc`. The manifest-private ID is `pAbRL0h_SNs`. The 34 available pending IDs are `1P1hJ36rxM0`, `q4Tr-DknG2M`, `xUnRQ9vLXxo`, `HsxQICTLF84`, `HEFSExa0xl0`, `EcqMYoIV57A`, `li0SaBt9RDM`, `ugUeZ8-b-u0`, `7gujZrJ9L5I`, `W-SX_srBa3Y`, `5Sui_OnSRlY`, `TeGsFFNqRLA`, `dyHpnnlkTc8`, `VaS2h-dY1-4`, `yUmS-F9IX90`, `L2r6vLlLgs8`, `4_VQBbs2iQA`, `VktrqzQgytY`, `4VhbYlfC7Gs`, `vAIDdLKB6-w`, `ow1we5PzK-o`, `2TLXsxkz0zI`, `W76woOYHlvY`, `MhHEGMFCEB0`, `rnDm57Py54A`, `ClWD8OEYgp8`, `kR64LOqBBCU`, `-QFHIoCo-Ko`, `RjfbvDXpFls`, `1oySeF37SZc`, `prttz9_1XDc`, `Up6WVA07QdE`, `Ve-akpov78Q`, and `DuZXbinJ4Uc`. There are no caption-unavailable IDs.

## Current Thesis

- James Shi of Datacurve presents DeepSWE as an authored coding benchmark designed to resist contamination and reward correct behavior rather than one prescribed implementation (`Yk87oUPVaxU` [00:00:01]-[00:03:08], [00:11:28]-[00:12:26]; [summary](../../videos/Yk87oUPVaxU/summary.md)).
- Jason Liu of OpenAI presents long-lived Codex threads, persistent memory, reusable skills, and recurring wake-ups as parts of a workflow for delegating and coordinating agent work (`il1c1a2FufU` [00:03:02]-[00:07:11], [00:33:52]-[00:41:08]; [summary](../../videos/il1c1a2FufU/summary.md)).
- James Russo of HeyGen presents Hyperframes as a thin HTML-based authoring layer paired with deterministic browser rendering and human-editable video craft (`Cz4v1WHVyZc` [00:02:00]-[00:08:18], [00:09:13]-[00:11:59]; [summary](../../videos/Cz4v1WHVyZc/summary.md)).
- Editorial: These three perspectives span benchmark construction, ongoing work coordination, and generated-media tooling; that breadth is not evidence of consensus or a complete cross-event thesis.

## Stable Ideas

- Editorial: No idea is classified as stable across the playlist after three incorporated videos.

## Emerging Ideas

- James Shi of Datacurve reports that task provenance, repository diversity, Git-history controls, and behavior-oriented verifiers all affect whether coding-agent evaluations measure intended capabilities (`Yk87oUPVaxU` [00:01:03]-[00:03:08], [00:11:28]-[00:15:37]; [summary](../../videos/Yk87oUPVaxU/summary.md)).
- Jason Liu of OpenAI argues that compaction, memory, skills, heartbeats, goals, and thread-to-thread coordination can turn agent sessions into persistent workstreams rather than disposable chats (`il1c1a2FufU` [00:03:02]-[00:07:11], [00:34:49]-[00:41:08], [00:55:53]-[00:58:43]; [summary](../../videos/il1c1a2FufU/summary.md)).
- James Russo of HeyGen says the thinnest familiar representation won the Hyperframes team's format experiments, while deterministic rendering and domain-focused skills supplied the controls that raw HTML lacked (`Cz4v1WHVyZc` [00:04:36]-[00:10:07]; [summary](../../videos/Cz4v1WHVyZc/summary.md)).
- Editorial: Benchmark construction, durable context, verification loops, and output substrates may all belong to coding-agent harness design rather than a neutral layer around the model, but this remains a hypothesis for later summaries to test.

## Revisions and Tensions

- James Shi of Datacurve says DeepSWE still underrepresents bug localization and refactoring and identifies harness comparison and hybrid verification as future work (`Yk87oUPVaxU` [00:13:29]-[00:16:42]; [summary](../../videos/Yk87oUPVaxU/summary.md)).
- Jason Liu of OpenAI warns that broad computer access can let a determined model route around connector restrictions and recommends permissions and project instructions while organization-level boundaries continue to evolve (`il1c1a2FufU` [00:29:54]-[00:33:52], [00:52:40]-[00:54:49]; [summary](../../videos/il1c1a2FufU/summary.md)).
- James Russo of HeyGen says one-shot video generation can produce decent output but that great output still requires narrative planning, storyboarding, iteration, and human editing (`Cz4v1WHVyZc` [00:10:07]-[00:11:59]; [summary](../../videos/Cz4v1WHVyZc/summary.md)).
- Editorial: Each incorporated speaker identifies a different limit—benchmark coverage, autonomous-action safety, or creative quality—so none of the three talks supports a general claim that coding-agent work is solved.

## Practical Implications

- Editorial: When evaluating coding agents, inspect task provenance, hidden repository state, prompt instructions, harness choice, and verifier semantics before comparing model scores.
- Editorial: For durable agent work, make context reviewable, give recurring loops explicit verification and stopping conditions, and preserve visible workstream boundaries.
- Editorial: Prefer output formats models already handle well, but separate generative authoring from deterministic execution and retain a human-controlled editing path.
- Editorial: Revise this overview only from deliberately reviewed summaries, preserve per-speaker attribution, and do not infer chronology from playlist order.
