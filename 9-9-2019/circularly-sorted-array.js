function isCircleSorted(arr) {
  let circularVisited = false;
  let n = arr.length;
  let idx = 0;
  while (idx < n) {
    const x = idx % n;
    const y = (idx + 1) % n;
    if (arr[x] > arr[y]) {
      if (!circularVisited) {
        circularVisited = true;
      } else {
        return false;
      }
    }
    idx++;
  }

  return true;
}

console.log(isCircleSorted([2, 3, 4, 5, 6]), true);
console.log(isCircleSorted([6, 2, 3, 4, 5]), true);
console.log(isCircleSorted([3, 2, 4, 5, 6]), false);
console.log(isCircleSorted([4, 1, 2, 5]));
console.log(isCircleSorted([8, 7, 6, 5, 4, 3]));
console.log(isCircleSorted([6, 7, 4, 8]));
console.log(isCircleSorted([7, 6, 5, 4, 3, 2, 1]));
console.log(isCircleSorted([2, 3, 4, 5, 0, 1]));
console.log(isCircleSorted([4, 5, 6, 9, 1]));
console.log(isCircleSorted([10, 11, 6, 7, 9]));
console.log(isCircleSorted([1, 2, 3, 4, 5]));
console.log(isCircleSorted([5, 7, 43, 987, -9, 0]));
