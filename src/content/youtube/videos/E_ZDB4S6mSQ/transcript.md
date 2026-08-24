---
title: "Build a serverless application integration with Workflows"
sourceUrl: "https://www.youtube.com/watch?v=E_ZDB4S6mSQ"
videoId: "E_ZDB4S6mSQ"
capturedAt: "2026-08-24T21:54:50.738Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 204
---

## Transcript

[00:00:01] [Music] welcome to the quickstart tutorial for Workflows in this video we're going to walk through how to get started with Workflows which allows you to create serverless workflows that reliably perform a series of related tasks in an order you define to start make sure you have a Google Cloud project set up in the Google Cloud Platform console with billing enabled you can either create a new project or use an existing project next enable the Workflows API in the navigation menu click on APIs and Services click the enable APIs and services button at the top search for Workflows and select it from the results on the Workflows API page click enable to enable it for the project set up a service account to grant permissions needed by your workflow to call services in the navigation menu click on IAM and Admin

[00:01:03] service accounts click create service account at the top give your service account a name and click create give your service account the role of Logging Logs Writer click continue and then done navigate to the Workflows page in the Cloud console it will be one of the options in the tools section on the Workflows page click create provide a name for the workflow such as my first workflow select us-central1 for the region and select the service account you created earlier for service account click next in the workflow editor we're going to use the example workflow this workflow fetches the current date

[00:02:05] and time from a deployed Cloud Function it then takes the current day of the week and sends it to the Wikipedia API to fetch relevant articles on Wikipedia about the current day of the week click deploy now that your workflow has been successfully deployed you can go ahead and test it out after deploying the workflow you are brought to its details page click the execute button at the top and then click execute this will execute your new workflow and print out the final results at the bottom you can see that some Wikipedia articles related to today's day of the week include Thursday Night Football and Thursday Afternoon as you can see Workflows allows you to connect APIs with serverless computing you can also use Workflows to connect custom services built on products like Cloud Functions and Cloud Run GCP services such as Cloud Firestore and any APIs available on the internet and that's it congratulations on creating deploying

[00:03:07] and executing your first workflow make sure to check out the rest of our Workflows documentation to learn more you
