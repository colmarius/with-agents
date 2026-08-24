---
title: "Locating and querying public datasets"
sourceUrl: "https://www.youtube.com/watch?v=4-rZd5DwEww"
videoId: "4-rZd5DwEww"
capturedAt: "2026-08-24T21:54:37.825Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 209
---

## Transcript

[00:00:01] [Music] BigQuery is a fully managed data warehouse that provides incredibly fast SQL analytics over large data sets BigQuery provides more than 100 data sets publicly available to analyze covering a variety of data types from historical weather to taxi trips taken in New York City we try to offer utility data sets such as the U.S. Census data so that customers can join these data without needing to import them while these data sets are being used in vital decision making across enterprises they are also a great place to get started with analyzing data in BigQuery get started by navigating to the Google Cloud console at console.cloud.google.com if you are new to Google Cloud and BigQuery use the video linked in the description below to set up a new project in the BigQuery sandbox no credit card is required open the navigation window and select Marketplace in the left-hand menu click to filter by data sets each tile represents a public data set

[00:01:03] for example the American Community Survey is an ongoing survey that collects social economic housing and demographic data by surveying more than three and a half million U.S. households annually in addition to being used in governmental funding decisions private businesses also find this data useful in their own strategic decision making clicking on the tile will provide you more detail on the data set including a description of the data set sample queries and metadata showing information such as when the data set was last updated and if there is a regular update frequency to access the data set click the view data set button this opens a new console window and brings you to the data set in the BigQuery web UI you can see each of the tables available within the data set in fact you can scroll through the other public data sets in the program here as well back to the ACS data set click on a table and you will see the schema or columns available in that table along with the table details including the size and number of rows and a preview of the first few rows of

[00:02:06] data click query table and a template will appear in the query editor which already references the selected table if you'd rather start with one of the sample queries you can also click the run this query button from the details page you are looking at earlier let's look at this one how has King County rent cost as a share of median income changed between 2011 and 2017 in the query editor click run and in just a few seconds you have a table showing how the rent as a percentage of median income has changed for each ZIP code in the county looking to analyze data without writing SQL just highlight the table you wish to analyze in the left-hand nav click export and choose explore in Data Studio Google's data visualization tool BigQuery charges for storage and offers pay-as-you-go on-demand pricing or flat rate pricing for predictability when querying data you can also take advantage of the free tier option to quickly get started use the BigQuery sandbox to stay safely

[00:03:10] within the free tier more info on how to get started in the BigQuery sandbox linked in the description below happy analyzing [Music]
