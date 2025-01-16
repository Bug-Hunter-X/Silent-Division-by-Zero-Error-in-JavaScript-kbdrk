function foo(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Division by zero"); // Handle division by zero error
  }
  return a / b;
}

console.log(foo(10, 0)); // This will throw an error
console.log(foo(10, 2)); // This will return 5