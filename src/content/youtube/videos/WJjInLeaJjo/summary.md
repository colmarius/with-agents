---
title: "Building Agents at Cloud Scale — Antje Barth, AWS"
videoId: WJjInLeaJjo
sourceUrl: "https://www.youtube.com/watch?v=WJjInLeaJjo"
publishedAt: "2025-08-02T18:15:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

In [Building Agents at Cloud Scale — Antje Barth, AWS](https://www.youtube.com/watch?v=WJjInLeaJjo), Antje Barth of AWS presents a model-driven approach to building and operating agents. She moves from Alexa+ and Amazon Q Developer to Strands Agents, tool retrieval, and remotely hosted MCP servers. [00:01:40]-[00:16:30]

## Key Ideas

- Barth says Amazon has more than 1,000 generative AI applications built or in development, while Alexa+ coordinates hundreds of specialized expert systems across tens of thousands of partner services and devices. [00:00:51]-[00:04:30]
- AWS built and shipped the Amazon Q Developer CLI agent in three weeks; Barth attributes that speed to a model-driven approach that lets developers specify what an agent should do while capable models handle more planning, reasoning, and action selection. [00:05:23]-[00:08:22]
- Strands Agents connects models and tools through a small Python SDK, defaults to Amazon Bedrock, and also supports other model providers and custom providers. [00:08:22]-[00:10:17]
- An internal AWS agent manages more than 6,000 tools by storing tool descriptions in a knowledge base, retrieving relevant tools for a task, and placing only those tools into model context. [00:10:17]-[00:11:21]
- The demonstrated remote-MCP pattern deploys an MCP server as an AWS Lambda function, uses Streamable HTTP and authorization, stores session data in DynamoDB, and connects from a Strands Agents client through an API Gateway URL. [00:12:18]-[00:16:30]
- Barth frames MCP and forthcoming A2A support as steps toward agents collaborating across services and with other agents. [00:17:23]-[00:18:27]

## Practical Implications

- Editorial: Treat model selection, tool design, and deployment as separable concerns so teams can test locally and change providers or hosting without redesigning the whole agent. [00:08:22]-[00:10:17]
- Editorial: Large tool catalogs need retrieval or another selection layer; exposing every tool to the model at once does not scale cleanly with context limits. [00:10:17]-[00:11:21]
- Editorial: Moving MCP from local stdio to remote infrastructure introduces ordinary production concerns—authorization, sessions, gateways, and deployment automation—rather than removing them. [00:12:18]-[00:16:30]

## Questions and Tensions

- Editorial: The three-week delivery example demonstrates speed, but the talk does not provide reliability metrics, evaluation criteria, or the operational safeguards used for that release. [00:06:27]-[00:07:19]
- Editorial: The 6,000-tool retrieval design reduces context pressure, but the talk does not quantify retrieval accuracy or explain how incorrect tool selection is detected and recovered. [00:10:17]-[00:11:21]
- Editorial: The remote-MCP demo acknowledges stronger authorization options but deliberately uses a simple bearer-token setup, leaving production identity, tenant isolation, and least-privilege design open. [00:14:22]-[00:16:30]

## Source

- [Canonical video](https://www.youtube.com/watch?v=WJjInLeaJjo)
- [transcript.md](./transcript.md)
