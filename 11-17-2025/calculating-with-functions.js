function operator(args, value) {
  const hasArgs = args.length > 0;
  const leftOperand = value;
  if (hasArgs) {
    const [operator, rightOperand] = args[0];
    return calculate(leftOperand, operator, rightOperand);
  }
  return leftOperand;
}

function calculate(leftOperand, operator, rightOperand) {
  const operatorCalculationMapping = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b),
  };

  return operatorCalculationMapping[operator](leftOperand, rightOperand);
}

function zero() {
  return operator(arguments, 0);
}

function one() {
  return operator(arguments, 1);
}

function two() {
  return operator(arguments, 2);
}
function three() {
  return operator(arguments, 3);
}
function four() {
  return operator(arguments, 4);
}
function five() {
  return operator(arguments, 5);
}
function six() {
  return operator(arguments, 6);
}
function seven() {
  return operator(arguments, 7);
}
function eight() {
  return operator(arguments, 8);
}
function nine() {
  return operator(arguments, 9);
}

function plus(args) {
  console.log({ args, arguments__o: arguments });
  const rightOperand = args;
  return ['+', rightOperand];
}

function minus(args) {
  const rightOperand = args;
  return ['-', rightOperand];
}

function times(args) {
  const rightOperand = args;
  return ['*', rightOperand];
}

function dividedBy(args) {
  const rightOperand = args;
  return ['/', rightOperand];
}
