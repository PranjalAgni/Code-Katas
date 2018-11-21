function deleteNth(arr, n) {
  let freq = new Array(2000).fill(0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] += 1;
    if (freq[arr[i]] <= n) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [
  1,
  1,
  3,
  3,
  7,
  2,
  2,
  2
]);
