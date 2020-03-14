function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function reverse(num) {
  let rev = 0;
  while (num !== 0) {
    rev = (num % 10) + rev * 10;
    num = parseInt(num / 10);
  }
  return rev;
}

function backwardsPrime(start, stop) {
  if (start <= 12) start = 13;
  let result = [];
  for (let i = start; i <= stop; i++) {
    let num = i;
    let reversedNum = reverse(num);
    if (result.includes(num) || reversedNum === num) continue;
    if (isPrime(num) && isPrime(reversedNum)) {
      result.push(num);
      if (reversedNum >= start && reversedNum <= stop) {
        result.push(reversedNum);
      }
    }
  }

  result = result.sort((a, b) => a - b);
  return result;
}

console.log(backwardsPrime(9900, 10000));
console.log(backwardsPrime(2, 100));
console.log(backwardsPrime(501, 507));
console.log(backwardsPrime(70000, 70300));
