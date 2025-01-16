# Silent Division by Zero Error in JavaScript

This repository demonstrates a common but subtle error in JavaScript: the silent handling of division by zero when using loose comparison. The function `foo` incorrectly returns 0 when either `a` or `b` is 0, instead of throwing an error or returning `Infinity` (or `NaN`).

The solution demonstrates how to improve the function to handle the edge case correctly by explicitly checking for division by zero using strict equality (`===`) and throwing an error or using a conditional return.