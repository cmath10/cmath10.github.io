---
title: Projects
outline: deep
---

# Projects

This section should act as a curated layer above GitHub, where each repository gets context that a README cannot easily provide.

## Published npm packages

### @omnicajs/vue-remote

<ProjectMetaLinks
  href="https://github.com/omnicajs/vue-remote"
  label="omnicajs/vue-remote"
  npm-package="@omnicajs/vue-remote"
/>

This is the clearest public example of work around third-party UI extensions, isolation boundaries and scaffolding for untrusted or separately developed interface code. It is also a good anchor for the more architectural side of the profile, because the package is not just a UI utility. It frames an integration model.

Good things to emphasize here:

- remote rendering and isolation boundaries as a product-level concern
- scaffolding for extension development rather than a one-off experiment
- documentation and surrounding tooling as part of the package story

### @modulify/validator

<ProjectMetaLinks
  href="https://github.com/modulify/validator"
  label="modulify/validator"
  npm-package="@modulify/validator"
/>

This package shows validation as a reusable application concern instead of a narrow form helper. It fits the story of designing libraries around rules, composition and API clarity.

Good things to emphasize here:

- reusable validation rules and application-level data checks
- library design around maintainability and extensibility
- practical utility rather than framework-specific coupling

### @modulify/morph

<ProjectMetaLinks
  href="https://github.com/modulify/morph"
  label="modulify/morph"
  npm-package="@modulify/morph"
/>

This one is useful for highlighting transformations, mapping and reshaping of data structures. It reads as a compact example of utility design with a clear abstraction boundary.

Good things to emphasize here:

- transformation pipelines and shape conversion
- composable utility design
- preference for general-purpose abstractions that can move across projects

### @cmath10/jmask

<ProjectMetaLinks
  href="https://github.com/cmath10/jmask"
  label="cmath10/jmask"
  npm-package="@cmath10/jmask"
/>

This is the most directly UI-facing package in the set. It is useful for showing practical frontend engineering around user input, browser behavior and reusable form-oriented interaction patterns.

Good things to emphasize here:

- browser-facing engineering with immediate product value
- attention to UX details in input handling
- packaging practical frontend behavior into a reusable unit

### @modulify/pkg

<ProjectMetaLinks
  href="https://github.com/modulify/pkg"
  label="modulify/pkg"
  npm-package="@modulify/pkg"
/>

This package points toward package-oriented tooling and local workflow support. It helps communicate that the interest in libraries extends into package maintenance and development ergonomics, not only runtime code.

### @modulify/git-toolkit

<ProjectMetaLinks
  href="https://github.com/modulify/git-toolkit"
  label="modulify/git-toolkit"
  npm-package="@modulify/git-toolkit"
/>

This package is a good signal of interest in Git automation and maintainers' tooling, especially when read together with release and conventional-commit work.

## Public ecosystem work not yet framed as released packages

### modulify/conventional

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="modulify/conventional"
/>

This repo supports the release-systems angle of the profile. Even without a lot of prose around it yet, it reinforces interest in changelog automation, versioning rules and repeatable maintainer workflows.

### modulify/m3-web

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web"
  label="modulify/m3-web"
/>

This looks like a useful supporting piece for UI-system work inside the broader modulify ecosystem. It gives the Projects page one more signal that the public work is not limited to pure utility libraries.

## Organization context

### <img src="/modulify-logo.svg" alt="modulify logo" class="project-org-heading-icon" /> modulify

<ProjectMetaLinks
  href="https://github.com/modulify"
  label="github.com/modulify"
/>

modulify is my own umbrella project. I develop it primarily on my own, with occasional help from colleagues in their spare time when they are interested in a particular direction. The name is meant to hold libraries of very different kinds under one roof: general-purpose packages, tooling, UI systems such as `m3-web`, and, later on, backend-oriented work as well. The current JavaScript and TypeScript stack is only the first layer of that broader plan. Its logo was drawn by my sister, a 2D artist working under the name `JackHook`.

### omnicajs

<ProjectMetaLinks
  href="https://github.com/omnicajs"
  label="github.com/omnicajs"
/>

omnicajs is tied to my current workplace, but it is not limited to one CRM-specific integration surface. It is where we move libraries and tooling for web-interface development when they are useful across products and worth keeping independent from a single application context. That makes it a better home for reusable extension infrastructure, UI composition primitives and developer tooling that should remain portable.

## What these projects should communicate

- experience building reusable libraries, not only product features
- comfort with API shape, documentation and long-term maintainability
- interest in solving recurring engineering problems with practical abstractions
- ability to balance elegance with the constraints of real application work

## Suggested structure per project

- what problem the project solves
- why you cared enough to build it
- interesting constraints
- design tradeoffs
- what you would change today
