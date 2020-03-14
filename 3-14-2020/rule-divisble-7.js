function seven(m) {
  let steps = 0;
  while (m > 99) {
    const rem = m % 10;
    m = Math.floor(m / 10);
    m = m - 2 * rem;
    steps += 1;
  }

  return [m, steps];
}

console.log(seven(1021), [10, 2]);
console.log(seven(477557101), [28, 7]);
console.log(seven(1603), [7, 2]);
console.log(seven(371), [35, 1]);
console.log(seven(483), [42, 1]);
