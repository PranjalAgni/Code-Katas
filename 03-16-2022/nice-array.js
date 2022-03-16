function isNice(arr) {
  if (!arr.length) return false;
  const hashMap = new Map();
  for (const elt of arr) {
    hashMap.set(elt, true);
  }

  for (const elt of arr) {
    if (!hashMap.has(elt + 1) && !hashMap.has(elt - 1)) return false;
  }

  return true;
}

console.log(isNice([2, 10, 9, 3]), true);
console.log(isNice([3, 4, 5, 7]), false);
console.log(isNice([]), false);
