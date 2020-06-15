function positiveSum(arr) {
  let sum = 0;
  arr.forEach((elt) => {
    sum += elt > 0 ? elt : 0;
  });

  return sum;
}
