---
title: Philosophy
outline: deep
---

# Philosophy

This page is about how I prefer to work across product development, library design, team collaboration and technical decision-making.

Short definitions for the recurring terms on this page live in the [Glossary](/glossary).

## Practical over ornamental

I care about good design, but I do not treat elegance as a goal on its own. A solution is only as good as its ability to remain understandable, maintainable and useful under real project constraints.

That usually means:

- avoiding abstractions that are more impressive than helpful
- choosing structures that can survive handoff and long-term maintenance
- preferring clarity over cleverness, especially in shared code

## Architecture should earn its complexity

I like systems with clear boundaries, explicit responsibilities and stable integration points. But I also believe architecture should be proportional to the problem and no more.

I simplify systems that have become heavier than the problem requires, and I avoid abstractions when they do not justify their cost. I care about design patterns, but I treat them as tools for specific conditions, not as defaults.

I usually start with simple prototypes and add abstractions, indirection and patterns when the problem itself shows that they are needed. Just as importantly, I try not to miss the moment when those conditions have already appeared.

I have worked with enough systems where teams avoided abstraction and design out of fear of overengineering or raising the entry barrier. In practice, that often did not keep the system simple. It turned the codebase into something harder to read, harder to change and much more spaghetti-like than the right amount of structure would have been.

Good architecture is often about recognizing the moment when additional complexity starts paying for itself, and introducing it before the system collapses into [accidental complexity](/glossary/complexity#essential-and-accidental-complexity) instead.

## Libraries are a serious form of product work

I treat library design as more than utility extraction. A library is a product surface for other engineers, which means API shape, naming, defaults, documentation and failure modes all matter.

I also try not to overload libraries with responsibilities they do not need to carry. Reusable components should stay focused, explicit and narrow enough to remain teachable.

When I work on libraries, I usually care about:

- whether the API feels teachable
- whether the abstractions reduce repeated effort instead of hiding complexity
- whether the package can evolve without becoming fragile

At the level of reusable components, I generally prefer a [fail-fast](/glossary/failure-modes#fail-fast-and-fail-safe) approach. I would rather let misuse surface early and clearly than hide it behind vague behavior. At the product level, I lean more toward [fail-safe](/glossary/failure-modes#fail-fast-and-fail-safe) design, because continuity of operation and user-facing resilience matter much more there.

## Constraints are part of the design

Business constraints are not something that appears after engineering decisions. They are part of the design space from the start.

Deadlines, team composition, onboarding cost, support burden and release pressure should influence the solution. I am comfortable making tradeoffs when they are explicit, deliberate and reversible where possible.

## Tooling is part of the developer experience

I value development environments, release pipelines and local workflows because they shape how people actually build software every day.

A strong workflow reduces hesitation, lowers the cost of change and makes quality easier to maintain. Tooling is not separate from engineering quality. It is one of the ways quality becomes repeatable.

## Documentation is part of the implementation

I do not see documentation as a final polish step. If a system is difficult to explain, it is often a signal that the system itself still needs work.

This matters especially in libraries, extension platforms and shared internal tooling, where the quality of adoption depends on how quickly another engineer can understand the intended model.

## Clean code is a means, not a slogan

Ideas like SOLID and GRASP are useful because they provide language for evaluating structure, coupling and responsibility. But I do not use them as rigid templates, and I do not apply them mechanically the moment I start writing code.

When I follow SOLID proactively, it is usually because I already have implementation experience or a strong heuristic that tells me a certain boundary, dependency direction or interface split will matter. In other cases, I often apply it more reactively: when a violation has been observed, understood and is likely to turn into a real maintenance or changeability problem.

That distinction matters especially in legacy systems. I am not going to rewrite a legacy module just to make it look more principled if it is outside the current area of work and there is no actual pressure to change it. Clean code matters because it helps teams move with confidence. If a principle improves that, it is valuable. If it only turns the solution into ceremony or triggers unnecessary refactoring, then it is probably being applied in the wrong way.

## DRY is about duplicated knowledge, not visual repetition

I do not treat [DRY](/glossary/principles#dry) as an instruction to eliminate every duplicate fragment as soon as I notice it. What matters more is whether the same knowledge is being encoded in multiple places and is likely to drift apart.

Bad abstractions usually cause deeper and more durable damage than duplicates. A weak abstraction spreads the wrong model across the codebase, makes change harder and teaches future readers the wrong boundary. A duplicate is often cheaper and more honest.

Because of that, I sometimes leave duplication in place even when I am fairly sure two pieces of code are conceptually the same. If I cannot find a good abstraction, I take that as a signal to analyze responsibilities and module boundaries more carefully instead of forcing a premature unification.

Sometimes the limiting factor is not the model itself, but the surrounding conditions: the available tooling, language ergonomics, framework constraints or the shape of the existing system. In those cases I would still rather avoid introducing an abstraction whose return on investment is likely to be negative.

I also think this matters during fast prototyping. It is often said that, when validating business hypotheses, architectural strictness should be relaxed in favor of speed. I generally agree with that, but people are often vague about what exactly is being relaxed and which principles are actually worth suspending for a while.

For me, DRY is usually one of the first principles that can be deliberately loosened in a prototype. Temporary duplication is often a reasonable price for learning quickly. Premature abstraction, on the other hand, can slow the feedback loop down and lock an unstable model into places where it does not belong yet.

## Technical debt should buy something real

I think the financial debt metaphor is useful, but only up to a point. [Technical debt](/glossary/change-and-maintenance#technical-debt) is not identical to a loan, yet it behaves similarly enough to be a good engineering analogy.

Taking on debt for a tangible goal can be reasonable. Shipping earlier, testing a product direction, unblocking a dependency or preserving delivery momentum can all justify a shortcut. What matters is whether the decision buys something concrete and whether the cost is understood in advance.

What I do not consider healthy is debt that is taken casually, poorly documented or never repaid. The problem is rarely the existence of debt itself. The problem is pretending it is free.

I prefer technical debt to be explicit, bounded and connected to a real outcome. If we take it on, we should know what we gained, what risks we accepted and what conditions should trigger repayment. Otherwise it stops being a tradeoff and starts becoming neglect.

## Legacy is not automatically technical debt

I do not treat [legacy](/glossary/change-and-maintenance#legacy) and [technical debt](/glossary/change-and-maintenance#technical-debt) as interchangeable terms. A system can be old, awkward, poorly documented or difficult to change without being technical debt in the strict sense.

Legacy is often just software that has survived long enough to accumulate history, constraints, compatibility obligations and traces of decisions made under conditions that no longer exist. Age alone does not make it debt. Neither does the fact that the code is unpleasant to work with.

I also do not equate legacy with an old technology stack. Not every old system running on dated technology is legacy in the meaningful sense, and sometimes freshly written code already is. If a codebase is rigid, opaque, expensive to change and shaped by short-term decisions that keep fighting future work, it can become legacy surprisingly early.

What can become technical debt is the conscious decision to keep relying on problematic legacy structure when the costs and risks are already understood. In that case, the debt is not the legacy itself. The debt is the deliberate postponement of change despite knowing that the current state is working against the product or the team.

This distinction matters because it changes how I reason about remediation. Legacy is a context. It needs interpretation, prioritization and respect for the constraints it still serves. Technical debt is a tradeoff. It should be evaluated in terms of what it buys, what it costs and when it stops being acceptable.

That is why I do not assume that every legacy module should be rewritten. Sometimes legacy remains in place because it is stable, low-risk and not currently worth disturbing. The debt begins when continuing to leave it alone is no longer a neutral decision, but an actively expensive one.

## What I try to optimize for

- systems that stay legible after the initial implementation
- interfaces that are pleasant to use and maintain
- decisions that acknowledge both technical and business reality
- workflows that help teams ship without unnecessary friction
