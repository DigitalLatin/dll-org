---
layout: blog
title: Upgrades, part 1
author: Samuel J. Huskey
permalink: /blog/upgrades-part-1.html
date: 2023-08-05
image: /assets/images/upgrades.png
tags: Articles
---

Visitors to this site over the past several months may have had the impression that the DLL was dormant, since the last post appeared over a year ago. The truth is that we've been very busy evaluating our choices about the technology we use for the different parts of this project, not to mention writing articles and shepherding LDLT editions to publication.

This two-part post is about what we have done and what we are doing to update and upgrade the DLL's technical components. This is off the topic of Latin texts, I know, but it's important to keep the technical work of Digital Humanities research, scholarship, and creative activity in view to demonstrate to our peers in other fields what goes on behind the scenes.

## Background

When the DLL project was launched [over a decade ago](https://www.mellon.org/grant-details/digital-latin-library-9512), dynamic content management systems were as popular as they were plentiful. Since I had experience with [Drupal](https://drupal.org/) 6 and 7, it seemed reasonable to use it for the DLL's main, informational site. Because Drupal is also in wide use at libraries around the world, it was a good choice for the DLL's catalog site, too. We decided to use [Django](https://www.django-cms.org/en/) for the _Library of Digital Latin Texts_ because we needed more control over the front end than Drupal would give us.

Having worked with Drupal previously, I designed and built content types, taxonomies, and views for the main site and catalog, but we used grant funding to hire a firm to design the user interface.

The same grant funding also allowed us to hire an independent consultant to set up and maintain the virtual server that OU's Office of the Vice President for Research generously made available to us free of charge for the life of the project. Since the consultant was available only during the grant period, I took the opportunity to learn how to maintain the server so that it would not be neglected after the funding ended.

## EOL

Everything was working well until various components of the DLL's technology stack began reaching their end of life (EOL) dates. Both the main site and the catalog were running on Drupal 7, which had been released in 2011. Development on Drupal 8 began in 2015; since it was being built on an entirely new framework, the upgrade process would be particularly challenging. I kept my eye on that project while staying current with updates and patches for Drupal 7.

Of course, with a new framework come new technical requirements for supporting it. The operating system, database management system, and PHP version running on the server that OU was hosting for us could not be upgraded to the specifications listed for the new version of Drupal. There had been several changes in the administration at OU, including a new Vice President for Research and Partnerships and a new Chief Information Officer at OU. With so many changes, it was only natural that there would also be a new way of hosting digital research projects. Fortunately, we were able to negotiate a great deal with the [OU Supercomputing Center for Education & Research](https://www.ou.edu/oscer) (OSCER) to host a new virtual server in OU's Research Cloud. Part of that deal was that I would continue being the system administrator for the DLL.

## New Server, New Directions

After I set up the new server and transferred everything to it, it was time to start working on migrating the Drupal sites to the new version. By then, Drupal 9 had been released, so our sites were at this point _two_ versions behind. Fortunately, migrating the data was not too difficult. The bigger problem was that the templating engine ([Twig](https://twig.symfony.com/)) for Drupal 8 and 9 was entirely new, and that meant that the interface had to be rebuilt entirely from scratch. I didn't have another $45,000 lying around to pay designers to do the work, so I had to dust off my design skills, which have never been more than serviceable.

But before donning the cap of Front-end Developer, I decided to step back and reassess the technical requirements of the DLL project as a whole. Trying to keep pace with developments in Linux, Drupal, Django, and other technologies was taking time away from the philological mission of the DLL. The time had come to make some decisions about the efficiency, stability, and sustainability of our technology stack. I'll discuss that in the second part of this update on upgrades.
