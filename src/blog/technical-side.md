---
layout: blog
title: The Technical Side of the DLL
author: Samuel J. Huskey
permalink: /blog/technical-side.html
date: 2023-08-19
image: /assets/images/sam-albury-oA7MMRxTVzo-unsplash.jpg
tags: Articles
---

Visitors to this site may have had the impression that the DLL was dormant, since the [last post](http://localhost:8080/blog/update-2021.html) appeared in 2021. The truth is that we've been very busy evaluating our choices about the technology we use for the different parts of this project, not to mention [publishing and presenting our work](/research/index.html).

This post is about what we have done and what we are doing to update and upgrade the DLL's technical components. This is off the topic of Latin texts, I know, but it's important to keep the technical work of Digital Humanities research, scholarship, and creative activity in view to demonstrate to our peers in other fields what goes on behind the scenes.

## Background

When the DLL project was launched [over a decade ago](https://www.mellon.org/grant-details/digital-latin-library-9512), dynamic content management systems were as popular as they were plentiful. Since I had experience with [Drupal](https://drupal.org/) 6 and 7, it seemed reasonable to use it for the DLL's main, informational site. Because Drupal is also in wide use at libraries around the world, it was a good choice for the DLL's catalog site, too. We decided to use [Django](https://www.django-cms.org/en/) for the _Library of Digital Latin Texts_ because we needed more control over the front end than Drupal would give us.

Having worked with Drupal previously, I designed and built the content types, taxonomies, and views for the main site and catalog, but we used grant funding to hire [a firm](https://fionta.com/) to design the user interface.

The same grant funding also allowed us to hire an [independent consultant](https://www.alextheward.com/) to set up and maintain the virtual server that OU's Office of the Vice President for Research (now the [Office of the Vice President for Research and Partnerships](https://www.ou.edu/research-norman)) generously made available to us free of charge for the life of the project. Since the consultant was available only during the grant period, I took the opportunity to learn how to maintain the server so that it would not be neglected after the funding ended.

## EOL

Everything was working well until various components of the DLL's technology stack began reaching their end of life (EOL) dates. Both the main site and the catalog were running on Drupal 7, which had been released in 2011. Development on Drupal 8 began in 2015, but it would not be viable for use in production for another couple of years at least. Since it was being built on an entirely new framework, I knew that the upgrade process would be particularly challenging, so I kept my eye on that project while staying current with updates and patches for Drupal 7.

Of course, with a new framework come new technical requirements for supporting it. The operating system, database management system, and PHP version running on the server that OU was hosting for us could not be upgraded to the specifications listed for the new version of Drupal. There had been several changes in the administration at OU, including a new [Vice President for Research and Partnerships](https://www.ou.edu/research-norman/about/senior-staff/tomas-diaz-de-la-rubia) and a new Chief Information Officer at OU. With so many changes, it was only natural that there would also be a new way of hosting digital research projects. Fortunately, we were able to negotiate a great deal with the [OU Supercomputing Center for Education & Research](https://www.ou.edu/oscer) (OSCER) to host a new virtual server in [OU's Research Cloud](https://www.ou.edu/oscer/resources/ourcloud--ou---research-cloud). Part of that deal was that I would continue being the system administrator for the DLL.

## New Server, New Directions

After I set up the new server and transferred everything to it, it was time to start working on migrating the Drupal sites to the new version. By then, Drupal 9 had been released, so our sites were at this point _two_ versions behind. Fortunately, migrating the data was not too difficult. The bigger problem was that the templating engine ([Twig](https://twig.symfony.com/)) for Drupal 8 and 9 was entirely new, and that meant that the interface had to be rebuilt entirely from scratch. I didn't have access to another $45,000 to pay designers to do the work, so I had to dust off my design skills, which have never been more than serviceable.

Before donning the cap of Front-end Developer, I decided to step back and reassess the technical requirements of the DLL project as a whole. Trying to keep pace with developments in Linux, Drupal, Django, and other technologies was taking time away from the philological mission of the DLL. The time had come to make some decisions about the efficiency, stability, and sustainability of our technology stack.

## KISS (Keep It Static, Silly!)

The main site for the DLL ([https://digitallatin.org/](https://digitallatin.org/)) is pretty simple: a few informational pages and a blog. Most of that content does not change, so it is a good candidate for a static site generator. I did some research into the various options available and selected 11ty ([Eleventy](https://www.11ty.dev/)) for the following reasons:

- It has excellent documentation and a large user community.
- It's simple to work on the site locally. I just run `npm run dev` and I have a live version of the site running on my laptop.
- I can write all of the content in [Markdown](https://www.markdownguide.org/), my preferred format for writing almost everything these days.
- The Git workflow for tracking changes and pushing the site to the host repository mirrors the workflow in use in other parts of the DLL project.
- The site can be hosted directly from its repository on [GitHub](https://github.com/), which means there's less to maintain on our server.
- Best of all, 11ty has some good starter templates for designing the front end. The [one I selected](https://mandrasch.github.io/11ty-plain-bootstrap5/) is [based on Bootstrap](https://getbootstrap.com/), a framework I was already familiar with from my work building the theme for the [Society for Classical Studies](https://classicalstudies.org/)' site. That makes responsive design much easier.

Still, transferring the existing content from Drupal 7 to 11ty did require some effort. If you're interested, you can read more about the process on my personal blog at <https://sjhuskey.info/posts/drupal-to-11ty/>.

Hugh Cayless and I used similar reasoning in making the decision to move the _Library of Digital Latin Texts'_ site from Django to [Jekyll](https://jekyllrb.com/), another static site generator. Since the content of <https://ldlt.digitallatin.org/> does not change frequently, it didn't make sense to use a full-blown CMS for it, so we (Hugh, mostly) rebuilt the functionality for converting the TEI XML files for LDLT editions into HTML files. Now <https://ldlt.digitallatin.org/> is also hosted from a remote Git repository on Github.

If you're wondering why we didn't use the same static site generator for both sites, we're evaluating which one serves our needs more effectively, 11ty or Jekyll. We'll eventually make the switch to using one or the other for both sites.

## The Catalog

Having found simpler solutions for the DLL's main site and the LDLT's site, I can now focus on updating the [DLL Catalog's site](https://catalog.digitallatin.org/). All of the data have been migrated to the format required by Drupal 9, and upgrading our version of [Solr](https://solr.apache.org/) will not be a major ordeal. The problem is, again, the front end. With enough time, I can recreate the look of the current site, perhaps even with some improvements. At that point, we can restart development of the content of the catalog, with the goal of improving its usefulness for Latin scholars. Above all, I'm looking forward to taking advantage of the improved Linked Open Data functionality of Drupal 9, including an API for publishing the site's data via [GraphQL](https://www.drupal.org/project/graphql).

But, as I said, all of that depends on rebuilding the front end, which will have to wait for either new funding, so that I can pay an interface designer, or a break in my other projects, so that I can rebuild the theme from scratch.

## The Moral

The moral of this post is that Digital Humanities research and scholarship sometimes requires a lot more than domain-specific knowledge. I continue to teach and do research in my original scholarly area of expertise (Greek and Latin Literature), but through my involvement with the DLL I have also had to become a [full-stack developer](https://www.w3schools.com/whatis/whatis_fullstack.asp), responsible for maintaining a Linux server (first [CentOS](https://www.centos.org/), now [RHEL](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)), trouble-shooting and developing back-end functionality (MySQL/MariaDB, Solr, PHP), designing and implementing front-end interfaces (JavaScript, CSS, Bootstrap), and staying current with technology in general. I don't regret any of that, but I do think it's important to document the level of effort, training, and special knowledge and skills required to keep DH projects from dying on the vine just because a component has reached its end of life.

In short, it is one thing to leverage grant funding and institutional resources to build a new digital resource; it is quite another to keep that resource up to date and in good working order. I would like to work toward developing reliable and fair ways of recognizing and evaluating the contributions that maintenance, upkeep, and ongoing technical development make to research, scholarship, and creative activity in the Digital Humanities.

---

<small>Photo by [Sam Albury](https://unsplash.com/@sammisamuel21?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/oA7MMRxTVzo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText).</small>
