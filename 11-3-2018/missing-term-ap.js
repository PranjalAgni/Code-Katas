var findMissing = function(list) {
  console.log(list);
  let d = Math.floor((list[list.length - 1] - list[0]) / list.length);
  console.log(d);
  let ele = 0;
  for (let i = 1; i < list.length; i++) {
    ele = list[0] + i * d;
    console.log(ele);
    if (ele !== list[i]) {
      return ele;
    }
  }
};

console.log(findMissing([1, 7, 19]), 13);
