var moveZeros = function(arr) {
  // TODO: Program me
  let res = [];
  let count_zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      res.push(arr[i]);
    } else {
      count_zeros++;
    }
  }

  while (count_zeros) {
    res.push(0);
    count_zeros -= 1;
  }
  return res;
};

// Second Solution
var moveZeros = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 0, 0, 0, 1, 0, 0, 0, 0]));
console.log(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, , 0, 9]));
