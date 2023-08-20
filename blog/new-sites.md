---
layout: blog
title: New Sites
author: Samuel J. Huskey
permalink: /blog/new-site.html
date: 2023-08-20
image: /assets/images/new-site.png
tags: Articles
---

Visitors to this site will notice a lot of changes. For various reasons that [I discuss in greater detail elsewhere](/blog/technical-side.html), I have migrated this site from a dynamic content management system (Drupal 7) to a static site generator ([Eleventy](https://www.11ty.dev/)).

This move has greatly simplified site management tasks and content creation. I can compose and edit content in [Markdown](https://www.markdownguide.org/), a lightweight language that lets writers focus on writing without getting distracted by layout and design. I can test and develop the site locally on my computer instead of having to run a separate server, virtual machine, or container. For the front end of the site, I selected a starter template based on Bootstrap 5, which means that I didn't have to put a lot of effort into making the site viewable on screens of different sizes. I'm not much of a front-end designer, but I did put some thought into the look of this new site: the background image is a page from a 15th-century manuscript of Lucan's _Bellum Civile_, and the color palette is adapted from it. As for deployment, I can just incorporate that step into my existing Git workflow, since I can host this site directly from its repository on Github. That means that I have one less site to manage on the DLL's server. It also means that I will be able to post updates on this project more frequently.

A less noticeable change has occurred at the site for the _Library of Digital Latin Texts_ ([https://ldlt.digitallatin.org/](https://ldlt.digitallatin.org/)). That site, too, has been migrated from a dynamic CMS ([Django](https://www.django-cms.org/en/)) to a static site generator ([Jekyll](https://jekyllrb.com/)). Most of the credit for that migration goes to Hugh Cayless. He and I hope that it will make maintenance and upkeep of that site much simpler.

Unfortunately, the [DLL Catalog site](https://catalog.digitallatin.org/) has more complex technical requirements than the other two sites. It is currently running on Drupal 7, which will soon reach its end of life. All of the data have been migrated successfully to Drupal 9, but the site's theme layer (i.e., the way it looks) must be rebuilt entirely because Drupal 9 uses an entirely new front-end framework ([Twig](https://twig.symfony.com/)). Fortunately, Twig is similar to [Liquid](https://shopify.github.io/liquid/) and [Nunjucks](https://mozilla.github.io/nunjucks/), the template languages for Jekyll and Eleventy. I hope to work on that project during the summer of 2024. In the meantime, all work on the DLL Catalog has been paused. Depending on the viability of Drupal 7 during this time of transition, the site might have to be locked down or taken offline entirely, but its data will be made available in JSON-LD and CSV form in a publicly accessible Git repository.

If you are interested in collaborating on (and/or funding?) the development of the next generation of the DLL Catalog, please send a message to me at [huskey@ou.edu](mailto:huskey@ou.edu).
