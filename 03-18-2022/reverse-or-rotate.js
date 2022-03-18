function isRuleFollowed(str) {
  let sum = 0;
  for (const char of str) {
    sum += Math.pow(parseInt(char), 3);
  }

  return sum % 2 === 0;
}

function revrot(str, sz) {
  const N = str.length;
  if (sz <= 0 || sz > N) return '';
  let idx = 0;
  while (idx < N) {
    let answer = str.substr(0, idx);
    const chunk = str.substr(idx, sz);
    if (isRuleFollowed(chunk)) {
      const reverseChunk = chunk.split('').reverse().join('');
      answer += reverseChunk;
    } else {
      const [firstChar, ...rest] = chunk.split('');
      if (rest.length) answer += rest.join('');
      if (!!firstChar) answer += firstChar;
    }

    idx += sz;
    if (idx < N) {
      answer += str.substr(idx);
    }

    str = answer;
  }

  const times = Math.floor(N / sz);
  str = str.substr(0, sz * times);
  return str;
}

console.log(revrot('1234', 0), '');
console.log(revrot('', 0), '');
console.log(revrot('1234', 5), '');
s = '733049910872815764';
console.log(revrot(s, 5), '330479108928157');

// 733049910872815764 5
// 330479108928157
//
