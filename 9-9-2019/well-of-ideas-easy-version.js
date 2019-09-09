function well(x) {
  let good = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') good++;
  }
  if (good > 2) {
    return 'I smell a series!';
  } else if (good >= 1) {
    return 'Publish!';
  } else {
    return 'Fail!';
  }
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(
  well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
  'I smell a series!'
);
