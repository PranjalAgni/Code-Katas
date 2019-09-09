function isPossible(change, toReturn) {
  while (change['75'] > 0 && toReturn >= 75) {
    change['75'] -= 1;
    toReturn -= 75;
  }
  while (change['50'] > 0 && toReturn >= 50) {
    change['50'] -= 1;
    toReturn -= 50;
  }
  while (change['25'] > 0 && toReturn >= 25) {
    change['25'] -= 1;
    toReturn -= 25;
  }

  return toReturn == 0;
}
function tickets(peopleInLine) {
  let change = { '25': 0, '50': 0, '100': 0 };
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] == 25) {
      change['25'] += 1;
    } else {
      change[peopleInLine[i].toString()] += 1;
      console.log(change);
      const toReturn = peopleInLine[i] - 25;
      if (!isPossible(change, toReturn)) {
        return 'NO';
      }
    }
  }
  return 'YES';
}

console.log(tickets([25, 25, 50, 50]), 'YES');
console.log(tickets([25, 100]), 'NO');
