// Nice destructuring....

const test = (first, second, ...rem) => {
  console.log(first, second);
  console.log(rem);
};

test({ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 });
