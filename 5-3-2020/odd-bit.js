function anyOdd(x) {
  const bits = x.toString(2).split('').reverse();
  for (let index = 1; index < bits.length; index += 2) {
    if (bits[index] === '1') return 1;
  }
  return 0;
}

console.log(anyOdd(2863311530), 1);
console.log(anyOdd(128), 1);
console.log(anyOdd(131), 1);
console.log(anyOdd(2), 1);
console.log(anyOdd(24082), 1);
console.log(anyOdd(0), 0);
console.log(anyOdd(85), 0);
console.log(anyOdd(1024), 0);
console.log(anyOdd(1), 0);
console.log(anyOdd(1365), 0);
