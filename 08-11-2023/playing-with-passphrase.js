function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isAlphabet(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function rotateChar(char, rotation) {
  const asciiCode = char.charCodeAt(0) + (rotation % 26);
  console.log('Rotated char log: ', String.fromCharCode(asciiCode));
  return String.fromCharCode(asciiCode);
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
      transformedChar = rotateChar(s[idx], n);
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
