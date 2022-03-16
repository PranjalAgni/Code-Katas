function nthChar(words) {
  if (!words.length) return '';
  let pos = 0;
  let answer = '';
  for (const word of words) {
    answer += word[pos];
    pos += 1;
  }

  return answer;
}

console.log(nthChar([]), '');
console.log(nthChar(['yoda', 'best', 'has']), 'yes');
