const compress = function (str) {
  const N = str.length;
  let currentChar = str[0];
  let times = 1;
  let compressedOutput = '[';
  for (let idx = 1; idx < N; idx++) {
    if (currentChar === str[idx]) {
      times += 1;
    } else {
      compressedOutput += `[${times},"${currentChar}"],`;
      currentChar = str[idx];
      times = 1;
    }
  }

  compressedOutput += `[${times},"${currentChar}"]]`;

  return compressedOutput.length < N ? compressedOutput : str;
};

// Naive implementation of JSON.parse()
// Time: O(N) | Space: O(N)
// N = number of characters
const parseString = function (string) {
  const decompressedOutput = [];
  const N = string.length;
  let times = 0;
  for (let idx = 2; idx < N; idx++) {
    while (!isNaN(parseInt(string[idx]))) {
      times = times * 10 + parseInt(string[idx]);
      idx += 1;
    }

    decompressedOutput.push([times, string[idx + 2]]);
    times = 0;
    idx += 6;
  }

  return decompressedOutput;
};

const decompress = function (c) {
  if (c[0] !== '[') return c;

  const decompressedList = parseString(c);
  let decompressedString = '';
  decompressedList.forEach(([times, character]) => {
    decompressedString += character.repeat(times);
  });

  return decompressedString;
};

var string1 = 'aaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac';
var string2 = 'abcde';
var c1 = '[[14,"a"],[1,"b"],[41,"a"],[1,"c"]]';
var c2 = 'abcde';

console.log(compress(string1), c1);
console.log(compress(string2), c2);
console.log(decompress(c1), string1);
console.log(decompress(c2), string2);
