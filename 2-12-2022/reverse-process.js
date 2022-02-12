function getPositionOfCharacter(alphabet) {
  return alphabet.charCodeAt(0) - 97;
}

function getCharacterFromPosition(position) {
  return String.fromCharCode(97 + position);
}

function solveEquation(num, position) {
  // m --> 12,   12 * 6015 % 26 = 4,
  for (let m = 0; m <= 25; m++) {
    const value = (m * num) % 26;
    if (value === position) {
      console.log(`For m = ${m}, value = ${value}`);
      return m;
    }
  }

  return -1;
}

function encode(str, num) {
  let encodeStr = '';
  for (let alphabet of str) {
    const position = getPositionOfCharacter(alphabet);
    const value = (position * num) % 26;
    encodeStr += getCharacterFromPosition(value);
  }

  return encodeStr;
}

function decode(text) {
  const num = parseInt(text);
  const str = text.split(num)[1];
  console.log(num, str);
  let originalStr = '';
  for (const alphabet of str) {
    const position = getPositionOfCharacter(alphabet);
    const result = solveEquation(num, position);
    if (result === -1) return 'Impossible to decode';
    const encodedAlphabet = String.fromCharCode(97 + result);
    originalStr += encodedAlphabet;
  }

  if (encode(originalStr, num) !== str) return 'Impossible to decode';
  return originalStr;
}

console.log(decode('5057aan'));
module.exports = { decode };
