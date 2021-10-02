const swap = (arr, indexA, indexB) => {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

const encryptThis = function (text) {
  const textList = text.split(' ');
  const encryptedTextList = [];
  for (const [first, ...rest] of textList) {
    const asciiCode = first.charCodeAt(0);
    if (rest.length > 1) swap(rest, 0, rest.length - 1);
    encryptedTextList.push(`${asciiCode}${rest.join('')}`);
  }

  return encryptedTextList.join(' ');
};

console.log(encryptThis('A'), '65');
console.log(
  encryptThis('A wise old owl lived in an oak'),
  '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
);
console.log(
  encryptThis('The more he saw the less he spoke'),
  '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
);
console.log(
  encryptThis('The less he spoke the more he heard'),
  '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
);
console.log(
  encryptThis('Why can we not all be like that wise old bird'),
  '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
);
console.log(
  encryptThis('Thank you Piotr for all your help'),
  '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'
);
