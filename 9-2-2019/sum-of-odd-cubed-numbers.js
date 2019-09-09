function cubeOdd(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] & 1) {
      if (arr[i] & 1) {
        res += arr[i] ** 3;
      }
    } else {
      return undefined;
    }
  }
  return res;
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
