---
title: "Manage GKE services with Cloud Operations"
sourceUrl: "https://www.youtube.com/watch?v=L6JnAhp3E-c"
videoId: "L6JnAhp3E-c"
capturedAt: "2026-08-24T21:34:21.708Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 206
---

## Transcript

[00:00:00] last time you saw how cloud operations can help you quickly isolate or eliminate infrastructure issues from a limited set of data you also saw how to quickly filter alerts to determine whether your service is being impacted by an infrastructure issue but how can you identify problems with the service itself and when there's a problem how can you quickly triage and mitigate it today i'm going to show you how to manage services running on gke with cloud operations welcome to engineering for reliability with google cloud does this look familiar it's really hard to determine if your service is actually healthy from infrastructure signals like these in chapter 6 of the sre book we say that your monitoring system should address two questions what's broken and why signals from your infrastructure may tell you why something is happening but they don't tell you anything about the reliability of your service itself as experienced by users to understand that you need good service level indicators or slis that measures service reliability and service level objectives or slos that set specific reliability targets

[00:01:04] we looked at how to configure an SLO for a service running on GKE by using load balancer metrics back in episode two we'll link to it if you didn't get a chance to watch it so what happens when there's a problem let's have a look at how cloud operations can help you figure out what to do let's start on the services overview page we can see that we have a service with an SLO alert firing in this case our service is running on GKE let's have a look at the GKE dashboard to see what's going on here we can see that we have an unhealthy SLO for this Kubernetes service let's have a closer look here's our SLO and the alert letting us know we're burning error budget right now we can also confirm that our SLI is severely degraded what could be happening in the metrics tab we can see that the pod name was recently changed and this seems to correspond to when the alert fired so something has changed let's try to figure out what let's go to the GKE workload screen and look at the workload that we're running

[00:02:07] when we look at the revision history for the workload we can see that a new revision was rolled out a few minutes before the alert fired this may be our culprit let's roll this release back and see if that restores our service back to a healthy state now that we've rolled back that release let's check the state of our workload under revision history we can confirm that we've rolled back to a known good version let's go to services and confirm that the error budget burn alert is no longer firing when we check the status of our service we can see that the SLO is no longer firing an alert and our SLI has also recovered so we were able to identify a problem with our service running on GKE determined that it was caused by a bad rollout and rolled back to a known good state to recover the health of our service thanks for joining me today we saw how cloud operations can help you quickly triage and mitigate application issues for services running on GKE i hope this helps you keep your applications reliable and keep your users happy thanks so much for watching don't forget to like and subscribe to never miss out

[00:03:10] on more engineering for reliability with google cloud see you soon you
