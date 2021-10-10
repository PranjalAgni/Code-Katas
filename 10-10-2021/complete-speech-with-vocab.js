const isValidCharacter = (ch) => {
  return ch === '*' || (ch >= 'a' && ch <= 'z');
};

const filterVocabluryWords = (vocabulary, length) => {
  return vocabulary.filter((vocab) => vocab.length === length);
};

const preparewordToPositionMap = (vocabulary) => {
  const wordToPosMap = new Map();
  let pos = 0;
  while (pos < vocabulary.length) {
    wordToPosMap.set(vocabulary[pos], pos);
    pos += 1;
  }

  return wordToPosMap;
};

const suggestWord = (trimmedWord, vocabulary) => {
  const wordToPosMap = preparewordToPositionMap(vocabulary);
  const N = trimmedWord.length;
  const sameLengthVocabWords = filterVocabluryWords(vocabulary, N);
  for (let idx = 0; idx < N; idx++) {
    if (trimmedWord[idx] !== '*') {
      for (let jdx = 0; jdx < sameLengthVocabWords.length; jdx++) {
        const vocabWord = sameLengthVocabWords[jdx];
        if (trimmedWord[idx] !== vocabWord[idx]) {
          sameLengthVocabWords.splice(jdx, 1);
          jdx -= 1;
        }

        if (sameLengthVocabWords.length === 1) break;
      }
    }
  }

  if (sameLengthVocabWords.length) {
    const position = wordToPosMap.get(sameLengthVocabWords[0]);
    vocabulary.splice(position, 1);
    return sameLengthVocabWords[0];
  }

  return '';
};
function translate(speech, vocabulary) {
  const words = speech.split(' ');

  const decodedWords = words.map((word) => {
    let trimmedWord = '';
    let suffix = '';

    for (const character of word) {
      if (isValidCharacter(character)) {
        trimmedWord += character;
      } else {
        suffix += character;
      }
    }

    return suggestWord(trimmedWord, vocabulary) + suffix;
  });

  return decodedWords.join(' ');
}

const isValid = (v) => {
  if (typeof v !== 'string')
    assert.fail(`expected an string but got ${JSON.stringify(v)}`);
  else return v;
};

// let a1 = ['***lo w***d!', ['hello', 'world']];
// console.log(isValid(translate(a1[0], a1[1])), 'hello world!');
// let b = ['c**l, w*ak!', ['hell', 'cell', 'week', 'weak']];
// console.log(isValid(translate(b[0], b[1])), 'cell, weak!');
// let c = ['hell*, w***d!', ['hello', 'hell', 'word', 'world']];
// console.log(isValid(translate(c[0], c[1])), 'hello, world!');
// let d = ['***', ['mel', 'dell']];
// console.log(isValid(translate(d[0], d[1])), 'mel');
// let e = ['', ['hell', 'weak']];
// console.log(isValid(translate(e[0], e[1])), '');
// let f = ['****. ***,', ['aaa', 'bbbb']];
// console.log(isValid(translate(f[0], f[1])), 'bbbb. aaa,');

console.log(
  suggestWord('o*f', [
    'tto',
    'themm',
    'here',
    'did',
    'kill',
    'bbe',
    'and',
    'tthem',
    'mme',
    'bring',
    'want',
    'front',
    'over',
    'mmee',
    'off',
    'iin',
    'king',
    'not',
    'ooff',
    'mine',
    'who',
    'them',
  ])
);

// let a = [
//   'luk* nintin w*nty s*v*n b*t t**se e*e*is o*f m*ne *ho *id *ot *ant *me t*o *b* k**g o**r *hem *rin* *hem* *ere *nd *ill tt*** *in *ront o*ff *me*.',
//   [
//     'tto',
//     'themm',
//     'here',
//     'did',
//     'kill',
//     'but',
//     'bbe',
//     'and',
//     'those',
//     'tthem',
//     'mme',
//     'bring',
//     'want',
//     'front',
//     'enemis',
//     'over',
//     'mmee',
//     'off',
//     'iin',
//     'king',
//     'luke',
//     'nintin',
//     'wenty',
//     'seven',
//     'not',
//     'ooff',
//     'mine',
//     'who',
//     'them',
//   ],
// ];
// console.log(
//   isValid(translate(a[0], a[1])),
//   'luke nintin wenty seven but those enemis off mine who did not want mme tto bbe king over them bring themm here and kill tthem iin front ooff mmee.'
// );
