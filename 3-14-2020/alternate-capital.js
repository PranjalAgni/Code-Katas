function capitalize(s) {
  let first = '';
  let second = '';
  for (let i = 0; i < s.length; i++) {
    if ((i & 1) === 0) {
      first += s.charAt(i).toUpperCase();
      second += s.charAt(i);
    } else {
      first += s.charAt(i);
      second += s.charAt(i).toUpperCase();
    }
  }

  return [first, second];
}

console.log(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
