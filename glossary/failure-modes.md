---
title: Failure Modes
outline: deep
---

# Failure Modes

Back to [Glossary](/glossary).

<a id="fail-fast-and-fail-safe"></a>
## Fail-fast and fail-safe

These terms help distinguish between two different priorities in system behavior.

### Fail-fast

Fail-fast behavior is useful where early, explicit feedback is more valuable than graceful degradation.

In reusable components, libraries and internal building blocks, fail-fast behavior makes incorrect assumptions visible earlier, shortens the feedback loop and reduces the chance that misuse will silently spread through the system.

### Fail-safe

Fail-safe behavior is useful where continuity of operation matters more than strictness at every internal boundary.

At the product level, the priority is often resilience, predictable recovery and preservation of the user journey. In those contexts, it is often better to degrade carefully, isolate failure and keep the system usable than to propagate a hard stop outward.

Related reading: [Libraries are a serious form of product work](/philosophy#libraries-are-a-serious-form-of-product-work).
