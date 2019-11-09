/**
 * @description Recursive solution to flat a list to a any given nesting
 * @param {*} array
 * @param {*} result
 */
const solve = function(array, result) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      solve(array[i], result);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

var flatten = function(array) {
  let result = [];
  result = solve(array, result);
  return result;
};

var flatten = function(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const currentValue = array[i];
      for (let j = 0; j < currentValue.length; j++) {
        result.push(currentValue[j]);
      }
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[[1, 2, 3]], ['a', 'b', 'c'], [1, 2, 3]]), [
  1,
  2,
  3,
  'a',
  'b',
  'c',
  1,
  2,
  3
]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']]), [
  3,
  4,
  5,
  [9, 9, 9],
  'a,b,c'
]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
  [3],
  [4],
  [5],
  9,
  9,
  8,
  [1, 2, 3]
]);

// 1, 7, 19
// 1, 7, 13, 19
// 13 is missing
// 18 / 3 = 6
//
