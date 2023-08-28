// 24 august in bangalore and in wasseypur
// 26 august colive pg
function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isLowerCaseAlphabet(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseAlphabet(char) {
  return char >= 'A' && char <= 'Z';
}

const alphabets = [];
let ch = 'A';
while (ch <= 'Z') {
  alphabets.push(ch);
  ch = String.fromCharCode(ch.charCodeAt(0) + 1);
}
ch = 'a';
while (ch <= 'z') {
  alphabets.push(ch);
  ch = String.fromCharCode(ch.charCodeAt(0) + 1);
}

function isAlphabet(char) {
  return isLowerCaseAlphabet(char) || isUpperCaseAlphabet(char);
}

function rotateChar(char, rotation) {
  const asciiCode = char.charCodeAt(0);
  const segmentStartAt = isUpperCaseAlphabet(char) ? 65 : 97;
  const charIdx = asciiCode - segmentStartAt;
  const newIdx = (charIdx + rotation) % 52;
  return alphabets[newIdx];
}

/**
 *
 * @param {string} s
 * @param {number} n
 */
function playPass(s, n) {
  const N = s.length;
  let answer = '';
  for (let idx = 0; idx < N; idx++) {
    const char = s[idx];
    let transformedChar = char;
    if (isAlphabet(char)) {
      transformedChar = rotateChar(char, n);
      if (idx % 2 === 0) {
        transformedChar = String(transformedChar).toUpperCase();
      } else {
        transformedChar = String(transformedChar).toLowerCase();
      }
    } else if (isDigit(char)) {
      transformedChar = String(Math.abs(9 - parseInt(char)));
    }

    answer += transformedChar;
  }

  return answer.split('').reverse().join('');
}

console.log(playPass('I LOVE YOU!!!', 1), '!!!vPz fWpM J');

console.log(
  playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2),
  '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO'
);
