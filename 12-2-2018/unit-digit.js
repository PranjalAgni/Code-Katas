var lastDigit = function(str1, str2) {
  let num1 = Number(str1[str1.length - 1]);
  let num2 = Number(str2.slice(-2));

  let unit_num1 = num1;
    if (num1 === 0 && num2 === 0) {
        return 1;
    }
  if (
    unit_num1 === 0 ||
    unit_num1 === 1 ||
    unit_num1 === 5 ||
    unit_num1 === 6
  ) {
    return unit_num1;
  } else {
    let rem = num2 % 4 === 0 ? 4 : num2 % 4;
    console.log(rem);
    let answer = Math.pow(unit_num1, rem) % 10;
    return answer;
  }
};

console.log(lastDigit('4', '1'), 4);
console.log(lastDigit('4', '2'), 6);
console.log(lastDigit('9', '7'), 9);
console.log(lastDigit('0', '0'), 9);
console.log(lastDigit('10', '10000000000'), 0);
console.log(
  lastDigit(
    '1606938044258990275541962092341162602522202993782792835301376',
    '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376'
  ),
  6
);
console.log(
  lastDigit(
    '3715290469715693021198967285016729344580685479654510946723',
    '68819615221552997273737174557165657483427362207517952651'
  ),
  7
);
