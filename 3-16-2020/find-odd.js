function findOdd(A) {
  A = A.sort();
  let count = 1;
  let current = A[0];

  for (let i = 1; i < A.length; i++) {
    if (current === A[i]) {
      count += 1;
    } else {
      if ((count & 1) === 0) {
        current = A[i];
        count = 1;
      } else return current;
    }
  }

  return current;
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));
