---
title: "The AI emperor has no DAUs  why most devs still don't use code AI: Quinn Slack"
videoId: Up6WVA07QdE
sourceUrl: "https://www.youtube.com/watch?v=Up6WVA07QdE"
publishedAt: "2024-11-20T20:28:33Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Quinn Slack, named in the source title, identifies himself as a Sourcegraph co-founder and says he has been building its code-search and code-AI products since 2013. He uses Sourcegraph's experience with Cody to argue that code-AI attention and stated interest should not be mistaken for sustained developer use ([00:00:00]-[00:01:03]).

Slack's adoption and revenue figures are explicitly estimates assembled from public numbers, private information, conference material, and what he calls a “vibes citation.” His central product argument is more bounded: features need frequent use, fast verification, direct builder dogfooding, and a manual path that works before invisible automation is added ([00:01:03]-[00:04:12], [00:13:43]-[00:16:54]).

## Key Ideas

- Slack contrasts a GitHub survey of 500 US developers and its broad definition of code-AI use with reported Copilot subscriptions and suggestion recipients, then offers a best-case estimate that about 5% of professional developers used code AI ([00:01:03]-[00:04:12]).
- He says autocomplete accounted for most code-AI use despite broader capabilities such as chat, file generation, and bug fixing, and ranks lack of a compelling reason, bad first results, organizational adoption, price, and security or legal concerns among the barriers reported to Sourcegraph ([00:04:12]-[00:05:15]).
- Slack models the market as a chain from experimental use through individual and enterprise recurring revenue to inference and foundation-model suppliers. He estimates roughly $300 million in code-AI ARR and says Sourcegraph spent less than 10% of its revenue on inference ([00:06:19]-[00:09:31]).
- He presents Cody's repository context, autocomplete, edits, test generation, and chat as an extension of Sourcegraph's earlier code-search position and makes several customer and revenue-ranking claims about the company ([00:09:31]-[00:10:33]).
- Slack argues that product teams must use their own product daily, focus on the outcome behind customer requests such as fine-tuning, and be able to explain the product's value without relying on the word AI ([00:10:33]-[00:12:40]).
- He suggests that a strong productivity claim should be testable by capturing the value directly, using the hypothetical purchase of a software-outsourcing firm to question whether Sourcegraph's stated productivity benefit was sufficiently proven ([00:12:40]).
- Slack evaluates feature shapes by frequency and verification cost: he places autocomplete near the favorable high-frequency, easy-to-check corner while describing chat, edits, and agents as less frequent or harder to verify at the time of the talk ([00:13:43]-[00:14:46]).
- He recommends building manual, explicit controls first—for example, explicit context mentions and editor-local agent changes—then adding automation only after users can inspect and correct the underlying workflow ([00:15:50]).
- Slack closes by recommending aggressive expectation setting, daily active use by the builders themselves, and coordination across application, infrastructure, and model providers around real usage rather than hype ([00:16:54]-[00:17:56]).

## Practical Implications

- Define adoption with a concrete active-use event and time window; subscriptions, survey awareness, suggestion impressions, accepted changes, and daily use answer different questions ([00:01:03]-[00:04:12]).
- Prioritize workflows that occur often and let developers validate an answer quickly, then measure whether chat, edits, and agents can reduce their verification cost rather than assuming novelty creates product-market fit ([00:13:43]-[00:14:46]).
- Require the team building a developer tool to use it in normal work, while still validating outside users because internal enthusiasts are not representative of the wider developer population ([00:10:33]-[00:12:40]).
- Expose context selection, generated changes, and correction paths before automating them; invisible retrieval or remote execution is harder to debug when the explicit workflow has not been proven ([00:15:50]).
- Separate product usage, renewal, customer outcome, inference spend, and supplier revenue when evaluating the economics of a code-AI product ([00:06:19]-[00:09:31]).

## Questions and Tensions

- The cited survey, subscriber, suggestion-recipient, professional-developer, and broader code-touching populations use different definitions and denominators. The talk does not provide enough source detail to reproduce the 5% estimate ([00:01:03]-[00:04:12]).
- Slack's $300 million ARR estimate combines private information and conference claims without a disclosed method, while the inference-spend percentage comes from Sourcegraph's own cost structure. Neither establishes the economics of the wider market ([00:08:28]-[00:09:31]).
- The argument assumes that durable enterprise expansion is the decisive path to value for the ecosystem; the source does not evaluate open-source, usage-based, individual, or internally captured alternatives on comparable terms ([00:06:19]-[00:09:31]).
- Sourcegraph and Slack have a commercial stake in code-AI adoption. The talk's customer footprint, revenue rank, Cody differentiation, and 20–30% productivity statements are presenter claims rather than independently evaluated results ([00:09:31]-[00:12:40]).
- The frequency-versus-verification framework is a useful product heuristic, but the source shows no underlying usage distribution, retention cohort, task study, or controlled comparison among autocomplete, chat, edits, and agents ([00:13:43]-[00:14:46]).
- The source contains clipped or unresolved names, company references, and shortcut wording near the closing product examples. No claim here depends on those fragments, and this summary does not infer current adoption or product status from the later manifest publication date ([00:14:46]-[00:17:56]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=Up6WVA07QdE)
- [transcript.md](./transcript.md)
