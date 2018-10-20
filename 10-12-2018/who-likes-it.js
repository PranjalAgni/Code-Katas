function likes(names) {
  len = names.length;

  if (len === 0) {
    return 'no one likes this';
  } else if (len === 1) {
    return `${names[0]} likes this`;
  } else if (len === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (len === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${len - 2} others like this`;
  }
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(
  likes(['Alex', 'Jacob', 'Mark', 'Max']),
  'Alex, Jacob and 2 others like this'
);
