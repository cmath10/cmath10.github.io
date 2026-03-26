---
title: About
outline: deep
---

# About

<img class="about-photo-float" src="/avatar.jpg" alt="Portrait of Kirill Zaitsev" />

I am a software engineer working primarily in web systems, frontend architecture and library design.

The most accurate short description is probably this: I care about structure, but I do not romanticize it. I like systems that are clear, teachable and durable under real project pressure. I am usually less interested in impressive solutions than in solutions that remain readable six months later and still make sense to the next engineer touching them.

## How I tend to work

I usually approach engineering as a balancing act between clarity, momentum and long-term maintainability. I am comfortable starting with simple prototypes, but I also pay close attention to the moment when a system has grown enough to require firmer boundaries, cleaner abstractions or better tooling around it.

That means I often look for:

- where the real complexity of the problem actually lives
- whether the current structure helps or hides understanding
- when a shortcut is harmless and when it is already becoming expensive
- how to keep a codebase workable for the people who will inherit it later

## What repeatedly draws my attention

Certain themes come up in my work again and again. I notice boundaries, dependency shape, API ergonomics, naming, changeability and adoption cost. I tend to think not only about whether something works, but also about how it will be understood, extended, tested and explained.

This is one of the reasons I am drawn to libraries, extension systems and shared engineering tools. Those areas force a more explicit style of thinking. They make vague design decisions visible very quickly.

## Engineering temperament

I am not especially dogmatic, but I am precise. I care about calling things by their proper names, separating adjacent ideas that are not actually identical and avoiding conceptual shortcuts that make discussion easier in the moment but harder later.

In practice, that usually means:

- I do not treat old code, technical debt and controversial decisions as the same category
- I do not treat duplication and bad abstraction as equivalent problems
- I do not assume that simplicity means the absence of structure
- I do not assume that more architecture is automatically better architecture

I prefer decisions that can be explained plainly, defended under constraint and maintained without mythology.

## Working with others

I value environments where engineering is communicative rather than theatrical. I like writing code that can survive handoff, reviews that improve the system instead of performing expertise and workflows that make quality easier to sustain.

I tend to bring a platform mindset even into product work: local tooling, testing ergonomics, documentation and developer experience matter to me because they shape how a team actually moves.

If you want the more explicit version of how I think about design, tradeoffs and technical terms, those live on the [Philosophy](/philosophy) and [Glossary](/glossary) pages. Public packages, organizations and open-source work are collected on the [Projects](/projects) page.

## Books that tend to stay nearby

Certain books return to my desk again and again because they help me recalibrate how I think about code, structure and design tradeoffs.

- Robert C. Martin, especially *Clean Code: A Handbook of Agile Software Craftsmanship* and *Clean Architecture: A Craftsman's Guide to Software Structure and Design*
- Martin Fowler, especially *Patterns of Enterprise Application Architecture*
- Craig Larman, especially *Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design and Iterative Development*
- Yegor Bugayenko, especially *Elegant Objects*

I do not treat these books as doctrine, but I do treat them as useful lenses. They help me notice structure, responsibility, naming and design pressure earlier than I otherwise would.

I do not absorb every recommendation from these authors unchanged. Some rules are useful as pressure and as a way to notice design problems, but not as laws. For example, I do not treat the idea that a function should never have more than three arguments as universal. Most of the time fewer arguments is better, but there are cases where four or five make the code clearer than the available alternatives.
