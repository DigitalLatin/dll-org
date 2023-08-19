---
layout: blog
title: Upgrades, part 2
author: Samuel J. Huskey
permalink: /blog/upgrades-part2.html
date: 2023-08-19
image: /assets/images/upgrades.png
tags: Articles
---

As I wrote in the [first part of this post](/blog/upgrades-part1.html), after almost a decade of service, pretty much every component of the DLL's technology stack had reached its end of life (EOL) by 2022. Having set up a new server and transferred everything to it, I started the work of upgrading our sites to the new versions of their respective CMS's, but that arduous process caused me to take a step back to consider the efficiency, stability, and sustainability of the DLL's applications and workflows. In this post, I'll explain what I learned from that process and where things stand now.

## KISS (Keep It Static, Silly!)

The main site for the DLL ([https://digitallatin.org/](https://digitallatin.org/)) is pretty simple: a few informational pages and a blog. Since most of that content does not change, a static site generator is preferable to a dynamic content management system like Drupal, which has a complex ecosystem of technologies that require special knowledge and skills to maintain.

I selected 11ty ([Eleventy](https://www.11ty.dev/)) for the DLL's main site because it has excellent documentation and a large user community. It's also simple to work on the site locally (i.e., on my laptop). I can write all of the content in Markdown, my preferred format for writing almost everything these days. The Git workflow for tracking changes and pushing the site to the host repository mirrors the workflow in use in other parts of the DLL project. What's more, the site can now be hosted directly from its repository on [GitHub](https://github.com/), which means one less item to maintain on our server. Best of all, 11ty has some good starter templates for designing the front end. The one I selected for <https://digitallatin.org/> is [based on Bootstrap 5](https://mandrasch.github.io/11ty-plain-bootstrap5/), a framework I was already familiar with from my work building the theme for the [Society for Classical Studies](https://classicalstudies.org/)' site. That makes responsive design a breeze.

Still, transferring the existing content from Drupal 7 to 11ty did require some effort. If you're interested, you can read more about the process on my personal blog at <https://sjhuskey.info/posts/drupal-to-11ty/>.

Hugh Cayless and I used similar reasoning in making the decision to move the _Library of Digital Latin Texts'_ site from Django to [Jekyll](https://jekyllrb.com/), another static site generator. Since the content of <https://ldlt.digitallatin.org/> does not change frequently, it didn't make sense to use a full-blown CMS for it, so we (Hugh, mostly) rebuilt the functionality for converting the TEI XML files for LDLT editions into HTML files. Now <https://ldlt.digitallatin.org/> is also hosted from a remote Git repository on Github.

If you're wondering why we didn't use the same static site generator for both sites, we're evaluating which one serves our needs more effectively, 11ty or Jekyll. We'll eventually make the switch to using one or the other for both sites.

## The Catalog

Having found simpler solutions for the DLL's main site and the LDLT's site, I can now focus on updating the [DLL Catalog's site](https://catalog.digitallatin.org/). All of the data have been migrated to the format required by Drupal 9, and upgrading our version of [Solr](https://solr.apache.org/) will not be a major ordeal. The problem is, again, the front end. With enough time, I can recreate the look of the current site, perhaps even with some improvements. At that point, we can restart development of the content of the catalog, with the goal of improving its usefulness for Latin scholars. Above all, I'm looking forward to taking advantage of the improved Linked Open Data functionality of Drupal 9, including an API for publishing the site's data via [GraphQL](https://www.drupal.org/project/graphql).

But, as I said, all of that depends on rebuilding the front end, which will have to wait for either new funding, so that I can pay an interface designer, or a break in my other projects, so that I can rebuild the theme from scratch.

## The Moral

The moral of these posts is that Digital Humanities research and scholarship requires a lot more than just domain-specific knowledge. I continue to teach and do research in my original scholarly domain (Greek and Latin Literature), but through my involvement with the DLL I have also become a [full-stack developer](https://www.w3schools.com/whatis/whatis_fullstack.asp), responsible for maintaining a Linux server, trouble-shooting and developing back-end functionality (MySQL, Solr, PHP), designing and implementing front-end interfaces (JavaScript, CSS, Bootstrap), and staying current with technology in general. I don't regret any of that, but I do think it's important to document the level of effort, training, and special knowledge and skill required to keep DH projects from dying on the vine just because a component has reached its end of life.

In short, it is one thing to leverage grant funding and institutional resources to build a new digital resource; it is quite another to keep that resource up to date and in good working order. We need reliable and fair ways of recognizing and evaluating the contributions that maintenance, upkeep, and ongoing technical development make to research, scholarship, and creative activity in the Digital Humanities.
