// Time: O(N) | Space: O(1)
function twoHighest(arr) {
  if (!arr.length || arr.length === 1) return arr;

  let [highest, secondHighest] = [arr[0], Number.MIN_SAFE_INTEGER];

  for (let idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > highest) {
      secondHighest = highest;
      highest = arr[idx];
    } else if (arr[idx] < highest && arr[idx] > secondHighest) {
      secondHighest = arr[idx];
    }
  }

  return [highest, secondHighest];
}

console.log(twoHighest([]), []);
console.log(twoHighest([15]), [15]);
console.log(twoHighest([15, 20, 20, 17]), [20, 17]);
