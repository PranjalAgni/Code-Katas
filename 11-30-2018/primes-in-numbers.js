// Problem Link: "https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript"

function getPrime(num) {
  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function primeFactors(n) {
  
  let divisor = 2;
  let mapTable = {};
  let count = 0;

  while (n !== 1) {
    if (n % divisor === 0) {
      n /= divisor;
      count++;
    } else {
      if (count > 0) {
        mapTable[divisor] = count;
        count = 0;
      }
      //if true then it's a prime number
      // if false then reiterate until you get the prime number.
      divisor += 1;
      while (!getPrime(divisor)) {
        divisor = divisor + 1;
      }
    }
  }
  if (count > 0) {
    mapTable[divisor] = count;
    count = 0;
  }



  let res = ``;
  for (let ele in mapTable) {
    let curr_div = ele;
    let exp = mapTable[ele];
    if (exp === 1) {
      res += `(${curr_div})`;
    } else {
      res += `(${curr_div}**${exp})`;
    }

  }

  return res;
}

console.log(primeFactors(86240));
