---
layout: blog
title: Updates on the LDLT
author: Samuel Huskey
permalink: /blog/updates-ldlt.html
date: 2019-05-10
tags: Articles
aliases:
  - /blog/updates-ldlt
---

We've been quiet for the past few months because we've been busy on a number of projects. It's time to share some news about the latest developments on the DLL's publishing project, _The Library of Digital Latin Texts_.

We launched the official website of the LDLT (<https://ldlt.digitallatin.org/>) earlier this year. As the [about](https://ldlt.digitallatin.org/about/) page explains:

Central to our philosophy is the idea that interfaces are a form of scholarship entirely different from textual criticism. Textual scholars should not have to master the scholarly fields of human computer interaction and data visualization to publish a digital edition. Rather, the data for critical editions should be openly available for scholars in those fields to use in making arguments about the text from their perspective.

Nevertheless, so that users may read and interact with LDLT texts, we have made a standard interface available on this site. The interface is itself an implementation of [CETEIcean](https://github.com/TEIC/CETEIcean), a research project of Hugh Cayless and Raffaele Viglianti. The interface provides a basic navigation menu; an interactive apparatus criticus that allows dynamic swapping of variant readings into and out of the main text; filters for types of variants; and dynamically generated lexical and morphological analysis, courtesy of the [Alpheios project](https://alpheios.net/).

The LDLT's site currently has a sample edition of [Calpurnius Siculus' _Bucolica_](https://ldlt.digitallatin.org/library/texts/urn:cts:latinLit:phi0830.phi001.dll_1/) available to demonstrate the features of our implementation of CETEIcean. We have a number of official editions in the queue, in various stages of preparation or production:

- _Serviani in Vergili Aeneidos libros IX–XII commentarii_ (Robert A. Kaster et al., in progress),
- _Bellum Alexandrinum_ (Cynthia Damon, in progress),
- _P. Ovidii Nasonis Ibis_ (Tom Keeline, proposed),
- _Miracula sancte Frideswide_ (Andrew Dunning, accepted by MAA; in progress),
- _Bede's Bible: An Edition of the Latin Vulgate from the Codex Amiatinus_ (Andrew Dunning, in progress),
- _Peter Gracilis, Commentary on the Sentences, Book I, Question 1_ (edited by Jeff Witt and John Slotemaker, accepted by MAA, in progress),
- _William of Hedon, Tractatus de Anima, Distinction 3, chapter 6_ (edited by Michael Christensen, under review).

We're looking forward to releasing some of these in the coming months.

If you have been looking for a place to publish your edition of a Latin text, please consider contacting one of our partners for information about preparing a proposal. Two of the three learned societies affiliated with the LDLT now have procedures in place for accepting and evaluating proposals for editions:

- [Society for Classical Studies Procedures for Evaluation of Proposals and Submissions to the Library of Digital Latin Texts (LDLT)](https://classicalstudies.org/publications-and-research/ldlt-scs-guidelines)
- [Medieval Academy of America Procedures for Evaluation of Proposals & Submissions to the Library of Digital Latin Texts (LDLT)](https://www.medievalacademy.org/page/LDLTSubmissions)

The Renaissance Society of America's procedures are in development, with a projected release later in 2019.

Our encoding guidelines have been available for a while at <https://digitallatin.github.io/guidelines/>, but we have also been developing our scripts for [automating the encoding process](https://github.com/DigitalLatin/automation). Although we love typing angle brackets, we recognize that encoding a Latin text and its critical apparatus is tedious and onerous for some, so we have been developing a method for automating much of the low-level encoding work. Editors can prepare their text in a regular text (.txt) file and their critical apparatus and notes in a spreadsheet (CSV) file. We can run those inputs through a series of operations using Python scripts, and the output will be valid, well-formed XML, encoded according to our guidelines. Virginia K. Felkner, an undergraduate double major in Letters and Computer Science at the University of Oklahoma, is the lead developer on this project.

Felkner presented her work on automation at the 150th annual meeting of the Society for Classical Studies earlier this year on the DLL's panel. You can read the abstract of her paper, "[Automatically Encoding Critical Editions of Latin Texts](https://classicalstudies.org/annual-meeting/150/abstract/automatically-encoding-critical-editions-latin-texts)" on the SCS' website. While you're there, you can also view abstracts of the papers delivered by Huskey ("[The Digital Latin Library](https://classicalstudies.org/annual-meeting/150/abstract/digital-latin-library)"), Hugh Cayless ("[What does a (digital) critical edition look like?](https://classicalstudies.org/annual-meeting/150/abstract/what-does-digital-critical-edition-look)"), Robert Kaster ("[Is There an Editor in this Text?](https://classicalstudies.org/annual-meeting/150/abstract/there-editor-text)"), and Cynthia Damon ("[Pragmatic or Pure? Two Experiments in Editing](https://classicalstudies.org/annual-meeting/150/abstract/pragmatic-or-pure-two-experiments-editing)") on the same panel.

That's all for now. Look for more updates soon.
