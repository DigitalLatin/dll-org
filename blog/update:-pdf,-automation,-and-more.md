---
layout: blog
title: "Update: PDF, Automation, and More"
author: Samuel Huskey
permalink: /blog/update-pdf-automation-and-more.html
image: /assets/images/bellum-alexandrinum-shot.png
date: 2020-10-05
tags: Articles
aliases:
  - /blog/update-pdf-automation-and-more
---

I apologize for the long delay since my last update on the Digital Latin Library Project. Every time I think I have a moment to spare to write an update, I think, "No, I should really spend that time working on [insert DLL project here]." But if I never write an update, no one will know that the project is still going strong. So, here's a brief update on what we have been up to.

With guidance from Hugh Cayless, Jeff Witt, and Andrew Dunning, I have spent much of the past several months working on the [DLL Stylesheets](https://github.com/DigitalLatin/DLL-Stylesheets), with special attention to transforming LDLT edition data into a printable PDF. Latinists are used to reading critical editions in the format that has evolved over the centuries: a text with line numbers, an apparatus criticus, and all of the symbols and abbreviations that signify various things about the text. For that reason, it makes sense to make texts published by the LDLT in that format, in addition to the [online viewer application](https://ldlt.digitallatin.org/) that Hugh Cayless developed.

_In nuce_ , the DLL Stylesheets use [Extensible Stylesheet Language Transformations](https://en.wikipedia.org/wiki/XSLT) (XSLT) to turn the XML-encoded data of an LDLT edition into [LaTeX](https://en.wikipedia.org/wiki/LaTeX), a language developed for typesetting. LaTeX has a robust module ([reledmac](https://www.ctan.org/pkg/reledmac)) for typesetting critical editions. It automatically does the calculations for the layout of text, apparatus criticus, notes, and a variety of other features of critical editions. If you're interested in learning more about LaTeX and reledmac, I encourage you to read Andrew Dunning's, "[Review of 'Reledmac. Typesetting technology-independent critical editions with LaTeX'](https://ride.i-d-e.de/issues/issue-11/reledmac/)" ( _RIDE_ 11 [2020]. doi: 10.18716/ride.a.11.1. Accessed: 05.10.2020).

Reledmac and LaTeX are wonderful, but the trick is getting the data into the LaTeX format in the first place—that is why DLL Stylesheets project consumed the better part of this year. I'm happy to say that the work is almost complete. I've been using three editions as test projects: Cynthia Damon's _Bellum Alexandrinum_ , Andrew Dunning's _Miracula sancte Frideswide_ , and Roberto Pesce's edition of _Tractatus de diis gentium et fabulis poetarum_.

Here's a screenshot of the first page of Damon's edition, just to give you an exmaple of where we stand:

![Bellum Alexandrinum](/assets/images/bellum-alexandrinum-shot.png)

Of course, any errors that you might spot are mine, not Professor Damon's, and this is only a draft. The edition is set to be published in the coming months.

I have also been working on [automating the encoding process](https://github.com/DigitalLatin/automation), to take some of the tedium out of encoding texts in XML. My student Virgina K. Felkner (now pursung a Ph.D. in Computer Science at USC) was instrumental in developing my proof of concept into a working application. We have worked out a process that will encode approximately 90% of an edition's text and apparatus criticus. The remaining amount usually takes the expertise of a human editor—and that's a good thing. The point of these scripts is to reduce the mechanical, tedious aspects of encoding so that editors can focus on the work of encoding as scholarship.

The scripts for prose and poetry texts are working well. Our _magnum opus_ , however, is the script to encode Charles Murgia and Robert Kaster's edition of _Serviani Vergili Aeneidos Libros IX–XII Commentarii_. That text is taking some time just to prepare for the scripts, so publication of that edition may be delayed for a while, but you can soon read about the process in the forthcoming _Cambridge Critical Guide to Latin Literature_ , where Bob Kaster and I wrote about traditional and digital approaches to editing texts.

The DLL has finalized its publication agreements with the [Society for Classical Studies](https://classicalstudies.org/publications-and-research/ldlt-scs-guidelines) and the [Medieval Academy of America](https://www.medievalacademy.org/page/LDLTSubmissions). We are close to finalizing an agreement with the Renaissance Society of America to publish editions of Neo-Latin texts.

In fact, we have already published two editions on behalf of the MAA: Jeff Witt and John Slotemaker's edition of first question in book one of Peter Gracilis' commentary on the _Sentences_ ; and Michael Stenskjær Christensen's edition of William of Hedon's _Tractatus de anima distinctio_ 3, chapter 6. These editions were published through our collaboration with [LombardPress](https://lombardpress.org/). Go to [our repository for editions](https://github.com/Library-of-Digital-Latin-Texts) to see the codebases for these editions. Look for the publication of the other editions mentioned above soon.

You can also read about our "Travelling Imprimatur," the method we've developed for assuring readers that they are using the officially published version of an LDLT text, in the article I cowrote with Jeff Witt: “[Decoupling Quality Control and Publication: The Digital Latin Library and the Traveling Imprimatur](http://digitalhumanities.org/dhq/vol/13/4/000438/000438.html)” ( _Digital Humanities Quarterly_ 13.4).

Finally, my students Rachel Rucker (now pursuing a Ph.D. in Classics at the University of Iowa) and Alex Konieczny (now pursuing a Ph.D. in Classics at the University of Virginia) spent much of their last year at the University of Oklahoma compiling bibliographical data to add to our [catalog](http://catalog.digitallatin.org/). Specifically, they tracked down a large number of items from Wilhelm Engelmann's _Bibliotheca Scriptorum Classicorum_ , volume 2: Scriptores Latini (Leipzig 1882). That work still needs to be edited and imported into the catalog's database, but I'm hoping to do that after I upgrade our sites to the new version of Drupal and migrate all of the data.

That's all for now! I will try my best not to let so much time elapse between now and the next update.
