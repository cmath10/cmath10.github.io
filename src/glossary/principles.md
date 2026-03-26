---
title: Principles
outline: deep
---

# Principles

Back to [Glossary](/glossary).

<a id="dry"></a>
## DRY (Don't Repeat Yourself)

DRY ("Don't Repeat Yourself") is best understood as a principle about duplicated knowledge, not as a ban on all visible repetition.

Two pieces of code can look similar without necessarily encoding the same responsibility. Because of that, not every duplicate fragment should be treated as a defect that must be abstracted away immediately.

What matters more is whether one and the same rule, model or assumption is being maintained in multiple places and is likely to drift. That is the dangerous kind of duplication.

Temporary duplication can be preferable when the right abstraction is still unclear. A duplicate is often less harmful than a weak abstraction that spreads the wrong model across the codebase.

Related reading: [DRY is about duplicated knowledge, not visual repetition](/philosophy#dry-is-about-duplicated-knowledge-not-visual-repetition).

<a id="wet"></a>
## WET ("Write Everything Twice" / "We Enjoy Typing")

WET is an informal counter-label usually applied to codebases or solutions where duplication is left unmanaged. The expansion varies. Common versions include "Write Everything Twice" and "We Enjoy Typing". In practice, the term is used to describe repetition that keeps re-encoding the same knowledge without a clear reason.

Unlike DRY, WET is not a design principle. It is a warning sign. It usually points to repeated rules, business logic or structural decisions that are likely to drift apart and make changes more expensive over time.

Not every duplicate makes a system WET. The term becomes useful when repetition stops being temporary or intentional and starts turning maintenance into guesswork.

At the same time, WET is sometimes invoked in a narrower heuristic sense: do not introduce an abstraction until there is at least a second real instance of the same code or behavior. In that usage, the point is not to celebrate duplication, but to resist premature abstraction when the common shape is still unstable.

<a id="solid"></a>
## SOLID

SOLID is a set of principles used to reason about code structure, responsibility allocation, dependency direction and interface shape.

- <span class="glossary-acronym"><span class="glossary-acronym-letter">S</span>RP</span> — Single Responsibility Principle, a reminder that one unit should not accumulate unrelated reasons to change.
- <span class="glossary-acronym"><span class="glossary-acronym-letter">O</span>CP</span> — Open-Closed Principle, a reminder to prefer extension over repeated modification of stable behavior.
- <span class="glossary-acronym"><span class="glossary-acronym-letter">L</span>SP</span> — Liskov Substitution Principle, a reminder that substitutions should preserve the expectations established by the original contract.
- <span class="glossary-acronym"><span class="glossary-acronym-letter">I</span>SP</span> — Interface Segregation Principle, a reminder to keep interfaces narrow enough that clients depend only on what they actually use.
- <span class="glossary-acronym"><span class="glossary-acronym-letter">D</span>IP</span> — Dependency Inversion Principle, a reminder to organize dependencies around abstractions and stable boundaries rather than concrete details.

In practice, SOLID is most useful not as a checklist to be applied immediately to every piece of code, but as a language for recognizing structural problems and discussing which of them actually deserve intervention.

Related reading: [Clean code is a means, not a slogan](/philosophy#clean-code-is-a-means-not-a-slogan).

<a id="grasp"></a>
## GRASP (General Responsibility Assignment Software Patterns)

GRASP is a set of responsibility-assignment principles used to reason about where behavior should live and how objects or modules should collaborate.

In practice, GRASP is useful as a way to think about responsibility placement, cohesion and coupling, especially when designing boundaries or deciding which unit should own a piece of behavior.

Related reading: [Clean code is a means, not a slogan](/philosophy#clean-code-is-a-means-not-a-slogan).
