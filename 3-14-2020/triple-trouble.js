function tripleTrouble(one, two, three) {
  let result = '';
  const len = one.length;

  one.split('').forEach((elt, idx) => {
    result += elt + two[idx] + three[idx];
  });

  return result;
}

console.log(tripleTrouble('this', 'test', 'lock'), 'ttlheoiscstk');
console.log(tripleTrouble('aa', 'bb', 'cc'), 'abcabc');
console.log(tripleTrouble('Bm', 'aa', 'tn'), 'Batman');
console.log(tripleTrouble('LLh', 'euo', 'xtr'), 'LexLuthor');
