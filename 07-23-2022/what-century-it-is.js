// Time: O(N) | Space: O(1)
// Implementation problem
function addSuffix(year) {
  if (year <= 20) return 'th';
  const lastDigit = year % 10;
  const suffixes = ['st', 'nd', 'rd', 'th'];
  return suffixes[lastDigit - 1] ?? 'th';
}

function isAlreadyCentury(year) {
  return year.substr(2, 2) === '00';
}

function whatCentury(year) {
  if (isAlreadyCentury(year)) return year + addSuffix(parseInt(year));
  const lastTwoDigits = parseInt(year.substr(2, 2));
  const numYearsToMakeItCentury = 100 - lastTwoDigits;
  const itsCenturyYear = parseInt(year) + numYearsToMakeItCentury;
  const answer = itsCenturyYear.toString().substring(0, 2);
  return answer + addSuffix(parseInt(answer));
}

console.log(
  whatCentury('1999'),
  '20th',
  "With input '1999' solution produced wrong output"
);
console.log(
  whatCentury('2011'),
  '21st',
  "With input '2011' solution produced wrong output"
);
console.log(
  whatCentury('2154'),
  '22nd',
  "With input '2154' solution produced wrong output"
);
console.log(
  whatCentury('2259'),
  '23rd',
  "With input '2259' solution produced wrong output"
);
console.log(
  whatCentury('1234'),
  '13th',
  "With input '1234' solution produced wrong output"
);
console.log(
  whatCentury('1023'),
  '11th',
  "With input '1023' solution produced wrong output"
);
console.log(
  whatCentury('2000'),
  '20th',
  "With input '2000' solution produced wrong output"
);
