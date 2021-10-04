function countPositivesSumNegatives(input) {
  if (!input || !input.length) return [];
  return input.reduce(
    ([count, sum], elt) => {
      return elt > 0 ? [count + 1, sum] : [count, sum + elt];
    },
    [0, 0]
  );
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual1 = countPositivesSumNegatives(testData);
let expected1 = [10, -65];
console.log(actual1, expected1);

let testData2 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual = countPositivesSumNegatives([]);
let expected = [8, -50];
console.log(actual, expected);
