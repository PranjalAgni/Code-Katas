let gcd = function(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

let lcm = function(d1, d2) {
  return (d1 * d2) / gcd(d1, d2);
};

let convertFrac = function(arr) {
  let denom = arr.reduce((a, b) => lcm(b[1], a), 1);
  return arr
    .map(a => `(${a[0] * (denom / a[1])},${a[1] * (denom / a[1])})`)
    .join('');
};

var lst = [[1, 2], [1, 3], [1, 4]];
console.log(convertFrac(lst), '(6,12)(4,12)(3,12)');
