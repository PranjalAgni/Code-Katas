const binaryArrayToNumber = arr => {
  // author @beingPranjal
  let exp = 3;
  let res = 0;
  arr.map(ele => {
    if (ele !== 0) {
      res += ele * Math.pow(2, exp);
    }

    exp -= 1;
  });

  return res;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);
