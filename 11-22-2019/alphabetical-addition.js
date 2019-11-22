function addLetters(...letters) {
  // your code here
  if (letters.length == 0) return 'z';

  let sum = 0;
  for (let i = 0; i < letters.length; i++) {
    sum += letters[i].charCodeAt() - 96;
    console.log(sum);
    if (sum > 26) sum %= 26;
  }

  sum = sum + 96;

  return String.fromCharCode(sum);
}

console.log(addLetters('a', 'b', 'c'), 'f');

console.log(addLetters('z'), 'z');

console.log(addLetters('a', 'b'), 'c');

console.log(addLetters('y', 'c', 'b'), 'd');

console.log(addLetters(), 'z');

console.log(addLetters('a', 'y', 'f', 'v', 's', 'c'), 'x');

console.log(addLetters('l', 'y', 'w', 'v', 'l', 'g', 'q', 'o', 't'), 'x');
