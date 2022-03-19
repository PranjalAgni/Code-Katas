const FURY = 'FURY';
const FIRE = 'FIRE';

const baseText = {
  FURY: 'I am ${0} furious.',
  FIRE: 'You ${0} are fired!',
};

const repeatedText = {
  FURY: ' really',
  FIRE: ' and you',
};

const validCharacters = ['E', 'F', 'I', 'R', 'U', 'Y'];

const isValidTweet = (tweet) => {
  for (const ch of tweet) {
    if (!validCharacters.includes(ch)) return false;
  }

  return true;
};

const getPlaceholderWord = (word, times) => {
  if (times === 1) return '';
  const repeatedWords = repeatedText[word].repeat(times - 1);
  return repeatedWords;
};

const formatTweet = (placeholderText, words, delimeter = ' ') => {
  const textList = placeholderText.split(delimeter);
  let pos = 0;
  const formattedText = textList.reduce((acc, current) => {
    const targetText = '${' + pos + '}';
    if (current === targetText) {
      acc += words[pos];
      pos += 1;
    } else {
      const spaceOrEmptyChar = acc === '' ? '' : ' ';
      acc += spaceOrEmptyChar + current;
    }
    return acc;
  }, '');

  return formattedText;
};

const decipherTweet = (decodedList) => {
  let decipherTweetText = '';
  for (let [word, times] of decodedList) {
    const text = baseText[word];
    const repeatedWords = getPlaceholderWord(word, times);
    const currentFormattedTweetChunk = formatTweet(text, [repeatedWords]);
    const spaceOrEmptyChar = decipherTweetText === '' ? '' : ' ';
    decipherTweetText += spaceOrEmptyChar + currentFormattedTweetChunk;
  }

  return decipherTweetText;
};

const fireAndFury = function (tweet) {
  const N = tweet.length;
  if (N < 4 || !isValidTweet(tweet)) return 'Fake tweet.';
  let idx = 0;
  const decodedList = [];
  while (idx < N) {
    const chunk = tweet.substr(idx, 4);
    if (chunk === FURY || chunk === FIRE) {
      let previousChunk = [];
      const lastChunkPos = decodedList.length - 1;
      if (lastChunkPos >= 0) previousChunk = decodedList[lastChunkPos];
      if (previousChunk.length && previousChunk[0] === chunk)
        decodedList[lastChunkPos] = [chunk, previousChunk[1] + 1];
      else decodedList.push([chunk, 1]);
      idx += 3;
    }

    idx += 1;
  }

  return decodedList.length ? decipherTweet(decodedList) : 'Fake tweet.';
};

console.log(
  fireAndFury('FURYYYFIREYYFIRE'),
  'I am furious. You and you are fired!'
);

console.log(
  fireAndFury('FIREYYFURYYFURYYFURRYFIRE'),
  'You are fired! I am really furious. You are fired!'
);

console.log(fireAndFury('AAFIREBBFURYCC'), 'Fake tweet.');
