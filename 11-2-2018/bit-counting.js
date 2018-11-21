var countBits = function(n) {
  let num_ones = 0;
  while (n) {
    if (n % 2 !== 0) {
      num_ones += 1;
    }

    n = Math.floor(n / 2);
  }
  return num_ones;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
