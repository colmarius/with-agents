# Coding-4 public-summary review

Worker: https://ampcode.com/threads/T-01a096b4-01d2-772a-bc29-5e09369df989
Coordinator: https://ampcode.com/threads/T-01a096a5-4539-705e-971d-cee53d55fb24

Reviewed all 25 owned summaries; changed 20 and left 5 unchanged. Ownership is the original sorted summary slice [75:100], from l8-principals through raising-an-agent-episode-10. Only these summaries were edited. No sidecars, manifests, IDs, dates, collection metadata, or frontmatter changed. No push or deployment.

Evidence shorthand below: T(name) means the entire matching `src/content/transcripts/coding-with-agents/<name>.md`; Y(id) means the entire reviewed `src/content/youtube/videos/<id>/summary.md`. All these sources were read before edits. Reviewed source summaries were used instead of reinterpreting their raw captions. Direct transcript-backed edits were checked against the saved transcript, not original audio. The Claude Eval readability example was read from origin/main without changing it.

## Sidecar follow-through for the coordinator

The coordinator explicitly agreed to preserve removed language/translation/no-audio-check provenance in sidecars. No sidecar edits were made here. Exact removed assertions:

- `qualities-of-tomorrows-programmers-salvatore-sanfilippo.md`: “All English wording below is an editorial translation/paraphrase of Italian auto-generated captions; nothing is a verbatim quotation.” Preserve this in the matching transcript sidecar. Public prose remains attributed paraphrase, with no translated verbatim quotations.
- `paul-graham-on-startups-ambition-and-great-founders.md`: “Based on the saved English auto-generated YouTube transcript; not checked against the audio. Founder-selection claims, AI forecasts, and cost anecdotes remain Graham's views. The summary focuses on the interview's software-team relevance rather than its broader startup anecdotes.” Preserve language/caption basis and lack of audio verification in the matching transcript. Claim-level attribution and forecast/cost qualifications remain public.
- `orca-ade-jinjing-liang.md`: “Based on the saved English YouTube captions (`kind: caption`), without translation or audio verification. The captions contain transcription errors; the summary paraphrases clear passages. The headline's GitHub-star count, productivity claims, product capabilities, and market observations are the interview's account, not independently verified measurements.” Preserve source basis/no translation/no audio check/editorial handling in the matching transcript. Language and kind already exist in frontmatter. Also removed the process sentence “Timestamp links use the original video's absolute timeline.” Attribution, anecdotal performance caveats, and limits of cross-agent state transfer remain public.

Other removed standalone evidence-method checklists are not newly captured provenance. Reviewed YouTube evidence retains its existing limitations. Where a qualification affects a claim, it remains beside that claim (Pencils percentage estimate, Pi cache comparisons, Prototype isolation, incident interpretation, safety guidance).

Next Token 1 is an evidence gap, not a sidecar capture failure: X-only broadcast https://x.com/i/broadcasts/1MnxnPWoDwLGO. Primary page fetched; it confirms Amp, Next Token Episode 1, and a 1:01:28 broadcast but supplies no substantive transcript. Removed the unsupported generic discussion description; retained only source identity/link. Do not invent episode content or a YouTube transcript.

## Per-file ledger

All filenames in this section are under `src/content/summaries/coding-with-agents/`.

### l8-principals-agentic-engineering-setup.md — unchanged
Read Y(8ZgpAXe5V5w). Existing summary distinguishes First Mate coordination, human ambiguity handling, No Mistakes validation, risk-based review, and measured-in-his-setup CLI comparisons. Focused enough; no supported correction needed. Evidence: 08:53–13:52 coordination; 21:01–22:47 escalation; 37:41–45:28 validation/risk. No new gap.

### last-human-code-review-ai-generated-code.md — changed, substantial
Read T(last-human-code-review-ai-generated-code), video s-aixZYJG4c. Reoriented around automating review without losing judgment; explained team-specific rules, inspectable findings, service contracts, graph nodes/edges, and incident history. Kept the 100-PR silence heuristic explicitly unvalidated and the 2027 zero-outage promise aspirational. Removed broad standalone benchmark checklist.
Deep-review evidence: 04:57–08:42 generic error handling lacks the project's consequences/standards; 08:42–11:39 human rule links and agent-facing issue/fix branch; 11:39–12:28 roughly 100 PRs/no human comments; 12:28–15:30 service contract outage and graph relationship; 13:33–17:23 gradual rule activation/multiple PRs on an edge; 17:23–18:53 artificial wisdom/2027 ambition. Editorial warning that silence can mean missed defects is visibly a competing interpretation, not attributed experimental evidence.

### llms-are-killing-agent-harness.md — changed, small
Read Y(thMFsqe8kbQ). Defined harness as software supplying context, tools, and feedback loop. Kept Ball's simplification thesis and coordination forecast attributed. Evidence: 36:43–43:42 scaffolding/shell/interface; 43:42–49:24 coordination and preservation. No new gap.

### matt-pococks-agentic-engineering-workflow.md — changed, small
Read Y(nQwJVHCtDDY). Expanded AFK to away-from-keyboard and explained separate asynchronous tasks. Evidence: 24:51–26:59 Claude planning, Sandcastle and GitHub Actions; 42:53–51:20 bounded queues. No change to product/direction ownership.

### mattpocock-skills-complete-ai-coding-workflow.md — changed, small
Read Y(M6mYodf0dJM). Removed detached comparative-delivery/defect/maintenance disclaimer; summary makes no such quantitative claim and already labels the procedure a demonstration. Evidence: 09:36–14:48 persistent artifacts only for larger work; 14:48–16:52 implementation plus fresh review. Reviewed source retains limits.

### measuring-the-impact-of-ai-on-software-engineering-laura-tacho.md — unchanged
Read Y(xHHlhoRC8W4). Existing distinctions are important and readable: 12:05–16:56 utilization vs impact; 26:36–28:43 generation transfers effort into review; 42:30–46:33 vendor-reported segmented results not causation; 51:42–54:49 batch-size explanation is hypothesis. No new gap.

### meet-pi-the-minimalist-self-modifying-coding-agent.md — changed
Read T(meet-pi-the-minimalist-self-modifying-coding-agent), RKHaecOi0CA. Replaced catalog-relative orientation and detached audit paragraph with small core/self-written extensions/model-provider independence. Evidence: 00:00–01:52 control and loop, 05:22–07:11 package structure/self-extension, 09:03–10:58 open foundation ambition. Adoption and ranking uncertainty still beside the adoption bullet; commercial plans still described as ambitions.

### mitchell-hashimotos-new-way-of-writing-code.md — unchanged
Read Y(WjckELpzLOU). Existing bounded background-work, consequence-sensitive review, and maintainership costs are concrete. 1:18:47–1:21:52 concurrency/review examples; 1:21:52–1:29:37 contributor trust proposal; 1:44:40–1:46:40 deliberate notification control. No new gap.

### my-agentic-engineering-workflow.md — unchanged
Read T(my-agentic-engineering-workflow), c9nRxEy1kUY. Retained relevant sponsorship and risk qualifications because root SSH/API-key reuse, single-host locking, tool-hook limits, and read-only data exposure can otherwise be mistaken for safe defaults. Evidence: 16:26, 22:20–23:17 credentials; 36:03–40:49 serialization; 34:08–36:55 hooks; 49:58–51:52 database roles. Clear practical distinctions already present.

### next-token-episode-1.md — changed, evidence gap
Read primary X broadcast page above. Removed unsourced generic claims about developer experiences and trends. Kept X-only identity/link and all frontmatter. No substantive episode summary can be supported from available evidence.

### next-token-episode-2.md — changed, substantial
Read T(next-token-episode-2), Q8F9N3ugSng. Replaced assertions about research/model training with attributed speculation; explained external memory vs proposed model-integrated memory, build-tool feedback, KV cache computation/memory tradeoff, behavioral review, and ambiguous volume metrics. Removed unsupported fixture/screenshot checklist from the later workflow discussion; retained actual Figma screenshot advice separately.
Deep-review evidence: 03:10–11:46 Titans discussion (Ball says he has not read paper), existing-memory intrusiveness/blank sessions; 11:46–17:54 Go command feedback and speculative training/RL explanation; 30:07–32:14 KV cache; 32:14–38:59 Wrigley's tool-use confidence/Waymo analogy; 35:04–40:37 architecture/testing/spot checks and local-permission anecdote; 40:37–52:23 future browser feedback/nested instructions/command output; 52:23–53:14 actual Figma screenshot recommendation; 53:14–1:00:03 quiz and Ball's objection to treating deleted output as wasted human labor. No primary Titans research claimed; summary reports the conversation's uncertainty instead.

### openai-hugging-face-attack.md — changed, consequential placement
Read T(openai-hugging-face-attack), u15N3l4RT80, and full OpenAI technical PDF: https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf . Moved existing factual correction from detached evidence appendix to nested paragraph immediately under first-wave claim. PDF pp. 7–8: internal team observed board/prohibited internet around May 26; June 27 responders identified board/network pivot and did not stop run. Leadership lack of awareness is not the same as all responders being unaware. PDF pp. 37–38 also supports 956 secrets/evaluation endpoints. Video 00:56–03:10 supplies Patel's simplified first-wave account; 19:31–21:48 retains weight-exfiltration speculation and VM/GPU correction. Renamed interpretive section to describe content; removed peripheral Greenblatt interview-process disclosure (22:49–23:41), already retained in transcript. No claim that independent third-wave investigation exists.

### openclaw-creator-built-app-to-control-claude-code.md — unchanged
Read Y(fu7th5HiADo). Kept important title mismatch: recording demonstrates VibeTunnel, not OpenClaw. Existing 03:53–06:55 shared-directory concurrency caveat, 08:39–11:40 personal throughput report, and 25:33–28:48 unfinished beta behavior are concrete. No new gap.

### orca-ade-jinjing-liang.md — changed
Read T(orca-ade-jinjing-liang), PcsdNYfR6Ag. Removed provenance paragraph (exact assertions above). Clarified independent worktrees vs multiple roles inside a single task, and retrievable history vs lossless running state. Simplified editorial adoption advice into a testable real handoff. Evidence: 27:50–30:56 20 tickets/design-challenge-implement-review; 30:56–33:01 child sessions, archived history, subscription interruption; 33:01–36:03 automated task reopened interactively. Preserved attribution and throughput/cache caveats.

### paul-graham-on-startups-ambition-and-great-founders.md — changed
Read T(paul-graham-on-startups-ambition-and-great-founders), 5bxp78i96S8. Topic/stakes first; removed provenance appendix; expanded funding/inference-cost range to 10:04–13:01 and shipping/token-cost range to 15:40–17:46 to include supporting chunks. Evidence: 12:12 inference-cost expectations continue before 13:01; 16:42 token-cost discussion continues before 17:46. Prediction and cost-anecdote labels retained. Sidecar follow-through above.

### pencils-down-rework.md — changed, small
Read Y(otvGsbeOdfc). Put practitioner-estimate qualification beside 75%-to-production claim (13:38–15:22); removed standalone no-comparison statement. No new substantive claim.

### pi-agent-creator-on-future-of-agentic-coding.md — changed, small
Read Y(PZ-sko1NWa0). Replaced dark-factory jargon in heading with fully unattended development, and explicitly attributed training-data causal explanation to Zechner rather than established fact. Evidence: 33:52–42:46; reviewed evidence describes first-person architecture observations rather than causal study.

### pi-building-pi-openclaws-minimalist-coding-agent.md — changed, substantive correction
Read T(pi-building-pi-openclaws-minimalist-coding-agent), DPgJjRdQWrg. Corrected implication that reviewer made demonstrated diff smaller: 29:43 helper reuse “I guess it's fine”; 30:42 describes possible inline request but says “Not going to do this here”; 31:43 “both of these look fine…happy with this.” Citation expanded to 29:08–32:44. Corrected robot refactor from accomplished result to started work: 1:08:04 “it started refactoring”; 1:08:54 says he'd let it finish, then review and shape API, and cannot fit entire refactor in remainder of recording. Kept 48:27–1:09:37 supporting range. Intro now distinguishes completed Pi bug fix from unfinished robot work.

### pi-coding-agent-deep-dive.md — changed
Read T(pi-coding-agent-deep-dive), 5kLL0xUC28Q. Topic-first package separation; defined KV cache as retained computed state rather than conversation history itself. 14:16 describes avoiding recomputation during prefill; 15:18 describes stored math/placement in memory; 16:22 and 20:54–22:58 discuss reuse claims. Removed detached methodology checklist while keeping reproducibility qualification beside comparisons. No model rankings generalized.

### practical-guide-to-agentic-computering.md — changed
Read T(practical-guide-to-agentic-computering), sq6a3WC5_Ns. Removed redundant introductory historical/benchmark checklist and generic automation comparison caveat. Kept personal port-speed qualification beside 1:12:14–1:20:19 claim, manual check of lost summary detail 47:30–59:50, generated-test warning 1:23:11–1:24:16. Replaced Safety and Evidence Limits with concrete permission decision; shortened threat laundry list without losing warning against generalizing no-incident anecdote (02:38–06:52). July 2025 remains explicit.

### production-agent-reliability-ai-engineer-guided-collection.md — changed, introduction only
Read reviewed playlist `src/content/youtube/playlists/ai-engineer-agent-reliability-2025/overview.md` and Y(kTnfJszFxCg), Y(8SUJEqQNClw), Y(1izYWsokr9s), Y(sl3icG-IjHo), Y(n991Yxo1aOI), Y(Dj0b_cEBHBI). Replaced channel-authorship/process orientation with production stakes and editorial route. Individual speaker/vendor/uncertainty distinctions retained. Supporting anchors: Chase 01:58–02:47; Somal 00:55–03:53 and 09:54–13:42; Perszyk 04:16–07:28. No framework superiority claim added.

### prototype-instead-of-specs.md — changed, small
Read Y(n0VhIVtviC0). Moved live-route isolation/regression qualification beside 06:03–07:55 experiment and removed detached cost/quality-comparison disclaimer. Preserved throwaway prototype vs production distinction and 07:55–08:58 fresh implementation proposal.

### qualities-of-tomorrows-programmers-salvatore-sanfilippo.md — changed, substantial explanation
Read T(qualities-of-tomorrows-programmers-salvatore-sanfilippo), ONeJRuhsoi4. Removed translation note for coordinator sidecar preservation. Reoriented around contribution beyond code and moved review-policy qualification beside advice. Expanded Redis example from labels to specialized table and inline strings saving pointer overhead. Exact source: 09:12 “ci serve una table specializzato”; 10:09 “Non utilizzare…le stringhe SDS perché non possiamo pagare il puntatore. Internalizza le stringhe dentro…il B+ tree”; same chunk says agent had not reached those optimizations before human suggestions. Retained 08:09–11:15 range, attribution, and non-controlled 40% claim. Changed unverified comparative descriptions of three linked talks into a simple related-talk list; preserved their links without extending their claims.

### raising-an-agent-episode-1.md — changed, substantial
Read T(raising-an-agent-episode-1), auVu08nXKOw. Replaced broad themes with concrete edit-by-example, malformed tool fallback, human-returned crash logs, proposed mandatory checkpoints, and environment improvement. Evidence: 02:52–06:03 recorded edits and single-character diff; 26:23–28:29 partial backend refactor; 07:04–09:12 rejected edit calls then new-file/move workaround; 09:12–11:13 and 16:06–18:07 compiler/runtime feedback and human-run auth-server debugging; 11:13–12:15 proposed enforced checks, not implemented contract; 18:07–21:15 model/environment improvement. Expanded point timestamps to full supporting ranges.

### raising-an-agent-episode-10.md — changed, small
Read T(raising-an-agent-episode-10), 4rx36wc9ugw. Topic-first sidebar/concurrency problem; explicitly historical February 2026 context and deep-mode model routing. Evidence: 00:55–05:21 mode choice, 08:03–10:17 longer work, 21:52–27:57 sidebar retirement. Did not turn dated product claims into current Amp docs.

## Verification

- `npm run check`: 65 files; 0 errors, 0 warnings, 0 hints.
- `npm test`: final run 114 passed, 0 failed, 0 skipped (initial run before hook installation: 113 passed, 1 skipped).
- `npm run build`: 332 pages built; search 320 documents; complete.
- `npm run content:guard`: passed; 1158 tracked videos, 24 playlists, 248 tracked public references, 107 resources, 287 public summaries. Existing non-blocking notice: antirez-ai-concepts contains 8gg-oJr4dTY at positions 0 and 3.
- `npm run summaries:check`: passed, 287 files.
- `npm run lint:fix`: 457 files checked, no fixes.
- `npm run hooks:install`: pre-commit hook installed locally.
- `git diff --check`: passed. Script verified all 20 changed paths belong to original 25-file slice and every frontmatter block is byte-identical.
- Final changes to Pi timestamp and related-talk list were followed by rerunning all five required checks successfully.

Browser: used `amp orb services ensure`, then named Chromium session coding4 at 1280×900, DPR 2. Portal: https://t-03guubq7s09w1pwc2lcq2s6fd-p25955.onamp.dev/ . The headless login route returned the site's 404, but direct portal summary navigation worked and was inspected; no localhost substitution.

- `/summaries/coding-with-agents/last-human-code-review-ai-generated-code`: heading and revised rule/graph explanation present, no horizontal overflow. Accessibility snapshot exposes all seven supporting timestamp links. Inspected `.amp/in/artifacts/coding4-last-human-review.png`: readable calibration bullets and ranges, no overlap.
- `/summaries/coding-with-agents/next-token-episode-2`: DOM confirms informed speculation, cache explanation, and 35:04–40:37 link target `t=2104s`. Inspected `.amp/in/artifacts/coding4-next-token.png`: memory qualification and 03:10–11:46 visible; next bullet extends below viewport (not a layout defect). No toolbar overlap in final capture.
- `/summaries/coding-with-agents/openai-hugging-face-attack`: DOM confirms nested correction text and exact PDF #page=7 URL. Inspected `.amp/in/artifacts/coding4-incident-correction.png`: readable correction immediately below first wave, no clipping or overlap.
- Initial captures included Astro's development toolbar; final content-focused captures removed that browser-only toolbar element, not product UI or repository code. Browser `errors` returned none; session closed.

Remaining integration work: coordinator download these 20 summary changes and this uncommitted ledger, preserve the three provenance assertions in sidecars, run combined checks after integrating other workers. No blocked summary edit remains; Next Token 1 content is intentionally minimal because evidence is unavailable.
