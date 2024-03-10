function isAlphabet(ch) {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

/**
 * Checks if string only includes whitespaces
 * @param {string} str
 * @returns
 */
function isWhitespaceString(str) {
  return !str.replace(/\s/g, '').length;
}

/**
 * Write a function to decrypt the message, caesar is sending
 * @param {string} text
 * @param {number} shift
 */
function CaesarCryptoEncode(text, shift) {
  shift = ((shift % 52) + 52) % 52;
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (!text) return '';
  const N = text.length;
  if (N == 0 || isWhitespaceString(text)) return '';
  let encodeText = '';
  for (let idx = 0; idx < N; idx++) {
    // Caesar needs your help!
    if (isAlphabet(text[idx])) {
      const newPos = (letters.indexOf(text[idx]) + shift) % 52;
      encodeText += letters[newPos];
    } else {
      encodeText += text[idx];
    }
  }

  return encodeText;
}

console.log(CaesarCryptoEncode('Et tu, Brute?', 3), 'Hw wx, Euxwh?');
console.log(CaesarCryptoEncode('Hw wx, Euxwh?', -3), 'Et tu, Brute?');
