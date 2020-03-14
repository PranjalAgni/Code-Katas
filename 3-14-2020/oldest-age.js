// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  if (ages.length == 2) return ages;
  let firstLargest = -1;
  let secondLargest = -2;

  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = ages[i];
    }

    if (firstLargest > ages[i] && secondLargest < ages[i]) {
      secondLargest = ages[i];
    }
  }

  return [secondLargest, firstLargest];
}

console.log(twoOldestAges([2, 8]));
console.log(twoOldestAges([1, 4, 2, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
