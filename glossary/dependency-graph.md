---
title: Dependency Graph
outline: deep
---

# Dependency Graph

Back to [Glossary](/glossary).

Dependency relationships can be read as a graph. Two of the most useful terms for talking about that graph are coupling and cohesion.

<a id="coupling"></a>
## Coupling

Coupling describes how strongly parts of a system depend on one another.

It is useful to think about coupling in graph terms: it describes the shape and density of the dependency graph between modules or other architectural units.

Tight coupling makes changes propagate more easily across boundaries, increases the cost of local decisions and often makes reuse harder. Lower coupling reduces that propagation and makes it easier to evolve one part of a system without destabilizing another.

Low coupling is not the same thing as no coupling. The goal is usually explicit, proportionate dependency rather than absolute isolation.

<a id="cohesion"></a>
## Cohesion

Cohesion describes how strongly the contents of a module, component or abstraction belong together.

It is also useful to think about cohesion in graph terms: it describes the internal relatedness of the responsibility graph inside a module, component or abstraction.

High cohesion usually means that a unit has a focused responsibility and its internal parts reinforce a single purpose. Low cohesion usually means unrelated concerns have been grouped together for convenience, accident or historical reasons.

Cohesion is one of the clearest signals for whether a boundary is well chosen.

<a id="abstraction"></a>
## Abstraction

An abstraction is a model, interface or structural layer that hides some detail in order to present a more useful unit of reasoning.

Good abstractions reduce repeated effort, clarify responsibility and make change easier to localize. Weak abstractions do the opposite: they hide important differences, blur boundaries and force unrelated concerns into the same shape.

The practical question is not whether a piece of code can be abstracted, but whether the abstraction expresses a stable shared concept and pays for its own complexity.

<a id="indirection"></a>
## Indirection

Indirection is the introduction of an intermediate layer between two parts of a system.

It can be useful when it improves replaceability, isolates volatility or makes a boundary more explicit. It becomes harmful when it increases the number of mental hops without providing corresponding gains in clarity or changeability.

Indirection is therefore not inherently good or bad. Its value depends on whether it reduces accidental complexity or merely spreads it out.
