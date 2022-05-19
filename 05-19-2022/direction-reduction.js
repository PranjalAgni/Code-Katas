/**
 *
 * @param {string} dirA
 * @param {string} dirB
 */
const checkIsOpposite = (dirA, dirB) => {
  const oppositeDirectionsList = [
    'north-south',
    'south-north',
    'east-west',
    'west-east',
  ];
  const currentDir = `${dirA.toLowerCase()}-${dirB.toLowerCase()}`;
  return oppositeDirectionsList.includes(currentDir);
};

function dirReduc(arr) {
  const stack = [];
  arr.forEach((element) => {
    if (stack.length && checkIsOpposite(element, stack[0])) {
      stack.pop();
    } else {
      stack.push(element);
    }
  });

  console.log(stack);
}

function doTest(input, expected) {
  const log = `for ${JSON.stringify(input)}\n`;
  const actual = dirReduc(input);
  console.log(actual, expected, log);
}

console.log(
  doTest(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'], ['WEST'])
);
console.log(
  doTest(['NORTH', 'WEST', 'SOUTH', 'EAST'], ['NORTH', 'WEST', 'SOUTH', 'EAST'])
);
console.log(doTest(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'], []));
