function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect!
  }
  return a / b;
}

console.log(foo(10, 0)); // This will return 0 instead of throwing an error.