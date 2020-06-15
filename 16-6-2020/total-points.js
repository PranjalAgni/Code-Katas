function convertToNumber([a, b]) {
  return [parseInt(a), parseInt(b)];
}

function points(games) {
  let result = 0;

  games.forEach((game) => {
    const [a, b] = convertToNumber(game.split(':'));
    if (a > b) result += 3;
    if (a === b) result += 1;
  });

  return result;
}

console.log(
  points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])
);
