function isAlpha(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isPangram(string) {
  let hashSet = [];
  for (let idx = 0; idx < string.length; idx++) {
    const letter = string.charAt(idx).toLowerCase();

    if (!isAlpha(letter) || hashSet.includes(letter)) continue;
    hashSet.push(letter);
  }

  return hashSet.length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true);
console.log(isPangram('This is not a pangram.'), false);
