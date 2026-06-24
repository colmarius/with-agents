---
title: "ChatGPT Atlas Browser, Handoffs, and AR Apps"
resourceId: 3
series: "build-crew"
episode: 5
date: "2025-10-21"
---

In Episode 5 of "Build Crew Live" the team (Graham, Thorsten, Ryan, and Cyan) is joined by Build Crew community member AJ. They cover the team's weekly "changed my mind" segment, demo new features in Amp, review OpenAI's new Atlas browser, and get a look at AJ's work with augmented reality.

### **The "What I Changed My Mind About" Round**

The team kicks off by sharing what they've changed their minds about in the world of AI development over the last week.

* **AJ:** He no longer "baby-steps" the AI. He's found that agents can successfully code **entire features** at once, so long as he has strong, integrated tests to back them up.
* **Cyan:** He has moved from favoring slow, thorough context searches to preferring **faster, parallel searches**. He now trusts the agent to get similar results by processing more information quickly, which reduces his wait time.
* **Thorsten:** After launching the ad-supported **Amp Free**, he has changed his mind on ads. He now believes that relevant, well-integrated ads (like those in dev tools or Google Maps) are a good way to make powerful products accessible to everyone for free.
* **Ryan:** He's reconsidering his CI/CD pipeline. After seeing a post online, he's exploring the idea of **separating flaky end-to-end (E2E) tests** from the main CI process and running them asynchronously, so they don't block PRs from merging.

### **Pro-Tips and New Feature Demos**

The team shared several tips and demos of new tools to improve agentic workflows.

#### **OpenAI's Atlas Browser**

Ryan gives a review of the new **Atlas browser from OpenAI**. He demonstrates its "Agent Mode," which allows you to give the browser a prompt and watch it simulate a user's journey. He uses it on AJ's website, asking the agent to "act like a user considering hiring him" and observing how it navigates the page. This provides a new way to get instant user experience (UX) feedback.

#### **Amp's New "Handoff" Feature**

Thorsten demos `/handoff`, a new feature for managing context in Amp. Instead of letting a thread get infinitely long, you can type `/handoff` with a new goal (e.g., "now test this feature"). An LLM then reads your current thread, extracts only the relevant files and context for the new task, and starts a brand new, focused thread for you.

#### **AI for Code Reviews**

Cyan's tip focuses on the *other* half of the coding loop: **code review**. He suggests it's easy to build a simple process that feeds a code diff to an agent with a prompt asking for a review. He notes that even if an agent *wrote* the code, a "reviewer" agent will often catch small mistakes or offer useful feedback.

#### **Giving Agents a Sense of Time**

Graham shares a "time toolbox" he built for Amp. When he tells an agent "take five minutes on this," the agent can now call a tool to start an actual timer. This prevents the agent from finishing a complex task in 30 seconds and allows it to do more thorough work.

### **AJ's Tips: Level Up Your CLI and Maintain Consistency**

Community guest AJ shared his top tips for working with agents in the command line:

1. **Better CLI Tools:** He recommends using **LazyGit** (a TUI for Git) and **Yazi** (a terminal-based file navigator) alongside Amp to better visualize and manage the branches and files the agent is creating.
2. **The "Librarian" Agent:** AJ shows how he uses Amp's **Librarian**, a specialized agent that can read GitHub repos. He asks it to look at his *other* projects to find how he "correctly" formats a specific type of endpoint, and then replicate that exact pattern in his new code, ensuring consistency across all his work.

### **The Future: Specialized Agents and AR**

The group briefly discusses the value of **specialized agents** (like Librarian) that do one job well, finding them more reliable and useful than complex, general-purpose sub-agents.

Finally, AJ gives a glimpse into his work building **apps for AR glasses** on the Menra platform. His projects include a "clairvoyant" AI assistant and an app for sports teams that displays plays on a heads-up display during training.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=DCdZMNptyaw&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA)

Build Crew: <https://buildcrew.team>
