function add(n) {
  var fn = function(x) {
    return add(n + x);
  };

  fn.valueOf = function() {
    return n;
  };

  return fn;
}

console.log(add(1) == 1);
console.log(add(1)(2) == 3);
console.log(add(1)(2)(3) == 6);
