const BN = require('bignumber.js');

function solve(arr) {
  const N = arr.length;
  let [a, b] = [BN(0), BN(1)];

  for (let idx = 0; idx < N; idx += 2) {
    [a, b] = [
      a.times(arr[idx]).minus(b.times(arr[idx + 1])),
      b.times(arr[idx]).plus(a.times(arr[idx + 1])),
    ];
  }

  return [a.abs(), b.abs()];
}

function check(arr, actual, exp) {
  if (actual.length !== 2) return false;
  let r0 = new BN(actual[0]),
    r1 = new BN(actual[1]);
  let s0 = new BN(exp[0]),
    s1 = new BN(exp[1]);
  if (r0.isLessThan(new BN(0)) || r1.isLessThan(new BN(0))) {
    console.log('A and B should be non negative 0');
    return false;
  }
  let p = s0.multipliedBy(s0).plus(s1.multipliedBy(s1));
  console.log('Product to get', p.toString());
  let q = r0.multipliedBy(r0).plus(r1.multipliedBy(r1));
  console.log('Your A*A + B*B', q.toString());
  return p.isEqualTo(q);
}
function testing(arr, exp) {
  console.log('Testing ', arr);
  let actual = solve(arr);
  console.log('Actual         ', actual.toString());
  console.log('Possible expect', exp.toString());
  let bl = check(arr, actual, exp);
  if (bl == false) console.log('Error');
  else console.log('Correct');
  console.log('_');
  console.log(bl, true);
}

testing([1, 3, 1, 2, 1, 5, 1, 9], [250, 210]);
testing([2, 1, 3, 4], [2, 11]);
testing([3, 9, 8, 4, 6, 8, 7, 8, 4, 8, 5, 6, 6, 4, 4, 5], [13243200, 25905600]);
testing([4, 3, 4, 2, 4, 5, 5, 9], [870, 1190]);
testing(
  [
    3, 2, 5, 5, 4, 2, 6, 6, 9, 3, 3, 2, 3, 7, 2, 3, 4, 9, 6, 7, 3, 8, 8, 7, 6,
    3, 6, 6, 4, 4, 5, 3, 9, 8, 3, 9, 2, 2, 6, 6,
  ],
  [BN('20534466401280000'), BN('32656316659200000')]
);
