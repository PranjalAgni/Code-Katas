function maxSequence(arr) {
  const N = arr.length;

  let maxSum = 0;
  let currentSum = 0;
  for (let idx = 0; idx < N; idx++) {
    currentSum += arr[idx];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}

console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([-1, -1, -5, -2, -3]), 6);
