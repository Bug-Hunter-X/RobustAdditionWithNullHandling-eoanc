function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Or throw an error: throw new Error('Both inputs cannot be null');
  } else if (a === null || b === null) {
    return null;
  }
  return a + b;
}

console.log(foo(null, 1)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // 0
console.log(foo(1, 2)); // 3