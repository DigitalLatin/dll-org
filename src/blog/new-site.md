---
layout: blog
title: New Sites
author: Samuel J. Huskey
permalink: /blog/new-site.html
date: 2023-08-05
image: /assets/images/new-site.png
tags: Articles
---

Visitors to this site will notice a lot of changes. For various reasons that I discuss in greater detail elsewhere ([Upgrades, part 1](/blog/upgrade-part-1.html) and [Upgrades, part 2](/blog/upgrade-part-2.html)), we have migrated this site from a dynamic content management system (Drupal 7) to a static site generator ([Eleventy](https://www.11ty.dev/)). That move has greatly simplified the management of this site, so I plan to post updates on the project more frequently going forward.

A less noticeable change has occurred at the site for the _Library of Digital Latin Texts_ ([https://ldlt.digitallatin.org/](https://ldlt.digitallatin.org/)). That site, too, has been migrated from a dynamic CMS to a static site generator. We hope that will make maintenance and upkeep of that site much simpler.

Unfortunately, the [DLL Catalog site](https://catalog.digitallatin.org/) has more complex technical requirement than the other two sites. It is currently running on Drupal 7, which will soon reach its end of life. All of the data have been migrated successfully to Drupal 9, but the site's theme layer (i.e., the way it looks) must be rebuilt entirely because Drupal 9 uses an entirely new front-end framework. I hope to work on that during the summer of 2024. In the meantime, all work on the DLL Catalog has been paused. Depending on the viability of Drupal 7 during this time of transition, the site might have to be locked down or taken offline entirely, but its data will be made available in JSON-LD and CSV form in a publicly accessible Git repository.

If you are interested in collaborating on the DLL Catalog project, please send a message to me at [huskey@ou.edu](mailto:huskey@ou.edu).
