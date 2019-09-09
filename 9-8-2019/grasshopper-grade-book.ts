export function getGrade(a: number, b: number, c: number) {
  // your code here
  const result: number = Math.round((a + b + c) / 3);
  console.log(result);
  if (result >= 90 && result <= 100) {
    return 'A';
  } else if (result >= 80 && result <= 89) {
    return 'B';
  } else if (result >= 70 && result <= 79) {
    return 'C';
  } else if (result >= 60 && result <= 69) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93), 'A');
console.log(getGrade(100, 85, 96), 'A');
console.log(getGrade(92, 93, 94), 'A');
console.log(getGrade(100, 100, 100), 'A');
console.log(getGrade(70, 70, 100), 'B');
console.log(getGrade(82, 85, 87), 'B');
console.log(getGrade(84, 79, 85), 'B');
