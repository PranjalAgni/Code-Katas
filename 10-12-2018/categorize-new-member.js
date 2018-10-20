function openOrSenior(data) {
  let resList = [];
  data.forEach(list => {
    let d1 = list[0];
    let d2 = list[1];
    if (d1 >= 55 && d2 > 7) {
      resList.push('Senior');
    } else {
      resList.push('Open');
    }
  });

  return resList;
}

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), [
  'Open',
  'Senior',
  'Open',
  'Senior'
]);
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), [
  'Open',
  'Open',
  'Open',
  'Open'
]);
console.log(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), [
  'Senior',
  'Open',
  'Open',
  'Open'
]);
