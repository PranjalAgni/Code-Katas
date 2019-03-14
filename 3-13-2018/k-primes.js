function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i * i < num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}
function calculate(num, k) {
  let count = 0,
    i;
  for (i = 2; i * i < num; i++) {
    let second = num / i;
    if (isPrime(i) && num % i == 0) {
      count += 1;
      if (count > k) {
        return false;
      }
    }

    if (isPrime(second) && num % second == 0) {
      count += 1;
      if (count > k) {
        return false;
      }
    }
  }
  let last = i * i;
  if (isPrime(last) && num % last == 0) {
    count += 1;
  }
  if (count == k) {
    return true;
  }

  return false;
}

function calculate(num) {
  let res = 0;
  let i = 2;
  while (i * i <= num) {
    while (num % i == 0) {
      num = num / i;
      res += 1;
    }
    i += 1;
  }
  if (num > 1) {
    res += 1;
  }
  return res;
}
function countKprimes(k, start, end) {
  // your code
  let res = [];
  for (let i = start; i <= end; i++) {
    if (calculate(i) == k) {
      res.push(i);
    }
  }
  return res;
}
function puzzle(s) {
  let a = countKprimes(1, 2, s);
  let b = countKprimes(3, 2, s);
  let c = countKprimes(7, 2, s);
  if (a.length == 0 || b.length == 0 || c.length == 0) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        if (a[i] + b[j] + c[k] === s) {
          count += 1;
        }
      }
    }
  }
  return count;
}

console.log(countKprimes(2, 0, 100), [
  4,
  6,
  9,
  10,
  14,
  15,
  21,
  22,
  25,
  26,
  33,
  34,
  35,
  38,
  39,
  46,
  49,
  51,
  55,
  57,
  58,
  62,
  65,
  69,
  74,
  77,
  82,
  85,
  86,
  87,
  91,
  93,
  94,
  95
]);
console.log(countKprimes(3, 0, 100), [
  8,
  12,
  18,
  20,
  27,
  28,
  30,
  42,
  44,
  45,
  50,
  52,
  63,
  66,
  68,
  70,
  75,
  76,
  78,
  92,
  98,
  99
]);
console.log(countKprimes(5, 1000, 1100), [
  1020,
  1026,
  1032,
  1044,
  1050,
  1053,
  1064,
  1072,
  1092,
  1100
]);
console.log(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594]);
