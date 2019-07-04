function createPhoneNumber(numbers) {
  let ans = '(';
  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      numbers[i] = numbers[i].toString();
      ans += numbers[i];
      if (i == 2) {
        ans += ') ';
      }
      continue;
    }

    if (i >= 3 && i < 6) {
      ans += numbers[i].toString();
      if (i == 5) {
        ans += '-';
      }
      continue;
    }
    ans += numbers[i].toString();
  }
  return ans;
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  '(123) 456-7890'
);
