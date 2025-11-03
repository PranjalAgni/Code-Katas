function splitWordByNumberSuffix(word) {
  const N = word.length;
  let end = N - 1;
  while (end >= 0) {
    const ch = word[end];
    if (Number.isNaN(parseInt(ch))) {
      break;
    }

    end -= 1;
  }

  const prefix = word.substr(0, end + 1);
  const suffix = word.substr(end + 1);
  return [prefix, suffix];
}

function incrementString(word) {
  const [prefix, suffix] = splitWordByNumberSuffix(word);
  if (suffix.length === 0) {
    return prefix + '1';
  }

  const originalWidth = suffix.length;
  const num = parseInt(suffix);
  const newNum = num + 1;
  const newWidth = String(newNum).length;
  const zerosNeeded = Math.max(0, originalWidth - newWidth);

  return prefix + '0'.repeat(zerosNeeded) + String(newNum);
}

function doTest(input, expected) {
  const actual = incrementString(input);
  console.log(actual, expected);
}

doTest('foobar000', 'foobar001');
doTest('foobar999', 'foobar1000');
doTest('foobar00999', 'foobar01000');
doTest('foo', 'foo1');
doTest('foobar001', 'foobar002');
doTest('foobar1', 'foobar2');
doTest('1', '2');
doTest('009', '010');
doTest('fo99obar99', 'fo99obar100');
