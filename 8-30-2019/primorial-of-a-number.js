function isPrime(num) {
  if (num > 1 && num <= 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

function numPrimorial(n) {
  //your code here
  let start = 3;
  let result = 2;
  while (n > 1) {
    if (isPrime(start)) {
      console.log(start);
      result *= start;
      n -= 1;
    }
    start += 1;
  }
  return result;
}

// console.log(numPrimorial(3), 30);
// console.log(numPrimorial(4), 210);
// console.log(numPrimorial(5), 2310);
// console.log(numPrimorial(8), 9699690);
// console.log(numPrimorial(9), 223092870);
console.log(numPrimorial(13), 304250263527210);
