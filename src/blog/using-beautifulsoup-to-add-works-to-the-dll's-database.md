---
layout: blog
title: Using BeautifulSoup to add works to the DLL's database
author: Samuel Huskey
permalink: /blog/using-beautifulsoup-add-works-dlls-database.html
image: /assets/images/beautiful-soup.png
date: 2017-10-11
tags: Articles
aliases:
  - /blog/using-beautifulsoup-add-works-dlls-database
---

A goal of the DLL is to catalog and provide links to all instances of Latin works on the internet. Some sites make it easy to download metadata in an open and accessible format such as JSON, BibTex, CSV, XML, etc. After working with that data offline to bring it into compliance with our metadata standard, we can import the information into our database, adding multiple works to the catalog all at once. Sometimes we run across sites that have great information, but it isn't available in a downloadable format. Not so long ago, we would have had to think long and hard about whether we really wanted that information, since extracting it was a laborious, time-consuming process of cutting and pasting. But now it's possible to write a program to automate the process. The point of this blog post is to demonstrate one of the many techniques we use to make the most of the information on the web.

While searching for Neolatin works to add to our catalog, I followed a link to <http://www.internetculturale.it>, a wonderful site that catalogs and provides access to publications from a variety of libraries, both traditional and virtual. I was pleased to find that they had cataloged many of the works in <http://www.bibliotecaitaliana.it>, a great site for digital versions of literature in both Italian and Latin. Even better, among the many search filters <http://www.internetculturale.it> provides is one for language, so I could limit the results to digital versions of Latin works available at <http://www.bibliotecaitaliana.it>. Well over a hundred works were available, each with a link to the lovely viewing app at <http://www.internetculturale.it>.

Unfortunately, there wasn't a way to download those records, so I had to use another tool. That's where BeautifulSoup enters the picture. [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) is a library that makes it possible to use the [Python](https://www.python.org) programming language to analyze and "scrape" data from web pages. In this case, I was able to write a program that queries <http://www.internetculturale.it> for Latin works in the Biblioteca Italiana collection, then cycles through each page of results, gathering information about the author, title, publisher, date, and URL for each work. After gathering and organizing all of that information, the program puts it all in a spreadsheet file, one column for each item in a record. Running the program takes less than ten seconds. Of course, writing the program took quite a bit longer—but not as long as copying and pasting all of those records would have. Moreover, automating the process greatly reduces the potential for errors in the data.

With the resulting spreadsheet, I can add all of those works to the database in about 20 seconds.

We're still a long way from opening our database for public consumption. We have a lot of work to do to finish cataloging and tidying up some of the records, but tools and techniques such as I have described here are making the process much easier. In the meantime, we're starting to make our research tools available in case they might be useful to others. You can see the program that I wrote at <https://github.com/DigitalLatin/library-automation>. If you have suggestions for improving it, please don't hesitate to contact me at [huskey@ou.edu](mailto:huskey@ou.edu?subject=Blog%20post%20on%20BeautifulSoup).
