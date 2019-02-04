/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
  };
  
  // Should return new function with resolved dependencies
  DI.prototype.inject = function (func) {
      var methods = func.toString().match(/function\s?\((.+)\)\s?{/);
    methods = methods && methods[1].split(",").map(function(i) { return i.replace(/\s+/, ''); });
    var funcs = [];
    
    for (var i = 0; methods && i < methods.length; i++) {
        funcs.push(this.dependency[methods[i]]);
    }
   
    return function() {
        return func.apply(func, funcs);
    };
  }

var deps = {
  dep1: function() {
    return 'this is dep1';
  },
  dep2: function() {
    return 'this is dep2';
  },
  dep3: function() {
    return 'this is dep3';
  },
  dep4: function() {
    return 'this is dep4';
  }
};

var di = new DI(deps);

var myFunc = di.inject(function(dep3, dep1, dep2) {
  return [dep1(), dep2(), dep3()].join(' -> ');
});

console.log(myFunc, 'this is dep1 -> this is dep2 -> this is dep3');
