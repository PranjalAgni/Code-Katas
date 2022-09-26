const multiplyDigits = (num) => {
  let prod = 1;
  while (num != 0) {
    const digit = num % 10;
    prod *= digit;
    num = Math.floor(num / 10);
  }
  return prod;
};

function persistence(num) {
  let times = 0;
  while (num > 9) {
    num = multiplyDigits(num);
    times += 1;
  }

  return times;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
