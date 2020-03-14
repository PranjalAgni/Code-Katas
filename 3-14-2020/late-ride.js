function sumDigits(num) {
  const numStr = num.toString();
  const sum = numStr.split('').reduce((sum, char) => {
    sum += parseInt(char);
    return sum;
  }, 0);

  return sum;
}

function lateRide(n) {
  const hours = Math.floor(n / 60);
  const mins = n % 60;
  return sumDigits(hours) + sumDigits(mins);
}

console.log(lateRide(240), 4);
console.log(lateRide(808), 14);
console.log(lateRide(1439), 19);
console.log(lateRide(0), 0);
console.log(lateRide(23), 5);
console.log(lateRide(8), 8);
