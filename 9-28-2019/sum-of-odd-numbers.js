function rowSumOddNumbers(n) {
  const start = n * (n - 1) + 1;
  let itr = 0;
  let ans = 0;
  for (let i = start; itr < n; i += 2, itr++) {
    ans += i;
  }

  return ans;
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);

/** 
1
3     5
7     9    11
13    15    17    19
21    23    25    27    29
*/

/*
  1 1 * 0 + 1 = 1

  2 2 * 1 + 1 = 3

  FORMULA ==> n * (n-1) + 1
  n = 5 ==> 20 + 1
  n = 3 ==> 6 + 1
  end = ?
  for (elt in range(start, end)) {

  }
 */
