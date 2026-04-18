---
title: Architecture And AI
outline: deep
---

# Architecture And AI

AI has changed the cost of producing code, but it has not reduced the cost of misunderstanding a system.

That is why architecture in the AI era looks less like a matter of elegance or convenience and more like a condition for the system to remain survivable. When implementation becomes cheaper, structural mistakes can spread faster, accumulate earlier and stay hidden longer under a large volume of superficially plausible output.

## Core idea

Good architecture is no longer just a way to make systems pleasant to work with. It is increasingly a way to keep systems legible, steerable and correct under conditions where more code can be produced than teams can fully reason about by hand.

## AI as a multiplier, not a judge

I do not think of AI as a force that somehow prefers bad architecture on its own. It is better described as a scaling instrument and a multiplier.

That means it can multiply good decisions just as effectively as bad ones. If a system has clear boundaries, coherent modules and well-understood assembly lines, AI can help replicate those patterns faster. But if the system is already shaped by weak abstractions, hidden coupling and improvised hacks, AI can scale those problems with the same speed.

In that sense, AI does not replace architectural judgment. It depends on it. It works best when someone has already done the slower work of shaping the system well enough that generation can follow stable patterns without constantly guessing.

## Why the problem becomes sharper

When the cost of producing code goes down, several risks go up:

- more code can enter the system before its shape is properly challenged
- weak boundaries get crossed more often
- duplication and accidental complexity can grow faster
- locally plausible changes can still damage the global structure
- teams can lose the ability to explain why the system is shaped the way it is

None of this is specific to AI in a magical sense. AI simply amplifies an older architectural truth: systems become fragile when their rate of change exceeds the team’s ability to preserve meaning.

There is also a second-order effect here. Over time, clever hacks inside a weak architecture start to damage the productivity gains that AI seemed to promise in the first place:

- more tokens are consumed just to reconstruct enough context for a plausible solution
- testing becomes slower and more expensive because the system is harder to validate safely
- prompts become longer because too many exceptions and local rules need to be explained
- some classes of hacks and framework magic can make AI nearly useless, because the system stops exposing a stable logic that can be followed at all

In those conditions the issue is no longer just correctness. The architecture begins to directly tax the throughput of code generation itself.

## What architecture protects

In this context, architecture protects more than technical neatness. It protects:

- the legibility of boundaries
- the meaning of modules and responsibilities
- the cost of change
- the observability of the system
- the ability to review generated changes critically
- the ability to reject plausible but structurally harmful code

Observability matters here more than it is sometimes given credit for. A well-structured system protects not only its runtime behavior, but also its inspectability. When boundaries are legible, responsibilities are explicit and important transitions are visible, both humans and AI have a better chance of reasoning about what the system is actually doing.

That makes observability part of survivability too. If a system cannot be explained, inspected or traced with reasonable effort, then generated change becomes much harder to validate safely. In practice, architecture is one of the things that protects that visibility before any particular tool enters the picture.

## The Importance of Boundaries

When implementation is expensive, weak boundaries still hurt, but they are at least partially slowed down by the cost of writing code. When implementation becomes cheaper, that friction drops, and bad boundaries start leaking faster.

This changes the role of architecture. Boundaries no longer protect only maintainability in the long run. They also protect the rate at which wrong changes can spread in the short run.

If boundaries are weak:

- more changes look locally acceptable than should
- responsibilities blur faster
- dependencies cross layers more often
- generated code has more room to follow the nearest plausible path instead of the correct one

If boundaries are clear:

- the space of acceptable changes becomes narrower
- review gets cheaper because the intended shape is easier to recognize
- generated code has fewer structurally plausible but wrong directions to take
- local speed is less likely to erode global coherence

That is why cheaper implementation makes boundaries more important, not less. Once code can be produced quickly, the system needs stronger constraints to preserve meaning while that production happens.

## Architecture Determines Survivability

Survivability here is not just about whether a system can be broken or driven into a non-working state. It is also about whether it can remain economically viable in a market where AI has lowered the cost of entering, iterating and shipping.

I have seen both kinds of articles: enthusiastic reports about dramatic acceleration with AI, and equally sincere reports claiming that AI increased task duration by hundreds of percent and mostly slowed teams down. I do not think either side is lying. They are often just describing different architectural conditions.

The complaints about slowdown seem especially common in large corporate environments, and that makes sense to me. Those systems often carry an enormous amount of accumulated technical debt and organizational inefficiency. For a long time they could still survive in the market because their volume of functionality acted as a defensive barrier. They solved many everyday problems, and the cost of building a serious alternative remained high.

AI weakens that protection. Volume is no longer the same moat it used to be.

Imagine two systems solving the same underlying user problem:

- System A has weak architecture, a large body of functionality and years of accumulated hacks.
- System B has architecture and processes that are at least coherent enough to support compounding change.

Before AI, System A could often remain competitive simply because it had more surface area and a larger installed solution set. System B might still be better organized, but it would take time for that advantage to compound.

With AI, the equation changes. If System A cannot successfully adopt AI because its architecture makes generated work too slow, too expensive or too unreliable to validate, then its speed may stay roughly flat. Developers in that environment may simply fall back to more manual work because agentic workflows do not pay off.

System B, by contrast, may get a real multiplier: x1.2, x1.5, sometimes x2 or more relative to its earlier pace. Even if System A entered the race with more features, System B can now compound faster on top of better internal conditions. What was already a structural advantage becomes a competitive acceleration mechanism.

That is why I call this survivability. A system can continue to function and still be on a path toward losing the market. If its architecture prevents it from scaling with the new production model, it may remain alive technically while becoming non-viable strategically.

In that environment, architecture stops being a matter of taste. It becomes one of the conditions that decides whether a product can keep pace once volume alone no longer protects it.
