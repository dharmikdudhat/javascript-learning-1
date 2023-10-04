// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.
// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

result = (a !== null && a !== undefined) ? a : b;

let x = (1 && 2) ?? 3; // Works

alert(x); // 2