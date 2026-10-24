---
title: "P-Stack Is Absolutely Incredible (Here’s How I Use It)"
resourceId: 187
date: '2026-10-22'
---

Jan Marshal demonstrates P-Stack by extending Shortlist, a demo product-research app, with web search, product import, and AI-generated comparisons. His main workflow lesson is to give agents a repeatable way to run the application, exercise user journeys, and inspect evidence before handing work back to a person.

This summary is based on the English auto-generated captions. The video is sponsored by Decodo, the web-data service used in the demonstration. Its productivity anecdotes and vendor performance claims are not independent evaluations.

### Route tasks through an explicit workflow

- **Skills supply instructions; playbooks put them in order.** Marshal presents P-Stack as a framework combining task-level playbooks, skills for individual jobs, engineering principles, helper-agent definitions, and reusable scripts. The `potato-mode` entry skill selects a playbook from the requested goal, constraints, and definition of done. That playbook organizes research, design, delegation, implementation, review, and verification rather than leaving the user to select every skill manually. Individual skills can still be invoked directly. [01:40–11:30](https://www.youtube.com/watch?v=bkY2K303bdQ&t=100s)
- **Configure model roles for the work you delegate.** In setup, Marshal assigns larger or judgment-heavy tasks to Opus, bounded engineering tasks to Sonnet, and research to Haiku. He removes Haiku from the review panels and chooses reasoning effort per model. These are his preferences for this demonstration, not benchmark-backed rankings or a required P-Stack configuration. [26:35–33:06](https://www.youtube.com/watch?v=bkY2K303bdQ&t=1595s)

### Build verification before the feature

- **Make checking the application a project-specific capability.** The verification skill defines how to launch the app, check prerequisites and readiness, exercise behavior, capture evidence and side effects, and clean up temporary state. A feature map identifies existing features, their locations, and what demonstrates success. The intended loop is change, run real checks, inspect the evidence, and repeat if anything fails or remains unclear. It includes UI behavior, error messages, and console output alongside automated tests; Marshal still expects human code review. [32:15–37:53](https://www.youtube.com/watch?v=bkY2K303bdQ&t=1935s)
- **Tell the verifier what exists and what is planned.** Before implementation, Marshal asks the agent to inspect Shortlist and account for the upcoming web-data integration. Its first report separates passing fixture and CLI checks from raw HTTP and Anthropic checks that remain unverified because credentials are missing. It also identifies incorrect handling of unknown product pages and links exposed as buttons. Those bugs are fixed before the new feature starts. [37:53–42:00](https://www.youtube.com/watch?v=bkY2K303bdQ&t=2273s), [44:07–49:07](https://www.youtube.com/watch?v=bkY2K303bdQ&t=2647s)

### Plan the integration, then inspect the result

- **Separate research from permission to implement.** Marshal first requests a high-level design. The agent probes available product templates and proposes keeping web-data access in a server-only module, separate from the CLI and MCP tools used during development. The plan uses search to find product pages, supported retailer templates to retrieve structured details, and general scraping for other sites. Marshal then approves implementation and asks for screenshots of the completed user journeys. [45:07–54:03](https://www.youtube.com/watch?v=bkY2K303bdQ&t=2707s)
- **Human intervention remains part of the demonstration.** When a Walmart request fails over raw HTTP, Marshal supplies an API example; the agent adjusts request parameters. He reports that the feature takes about 40 minutes, uses seven subagents, and goes through two review runs after the first finds three issues. This is one narrated build, not evidence that the framework reliably completes integrations without supervision. [54:03–57:14](https://www.youtube.com/watch?v=bkY2K303bdQ&t=3243s)
- **Preserve the distinction between retrieved facts and generated recommendations.** The resulting app labels live products with their source and retrieval time and keeps sample-price totals separate from live-price totals. Users select products, set a budget and preferences, and receive comparisons based on retrieved details. Marshal demonstrates imports through both a retailer template and general scraping, then compares mice and monitors. The walkthrough shows the intended interaction; it does not independently establish the accuracy of every scraped fact or recommendation. [57:14–1:05:59](https://www.youtube.com/watch?v=bkY2K303bdQ&t=3434s)

Full video: <https://www.youtube.com/watch?v=bkY2K303bdQ>
