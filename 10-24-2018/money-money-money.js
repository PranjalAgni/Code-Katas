function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    let yearly_rate = principal*interest;
    principal += (yearly_rate - (yearly_rate*tax));
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);
