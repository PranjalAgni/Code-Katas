var orderedCount = function (text) {
  const hashSet = [...new Set(text.split(''))];
  const hashMap = {};
  const answer = [];

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (!hashMap[ch]) hashMap[ch] = 0;
    hashMap[ch] += 1;
  }

  hashSet.forEach((elt) => {
    answer.push([elt, hashMap[elt]]);
  });

  return answer;
};
