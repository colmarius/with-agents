---
title: "How to classify and redact sensitive data"
sourceUrl: "https://www.youtube.com/watch?v=LxDHd0MsFXI"
videoId: "LxDHd0MsFXI"
capturedAt: "2026-08-24T21:54:47.238Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 165
---

## Transcript

[00:00:01] [Music] welcome to the quickstart tutorial for the Data Loss Prevention API in this video we're going to walk through how to get started with the DLP API which allows you to discover classify and protect your most sensitive data to start make sure you have a Google Cloud project set up in the Google Cloud Platform console with billing enabled you can either create a new project or use an existing project next enable the DLP API in the navigation menu click on APIs and Services click the enable APIs and services button at the top search for Data Loss Prevention and select it from the results on the DLP API page click enable to enable it for the project now set up a service account for authentication purposes in the navigation menu click on IAM and Admin service accounts click create service account at the top give your service account a name

[00:01:03] and click create give your service account the role of Cloud DLP User click continue and then done on the right side of your screen click the three dots icon for the service account you just created and click create key then click create this will download a service account key JSON file to your computer from command line set the environment variable GOOGLE_APPLICATION_CREDENTIALS to point to the JSON file you just downloaded now you will download some sample code to your computer from command line using Git once the repository has been cloned navigate to Node.js DLP samples from here install app dependencies by running npm install this will download various packages including the DLP client library for Node.js next set the environment variable GCLOUD_PROJECT to your Google Cloud project ID

[00:02:06] now run the code in inspectString.js this code inspects an input string with the DLP API for sensitive data and logs it to our console for this example the script finds two pieces of potentially sensitive data a name and an email address and that's it make sure to check out the rest of our DLP API documentation to learn more about how to discover classify and protect your most sensitive data [Music] you
