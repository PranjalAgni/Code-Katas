function resolveRepeatingCharacters(charA, charB) {
  if (charA === charB) {
    const charCode = charA.charCodeAt(0);

    const nextCharacter =
      charA === 'z' ? 'a' : String.fromCharCode(charCode + 1);

    return { isRepeated: true, nextCharacter };
  }

  return { isRepeated: false, nextCharacter: charB };
}

function lastSurvivors(str) {
  if (!str) return str;
  str = str.split('').sort().join('');
  let answer = str[0];
  let pos = 0;
  for (let idx = 1; idx < str.length; idx++) {
    const { isRepeated, nextCharacter } = resolveRepeatingCharacters(
      answer[pos],
      str[idx]
    );

    if (isRepeated) {
      answer = answer.slice(0, -1);
    }
    answer += nextCharacter;
    pos = answer.length - 1;
  }

  return str === answer ? answer : lastSurvivors(answer);
}

console.log(lastSurvivors('zzzab'), 'cz');
