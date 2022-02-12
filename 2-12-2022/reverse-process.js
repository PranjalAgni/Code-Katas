function getPositionOfCharacter(alphabet) {
  return alphabet.charCodeAt(0) - 97;
}

function getCharacterFromPosition(position) {
  return String.fromCharCode(97 + position);
}

// https://rosettacode.org/wiki/Modular_inverse#JavaScript
function modInverse(a, b) {
  a %= b;
  for (let x = 1; x < b; x++) {
    if ((a * x) % b === 1) {
      return x;
    }
  }
  return 1;
}

function decode(text) {
  const num = parseInt(text);
  const str = text.split(num)[1];
  let originalStr = '';
  const modInverseValue = modInverse(num, 26);
  if (modInverseValue == 1) return 'Impossible to decode';
  // 12 * 6015 % 26 = 4

  for (const alphabet of str) {
    const position = getPositionOfCharacter(alphabet);
    const value = (position * modInverseValue) % 26;
    const orignalAlphabet = getCharacterFromPosition(value);
    originalStr += orignalAlphabet;
  }

  return originalStr;
}

module.exports = { decode };
