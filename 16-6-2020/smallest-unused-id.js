function comprator(a, b) {
  return a - b;
}

function preProcessInput(arr) {
  arr.sort(comprator);
  return [...new Set(arr)];
}
function nextId(ids) {
  const cleanIds = preProcessInput(ids);
  let start = cleanIds[0];
  if (start > 0 && start !== 0) return 0;
  for (let i = 1; i < cleanIds.length; i++) {
    if (cleanIds[i] !== start + 1) {
      return start + 1;
    }
    start += 1;
  }

  return cleanIds[cleanIds.length - 1] + 1;
}

console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]), 11);
