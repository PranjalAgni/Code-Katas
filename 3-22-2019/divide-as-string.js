function divideOnce(a, b) {
  a = a.split('');
  b = b.split('');
  let a_len = a.length - 1;
  let b_len = b.length - 1;
  let res = [];
  let count = 0;
  while (b_len >= 0) {
    if (Number(a[a_len]) < Number(b[b_len])) {
      a[a_len - 1] = (Number(a[a_len - 1]) - 1);
      a[a_len] = (10 + Number(a[a_len]));
    }

    res[count] = a[a_len] - b[b_len];
    count += 1;
    a_len -= 1;
    b_len -= 1;
  }

  while (a_len >= 0) {
    res[count] = a[a_len];
    count += 1;
    a_len -= 1;
  }
  res = res.reverse();
  console.log(res.join(''));
  return res;
}

function divideStrings(a, b) {
  a = a.toString();
  b = b.toString();
  if (a.length <= 9 && b.length <= 9) {
    return [Math.floor(+a / +b).toString(), (+a % +b).toString()];
  }
  if (b.length > a.length) {
    return ['0', a];
  }
  let dividend = 0;
  let index = 0;
  let curr_quot = 0;
  let rem = '';
  let quotient = '';
  while (dividend <= Number(b)) {
    dividend = dividend * 10 + Number(a[index]);
    if (dividend >= Number(b)) {
      curr_quot = Math.floor(dividend / Number(b));
      quotient += curr_quot.toString();
      rem = (dividend - curr_quot * Number(b)).toString();
      dividend = +rem;
    }
    index += 1;
  }
  return [quotient, rem];
}

// console.log(divideStrings(0, 5));
// console.log(divideStrings(4, 5));
// console.log(divideStrings(10, 2));
// console.log(divideStrings(20, 3));
// console.log(divideStrings(60, 5));
// console.log(divideStrings(219, 11));
// console.log(divideStrings(729, 9));
// console.log(divideStrings(1000, 10));
// console.log(divideStrings(600001, 100));
// console.log(divideStrings(7177118188, 828220020200));
// console.log(divideStrings(11885463000,587800));

console.log(divideOnce('85774', '234'));

/**
 * Check which is bigger
 * Find the curr_quot
 *       - magnitude check
 */
