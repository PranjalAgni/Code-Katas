function arrayPlusArray(arr1, arr2) {
  const sum = arr1.reduce((currSum, elt, idx) => {
    currSum += elt + arr2[idx];
    return currSum;
  }, 0);

  return sum;
}
