---
title: "Error reporting"
sourceUrl: "https://www.youtube.com/watch?v=GANi9eRxhHs"
videoId: "GANi9eRxhHs"
capturedAt: "2026-08-24T21:53:50.151Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 182
---

## Transcript

[00:00:00] in a previous episode we went over how logs are aggregated across all of gcp and how to navigate them in this episode we'll talk about error reporting a google cloud tool available to help you better capture errors categorize them and manage their life cycle [Music] application level errors happen sometimes even in production and the last thing you want is scrolling through your logs to find the relevant information instead cloud logs reporting aggregates and displays errors produced in your running cloud services it automatically groups together error and critical level errors from your application into groups and can notify you if a new error group appears this works across many languages and is supported out of the box by cloud functions app engine cloud run compute engine and gke any of your application errors can be surfaced using error reporting

[00:01:05] provided that they use basic formatting or that they simply call the error reporting api errors are grouped and deduplicated by analyzing their stack traces so you only see one entry per error type each error entry provides a summary that helps you determine when the application started to produce the error how often it occurred and how recently it occurred one thing i really like is the ability to set a resolution status for each error it defaults to open and can be set to acknowledged resolved or simply muted errors can also be linked to an issue in a bug tracking system this is really powerful and thankfully you do not need to stare at the console in search of potential errors instead you can be notified in real time via email or my favorite via the google cloud mobile app but maybe the most important thing about cloud era reporting is that it requires zero setup for

[00:02:06] all of google cloud's serverless products and it's really just a few simple steps for other products if you are a developer and if restarting or redeploying your application just to incorporate some new logging statements sounds painful then be sure to keep your eyes open for an upcoming episode for a truly unique solution to this problem using debug log points in a future episode we'll also talk about tools available to help you better understand the problem that led to any of those errors and most importantly how to fix them if you like this video please like subscribe comment share and look forward to more google cloud essentials videos [Music]
