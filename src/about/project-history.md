---
layout: base
title: Project History
permalink: /about/project-history.html
image: /assets/images/janko-ferlic-sfL_QOnmy00-unsplash.jpg
eleventyNavigation:
  key: Project History
  parent: About
  order: 2
aliases:
  - /about-project/project-timeline
---

This page presents a history of the Digital Latin Library project from its beginning in 2012.

## 2012–2013

In January 2012, a [working group](/about/initial-dll-working-group) of members from the Society for Classical Studies (then the American Philological Association), the Medieval Academy of America, and the Renaissance Society of America submitted a proposal to the Andrew W. Mellon Foundation for a planning grant "to determine the feasibility of creating a comprehensive working instrument for students of Latin, from the beginnings to the Renaissance, tentatively called the Digital Latin Library (DLL)."

In May 2012, the AWMF notified us that we had received the planning grant. We had our first full meeting of the working group in July in Philadelphia. The second meeting was in December in Norman, OK. The third meeting was in May 2013 in Philadelphia. In between those meetings, a smaller group of scholars met in Norman to discuss plans for implementing the various parts of the DLL.

By the end of the planning period, the working group decided that the DLL project was worth pursuing. They appointed Samuel J. Huskey as the director of the project, and they established the University of Oklahoma, where Huskey has a faculty appointment, as the project's institutional home.

## 2014–2015

In January, the OU DLL team submitted a proposal to the AWMF for for the initial year of a projected three-year path to full implementation of all components of the DLL, "a Linked Open Data (LOD) online resource for finding, reading, discussing, studying, teaching, editing, annotating, and publishing Latin texts of all eras." The AWMF funded the proposal and work began in July. In addition to co-PI's Huskey, Abbas, and Weaver at OU, the DLL team included several graduate and undergraduate research assistants and three subcontractors: Hugh Cayless (Duke Collaboratory for Classical Computing), Tom Elliott (NYU-ISAW), and Alex Ward (independent IT developer).

### User Studies

During this funding period, the DLL team produced a user behavior study to collect information on how potential users of the DLL use resources that are currently available on the Internet. June Abbas conducted detailed interviews of several different types of users so that we would have information on what people do and do not like about the resources they use. With help from a graduate assistant, Abbas organized and analyzed the results and produced a set of data for use in the implementation phase.

### Pilot Edition

To aid in the development of the data model for the DLL's critical editions, Huskey and a team of research assistants reverse-engineered an existing critical edition and encoding it in XML according to the standards of the Text Encoding Initiative. The edition selected for this part of the project was Giarratano's edition of Calpurnius Siculus' _Bucolica_ , since it is short (seven poems), has a full critical apparatus, and includes practically everything that a text editor might encounter while compiling a critical edition (line transpositions, corrections, a complex manuscript tradition, etc.). We used this edition to test the various components of the DLL over the next two years of the project.

### Visualizations

Weaver and his graduate research assistants refactored the libraries for his [Improvise visualization application](http://www.cs.ou.edu/~weaver/improvise/) in preparation for development of a series of visualization tools for use with DLL editions.

### DLL Catalog

Abbas, Huskey, and Weaver evaluated a number of potential applications for the DLL's catalog, bearing in mind data from the user studies.

### Videos

Several experts in the field of textual criticism came to Norman to record videos for the [DLL's video library](https://digitallatin.org/digital-latin-library/video-library).

### DLL Seminar

The DLL convened several scholars for a seminar on [Latin textual criticism in the digital age](/blog/dll-seminar-summary.html).

## 2015–2018

In January of 2015, the OU DLL team submitted a proposal to the AWMF for a two-year implementation grant to build and implement the Digital Latin Library (DLL).

The original plan was to deliver the following collection of resources collectively known as the Digital Latin Library (digitallatin.org) by the middle of 2017:

- a specialized, standards-based library catalog of Latin texts and related resources, including authority files for authors, works, and manuscripts
- a digital archive of scholarly materials related to critical editions
- three pilot critical editions for the LDLT
- a desktop application for advanced visualization and analysis of Latin texts
- web-based applications for reading, annotating, creating, and sharing texts and commentaries
- documentation for the continued maintenance of these resources after the funding period has ended.

As that deadline approached, it became clear that an extension would be necessary, owing to the complexity of the project. In June of 2017, the AWMF granted an extension of one year. The new goal was to launch all components by mid-2018.

## 2018–Present

The implementation grant from the Andrew W. Mellon Foundation expired in July 2018, and the final report was submitted to AWMF ahead of the October deadline. All elements of the project are now operational on a server maintained by the director of the DLL project and hosted by the University of Oklahoma. The main site at [https://digitallatin.org](https://digitallatin.org/)/ provides general information about the DLL’s two main initiatives, each with its own subdomain: the DLL Catalog ([https://catalog.digitallatin.org](https://catalog.digitallatin.org/)/), and the Library of Digital Latin Texts (<https://ldlt.digitallatin.org/>).

A list of DLL-related research activity is available on our [Research page](/research/index.html).

### The Library of Digital Latin Texts

The Library of Digital Latin Texts is the series of born-digital critical editions of Latin texts published in partnership with the Society for Classical Studies, the Medieval Academy of America, and the Renaissance Society of America. As of this report, the following technical elements are in place:

- Guidelines for encoding edition data in XML(<https://digitallatin.github.io/guidelines/LDLT-Guidelines.html>),
- A standard interface for viewing and interacting with LDLT editions ([https://ldlt.digitallatin.org](https://ldlt.digitallatin.org/)/),
- An example edition ([Calpurnius Siculus' _Bucolica_](https://ldlt.digitallatin.org/editions/calpurnius_siculus/)).
- Applications for automating much of the encoding process (<https://github.com/DigitalLatin/automation>/),
- A review registry application for verifying the authenticity of LDLT data when reused elsewhere (<https://dll-review-registry.scta.info/>).

A prototype for the LDLT data visualization application is available on this site. The tar.xz archive is 44MB. [Download the 44MB Encodex application](https://digitallatin.org/sites/default/files/encodex-0.1-20180106.tar.xz).

The following policies and procedures are also in place:

- SCS Procedures for Evaluation of Proposals and Submissions (<https://classicalstudies.org/publications-and-research/ldlt-scs-guidelines/>),
- MAA Procedures for Evaluation of Proposals and Submissions (<https://www.medievalacademy.org/page/LDLTSubmissions>),
- RSA Procedures for Evaluation of Proposals and Submissions (<https://cdn.ymaws.com/www.rsa.org/resource/resmgr/dll/rsa_dll_evaluation_procedure.pdf>)
- Long-term plan for the publication, maintenance, and preservation of LDLT data,
- Publishing agreement between the University of Oklahoma (on behalf of the DLL) and the SCS,
- Publishing agreement between the University of Oklahoma (on behalf of the DLL) and the MAA,
- Editor/author agreements between OU (on behalf of the DLL), the SCS, and individual editors/authors,
- Editor/author agreements between OU (on behalf of the DLL), the MAA, and individual editors/authors.

#### Current LDLT Editions

For the SCS:

- _Serviani in Vergili Aeneidos libros IX–XII commentarii_ (Robert A. Kaster et al., in progress)
- [_Bellum Alexandrinum_](https://ldlt.digitallatin.org/editions/bellum_alexandrinum/) (Cynthia Damon),
- _P. Ovidii Nasonis Ibis_ (Tom Keeline, proposed),

For the MAA:

- Miracula sancte Frideswide (Andrew Dunning, accepted by MAA; in progress),
- [_Peter Gracilis, Commentary on the Sentences, Book I, Question 1_](https://github.com/Library-of-Digital-Latin-Texts/MAA-Petrus-Gracilis-Liber-I-Quaestio-I) (edited by Jeff Witt and John Slotemaker, published),
- [Peter Gracilis' _Commentarius in Libros Sententiarum_, Liber 1, Lectiones 1–20](https://github.com/Library-of-Digital-Latin-Texts/MAA-gracilis-1-1-20), (edited by Jeffrey C. Witt and John T. Slotemaker, published)
- [_William of Hedon, Tractatus de Anima, Distinction 3, chapter 6_](https://github.com/Library-of-Digital-Latin-Texts/maa-hedon-d3c6-reviewed-repo) (edited by Michael Christensen, published)
- Paulinus of Venice, _Tractatus de diis gentium et fabulis poetarum_ (edited by Roberto Pesce, in progress)
- Pietro d’Abano, _Expositio problematum Aristotelis, Particula XIX: De harmonia_ (edited by Caleb Mutch, in progress)
- _Cartulary of Prémontré_ (edited by Heather Wacha and Yvonne Seale)

For the RSA:

- Joseph Resch's _Iugurtha_ (edited by Elisa Viale and revised by Simon Withensohn and Stefan Zathammer, in progress)
- _Nicolai episcopi Modrusiensis Oratio in funere reverendissimi domini d. Petri cardinalis Sancti Sixti_ (edited by Neven Jovanovic, in progress)

### The DLL Catalog

The DLL Catalog was launched in August 2018. In addition to the library of videos on philology and textual criticism available on the DLL’s main site, the catalog currently contains:

- 3,229 authority records for authors and editors
- 5,261 work authorities
- 2,470 individual record items (i.e., digital and digitized texts)

All of these records are available on an open basis through the Solr-powered search interface at <https://catalog.digitallatin.org/> and in JSON-LD format at <https://github.com/DigitalLatin/linked-open-data>. Work continues on a number of projects to expand the content of the catalog. Notably, we aim to publish records for nearly all of the editions listed in Engelmann’s _Bibliotheca Scriptorum Classicorum, vol. 2: “Scriptores Latini”_ by the summer of 2019. The DLL has also developed a number of Python scripts for acquiring, cleaning, and processing bibliographical data. Many of those scripts are also available in the Github repository at <https://github.com/DigitalLatin/>.
