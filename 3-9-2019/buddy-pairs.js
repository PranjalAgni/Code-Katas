function factors(n) {
  let res = 1,
    i = 2;
  let ans = 1;
  for (; i * i < n; i++) if (n % i === 0) res += i + n / i;
  //if (i * i === n) res += i;

  return res;
}

function verifyPairs(n, m, a, b) {
  if (a == m + 1 && b == n + 1) {
    return 1;
  }
  return 0;
}
function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    const factors_n = factors(i); //n
    const m = factors_n - 1; // choosen m
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
      continue;
    }
    if (m > i) {
      const factors_m = factors(m);
      const status = verifyPairs(i, m, factors_n, factors_m);
      if (status == 1) {
        console.log(i, m);
        return [i, m];
      }
      continue;
    }
    continue;
  }
  return 'Nothing';
}
