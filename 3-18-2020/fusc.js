function fusc(n) {
  if (n === 0 || n === 1) return n;
  if (n % 2 === 0) return fusc(Math.floor(n / 2));
  else return fusc(Math.floor((n - 1) / 2)) + fusc(Math.floor((n - 1) / 2) + 1);
}

console.log(fusc(0), 0);
console.log(fusc(1), 1);
console.log(fusc(85), 21);

let solutions = [0, 1, 1, 2, 1, 3, 2, 3, 1, 4, 3, 5, 2, 5, 3, 4, 1, 5, 4, 7, 3];
for (let i = 0; i < solutions.length; i++) {
  console.log(fusc(i), solutions[i]);
}
