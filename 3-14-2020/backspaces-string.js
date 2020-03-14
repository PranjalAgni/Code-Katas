function cleanString(s) {
  let stack = [];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    let letter = s.charAt(i);
    if (letter === '#') {
      if (top === -1) continue;
      top -= 1;
      stack.pop();
    } else {
      top += 1;
      stack.push(letter);
    }
  }

  return stack.join('');
}

// a ab abc abd ab a ac
console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
console.log(cleanString('#######'), '');
