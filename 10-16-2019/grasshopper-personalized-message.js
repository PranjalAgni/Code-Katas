function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel'), 'Hello boss');
console.log(greet('Greg', 'Daniel'), 'Hello guest');
