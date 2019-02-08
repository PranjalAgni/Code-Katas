function clean(res) {
    if(res.split('')[0] === '0') {
        res = res.split('');
       res.splice(0,1);
       res = res.join('')
    }
    return res;
}
function sumStrings(a, b) {
  let a_len = a.length - 1;
  let b_len = b.length - 1;
  let carry = 0;
  let res = '';
  while (a_len >= 0 && b_len >= 0) {
    let sum = carry + (+a[a_len] + +b[b_len]);
    carry = 0;
    if (sum > 9) {
      sum = sum.toString();
      carry = +sum[0];
      sum = +sum[1];
    }
    res += sum.toString();
    a_len -= 1;
    b_len -= 1;
  }

  for (let i = a_len; i >= 0; i--) {
    let sum = carry + +a[i];
    carry = 0;
    if (sum > 9) {
      sum = sum.toString();
      carry = +sum[0];
      sum = +sum[1];
    }
    res += sum.toString();
  }

  for (let i = b_len; i >= 0; i--) {
    let sum = carry + +b[i];
    carry = 0;
    if (sum > 9) {
      sum = sum.toString();
      carry = +sum[0];
      sum = +sum[1];
    }
    res += sum.toString();
  }
  if (carry > 0) res += carry;

  return clean(res.split('').reverse().join(''));
}

console.log(sumStrings('00103', '08567'), '8670');

