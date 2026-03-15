---
title: Complexity
outline: deep
---

# Complexity

Back to [Glossary](/glossary).

<a id="essential-and-accidental-complexity"></a>
## Essential and accidental complexity

One of the most useful distinctions in software design is the difference between essential complexity and accidental complexity.

### Essential complexity

Essential complexity is the irreducible complexity of the problem itself.

It follows from the nature of the domain, the required behavior, the number of business rules, the shape of the data and the constraints that are intrinsic to the task. In other words, it is not created by the implementation. It is already present in the problem you are trying to solve.

At a given moment, for a fixed problem statement, essential complexity is relatively stable. It can be understood better, modeled more clearly and represented more elegantly, but it cannot simply be removed by implementation choices.

### Accidental complexity

Accidental complexity is the contingent complexity introduced by the chosen implementation, architecture, tooling, process or communication overhead.

It does not come from the problem domain itself. It appears while working on the essential complexity and is therefore largely a consequence of design, implementation and organizational choices.

Typical sources of accidental complexity include:

- abstractions that are broader than the problem requires
- indirection that does not improve changeability or clarity
- weak boundaries between concerns
- overcomplicated delivery and development workflows
- inconsistent naming and unreadable local conventions
- missing design where structure is already needed

### Why the distinction matters

This distinction helps separate unavoidable problem difficulty from avoidable implementation overhead.

If complexity is essential, the task is to model it carefully and make it legible. If complexity is accidental, the task is to remove, reduce or avoid it. Good engineering does not eliminate essential complexity. It prevents accidental complexity from growing around it.

That is also why architecture is better understood not as a choice between total simplicity and elaborate structure, but as a question of whether the structure is paying down accidental complexity or merely adding more of it.

Related reading: [Architecture should earn its complexity](/philosophy#architecture-should-earn-its-complexity).
