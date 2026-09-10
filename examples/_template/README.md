# Example Title

> **Status:** Planned  
> **Type:** Core or Practice  
> **Language:** Language and minimum supported version

## Goal

State the system question that the example makes observable.

## Learning Outcomes

- Describe what the learner will be able to explain.
- Describe what the learner will be able to implement or measure.

## Requirements

- Define externally observable behavior.
- State important constraints and failure behavior.
- Keep the implementation small enough to study in one sitting.

## Observe

Document the environment, complete commands, expected output, and which evidence the
learner should record. Include a prediction to make before running the example.

## Tests

List deterministic correctness, boundary, and failure cases. Avoid public network
services and timing-dependent sleeps when a local fixture or injected dependency can
be used instead.

## Done When

- The example runs from a clean checkout using documented commands.
- Automated tests pass.
- The recorded evidence answers the goal.
- Cleanup steps leave no background process or temporary state behind.
