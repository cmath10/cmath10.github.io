---
name: pnpm-lock-conflict-resolution
description: Use this skill when resolving merge or rebase conflicts in pnpm-lock.yaml. It standardizes taking the lockfile from the target branch as source of truth, then replaying dependency intent with pnpm.
---

# pnpm-lock.yaml Conflict Resolution

## When To Use
Use this skill when:
- `pnpm-lock.yaml` has merge or rebase conflicts;
- conflict resolution must follow repository policy;
- the same conflict has to be resolved multiple times during one rebase chain.

## Source Of Truth Policy
- During rebase, always take `pnpm-lock.yaml` from the branch you rebase onto.
- During merge, always take `pnpm-lock.yaml` from the current target branch (`HEAD`).
- After taking that baseline, run:
```bash
pnpm install
```

## Required Rules
- Do not manually edit conflict markers in `pnpm-lock.yaml`.
- Resolve by replacing the whole `pnpm-lock.yaml` file from the selected baseline.
- For repeated conflict rounds, use the previous successful `pnpm-lock.yaml` resolution as the new base.
- If the current change intentionally updated dependencies, replay that dependency intent after conflict resolution and recreate a dedicated `chore: Updated pnpm-lock.yaml` commit.

## Workflow
1. Ensure the conflict exists:
```bash
git status --short
```
2. Resolve first conflict round during rebase:
```bash
ONTO=$(cat .git/rebase-merge/onto 2>/dev/null || cat .git/rebase-apply/onto)
git show "$ONTO:pnpm-lock.yaml" > pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
cp pnpm-lock.yaml .git/pnpm-lock-resolution-base
```
3. Resolve first conflict round during merge:
```bash
git show "HEAD:pnpm-lock.yaml" > pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
cp pnpm-lock.yaml .git/pnpm-lock-resolution-base
```
4. Resolve repeated conflict rounds in the same sequence:
```bash
cp .git/pnpm-lock-resolution-base pnpm-lock.yaml
pnpm install
git add pnpm-lock.yaml
cp pnpm-lock.yaml .git/pnpm-lock-resolution-base
```
5. Continue the operation:
```bash
git rebase --continue
# or
git merge --continue
```
6. Cleanup after completion:
```bash
rm -f .git/pnpm-lock-resolution-base
```

## Validation
- `git status --short` must not show conflict markers for `pnpm-lock.yaml`.
- `pnpm-lock.yaml` must be staged before `--continue`.
- The resolution must follow the source-of-truth policy above.
