function maxContiguousSum(arr) {
  let max_so_far = arr[0];
  let max_ending_here = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max_ending_here = Math.max(max_ending_here + arr[i], arr[i]);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return (max_so_far = max_so_far < 0 ? 0 : max_so_far);
}

console.log(maxContiguousSum([3, -4, 8, 7, -10, 19, -3]), 24);
console.log(maxContiguousSum([2, -3, -3, 9, -29, 8, -9]), 9);
console.log(maxContiguousSum([-1, -1, -1]), 0);
