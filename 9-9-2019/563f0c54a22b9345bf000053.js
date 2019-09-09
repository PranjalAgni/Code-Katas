function computeNextPoint(a, b) {
  const c = (6 * a * b) / (5 * a - b);
  return c;
}
function fcn(n) {
  // your code
  let roots = [1, 2];
  if (n <= 1) {
    return roots[n];
  }
  //6 * 0 * 1 - 5 * 0 * x + 1 * x = 0
  //0 - 0 + x = 0
  for (let i = 2; i <= n; i++) {
    roots[i] = computeNextPoint(roots[i - 2], roots[i - 1]);
    //roots.push(computeNextPoint(roots[i - 2], roots[i - 1]));
  }
  return roots[n];
}

console.log(fcn(21), 2097152);
console.log(fcn(14), 16384);
console.log(fcn(43), 8796093022208);
console.log(fcn(19), 524288);
console.log(fcn(17), 131072);
