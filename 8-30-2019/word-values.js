function wordValue(a) {
  return a.map((word, idx) => {
    const charArray = word.replace(/\s+/g, '').split('');

    let result = charArray.reduce((acc, char) => {
      acc += char.charCodeAt(0) - 96;
      return acc;
    }, 0);
    result *= idx + 1;
    return result;
  });
}

console.log(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]);
console.log(wordValue(['Abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24]);
