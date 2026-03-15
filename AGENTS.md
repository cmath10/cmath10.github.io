# AGENTS.md

## Goals
- Avoid clarification loops by proposing a concrete interpretation when details are missing.
- Default to the language of the user's initial message unless they explicitly request a different language.
- Match the tone and formality of the user's initial message unless they explicitly ask for a change.
- Treat a language switch in the user's message as an explicit request to respond in that language.
- If a message is mixed-language, reply in the dominant language unless the user specifies otherwise.
- Prefer lightweight validation for content-only changes and stronger validation for layout, behavior, Docker, or build changes.
- Do not edit generated or disposable outputs under `artifacts/` unless the task explicitly requires it.

## Reporting
- Keep handoff reports natural and outcome-focused: describe what was done and why it matters.
- Do not proactively list skipped optional checks unless the user explicitly asks.
- Always mention blockers, failed required checks, or omissions that can affect correctness, reproducibility, or visual fidelity.

## Purpose
This file defines practical instructions for working in the `cmath10` repository, with a focus on a VitePress-based personal site, visual verification, Dockerized local workflows, and bilingual content maintenance.

## Repository Structure
- This project is a VitePress personal site with English root content and Russian `/ru/` content.
- Main content directories:
  - `.vitepress/` - site config and theme implementation
  - `.vitepress/theme/` - custom Vue components, styles, locale data
  - `glossary/` and `ru/glossary/` - glossary sections
  - `tests/` - Playwright specs and geometry probes
  - `recipes/` - make recipe fragments and geometry scenarios
  - `docker/` - service-specific Dockerfiles
- Temporary and disposable artifacts live under `artifacts/` and are ignored by git.

## Local Environment
- Primary package manager: `pnpm`
- Local dev site: `docker compose` + Traefik/OrbStack domain routing
- Default dev URL: `http://cmath10.test`

## Running Checks

### Main Commands
- Dev site:
```bash
make up.d
```
- Stop dev site:
```bash
make down
```
- Follow logs:
```bash
make logs
```
- Production build:
```bash
pnpm build
```
- Playwright tests:
```bash
make test
```
- Homepage screenshot:
```bash
make shot.home
```
- Geometry probe:
```bash
make geom PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env
```

### Suggested Validation By Change Type
- Markdown-only or copy-only changes:
  - usually no checks required
  - run `pnpm build` if the change affects links, frontmatter, or page structure
- Theme, layout, or component changes:
  - run `pnpm build`
  - run `make shot.home` when homepage visuals changed
  - run `make geom ...` when alignment or spacing is part of the task
- Playwright, screenshot, or geometry workflow changes:
  - run `pnpm exec playwright test --list`
  - run the specific `make shot...` or `make geom...` command touched by the change
- Docker or compose changes:
  - run `docker compose config`

## Important Project Rules
- Commit messages follow Conventional Commits.
- Before creating any commit, reread `skills/commit-workflow/SKILL.md` and follow it as the source of truth for commit splitting, wording, scopes, and lockfile policy.
- If `pnpm-lock.yaml` changes, keep lockfile intent isolated and easy to review.
- Keep English and Russian content aligned in meaning when both locales cover the same page or concept.
- Treat `Glossary` as neutral reference material and `Philosophy` as authorial perspective; do not mix their tones unintentionally.
- Do not commit disposable outputs from `artifacts/`; future visual baselines should live in a dedicated, intentional location near tests once stabilized.

## Local Skills
- `skills/commit-workflow/SKILL.md` - rules for splitting changes into commits and writing changelog-friendly Conventional Commit messages.
- `skills/pnpm-lock-conflict-resolution/SKILL.md` - safe procedure for resolving `pnpm-lock.yaml` conflicts during merge or rebase.
- `skills/visual-verification/SKILL.md` - workflow for validating screenshots, geometry, and layout-sensitive changes.
