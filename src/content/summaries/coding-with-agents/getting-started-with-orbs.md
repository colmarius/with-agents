---
title: "Getting Started With Orbs"
resourceId: 197
date: "2026-09-25"
---

Thorsten from the Amp team shows how he prepares an existing GitHub repository for orbs, the remote virtual machines in which Amp runs agent threads. Instead of configuring the environment himself, he asks an agent to install the app's dependencies, write committed setup files, check that the app works, and then confirm that fresh orbs start from the prepared state.

This summary is based on the English auto-generated captions. It is an Amp product demonstration on one small Laravel newsletter app. Statements about orb behavior, cost, and startup speed are the vendor's descriptions and on-screen observations, not measured results.

### Key points

- **An orb is a disposable machine that Amp snapshots after setup.** Thorsten creates an Amp project from an existing GitHub repository; a project can include several repositories, such as a separate client app. When an agent thread starts, Amp creates an orb for it. Dependencies the agent installs there do not change the developer's own machine. After setup finishes, Amp takes a snapshot automatically, and later orbs start from that snapshot instead of reinstalling everything. [00:00–01:49](https://www.youtube.com/watch?v=1Niex0BvwQk&t=0s), [02:41–03:41](https://www.youtube.com/watch?v=1Niex0BvwQk&t=161s)
- **The agent does the setup work.** Amp pre-fills a prompt asking the agent to optimize the repository for orbs and to load an orb setup skill that ships with Amp. The agent inspects the app and finds that it is a Laravel app using SQLite, so it needs no separate database server. npm is already in the base orb, but PHP and Composer, PHP's package manager, are missing. [01:49–03:41](https://www.youtube.com/watch?v=1Niex0BvwQk&t=109s)
- **Three committed files define the environment.** `.agents/setup` installs dependencies. Amp runs it while preparing an orb and takes a snapshot after it succeeds; in the demo, a later orb restores that snapshot instead of rerunning the installation. A resume script runs when an idle orb wakes. Thorsten says an orb sleeps after several idle minutes and costs nothing while asleep. In this app, the resume script is only a placeholder, because nothing needs restarting. A `services.yaml` file declares the development server and the portal, a browser view of the running app. The setup applies to future orbs only after the commit reaches the default branch. [03:41–06:23](https://www.youtube.com/watch?v=1Niex0BvwQk&t=221s)
- **Check the environment by using the running app.** When the sign-in button fails in the portal, Thorsten asks the agent to fix it. The agent opens the same development server in a browser and finds that Laravel did not recognize the HTTPS header from the portal's proxy. It changes the app's proxy configuration and a test, reruns the tests, and checks the page in the browser again. Thorsten then signs in with the seeded demo account and has the agent commit and push. He describes the session as unscripted. [06:23–09:10](https://www.youtube.com/watch?v=1Niex0BvwQk&t=383s)
- **Test the setup with fresh threads.** A second thread runs the new setup script, installing PHP, and Amp then takes a snapshot. The agent starts the server with `amp orb services ensure`, which reads `services.yaml`, then signs in and returns screenshots of the landing page and admin dashboard. [09:10–12:06](https://www.youtube.com/watch?v=1Niex0BvwQk&t=550s) A third thread restores the cached snapshot and installs nothing before the agent starts. Thorsten guesses that it starts in about half the time of the previous orb, and he says it could be made faster later. The agent starts the services, signs in, and returns a screenshot of the admin panel. [12:06–14:39](https://www.youtube.com/watch?v=1Niex0BvwQk&t=726s)

### Limits

The demo covers one app with a local SQLite database. It does not show projects that need secrets, external services, or larger dependency builds. The time saved by snapshots is Thorsten's estimate during the recording. His closing view that agents are "really good" at making environments work end to end is a vendor assessment from this one example. [13:48–14:39](https://www.youtube.com/watch?v=1Niex0BvwQk&t=828s)

Full video: <https://www.youtube.com/watch?v=1Niex0BvwQk>
