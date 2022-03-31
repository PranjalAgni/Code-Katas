const createNDimensionalArray = (n, size) => {
  const text = `level ${n}`;
  let answer = new Array(size).fill(text);
  if (n === 1) return answer;
  while (n-- > 1) {
    answer = Array(size).fill(answer);
  }
  return answer;
};

console.log(createNDimensionalArray(1, 2), ['level 1', 'level 1']);

console.log(createNDimensionalArray(1, 3), ['level 1', 'level 1', 'level 1']);

console.log(createNDimensionalArray(2, 2), [
  ['level 2', 'level 2'],
  ['level 2', 'level 2'],
]);

console.log(createNDimensionalArray(2, 3), [
  ['level 2', 'level 2', 'level 2'],
  ['level 2', 'level 2', 'level 2'],
  ['level 2', 'level 2', 'level 2'],
]);
console.log(createNDimensionalArray(3, 1), [[['level 3']]]);
console.log(createNDimensionalArray(3, 2), [
  [
    ['level 3', 'level 3'],
    ['level 3', 'level 3'],
  ],
  [
    ['level 3', 'level 3'],
    ['level 3', 'level 3'],
  ],
]);
