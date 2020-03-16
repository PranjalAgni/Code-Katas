function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

function moreZeros(s) {
  const letters = [...new Set(s.split(''))];
  const possibleLetters = letters.filter(l => {
    const code = l.charCodeAt();
    const binaryString = dec2bin(code);
    // binaryString
    let balanced = 0;
    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === '0') balanced += 1;
      else balanced -= 1;
    }

    return balanced > 0;
  });

  return possibleLetters;
}

console.log(moreZeros('abcde'), ['a', 'b', 'd']);
console.log(moreZeros('Great job!'), ['a', ' ', 'b', '!']);
console.log(moreZeros('DIGEST'), ['D', 'I', 'E', 'T']);
console.log(
  moreZeros('abcdeabcde'),
  ['a', 'b', 'd'],
  'Should not return duplicates values'
);
