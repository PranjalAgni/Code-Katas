function comp(array1, array2) {
  if (!array1 || !array2) return false;
  if (!array1.length && !array2.length) return true;
  const freqMap = new Map();
  for (const elt of array1) {
    const frequency = freqMap.get(elt);
    freqMap.set(elt, frequency ? frequency + 1 : 1);
  }

  for (const elt of array2) {
    const squareRootElt = Math.sqrt(elt);
    const frequency = freqMap.get(squareRootElt);
    if (!Number.isInteger(squareRootElt) || !frequency) return false;
    freqMap.set(squareRootElt, frequency > 0 ? frequency - 1 : 0);
  }

  return true;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2), true);

console.log(comp([], null), false);
