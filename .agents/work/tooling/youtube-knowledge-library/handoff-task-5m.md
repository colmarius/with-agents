# Task 5m Handoff Prompt

```text
Continue `.agents/work/tooling/youtube-knowledge-library/`. Read index, Task 5 plan, progress through 5l, 5l handoff, YouTube AGENTS, catalog/manifests, summary patterns.

Goal: twelfth bounded backfill batch only: one `--limit 2` capture per playlist then source-checked drafts for successes. Task 5 stays in progress; no synthesis/Task6.

Evidence: 46 attempts through 5l =43 captures+3 durable language-unavailable, zero transient/fatal/throttle/stopped/retry. Corpus 80,436 transcript/21,386 summary words; source range 241–4,350 (18×). Keep exact max four attempts/no refill; stop capture on throttle/fatal/stopped, summarize prior successes.

Forbidden: sync/retry/force/repeat/refill; tooling/tests/package/catalog/AGENTS/manifests/existing corpus; overview/author synthesis/placeholders; Task5 check; Task6. Allow new selected metadata, successful transcript/summary, then progress/index only.

Clean preflight/help0/status must match: AI 63 entries/28 occurrences/27 unique/33 pending/2 unavailable (`9mHKjgFMsQA`,`LG3q-sqMG0g`)/0 missing/28 drafts; coding 30/22/7/1 (`H5cvtoSxdxI`)/0/22; author86/43 captured/40 pending/3 unavailable, synthesis missing; overviews stale. Stop mismatch.

Run once sequentially:
1. `npm run youtube:library -- capture --playlist ai-concepts --limit 2`
2. `npm run youtube:library -- capture --playlist coding-with-ai --limit 2`
Expected heads AI `R2TABSq1VNg`,`witc6AVdm84`; coding `yFa1BHzkzn8`,`D1_wPWzNkJ4`; all currently playlist-specific. Actual output wins; recheck membership/provenance.

Captured=metadata+nonempty chunked transcript. Unavailable=metadata only/no transcript/summary/refill. Transient=no record; continue other command/no refill. Throttle/TooManyRequest/stopped/fatal=stop capture; summarize prior successes.

Commit capture first: verify IDs/requested it/actual it or it-*/kind/chunks/unavailable shape/manifest provenance/title bytes. Stage generated only, diff-check, commit `capture YouTube backfill batch 12 transcripts`.

For successes read full transcript+metadata+selected manifest; exact AGENTS summary ordered provenance/en/draft/adapted disclosure/headings/links; anchor every Key Ideas bullet, verify endpoints and claim support; no translated verbatim/placeholders/unsupported current/synthesis. Lint only known reference baseline; restore unavailable records byte-for-byte including LG `0aed612127ab0203225472dce215febd2cbf3ed75414e1d1ba788309e203c7fd`, H5 `c5ddc8de1fb1dccf0113b00cbe25ba6370e73703e1949dd26df17ddfa63b82ae`, 9m `f4e903f16b9a3378a045d296dc8feb38193a28bd6fe69ba1a8e6ac758fac88bb`. Commit summaries only `add YouTube backfill batch 12 summaries`.

Full-success comparison: AI30 occurrences/29 unique/31 pending/2 unavailable; coding24/5/1; author47/36/3; zero missing; each overview gains its two. Actual status wins.

Verify exact established status/40 tests/lint hashes+drift/check/18-page build/two boundary rg/show-check/clean tree. Append dated 5m progress with all outcomes, measurements/anchors/provenance/status/checks/commits/deviations/cumulative evidence and 5n sizing. Keep Tasks5–6 unchecked; index link 5m, next derive 5n only. Commit progress/index `record YouTube backfill batch 12 progress`.

Stop dirty/baseline/language/provenance/claims/disallowed/throttle/fatal/stopped/scope expansion. Final report complete; never claim Task5 complete.
```
