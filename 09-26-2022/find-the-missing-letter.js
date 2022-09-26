function findMissingLetter(array) {
  let prevCharacter = array[0];
  let N = array.length;
  for (let idx = 1; idx < N; idx++) {
    let currentCharacterShouldBe = String.fromCharCode(
      prevCharacter.charCodeAt(0) + 1
    );
    if (currentCharacterShouldBe !== array[idx])
      return currentCharacterShouldBe;
    prevCharacter = array[idx];
  }

  return String.fromCharCode(array[N - 1].charCodeAt(0) + 1);
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
