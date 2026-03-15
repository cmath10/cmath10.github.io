---
title: Projects
outline: deep
---

# Projects

This section should act as a curated layer above GitHub, where each repository gets context that a README cannot easily provide.

## Published npm packages

### @omnicajs/vue-remote

Repository: [`omnicajs/vue-remote`](https://github.com/omnicajs/vue-remote)

This is the clearest public example of work around third-party UI extensions, isolation boundaries and scaffolding for untrusted or separately developed interface code. It is also a good anchor for the more architectural side of the profile, because the package is not just a UI utility. It frames an integration model.

Good things to emphasize here:

- remote rendering and isolation boundaries as a product-level concern
- scaffolding for extension development rather than a one-off experiment
- documentation and surrounding tooling as part of the package story

### @modulify/validator

Repository: [`modulify/validator`](https://github.com/modulify/validator)

This package shows validation as a reusable application concern instead of a narrow form helper. It fits the story of designing libraries around rules, composition and API clarity.

Good things to emphasize here:

- reusable validation rules and application-level data checks
- library design around maintainability and extensibility
- practical utility rather than framework-specific coupling

### @modulify/morph

Repository: [`modulify/morph`](https://github.com/modulify/morph)

This one is useful for highlighting transformations, mapping and reshaping of data structures. It reads as a compact example of utility design with a clear abstraction boundary.

Good things to emphasize here:

- transformation pipelines and shape conversion
- composable utility design
- preference for general-purpose abstractions that can move across projects

### @cmath10/jmask

Repository: [`cmath10/jmask`](https://github.com/cmath10/jmask)

This is the most directly UI-facing package in the set. It is useful for showing practical frontend engineering around user input, browser behavior and reusable form-oriented interaction patterns.

Good things to emphasize here:

- browser-facing engineering with immediate product value
- attention to UX details in input handling
- packaging practical frontend behavior into a reusable unit

### @modulify/pkg

Repository: [`modulify/pkg`](https://github.com/modulify/pkg)

This package points toward package-oriented tooling and local workflow support. It helps communicate that the interest in libraries extends into package maintenance and development ergonomics, not only runtime code.

### @modulify/git-toolkit

Repository: [`modulify/git-toolkit`](https://github.com/modulify/git-toolkit)

This package is a good signal of interest in Git automation and maintainers' tooling, especially when read together with release and conventional-commit work.

## Public ecosystem work not yet framed as released packages

### modulify/conventional

Repository: [`modulify/conventional`](https://github.com/modulify/conventional)

This repo supports the release-systems angle of the profile. Even without a lot of prose around it yet, it reinforces interest in changelog automation, versioning rules and repeatable maintainer workflows.

### modulify/m3-web

Repository: [`modulify/m3-web`](https://github.com/modulify/m3-web)

This looks like a useful supporting piece for UI-system work inside the broader modulify ecosystem. It gives the Projects page one more signal that the public work is not limited to pure utility libraries.

## Organization context

### modulify

Organization: [`github.com/modulify`](https://github.com/modulify)

Based on the public organization page, modulify currently exposes a small ecosystem of TypeScript-oriented repositories around validation, data reshaping, package tooling, Git helpers, release conventions and UI work. That is useful context because it makes the public work read less like isolated experiments and more like an evolving library/tooling line.

### omnicajs

Organization: [`github.com/omnicajs`](https://github.com/omnicajs)

Publicly, omnicajs is the organization most clearly tied to `vue-remote`. Even from that single visible anchor, it helps frame the work as part of a broader effort around extension infrastructure, sandboxed UI composition and documentation-driven package development.

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
