---
layout: blog
title: Cataloging Works in the Packard Humanities Institute's Classical Latin Texts
author: Samuel J. Huskey
permalink: /blog/cataloging-works-packard-humanities-institutes-classical-latin-texts.html
date: 2015-10-19
image:
tags: Articles
aliases:
  - /blog/cataloging-works-packard-humanities-institutes-classical-latin-texts
---

In a previous post, I wrote about using BeautifulSoup library with Python to collect data for the DLL's catalog. In this post, I'll discuss using the same techniques to create a structured list of information about all of the authors and works on the [Packard Humanities Institute's Classical Latin Texts web site (PHI)](http://latin.packhum.org/).

The site helpfully provides their canon of authors at [http://latin.packhum.org/canon](http://latin.packhum.org/canon). The structure of the list is as follows:

```bash
Author name [PHI author number, author abbreviation]
Work title, bibliography for reference edition [PHI author number,work number, work abbreviation]
```

For example, here is the entry for Vergil:

```bash
Publius Vergilius Maro {0690 Verg}
    Eclogae P. Vergili Maronis Opera, ed. R. A. B. Mynors, 1972 {0690 001 Ecl}
    Georgica P. Vergili Maronis Opera, ed. R. A. B. Mynors, 1972 {0690 002 G}
    Aeneis P. Vergili Maronis Opera, ed. R. A. B. Mynors, 1972 {0690 003 A}
```

One of the many excellent things about the Packard Humanities Institute's site is that each one of these pieces of information has an identifying attribute in the HTML code. For example, author names are in a `<span>` tag with a class of "anam". Work titles are in a different `<span>` tag with a class of "wnam". All of the works have `<a>` tags that link to the first page of the work on the PHI site. These tags and attributes are useful not just for the layout purposes of the PHI's site, but also for scraping the data and reusing it for other purposes, such as cataloging the works for the DLL.

I wrote a program that will read the contents of [http://latin.packhum.org/canon](http://latin.packhum.org/canon) and pull the author name, author number, work title, work number, PHI combined number, reference edition, and URL for each entry in the canon, then write the data to a comma-separated values (CSV) file that I can use to upload the information rapidly to our catalog. After that, we'll match the authors and works to our authority and works records so that the PHI's resources will appear in searches of the DLL's catalog. In keeping with our policy of sharing research objects, the code for this program is available at [https://github.com/DigitalLatin/library-automation/blob/master/phi-works.py](https://github.com/DigitalLatin/library-automation/blob/master/phi-works.py).
