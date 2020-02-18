const types = {
  fire: 0,
  water: 1,
  grass: 2,
  electric: 3
};

const effictivenessMap = {
  fire: {
    super: [2],
    neutral: [3],
    less: [1]
  },
  water: {
    super: [0],
    neutral: [],
    less: [2, 3]
  },
  grass: {
    super: [1],
    neutral: [3],
    less: [0]
  },
  electric: {
    super: [1],
    neutral: [0, 2],
    less: []
  }
};

function calculateDamage(yourType, opponentType, attack, defense) {
  console.log(yourType + '  ' + opponentType);
  console.log(attack + '  ' + defense);

  let effictiveFactor = 0.5;
  const oppIdx = types[opponentType];

  if (effictivenessMap[yourType].super.includes(oppIdx)) {
    effictiveFactor = 2;
  } else if (effictivenessMap[yourType].neutral.includes(oppIdx)) {
    effictiveFactor = 1;
  }

  return 50 * (attack / defense) * effictiveFactor;
}

console.log(calculateDamage('fire', 'water', 100, 100), 25);
console.log(calculateDamage('grass', 'water', 100, 100), 100);
console.log(calculateDamage('electric', 'fire', 100, 100), 50);
console.log(calculateDamage('grass', 'electric', 57, 19), 150);
console.log(calculateDamage('grass', 'water', 40, 40), 100);
console.log(calculateDamage('grass', 'fire', 35, 5), 175);
console.log(calculateDamage('fire', 'electric', 10, 2), 250);
