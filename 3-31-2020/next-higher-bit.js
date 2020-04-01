function dec2bin(num) {
  return (num >>> 0).toString(2);
}

function nextHigher(n) {
  // your code here
  let bits = dec2bin(n)
    .split('')
    .map(d => +d);

  const len = bits.length - 1;
  let pos = -1;
  let numOnes = -1;
  for (let i = len; i >= 0; i--) {
    if (i > 0 && bits[i] === 1 && bits[i - 1] === 0) {
      pos = i;
      numOnes += 1;
      break;
    }
  }

  if (pos === -1) {
    bits.push(0);
  } else {
    bits[pos - 1] = 1;
    bits[pos] = 0;
    let numZeroes = len - pos - numOnes;
    console.log(numOnes);
    if (numOnes !== 0 || numZeroes !== 0) {
      for (let idx = pos + 1; idx <= len; idx++) {
        bits[idx] = numZeroes <= 0 ? 1 : 0;
        numZeroes -= 1;
      }
    }
    console.log(bits);
  }

  const nextGreater = bits.join('');
  console.log(parseInt(nextGreater, 2));
  return parseInt(nextGreater, 2);
}

function nextHigher(n) {
  let a = ~n + 1;
  let t = a & n;
  let x = n + t;
  let y = x ^ n;
  y = y / t;
  y = y >> 2;
  return x + y;
}

console.log(nextHigher(128), 256);
console.log(nextHigher(1), 2);
console.log(nextHigher(1022), 1279);
console.log(nextHigher(127), 191);
console.log(nextHigher(1253343), 1253359);
