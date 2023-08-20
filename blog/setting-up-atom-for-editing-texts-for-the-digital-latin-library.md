---
layout: blog
title: Setting up Atom for Editing Texts for the Digital Latin Library
author: Andrew Dunning
permalink: /blog/setting-atom-editing-texts-digital-latin-library.html
date: 2018-04-11
tags: Articles
aliases:
  - /blog/setting-atom-editing-texts-digital-latin-library
---

_Note: The developers of Atom archived the project on December 15, 2022. It is no longer under active development._

The Digital Latin Library is opening the doors to publishing your critical editions. The [Society for Classical Studies](https://classicalstudies.org/publications-and-research/ldlt-scs-guidelines) and [Mediaeval Academy of America](http://www.medievalacademy.org/page/LDLTSubmissions/MAA-Procedures-for-Evaluation-of-Proposals--Submissions-to-the-Library.htm) have published their submission process, and one from the Renaissance Society of America is coming soon. For the first time, scholars will be able to publish peer-reviewed editions of primary sources that are universally accessible to both researchers and the general public, including readers with print disabilities.

### Technology-independent editions

All three series contributing to the Digital Latin Library will work with files encoded using the tagging format of the [Text Encoding Initiative](http://tei-c.org/) (TEI). TEI is based on XML, which will have a familiar appearance if you have ever worked on a webpage. It works exactly like the HTML tags that underlie every website.

The Digital Latin Library has [guidelines for its variant of TEI](https://digitallatin.github.io/guidelines/), allowing you to create files ready for publication. If you've already started on an edition, the DLL team are at work on [software to help convert files in other formats](https://github.com/DigitalLatin/automation), but the final submission will be a TEI XML file. It's not a perfect format, but it's the best thing we have for precisely representing the kinds of things that scholars care about when editing texts. As someone who has published editions using nearly every program available (including Classical Text Editor, LaTeX, and plain Microsoft Word), allow me to ensure you that this is by far the most efficient and sustainable way of going about it so far.

Editing a file with TEI is much more precise than using a word processor. When you're writing a file in a program such as Microsoft Word or LibreOffice, it forces to you look at your work in visual terms, whereas in editing we need to think about the text's semantic meaning. For instance, when you put text in italics, that doesn't tell us whether it's a foreign word, a title, or a biblical quotation. TEI lets us note these things precisely, which makes it easier to work as a team across different fields, and allows us to create editions that are technology-independent – that work equally well online, in print, or using accessibility devices.

### Software for working with TEI

The tradeoff of using TEI is that, because it doesn't work in the same way as people tend to write on computers, we can't use an everyday work processor. That software is turning what you are writing into a coded XML file: what you see is a visual representation of markup for computers. There isn't yet software that allows you work visually with TEI XML files, for the simple reason that we don't yet have a critical mass of people who want this. Instead, we're working directly with the XML tags. If you haven't worked this way before, it might feel like stepping back into the 1980s, but it's highly efficient once you learn the system. You're working with the same software as programmers use, which requires a similar precision as textual editing.

You can edit XML in any plain text editor. This is a program that allows you to work with the exact characters being sent to a computer, instead of a visual abstraction. Life will be easier, however, if you use an editor that includes tools for working with XML. Many people in the TEI community use the [Oxygen XML Editor](https://www.oxygenxml.com), which has far more features for working with XML than you'll probably need. But some of us can't afford the biannual fees to licence a copy of Oxygen; or prefer an editor that is a bit simpler and can be used for other writing and programming tasks. If that is you, there are other options.

There are many different text editors available; the best for working with TEI at the moment is [Atom](https://atom.io), a highly customizable and open-source program that works on Mac, Windows, and Linux systems. It has the key feature of a [package that validates your XML files](https://atom.io/packages/linter-autocomplete-jing), ensuring it conforms to the Digital Latin Library guidelines as you work, defined in computer terms by a 'schema'. (There are other editors that include a basic XML validator, but validating TEI requires a more complex schema language called Relax NG that most of them do not support.)

Installing the editor itself is fairly simple, but for XML validation to work, you'll also need Java, which can be fussy to set up. These steps should give you a functional setup.

### Installing Atom on a Mac with Homebrew

The quickest method of installing the software you'll need on a Mac is to use the Terminal, a program that gives you direct access to the Unix system at the heart of your computer. It might look daunting if you didn't use a computer before the 1990s, but it simply lets you run commands by typing words instead of clicking buttons. To open the Terminal, look for it in the 'Utilities' folder inside Applications.

1. Install [Homebrew](https://brew.sh) by going to its website and pasting the command it gives you into the Terminal. This is a program for adding Unix-based software to your Mac, many of which are handy for academic purposes.
2. Paste the following lines into the Terminal (you can run each one individually, pressing Return after each line, or copy in the whole thing at once):

```bash
brew tap caskroom/cask
brew cask install java atom
apm install linter-autocomplete-jing
```

After the installers have run, you will find Atom in your Applications folder. When you open the editor, you might receive a message about needing to install extra dependencies, which you should do.

### Installing Atom on Windows

To install Atom and the XML validation package on Windows:

1. Download [Atom](https://atom.io) and run the installer. For more detailed instructions, see [Installing Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/).
2. Download [Java](https://java.com/download/) and run the installer. If you see any offers to install extra, unrelated software, be sure to decline these.
3. To install XML validation support: a) Open Atom. b) Type Control + Shift + P to open the Command Palette (which lets you run any Atom command, and you'll be using it frequently). c) Search for 'Install Packages and Themes' and select it. d) In the 'Install Packages' window, search for 'linter-autocomplete-jing' and click the Install button. If it asks to install extra dependencies, allow it to do so.

### Get started with Atom

Because Atom is useful for working not just with XML but any plain-text file, it is used by millions of developers and writers. There is a large community around it, and many introductions to using it. You might be interested in a [recent review of text editors](https://thesweetsetup.com/apps/best-text-editor-macos/) that introduces these programs and highlights some of Atom's key features. These allow you to work far more efficiently than in a standard word processor, even if the initial learning curve is steeper. There is an official [Atom Basics](https://flight-manual.atom.io/getting-started/sections/atom-basics/) guide. [_Learn Enough Text Editor to Be Dangerous_](https://www.learnenough.com/text-editor-tutorial) is a slightly more advanced overview of how text editors work that focuses on Atom.

The Atom community has also produced a vast array of packages that give the editor extra functionality. Many of them are directed towards programming, but some are also useful for using it for everyday writing. For example, [Teletype for Atom](https://teletype.atom.io) allows multiple people to collaborate on a file over the Internet.

Whether you're using Atom, Oxygen, or another text editor, you might like to start with the template on the [Digital Latin Library Guidelines](https://digitallatin.github.io/guidelines/) website. [_What is the Text Encoding Initiative?_](http://books.openedition.org/oep/426) is a good general overview to TEI. The DLL guidelines are based on [EpiDoc](http://epidoc.sourceforge.net): you can also see more examples of how to transcribe Latin manuscripts and inscriptions on its website, and there are also other introductions to it available online.

---

Editor's note: Neel Smith has suggested two other resources for working with Atom:

- [https://github.com/neelsmith/atomic-tei](https://urldefense.proofpoint.com/v2/url?u=https-3A__github.com_neelsmith_atomic-2Dtei&d=DwMF-g&c=qKdtBuuu6dQK9MsRUVJ2DPXW6oayO8fu4TfEHS8sGNk&r=dwWFSfIMgku8bpO7G3Q4fg&m=3y1RuxWjj4U-6c_pOzvDUJUoSZOsMN4Ew5SlwPJTAeI&s=27-_PC_Dc1T9Ws49uqc3J_vo8h6PSph4GqdaP03tOhA&e=) is a package that adds TEI validation (not just well-formed XML validation) using the TEI-all .rng schema.
- [https://atom.io/packages/atom-wrap-in-tag](https://urldefense.proofpoint.com/v2/url?u=https-3A__atom.io_packages_atom-2Dwrap-2Din-2Dtag&d=DwMF-g&c=qKdtBuuu6dQK9MsRUVJ2DPXW6oayO8fu4TfEHS8sGNk&r=dwWFSfIMgku8bpO7G3Q4fg&m=3y1RuxWjj4U-6c_pOzvDUJUoSZOsMN4Ew5SlwPJTAeI&s=fodLim8KYrRjEetyMAztbIb7w6i92Elek7MJrYIvR7s&e=) adds very nice shortcuts for wrappiong a selection in elements. (One former Oxygen user told me that this was the plugin that allowed him to switch to Atom.)

Thanks, Neel!
