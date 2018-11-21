function anagrams(word, words) {
  word = word
    .split('')
    .sort()
    .join();
  result = [];

  words.forEach(test_word => {
    sort_word = test_word
      .split('')
      .sort()
      .join();
    if (sort_word === word) {
      result.push(test_word);
    }
  });
  return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
