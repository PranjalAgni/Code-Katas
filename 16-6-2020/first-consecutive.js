function firstNonConsecutive(arr) {
  const N = arr.length;

  if (N == 0 || N == 1) return null;

  for (let i = 1; i < N; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 8]));
console.log(firstNonConsecutive([1, 5]));
console.log(firstNonConsecutive(1, 3));
