var createIterator = function(func, n) {
  // TODO: Write code here to return a function
  // that executes *func*, *n* times on a supplied input

  return function() {
    let elt = func(...arguments);
    for (let i = 0; i < n - 1; i++) {
      elt = func(elt);
      //console.log(func(elt));
    }
    return elt;
  };
};
