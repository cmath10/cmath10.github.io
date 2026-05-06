# Theming Notes

This document describes how theming currently works in `cmath10`, where the active color sources live, and how to change a palette without leaving stale hues behind.

## Goal

The project does not have a single theme switchboard. The visual palette emerges from several layers working together:

1. site-level CSS tokens in `.vitepress/theme/theme.css`
2. PrimeVue styled-mode tokens in `.vitepress/theme/prime-preset.ts`
3. local component overrides in `.vitepress/theme/theme.css`
4. hardcoded gradients and RGBA accents in section-specific rules

If only one layer is changed, the result is usually partial. The site may feel "mostly" updated while cards, tags, highlights, or dark surfaces still carry the previous hue family.

## Current Theme Architecture

### 1. Site tokens

File:

- `.vitepress/theme/theme.css`

Primary responsibilities:

- brand tokens used by VitePress and local components:
  - `--vp-c-brand-1`
  - `--vp-c-brand-2`
  - `--vp-c-brand-3`
  - `--vp-c-brand-soft`
- site-wide surfaces and gradients:
  - `--site-body-bg`
  - `--site-doc-gradient`
  - `--site-topbar-gradient`
  - `--site-hero-gradient`
  - `--site-panel-bg`
  - `--site-card-surface`
- blueprint grid color:
  - `--site-grid-minor`
  - `--site-grid-major`
- typography-adjacent accents:
  - `--vp-home-hero-name-background`
  - `--vp-home-hero-image-background-image`

This file also contains many local dark overrides, including:

- section backgrounds
- card overrides
- chip and pill backgrounds
- navbar and local-nav surfaces

### 2. PrimeVue styled-mode preset

File:

- `.vitepress/theme/prime-preset.ts`

PrimeVue is mounted in styled mode through:

- `.vitepress/theme/index.ts`

The active theming entry is:

- `definePreset(Aura, { semantic: ... })`

The most important areas:

- `semantic.primary`
  Defines the palette family (`amber`, `blue`, `sky`, etc.)
- `semantic.colorScheme.light`
  Light-mode `primary`, `highlight`, `surface`, `formField`
- `semantic.colorScheme.dark`
  Dark-mode `primary`, `highlight`, `surface`, `formField`
- `semantic.focusRing`
  Focus styling

If the site palette changes but this preset does not, PrimeVue components keep the old color character.

### 3. PrimeVue component registration

File:

- `.vitepress/theme/index.ts`

Currently used on the homepage:

- `PCard`
- `PTag`
- `PDivider`

These components are styled by the preset and then further shaped by local CSS classes such as:

- `.site-panel-card`
- `.site-project-card`

### 4. Local component-level overrides

File:

- `.vitepress/theme/theme.css`

Important examples:

- `.site-panel-card.p-card`
- `.site-project-card.p-card`
- `.site-panel-card .p-card-body`
- `.site-project-card .p-card-content`
- `.site-panel-card .p-tag`
- `.site-project-card .p-tag`
- `.dark .site-tech-chip`
- `.dark .site-link-pill`
- `.dark .site-link-pill.secondary`
- `.dark .site-tech-chip-muted`

These rules are often where residual old hues survive after a palette shift.

## Theming Checklist

When changing the palette family, walk through these layers in order.

### Phase 1. Choose the palette family

- Decide the accent family first:
  - `blue`
  - `sky`
  - `amber`
  - another family
- Decide the intended mood separately for:
  - light theme
  - dark theme

Important:

- The dark theme is not just "light theme inverted".
- It needs its own surface temperature and contrast model.

### Phase 2. Update site-level tokens

Edit `.vitepress/theme/theme.css`:

- `--vp-c-brand-*`
- `--site-grid-*`
- `--site-doc-gradient`
- `--site-topbar-gradient`
- `--site-hero-gradient`
- `--vp-home-hero-name-background`
- `--vp-home-hero-image-background-image`

Then review dark surfaces:

- `--site-body-bg`
- `--site-panel-bg`
- `--site-card-surface`
- section-level dark backgrounds

Do not stop after changing brand tokens. The surface color temperature matters just as much.

### Phase 3. Update PrimeVue preset

Edit `.vitepress/theme/prime-preset.ts`:

- change `semantic.primary` to the intended family
- review `dark.primary`
- review `dark.highlight`
- review `dark.surface`

Notes:

- `highlight` can preserve a previous hue even if `primary` changed
- `surface` can keep components feeling cold even when the rest of the page warmed up

### Phase 4. Audit local dark overrides

Search in `.vitepress/theme/theme.css` for:

- non-`oklch(...)` color literals
- old accent families
- old hardcoded color literals
- component-specific dark backgrounds

Typical offenders:

- chips
- pills
- section-specific radial accents
- local nav
- muted tags
- card internals

### Phase 5. Audit homepage cards and tags

Homepage cards are a common false positive.

Even when the card root looks correct, the perceived color may still come from:

- `.p-card-body`
- `.p-card-content`
- `.p-card-caption`
- `.p-tag`
- inherited PrimeVue highlight/surface variables

If the homepage still feels off, inspect these first.

### Phase 6. Verify in dark mode first

Dark mode reveals theme inconsistency more aggressively than light mode.

Recommended flow:

1. `make build`
2. `make shot.home.dark`
3. inspect the screenshot
4. only then recheck light mode

### Phase 7. Search for stale hue families

Useful strategy:

- search for old family names in the theme files
- search for known old hex values
- search for hardcoded non-`oklch(...)` accents

Typical examples:

- `cyan`
- `sky`
- `blue`
- old brand hexes

## Why Partial Palette Shifts Happen

A palette change often feels incomplete for four reasons:

1. the brand tokens changed, but surfaces did not
2. the site changed, but PrimeVue kept its previous semantic preset
3. dark gradients stayed in the old hue family
4. local component overrides still contained hardcoded accents

In practice this means the project has:

- a palette of intention
- and a palette of implementation

Theming only feels finished when those two match.

## Building Deliberately Contrast Themes

One useful lesson from the partial topaz phase is that an "incomplete" palette shift can sometimes reveal a valid direction rather than just a mistake.

The project can support two different kinds of theme strategy:

- harmonic themes
  Accent and neutral surfaces belong to the same temperature family.
- contrast themes
  Accent and neutral surfaces are intentionally separated.

Examples:

- `topaz + cool graphite`
- `electric blue + warm charcoal`
- `amber + slate`

An important variation is a split between:

- warm accent glow
- cool neutral surfaces

This is especially useful when the project uses large atmospheric gradients. In practice, `hero` and `topbar` can carry a warm glow while document and section surfaces remain cool.

In a contrast theme, the goal is not to make everything the same hue. The goal is to create a controlled relationship between:

- accent color
- neutral surfaces
- text contrast
- section atmosphere

### Accent vs neutral token groups

When designing this kind of theme, it helps to split the current tokens into two conceptual groups.

Accent-oriented tokens:

- `--vp-c-brand-1`
- `--vp-c-brand-2`
- `--vp-c-brand-3`
- `--vp-c-brand-soft`
- `--site-grid-minor`
- `--site-grid-major`
- `--vp-home-hero-name-background`
- `--vp-home-hero-image-background-image`
- section radial accents inside:
  - `--site-doc-gradient`
  - `--site-topbar-gradient`
  - `--site-hero-gradient`
- `PrimeVue semantic.primary`
- `PrimeVue highlight`
- tag, pill, chip accent colors

Neutral/surface-oriented tokens:

- `--site-body-bg`
- `--site-panel-bg`
- `--site-card-surface`
- `--site-card-border`
- `--site-doc-gradient` base layer
- `--site-topbar-gradient` base layer
- `--site-hero-gradient` base layer
- dark section backgrounds:
  - `.dark .site-band-focus`
  - `.dark .site-band-projects`
  - `.dark .site-band-story`
  - `.dark .site-band-contact`
- local dark component surfaces:
  - `.dark .site-tech-chip`
  - `.dark .site-link-pill.secondary`
  - `.dark .site-tech-chip-muted`
  - `.dark .VPLocalNav`
- `PrimeVue semantic.colorScheme.dark.surface`

### Tokens that should usually stay aligned

Even in a contrast theme, some tokens should normally remain close to the accent family:

- `PrimeVue semantic.primary`
- `PrimeVue highlight`
- tag and pill accent styling
- grid color
- hero name gradient

If these drift too far apart, the theme stops feeling intentionally contrasted and starts feeling inconsistent.

### Tokens that can be intentionally separated

These are strong candidates for deliberate contrast:

- dark body/background surfaces
- section dark surfaces
- card base surfaces
- local nav and top bar base surfaces
- card internals under `PrimeVue`

This is where a theme can gain personality. For example:

- warm topaz accents on cold blue-black surfaces
- cool electric blue accents on warm charcoal surfaces

### Practical recipe for a contrast theme

1. choose the accent family first
2. choose the neutral family second
3. keep text legibility anchored to the neutral family, not the accent
4. keep `PrimeVue primary/highlight` aligned with the accent family
5. keep `PrimeVue dark.surface` aligned with the neutral family
6. audit all local dark overrides for accidental crossover
7. inspect homepage cards and tags separately from the global background

### Gradient split strategy

For this project, gradients are not just decorative. They are one of the main carriers of color temperature.

A useful pattern is to treat each gradient as two layers:

- glow layer
  Usually the radial accent at the top-left or bottom-right
- base layer
  Usually the linear surface gradient underneath

This makes it possible to build themes such as:

- warm glow + cool surface
- cool glow + warm surface

The most promising split discovered so far is:

- `hero` and `topbar`
  Warm accent glow, because these zones benefit from stronger identity and drama
- `document` and regular content sections
  Cool surface atmosphere, because readability and tonal stability matter more there

Applied to tokens, that usually means:

- keep `--site-doc-gradient` and section base backgrounds aligned with the neutral family
- allow `--site-topbar-gradient` and `--site-hero-gradient` radial accents to follow the accent family
- decide separately whether the linear base of `topbar` and `hero` should stay neutral or be lightly warmed

This split is often more expressive than forcing every gradient to use the same hue family.

### Common failure mode

The most common failure mode is an accidental hybrid:

- accent tokens already changed
- some gradients changed
- dark surfaces did not
- `PrimeVue surface` did not
- local card/tag overrides did not

This can look broken, but it can also expose a useful color relationship worth formalizing.

If a partial theme looks interesting, do not immediately normalize it away. First ask:

- is the contrast unpleasant, or just unfamiliar?
- is the temperature split coherent?
- does the accent family feel intentionally foregrounded against the surfaces?
- would the theme improve if the remaining surfaces were aligned to the same contrast logic rather than to the accent hue?

That is exactly how a promising contrast theme can emerge from what first looked like an incomplete palette migration.

## Current Topaz Snapshot

The current topaz phase already has several strong qualities:

- the brand family is coherent
- the dark theme now has warmer surfaces
- homepage cards and tags were explicitly brought into the same dark family
- the result is visually distinct and worth preserving as an experiment branch

What may still need refinement later:

- some light-theme surfaces may now lean slightly beige
- dark neutrals may need to be made either more elegant or more contrasty
- topaz intensity may need separate tuning for:
  - text accents
  - gradients
  - grid
  - tags

## Recommended Next-Step Strategy

If continuing with topaz, prefer this order:

1. refine dark neutral surfaces
2. refine tag and chip contrast
3. refine gradient strength
4. refine light theme only after dark feels coherent

This order tends to produce fewer false conclusions than editing everything at once.
