function score(char) {
  return char.charCodeAt() - 97 + 1;
}

function high(x) {
  words = x.split(' ');
  // console.log(words);
  let resWord;
  let wordScore = -1;
  words.forEach(word => {
    let currentScore = 0;
    for (let char = 0; char < word.length; char++) {
      currentScore += score(word[char]);
    }

    if (currentScore > wordScore) {
      wordScore = currentScore;
      resWord = word;
    }
  });

  return resWord;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
