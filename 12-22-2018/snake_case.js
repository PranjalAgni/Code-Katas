function toSnakeCase([first, ...rest]) {
  rest.map((c, i) => {
    if (c >= 'A' && c <= 'Z') {
      rest[i] = '_' + c.toLowerCase();
    }
  });

  return first.toLowerCase() + rest.join('');
}

function toUnderscore(string) {
  if (typeof string === 'number') {
    return string.toString();
  }
  return toSnakeCase(string);
}

console.log(toUnderscore('HelloWorld'));
