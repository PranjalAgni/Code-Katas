function subStringGenerator(str) {
  let len = str.length;
  let hashSet = {
    a: [],
    push: function(elt) {
      if (!this.a.includes(elt)) this.a.push(elt);
    }
  };

  for (let start = 0; start < len; start++) {
    for (let pos = start; pos < len; pos++) {
      const curr = str.substring(start, pos + 1);
      hashSet.push(curr);
    }
  }

  console.log(hashSet.a.length);
  return hashSet.a;
}

console.log(subStringGenerator('cat'));
