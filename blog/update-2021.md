---
layout: blog
title: "Update 2021"
author: Samuel Huskey
permalink: /blog/update-2021.html
date: 2021-10-04
tags: Articles
aliases:
  - /blog/update-2021
---

An update on the Digital Latin Library project is long overdue. As I mentioned in [my last post](/blog/update-pdf-automation-and-more.html), every time I think I have a moment to spare to write an update, I think, “No, I should really spend that time working on [insert DLL project here].” That continues to be true, but I’m taking a moment to write a brief progress report.

## Updates to the Web Sites

Much of the DLL’s presence on the web depends on the [Drupal](https://drupal.org/) content management system, which has undergone a metamorphosis over the past couple of years. Since Drupal 7, which is what the DLL’s sites currently use, [is currently scheduled to reach its end-of-life in November 2022](https://www.drupal.org/psa-2019-02-25), upgrading to Drupal 9 has become a priority. Accordingly, I spent part of this year [writing and running migrations](https://sjhuskey.info/drupal/migrating-the-digital-latin-library-from-drupal-7-to-drupal-9/) to move the content for https://digitallatin.org/ and https://catalog.digitallatin.org/ from 7 to 8 to 9. I’m pleased to report that the migrations were successful.

The next step will be rebuilding the “themes,” or user interface, of the sites. Frontend design is not my favorite thing in the world, but it’s something one must do when there aren’t funds for paying a professional designer. I will be working on that project in the coming months. I hope to post updates on that project here, since it seems likely that others in the digital humanities are facing the same necessity. Perhaps my work will be of some use to others.

Funding for maintenance and upkeep of digital humanities projects is a topic that needs serious discussion. If project leaders lack the skills to maintain servers, upgrade resources, and update user interfaces, digital humanities projects are destined to die of neglect.

## XSLT > LaTeX > PDF

When I haven’t been working on migrating and upgrading the web sites, I have been refining the [DLL’s XSL stylesheets](https://github.com/DigitalLatin/DLL-Stylesheets) for transforming [LDLT XML](https://digitallatin.github.io/guidelines/LDLT-Guidelines.html) into LaTeX for producing high-quality PDF versions of our critical editions. I have used Cynthia Damon’s forthcoming LDLT edition of Bellum Alexandrinum as a test, as I mentioned last year, but lately I have begun to work on transforming a poetic text. The work is going well. I’m hopeful that I’ll be able to turn the transformation into an online service so that users can run the transformations themselves. It occurs to me that this might be a useful way test of the encoding of an edition in preparation.

## Presentations

I have delivered three presentations on various aspects of the DLL in the past several months.

On November 25, 2020, I gave a talk (“What is ‘Digital Latin’? An Overview of the Digital Latin Library”) to the Venice Centre for Digital and Public Humanities’ series Seminars in Digital and Public Humanities. That talk is available on YouTube at <https://youtu.be/u-HvLxablsA>.

On May 21, 2021, I gave a presentation (“Encoding the Encoded: Making Critical Editions Digital”) to the Lady Margaret Hall Seminar on Textual Criticism at the University of Oxford.

On July 1, 2021, I led a session of the Sunoikisis DC Summer Session. That talk is available on YouTube at <https://youtu.be/CL-J-QSj4uA>.

## Editions in Progress

The DLL’s Library of Digital Latin Texts has a number of editions in progress:

- _Serviani in Vergili Aeneidos libros IX–XII commentarii_ (Robert A. Kaster et al., in progress)
- _Bellum Alexandrinum_ (Cynthia Damon, in progress)
- _Miracula sancte Frideswide_ (Andrew Dunning, in progress)
- Paulinus of Venice, _Tractatus de diis gentium et fabulis poetarum_ (Roberto Pesce)
- _Cartulary of Prémontré_ (Heather Wacha and Yvonne Seale)

I’m hopeful that these projects will be published in the coming year.

That’s all for now. I hope to have more updates for you in the near future.
