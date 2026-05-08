---
title: Projects
outline: deep
---

# Projects

This page adds context around public repositories: what each project is for, where it fits, and which engineering concerns it represents beyond the README.

## Published npm packages

### @omnicajs/vue-remote

<ProjectMetaLinks
  href="https://github.com/omnicajs/vue-remote"
  label="omnicajs/vue-remote"
  npm-package="@omnicajs/vue-remote"
/>

This is the clearest public example of work around third-party UI extensions, isolation boundaries and scaffolding for untrusted or separately developed interface code. The package is not just a UI utility: it describes an integration model for separately delivered interface modules.

Key themes:

- remote rendering and isolation boundaries as a product-level concern
- scaffolding for extension development rather than a one-off experiment
- documentation and surrounding tooling as part of the package's value

### @modulify/validator

<ProjectMetaLinks
  href="https://github.com/modulify/validator"
  label="modulify/validator"
  npm-package="@modulify/validator"
/>

This package treats validation as a reusable application concern instead of a narrow form helper. It is built around rules, composition and API clarity.

Key themes:

- reusable validation rules and application-level data checks
- library design around maintainability and extensibility
- practical utility rather than framework-specific coupling

### @modulify/morph

<ProjectMetaLinks
  href="https://github.com/modulify/morph"
  label="modulify/morph"
  npm-package="@modulify/morph"
/>

This package is about transformation, mapping and reshaping of data structures. It is a compact example of utility design with a clear abstraction boundary.

Key themes:

- transformation pipelines and shape conversion
- composable utility design
- preference for general-purpose abstractions that can move across projects

### @cmath10/jmask

<ProjectMetaLinks
  href="https://github.com/cmath10/jmask"
  label="cmath10/jmask"
  npm-package="@cmath10/jmask"
/>

This is the most directly UI-facing package in the set. It shows practical frontend engineering around user input, browser behavior and reusable form-oriented interaction patterns.

Key themes:

- browser-facing engineering with immediate product value
- attention to UX details in input handling
- packaging practical frontend behavior into a reusable unit

### @modulify/pkg

<ProjectMetaLinks
  href="https://github.com/modulify/pkg"
  label="modulify/pkg"
  npm-package="@modulify/pkg"
/>

This package is about package-oriented tooling and local workflow support. It extends library work into package maintenance and development ergonomics, not only runtime code.

### @modulify/git-toolkit

<ProjectMetaLinks
  href="https://github.com/modulify/git-toolkit"
  label="modulify/git-toolkit"
  npm-package="@modulify/git-toolkit"
/>

This package is centered on Git automation and maintainers' tooling, especially alongside release and conventional-commit workflows.

### modulify/conventional

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="modulify/conventional"
/>

This monorepo is a release-systems toolkit built around Conventional Commits. It brings together several smaller packages that cover git history inspection, release recommendation, changelog generation and release orchestration.

Published packages in this monorepo:

#### @modulify/conventional-git

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-git"
  npm-package="@modulify/conventional-git"
/>

Thin wrapper over git with conventional-commit parsing and semantic tag helpers.

#### @modulify/conventional-bump

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-bump"
  npm-package="@modulify/conventional-bump"
/>

Version recommendation package that suggests the next semantic version based on git history.

#### @modulify/conventional-changelog

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-changelog"
  npm-package="@modulify/conventional-changelog"
/>

Changelog generation package built around git history and configurable templates.

#### @modulify/conventional-release

<ProjectMetaLinks
  href="https://github.com/modulify/conventional"
  label="@modulify/conventional-release"
  npm-package="@modulify/conventional-release"
/>

Higher-level release orchestration package that ties versioning, changelog updates and release commits into one flow.

## Public ecosystem work outside released packages

### modulify/m3-web

<ProjectMetaLinks
  href="https://github.com/modulify/m3-web"
  label="modulify/m3-web"
/>

This project supports UI-system work inside the broader modulify ecosystem. It adds a UI-layer counterpart to the utility and tooling packages around it.

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
