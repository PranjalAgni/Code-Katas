function dataReverse(data) {
  let times = data.length / 8;
  let dataStr = data.join('');
  let start = 0;
  let res = '';
  while (times-- > 0) {
    let ans = dataStr.substring(start, start + 8);
    res = ans + res;
    start += 8;
  }

  return res.split('').map(function(num) {
    return parseInt(num);
  });
}

const data1 = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0
];
const data2 = [
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
];
console.log((dataReverse(data1), data2));
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
console.log(dataReverse(data3), data4);
