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
* **Workflow Tools:** Colleen has switched from ChatGPT to Claude for generating JSON for her N8N automation workflows, finding Claude more reliable and less prone to "making up" nodes.
* **Sharing Agentic Work:** Thorsten is starting to see more value in sharing and bookmarking agent conversation threads, especially after seeing a post by Mitchell Hashimoto detailing how he built a real feature with Amp.
* **The Future of SAS:** Bill built a niche tool for a video producer to use with Sora, leading him to change his mind that "SAS (Software as a Service) probably isn't dead." He now believes there will be a rise in many small, vertical SAS products.

### **Pro-Tips for Working with AI Agents**

The group shared several practical tips for getting the most out of coding agents.

* **Generate Test Data:** Thorsten demonstrated how he tasked an agent with seeding his local database with test data to try out a new feature. The agent was able to discover the database schema and create varied entries on its own.
* **Use `git diff` for Context:** A powerful tip from Thorsten is to start a new agent thread by feeding it the output of `git diff` or `git show commit`. This instantly provides the agent with rich context about which files are related and what changes have just been made.
* **Use Mock Data for UI:** Colleen shared her workflow of using a mock data file (like a `.ts` file) to rapidly iterate on UI design before worrying about the database setup.
* **Know When *Not* to Use an LLM:** In an "anti-tip," Ryan explained his struggle with getting LLMs to reliably extract data from PDFs. He found a much better solution in Google's **Document AI**. This specialized tool allows you to fine-tune a model by tagging just a few sample documents, resulting in a cheap, fast, and highly accurate API for data extraction.

### **Automating the "Stupid Work"**

A recurring theme is using agents to eliminate "stupid work." Colleen provided a prime example:
She built an `npm run commit` script that helps her automate documentation. When she runs the command, the script not only helps formulate the commit message but also scans her project to see which documentation files are now outdated based on the code she changed, reminding her to update them.

### **Deep Dive: Amp Slash Commands vs. Toolboxes**

Thorsten gave a master class on two powerful Amp features and their key difference:

* **Slash Commands:** These are triggered *by the human user*. A custom slash command (e.g., `/ship`) executes a script and feeds its output to the agent as your message. This is useful for starting a workflow, like running tests and linters.
* **Toolboxes:** These are tools given *to the agent*. You define a script that the agent can choose to run *on its own* when it deems it necessary. This allows the agent to have its own capabilities, like running commands in a background `tmux` session.
* **The Main Difference:** Who is the trigger? The **human** triggers slash commands; the **agent** triggers tools.

### **Final Thoughts & Community**

The episode wrapped up with a few final tips, including asking an agent questions you already know the answer to as a way to efficiently load context. The team highlighted that everyone is still figuring out the best way to work with these new tools and invited viewers to join the conversation at **buildcrew.team** for daily standups and community support.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=FJ9DWU7EOkM&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA)

Build Crew: <https://buildcrew.team>
