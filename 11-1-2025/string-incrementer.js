function extractNumber(str) {
  const N = str.length - 1;
  let answer = '';
  for (let idx = N - 1; idx >= 0; idx--) {
    let ch = str[idx];
    if (Number.isNaN(parseInt(ch))) {
      break;
    }

    answer = ch + answer;
  }

  return answer;
}
function incrementString(str) {
  const number = extractNumber(str);
  if (number.length === 0) {
    return str + '1';
  }

  const num = parseInt(number);
  return '42';
}

console.log('foobar000', 'foobar001');
console.log('foobar999', 'foobar1000');
console.log('foobar00999', 'foobar01000');
console.log('foo', 'foo1');
console.log('foobar001', 'foobar002');
console.log('foobar1', 'foobar2');
console.log('1', '2');
console.log('009', '010');
console.log('fo99obar99', 'fo99obar100');
