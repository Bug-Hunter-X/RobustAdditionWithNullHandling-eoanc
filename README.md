# Unexpected Null Handling in JavaScript Addition Function

This repository demonstrates a subtle bug related to null value handling in a simple JavaScript addition function. The function `foo` aims to add two numbers but doesn't perfectly handle all null scenarios.

## Bug Description

The `foo` function correctly returns `null` if either of the input arguments (`a` or `b`) is `null`.  However, a more robust approach would explicitly handle the case where *both* `a` and `b` are `null`, potentially returning a different value (e.g., 0) or throwing an error to indicate an invalid input state.  The current implementation might lead to unexpected behavior in certain contexts.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime (e.g., Node.js).
4. Observe the output.  Note that the behavior when both inputs are null might be unexpected.

## Solution

The provided `bugSolution.js` demonstrates how to fix the bug by explicitly checking for the case where both inputs are null and handling that scenario accordingly.  The improved function incorporates this additional check to ensure robust null handling and avoids ambiguous behavior.
