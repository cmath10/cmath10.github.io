---
title: Testing Through Accessibility
outline: deep
---

# Testing Through Accessibility

I usually treat accessibility markup not only as a way to make interfaces more inclusive, but also as a way to make them more testable.

When I structure an interface, I try to split it into coherent logical regions and describe those regions with dense, meaningful a11y markup. That gives me two benefits at once: the UI becomes easier to navigate for assistive technologies, and tests can refer to the interface in terms of user-facing intent rather than implementation details.

## Working idea

The more precisely an interface expresses its structure through roles, names and relationships, the easier it becomes to write tests that describe what the user is actually doing.

That usually leads to tests that are:

- less coupled to internal markup
- easier to read and maintain
- closer to product intent
- more resistant to refactoring that does not change the interface behavior or intent
- more likely to fail exactly when they should, namely when the intent of the interface has actually changed

## Why this matters to me

I prefer tests that operate on meaning, not on accidental structure.

If a test has to search for fragile selectors, anonymous wrappers or layout-specific hooks, that often signals that the interface itself is not expressing its intent clearly enough. Good accessibility markup helps reduce that gap.

The same is often true for `class`-based selectors, `data-*` hooks and similar testing anchors. They are frequently either details of a specific implementation or artificial markers introduced only for QA. Good accessibility semantics, by contrast, brings real product value on its own and not only as a convenience for the testing stack.

I also like accessibility-driven testing because accessibility is already standardized well enough to give teams a shared language. When people rely on roles, names and relationships defined by common standards, they tend to search for elements in similar ways and build selectors around the same concepts. That makes tests easier to discuss, review and evolve across a team.

## Typical direction

In practice, this approach usually starts with a few simple questions:

- what are the main logical regions of the screen
- which controls have stable accessible names
- which relationships between elements should be explicit
- what user intent should the test describe

## Tools that already help

Some tools already make this style of testing easier.

### JavaScript and TypeScript

- `DOM Testing Library` is the core building block. It encourages querying the DOM the way users perceive it instead of driving tests through implementation details.
- `user-event` helps express interactions as real user actions instead of low-level event dispatches.
- `Playwright` is especially useful at the browser level because its locator system supports `getByRole`, `getByLabel`, `getByAltText` and similar user-facing queries.
- `axe-core` is useful as a complementary automated layer. It does not replace intent-driven tests, but it helps catch accessibility violations systematically.

### React and Vue

- `React Testing Library` extends the Testing Library model into React and keeps tests close to DOM-level semantics instead of component internals.
- `Vue Testing Library` does the same for Vue and is especially useful when I want to keep tests focused on rendered behavior rather than framework mechanics.

### PHP

The PHP ecosystem has fewer tools that are explicitly built around accessibility-first querying.

For PHP projects, I would usually look at browser-level tools such as `Symfony Panther` when I need real end-to-end coverage. It does not provide the same a11y-centric query model out of the box as Testing Library or Playwright, but it is still useful as an execution layer around an interface that is already structured semantically.

That is one of the reasons I find the browser and DOM layer so important: once the interface exposes meaning clearly enough, many testing stacks can benefit from it, even if they are not equally strong at expressing accessibility concepts in their APIs.

## Example: testing a custom combobox through intent

Below is the kind of pattern I usually like. If the UI already exposes a clear accessibility contract, then I want the tests to reuse that contract directly instead of rebuilding it from fragile selectors in every file.

In this case the reusable primitive is not just "find a popup". It is "resolve an element by semantic criteria, while optionally following explicit accessibility relationships such as `aria-controls`".

```ts title="a11y-queries.ts"
import { computeAccessibleName } from 'dom-accessibility-api'
import { buildQueries } from '@testing-library/dom'
import { within } from '@testing-library/dom'

type Criteria = {
  role?: string
  name?: string
  controlledby?: HTMLElement
}

function queryAllByCriteria(container: HTMLElement, criteria: Criteria): HTMLElement[] {
  let candidate: HTMLElement | null = null

  if (criteria.controlledby) {
    const controlledId = criteria.controlledby.getAttribute('aria-controls')

    if (!controlledId) {
      throw new Error('Expected control to expose aria-controls')
    }

    candidate = criteria.controlledby.ownerDocument.getElementById(controlledId)

    if (!candidate) {
      throw new Error(
        `Expected aria-controls="${controlledId}" to reference an existing element`
      )
    }
  }

  if (!candidate && criteria.role) {
    candidate = within(container).getByRole(criteria.role, {
      name: criteria.name
    })
  }

  if (!candidate) {
    return []
  }

  if (criteria.role && candidate.getAttribute('role') !== criteria.role) {
    return []
  }

  if (
    criteria.name &&
    computeAccessibleName(candidate) !== criteria.name
  ) {
    return []
  }

  return [candidate]
}

const getMultipleError = (_container: HTMLElement, criteria: Criteria) =>
  `Found multiple elements matching criteria ${JSON.stringify(criteria)}`

const getMissingError = (_container: HTMLElement, criteria: Criteria) =>
  `Unable to find an element matching criteria ${JSON.stringify(criteria)}`

export const [
  queryByCriteria,
  getAllByCriteria,
  getByCriteria,
  findAllByCriteria,
  findByCriteria
] = buildQueries(queryAllByCriteria, getMultipleError, getMissingError)
```

Then the actual test becomes shorter and more explicit about what it is doing. In this example I assume that `getByCriteria` is already registered in the shared test setup, so `within(...)` can use it directly:

```ts title="project-members.spec.ts"
import userEvent from '@testing-library/user-event'
import { render, screen, within } from '@testing-library/vue'

import ProjectMembersDialog from './ProjectMembersDialog.vue'

test('adds a reviewer through the members dialog', async () => {
  const user = userEvent.setup()

  render(ProjectMembersDialog, {
    props: {
      open: true,
      projectName: 'Omnica',
      availableReviewers: [
        { id: 'anna-case', name: 'Anna Case' },
        { id: 'kirill-zaitsev', name: 'Kirill Zaitsev' }
      ]
    }
  })

  const workspace = screen.getByRole('region', { name: 'Project members' })
  const dialog = within(workspace).getByRole('dialog', {
    name: 'Manage project members'
  })

  const reviewerForm = within(dialog).getByRole('group', {
    name: 'Add reviewer'
  })

  const reviewerCombobox = within(reviewerForm).getByRole('combobox', {
    name: 'Reviewer'
  })

  await user.click(reviewerCombobox)

  const reviewerOptions = within(reviewerForm).getByCriteria({
    role: 'listbox',
    name: 'Reviewer suggestions',
    controlledby: reviewerCombobox
  })

  await user.click(
    within(reviewerOptions).getByRole('option', { name: 'Kirill Zaitsev' })
  )

  await user.click(
    within(reviewerForm).getByRole('button', { name: 'Add reviewer' })
  )

  expect(
    within(dialog).getByRole('listitem', { name: 'Kirill Zaitsev' })
  ).toBeVisible()
})
```

What I like here is that the test still moves through the interface in terms of:

- region
- dialog
- group
- combobox
- listbox
- option
- button

But the `aria-controls` contract is no longer open-coded in every test. It becomes a reusable primitive that a team can share across a design system or product suite. That keeps tests shorter without pushing them back toward implementation detail.

For a larger codebase, this kind of helper can evolve into a fuller semantic query layer. Even in this smaller form, it already turns an accessibility contract into something reusable and easy to discuss inside a team.

If this kind of query proves useful often enough, I would usually move it from a local example into the shared test setup. At that point it stops being a one-off helper and becomes part of the common testing language of the project, which is why the snippet above already uses it as if it were built in.

I also think that the current verbosity of accessibility-oriented tests is often a tooling problem more than a semantics problem. Even in this small example, getting to the shape I actually want required a custom query. The pattern itself is not exotic; what is still missing is a more mature layer of tools that treats these contracts as first-class citizens.

## Breaking screens into semantic regions

When I think about accessibility structure, I usually start at the largest scale first and avoid dropping into small details too early.

The first pass is about the overall layout:

- what are the global zones of the screen
- where is the navigation
- where is the main content
- whether there is a header or footer
- how these parts are positioned relative to each other

That first classification already gives me an initial semantic map of the interface. It helps separate what belongs to page-level navigation, what belongs to content, and what should probably remain local to a smaller interaction context.

Only after that do I move down the hierarchy and start analyzing the internals of each block. At that point I usually look at:

- which subregions are meaningful enough to be named
- which controls belong to the same interaction group
- which relationships between labels, descriptions and controlled elements should be explicit
- where a block is cohesive enough to become its own semantic unit

This top-down pass matters to me because it reduces chaos early. Instead of scattering roles and labels across the page in a reactive way, I get a clearer structure first and then refine it level by level. That usually leads to tests that can also descend through the interface in the same order: layout first, then section, then local control group, then concrete widget.

## Accessible names as stable testing handles

When I use accessible names in tests, I try to start with the semantics that already exist in plain HTML before adding anything extra.

If the interface already contains a native element with enough meaning, that is often the best handle. For example, if the UI has:

```html
<button>Save</button>
```

then the visible text is already a strong enough basis for both accessibility and testing. In that case I do not want to add ARIA just for the sake of testing. The native semantics and the existing content are already doing their job.

This matters because I do not see ARIA as decoration. I use it when it closes a real semantic gap:

- when a native HTML element does not express the interaction well enough
- when a custom widget needs roles and relationships that plain markup does not provide
- when labels, descriptions or controlled elements need to be made explicit

What I try to avoid is adding extra accessibility attributes only to manufacture selectors for QA. That usually creates a second artificial layer on top of the UI instead of improving the interface itself.

At the same time, my own practice tells me that it is not actually that easy to overdo useful ARIA relationships if they reflect real structure. In many cases richer ARIA helps eliminate ambiguity rather than create it. If a page contains several similar structures in different places, good roles, names and relationships make it easier to first localize the relevant area and then cut off the remaining false matches.

That becomes especially useful with attributes such as `aria-controls` or `aria-owns`. In the simple example above the control points to a single element, but the standard allows more complex cases as well. Those situations are not necessarily the default, but they are realistic enough that a stronger relationship-aware testing model can pay off.

The order I prefer is simple:

1. Start with native HTML semantics and visible content.
2. Use accessible names that already emerge from the markup.
3. Add ARIA only where HTML semantics stop being sufficient.
4. Let tests rely on that resulting contract.

This keeps testing closer to the actual product interface. The same names that help a user understand an interface can also help a test locate and describe the right element.

## Notes

- Accessibility-driven testing does not mean that the same UI flow has to be executed under every supported locale. If the goal of the test is not localization itself, one stable locale is usually enough. I personally tend to prefer English (`en`, `en-GB` or `en-US`, depending on what is available), because it keeps accessible names stable and the test corpus easier to reason about.

## Useful references

Some official documents and guides that are worth keeping nearby:

- [W3C WAI Home](https://www.w3.org/WAI/) for the broader accessibility ecosystem and entry points into standards, tutorials and evaluation resources
- [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/) for the role of ARIA in web accessibility
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) for practical semantics, keyboard behavior and accessible widget guidance
- [APG Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/) for concrete component and interaction patterns
- [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/) for how accessible names and descriptions are actually derived
- [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) for the core accessibility standard and its supporting materials
- [WAI Page Structure Tutorial](https://www.w3.org/WAI/tutorials/page-structure/) for landmarks, headings and structural navigation
- [Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/) for testing and evaluation guidance
