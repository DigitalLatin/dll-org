---
layout: blog
title: Update on the DLL Catalog
author: Samuel Huskey
permalink: /blog/update-dll-catalog.html
date: 2026-05-04
tags: Articles
aliases:
  - /blog/update-dll-catalog
---

*Reposted from <https://catalog.digitallatin.org/updates/next-stage-dll-catalog>*.

I'm writing to announce that the [DLL Catalog](https://catalog.digitallatin.org/) will transition to a static, archival resource over the next few months.

When the Digital Latin Library was launched over a decade ago, options for finding and reading Latin texts online were far more limited. Since then, a wide range of collections and tools has emerged, making it less useful to attempt a comprehensive catalog in this space. 

Indeed, anyone who has used this site knows that it is not comprehensive. During our period of major funding from the [Mellon Foundation](https://mellon.org/), we focused on compiling metadata for the [authority and work records](https://catalog.digitallatin.org/authority-records) that would be the foundation for the catalog's data model. We began to catalog individual item records (i.e., specific versions of texts), but the work of cleaning, processing, and reconciling those records with authority and work data proved significantly more demanding than collecting the metadata itself.

After the end of the funding period, we could not maintain staffing at the same level. Consequently, the DLL Catalog still has tens of thousands of individual metadata records that need to be processed.

I have experimented with [machine learning techniques to automate some of that effort](https://www.euppublishing.com/doi/10.3366/ijhac.2025.0353). I have learned a lot about machine learning in the process, but the results have been uneven. Although I plan to continue working on using AI and machine learning to resolve this and other bottlenecks, the time has come to redefine the long-term purpose of the DLL Catalog.

## First Step: Reduce Technical Overhead

Currently, the DLL Catalog's technology stack includes a [Drupal](https://drupal.org/) codebase, a [MariaDB](https://mariadb.org/) database, a [Solr](https://solr.apache.org/) search platform, an [Apache web server](https://httpd.apache.org/), and a virtual Linux server. This is a substantial amount of infrastructure for a single maintainer to support.

My plan is to transfer the DLL Catalog's content to a static site application (e.g., [Eleventy](https://www.11ty.dev/)) so that it will still be available for consultation. Search will be handled by a lightweight client-side solution (e.g., [Lunr](https://lunrjs.com/)), eliminating the need for a dedicated search server. That single step will eliminate most of the technical overhead and real costs of running the site.

## Second Step: Archive the DLL Catalog's Data

The second step will be to release a final version of this site's most valuable content: its authority and work records. I plan to serialize these records as [JSON-LD](https://json-ld.org/), [RDF](https://www.w3.org/RDF/), and [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) files and store them in a publicly available Git repository for reuse, analysis, and integration into other projects.

## The DLL Catalog Going Forward

After these steps are complete, development of the DLL Catalog will be frozen. The site will remain available for consultation, but no new content will be added for the foreseeable future.

The DLL itself will continue to exist. I will focus on its other major project, the [Library of Digital Latin Texts](https://ldlt.digitallatin.org/), which remains distinctive as a publisher of new critical editions of Latin texts. And, of course, [the video series on textual criticism](https://digitallatin.org/videos/) will remain available for free.