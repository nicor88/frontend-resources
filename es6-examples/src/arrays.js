// Expression bodies
const array = [1, 2, 3, 4];
const odds = array.map((v) => v + 1);
const nums = array.map((v, i) => v + i);

// Sets examples
const s = new Set();
s.add('hello').add('goodbye').add('hello');
// s.size === 2 -> True
