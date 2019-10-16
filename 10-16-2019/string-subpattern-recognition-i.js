function makeSubpattern(string, partialString) {
  let times = string.length / partialString.length;
  let pattern = partialString;
  while (times-- > 1) {
    partialString += pattern;
  }
  if (partialString === string) {
    return true;
  }
  return false;
}

function hasSubpattern(string) {
  if (string.length <= 1) return false;
  let partialString = '';
  for (let i = 0; i < string.length / 2; i++) {
    partialString += string[i];
    let status = makeSubpattern(string, partialString);
    if (status) {
      return true;
    }
  }
  return false;
}

console.log(hasSubpattern('a'), false);
console.log(hasSubpattern('aaaa'), true);
console.log(hasSubpattern('abcd'), false);
console.log(hasSubpattern('abababab'), true);
console.log(hasSubpattern('ababababa'), false);
console.log(hasSubpattern('123a123a123a'), true);
console.log(hasSubpattern('123A123a123a'), false);
console.log(hasSubpattern('abbaabbaabba'), true);
console.log(hasSubpattern('abbabbabba'), false);
console.log(hasSubpattern('abcdabcabcd'), false);
