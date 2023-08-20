---
layout: blog
title: Demster
author: Samuel J. Huskey
permalink: /blog/demster.html
date: 2015-10-19
image: /assets/images/Dempster's_Rosinus.png
tags: Articles
aliases:
  - /blog/demster
---

Here's another example of the problems we're trying to solve with the DLL project.

This two-word entry occurs at line 2.35 of the apparatus criticus in Giarratano's 1910 edition of Calpurnius Siculus' _Bucolica_ :

> _canilibus_ Demster.

![Dempster](/assets/images/Dempster's_Rosinus.png){.float-image-right .image .img-fluid}

That's all he gives you to figure out that you need to find a copy of Thomas Dem(p)ster's edition of Johannes Rosinus' _[Antiquitatum Romanorum corpus absolutissimum](http://archive.org/details/iohannisrosinian00rosi)_. I don't know how people in 1910 dealt with Giarratano's note, but I can tell you my first move: search Google for "Demster Calpurnius Siculus." Google helpfully asked me if I meant "Dempster Calpurnius Siculus," and provided a number of links to books that recorded Thomas Dempster's conjectures and comments on Latin texts. At that point, I remembered that Giarratano had earlier referred to Dempster's _De Etruria regali._ Thinking that this might be the work I needed, I [checked it on Google Books](https://books.google.com/books?id=tQJdAAAAcAAJ&pg=PP1#v=onepage&q&f=false) and found no reference to this passage.

On the off chance that there really was a "Demster," I went back to my original search for "Demster Calpurnius" and looked more closely at the results. I kept running across references to "Demster ad Rosin.", so I tried searching for variations on "Dempster ad Rosin." This time, Google not so helpfully suggested "ad nauseam" as an alternate for "ad Rosin." Instead, I tried "Rosinus" and wound up with a link to the [Wikipedia article on Johannes Rosinus](https://en.wikipedia.org/wiki/Johannes_Rosinus). Lo and behold, a connection! Thomas Dempster published an edition of Rosinus' _Antiquitatum romanarum corpus absolutissimum **cum notis doctissimis ac locupletissimis Thomae Dempsteri**_ **.**

I found a copy of [Dempster's Rosinus at archive.org](https://archive.org/details/iohannisrosinian00rosi). Fortunately, it has an index. On page 17, in columns a and b, Dempster does provide a note on this very passage on Calpurnius Siculus— _but he does not propose_ canilibus _as an emendation!_

So, let's retrace our steps: from Giarratano's two-word entry, we searched Google _ad nauseam_ (ha!) and finally found Dempster's note to Rosinus' discussion _de reliquis tribus collibus; Hortulorum videlicet, Janiculo, & Vaticano—\_and there we found nothing to indicate that Dempster had proposed an emendation for \_canalibus_. But he did comment that the word before it, _mutare_ , seemed incorrect, and he suggested _nutrire_ instead.

Now, imagine having access to a curated catalog of works in Latin, with [authority files for authors and works](https://en.wikipedia.org/wiki/Authority_control), and a [faceted search](https://en.wikipedia.org/wiki/Faceted_search) interface that makes it easy for Latinists to find resources and discover connections between them. That's the _library_ part of the Digital Latin Library project. An editor working on a critical edition for the \_[Library of Digital Latin Texts](http://digitallatin.org/about-project) \_could use those authority files to identify unambiguously the sources for conjectures and other notes on the text. Readers could use the library's finding aids to locate copies of those sources.

For example, in the pilot edition that we're encoding, the passage that launched this post will identify Giarratano's "Demster" as Thomas Dempster for human readers and, for machine processing, some authority information, along the lines of VIAF: 4919523 | LCCN: nr2001015003 | ISNI: 0000 0001 2118 4214 | GND: 12415428X | SELIBR: 279479 | SUDOC: 077082842 | BNF: cb10391808r (data) | ULAN: 500316679 | NKC: ola2010616537. It will be clear that the note refers to his comments on a work by Johannes Rosinus (VIAF: 24624621 | LCCN: n93037293 | ISNI: 0000 0001 2277 5198 | GND: 117595640 | SELIBR: 279503 | SUDOC: 029014867 | BNF: cb120729701 (data) | NKC: mzk2009511415) that can be found at <http://archive.org/details/iohannisrosinian00rosi> (MARC record: <https://archive.org/download/iohannisrosinian00rosi/iohannisrosinian00rosi_archive_marc.xml>). We'll also include a comment to let readers know that Giarratano incorrectly attributes _canilibus_ to Dempster so that they don't have to go through what I did today, though they might want to check out his comment on _maturare_ vs. _nutrire_.

The point of this excursus of an obscure little note in an apparatus criticus is to illustrate how the [two parts of the DLL's mission](http://digitallatin.org/about-project/mission-and-goals) work together to create a rich store of Linked Open Data for Latinists.
