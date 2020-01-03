function houseNumbersSum(inputArray) {
  //coding and coding..

  const answer = inputArray.reduce((currentResult, houseNum, idx, array) => {
    if (houseNum === 0) array.splice(1);
    currentResult += houseNum;
    return currentResult;
  }, 0);
  return answer;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]), 11);
console.log(houseNumbersSum([4, 2, 1, 6, 0]), 13);
console.log(houseNumbersSum([4, 1, 2, 3, 0, 10, 2]), 10);
console.log(houseNumbersSum([0, 1, 2, 3, 4, 5]), 0);
