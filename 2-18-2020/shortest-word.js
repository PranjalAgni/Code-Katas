function findShort(s) {
  let min = Number.MAX_VALUE;
  s.split(' ')
    .map(word => word.split(''))
    .filter(w => {
      if (w.length < min) min = w.length;
    });
  return min;
}

console.log(
  findShort('bitcoin take over the world maybe who knows perhaps'),
  3
);
console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  ),
  3
);
