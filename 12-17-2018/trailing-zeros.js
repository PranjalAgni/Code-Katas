function zeros(n) {
  // your code here
  let count = 0;
  for (let i = 5; n/i >= 1; i *= 5) {
      count += Math.floor(n/i);
  }
  return count
}

console.log(zeros(0), 0, 'Testing with n = 0');
console.log(zeros(6), 1, 'Testing with n = 6');
console.log(zeros(30), 7, 'Testing with n = 30');
