const createNDimensionalArray = (n, size) => {
  const text = `level ${n}`;
  const placeholderArray = new Array(size).fill(text);
  console.log(placeholderArray);
  if (n === 1) return placeholderArray;
  const answer = [];

  return [];
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
