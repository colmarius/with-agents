---
title: "Databases, Custom Tools, & Workflow Automation"
resourceId: 3
series: "build-crew"
episode: 4
date: "2025-10-14"
---

In Episode 4 of "Build Crew Live" the team (Thorsten Ball, Ryan Carson, and Graham McBain) is joined by community member Colleen Brady to discuss databases, custom tools, and workflow automation. The conversation covers what they've recently "changed their minds" about, a series of pro-tips for working with agentic coding tools like Amp, and a deep dive into the difference between slash commands and toolboxes.

### **What's New? The "Changed Your Mind" Round**

The team kicks off with a lightning round on what they've changed their minds about in the last week.

* **Physical Books:** Ryan shares that he has rediscovered the joy of reading physical books, like "The Making of Prince of Persia," after being an all-digital reader.
* **Workflow Tools:** Colleen has switched from ChatGPT to Claude for generating JSON for her n8n automation workflows, finding Claude more reliable and less prone to inventing nodes or invalid connections.
* **Sharing Agentic Work:** Thorsten is starting to see more value in sharing and bookmarking agent conversation threads, especially after seeing a post by Mitchell Hashimoto detailing how he built a real feature with Amp.
* **The Future of SaaS:** Graham built a niche scene-planning tool for the show's producer to use with Sora, leading him to change his mind that "SaaS probably isn't dead." He now believes there will be a rise in many small, vertical SaaS products with specialized agent workflows.

### **Pro-Tips for Working with AI Agents**

The group shared several practical tips for getting the most out of coding agents.

* **Generate Test Data:** Thorsten demonstrated how he tasked an agent with seeding his local database with test data to try out a new feature. The agent was able to discover the database schema and create varied entries on its own.
* **Use `git diff` for Context:** A powerful tip from Thorsten is to start a new agent thread by feeding it the output of `git diff` or `git show commit`. This instantly provides the agent with rich context about which files are related and what changes have just been made.
* **Use Mock Data for UI:** Colleen shared her workflow of using a mock data file (like a `.ts` file) to rapidly iterate on UI design before worrying about the database setup.
* **Add Throwaway Test Controls:** Tim's pattern of adding temporary controls to toggle UI component states shows how "stupid work" can make frontend testing and review much easier for both humans and agents.
* **Know When *Not* to Use an LLM:** In an "anti-tip," Ryan explained his struggle with getting LLMs to reliably extract data from PDFs. He found a much better solution in Google's **Document AI**. This specialized tool allows you to fine-tune a model by tagging just a few sample documents, resulting in a cheap, fast, and highly accurate API for data extraction.

### **Automating the "Stupid Work"**

A recurring theme is using agents to eliminate "stupid work." Colleen provided a prime example: she built an `npm run commit` script that checks changed files, helps formulate the commit message, and scans the docs folder for pages that are now stale, should be archived, or need updates.

### **Deep Dive: Amp Slash Commands vs. Toolboxes**

Thorsten gave a master class on two powerful Amp features and their key difference:

* **Slash Commands:** These are triggered *by the human user*. A custom slash command (e.g., `/ship`) executes a script and feeds its output to the agent as your message. This is useful for starting a workflow, like running tests and linters.
* **Toolboxes:** These are tools given *to the agent*. You define a script that the agent can choose to run *on its own* when it deems it necessary. This allows the agent to have its own capabilities, like running commands in a background `tmux` session.
* **The Main Difference:** Who is the trigger? The **human** triggers slash commands; the **agent** triggers tools.

### **Final Thoughts & Community**

The episode wrapped up with a few final tips, including asking an agent questions you already know the answer to as a way to efficiently load context. The team also discussed Sonnet 4.5's tendency to create extra Markdown files, Steve Yegge's Beads memory-system idea, and prompt-library workflows in tools like Obsidian. Everyone is still figuring out the best way to work with these tools, and viewers are invited to join the conversation at **buildcrew.team** for daily standups and community support.

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=9lsg6dU7EZQ)

Build Crew: <https://buildcrew.team>
