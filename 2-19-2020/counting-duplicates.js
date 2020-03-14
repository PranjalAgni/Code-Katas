function duplicateCount(text) {
  let charMap = {};
  let answer = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (charMap.hasOwnProperty(text[i])) {
      charMap[text[i]] += 1;
    } else {
      charMap[text[i]] = 1;
    }

    if (charMap[text[i]] == 2) {
      answer += 1;
    }
  }

  return answer;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);
