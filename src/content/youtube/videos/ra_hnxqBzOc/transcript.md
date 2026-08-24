---
title: "How to use Cloud DLP - Getting Started with Cloud Security Command Center"
sourceUrl: "https://www.youtube.com/watch?v=ra_hnxqBzOc"
videoId: "ra_hnxqBzOc"
capturedAt: "2026-08-24T21:34:11.021Z"
channel: "Google Cloud Tech"
language: "en"
kind: "caption"
durationSeconds: 242
---

## Transcript

[00:00:00] [MUSIC PLAYING] SPEAKER: Cloud Data Loss Prevention, DLP, helps you better understand and manage sensitive data and PII. It provides fast, scalable classification and redaction for sensitive data elements like credit card numbers, names, social security numbers, US and selected international identifying numbers, phone numbers, and GCP credentials. Cloud DLP integrates natively with the Cloud Security Command Center. When you use Cloud DLP to scan your GCP storage repositories, it can send results directly to the Cloud SCC. Dashboard. Before you can send Cloud DLP scan results to Cloud SCC, you must set up the following components. Set GCP storage repositories, enable cloud DLP, set Cloud IAM roles, and enable Cloud DLP as a security source for Cloud SCC.

[00:00:55] Step one, set GCP storage repositories. You can choose whether you want to scan your own GCP storage repository or an example one. If you want to scan your own existing cloud storage bucket, BigQuery table, or Cloud Data [? Store ?] [? Client, ?] first open the project that the repository is in. In the next steps, you'll enable Cloud DLP for this project and its organization. After you open the project you want to use, proceed to setting up some Cloud IAM roles. Step two, enable Cloud DLP. To enable Cloud DLP for the project you want to scan, the project must be within the same organization where you've enabled cloud SCC. It also must contain the Cloud Storage Bucket, BigQuery table, or Cloud Data [? Store ?] [? Client ?] you want to scan. Head to APIs and Services in the left-hand menu, then Library.

[00:01:47] Search for Cloud DLP API and enable it. Step three, set Cloud IAM roles. You need to enable some Cloud IAM roles. This section requires you to have the organization administrator IAM role. Click on the organization dropdown list and select the organization for which you want to enable Cloud SCC. Find the user name in the member column or add a new user. Add the roles Security Center Admin and DLP Jobs Editor, and then click Save. Step four, enable Cloud DLP as a security source for Cloud SCC. Go to the GCP console Cloud SCC page while in your organization node. Click Settings in the top right corner of the page. Select the Security Sources tab. Under Enabled, click the toggle next to Cloud DLP Data Discovery.

[00:02:39] Now, findings for Cloud DLP will display in the findings card on the Cloud SCC dashboard. Cloud DLP uses information types or info types to define what it scans for. An info type is a type of sensitive data, such as name, email address, telephone number, identification number, credit card number, and so on. You can find out more about it in the Cloud DLP documentation. In our environment, we see that there have been over 60 Cloud DLP findings in our organization, such as age, credit card numbers, and domain names. Drilling in, let's expand the credit card finding. We can see that it first occurred on March 24. And in the asset name, sec-demos-company-hr-demo, the bucket in which the PII was flagged.

[00:03:27] We can then click on the external URI source and see that over 6,000 PII findings were related to it. Next, we can perform additional analysis of this data through BigQuery, or we can remove this resource and remediate these findings by contacting the owner. Congratulations. You have enabled a Cloud DLP for Cloud SCC and learned how to respond to a finding from it. [MUSIC PLAYING]
