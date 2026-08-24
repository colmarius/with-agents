---
title: "Creating custom metrics with OpenTelemetry"
sourceUrl: "https://www.youtube.com/watch?v=SCNObWlILqk"
videoId: "SCNObWlILqk"
capturedAt: "2026-08-24T21:34:49.486Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 280
---

## Transcript

[00:00:00] if you run your services on GKE or anywhere really you need to have a way to get some basic signals about service health at a minimum you want to collect the golden signals for your service traffic is a measure of how much demand the service is responding to usually measured in requests or queries per second saturation is a measure of how much of the available capacity the service is using errors or error rate should tell you the fraction of requests you're able to serve correctly or incorrectly and latency is a measure of how quickly you're able to serve your users you can read more about golden signals in the Monitoring Distributed Systems chapter of the SRE book we'll link to that below of course you need a way to capture this information for your services my name is Yuri i'm an SRE at Google Cloud and today i'm going to show you how to instrument your Python services to emit metrics like these with OpenTelemetry, an open source observability library welcome back to engineering for reliability we'll start with walking through the code to instrument your application then we'll have a look at how to query and

[00:01:03] use those metrics in Cloud Monitoring our example service is written in Python using the Flask framework it receives web requests and does some processing before responding so we'd like to track the request rate error rate and the distribution of the processing latency as always we'll link to the full code sample but here's how you can add metric instrumentation to it first we set up the exporter to send metric data to the OpenTelemetry Collector it's a dedicated component we'll use to collect telemetry and forward it onto Cloud Monitoring and we'll cover in more detail in our next episode next we define the meter provider including information about our service we'll be able to use to query our metrics next we define our actual metrics we'll use incrementing counters to track requests and errors and a histogram to track latency finally we use these metrics to record our data we increment the counters on requests and errors and record latency before returning and now we have metrics to represent the major signals of application health request and error count and a latency distribution

[00:02:04] now that our application is instrumented let's deploy it and have a look at the metrics our application is written in python and instrumented with open telemetry [Music] we use this docker file to build the container image we use this yaml file to deploy our image to a gke cluster and here are the three replicas next we create this yaml file and use it to deploy the open telemetry collector and here it is running in the same name space as our application finally we have some pods generating traffic against our service let's go to metrics explorer and first look for our total request metric we'll group it by service id this shows the request rate by pod name

[00:03:10] we can do the same for the failed request metric [Music] we can even have Cloud Monitoring calculate a ratio of the two for us to easily measure error rate for our application [Music] finally let's also graph request latency because this is a histogram metric we can use a heat map this will automatically calculate the average and tail latencies for our service [Music] so that's how you can deploy a service instrumented with OpenTelemetry to GKE and view its health metrics in Cloud Monitoring thanks so much for watching today we learned how to use OpenTelemetry to instrument our service to emit basic

[00:04:12] signals of application health like traffic and latency metrics and how to query them in cloud monitoring i hope this helps you to keep your applications reliable and your users happy don't forget to like and subscribe to never miss out on more engineering for reliability with google cloud see you soon [Music]
