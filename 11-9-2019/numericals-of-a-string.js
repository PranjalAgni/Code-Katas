function numericals(s) {
  let recordMap = {};
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let current = s[i];

    if (recordMap[current]) {
      recordMap[current] += 1;
    } else {
      recordMap[current] = 1;
    }

    answer += recordMap[current];
  }

  return answer; // result
}

function numericals(s) {
  let result = '';
  s.split('').reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue]
      ? accumulator[currentValue] + 1
      : 1;

    result += accumulator[currentValue];
    return accumulator;
  }, {});
  return result;
}

console.log(numericals('Hello, World!'), '1112111121311');
console.log(
  numericals("Hello, World! It's me, JomoPipi!"),
  '11121111213112111131224132411122'
);
console.log(numericals('hello hello'), '11121122342');
console.log(numericals('Hello'), '11121');
console.log(numericals('aaaaaaaaaaaa'), '123456789101112');
