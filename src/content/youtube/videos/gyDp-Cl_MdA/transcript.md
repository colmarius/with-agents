---
title: "Cloud logging"
sourceUrl: "https://www.youtube.com/watch?v=gyDp-Cl_MdA"
videoId: "gyDp-Cl_MdA"
capturedAt: "2026-08-24T21:53:46.160Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 242
---

## Transcript

[00:00:00] one thing that makes google cloud production ready and ops friendly is the broad range of management monitoring and alerting tools that it comes with while tools are no magic wand and do not replace devops or sre practices you should really watch this video to better understand what they're all about [Music] now before i start talking about specific tools let me mention that these products work best in the context of a team applying sre or site reliability engineering principles there's not enough time to delve into this but you'll find links to sre literature on service level objectives or slos error budget and blameless postmortems in the video description below the hello world for devops tools is arguably the ability to collect read and parse logs across a distributed infrastructure involving multiple products cloud logging

[00:01:02] stores logs across all google cloud products and provides you with search monitoring and alerting capabilities it also comes with an api to ingest custom log data from any source because it is a fully managed service there are no hard drives to provision or petitions to resize and it can ingest application and system log data from thousands of sources simultaneously even better you can analyze all the log data as it arrives in real time without having to worry about synchronizing your server clocks or managing time zones logs are made up of entries created by google cloud services third-party applications or by your own code the message carried by the log entry is called the payload and it can be a simple string or structured data examples of log entries can include details of a compute engine instance starting up a new file being uploaded to a bucket a call made to a machine learning api

[00:02:06] or anything that your application writes to the standard or error outputs each log entry indicates where it came from by including the name of the monitored resource using the console's logs viewer you can query logging data and obtain a precise subset of all the log entries in your project the query will let you find entries for a given resource from different namespaces based on the log level and of course by timestamp note that if using the console isn't your thing these queries are also accessible from the logging api as well as from the command line storing logs is free for the first gigabytes for every project and then comes at 50 cents per additional gigabyte an alerting policy can be set up to trigger when your monthly logs ingested exceeds a given limit but you can also define excluded logs so that some are not stored in the first place the logs viewer and the logs api are powerful tools on their own

[00:03:09] but you can also decide to export your logs to cloud storage to bigquery or to pop sob which then in turn redirects them to virtually any log storage system exporting logs is likely something that you will want for archival or potentially legal purposes but also maybe to benefit from more advanced analytics there's even more to logs but hopefully this gives you a good sense of what every google cloud product can rely on so now you know how logs are aggregated across all of google cloud and how to navigate them if you like this video please like subscribe comment share and look forward to more google cloud essentials videos you
