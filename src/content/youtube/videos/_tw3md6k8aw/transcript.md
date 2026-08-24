---
title: "Securing App Engine apps with IAP"
sourceUrl: "https://www.youtube.com/watch?v=_tw3md6k8aw"
videoId: "_tw3md6k8aw"
capturedAt: "2026-08-24T21:54:31.178Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 103
---

## Transcript

[00:00:01] [Music] in an existing GCP project click the Cloud Shell icon in the blue menu bar at the top to show the Cloud Shell frame at the bottom of your window type in gcloud projects list choose one of your projects to use for this quickstart and note the project ID type gcloud config set project followed by your project ID next get the code for the sample App Engine app from GitHub using the link included in the quickstart now go into the newly created directory and deploy this app with gcloud app deploy you now have an App Engine app running and you can check it in your browser to see that it's working after you're authenticated it greets you by name perfect next you'll add Identity-Aware Proxy in front of this app go to the navigation menu to security to Identity-Aware Proxy or click the link in the quickstart under all web services then under App Engine app you'll see the app you just deployed select it on the right side panel click add member add the email address of a

[00:01:06] person or group and choose IAP-secured Web App User for role under Cloud IAP then save use the IAP slider next to the App Engine app line to turn on IAP for this app that account will still see the same welcome if logged in while another account will get an access denied error as intended congratulations your application is now protected by Identity-Aware Proxy and is only accessible to the people you authorize you
