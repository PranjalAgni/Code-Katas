function makeSum(arr) {
  return arr.reduce((curr, sum) => {
    sum += curr;
    return sum;
  }, 0);
}

function loneliest(number) {
  const numArr = number
    .toString()
    .split('')
    .map((x) => +x);

  let minLonlyValue = Number.MAX_VALUE;
  let oneLonlyValue = minLonlyValue;

  for (let idx = 0; idx < numArr.length; idx++) {
    const current = numArr[idx];
    if (current === 0) continue;
    let leftIdx = idx - current;
    if (leftIdx < 0) leftIdx = 0;
    const leftVisible = numArr.slice(leftIdx, idx);
    const rightVisible = numArr.slice(idx + 1, current + idx + 1);
    const lonlyValue = makeSum(leftVisible) + makeSum(rightVisible);
    minLonlyValue = Math.min(lonlyValue, minLonlyValue);
    if (current === 1) oneLonlyValue = minLonlyValue;
  }

  return oneLonlyValue <= minLonlyValue;
}

console.log(loneliest(60989), true);
console.log(loneliest(123456), true);
console.log(loneliest(8854778), false);
console.log(loneliest(65432165432), false);
console.log(loneliest(0), false);
console.log(loneliest(1), true);
console.log(loneliest(11111), true);
