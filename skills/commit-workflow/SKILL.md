---
name: commit-workflow
description: Use this skill when creating git commits in this repository. It standardizes commit splitting, Conventional Commit type selection, repository-specific scopes, and lockfile policy for the personal site.
---

# Commit Workflow

## When To Use
Use this skill when the user asks to:
- create one or more commits;
- split changes into separate commits;
- choose commit messages, types, or scopes;
- validate commit formatting before committing.

## Mandatory First Step
Before creating any commit in this repository, reread this skill from the top and treat it as the current source of truth for commit wording, scopes, splitting, and lockfile policy.

## Source Of Truth
- `AGENTS.md`

## Required Rules
- Commit format: Conventional Commits.
- Message language: English by default.
- Keep the subject concise and outcome-focused.
- Prefer completed-change wording in the subject.
- Allowed types: `feat`, `fix`, `build`, `ci`, `perf`, `docs`, `refactor`, `style`, `test`, `chore`.
- Useful optional scopes in this repository include:
  - `theme`
  - `content`
  - `i18n`
  - `glossary`
  - `philosophy`
  - `projects`
  - `docker`
  - `playwright`
  - `build`
- Do not invent synthetic scopes just to make the header look more technical.
- Breaking changes: use `!` in the header or a `BREAKING CHANGE` footer.
- Do not mix unrelated changes in one commit.
- Always commit `pnpm-lock.yaml` changes in a dedicated commit with no other files.
- For a `pnpm-lock.yaml`-only commit, use the exact header: `chore: Updated pnpm-lock.yaml`.
- Do not amend or rewrite history unless explicitly requested.

## Workflow
1. Inspect pending changes:
```bash
git status --short
git diff
```
2. Group files by logical intent.
Keep content, theme, Docker, Playwright, lockfile, and generated/disposable outputs clearly separated.
3. If `pnpm-lock.yaml` changed, split it into a dedicated commit.
4. Choose commit type and optional scope.
5. Compose the header:
```text
<type>(<scope>): <Short description>
```
If scope is not useful, omit it:
```text
<type>: <Short description>
```
6. Stage only the target files:
```bash
git add <files>
```
7. Create the commit non-interactively:
```bash
git commit -m "<type>(<scope>): <Description>"
```
8. Verify the result:
```bash
git show --name-status --oneline -n 1
```

## Practical Patterns
- Theme/layout refinement:
`feat(theme): Refined homepage footer layout`
- Content and copy update:
`docs(content): Updated career track and projects copy`
- Locale sync:
`docs(i18n): Synchronized glossary and philosophy pages`
- Docker workflow change:
`build(docker): Reorganized service Dockerfiles`
- Playwright recipe update:
`test(playwright): Improved geometry capture workflow`
- Lockfile refresh:
`chore: Updated pnpm-lock.yaml`
