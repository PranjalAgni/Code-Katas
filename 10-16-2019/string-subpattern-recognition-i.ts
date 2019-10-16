function makeAndCheckPattern(text: string, partialString: string): boolean {
  let times = text.length / partialString.length;
  const pattern = partialString;
  while (times-- > 1) {
    partialString += pattern;
  }

  if (text === partialString) return true;
  return false;
}

function hasSubpatternTS(text: string): boolean {
  if (text.length <= 1) return false;
  let partialString: string = '';
  for (let i = 0; i < text.length / 2; i++) {
    partialString += text[i];
    const status = makeAndCheckPattern(text, partialString);
    if (status) return true;
  }
  return false;
}

console.log(hasSubpatternTS('123A123a123a'), false);
