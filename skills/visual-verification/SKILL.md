---
name: visual-verification
description: Use this skill when a task affects layout, spacing, alignment, screenshots, or other visually sensitive behavior in this repository. It standardizes when to use Playwright screenshots, geometry probes, and build checks.
---

# Visual Verification

## When To Use
Use this skill when:
- layout, spacing, alignment, or typography changed;
- homepage sections, hero, timeline, footer, navbar, or cards changed;
- screenshot recipes or geometry recipes changed;
- a bug report is about visual mismatch rather than runtime behavior.

## Source Of Truth
- `AGENTS.md`
- `recipes/playwright.mk`
- `recipes/geom/README.md`

## Required Rules
- Prefer `pnpm build` plus a targeted visual check over guessing from code.
- Use screenshots for appearance and geometry probes for alignment/spacing questions.
- Do not treat a screenshot alone as sufficient proof when the issue is geometric; combine it with measurable relations.
- Keep disposable outputs under `artifacts/`; do not prepare committed baselines there.

## Primary Commands
- Build:
```bash
pnpm build
```
- Homepage screenshot:
```bash
make shot.home
```
- Dark homepage screenshot:
```bash
make shot.home.dark
```
- Projects screenshot:
```bash
make shot.projects
```
- Geometry scenario:
```bash
make geom PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env
```

## Workflow
1. Decide whether the task is primarily visual, geometric, or both.
2. Run `pnpm build` when the change affects rendered site structure.
3. If the task is visual:
   - run the closest screenshot recipe;
   - compare the resulting artifact with the expected outcome.
4. If the task is geometric:
   - run `make geom` with an existing scenario when available;
   - if needed, define selectors and relations explicitly;
   - inspect both the JSON output and overlay image.
5. If no existing geometry scenario fits, add a reusable one under `recipes/geom/`.
6. Report both the visual outcome and the strongest measurable signal you used.

## Geometry Guidance
- Prefer relation checks such as center-to-center alignment, segment continuity, and block-to-block gaps.
- Use screenshots as a visual confirmation layer, not the only source of truth.
- Favor reusable scenario files over long one-off command-line selector strings.

## Practical Patterns
- Navbar/hero/footer polish:
  - `pnpm build`
  - `make shot.home`
- Dark mode tuning:
  - `pnpm build`
  - `make shot.home.dark`
- Timeline alignment or spacing:
  - `make geom PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env`
  - inspect `artifacts/playwright/geom/`
- New geometry-sensitive section:
  - add a scenario in `recipes/geom/`
  - run `make geom ...`
