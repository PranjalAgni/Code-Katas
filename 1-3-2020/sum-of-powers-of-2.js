// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
  let array = [];
  let start = 1;
  while (start <= n) {
    array.push(start);
    start *= 2;
  }

  let answer = [];
  let sum = 0;
  let idx = array.length - 1;
  let target = n;
  while (sum != n && idx >= 0) {
    if (array[idx] <= target) {
      answer.push(array[idx]);
      sum += array[idx];
      target -= array[idx];
    }
    idx -= 1;
  }

  return answer.reverse();
};
console.log(powers(1));
console.log(powers(8));
console.log(powers(688));
