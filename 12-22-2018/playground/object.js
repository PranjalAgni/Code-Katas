const test = (obj, ...rem) => {
  console.log(obj);
  console.log(rem);
};

test({ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 });
