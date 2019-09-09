function countBy(x, n) {
  var z = [];
  let add = x;
  while (n-- > 0) {
    z.push(x);
    x += add;
  }
  return z;
}

console.log(countBy(1, 5), [1, 2, 3, 4, 5], 'Array does not match');
console.log(countBy(2, 5), [2, 4, 6, 8, 10], 'Array does not match');
