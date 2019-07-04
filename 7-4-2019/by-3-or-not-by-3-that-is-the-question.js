function divisibleByThree(str) {
  nums = str.split('');
  let sum = 0;
  nums.forEach(element => {
    element = parseInt(element);
    sum += element;
  });
  if (sum % 3 == 0) {
    return true;
  }
  return false;
}

console.log(
  divisibleByThree('123'),
  true,
  'Should return true if the sum of the given digits is divisible by 3.'
);
console.log(
  divisibleByThree('19254'),
  true,
  'Should return true if the sum of the given digits is divisible by 3.'
);
console.log(
  divisibleByThree('88'),
  false,
  'Should return false if the sum of the given digits is not divisible by 3.'
);
console.log(
  divisibleByThree('1'),
  false,
  'Should return false if the sum of the given digits is not divisible by 3.'
);
